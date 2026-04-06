import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Clock, Star, Users, Car, MapPin, CheckCircle, Phone, Sunrise, Globe, TreePine, Building2 } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import TourCard from '@/components/ui/TourCard'
import DestinationCard from '@/components/ui/DestinationCard'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/animations/ScrollReveal'
import CountUp from '@/components/animations/CountUp'
import WhatsAppButton from '@/components/forms/WhatsAppButton'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { featuredTours } from '@/data/tours'
import { featuredDestinations } from '@/data/destinations'

export const metadata: Metadata = {
  title: 'Elide — Private European Journeys',
  description:
    'What happens when everything is handled and the only thing left is Europe — and each other. Private chauffeured journeys through Switzerland, France, Italy and beyond.',
}

const howItWorksSteps = [
  {
    number: '01',
    icon: Phone,
    title: 'A message is all it takes.',
    body: 'Send us a WhatsApp with who\'s coming, when, and what you\'d love to see. Two minutes. No forms, no commitment.',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'We build your journey.',
    body: 'Day-by-day itinerary built around your pace and group. Every stay handpicked. Every route personally driven before it reaches you.',
  },
  {
    number: '03',
    icon: Car,
    title: 'You arrive. We\'ve handled the rest.',
    body: 'Your chauffeur meets you at arrivals with a name board. Hotels confirmed. Itinerary ready. You have exactly nothing to organise.',
  },
  {
    number: '04',
    icon: Star,
    title: 'You\'re just... there.',
    body: 'On the mountain road. At the lakeside café. In the moment you came for. We\'re in the background if anything changes — you just enjoy.',
  },
]

const trustStats = [
  { value: 10, suffix: '+', label: 'Private journeys delivered' },
  { value: 7, suffix: '', label: 'Countries covered' },
  { value: 24, suffix: '/7', label: 'On-ground support' },
  { value: 100, suffix: '%', label: 'Client satisfaction' },
]


const travelStyles = [
  {
    icon: Sunrise,
    style: 'Slow & Experiential',
    tagline: 'For the trip where you finally have that conversation.',
    detail: 'Three days in one valley. The long lunches. The roads no one else takes. You come back different.',
    for: 'Couples · multigenerational families · repeat visitors',
    color: 'bg-[#1D5C3F]/8 border-[#1D5C3F]/20',
    iconColor: 'text-[#12442E]',
  },
  {
    icon: Globe,
    style: 'The Grand Tour',
    tagline: 'For the first time you see Europe — and want to see it all.',
    detail: 'Multiple countries, iconic moments, efficient routing. Every landmark, without the logistics overhead.',
    for: 'First-timers · professionals with limited leave · families doing Europe for the first time',
    color: 'bg-[#DAA521]/8 border-[#DAA521]/20',
    iconColor: 'text-[#B8891A]',
  },
  {
    icon: TreePine,
    style: 'Countryside & Nature',
    tagline: 'For the one who\'s been saying "I want the real Europe."',
    detail: 'Alpine passes, national parks, rural valleys. The Europe that doesn\'t make the tourist brochure — but should.',
    for: 'Nature lovers · hikers · photographers · anyone escaping city noise',
    color: 'bg-[#2D7A4F]/8 border-[#2D7A4F]/20',
    iconColor: 'text-[#2D7A4F]',
  },
  {
    icon: Building2,
    style: 'City Explorer',
    tagline: 'For the group that runs on culture, coffee, and evening walks.',
    detail: 'Museums, markets, architecture, food scenes. The great European cities — without the transport stress.',
    for: 'Culture seekers · shoppers · art lovers · corporate groups',
    color: 'bg-[#12442E]/8 border-[#12442E]/20',
    iconColor: 'text-[#12442E]',
  },
]

