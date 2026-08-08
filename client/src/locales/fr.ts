import { siteConfig } from "@/lib/site-config";
import type { SiteContent } from "./types";

const P = siteConfig.projectName;

export const fr: SiteContent = {
  a11y: {
    skipToContent: "Aller au contenu",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    languageLabel: "Langue",
    conceptLabel: "Visualisation conceptuelle",
    externalNewTab: "s'ouvre dans un nouvel onglet",
  },
  nav: {
    about: "À propos",
    whatWeDo: "Ce que nous faisons",
    project: P,
    partnerships: "Partenariats",
    impact: "Impact",
    contact: "Contact",
    partnerCta: "Devenir partenaire",
  },
  hero: {
    eyebrow: "PRODUCTION CULTURELLE ÉGYPTIENNE · LE CAIRE",
    headline: "Bâtir des ponts culturels entre l'Égypte et l'Europe.",
    body: "STRELLER développe des expositions itinérantes et des expériences culturelles publiques qui transforment le patrimoine égyptien en éducation, en lien et en valeur durable pour les publics.",
    status: "Fondée en mai 2024 · Actuellement en phase de développement et de lancement",
    primaryCta: "Devenir partenaire de STRELLER",
    secondaryCta: `Découvrir ${P}`,
    smallLine: `STRELLER présente ${P} — notre premier projet phare européen.`,
    altWide: "Masque pharaonique doré illuminé dans un cadre muséal sombre.",
    altPortrait: "Masque pharaonique doré sous un faisceau de lumière chaude.",
  },
  trust: [
    "Née au Caire",
    "Tournée vers l'Europe",
    "Guidée par l'éducation",
    "Construite par les partenariats",
  ],
  about: {
    eyebrow: "À PROPOS DE STRELLER",
    heading: "Une jeune entreprise. Une vision claire. Un plan sérieux.",
    p1: "STRELLER est une société égyptienne de production culturelle fondée au Caire en mai 2024. Nous développons des expositions itinérantes et des expériences publiques qui font découvrir le patrimoine égyptien par un récit contemporain, l'éducation et la participation.",
    p2: "Nous ne présentons pas un long historique de projets réalisés. Nous présentons une entreprise transparente en phase de lancement, fondée sur la recherche, une planification par étapes et l'engagement de travailler avec des partenaires spécialisés à chaque étape.",
    quote: "La culture ne doit pas rester derrière une vitrine. Elle doit bouger, enseigner, surprendre et relier.",
    imageAlt: "Artisan égyptien peignant à la main une œuvre sur papyrus.",
  },
  capabilities: {
    eyebrow: "CE QUE NOUS FAISONS",
    heading: "Ce que nous faisons",
    items: [
      {
        title: "Développement d'expositions itinérantes",
        body: "Nous façonnons le concept de l'exposition, le parcours du visiteur et un modèle prêt à l'accueil dès la première idée.",
      },
      {
        title: "Expérience culturelle & scénographie",
        body: "Nous coordonnons récit, design spatial, lumière, son et moments interactifs en une expérience cohérente.",
      },
      {
        title: "Programmation éducative",
        body: "Nous développons des visites scolaires et des ateliers qui transforment le patrimoine en apprentissage actif.",
      },
      {
        title: "Planification ville hôte & partenariats",
        body: "Nous concevons le modèle de collaboration pour les villes, les lieux, les sponsors et les institutions culturelles.",
      },
      {
        title: "Publics & engagement communautaire",
        body: "Nous planifions des parcours pour les familles, les écoles, les groupes communautaires et les visiteurs ayant des besoins d'accès différents.",
      },
      {
        title: "Opérations & coordination de spécialistes",
        body: "Nous coordonnons partenaires spécialisés, fournisseurs, logistique et planification opérationnelle pour chaque contexte d'accueil.",
      },
    ],
  },
  project: {
    eyebrow: "PROJET PHARE",
    title: `STRELLER présente ${P}`,
    subtitle: "Une expérience culturelle itinérante sur l'Égypte ancienne pour les villes européennes.",
    body: `${P} est développée comme une destination culturelle à plusieurs niveaux plutôt que comme une exposition conventionnelle. L'expérience proposée combine un voyage immersif inspiré de Toutânkhamon, des répliques, des ateliers éducatifs, de l'artisanat égyptien, des activités familiales, un studio photo pharaonique, de la gastronomie, du folklore et des programmes communautaires.`,
    formatLabel: "Format d'accueil proposé",
    facts: [
      "8 à 10 semaines par ville hôte",
      "Surface indicative : plus de 2 000 m²",
      "Conçue pour les familles, les écoles et les visiteurs culturels",
    ],
    cta: "Visiter pharaonika.com",
    imageAlt: "Corridor de temple inspiré de l'Égypte ancienne aux colonnes monumentales.",
  },
  why: {
    eyebrow: "POURQUOI STRELLER",
    heading: "Pourquoi STRELLER",
    items: [
      {
        title: "Perspective égyptienne",
        body: "Le projet naît en Égypte et respecte la source culturelle du récit.",
      },
      {
        title: "Une expérience cohérente",
        body: "Récit, éducation, interaction et identité visuelle sont conçus comme un seul parcours visiteur.",
      },
      {
        title: "Un modèle prêt au partenariat",
        body: "Un cadre flexible qui s'adapte à chaque ville, lieu et public local.",
      },
      {
        title: "L'impact dès la conception",
        body: "L'éducation et l'inclusion sociale sont intégrées au concept, pas ajoutées après coup.",
      },
    ],
  },
  partnerships: {
    eyebrow: "PARTENARIATS",
    heading: "Construite par les bons partenariats.",
    intro:
      "Nous accueillons des échanges structurés avec les organisations capables de renforcer la qualité, la portée et la pertinence locale.",
    groups: [
      {
        title: "Villes hôtes & lieux",
        body: "Accès aux lieux, autorisations, coordination locale, soutien culturel et médiatique.",
      },
      {
        title: "Sponsors",
        body: "Parrainage financier, logistique, médiatique ou en nature, lié à une visibilité claire et à des résultats mesurables.",
      },
      {
        title: "Institutions culturelles & éducatives",
        body: "Conseil sur les contenus, réseaux scolaires, programmes pédagogiques et contexte culturel local.",
      },
      {
        title: "Partenaires hôtellerie, logistique & médias",
        body: "Hébergement, transport, assurance, soutien au montage, promotion et communication locale.",
      },
    ],
  },
  impact: {
    eyebrow: "IMPACT SOCIAL",
    heading: "La culture avec une vocation plus large.",
    label: "Piliers d'impact prévus",
    items: [
      "Visites scolaires et ateliers éducatifs",
      "Parcours de visite accessibles",
      "Journées communautaires gratuites ou soutenues lorsque le parrainage le permet",
      "Programmes pour les établissements de soins et les aînés",
      "Partenariats avec les ONG et communautés locales",
      "Contenus inclusifs pour les visiteurs aux besoins différents",
    ],
  },
  roadmap: {
    eyebrow: "FEUILLE DE ROUTE",
    heading: "Une feuille de route honnête, par étapes",
    phases: [
      {
        title: "Identité & fondation numérique",
        body: "Mise en place de la marque, du site et des documents institutionnels.",
      },
      {
        title: "Premier partenariat de ville hôte",
        body: "Accord avec une première ville, un lieu et des partenaires locaux.",
      },
      {
        title: "Édition pilote",
        body: "Réalisation de la première édition avec une qualité mesurable.",
      },
      {
        title: "Mesurer & améliorer",
        body: "Évaluation des résultats et amélioration du modèle.",
      },
      {
        title: "Série de tournées européennes",
        body: "Déploiement progressif d'une tournée européenne.",
      },
    ],
  },
  values: {
    eyebrow: "NOS VALEURS",
    heading: "Ce qui nous guide",
    items: [
      "Honnêteté",
      "Professionnalisme",
      "Respect culturel",
      "Éducation",
      "Inclusion",
      "Partenariat transparent",
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    heading: "Écrivons ensemble le premier chapitre.",
    body: "Nous accueillons volontiers les échanges avec les villes hôtes, les lieux, les institutions culturelles, les sponsors et les partenaires spécialisés.",
    fields: {
      name: "Nom complet",
      organisation: "Organisation",
      email: "E-mail professionnel",
      location: "Pays ou ville",
      locationOptional: "(facultatif)",
      inquiryType: "Type de demande",
      message: "Message",
      consent:
        "J'accepte que STRELLER conserve cette demande et me contacte à son sujet.",
    },
    inquiryOptions: {
      host_city_venue: "Ville hôte / Lieu",
      sponsorship: "Parrainage",
      cultural_educational: "Partenariat culturel / éducatif",
      logistics_hospitality: "Logistique / Hôtellerie",
      media: "Médias",
      general: "Général",
    },
    selectPlaceholder: "Choisir un type de demande",
    submit: "Envoyer la demande",
    submitting: "Envoi en cours…",
    success:
      "Merci. Votre demande a bien été reçue et notre équipe vous répondra dès que possible.",
    errors: {
      name: "Veuillez saisir votre nom complet (2 à 100 caractères).",
      organisation: "Veuillez indiquer votre organisation (2 à 150 caractères).",
      email: "Veuillez saisir un e-mail professionnel valide.",
      inquiryType: "Veuillez choisir un type de demande.",
      message: "Veuillez écrire un message d'au moins 20 caractères.",
      consent: "Veuillez confirmer votre consentement pour que nous puissions traiter votre demande.",
      generic: "Une erreur est survenue. Veuillez réessayer plus tard.",
      rateLimited: "Trop de tentatives. Veuillez réessayer plus tard.",
    },
  },
  footer: {
    line1: "Société égyptienne de production culturelle · Le Caire, Égypte · Fondée en 2024.",
    line2: `${P} est un projet en développement.`,
  },
};
