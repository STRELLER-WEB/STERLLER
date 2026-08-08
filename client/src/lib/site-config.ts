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
  /** Official registration details for the legal notice (Impressum) page — confirmed by the owner. */
  legalInfo: {
    legalName: "Streller General Trading",
    address: "4 Omar Lotfy Street, Nasr City, Cairo, Egypt",
    representative: "Khaled Elfqey",
    email: "info@strellereg.com",
    phone: "+20 108 018 5474",
    commercialRegister: "234187",
    taxId: "763-006-971",
  },
} as const;
