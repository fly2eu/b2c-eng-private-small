import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Car, Shield, Clock, MapPin, Users, GraduationCap, Star } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/animations/ScrollReveal'
import WhatsAppButton from '@/components/forms/WhatsAppButton'
import CountUp from '@/components/animations/CountUp'

export const metadata: Metadata = {
  title: 'About Elide — Built by people who know every road',
  description:
    'Founded by Europeans-by-experience — people who came for studies and stayed for the roads. Elide designs private chauffeured tours for Indian and GCC travelers across Europe.',
}

const values = [
  {
    icon: MapPin,
    title: 'France-rooted, Europe-experienced',
    body: 'Our founders came to France for higher education — PhD and Masters programmes. They lived in Europe for years, worked there, and traveled the continent obsessively. Every route recommendation comes from that lived knowledge.',
  },
  {
    icon: Car,
    title: 'We\'ve driven every route',
    body: 'Every road on our itineraries, we\'ve driven ourselves. Not a single recommendation is on our programmes because it looked good on paper.',
  },
  {
    icon: GraduationCap,
    title: 'Academic rigor in every itinerary',
    body: 'PhD-level research applied to travel planning. We study the roads, the weather patterns, the check-in times, and the logistics so you don\'t have to.',
  },
  {
    icon: Clock,
    title: '24/7 on-trip support',
    body: 'Something changes — a road closure, a late flight, a restaurant recommendation at 10pm. Message us. We respond. Real people who know Europe.',
  },
  {
    icon: Users,
    title: 'Built for Indian & GCC travelers',
    body: 'We understand what makes a trip work for Indian families, GCC couples, and mixed groups — pace, comfort, dietary needs, the desire for privacy and flexibility.',
  },
  {
    icon: CheckCircle,
    title: 'Detail-obsessed',
    body: 'Hotels are vetted. Parking is confirmed before every stop. Check-in times are coordinated with your arrival. Every detail — handled.',
  },
]

const fleet = [
  {
    name: 'Premium SUV (GLE Hybrid or equivalent)',
    for: 'Couples & small groups',
    guests: '1–3 guests',
    features: ['All-wheel drive for mountain roads', 'WiFi, water, leather interiors', 'Ideal for couples and small groups'],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80&auto=format',
  },
  {
    name: 'V-Class (or equivalent)',
    for: 'Families & medium groups',
    guests: 'Up to 7 guests',
    features: ['Sliding doors, generous luggage space', 'WiFi, USB charging, leather', '4WD available for mountain routes'],
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&q=80&auto=format',
  },
  {
    name: 'VIP Sprinter (or equivalent)',
    for: 'Groups & extended families',
    guests: 'Up to 16 guests',
    features: ['Air conditioning throughout', 'Generous luggage compartment', 'Ideal for friend groups and celebrations'],
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80&auto=format',
  },
  {
    name: 'S-Class / VIP Sedan',
    for: 'VIP & special occasions',
    guests: '1–4 guests',
    features: ['Senior chauffeur, concierge-level service', 'Available for milestone occasions', 'The ultimate private touring experience'],
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80&auto=format',
  },
]

