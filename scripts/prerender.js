import puppeteer from "puppeteer";
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";

const routes = ["/", "/about", "/privacy_policy"];
const port = 4173;
const baseUrl = `http://localhost:${port}`;

const server = spawn(
  "npx",
  ["vite", "preview", "--host", "127.0.0.1", "--port", String(port)],
  {
    stdio: "ignore",
    shell: true,
  },
);

const waitForServer = async () => {
  for (let i = 0; i < 30; i++) {
    try {
      const response = await fetch(baseUrl);

      if (response.ok) return;
    } catch {}

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error("Vite preview did not start");
};

try {
  await waitForServer();

  const browser = await puppeteer.launch({
    headless: true,
  });

  for (const route of routes) {
    const page = await browser.newPage();

    await page.goto(`${baseUrl}${route}`, {
      waitUntil: "networkidle0",
    });

    await page.waitForSelector("#root");

    const html = (await page.content()).replaceAll("http://localhost:4173", "");

    const output =
      route === "/" ? "dist/index.html" : `dist${route}/index.html`;

    if (route !== "/") {
      await mkdir(`dist${route}`, {
        recursive: true,
      });
    }

    await writeFile(output, html);

    console.log(`Prerendered: ${route} -> ${output}`);

    await page.close();
  }

  await browser.close();
} finally {
  server.kill();
}
