import type { Locale } from "@shared/contact";
import { LocaleProvider, contentByLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { Footer } from "./Footer";

export function LegalPage({ locale }: { locale: Locale }) {
  const t = contentByLocale[locale];
  const info = siteConfig.legalInfo;
  const rows: { label: string; value: string; href?: string }[] = [
    { label: t.legal.labels.company, value: info.legalName },
    { label: t.legal.labels.address, value: info.address },
    { label: t.legal.labels.representative, value: info.representative },
    { label: t.legal.labels.register, value: info.commercialRegister },
    { label: t.legal.labels.taxId, value: info.taxId },
    { label: t.legal.labels.email, value: info.email, href: `mailto:${info.email}` },
    { label: t.legal.labels.phone, value: info.phone, href: `tel:${info.phone.replace(/\s/g, "")}` },
  ];
  return (
    <LocaleProvider locale={locale}>
      <a href="#main" className="skip-link">
        {t.a11y.skipToContent}
      </a>
      <header className="border-b border-lapis/10 bg-paper">
        <div className="container-site flex min-h-[64px] items-center justify-between py-3">
          <a href={`/${locale}`} className="wordmark font-display text-lg font-bold tracking-[0.08em] text-lapis">
            STRELLER
          </a>
          <a
            href={`/${locale}`}
            className="text-sm font-semibold text-turquoise-deep underline-offset-4 hover:underline"
          >
            {t.privacy.backToHome}
          </a>
        </div>
      </header>
      <main id="main" className="bg-papyrus py-16 md:py-24">
        <div className="container-site max-w-3xl">
          <p className="eyebrow text-gold-deep">STRELLER</p>
          <h1 className="font-display mt-4 text-3xl font-bold leading-tight text-lapis md:text-4xl">
            {t.legal.title}
          </h1>
          <p className="mt-6 leading-relaxed">{t.legal.intro}</p>

          <section className="mt-10 rounded-lg border border-lapis/15 bg-paper p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-lapis">{t.legal.companyHeading}</h2>
            <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-[auto_1fr]">
              {rows.map((row) => (
                <div key={row.label} className="contents">
                  <dt className="text-sm font-semibold text-muted sm:py-1">{row.label}</dt>
                  {/* Official values are Latin-script; force LTR so numbers
                      (e.g. "4 Omar Lotfy Street") don't reorder in Arabic. */}
                  <dd className="text-sm leading-relaxed sm:py-1">
                    {row.href ? (
                      <a
                        href={row.href}
                        dir="ltr"
                        className="inline-block font-medium text-turquoise-deep underline-offset-4 hover:underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span dir="ltr" className="inline-block">
                        {row.value}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {t.legal.sections.map((section) => (
            <section key={section.title} className="mt-10">
              <h2 className="font-display text-xl font-bold text-lapis">{section.title}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="mt-3 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </LocaleProvider>
  );
}
