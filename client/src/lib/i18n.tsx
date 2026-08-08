import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@shared/contact";
import { locales } from "@shared/contact";
import type { SiteContent } from "@/locales/types";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { de } from "@/locales/de";
import { fr } from "@/locales/fr";
import { track } from "./analytics";

export const contentByLocale: Record<Locale, SiteContent> = { en, ar, de, fr };

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  de: "Deutsch",
  fr: "Français",
};

export function getLocaleFromPath(): Locale {
  const segment = window.location.pathname.split("/")[1] ?? "";
  return (locales as readonly string[]).includes(segment) ? (segment as Locale) : "en";
}

interface LocaleContextValue {
  locale: Locale;
  t: SiteContent;
  dir: "ltr" | "rtl";
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value: LocaleContextValue = {
    locale,
    t: contentByLocale[locale],
    dir: locale === "ar" ? "rtl" : "ltr",
  };
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return value;
}

/** Full navigation so the server re-renders localized metadata; keeps the section anchor. */
export function switchLocale(next: Locale): void {
  track("language_switch", { to: next });
  window.location.assign(`/${next}${window.location.hash}`);
}
