import type { Locale } from "../shared/contact";
import { locales } from "../shared/contact";

export { locales };
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Pick the best locale from an Accept-Language header. */
export function detectLocale(acceptLanguage: string | undefined): Locale {
  if (!acceptLanguage) return "en";
  const prefs = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";q=");
      const q = qPart ? parseFloat(qPart) : 1;
      return { tag: tag.trim().toLowerCase(), q: Number.isFinite(q) ? q : 0 };
    })
    .filter((pref) => pref.q > 0)
    .sort((a, b) => b.q - a.q);
  for (const { tag } of prefs) {
    const primary = tag.split("-")[0];
    if (isLocale(primary)) return primary;
  }
  return "en";
}

interface LocaleMeta {
  title: string;
  description: string;
  ogLocale: string;
}

const META: Record<Locale, LocaleMeta> = {
  en: {
    title: "STRELLER — Egyptian Cultural Experiences for Europe",
    description:
      "STRELLER is an Egyptian cultural-production company developing traveling exhibitions and cultural experiences for European cities, institutions and partners.",
    ogLocale: "en_US",
  },
  ar: {
    title: "شتريلا — تجارب ثقافية مصرية متنقلة لأوروبا",
    description:
      "شتريلا شركة مصرية للإنتاج الثقافي تطوّر معارض متنقلة وتجارب جماهيرية موجهة إلى المدن والمؤسسات والشركاء في أوروبا.",
    ogLocale: "ar_EG",
  },
  de: {
    title: "STRELLER — Ägyptische Kulturerlebnisse für Europa",
    description:
      "STRELLER ist ein ägyptisches Kulturproduktionsunternehmen, das Wanderausstellungen und Kulturerlebnisse für europäische Städte, Institutionen und Partner entwickelt.",
    ogLocale: "de_DE",
  },
  fr: {
    title: "STRELLER — Expériences culturelles égyptiennes pour l'Europe",
    description:
      "STRELLER est une société égyptienne de production culturelle qui développe des expositions itinérantes et des expériences culturelles pour les villes, institutions et partenaires européens.",
    ogLocale: "fr_FR",
  },
};

/**
 * Resolve the canonical site origin. SITE_URL must be an absolute http(s) URL;
 * anything else is rejected so malformed operational input can never reach
 * rendered markup. The returned value is always `origin` (scheme + host [+ port]),
 * which contains no characters requiring HTML/XML escaping.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.SITE_URL?.trim();
  if (fromEnv) {
    try {
      const parsed = new URL(fromEnv);
      if (parsed.protocol === "http:" || parsed.protocol === "https:") return parsed.origin;
      console.warn(`SITE_URL has unsupported protocol "${parsed.protocol}" — ignoring it.`);
    } catch {
      console.warn(`SITE_URL is not a valid absolute URL ("${fromEnv}") — ignoring it.`);
    }
  }
  const devDomain = process.env.REPLIT_DEV_DOMAIN;
  if (devDomain) return `https://${devDomain}`;
  return "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderMeta(template: string, locale: Locale): string {
  const meta = META[locale];
  const siteUrl = getSiteUrl();
  const canonical = siteUrl ? `${siteUrl}/${locale}` : "";

  const headParts: string[] = [];
  if (canonical) {
    headParts.push(`<link rel="canonical" href="${canonical}" />`);
    for (const alt of locales) {
      headParts.push(
        `<link rel="alternate" hreflang="${alt}" href="${siteUrl}/${alt}" />`,
      );
    }
    headParts.push(`<link rel="alternate" hreflang="x-default" href="${siteUrl}/en" />`);
  }
  headParts.push(`<meta property="og:type" content="website" />`);
  headParts.push(`<meta property="og:site_name" content="STRELLER" />`);
  headParts.push(`<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  headParts.push(
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
  );
  headParts.push(`<meta property="og:locale" content="${meta.ogLocale}" />`);
  if (canonical) headParts.push(`<meta property="og:url" content="${canonical}" />`);
  if (siteUrl) {
    headParts.push(`<meta property="og:image" content="${siteUrl}/assets/hero-wide.jpg" />`);
    headParts.push(`<meta name="twitter:image" content="${siteUrl}/assets/hero-wide.jpg" />`);
  }
  headParts.push(`<meta name="twitter:card" content="summary_large_image" />`);
  headParts.push(`<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
  headParts.push(
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
  );

  // Organization JSON-LD — verified facts only.
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "STRELLER",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
  };
  if (siteUrl) jsonLd.url = siteUrl;
  headParts.push(
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  );

  return template
    .replaceAll("__LANG__", locale)
    .replaceAll("__DIR__", locale === "ar" ? "rtl" : "ltr")
    .replaceAll("__TITLE__", escapeHtml(meta.title))
    .replaceAll("__DESCRIPTION__", escapeHtml(meta.description))
    .replace("<!--__HEAD_META__-->", headParts.join("\n    "));
}

export function renderSitemap(): string {
  const siteUrl = getSiteUrl();
  const urls = locales
    .map(
      (l) => `  <url>
    <loc>${siteUrl}/${l}</loc>
${locales.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${siteUrl}/${alt}" />`).join("\n")}
  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

export function renderRobots(): string {
  const siteUrl = getSiteUrl();
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}
