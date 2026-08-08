import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  vx: number;
  vy: number;
  phase: number;
  phaseSpeed: number;
}

const GOLD_TONES = ["203, 160, 82", "230, 207, 158", "212, 175, 110"];

/**
 * Decorative floating gold-dust layer for the hero.
 * - 28–40 particles on mobile, 60–85 on desktop
 * - devicePixelRatio capped at 2
 * - pauses when the tab is hidden, resizes via ResizeObserver
 * - deferred start (after first paint), cleans up rAF and listeners
 * - never intercepts pointer events; hidden from assistive tech
 */
export function GoldenDustCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let running = false;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let started = false;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function particleCount(): number {
      const isMobile = window.innerWidth < 768;
      return isMobile
        ? 28 + Math.floor(Math.random() * 13) // 28–40
        : 60 + Math.floor(Math.random() * 26); // 60–85
    }

    function createParticles() {
      const count = particleCount();
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.5 + Math.random() * 1.5,
        opacity: 0.08 + Math.random() * 0.3,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -0.03 - Math.random() * 0.1,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.002 + Math.random() * 0.006,
      }));
    }

    function resize() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (particles.length === 0) createParticles();
    }

    function frame() {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.phaseSpeed;

        if (p.y < -4) {
          p.y = height + 4;
          p.x = Math.random() * width;
        }
        if (p.x < -4) p.x = width + 4;
        else if (p.x > width + 4) p.x = -4;

        const twinkle = 0.55 + 0.45 * Math.sin(p.phase);
        const tone = GOLD_TONES[Math.floor(p.phase * 7) % GOLD_TONES.length];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${tone}, ${(p.opacity * twinkle).toFixed(3)})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(frame);
    }

    function start() {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    function onVisibility() {
      if (document.hidden) stop();
      else if (started) start();
    }

    const observer = new ResizeObserver(() => resize());
    observer.observe(canvas);
    document.addEventListener("visibilitychange", onVisibility);

    // Defer initialization until after first paint so it never competes with LCP.
    const startTimer = window.setTimeout(() => {
      started = true;
      resize();
      start();
    }, 350);

    return () => {
      window.clearTimeout(startTimer);
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
