import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact — Plan Your Private European Tour',
  description:
    "Tell us about your family and when you're thinking of traveling. We'll design your European journey. WhatsApp response within 2 hours.",
}

export default function ContactPage() {
  return <ContactClient />
}