const testimonials = [
  {
    quote: 'Client testimonial coming soon.',
    name: 'Guest from Mumbai',
    trip: 'Switzerland Wonderland · 9 days',
    rating: 5,
  },
  {
    quote: 'Client testimonial coming soon.',
    name: 'Guest from Dubai',
    trip: 'My Scenic Switzerland · 6 days',
    rating: 5,
  },
  {
    quote: 'Client testimonial coming soon.',
    name: 'Guest from Bangalore',
    trip: 'Alpine Grand Tour · 5 days',
    rating: 5,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 bg-[#12442E] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1920&q=60&auto=format"
            alt="European mountain road"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="section-label text-[#E8C04A] mb-3 block">About us</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white mb-4 max-w-2xl">
              Founded by Europeans-by-experience.
            </h1>
            <p className="text-white/70 font-body text-lg leading-relaxed max-w-xl">
              We came to France for studies. Stayed for the roads. Built Elide from a personal obsession with getting every detail right.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our story */}
      <SectionWrapper variant="warm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <span className="section-label mb-3 block">Our story</span>
            <h2 className="font-heading text-3xl font-semibold text-[#1A1A14] mb-5">
              We came for higher education. We stayed for the roads.
            </h2>
            <div className="space-y-4 text-[#4A4A3C] font-body leading-relaxed">
              <p>
                Elide was founded by people who came to Europe for PhD and Masters programmes in France. They lived here — not as tourists, but as residents who learned the train schedules, the seasonal road closures, the restaurants that don't appear on any app.
              </p>
              <p>
                Years of living and traveling across the continent built something that no AI can replicate: genuine, ground-level knowledge of what makes a European journey work. Which mountain pass opens first in spring. Which lakeside hotel has the room with the view. Where to have lunch on the way from Geneva to Interlaken.
              </p>
              <p>
                That research-driven, detail-obsessed approach — drawn from an academic background — is what we apply to every itinerary we design. Every programme we offer has been personally driven by our team before it's offered to a client.
              </p>
              <p>
                We serve Indian and GCC travelers because we understand the specific needs, preferences, and expectations of this audience. We've been there. We've navigated Europe as outsiders who became insiders. That's the perspective we bring.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85&auto=format"
                alt="Swiss Alps — Elide private tours"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper variant="primary">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 10, suffix: '+', label: 'Private journeys delivered' },
            { value: 7, suffix: '', label: 'Countries covered' },
            { value: 100, suffix: '%', label: 'Client satisfaction' },
            { value: 24, suffix: '/7', label: 'On-ground support' },
          ].map((stat, i) => (
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

      {/* Values */}
      <SectionWrapper variant="section">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-label">How we work</span>
            <h2 className="font-heading text-3xl font-semibold text-[#1A1A14] mt-2">
              What makes an Elide journey different
            </h2>
          </div>
        </ScrollReveal>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-xl p-6 border border-[#EDE8DE] h-full">
                <div className="w-10 h-10 rounded-lg bg-[#DAA521]/10 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-[#DAA521]" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#1A1A14] mb-2">{v.title}</h3>
                <p className="text-sm text-[#4A4A3C] font-body leading-relaxed">{v.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Trust & Credentials */}
      <SectionWrapper variant="warm">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="section-label">Trust & Credentials</span>
            <h2 className="font-heading text-3xl font-semibold text-[#1A1A14] mt-2">
              Our commitment to you
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-xl p-6 border border-[#EDE8DE] text-center">
              <div className="text-3xl font-heading font-semibold text-[#12442E] mb-2">IATA TIDS</div>
              <p className="text-sm text-[#4A4A3C] font-body">IATA TIDS Certified — recognised travel industry credentials</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-xl p-6 border border-[#EDE8DE] text-center">
              <div className="text-3xl font-heading font-semibold text-[#DAA521] mb-2">100%</div>
              <p className="text-sm text-[#4A4A3C] font-body">Client satisfaction across 10+ private journeys delivered</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="bg-white rounded-xl p-6 border border-[#EDE8DE] text-center">
              <div className="text-3xl font-heading font-semibold text-[#12442E] mb-2">2 hrs</div>
              <p className="text-sm text-[#4A4A3C] font-body">Guaranteed WhatsApp response time during business hours</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Testimonial placeholders */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <span className="section-label">Client voices</span>
            <h3 className="font-heading text-2xl font-semibold text-[#1A1A14] mt-2">
              What our clients say
            </h3>
          </div>
        </ScrollReveal>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-xl p-6 border border-[#EDE8DE]">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-[#DAA521] fill-[#DAA521]" />
                  ))}
                </div>
                <p className="text-[#4A4A3C] font-body text-sm leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-body text-sm font-semibold text-[#1A1A14]">{t.name}</p>
                  <p className="font-body text-xs text-[#8A8A7A]">{t.trip}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Fleet section */}
      <SectionWrapper id="fleet" variant="section">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-label">The fleet</span>
            <h2 className="font-heading text-3xl font-semibold text-[#1A1A14] mt-2">
              A premium vehicle for every group size
            </h2>
            <p className="text-[#4A4A3C] font-body mt-3 max-w-xl mx-auto">
              Every vehicle includes WiFi, bottled water, leather interiors, USB charging, and a professional English-speaking chauffeur. Vehicles matched to your group size and preferences.
            </p>
          </div>
        </ScrollReveal>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fleet.map((vehicle, i) => (
            <StaggerItem key={i}>
              <div className="card flex flex-col sm:flex-row overflow-hidden">
                <div className="relative w-full sm:w-48 h-40 sm:h-auto shrink-0">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex-1">
                  <span className="badge badge-accent text-xs mb-2">{vehicle.guests}</span>
                  <h3 className="font-heading text-lg font-semibold text-[#1A1A14] mb-1">{vehicle.name}</h3>
                  <p className="text-xs text-[#8A8A7A] font-body mb-3">{vehicle.for}</p>
                  <ul className="space-y-1.5">
                    {vehicle.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[#4A4A3C] font-body">
                        <span className="text-[#12442E] font-bold mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant="warm">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-semibold text-[#1A1A14] mb-4">
              Ready to plan your trip with us?
            </h2>
            <p className="text-[#4A4A3C] font-body mb-7">
              Tell us who's traveling, when, and what you'd love to see. We'll take it from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton
                message="Hi, I'd like to plan a private European tour with Elide. Can we talk?"
                label="WhatsApp us to start"
                variant="large"
              />
              <Link href="/contact" className="btn-outline text-base py-4 px-6 justify-center">
                Send an enquiry
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  )
}
