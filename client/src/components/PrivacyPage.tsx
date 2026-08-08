import type { Locale } from "@shared/contact";
import { LocaleProvider, contentByLocale } from "@/lib/i18n";
import { Footer } from "./Footer";

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = contentByLocale[locale];
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
            {t.privacy.title}
          </h1>
          <p className="mt-3 text-sm text-muted">{t.privacy.lastUpdated}</p>
          <p className="mt-6 leading-relaxed">{t.privacy.intro}</p>
          {t.privacy.sections.map((section) => (
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
