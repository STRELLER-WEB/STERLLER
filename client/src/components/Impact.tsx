import { useLocale } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Impact() {
  const { t } = useLocale();
  return (
    <section id="impact" className="bg-lapis py-20 text-papyrus md:py-28">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-[5fr_7fr] md:gap-16">
          <Reveal>
            <p className="eyebrow text-gold">{t.impact.eyebrow}</p>
            <div className="gold-rule mt-4" aria-hidden="true" />
            <h2 className="font-display mt-6 text-3xl font-bold leading-tight text-paper md:text-4xl">
              {t.impact.heading}
            </h2>
            <p className="mt-6 inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-soft">
              {t.impact.label}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {t.impact.items.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed text-papyrus/95">
                  <svg
                    className="mt-1.5 shrink-0 text-gold"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 7.5L5.5 11L12 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
