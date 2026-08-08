import type { Locale } from "@shared/contact";
import { locales } from "@shared/contact";
import { localeNames, switchLocale, useLocale } from "@/lib/i18n";

export function LanguageSwitch() {
  const { locale, t } = useLocale();

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t.a11y.languageLabel}</span>
      <select
        value={locale}
        onChange={(event) => switchLocale(event.target.value as Locale)}
        className="h-11 cursor-pointer appearance-none rounded-[10px] border border-gold/40 bg-transparent pe-8 ps-3 text-sm font-medium text-papyrus focus:border-gold [&>option]:text-charcoal"
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeNames[code]}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute end-3 text-gold"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
      >
        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </label>
  );
}
