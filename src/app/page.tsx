import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Clock, Star, Users, Car, MapPin, CheckCircle, Phone } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import TourCard from '@/components/ui/TourCard'
import DestinationCard from '@/components/ui/DestinationCard'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/animations/ScrollReveal'
import CountUp from '@/components/animations/CountUp'
import WhatsAppButton, { getWhatsAppUrl } from '@/components/forms/WhatsAppButton'
import { featuredTours } from '@/data/tours'
import { featuredDestinations } from '@/data/destinations'

export const metadata: Metadata = {
  title: 'Elide — Private European Tours for Indian & GCC Families',
  description:
    'Private chauffeured European tours in a Mercedes fleet. Switzerland, France, Italy — built for Indian and GCC families. Your vehicle, your pace, no strangers on the bus.',
}

const howItWorksSteps = [
  {
    number: '01',
    icon: Phone,
    title: 'Tell us about your trip',
    body: 'Who\'s traveling, when, what you\'d love to see. WhatsApp us or fill in a short form. No lengthy questionnaires — a conversation.',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'We design your journey',
    body: 'Day-by-day itinerary matched to your pace, interests, and group. Hotels handpicked. Vehicle selected. Every detail thought through.',
  },
  {
    number: '03',
    icon: Car,
    title: 'You travel',
    body: 'Your chauffeur meets you at the airport. Itinerary in hand. Hotels confirmed. You just enjoy — we handle everything else.',
  },
  {
    number: '04',
    icon: Shield,
    title: "We're always there",
    body: '24/7 on-trip support from people who know Europe. Real humans. Not a call centre. Message us any time — we respond.',
  },
]

const trustStats = [
  { value: 10, suffix: '+', label: 'Ready-to-go programmes' },
  { value: 7, suffix: '', label: 'Countries covered' },
  { value: 24, suffix: '/7', label: 'On-ground support' },
  { value: 4, suffix: '-star', label: 'Boutique hotels' },
]

