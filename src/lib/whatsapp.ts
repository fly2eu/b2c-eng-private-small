const WHATSAPP_NUMBER = '1XXXXXXXXXX' // Replace before launch — digits only

export function getWhatsAppUrl(message?: string): string {
  const encoded = encodeURIComponent(
    message || "Hi, I'm interested in a private European tour. Can you help?"
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}
