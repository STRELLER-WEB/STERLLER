import { useLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";
import { CountUpText } from "./CountUpText";

export function FeaturedProject() {
  const { t } = useLocale();
  return (
    <section id="pharaonika" className="bg-navy-deep py-20 text-papyrus md:py-28">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-[6fr_6fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-gold">{t.project.eyebrow}</p>
            <div className="gold-rule mt-4" aria-hidden="true" />
            <h2 className="font-display mt-6 text-3xl font-bold leading-tight text-paper md:text-4xl">
              {t.project.title}
            </h2>
            <p className="mt-3 text-lg font-medium text-gold-soft">{t.project.subtitle}</p>
            <p className="mt-6 max-w-prose leading-relaxed text-papyrus/90">{t.project.body}</p>

            <div className="mt-8 rounded-xl border border-gold/30 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {t.project.formatLabel}
              </p>
              <ul className="mt-4 space-y-2">
                {t.project.facts.map((fact) => (
                  <li key={fact} className="flex items-start gap-3 text-sm text-papyrus/95 md:text-base">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    <CountUpText text={fact} />
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={siteConfig.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light mt-8"
              onClick={() => track("project_external_click")}
            >
              {t.project.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M4 10L10 4M10 4H5.5M10 4v4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only"> ({t.a11y.externalNewTab})</span>
            </a>
          </Reveal>

          <Reveal delay={120}>
            <figure>
              <div className="img-zoom overflow-hidden rounded-xl border border-gold/25">
                <picture>
                  <source srcSet="/assets/temple-corridor.webp" type="image/webp" />
                  <img
                    src="/assets/temple-corridor.jpg"
                    alt={t.project.imageAlt}
                    loading="lazy"
                    width="1024"
                    height="438"
                    className="h-full w-full object-cover pt-[50px] pb-[50px]"
                  />
                </picture>
              </div>
              <figcaption className="mt-3 text-xs font-medium uppercase tracking-wide text-papyrus/60">
                {t.a11y.conceptLabel}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
