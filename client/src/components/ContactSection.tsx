import { useRef, useState, type FormEvent } from "react";
import type { InquiryType } from "@shared/contact";
import { inquiryTypes } from "@shared/contact";
import { useLocale } from "@/lib/i18n";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";

type FieldErrors = Partial<
  Record<"name" | "organisation" | "email" | "inquiryType" | "message" | "consent", string>
>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const { t, locale } = useLocale();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const startedRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onFirstInteraction = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      track("contact_form_start");
    }
  };

  function validate(data: {
    name: string;
    organisation: string;
    email: string;
    inquiryType: string;
    message: string;
    consent: boolean;
  }): FieldErrors {
    const next: FieldErrors = {};
    if (data.name.trim().length < 2 || data.name.trim().length > 100) next.name = t.contact.errors.name;
    if (data.organisation.trim().length < 2 || data.organisation.trim().length > 150)
      next.organisation = t.contact.errors.organisation;
    if (!EMAIL_RE.test(data.email.trim())) next.email = t.contact.errors.email;
    if (!(inquiryTypes as readonly string[]).includes(data.inquiryType))
      next.inquiryType = t.contact.errors.inquiryType;
    if (data.message.trim().length < 20 || data.message.trim().length > 3000)
      next.message = t.contact.errors.message;
    if (!data.consent) next.consent = t.contact.errors.consent;
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      organisation: String(fd.get("organisation") ?? ""),
      email: String(fd.get("email") ?? ""),
      location: String(fd.get("location") ?? ""),
      inquiryType: String(fd.get("inquiryType") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
    };

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name.trim(),
          organisation: data.organisation.trim(),
          email: data.email.trim(),
          location: data.location.trim(),
          inquiryType: data.inquiryType as InquiryType,
          message: data.message.trim(),
          consent: true,
          website: data.website,
          locale,
        }),
      });
      if (response.ok) {
        track("contact_form_submit_success");
        setStatus("success");
        return;
      }
      track("contact_form_submit_error", { status: response.status });
      setServerError(
        response.status === 429 ? t.contact.errors.rateLimited : t.contact.errors.generic,
      );
      setStatus("error");
    } catch {
      track("contact_form_submit_error", { status: 0 });
      setServerError(t.contact.errors.generic);
      setStatus("error");
    }
  }

  // The consent sentence contains a {privacyPolicy} placeholder so each
  // locale controls where the link sits grammatically.
  const [consentBefore, consentAfter = ""] = t.contact.fields.consent.split("{privacyPolicy}");

  const inputClass =
    "w-full rounded-[10px] border border-lapis/25 bg-paper px-4 py-3 text-base text-charcoal placeholder:text-muted focus:border-turquoise-deep";
  const labelClass = "mb-1.5 block text-sm font-semibold text-lapis";
  const errorClass = "mt-1.5 text-sm font-medium text-terracotta";

  return (
    <section id="contact" className="bg-papyrus py-20 md:py-28">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-gold-deep">{t.contact.eyebrow}</p>
            <div className="gold-rule mt-4" aria-hidden="true" />
            <h2 className="font-display mt-6 text-3xl font-bold leading-tight text-lapis md:text-4xl">
              {t.contact.heading}
            </h2>
            <p className="mt-5 max-w-prose leading-relaxed">{t.contact.body}</p>
          </Reveal>

          <Reveal delay={100}>
            <div aria-live="polite">
              {status === "success" ? (
                <div className="rounded-xl border border-gold/40 bg-paper p-8">
                  <svg
                    className="text-turquoise-deep"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 16.5l5 5L23 11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="mt-4 text-lg font-medium leading-relaxed text-lapis">
                    {t.contact.success}
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={onSubmit} noValidate onInput={onFirstInteraction}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-name" className={labelClass}>
                        {t.contact.fields.name}
                      </label>
                      <input
                        id="cf-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        maxLength={100}
                        className={inputClass}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "cf-name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="cf-name-error" className={errorClass}>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="cf-organisation" className={labelClass}>
                        {t.contact.fields.organisation}
                      </label>
                      <input
                        id="cf-organisation"
                        name="organisation"
                        type="text"
                        autoComplete="organization"
                        required
                        maxLength={150}
                        className={inputClass}
                        aria-invalid={Boolean(errors.organisation)}
                        aria-describedby={errors.organisation ? "cf-organisation-error" : undefined}
                      />
                      {errors.organisation && (
                        <p id="cf-organisation-error" className={errorClass}>
                          {errors.organisation}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="cf-email" className={labelClass}>
                        {t.contact.fields.email}
                      </label>
                      <input
                        id="cf-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={200}
                        className={inputClass}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "cf-email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="cf-email-error" className={errorClass}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="cf-location" className={labelClass}>
                        {t.contact.fields.location}{" "}
                        <span className="font-normal text-muted">{t.contact.fields.locationOptional}</span>
                      </label>
                      <input
                        id="cf-location"
                        name="location"
                        type="text"
                        autoComplete="country-name"
                        maxLength={120}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="cf-inquiryType" className={labelClass}>
                      {t.contact.fields.inquiryType}
                    </label>
                    <select
                      id="cf-inquiryType"
                      name="inquiryType"
                      required
                      defaultValue=""
                      className={`${inputClass} cursor-pointer`}
                      aria-invalid={Boolean(errors.inquiryType)}
                      aria-describedby={errors.inquiryType ? "cf-inquiryType-error" : undefined}
                    >
                      <option value="" disabled>
                        {t.contact.selectPlaceholder}
                      </option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {t.contact.inquiryOptions[type]}
                        </option>
                      ))}
                    </select>
                    {errors.inquiryType && (
                      <p id="cf-inquiryType-error" className={errorClass}>
                        {errors.inquiryType}
                      </p>
                    )}
                  </div>

                  <div className="mt-5">
                    <label htmlFor="cf-message" className={labelClass}>
                      {t.contact.fields.message}
                    </label>
                    <textarea
                      id="cf-message"
                      name="message"
                      required
                      minLength={20}
                      maxLength={3000}
                      rows={6}
                      className={inputClass}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "cf-message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="cf-message-error" className={errorClass}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Honeypot — hidden from real users and assistive tech.
                      Uses clip-based hiding: huge negative offsets create scrollable
                      overflow in RTL documents and break the layout. */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      width: 1,
                      height: 1,
                      margin: -1,
                      padding: 0,
                      border: 0,
                      overflow: "hidden",
                      clipPath: "inset(50%)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <label htmlFor="cf-website">Website</label>
                    <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="mt-5">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#2E6F77]"
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? "cf-consent-error" : undefined}
                      />
                      <span className="text-sm leading-relaxed text-charcoal/90">
                        {consentBefore}
                        <a
                          href={`/${locale}/privacy`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-turquoise-deep underline underline-offset-2"
                        >
                          {t.contact.fields.consentPrivacyLabel}
                          <span className="sr-only"> ({t.a11y.externalNewTab})</span>
                        </a>
                        {consentAfter}
                      </span>
                    </label>
                    {errors.consent && (
                      <p id="cf-consent-error" className={errorClass}>
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary mt-7 w-full disabled:opacity-60 sm:w-auto"
                  >
                    {status === "submitting" ? t.contact.submitting : t.contact.submit}
                  </button>

                  {serverError && (
                    <p role="alert" className="mt-4 text-sm font-medium text-terracotta">
                      {serverError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
