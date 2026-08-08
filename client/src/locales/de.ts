import { siteConfig } from "@/lib/site-config";
import type { SiteContent } from "./types";

const P = siteConfig.projectName;

export const de: SiteContent = {
  a11y: {
    skipToContent: "Zum Inhalt springen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    languageLabel: "Sprache",
    conceptLabel: "Konzeptvisualisierung",
    externalNewTab: "öffnet in einem neuen Tab",
  },
  nav: {
    about: "Über uns",
    whatWeDo: "Was wir tun",
    project: P,
    partnerships: "Partnerschaften",
    impact: "Wirkung",
    contact: "Kontakt",
    partnerCta: "Partner werden",
  },
  hero: {
    eyebrow: "ÄGYPTISCHE KULTURPRODUKTION · KAIRO",
    headline: "Kulturelle Brücken zwischen Ägypten und Europa bauen.",
    body: "STRELLER entwickelt Wanderausstellungen und öffentliche Kulturerlebnisse, die ägyptisches Erbe in Bildung, Verbindung und bleibenden Wert für das Publikum verwandeln.",
    status: "Gegründet im Mai 2024 · Derzeit in der Entwicklungs- und Startphase",
    primaryCta: "Partner von STRELLER werden",
    secondaryCta: `${P} entdecken`,
    smallLine: `STRELLER präsentiert ${P} — unser erstes europäisches Leuchtturmprojekt.`,
    altWide: "Goldene Pharaonenmaske, beleuchtet in einem dunklen Museumsraum.",
    altPortrait: "Goldene Pharaonenmaske unter einem warmen Lichtstrahl.",
  },
  trust: [
    "In Kairo gegründet",
    "Auf Europa ausgerichtet",
    "Bildung im Mittelpunkt",
    "Durch Partnerschaften getragen",
  ],
  about: {
    eyebrow: "ÜBER STRELLER",
    heading: "Ein junges Unternehmen. Eine klare Vision. Ein seriöser Plan.",
    p1: "STRELLER ist ein ägyptisches Kulturproduktionsunternehmen, gegründet in Kairo im Mai 2024. Wir entwickeln Wanderausstellungen und öffentliche Erlebnisse, die ägyptisches Erbe durch zeitgemäßes Erzählen, Bildung und Teilhabe vermitteln.",
    p2: "Wir präsentieren keine lange Geschichte abgeschlossener Projekte, sondern ein transparentes Unternehmen in der Startphase — aufgebaut auf Forschung, schrittweiser Planung und der Verpflichtung, in jeder Phase mit spezialisierten Partnern zu arbeiten.",
    quote: "Kultur sollte nicht hinter Glas sitzen. Sie soll sich bewegen, lehren, überraschen und verbinden.",
    imageAlt: "Ägyptischer Kunsthandwerker bemalt von Hand ein Papyruskunstwerk.",
  },
  capabilities: {
    eyebrow: "WAS WIR TUN",
    heading: "Was wir tun",
    items: [
      {
        title: "Entwicklung von Wanderausstellungen",
        body: "Wir gestalten Ausstellungskonzept, Besucherreise und ein gastgeberfähiges Modell von der ersten Idee an.",
      },
      {
        title: "Kulturerlebnis & Szenografie",
        body: "Wir koordinieren Erzählung, Raumgestaltung, Licht, Ton und interaktive Momente zu einem stimmigen Erlebnis.",
      },
      {
        title: "Bildungsprogramme",
        body: "Wir entwickeln Schulbesuche und Workshops, die Erbe in aktives Lernen verwandeln.",
      },
      {
        title: "Gaststadt- & Partnerschaftsplanung",
        body: "Wir entwerfen das Kooperationsmodell für Städte, Veranstaltungsorte, Sponsoren und Kulturinstitutionen.",
      },
      {
        title: "Publikum & Community-Engagement",
        body: "Wir planen Wege für Familien, Schulen, Gemeinschaftsgruppen und Besucher mit unterschiedlichen Zugangsbedürfnissen.",
      },
      {
        title: "Betrieb & Koordination von Spezialisten",
        body: "Wir koordinieren spezialisierte Partner, Lieferanten, Logistik und operative Planung für jeden Gastgeberkontext.",
      },
    ],
  },
  project: {
    eyebrow: "LEUCHTTURMPROJEKT",
    title: `STRELLER präsentiert ${P}`,
    subtitle: "Ein reisendes Kulturerlebnis über das alte Ägypten für europäische Städte.",
    body: `${P} wird als vielschichtige Kulturdestination entwickelt — nicht als konventionelle Ausstellung. Das vorgeschlagene Erlebnis verbindet eine immersive, von Tutanchamun inspirierte Reise, Replik-Ausstellungen, Bildungsworkshops, ägyptisches Kunsthandwerk, Familienaktivitäten, ein pharaonisches Fotostudio, Kulinarik, Folklore und Gemeinschaftsprogramme.`,
    formatLabel: "Vorgeschlagenes Gastgeberformat",
    facts: [
      "8–10 Wochen pro Gaststadt",
      "Indikative Fläche: über 2.000 m²",
      "Konzipiert für Familien, Schulen und Kulturbesucher",
    ],
    cta: "pharaonika.com besuchen",
    imageAlt: "Vom alten Ägypten inspirierter Tempelkorridor mit monumentalen Säulen.",
  },
  why: {
    eyebrow: "WARUM STRELLER",
    heading: "Warum STRELLER",
    items: [
      {
        title: "Ägyptische Perspektive",
        body: "Das Projekt beginnt in Ägypten und respektiert die kulturelle Quelle der Geschichte.",
      },
      {
        title: "Ein stimmiges Gesamterlebnis",
        body: "Erzählung, Bildung, Interaktion und visuelle Identität sind als eine Besucherreise gestaltet.",
      },
      {
        title: "Partnerschaftsbereites Modell",
        body: "Ein flexibler Rahmen, der auf jede Stadt, jeden Ort und jedes lokale Publikum eingehen kann.",
      },
      {
        title: "Wirkung von Anfang an",
        body: "Bildung und soziale Teilhabe sind in das Konzept eingebaut — nicht nachträglich ergänzt.",
      },
    ],
  },
  partnerships: {
    eyebrow: "PARTNERSCHAFTEN",
    heading: "Getragen von den richtigen Partnerschaften.",
    intro:
      "Wir freuen uns über strukturierte Gespräche mit Organisationen, die Qualität, Reichweite und lokale Relevanz stärken können.",
    groups: [
      {
        title: "Gaststädte & Veranstaltungsorte",
        body: "Zugang zu Räumen, Genehmigungen, lokale Koordination, kulturelle Unterstützung und Medienarbeit.",
      },
      {
        title: "Sponsoren",
        body: "Finanzielles, logistisches, mediales oder Sachsponsoring, verbunden mit klarer Sichtbarkeit und messbarer Wirkung.",
      },
      {
        title: "Kultur- & Bildungsinstitutionen",
        body: "Inhaltliche Beratung, Schulnetzwerke, Lernprogramme und lokaler kultureller Kontext.",
      },
      {
        title: "Hotellerie-, Logistik- & Medienpartner",
        body: "Unterkunft, Transport, Versicherung, Aufbauunterstützung, Promotion und lokale Kommunikation.",
      },
    ],
  },
  impact: {
    eyebrow: "GESELLSCHAFTLICHE WIRKUNG",
    heading: "Kultur mit einem größeren Zweck.",
    label: "Geplante Wirkungssäulen",
    items: [
      "Schulbesuche und Bildungsworkshops",
      "Barrierefreie Besucherwege",
      "Geförderte oder kostenlose Gemeinschaftstage, wenn Sponsoring es erlaubt",
      "Programme für Pflegeeinrichtungen und ältere Menschen",
      "Partnerschaften mit lokalen NGOs und Gemeinschaften",
      "Inklusive Inhalte für Besucher mit unterschiedlichen Bedürfnissen",
    ],
  },
  roadmap: {
    eyebrow: "FAHRPLAN",
    heading: "Ein ehrlicher Fahrplan in Phasen",
    phases: [
      {
        title: "Identität & digitales Fundament",
        body: "Aufbau von Marke, Website und institutionellen Unterlagen.",
      },
      {
        title: "Erste Gaststadt-Partnerschaft",
        body: "Vereinbarung mit einer ersten Stadt, einem Veranstaltungsort und lokalen Partnern.",
      },
      {
        title: "Pilotausgabe",
        body: "Umsetzung der ersten Ausgabe mit messbarer Qualität.",
      },
      {
        title: "Messen & verbessern",
        body: "Auswertung der Ergebnisse und Verfeinerung des Modells.",
      },
      {
        title: "Europäische Tourneeserie",
        body: "Ausbau zu einer schrittweisen Europatournee.",
      },
    ],
  },
  values: {
    eyebrow: "UNSERE WERTE",
    heading: "Wofür wir stehen",
    items: [
      "Ehrlichkeit",
      "Professionalität",
      "Kultureller Respekt",
      "Bildung",
      "Inklusion",
      "Transparente Partnerschaft",
    ],
  },
  contact: {
    eyebrow: "KONTAKT",
    heading: "Lassen Sie uns das erste Kapitel gemeinsam schreiben.",
    body: "Wir freuen uns über Gespräche mit Gaststädten, Veranstaltungsorten, Kulturinstitutionen, Sponsoren und spezialisierten Partnern.",
    fields: {
      name: "Vollständiger Name",
      organisation: "Organisation",
      email: "Geschäftliche E-Mail",
      location: "Land oder Stadt",
      locationOptional: "(optional)",
      inquiryType: "Art der Anfrage",
      message: "Nachricht",
      consent:
        "Ich bin einverstanden, dass STRELLER diese Anfrage speichert und mich dazu kontaktiert.",
    },
    inquiryOptions: {
      host_city_venue: "Gaststadt / Veranstaltungsort",
      sponsorship: "Sponsoring",
      cultural_educational: "Kultur- / Bildungspartnerschaft",
      logistics_hospitality: "Logistik / Hotellerie",
      media: "Medien",
      general: "Allgemein",
    },
    selectPlaceholder: "Art der Anfrage wählen",
    submit: "Anfrage senden",
    submitting: "Wird gesendet…",
    success:
      "Vielen Dank. Ihre Anfrage ist eingegangen und unser Team meldet sich so bald wie möglich.",
    errors: {
      name: "Bitte geben Sie Ihren vollständigen Namen ein (2–100 Zeichen).",
      organisation: "Bitte geben Sie Ihre Organisation an (2–150 Zeichen).",
      email: "Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.",
      inquiryType: "Bitte wählen Sie eine Art der Anfrage.",
      message: "Bitte schreiben Sie eine Nachricht mit mindestens 20 Zeichen.",
      consent: "Bitte bestätigen Sie Ihre Einwilligung, damit wir Ihre Anfrage bearbeiten können.",
      generic: "Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.",
      rateLimited: "Zu viele Anfragen. Bitte versuchen Sie es später erneut.",
    },
  },
  footer: {
    line1: "Ägyptisches Kulturproduktionsunternehmen · Kairo, Ägypten · Gegründet 2024.",
    line2: `${P} ist ein Projekt in Entwicklung.`,
  },
};
