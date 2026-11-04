/**
 * Contact — WhatsApp only.
 * Number without + or spaces (India: 91 + 10 digits).
 */

export const CONTACT = {
  phoneDisplay: '+91 88257 51109',
  /** Digits only, with country code — for wa.me links */
  whatsapp: '918825751109',
}

/** Prefilled text when opening WhatsApp from the site */
export const WHATSAPP_DEFAULT_MESSAGE = 'Hi Rish, Happy to connect with you'

export function whatsappDmUrl(text) {
  const base = `https://wa.me/${CONTACT.whatsapp}`
  if (!text?.trim()) return base
  return `${base}?text=${encodeURIComponent(text.trim())}`
}
