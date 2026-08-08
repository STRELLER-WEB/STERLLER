import { useLocale } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLocale();
  return (
    <section id="about" className="bg-papyrus py-20 md:py-28">
      <div className="container-site">
        <div className="grid items-start gap-12 md:grid-cols-[7fr_5fr] md:gap-16">
          <Reveal>
            <p className="eyebrow text-gold-deep">{t.about.eyebrow}</p>
            <div className="gold-rule mt-4" aria-hidden="true" />
            <h2 className="font-display mt-6 max-w-prose text-3xl font-bold leading-tight text-lapis md:text-4xl">
              {t.about.heading}
            </h2>
            <p className="mt-6 max-w-prose leading-relaxed">{t.about.p1}</p>
            <p className="mt-4 max-w-prose leading-relaxed">{t.about.p2}</p>
            <blockquote className="mt-10 border-s-2 border-gold ps-6">
              <p className="font-display text-xl font-semibold leading-relaxed text-lapis md:text-2xl">
                “{t.about.quote}”
              </p>
            </blockquote>
          </Reveal>
          <Reveal delay={120}>
            <figure>
              <div className="overflow-hidden rounded-xl border border-gold/30">
                <picture>
                  <source srcSet="/assets/artisan-papyrus.webp" type="image/webp" />
                  <img
                    src="/assets/artisan-papyrus.jpg"
                    alt={t.about.imageAlt}
                    loading="lazy"
                    width="1024"
                    height="559"
                    className="h-full w-full object-cover"
                  />
                </picture>
              </div>
              <figcaption className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">
                {t.a11y.conceptLabel}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
