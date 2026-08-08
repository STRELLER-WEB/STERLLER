import { useLocale } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function WhyStreller() {
  const { t } = useLocale();
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-[4fr_8fr] md:gap-16">
          <Reveal>
            <p className="eyebrow text-gold-deep">{t.why.eyebrow}</p>
            <div className="gold-rule mt-4" aria-hidden="true" />
            <h2 className="font-display mt-6 text-3xl font-bold leading-tight text-lapis md:text-4xl">
              {t.why.heading}
            </h2>
          </Reveal>
          <ul className="grid gap-8 sm:grid-cols-2">
            {t.why.items.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 80} className="rounded-xl border border-lapis/15 p-6">
                <h3 className="text-lg font-semibold text-lapis">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-charcoal/90">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
