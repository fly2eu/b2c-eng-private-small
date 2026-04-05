import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/shared/Logo'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { Mail } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

const tours = [
  { label: 'My Scenic Switzerland', href: '/tours/my-scenic-switzerland' },
  { label: 'Switzerland Wonderland', href: '/tours/switzerland-wonderland' },
  { label: 'Sweet Tour Switzerland', href: '/tours/sweet-tour-switzerland' },
  { label: 'Swiss Alps Express', href: '/tours/swiss-alps-express-circuit' },
  { label: 'All Tours', href: '/tours' },
]

const destinations = [
  { label: 'Switzerland', href: '/destinations/switzerland' },
  { label: 'France', href: '/destinations/france' },
  { label: 'Italy', href: '/destinations/italy' },
  { label: 'Austria & Germany', href: '/destinations/austria-germany' },
  { label: 'All Destinations', href: '/destinations' },
]

const company = [
  { label: 'About Elide', href: '/about' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Our Fleet', href: '/about#fleet' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A2E1C] text-[#FAF7F0]">
      {/* CTA Banner */}
      <div className="bg-[#12442E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-2xl font-semibold text-white">
              Ready to plan your European adventure?
            </p>
            <p className="text-[#FAF7F0]/70 font-body text-sm mt-1">
              WhatsApp us — we respond within 2 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start on WhatsApp
            </a>
            <Link href="/contact" className="btn-outline border-white/30 text-white hover:bg-white/10 justify-center">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="sm" />
            <p className="mt-4 text-sm text-[#FAF7F0]/60 font-body leading-relaxed max-w-xs">
              Private chauffeured European tours for Indian and GCC travelers. Your vehicle, your pace, your way.
            </p>
            {/* TIDS Certification Badge */}
            <div className="mt-5 flex items-center gap-3">
              <Image
                src="/logos/tids-certification.png"
                alt="IATA TIDS Certified"
                width={60}
                height={40}
                style={{ height: 40, width: 'auto', opacity: 0.85 }}
              />
              <span className="text-xs text-[#FAF7F0]/50 font-body leading-tight">
                IATA TIDS<br />Certified
              </span>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://instagram.com/elidetours"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elide on Instagram"
                className="text-white/40 hover:text-[#DAA521] transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com/elidetours"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elide on Facebook"
                className="text-white/40 hover:text-[#DAA521] transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="mailto:hello@elide.com"
                aria-label="Email Elide"
                className="text-white/40 hover:text-[#DAA521] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h3 className="text-xs font-body font-medium tracking-[0.12em] uppercase text-[#DAA521] mb-4">
              Our Tours
            </h3>
            <ul className="space-y-2.5">
              {tours.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#FAF7F0]/60 hover:text-white font-body transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xs font-body font-medium tracking-[0.12em] uppercase text-[#DAA521] mb-4">
              Destinations
            </h3>
            <ul className="space-y-2.5">
              {destinations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#FAF7F0]/60 hover:text-white font-body transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-body font-medium tracking-[0.12em] uppercase text-[#DAA521] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#FAF7F0]/60 hover:text-white font-body transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#FAF7F0]/40 font-body">
            © {new Date().getFullYear()} Elide Private European Tours. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-[#FAF7F0]/40 hover:text-white/60 font-body transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[#FAF7F0]/40 hover:text-white/60 font-body transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