const whyPrivate = [
  {
    icon: Users,
    title: 'Your family only',
    body: 'No strangers on the bus. No compromising on pace. No waiting for others. Just your group, your vehicle, your trip.',
  },
  {
    icon: Car,
    title: 'A Mercedes, always',
    body: 'GLE for couples, V-Class for families, Sprinter for groups. WiFi, leather, USB, and a professional chauffeur who knows every road.',
  },
  {
    icon: Clock,
    title: 'Stop when you want',
    body: 'The viewpoint is spectacular? Stay an hour. The kids are asleep? Keep driving. Your itinerary flexes around you — not the other way around.',
  },
  {
    icon: Star,
    title: '4-star boutique hotels',
    body: 'Handpicked for comfort, location, and character. Not chain hotels. Places you\'ll remember.',
  },
  {
    icon: Shield,
    title: 'Every route personally driven',
    body: "We don't put a road on an itinerary because it looked good on paper. Every route, we've driven ourselves.",
  },
  {
    icon: CheckCircle,
    title: 'Price transparency',
    body: 'Starting prices shown on every programme. No "call for quote" games. Final price in INR or AED — just ask.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format"
          alt="Swiss Alps — private chauffeured European tour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIhAAAQQCAgMBAAAAAAAAAAAAAQIDBBEFBhIhMVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Aq9P6yuLqSWOwkrW2NkdJG5xyQ0AnGW9wB7Vc2mzV1rqFPWXG7yzyMYWl8jmtBI7nAA4H2oiDhDT1Kx0m3UMVhFDDFE1kbGvJDQBgAZP4AUiIH//Z"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1A]/85 via-[#0F2A1A]/40 to-transparent" />
        {/* Trust strip at top */}
        <div className="absolute top-0 left-0 right-0 bg-[#12442E]/80 backdrop-blur-sm py-2.5 hidden md:block" style={{marginTop: '72px'}}>
          <div className="max-w-7xl mx-auto px-8 flex items-center justify-center gap-8 text-xs text-white/80 font-body tracking-[0.05em]">
            <span>✓ Private Mercedes fleet</span>
            <span className="text-white/30">|</span>
            <span>✓ 4-star boutique hotels</span>
            <span className="text-white/30">|</span>
            <span>✓ 24/7 on-ground support</span>
            <span className="text-white/30">|</span>
            <span>✓ We've driven every route</span>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="section-label text-[#E8C04A] mb-4 block">
                Private European Tours
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-5">
                Switzerland for your family,<br />
                <span className="text-[#E8C04A]">the way you imagined it.</span>
              </h1>
              <p className="text-lg text-white/80 font-body leading-relaxed mb-8 max-w-xl">
                A private Mercedes meets you at Geneva Airport. By lunch, you're watching the Alps from your hotel terrace. No strangers. No group schedule. Just your family and Europe.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl("Hi, I'm interested in a private European tour for my family. Can you help?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base py-4 px-6 justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Tell us about your family
                </a>
                <Link href="/tours" className="btn-outline border-white/60 text-white hover:bg-white/10 text-base py-4 px-6 justify-center">
                  Browse all tours
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Stats Strip ─── */}
      <SectionWrapper variant="primary" className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustStats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div>
                <p className="font-heading text-4xl font-semibold text-[#E8C04A]">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-white/60 font-body mt-1">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── How It Works ─── */}
      <SectionWrapper id="how-it-works" variant="warm">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-label">The process</span>
            <h2 className="font-heading text-4xl font-semibold text-[#1A1A14] mt-2">
              How your trip comes together
            </h2>
            <p className="text-[#4A4A3C] font-body mt-3 max-w-xl mx-auto">
              From your first WhatsApp message to the moment your driver meets you at arrivals — this is how we make it happen.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-2xl p-6 border border-[#EDE8DE] h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#12442E]/8 flex items-center justify-center">
                    <step.icon size={22} className="text-[#12442E]" />
                  </div>
                  <span className="font-heading text-3xl font-semibold text-[#EDE8DE]">{step.number}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1A1A14] mb-2">{step.title}</h3>
                <p className="text-sm text-[#4A4A3C] font-body leading-relaxed">{step.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* ─── Featured Destinations ─── */}
      <SectionWrapper variant="section">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="section-label">Where we go</span>
              <h2 className="font-heading text-4xl font-semibold text-[#1A1A14] mt-2">
                Destinations we know by heart
              </h2>
            </div>
            <Link href="/destinations" className="btn-outline shrink-0 self-start sm:self-auto">
              All destinations
            </Link>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredDestinations.map((dest, i) => (
            <StaggerItem key={dest.slug}>
              <DestinationCard destination={dest} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* ─── Featured Tours ─── */}
      <SectionWrapper variant="warm">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="section-label">Ready to go</span>
              <h2 className="font-heading text-4xl font-semibold text-[#1A1A14] mt-2">
                Our featured programmes
              </h2>
              <p className="text-[#4A4A3C] font-body mt-2 max-w-md">
                Every itinerary built from real road knowledge. Not a template. Not AI-generated.
              </p>
            </div>
            <Link href="/tours" className="btn-outline shrink-0 self-start sm:self-auto">
              View all tours
            </Link>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.slice(0, 3).map((tour, i) => (
            <StaggerItem key={tour.id}>
              <TourCard tour={tour} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* ─── Why Private? ─── */}
      <SectionWrapper variant="section">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-label">Why Elide</span>
            <h2 className="font-heading text-4xl font-semibold text-[#1A1A14] mt-2">
              This isn't a group tour.
            </h2>
            <p className="text-[#4A4A3C] font-body mt-3 max-w-xl mx-auto">
              Every detail of a Elide trip is designed for your family — not forty strangers who happened to book the same departure.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyPrivate.map((item, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-xl p-6 border border-[#EDE8DE]">
                <div className="w-10 h-10 rounded-lg bg-[#DAA521]/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-[#DAA521]" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#1A1A14] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A4A3C] font-body leading-relaxed">{item.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* ─── Fleet Showcase ─── */}
      <SectionWrapper variant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <span className="section-label text-[#E8C04A]">The fleet</span>
            <h2 className="font-heading text-4xl font-semibold text-white mt-2 mb-4">
              A Mercedes for every group size
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-6">
              Whether it's two of you or sixteen, we have the right vehicle. Every car in our fleet includes WiFi, leather interiors, USB charging, and a professional English-speaking chauffeur.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { vehicle: 'Mercedes GLE / 350 Hybrid', for: 'Couples & small families (1–3 guests)' },
                { vehicle: 'Mercedes V-Class', for: 'Families (up to 7 guests)' },
                { vehicle: 'Mercedes Sprinter', for: 'Groups (up to 16 guests)' },
                { vehicle: 'Mercedes S-Class / Maybach', for: 'VIP & special occasions (1–4 guests)' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#DAA521] font-bold mt-0.5">✓</span>
                  <div>
                    <span className="text-white font-body font-medium text-sm">{item.vehicle}</span>
                    <span className="text-white/50 font-body text-sm"> — {item.for}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about#fleet" className="btn-accent">
              About our fleet
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=85&auto=format"
                alt="Mercedes V-Class interior — Elide private tours"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* ─── CTA Section ─── */}
      <SectionWrapper variant="section">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-label">Start planning</span>
            <h2 className="font-heading text-4xl font-semibold text-[#1A1A14] mt-2 mb-4">
              Tell us about your family.<br />We'll design your journey.
            </h2>
            <p className="text-[#4A4A3C] font-body leading-relaxed mb-8">
              WhatsApp us with who's traveling and when. We respond within 2 hours during business hours. No obligation, no pressure — just a conversation about your trip.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton
                variant="large"
                message="Hi, I'm planning a private European tour for my family. Can we talk?"
                label="Start on WhatsApp"
              />
              <Link href="/contact" className="btn-outline text-base py-4 px-6 justify-center">
                Send an enquiry
              </Link>
            </div>
            <p className="text-xs text-[#8A8A7A] font-body mt-4">
              We respond within 2 hours · Prices in EUR, INR, or AED
            </p>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  )
}
