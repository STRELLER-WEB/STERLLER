import type { Locale } from "@shared/contact";
import { LocaleProvider, contentByLocale } from "./lib/i18n";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { FeaturedProject } from "./components/FeaturedProject";
import { WhyStreller } from "./components/WhyStreller";
import { Partnerships } from "./components/Partnerships";
import { Impact } from "./components/Impact";
import { Roadmap } from "./components/Roadmap";
import { Values } from "./components/Values";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App({ locale }: { locale: Locale }) {
  const t = contentByLocale[locale];
  return (
    <LocaleProvider locale={locale}>
      <a href="#main" className="skip-link">
        {t.a11y.skipToContent}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <About />
        <Capabilities />
        <FeaturedProject />
        <WhyStreller />
        <Partnerships />
        <Impact />
        <Roadmap />
        <Values />
        <ContactSection />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
