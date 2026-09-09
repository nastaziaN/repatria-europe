import { CONTACTS } from "../src/constants/general/Constants";

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const json = (data, status = 200) => Response.json(data, { status });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== "/api/send-request") {
      return env.ASSETS.fetch(request);
    }

    if (request.method !== "POST") {
      return json({ message: "Method not allowed" }, 405);
    }

    try {
      const {
        name,
        phone,
        email,
        country,
        destination_country,
        city,
        destination_city,
        transport,
        date,
        coffin,
        heard,
        additional_info,
      } = await request.json();

      if (!name || !phone || !email) {
        return json({ message: "Required fields are missing" }, 400);
      }

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Repatria Europe <website@repatria-europe.com>",
          to: [CONTACTS.email.value],
          reply_to: email,
          subject: `Нова заявка — ${name}`,
          html: `
            <h2>Нова заявка з сайту Repatria Europe</h2>
            <p><strong>Ім'я:</strong> ${escapeHtml(name)}</p>
            <p><strong>Телефон:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <hr>
            <p><strong>Країна відправлення:</strong> ${escapeHtml(country || "-")}</p>
            <p><strong>Місто відправлення:</strong> ${escapeHtml(city || "-")}</p>
            <p><strong>Країна призначення:</strong> ${escapeHtml(destination_country || "-")}</p>
            <p><strong>Місто призначення:</strong> ${escapeHtml(destination_city || "-")}</p>
            <p><strong>Транспорт:</strong> ${escapeHtml(transport || "-")}</p>
            <p><strong>Дата:</strong> ${escapeHtml(date || "-")}</p>
            <p><strong>Тип поховання:</strong> ${escapeHtml(coffin || "-")}</p>
            <p><strong>Як дізнались:</strong> ${escapeHtml(heard || "-")}</p>
            <p><strong>Додаткова інформація:</strong></p>
            <p>${escapeHtml(additional_info || "-")}</p>
          `,
        }),
      });

      if (!response.ok) {
        console.error("Resend:", await response.text());
        return json({ message: "Email sending failed" }, 500);
      }

      return json({ success: true });
    } catch (error) {
      console.error(error);
      return json({ message: "Server error" }, 500);
    }
  },
};
