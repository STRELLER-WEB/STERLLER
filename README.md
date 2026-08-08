# STRELLER — Corporate Landing Page

Corporate trust site for **STRELLER (شتريلا)**, an Egyptian cultural-production company (Cairo, founded May 2024) developing traveling pharaonic exhibitions for European cities. Flagship project: **PHARAONIKA**.

Live in 4 languages: English (`/en`), Arabic (`/ar`, RTL), German (`/de`), French (`/fr`).

## Stack

- **Frontend:** React 18 + Vite + Tailwind CSS (TypeScript)
- **Backend:** Node.js + Express (serves the SPA, localized meta tags, and the contact API)
- **Storage:** SQLite (`better-sqlite3`) — partnership inquiries stored in `data/inquiries.db`
- **Email (optional):** Resend via `RESEND_API_KEY` — inquiries are still saved if unset

## Run

```bash
npm install
npm run dev        # dev server on port 5000 (Express + Vite middleware)
npm run build      # production build to dist/public
npm start          # production server (NODE_ENV=production)
npm run typecheck  # TypeScript check
```

## Environment variables

See `.env.example`:

| Variable | Required | Purpose |
| --- | --- | --- |
| `SESSION_SECRET` | yes | Salts hashed IPs for rate limiting |
| `SITE_URL` | prod | Canonical site URL for meta/sitemap (falls back to dev domain) |
| `CONTACT_TO_EMAIL` | no | Where inquiry notifications are sent |
| `RESEND_API_KEY` | no | Enables email notifications via Resend |

## Localization

- Locale routing is server-side: `/` redirects to `/{locale}` via `Accept-Language`; each locale has its own URL, `<html lang/dir>`, meta tags, Open Graph, and JSON-LD (see `server/meta.ts`).
- All copy lives in `client/src/locales/{en,ar,de,fr}.ts`, typed by `client/src/locales/types.ts`. To edit copy, change only those files.
- Arabic uses the Cairo font everywhere and `dir="rtl"`; letter-spacing is zeroed for Arabic eyebrows (`client/src/index.css`).
- **PHARAONIKA spelling** is defined once in `client/src/lib/site-config.ts` (`projectName`, `projectUrl`). Change it there and it updates everywhere, including meta tags.

## Contact inquiries

- `POST /api/contact` — honeypot field (`website`), zod validation, rate limit (5 requests / 15 min per hashed IP), stored in SQLite.
- View inquiries: `node -e "console.log(require('better-sqlite3')('data/inquiries.db').prepare('SELECT * FROM inquiries ORDER BY created_at DESC').all())"`

## Content rules (important)

This is a corporate trust site, **not** a ticketing site:

- No prices, dates, confirmed cities, or booking flows.
- Never invent partners, team members, visitor numbers, or confirmed venues — use "in development", "planned", "Proposed host format".
- Concept imagery must remain labeled "Concept visualization / تصور بصري للمفهوم".
