import { useLocale } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Capabilities() {
  const { t } = useLocale();
  return (
    <section id="what-we-do" className="bg-paper py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow text-gold-deep">{t.capabilities.eyebrow}</p>
          <div className="gold-rule mt-4" aria-hidden="true" />
          <h2 className="font-display mt-6 text-3xl font-bold leading-tight text-lapis md:text-4xl">
            {t.capabilities.heading}
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {t.capabilities.items.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(index % 2) * 100}
              className="group border-t border-lapis/15 pt-6 transition-colors duration-300 hover:border-gold/60"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="font-display text-lg font-semibold text-gold-deep transition-colors duration-300 group-hover:text-gold"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-lapis">{item.title}</h3>
                  <p className="mt-2 max-w-prose leading-relaxed text-charcoal/90">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
