# STRELLER — Corporate Landing Page

## Hostinger production deployment

- Website: `https://sterller.com` (target recorded in `.hostinger/site.json`).
- Node.js 22, Express, npm, build script `build`, entry file `dist/server.mjs`, no output-directory override.
- `npm run build` builds both the frontend and the production server; `npm start` starts the compiled server. Set `NODE_ENV=production` in hosting and use the host-provided `PORT`.
- Set `SITE_URL=https://sterller.com` and a strong random `SESSION_SECRET` in Hostinger's environment settings. Never commit secret values.
- Set `DATA_DIR=/home/u709452107/domains/sterller.com/.streller-data` so inquiry storage sits outside `public_html` and survives deployments. Back up this directory separately; it contains `inquiries.db` and may contain SQLite WAL files.
- `CONTACT_TO_EMAIL` and `RESEND_API_KEY` are optional. Without both, inquiries are saved in SQLite without email notifications.
- Dependencies use the public npm registry so builds do not depend on Replit's private package server.

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
