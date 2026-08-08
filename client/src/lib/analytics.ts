/**
 * No-op analytics helper. Defines the site's event vocabulary without
 * installing any provider. When a provider is configured (with consent
 * support), wire it up inside `track` — never send personal data.
 */
export type AnalyticsEvent =
  | "hero_partner_click"
  | "hero_pharaonika_click"
  | "nav_section_click"
  | "project_external_click"
  | "contact_form_start"
  | "contact_form_submit_success"
  | "contact_form_submit_error"
  | "language_switch";

export function track(
  event: AnalyticsEvent,
  data?: Record<string, string | number | boolean>,
): void {
  if (import.meta.env.DEV) {
    console.debug("[analytics]", event, data ?? {});
  }
}
