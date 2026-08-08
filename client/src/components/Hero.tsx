import { useEffect, useRef, type CSSProperties } from "react";
import { useLocale } from "@/lib/i18n";
import { usePrefersReducedMotion } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";
import { track } from "@/lib/analytics";
import { GoldenDustCanvas } from "./GoldenDustCanvas";

const PARALLAX_MAX = 8;

/** Staggered entrance delay for the hero choreography. */
function heroDelay(ms: number): CSSProperties {
  return { "--hero-delay": `${ms}ms` } as CSSProperties;
}

export function Hero() {
  const { t } = useLocale();
  const reducedMotion = usePrefersReducedMotion();
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Subtle pointer parallax, capped at ±8px; desktop pointers only.
  useEffect(() => {
    if (reducedMotion) return;
    const el = parallaxRef.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let rafId = 0;
    function onPointerMove(event: PointerEvent) {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const nx = event.clientX / window.innerWidth - 0.5;
        const ny = event.clientY / window.innerHeight - 0.5;
        el!.style.transform = `translate(${(-nx * PARALLAX_MAX * 2).toFixed(2)}px, ${(-ny * PARALLAX_MAX * 2).toFixed(2)}px)`;
      });
    }
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(rafId);
      el.style.transform = "";
    };
  }, [reducedMotion]);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy-deep">
      {/* Layer 1 — responsive art-directed background */}
      <div ref={parallaxRef} className="hero-bg-enter absolute -inset-3 scale-[1.02]">
        {/* In RTL the copy sits on the right, so mirror the artwork to move
            the mask to the left and keep it out from under the text. */}
        <div className="h-full w-full rtl:-scale-x-100">
          <picture>
          <source media="(max-width: 767px)" srcSet="/assets/hero-portrait.webp" type="image/webp" />
          <source media="(max-width: 767px)" srcSet="/assets/hero-portrait.jpg" />
          <source srcSet="/assets/hero-wide.webp" type="image/webp" />
          <img
            src="/assets/hero-wide.jpg"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className={`h-full w-full object-cover object-[70%_80%] md:object-[75%_center] ${reducedMotion ? "" : "kenburns"}`}
          />
          </picture>
        </div>
      </div>

      {/* Layer 2 — readability gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/35 to-navy-deep/85 md:bg-gradient-to-r md:from-navy-deep/90 md:via-navy-deep/60 md:to-navy-deep/10 md:rtl:bg-gradient-to-l"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep/90 to-transparent"
      />

      {/* Layer 3 — gold dust */}
      <GoldenDustCanvas />

      {/* Copy */}
      <div className="container-site relative z-10 flex flex-1 flex-col justify-start pb-24 pt-32 md:justify-center md:py-40">
        <div className="max-w-[620px]">
          <p className="eyebrow hero-item text-gold" style={heroDelay(80)}>
            {t.hero.eyebrow}
          </p>
          <h1
            className="font-display hero-item mt-5 text-4xl font-bold leading-[1.15] text-paper md:text-6xl md:leading-[1.1]"
            style={heroDelay(220)}
          >
            {t.hero.headline}
          </h1>
          <p
            className="hero-item mt-6 max-w-[540px] text-base leading-relaxed text-papyrus/90 md:text-lg"
            style={heroDelay(420)}
          >
            {t.hero.body}
          </p>
          <p className="hero-item mt-5 text-sm font-medium text-gold-soft/90" style={heroDelay(540)}>
            {t.hero.status}
          </p>

          <div
            className="hero-item mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={heroDelay(640)}
          >
            <a
              href="#contact"
              className="btn-primary"
              onClick={() => track("hero_partner_click")}
            >
              {t.hero.primaryCta}
            </a>
            <a
              href={siteConfig.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
              onClick={() => track("hero_pharaonika_click")}
            >
              {t.hero.secondaryCta}
              <span className="sr-only"> ({t.a11y.externalNewTab})</span>
            </a>
          </div>

          <p
            className="hero-item mt-8 flex items-center gap-3 text-sm text-papyrus/75"
            style={heroDelay(820)}
          >
            <span className="gold-rule shrink-0" aria-hidden="true" />
            {t.hero.smallLine}
          </p>
        </div>
      </div>

      {/* Screen-reader description of the hero imagery */}
      <p className="sr-only">{t.hero.altWide}</p>
    </section>
  );
}
