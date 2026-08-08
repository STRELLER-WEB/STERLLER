import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/motion";

const NUM_RE = /\d[\d,]*/g;

/**
 * Renders text whose numeric fragments count up from 0 the first time the
 * element scrolls into view. Non-numeric text is left untouched, so it is
 * safe inside RTL sentences. Runs once; static under prefers-reduced-motion.
 */
export function CountUpText({ text, duration = 900 }: { text: string; duration?: number }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (reduced) {
      setProgress(1);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let rafId = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            observer.disconnect();
            const t0 = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - t0) / duration);
              setProgress(1 - Math.pow(1 - p, 3)); // ease-out cubic
              if (p < 1) rafId = requestAnimationFrame(tick);
            };
            rafId = requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [reduced, duration]);

  const parts: ReactNode[] = [];
  let cursor = 0;
  let key = 0;
  for (const match of text.matchAll(NUM_RE)) {
    const raw = match[0];
    const index = match.index ?? 0;
    if (index > cursor) parts.push(text.slice(cursor, index));
    const target = parseInt(raw.replaceAll(",", ""), 10);
    const value = Math.round(target * progress);
    const formatted = raw.includes(",") ? value.toLocaleString("en-US") : String(value);
    parts.push(
      // dir + isolation keep the Western-digit run stable inside RTL sentences,
      // matching how the browser treats the original plain-text number.
      <span
        key={key++}
        dir="ltr"
        style={{ fontVariantNumeric: "tabular-nums", unicodeBidi: "isolate" }}
      >
        {formatted}
      </span>,
    );
    cursor = index + raw.length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));

  return <span ref={ref}>{parts}</span>;
}
