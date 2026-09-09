import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

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
  } = req.body || {};

  if (!name || !phone || !email) {
    return res.status(400).json({
      message: "Required fields are missing",
    });
  }

  try {
    const { error } = await resend.emails.send({
      from: "Repatria Europe <website@repatria-europe.com>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `Нова заявка — ${escapeHtml(name)}`,
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
    });

    if (error) {
      console.error(error);
      return res.status(500).json({
        message: "Email sending failed",
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
}
