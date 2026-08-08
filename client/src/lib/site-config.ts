/**
 * Single source of truth for site-wide facts and naming.
 *
 * The flagship project name intentionally lives here in ONE place:
 * the source documents alternate between PHARAONIKA and PHARAOHICA.
 * We use PHARAONIKA because it matches pharaonika.com — if the final
 * legal spelling changes, update it here and it changes everywhere.
 */
export const siteConfig = {
  companyName: "STRELLER",
  companyNameAr: "شتريلا",
  projectName: "PHARAONIKA",
  projectNameAr: "فرعونيكا",
  projectUrl: "https://pharaonika.com/",
  foundedYear: 2024,
  foundingCity: "Cairo",
} as const;
