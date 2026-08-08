import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "ul" | "ol";
  /** Sequence direct children with a shared stagger instead of moving the block as one. */
  stagger?: boolean;
}

/** IntersectionObserver-driven reveal; a no-op under prefers-reduced-motion. */
export function Reveal({ children, className, delay, as = "div", stagger }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // The tags we render share the same ref/prop surface; cast keeps typing simple.
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={`${stagger ? "reveal-stagger" : "reveal"} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
