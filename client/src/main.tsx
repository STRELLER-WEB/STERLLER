import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { getLocaleFromPath } from "./lib/i18n";

const locale = getLocaleFromPath();
// The server sets lang/dir in the HTML shell; keep the client in sync as a safety net.
document.documentElement.lang = locale;
document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App locale={locale} />
  </StrictMode>,
);
