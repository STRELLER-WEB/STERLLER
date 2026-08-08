import { useLocale } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Values() {
  const { t } = useLocale();
  return (
    <section className="border-y border-lapis/10 bg-papyrus py-16 md:py-20">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow text-gold-deep">{t.values.eyebrow}</p>
            <h2 className="font-display mt-4 text-2xl font-bold text-lapis md:text-3xl">
              {t.values.heading}
            </h2>
          </div>
        </Reveal>
        <Reveal as="ul" stagger className="mt-8 flex flex-wrap justify-center gap-x-2 gap-y-3">
          {t.values.items.map((value, index) => (
            <li key={value} className="flex items-center">
              <span className="px-3 text-base font-medium text-charcoal md:text-lg">{value}</span>
              {index < t.values.items.length - 1 && (
                <span className="h-4 w-px bg-gold/60" aria-hidden="true" />
              )}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
