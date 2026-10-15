"use server";

import nodemailer from "nodemailer";
import { profile } from "@/data/resume";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = { name: 100, email: 150, message: 3000 };

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot field — real users never fill this hidden input, bots usually do.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in every field." };
  }
  if (
    name.length > MAX_LENGTH.name ||
    email.length > MAX_LENGTH.email ||
    message.length > MAX_LENGTH.message
  ) {
    return { status: "error", message: "One of the fields is too long." };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error(
      "Contact form: SMTP env vars are not configured. See .env.example."
    );
    return {
      status: "error",
      message:
        "Email notifications aren't configured yet. Please reach out via WhatsApp instead.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: Number(SMTP_PORT ?? 587) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL || profile.contact.email,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>`,
    });

    return { status: "success", message: "Thanks! Your message has been sent." };
  } catch (error) {
    console.error("Contact form email failed to send:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }
}
