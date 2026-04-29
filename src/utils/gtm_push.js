export function gtm_push(event_name) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: event_name });
  }
}
