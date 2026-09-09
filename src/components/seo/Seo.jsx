import { useEffect } from "react";

const SITE_URL = "https://repatria-europe.com";

const Seo = ({
  title,
  description,
  canonical = "/",
  image = "/og-image.png",
  noindex = false,
}) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector, attribute, value) => {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }

      Object.entries(attribute).forEach(([key, val]) => {
        element.setAttribute(key, val);
      });

      element.setAttribute("content", value);
    };

    const setLink = (rel, href) => {
      let element = document.head.querySelector(`link[rel="${rel}"]`);

      if (!element) {
        element = document.createElement("link");
        element.rel = rel;
        document.head.appendChild(element);
      }

      element.href = href;
    };

    const canonicalUrl = `${SITE_URL}${canonical}`;
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    setMeta('meta[name="description"]', { name: "description" }, description);

    setMeta(
      'meta[name="robots"]',
      { name: "robots" },
      noindex ? "noindex, follow" : "index, follow",
    );

    setMeta('meta[property="og:type"]', { property: "og:type" }, "website");

    setMeta('meta[property="og:title"]', { property: "og:title" }, title);

    setMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      description,
    );

    setMeta('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);

    setMeta('meta[property="og:image"]', { property: "og:image" }, imageUrl);

    setMeta(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      "Repatria Europe",
    );

    setMeta(
      'meta[name="twitter:card"]',
      { name: "twitter:card" },
      "summary_large_image",
    );

    setMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);

    setMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      description,
    );

    setMeta('meta[name="twitter:image"]', { name: "twitter:image" }, imageUrl);

    setLink("canonical", canonicalUrl);
  }, [title, description, canonical, image, noindex]);

  return null;
};

export default Seo;
