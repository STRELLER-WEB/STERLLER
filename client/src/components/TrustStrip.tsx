import { useLocale } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function TrustStrip() {
  const { t } = useLocale();
  return (
    <section aria-label={t.trust.join(" · ")} className="border-b border-gold/25 bg-lapis">
      <div className="container-site">
        <Reveal>
          <ul className="grid grid-cols-2 gap-y-4 py-6 md:grid-cols-4 md:py-7">
            {t.trust.map((item) => (
              <li
                key={item}
                className="flex items-center justify-center gap-2 text-center text-sm font-semibold text-papyrus md:text-base"
              >
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