const whyPrivate = [
  {
    icon: Users,
    title: 'Your group only',
    body: 'No strangers on the bus. No compromising on pace. No waiting for others. Just your group, your vehicle, your trip.',
  },
  {
    icon: Car,
    title: 'A premium vehicle, always',
    body: 'Vehicles include V-Class for families, premium sedans for couples, and VIP Sprinters for groups — all with WiFi, leather, USB, and a professional chauffeur.',
  },
  {
    icon: Clock,
    title: 'Stop when you want',
    body: 'The viewpoint is spectacular? Stay an hour. The kids are asleep? Keep driving. Your itinerary flexes around you — not the other way around.',
  },
  {
    icon: Star,
    title: 'Handpicked stays',
    body: 'Boutique hotels, premium resorts, and distinguished properties — selected for comfort, location, and character. Not chain hotels.',
  },
  {
    icon: Shield,
    title: 'Every route personally driven',
    body: 'We don\'t put a road on an itinerary because it looked good on paper. Every route, we\'ve driven ourselves.',
  },
  {
    icon: CheckCircle,
    title: 'Price transparency',
    body: 'Indicative starting prices shown on every programme. No "call for quote" games. Personalised quote after a quick conversation.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      {/* Fallback background if video fails / hasn't loaded */}
      <section
        className="relative min-h-screen flex items-end overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Video background — drop public/hero-video.mp4 to activate */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a1e14]/35 via-[#0a1e14]/55 to-[#0a1e14]/80" />

        {/* Hero content — bottom-left, editorial */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-5 tracking-tight">
                Come back closer<br />
                <span className="text-[#E8C04A]">than you left.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/60 font-body leading-relaxed mb-10 max-w-xl">
                Private chauffeured journeys through Europe — every detail handled, every day yours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#how-it-works"
                  className="btn-accent text-base py-4 px-8 justify-center font-semibold"
                >
                  See How It Works
                </a>
                <a
                  href={getWhatsAppUrl("Hi, I'm interested in planning a private European journey. Can you help?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-base py-4 px-8 rounded-md border border-white/30 bg-white/8 text-white font-semibold font-body transition-all duration-200 hover:bg-[#25D366] hover:border-[#25D366]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Start a Conversation
                </a>
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

      {/* ─── A Different Way to See Europe ─── */}
      <SectionWrapper variant="warm" id="different-way">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="section-label">Private touring, explained</span>
              <h2 className="font-heading text-4xl font-semibold text-[#1A1A14] mt-2">
                What changes when it&apos;s yours.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#12442E] rounded-2xl p-8 md:p-12 mb-10">
              <p className="font-heading text-xl md:text-2xl font-light text-white/85 leading-relaxed mb-5 italic">
                &ldquo;Picture this: it&apos;s day three. You&apos;re driving through the Lauterbrunnen Valley — waterfalls on both sides, the valley opening ahead. Someone says &lsquo;can we stop here for a bit?&rsquo;&rdquo;
              </p>
              <p className="font-heading text-2xl md:text-3xl font-semibold text-[#E8C04A] mb-5">
                You do.
              </p>
              <p className="text-white/70 font-body text-lg leading-relaxed">
                No one checks their watch. There&apos;s no tour leader. There&apos;s no group. Just your people, this valley, and time that belongs entirely to you.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { outcome: 'Every stop is your decision.', detail: 'Stay as long as the moment deserves. Leave when you\'re ready.' },
              { outcome: 'Every day is designed for you.', detail: 'Your pace. Your interests. Your group — not forty strangers sharing a schedule.' },
              { outcome: 'Every detail is already handled.', detail: 'Hotels confirmed. Itinerary ready. You just arrive and be present.' },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-xl p-6 border border-[#EDE8DE] h-full">
                  <p className="font-heading text-lg font-semibold text-[#1A1A14] mb-2">{item.outcome}</p>
                  <p className="text-sm text-[#4A4A3C] font-body leading-relaxed">{item.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </SectionWrapper>

      {/* ─── Choose Your Style ─── */}
      <SectionWrapper variant="section" id="choose-your-style">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-label">Find your fit</span>
            <h2 className="font-heading text-4xl font-semibold text-[#1A1A14] mt-2 mb-4">
              How do you like to travel?
            </h2>
            <p className="text-[#4A4A3C] font-body mt-3 max-w-xl mx-auto">
              Every group is different. Tell us your pace and we&apos;ll design around it.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {travelStyles.map((style, i) => (
            <StaggerItem key={i}>
              <div className={`rounded-2xl p-6 border h-full flex flex-col ${style.color}`}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-white/60`}>
                  <style.icon size={22} className={style.iconColor} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#1A1A14] mb-2">{style.style}</h3>
                <p className={`text-sm font-body font-medium ${style.iconColor} mb-2 italic`}>"{style.tagline}"</p>
                <p className="text-sm text-[#4A4A3C] font-body leading-relaxed mb-4 flex-grow">{style.detail}</p>
                <p className="text-xs font-body text-[#8A8A7A] mt-auto">{style.for}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <ScrollReveal>
          <div className="text-center">
            <p className="text-[#4A4A3C] font-body mb-5 text-lg">
              Not sure yet? Tell us who&apos;s coming — we&apos;ll suggest the right fit.
            </p>
            <a
              href={getWhatsAppUrl("Hi, I'm not sure which travel style suits my group. Can you help us figure it out?")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Let&apos;s talk about your trip
            </a>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* ─── How Your Trip Comes Together ─── */}
      <SectionWrapper id="how-it-works" variant="warm">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-label">From message to memory</span>
            <h2 className="font-heading text-4xl font-semibold text-[#1A1A14] mt-2">
              How your journey comes together
            </h2>
            <p className="text-[#4A4A3C] font-body mt-3 max-w-xl mx-auto">
              From your first message to the moment your chauffeur meets you at arrivals — here&apos;s what we take off your plate.
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
          {featuredDestinations.map((dest) => (
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
                Every itinerary built from real road knowledge, not a template. Use them as starting points — we tailor every journey to your group.
              </p>
            </div>
            <Link href="/tours" className="btn-outline shrink-0 self-start sm:self-auto">
              View all tours
            </Link>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.slice(0, 3).map((tour) => (
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
              Every detail of an Elide journey is designed for your group — not forty strangers who happened to book the same departure date.
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
              A premium vehicle for every group size
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-6">
              Whether it's two of you or sixteen, we have the right vehicle. Every car in our fleet includes WiFi, leather interiors, USB charging, and a professional English-speaking chauffeur.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { vehicle: 'Premium SUV / GLE Hybrid', for: 'Couples & small groups (1–3 guests)' },
                { vehicle: 'V-Class (up to 7 passengers)', for: 'Families & small groups' },
                { vehicle: 'VIP Sprinter (up to 16 passengers)', for: 'Larger groups & celebrations' },
                { vehicle: 'S-Class / Maybach', for: 'VIP & special occasions (1–4 guests)' },
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
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=85&auto=format"
                alt="Premium vehicle interior — Elide private tours"
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
            <span className="section-label">Begin here</span>
            <h2 className="font-heading text-4xl font-semibold text-[#1A1A14] mt-2 mb-4">
              The trip you keep talking about<br />starts with a message.
            </h2>
            <p className="text-[#4A4A3C] font-body leading-relaxed mb-3">
              Tell us who&apos;s coming and when. No forms, no commitment — just a conversation about the journey you&apos;ve been imagining. We respond within 2 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              <span className="text-xs bg-[#12442E]/8 text-[#12442E] font-body font-medium px-3 py-1 rounded-full">Families</span>
              <span className="text-xs bg-[#12442E]/8 text-[#12442E] font-body font-medium px-3 py-1 rounded-full">Couples</span>
              <span className="text-xs bg-[#12442E]/8 text-[#12442E] font-body font-medium px-3 py-1 rounded-full">Friend groups</span>
              <span className="text-xs bg-[#12442E]/8 text-[#12442E] font-body font-medium px-3 py-1 rounded-full">Corporate groups</span>
              <span className="text-xs bg-[#12442E]/8 text-[#12442E] font-body font-medium px-3 py-1 rounded-full">Milestone celebrations</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton
                variant="large"
                message="Hi, I'm thinking about a private European journey. Can we talk?"
                label="Start on WhatsApp"
              />
              <Link href="/contact" className="btn-outline text-base py-4 px-6 justify-center">
                Send an enquiry
              </Link>
            </div>
            <p className="text-xs text-[#8A8A7A] font-body mt-5">
              We respond within 2 hours · Indicative prices in EUR · Personalised quote after consultation
            </p>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  )
}
