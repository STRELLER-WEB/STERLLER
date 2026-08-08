import { useLocale } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Partnerships() {
  const { t } = useLocale();
  return (
    <section id="partnerships" className="bg-papyrus py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow text-gold-deep">{t.partnerships.eyebrow}</p>
          <div className="gold-rule mt-4" aria-hidden="true" />
          <h2 className="font-display mt-6 max-w-prose text-3xl font-bold leading-tight text-lapis md:text-4xl">
            {t.partnerships.heading}
          </h2>
          <p className="mt-4 max-w-prose leading-relaxed">{t.partnerships.intro}</p>
        </Reveal>
        <div className="mt-12">
          {t.partnerships.groups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 60}
              className="grid gap-2 border-t border-lapis/15 py-7 md:grid-cols-[5fr_7fr] md:gap-12"
            >
              <h3 className="text-lg font-semibold text-lapis">{group.title}</h3>
              <p className="max-w-prose leading-relaxed text-charcoal/90">{group.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
