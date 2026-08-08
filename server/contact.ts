import { Router } from "express";
import { contactSchema } from "../shared/contact";
import { saveInquiry } from "./db";
import { isRateLimited } from "./rate-limit";

export const contactRouter = Router();

async function sendNotification(input: {
  name: string;
  organisation: string;
  email: string;
  location: string | null;
  inquiryType: string;
  message: string;
  locale: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "STRELLER Website <onboarding@resend.dev>",
        to: [to],
        reply_to: input.email,
        subject: `New inquiry (${input.inquiryType}) — ${input.organisation}`,
        text: [
          `Name: ${input.name}`,
          `Organisation: ${input.organisation}`,
          `Email: ${input.email}`,
          `Location: ${input.location ?? "—"}`,
          `Inquiry type: ${input.inquiryType}`,
          `Locale: ${input.locale}`,
          "",
          input.message,
        ].join("\n"),
      }),
    });
    if (!response.ok) {
      console.error("Resend notification failed:", response.status, await response.text());
    }
  } catch (error) {
    console.error("Resend notification error:", error);
  }
}

contactRouter.post("/", async (req, res) => {
  const ip = req.ip ?? "unknown";
  if (isRateLimited(ip)) {
    res.status(429).json({ ok: false, error: "rate_limited" });
    return;
  }

  // Honeypot: reject silently-shaped bots that fill the hidden field.
  if (typeof req.body?.website === "string" && req.body.website.length > 0) {
    res.status(400).json({ ok: false, error: "invalid" });
    return;
  }

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({
      ok: false,
      error: "validation",
      fields: parsed.error.flatten().fieldErrors,
    });
    return;
  }

  const { name, organisation, email, location, inquiryType, message, locale } = parsed.data;
  const userAgent = req.get("user-agent")?.slice(0, 300) ?? null;

  try {
    saveInquiry({
      name,
      organisation,
      email,
      location: location ? location : null,
      inquiryType,
      message,
      locale,
      userAgent,
    });
  } catch (error) {
    console.error("Failed to save inquiry:", error);
    res.status(500).json({ ok: false, error: "server" });
    return;
  }

  // Email notification is best-effort; SQLite persistence is the source of truth.
  void sendNotification({
    name,
    organisation,
    email,
    location: location ? location : null,
    inquiryType,
    message,
    locale,
  });

  res.status(200).json({ ok: true });
});
