import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { PrivacyPage } from "./components/PrivacyPage";
import { LegalPage } from "./components/LegalPage";
import "./index.css";
import { getLocaleFromPath } from "./lib/i18n";

const locale = getLocaleFromPath();
const page = window.location.pathname.split("/")[2] ?? "";
// The server sets lang/dir in the HTML shell; keep the client in sync as a safety net.
document.documentElement.lang = locale;
document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {page === "privacy" ? (
      <PrivacyPage locale={locale} />
    ) : page === "legal" ? (
      <LegalPage locale={locale} />
    ) : (
      <App locale={locale} />
    )}
  </StrictMode>,
);

// Deep links (/ar#contact): the browser's native anchor jump happens before
// React renders the sections, so re-run it once the target exists.
if (window.location.hash) {
  let attempts = 0;
  const jumpToHash = () => {
    const target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView();
    } else if (attempts++ < 20) {
      setTimeout(jumpToHash, 100);
    }
  };
  requestAnimationFrame(jumpToHash);
}
