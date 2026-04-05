import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Car, Shield, Clock, MapPin, Users } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/animations/ScrollReveal'
import WhatsAppButton from '@/components/forms/WhatsAppButton'
import CountUp from '@/components/animations/CountUp'

export const metadata: Metadata = {
  title: 'About Elide — Built by people who know every road',
  description:
    'Elide is a team of private European tour specialists based in Europe. We\'ve driven every route we recommend. 24/7 on-ground support, Mercedes fleet, 4-star hotels.',
}

const values = [
  {
    icon: MapPin,
    title: 'We\'re based in Europe',
    body: 'Not routing calls from overseas. We\'re on the ground, in the same time zones as your hotels, your drivers, and the roads you\'ll be driving.',
  },
  {
    icon: Car,
    title: 'We\'ve driven every route',
    body: 'Every road on our itineraries, we\'ve driven ourselves. Not a single recommendation is on our programmes because it looked good on paper.',
  },
  {
    icon: Shield,
    title: 'Small team, personal attention',
    body: 'We don\'t have a call centre. Your trip gets real attention from people who know European travel inside out.',
  },
  {
    icon: Clock,
    title: '24/7 on-trip support',
    body: 'Something changes — a road closure, a late flight, a restaurant recommendation at 10pm. Message us. We respond.',
  },
  {
    icon: Users,
    title: 'Built for Indian & GCC families',
    body: 'We understand what makes a trip work for an Indian family or a GCC traveller — pace, comfort, dietary needs, the desire for privacy.',
  },
  {
    icon: CheckCircle,
    title: 'Detail-obsessed',
    body: 'Hotels are vetted for families. Parking is confirmed before every stop. Check-in times are coordinated with your arrival. Every detail — handled.',
  },
]

const fleet = [
  {
    name: 'Mercedes GLE / 350 Hybrid',
    for: 'Couples & small families',
    guests: '1–3 guests',
    features: ['All-wheel drive for mountain roads', 'WiFi, water, leather interiors', 'Ideal for couples and small families'],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80&auto=format',
  },
  {
    name: 'Mercedes V-Class',
    for: 'Families',
    guests: 'Up to 7 guests',
    features: ['Sliding doors, generous luggage space', 'WiFi, USB charging, leather', '4Matic all-wheel drive available'],
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&q=80&auto=format',
  },
  {
    name: 'Mercedes Sprinter',
    for: 'Groups & extended families',
    guests: 'Up to 16 guests',
    features: ['Air conditioning throughout', 'Generous luggage compartment', 'Ideal for friend groups and celebrations'],
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80&auto=format',
  },
  {
    name: 'Mercedes S-Class / Maybach',
    for: 'VIP & special occasions',
    guests: '1–4 guests',
    features: ['Senior chauffeur, concierge-level service', 'Available for special occasions', 'The ultimate private touring experience'],
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80&auto=format',
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
            alt="European road"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <ScrollReveal>
            <span className="section-label text-[#E8C04A] mb-3 block">About us</span>
            <h1 className="font-heading text-5xl font-semibold text-white mb-4">
              Built by people who've driven every road.
            </h1>
            <p className="text-white/70 font-body text-lg leading-relaxed max-w-xl">
              Elide is a team of European travel specialists. We design private chauffeured tours for Indian and GCC families — built from real on-the-ground knowledge, not templates.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our story */}
      <SectionWrapper variant="warm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <span className="section-label mb-3 block">Our approach</span>
            <h2 className="font-heading text-3xl font-semibold text-[#1A1A14] mb-5">
              We don't do group tours. We never have.
            </h2>
            <div className="space-y-4 text-[#4A4A3C] font-body leading-relaxed">
              <p>
                Elide was built around a single belief: a European trip should feel like the trip you always imagined — not a rushed group itinerary with strangers.
              </p>
              <p>
                Every programme we offer has been personally researched and driven by our team. We know which mountain pass opens in May and closes in November. We know which lakeside hotel has the best view from Room 14. We know where to stop for lunch on the way from Geneva to Interlaken.
              </p>
              <p>
                This isn't information we found online. It's knowledge we've built from time spent on European roads — because that's the only way to plan a trip worth taking.
              </p>
              <p>
                We're a small team by design. Your trip gets personal attention. Not a booking reference number and a call centre.
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
            { value: 10, suffix: '+', label: 'Ready-to-go programmes' },
            { value: 7, suffix: '', label: 'Countries covered' },
            { value: 24, suffix: '/7', label: 'On-ground support' },
            { value: 4, suffix: '-star', label: 'Hotel standard' },
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
              What makes an Elide trip different
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

      {/* Fleet section */}
      <SectionWrapper id="fleet" variant="warm">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-label">The fleet</span>
            <h2 className="font-heading text-3xl font-semibold text-[#1A1A14] mt-2">
              A Mercedes for every group size
            </h2>
            <p className="text-[#4A4A3C] font-body mt-3 max-w-xl mx-auto">
              Every vehicle in our fleet includes WiFi, bottled water, leather interiors, USB charging, and a professional English-speaking chauffeur.
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
      <SectionWrapper variant="section">
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
