import { useLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { t, locale } = useLocale();
  return (
    <footer className="bg-navy-deep py-12 text-papyrus/80">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xl font-bold tracking-[0.08em] text-paper">STRELLER</p>
            <p className="mt-3 text-sm leading-relaxed">{t.footer.line1}</p>
            <p className="mt-1 text-sm leading-relaxed">{t.footer.line2}</p>
          </div>
          <a
            href={siteConfig.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] items-center text-sm font-semibold text-gold-soft underline-offset-4 hover:underline"
          >
            pharaonika.com
            <span className="sr-only"> ({t.a11y.externalNewTab})</span>
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-gold/15 pt-6 text-xs text-papyrus/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.companyName}
          </span>
          <a
            href={`/${locale}/privacy`}
            className="min-h-[44px] text-xs font-semibold text-papyrus/70 underline-offset-4 hover:underline sm:flex sm:items-center"
          >
            {t.footer.privacyLink}
          </a>
        </div>
      </div>
    </footer>
  );
}
