import { useLocale } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Roadmap() {
  const { t } = useLocale();
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow text-gold-deep">{t.roadmap.eyebrow}</p>
          <div className="gold-rule mt-4" aria-hidden="true" />
          <h2 className="font-display mt-6 text-3xl font-bold leading-tight text-lapis md:text-4xl">
            {t.roadmap.heading}
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-5 md:gap-6">
          {t.roadmap.phases.map((phase, index) => (
            <Reveal
              as="li"
              key={phase.title}
              delay={index * 80}
              className="relative border-s-2 border-gold/40 ps-5 md:border-s-0 md:border-t-2 md:ps-0 md:pt-5"
            >
              <span
                className="roadmap-dot absolute -start-[7px] top-0 h-3 w-3 rounded-full border-2 border-gold bg-paper md:-top-[7px] md:start-0"
                aria-hidden="true"
              />
              <span className="font-display text-sm font-semibold text-gold-deep" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-base font-semibold leading-snug text-lapis">{phase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/85">{phase.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
