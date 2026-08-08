import type { InquiryType } from "@shared/contact";

export interface CapabilityItem {
  title: string;
  body: string;
}

export interface SiteContent {
  a11y: {
    skipToContent: string;
    menuOpen: string;
    menuClose: string;
    languageLabel: string;
    conceptLabel: string;
    externalNewTab: string;
  };
  nav: {
    about: string;
    whatWeDo: string;
    project: string;
    partnerships: string;
    impact: string;
    contact: string;
    partnerCta: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    body: string;
    status: string;
    primaryCta: string;
    secondaryCta: string;
    smallLine: string;
    altWide: string;
    altPortrait: string;
  };
  trust: string[];
  about: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
    quote: string;
    imageAlt: string;
  };
  capabilities: {
    eyebrow: string;
    heading: string;
    items: CapabilityItem[];
  };
  project: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    formatLabel: string;
    facts: string[];
    cta: string;
    imageAlt: string;
  };
  why: {
    eyebrow: string;
    heading: string;
    items: CapabilityItem[];
  };
  partnerships: {
    eyebrow: string;
    heading: string;
    intro: string;
    groups: CapabilityItem[];
  };
  impact: {
    eyebrow: string;
    heading: string;
    label: string;
    items: string[];
  };
  roadmap: {
    eyebrow: string;
    heading: string;
    phases: CapabilityItem[];
  };
  values: {
    eyebrow: string;
    heading: string;
    items: string[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    fields: {
      name: string;
      organisation: string;
      email: string;
      location: string;
      locationOptional: string;
      inquiryType: string;
      message: string;
      /** Consent sentence containing the `{privacyPolicy}` placeholder for the link. */
      consent: string;
      /** Link text substituted into the consent sentence. */
      consentPrivacyLabel: string;
    };
    inquiryOptions: Record<InquiryType, string>;
    selectPlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    errors: {
      name: string;
      organisation: string;
      email: string;
      inquiryType: string;
      message: string;
      consent: string;
      generic: string;
      rateLimited: string;
    };
  };
  footer: {
    line1: string;
    line2: string;
    privacyLink: string;
    legalLink: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    backToHome: string;
    intro: string;
    sections: { title: string; body: string[] }[];
  };
  legal: {
    title: string;
    intro: string;
    companyHeading: string;
    labels: {
      company: string;
      address: string;
      representative: string;
      register: string;
      taxId: string;
      email: string;
      phone: string;
    };
    sections: { title: string; body: string[] }[];
  };
}
