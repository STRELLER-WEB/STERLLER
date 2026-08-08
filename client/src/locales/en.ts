import { siteConfig } from "@/lib/site-config";
import type { SiteContent } from "./types";

const P = siteConfig.projectName;

export const en: SiteContent = {
  a11y: {
    skipToContent: "Skip to content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageLabel: "Language",
    conceptLabel: "Concept visualization",
    externalNewTab: "opens in a new tab",
  },
  nav: {
    about: "About",
    whatWeDo: "What We Do",
    project: P,
    partnerships: "Partnerships",
    impact: "Impact",
    contact: "Contact",
    partnerCta: "Partner with us",
  },
  hero: {
    eyebrow: "EGYPTIAN CULTURAL PRODUCTION · CAIRO",
    headline: "Building cultural bridges between Egypt and Europe.",
    body: "STRELLER develops traveling exhibitions and public cultural experiences that turn Egyptian heritage into education, connection and lasting audience value.",
    status: "Founded in May 2024 · Currently in development and launch phase",
    primaryCta: "Partner with STRELLER",
    secondaryCta: `Explore ${P}`,
    smallLine: `STRELLER presents ${P} — our first European flagship project.`,
    altWide: "Golden pharaonic mask illuminated in a dark museum setting.",
    altPortrait: "Golden pharaonic mask beneath a beam of warm light.",
  },
  trust: ["Cairo-born", "Europe-focused", "Education-led", "Partnership-built"],
  about: {
    eyebrow: "ABOUT STRELLER",
    heading: "A young company. A clear vision. A serious plan.",
    p1: "STRELLER is an Egyptian cultural-production company founded in Cairo in May 2024. We are developing traveling exhibitions and public experiences that introduce Egyptian heritage through contemporary storytelling, education and participation.",
    p2: "We do not present a long history of completed projects. We present a transparent launch-stage company built on research, phased planning and the commitment to work with specialist partners at every stage.",
    quote: "Culture should not sit behind glass. It should move, teach, surprise and connect.",
    imageAlt: "Egyptian artisan painting a papyrus artwork by hand.",
  },
  capabilities: {
    eyebrow: "WHAT WE DO",
    heading: "What we do",
    items: [
      {
        title: "Traveling Exhibition Development",
        body: "We shape the exhibition concept, visitor journey and host-ready model from the first idea.",
      },
      {
        title: "Cultural Experience & Scenography",
        body: "We coordinate narrative, spatial design, lighting, sound and interactive moments into one coherent experience.",
      },
      {
        title: "Educational Programming",
        body: "We develop school visits and workshops that turn heritage into active learning.",
      },
      {
        title: "Host-City & Partnership Planning",
        body: "We design the collaboration model for cities, venues, sponsors and cultural institutions.",
      },
      {
        title: "Audience & Community Engagement",
        body: "We plan pathways for families, schools, community groups and visitors with different access needs.",
      },
      {
        title: "Operations & Specialist Coordination",
        body: "We coordinate specialist partners, suppliers, logistics and operational planning for each host context.",
      },
    ],
  },
  project: {
    eyebrow: "FEATURED PROJECT",
    title: `STRELLER presents ${P}`,
    subtitle: "A traveling Ancient Egypt cultural experience for European cities.",
    body: `${P} is being developed as a layered cultural destination rather than a conventional exhibition. The proposed experience combines an immersive Tutankhamun-inspired journey, replica displays, educational workshops, Egyptian crafts, family activities, a pharaonic photo studio, food, folklore and community programmes.`,
    formatLabel: "Proposed host format",
    facts: [
      "8–10 weeks per host city",
      "Indicative footprint: 2,000+ m²",
      "Designed for families, schools and cultural visitors",
    ],
    cta: "Visit pharaonika.com",
    imageAlt: "Ancient Egyptian-inspired temple corridor with monumental columns.",
  },
  why: {
    eyebrow: "WHY STRELLER",
    heading: "Why STRELLER",
    items: [
      {
        title: "Egyptian perspective",
        body: "The project begins in Egypt and respects the cultural source of the story.",
      },
      {
        title: "One coherent experience",
        body: "Storytelling, education, interaction and visual identity are designed as one visitor journey.",
      },
      {
        title: "Partner-ready model",
        body: "A flexible framework that can respond to each city, venue and local audience.",
      },
      {
        title: "Impact by design",
        body: "Education and social inclusion are built into the concept rather than added later.",
      },
    ],
  },
  partnerships: {
    eyebrow: "PARTNERSHIPS",
    heading: "Built through the right partnerships.",
    intro:
      "We welcome structured conversations with organisations that can strengthen quality, reach and local relevance.",
    groups: [
      {
        title: "Host Cities & Venues",
        body: "Venue access, permits, local coordination, cultural endorsement and media support.",
      },
      {
        title: "Sponsors",
        body: "Financial, logistical, media or in-kind sponsorship linked to clear visibility and impact outcomes.",
      },
      {
        title: "Cultural & Educational Institutions",
        body: "Content guidance, school networks, learning programmes and local cultural context.",
      },
      {
        title: "Hospitality, Logistics & Media Partners",
        body: "Accommodation, transport, insurance, installation support, promotion and local communication.",
      },
    ],
  },
  impact: {
    eyebrow: "SOCIAL IMPACT",
    heading: "Culture with a wider purpose.",
    label: "Planned impact pillars",
    items: [
      "School visits and educational workshops",
      "Accessible visitor pathways",
      "Supported or free community days when sponsorship allows",
      "Programmes for care communities and older adults",
      "Local NGO and community partnerships",
      "Inclusive content for visitors with different needs",
    ],
  },
  roadmap: {
    eyebrow: "ROADMAP",
    heading: "A phased, honest roadmap",
    phases: [
      {
        title: "Identity & digital foundation",
        body: "Establishing the brand, website and institutional materials.",
      },
      {
        title: "First host-city partnership",
        body: "Agreeing with a first city, venue and local partners.",
      },
      {
        title: "Pilot edition",
        body: "Delivering the first edition with measurable quality.",
      },
      {
        title: "Measure & improve",
        body: "Evaluating outcomes and refining the model.",
      },
      {
        title: "European touring series",
        body: "Expanding into a phased European tour.",
      },
    ],
  },
  values: {
    eyebrow: "OUR VALUES",
    heading: "What we stand for",
    items: [
      "Honesty",
      "Professionalism",
      "Cultural respect",
      "Education",
      "Inclusion",
      "Transparent partnership",
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    heading: "Let’s build the first chapter together.",
    body: "We welcome conversations with host cities, venues, cultural institutions, sponsors and specialist partners.",
    fields: {
      name: "Full name",
      organisation: "Organisation",
      email: "Work email",
      location: "Country or city",
      locationOptional: "(optional)",
      inquiryType: "Inquiry type",
      message: "Message",
      consent:
        "I agree that STRELLER may store this inquiry and contact me about it, as described in the {privacyPolicy}.",
      consentPrivacyLabel: "Privacy Policy",
    },
    inquiryOptions: {
      host_city_venue: "Host City / Venue",
      sponsorship: "Sponsorship",
      cultural_educational: "Cultural / Educational Partnership",
      logistics_hospitality: "Logistics / Hospitality",
      media: "Media",
      general: "General",
    },
    selectPlaceholder: "Choose an inquiry type",
    submit: "Send inquiry",
    submitting: "Sending…",
    success:
      "Thank you. Your inquiry has been received and our team will respond as soon as possible.",
    errors: {
      name: "Please enter your full name (2–100 characters).",
      organisation: "Please enter your organisation (2–150 characters).",
      email: "Please enter a valid work email.",
      inquiryType: "Please choose an inquiry type.",
      message: "Please write a message of at least 20 characters.",
      consent: "Please confirm your consent so we can process your inquiry.",
      generic: "Something went wrong. Please try again later.",
      rateLimited: "Too many requests. Please try again later.",
    },
  },
  footer: {
    line1: "Egyptian cultural production company · Cairo, Egypt · Founded 2024.",
    line2: `${P} is a project in development.`,
    privacyLink: "Privacy Policy",
    legalLink: "Legal Notice",
  },
  legal: {
    title: "Legal Notice",
    intro:
      "Information about the operator of this website, provided in line with European legal-notice (Impressum) requirements.",
    companyHeading: "Company details",
    labels: {
      company: "Company",
      address: "Registered address",
      representative: "Legal representative",
      register: "Commercial register no.",
      taxId: "Tax ID",
      email: "Email",
      phone: "Phone",
    },
    sections: [
      {
        title: "Responsibility for content",
        body: [
          "The content of this website has been prepared with care. STRELLER is responsible for its own content on these pages. We cannot guarantee that all information is complete, correct and up to date at all times; the project described here is in active development and details may change.",
        ],
      },
      {
        title: "External links",
        body: [
          "This website contains links to external websites operated by third parties. We have no influence over their content and accept no liability for it; the respective operator is always responsible for the content of linked pages. No unlawful content was identifiable at the time the links were created.",
        ],
      },
      {
        title: "Copyright",
        body: [
          "The content, imagery and design of this website are protected by copyright. Any reproduction, editing or distribution beyond the limits of copyright law requires the prior written consent of STRELLER.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: 8 August 2026",
    backToHome: "Back to home",
    intro:
      "This policy explains how STRELLER handles personal data submitted through this website, in line with the EU General Data Protection Regulation (GDPR).",
    sections: [
      {
        title: "1. Who we are",
        body: [
          "STRELLER is an Egyptian cultural-production company founded in Cairo in 2024. For personal data submitted through this website, STRELLER acts as the data controller.",
          "You can reach us at any time through the contact form on this website.",
        ],
      },
      {
        title: "2. What data we collect",
        body: [
          "When you send a partnership inquiry, we collect the information you provide in the form: your full name, organisation, work email address, country or city (optional), the type of inquiry, your message and the language you used.",
          "Like most websites, our hosting infrastructure also processes basic technical data (such as IP addresses) in server logs for security and operational purposes.",
        ],
      },
      {
        title: "3. Why we use your data and on what legal basis",
        body: [
          "We use the data you submit solely to review your inquiry, respond to you and conduct the partnership conversation you requested.",
          "The legal bases are your consent (Art. 6(1)(a) GDPR), which you give via the checkbox in the form, and steps taken at your request prior to entering into a possible agreement (Art. 6(1)(b) GDPR).",
          "We do not use your data for advertising, profiling or automated decision-making.",
        ],
      },
      {
        title: "4. How long we keep your data",
        body: [
          "Inquiries submitted through this form are automatically deleted from our systems 24 months after they are received. If a partnership conversation continues beyond the form submission, it does so by email, and that correspondence is handled as part of the ongoing partnership.",
        ],
      },
      {
        title: "5. Who we share your data with",
        body: [
          "We never sell your data. We share it only with service providers that are technically necessary to operate this website and deliver messages — for example our hosting provider and, where configured, an email delivery service that notifies our team of new inquiries.",
          "Where such providers process data outside the European Economic Area, we rely on appropriate safeguards such as the EU Standard Contractual Clauses.",
        ],
      },
      {
        title: "6. Cookies and analytics",
        body: [
          "This website does not use advertising cookies or third-party tracking. Only technically necessary processing takes place to deliver the site to your browser.",
        ],
      },
      {
        title: "7. Your rights",
        body: [
          "Under the GDPR you have the right to access, rectify or erase your personal data, to restrict or object to its processing, and to data portability.",
          "You may withdraw your consent at any time with effect for the future — simply contact us via the form on this website.",
          "You also have the right to lodge a complaint with a data-protection supervisory authority, in particular in the EU member state of your residence or workplace.",
        ],
      },
      {
        title: "8. Changes to this policy",
        body: [
          "We may update this policy as the project develops. The current version, with its date, is always published on this page.",
        ],
      },
    ],
  },
};
