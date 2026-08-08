import express from "express";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { contactRouter } from "./contact";
import { startRetentionSchedule } from "./db";
import { detectLocale, isLocale, renderMeta, renderRobots, renderSitemap } from "./meta";

const app = express();
const server = http.createServer(app);

// Trust only the first hop (Replit's ingress proxy). `true` would trust the
// entire X-Forwarded-For chain, letting clients spoof their IP and bypass
// the per-IP contact rate limit.
app.set("trust proxy", 1);
app.use(express.json({ limit: "64kb" }));

app.use("/api/contact", contactRouter);

// Enforce the retention period promised in the published privacy policy.
startRetentionSchedule();

app.get("/sitemap.xml", (_req, res) => {
  res.type("application/xml").send(renderSitemap());
});

app.get("/robots.txt", (_req, res) => {
  res.type("text/plain").send(renderRobots());
});

const isDev = process.env.NODE_ENV !== "production";
const rootDir = path.resolve(import.meta.dirname, "..");

/** Resolve the locale for an HTML request, or send a redirect and return null. */
function resolveLocale(req: express.Request, res: express.Response): string | null {
  const segment = req.path.split("/")[1] ?? "";
  if (isLocale(segment)) return segment;
  const target = `/${detectLocale(req.get("accept-language"))}`;
  res.redirect(302, target);
  return null;
}

async function main() {
  if (isDev) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      configFile: path.resolve(rootDir, "vite.config.ts"),
      appType: "custom",
      server: {
        middlewareMode: true,
        hmr: { server },
        allowedHosts: true,
      },
    });

    app.use(vite.middlewares);

    app.use(async (req, res, next) => {
      try {
        const locale = resolveLocale(req, res);
        if (!locale) return;
        let template = fs.readFileSync(path.resolve(rootDir, "client", "index.html"), "utf-8");
        template = await vite.transformIndexHtml(req.originalUrl, template);
        res
          .status(200)
          .set({ "Content-Type": "text/html", "Cache-Control": "no-store" })
          .end(renderMeta(template, locale as never));
      } catch (error) {
        next(error);
      }
    });
  } else {
    const distDir = path.resolve(rootDir, "dist", "public");
    app.use(
      express.static(distDir, {
        index: false,
        maxAge: "1y",
        setHeaders(res, filePath) {
          // HTML and non-hashed public assets should revalidate.
          if (filePath.endsWith(".html")) res.setHeader("Cache-Control", "no-cache");
          if (filePath.includes(`${path.sep}assets${path.sep}`) && !filePath.includes("index-")) {
            res.setHeader("Cache-Control", "public, max-age=86400");
          }
        },
      }),
    );

    const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
    app.use((req, res) => {
      const locale = resolveLocale(req, res);
      if (!locale) return;
      res
        .status(200)
        .set({ "Content-Type": "text/html", "Cache-Control": "no-cache" })
        .end(renderMeta(template, locale as never));
    });
  }

  const port = 5000;
  server.listen(port, "0.0.0.0", () => {
    console.log(`STRELLER site serving on http://0.0.0.0:${port} (${isDev ? "dev" : "prod"})`);
  });
}

main().catch((error) => {
  console.error("Fatal server error:", error);
  process.exit(1);
});
