import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n";
import { track } from "@/lib/analytics";
import { LanguageSwitch } from "./LanguageSwitch";

interface NavItem {
  href: string;
  label: string;
}

export function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const navItems: NavItem[] = [
    { href: "#about", label: t.nav.about },
    { href: "#what-we-do", label: t.nav.whatWeDo },
    { href: "#pharaonika", label: t.nav.project },
    { href: "#partnerships", label: t.nav.partnerships },
    { href: "#impact", label: t.nav.impact },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Drawer behaviour: Escape close, focus trap, body scroll lock.
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const drawer = drawerRef.current;
    const focusables = drawer?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), select, [tabindex]:not([tabindex="-1"])',
    );
    focusables?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key === "Tab" && focusables && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const onNavClick = (label: string) => {
    track("nav_section_click", { section: label });
    setOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-gold/20 bg-navy-deep/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
        <a
          href="#main"
          className="wordmark font-display text-xl font-bold tracking-[0.08em] text-paper"
          aria-label="STRELLER"
        >
          STRELLER
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => track("nav_section_click", { section: item.label })}
              className="flex min-h-[44px] items-center text-sm font-medium text-papyrus/90 transition-colors hover:text-gold-soft"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitch />
          <a href="#contact" className="btn-primary !min-h-[44px] !px-5 text-sm">
            {t.nav.partnerCta}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch />
          <button
            ref={toggleRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-gold/40 text-paper"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? t.a11y.menuClose : t.a11y.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 top-16 z-40 lg:hidden" role="presentation" onClick={close}>
          <div className="absolute inset-0 bg-navy-deep/60" aria-hidden="true" />
          <div
            ref={drawerRef}
            id="mobile-drawer"
            className="relative max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-gold/20 bg-navy-deep px-5 pb-8 pt-4"
            onClick={(event) => event.stopPropagation()}
          >
            <nav aria-label="Main" className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => onNavClick(item.label)}
                  className="flex min-h-[48px] items-center border-b border-gold/10 text-base font-medium text-papyrus"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => onNavClick(t.nav.partnerCta)}
              className="btn-primary mt-6 w-full"
            >
              {t.nav.partnerCta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
