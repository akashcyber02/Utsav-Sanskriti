// Lightweight aggregate privacy-friendly analytics
// Tracks voluntary user interactions without collecting PII

export type AnalyticsEvent =
  | "page_view"
  | "wish_copy"
  | "whatsapp_share"
  | "card_download"
  | "search_query"
  | "digital_puja_bell"
  | "digital_puja_shankh"
  | "digital_puja_diya"
  | "ravan_dahan_complete"
  | "mala_counter_108";

export function trackEvent(event: AnalyticsEvent, metadata?: Record<string, string | number | boolean>): void {
  if (typeof window === "undefined") return;

  // Log in dev environment for debugging
  if (process.env.NODE_ENV !== "production") {
    console.log(`[UtsavSanskriti Analytics] Event: ${event}`, metadata);
  }

  // Push to dataLayer if Google Analytics / Tag Manager is mounted
  const win = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
  if (win.dataLayer && Array.isArray(win.dataLayer)) {
    win.dataLayer.push({
      event,
      timestamp: new Date().toISOString(),
      ...metadata,
    });
  }
}
