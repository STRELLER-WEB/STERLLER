# STRELLER Corporate Landing Page

## Overview

Corporate trust site for STRELLER (شتريلا), an Egyptian cultural-production company (Cairo, May 2024) building traveling pharaonic exhibitions for Europe. Flagship project: PHARAONIKA (pharaonika.com). Four locales: `/en`, `/ar` (RTL), `/de`, `/fr`.

Purpose: institutional credibility and partnership inquiries — **not** ticketing. No prices, dates, confirmed cities, or booking. Primary CTA: "Partner with STRELLER" (#contact). Secondary: external link to pharaonika.com.

## Architecture

- **Server** (`server/`): Express on port 5000. Dev mode uses Vite middleware (`allowedHosts: true`); prod serves `dist/public`. Redirects `/` → `/{locale}` by Accept-Language. Injects localized meta by replacing `__LANG__ __DIR__ __TITLE__ __DESCRIPTION__` tokens and `<!--__HEAD_META__-->` in `client/index.html` (`server/meta.ts`). Also serves `sitemap.xml`, `robots.txt`.
- **Contact API** (`server/contact.ts`): honeypot (`website` field → 400), zod validation (`shared/contact.ts`), SQLite storage (`server/db.ts`, `data/inquiries.db`), in-memory rate limit 5/15min keyed by SHA-256(SESSION_SECRET-salted IP) (`server/rate-limit.ts`), optional Resend email (best-effort).
- **Client** (`client/src/`): React SPA, one page of sections (Header → Hero → TrustStrip → About → Capabilities → FeaturedProject → WhyStreller → Partnerships → Impact → Roadmap → Values → ContactSection → Footer). Copy in `locales/{en,ar,de,fr}.ts` typed by `locales/types.ts`. Locale context in `lib/i18n.tsx`; language switch is a full navigation preserving the hash.
- **PHARAONIKA spelling lives in ONE place:** `client/src/lib/site-config.ts`.

## Key decisions

- React + Express (user explicitly chose over Next.js).
- Hero: layered `<picture>` (wide/portrait), Ken Burns zoom, golden-dust canvas particles, pointer parallax — all disabled under `prefers-reduced-motion`.
- Brand palette: Lapis Navy #193855, Deep Navy #0B1B2A, Desert Gold #CBA052, Papyrus #F4F1EA, Paper #FBFAF7, Terracotta #B85741, Turquoise #3A8E97, Charcoal #2B2C30; WCAG-added: turquoise-deep #2E6F77, gold-deep #8A6A2F. Fonts: Playfair Display / Montserrat / Cairo (Arabic uses Cairo everywhere).
- Transparency rule: never fabricate partners/numbers/cities; concept images labeled "Concept visualization / تصور بصري للمفهوم".
- Honeypot hiding uses clip-based visually-hidden CSS — NOT `-left-[9999px]`, which creates ~10k px of scrollable overflow in RTL documents and broke the Arabic page.
- `tsx` pinned at 4.20.5 (newer versions blocked by the environment firewall).

## Environment

- Secrets: `SESSION_SECRET` (rate-limit salt). Optional: `SITE_URL`, `CONTACT_TO_EMAIL`, `RESEND_API_KEY` (see `.env.example`).
- Workflow "Start application": `npm run dev` (port 5000).
- View inquiries: query `data/inquiries.db` (better-sqlite3).

## User preferences

- User communicates in Egyptian Arabic — reply in Egyptian Arabic.
- Wants clean, orderly, production-quality code; mobile-first; real content only (no fabricated facts).
