import { z } from "zod";

export const inquiryTypes = [
  "host_city_venue",
  "sponsorship",
  "cultural_educational",
  "logistics_hospitality",
  "media",
  "general",
] as const;

export type InquiryType = (typeof inquiryTypes)[number];

export const locales = ["en", "ar", "de", "fr"] as const;
export type Locale = (typeof locales)[number];

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  organisation: z.string().trim().min(2).max(150),
  email: z.string().trim().email().max(200),
  location: z.union([z.literal(""), z.string().trim().max(120)]).optional(),
  inquiryType: z.enum(inquiryTypes),
  message: z.string().trim().min(20).max(3000),
  consent: z.literal(true),
  /** Honeypot — must stay empty. Real users never see this field. */
  website: z.string().max(0).optional().or(z.literal("")),
  locale: z.enum(locales).default("en"),
});

export type ContactInput = z.infer<typeof contactSchema>;
