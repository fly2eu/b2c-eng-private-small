import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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

const travelStyles = [
  {
    style: 'Slow & Experiential',
    tagline: 'For the trip where you finally have that conversation.',
    for: 'Couples · multigenerational families · repeat visitors',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format',
    imageAlt: 'Serene lake terrace — slow travel',
  },
  {
    style: 'The Grand Tour',
    tagline: 'For the first time you see Europe — and want to see it all.',
    for: 'First-timers · professionals · families doing Europe for the first time',
    image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=600&q=80&auto=format',
    imageAlt: 'Winding mountain road aerial — grand tour',
  },
  {
    style: 'Countryside & Nature',
    tagline: 'For the one who\'s been saying "I want the real Europe."',
    for: 'Nature lovers · hikers · photographers · anyone escaping city noise',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format',
    imageAlt: 'Alpine valley — countryside and nature',
  },
  {
    style: 'City Explorer',
    tagline: 'For the group that runs on culture, coffee, and evening walks.',
    for: 'Culture seekers · shoppers · art lovers · corporate groups',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80&auto=format',
    imageAlt: 'Paris street — city explorer',
  },
]

const processSteps = [
  {
    title: 'A message is all it takes.',
    body: 'WhatsApp us with who\'s coming and what you\'d love to see. Two minutes. No forms, no commitment.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&q=80&auto=format',
    imageAlt: 'Messaging on phone',
  },
  {
    title: 'We build your journey.',
    body: 'Day-by-day itinerary built around your pace. Every stay handpicked. Every route personally driven.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80&auto=format',
    imageAlt: 'Map planning',
  },
  {
    title: 'You arrive. We\'ve handled the rest.',
    body: 'Your chauffeur meets you at arrivals. Hotels confirmed. Itinerary ready. Nothing left to organise.',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&q=80&auto=format',
    imageAlt: 'Premium black SUV chauffeur service',
  },
  {
    title: 'You\'re just... there.',
    body: 'On the mountain road. At the lakeside café. In the moment you came for. We\'re in the background if anything changes.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80&auto=format',
    imageAlt: 'Road journey through Europe',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── SECTION 1: Hero ─── */}
      <section
        className="relative min-h-screen flex items-end overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
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

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a1e14]/35 via-[#0a1e14]/55 to-[#0a1e14]/80" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-28">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-5 tracking-tight">
                Come back closer<br />
                <span className="text-[#E8C04A]">than you left.</span>
              </h1>
              <p className="text-white/85 font-heading font-light text-xl md:text-2xl leading-relaxed mb-3">
                The journey that brings you closer.
              </p>
              <p className="text-white/45 text-xs font-body tracking-widest uppercase mb-10">
                Private vehicle · Dedicated driver · Every detail handled · 1–19 guests
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

      {/* ─── SECTION 2: Vignette — What changes when it's yours ─── */}
      <section className="relative overflow-hidden bg-[#12442E]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[600px]">
          {/* Left content */}
          <div className="px-8 md:px-16 py-20 md:py-28 flex flex-col justify-center">
            <ScrollReveal>
              <div className="section-divider" />
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-8 leading-tight">
                What changes when it&apos;s yours.
              </h2>
              <div className="mb-8">
                <p className="font-heading text-xl md:text-2xl font-light text-white/85 leading-relaxed mb-4 italic">
                  &ldquo;Picture this: it&apos;s day three. You&apos;re driving through the Lauterbrunnen Valley — waterfalls on both sides, the valley opening ahead. Someone says &lsquo;can we stop here for a bit?&rsquo;&rdquo;
                </p>
                <p className="font-heading text-3xl font-semibold text-[#E8C04A]">
                  You do.
                </p>
              </div>
              <p className="text-white/70 font-body text-base leading-relaxed mb-10">
                No one checks their watch. There&apos;s no tour leader. Just your people, this valley, and time that belongs entirely to you.
              </p>

              {/* Three features — text only, no cards, no borders */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#DAA521]/30">
                {[
                  { title: 'Every stop is your decision.', detail: 'Stay as long as the moment deserves. Leave when you\'re ready.' },
                  { title: 'Every day is designed for you.', detail: 'Your pace, your interests — not forty strangers sharing a schedule.' },
                  { title: 'Every detail is already handled.', detail: 'Hotels confirmed. Itinerary ready. You just arrive and be present.' },
                ].map((item, i) => (
                  <div key={i} className={`${i === 0 ? 'pb-6 sm:pb-0 sm:pr-6' : i === 1 ? 'py-6 sm:py-0 sm:px-6' : 'pt-6 sm:pt-0 sm:pl-6'}`}>
                    <p className="font-heading text-base font-semibold text-white mb-2">{item.title}</p>
                    <p className="text-sm text-white/60 font-body leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: full-height atmospheric image */}
          <div className="relative min-h-[400px] lg:min-h-0 order-first lg:order-last">
            <Image
              src="https://images.unsplash.com/photo-1596436165816-5df26fc13f4a?w=1200&q=85&auto=format"
              alt="Alpine lake — atmospheric European landscape"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#12442E]/20" />
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Travel Styles — photography-led ─── */}
      <SectionWrapper variant="section" id="choose-your-style">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="section-divider mx-auto" />
            <h2 className="font-heading text-4xl font-semibold text-[#1A1A14] mb-4">
              How do you like to travel?
            </h2>
            <p className="text-[#4A4A3C] font-body max-w-xl mx-auto">
              Every group is different. Tell us your pace and we&apos;ll design around it.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {travelStyles.map((style, i) => (
            <StaggerItem key={i}>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-default">
                <Image
                  src={style.image}
                  alt={style.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1A]/90 via-[#0F2A1A]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">{style.style}</h3>
                  <p className="text-sm font-heading font-light text-[#E8C04A] italic mb-2">&ldquo;{style.tagline}&rdquo;</p>
                  <p className="text-xs font-body text-white/50">{style.for}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <ScrollReveal>
          <div className="text-center">
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

      {/* ─── SECTION 4: Process — no icons, images above steps ─── */}
      <SectionWrapper id="how-it-works" variant="warm">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="section-divider mx-auto" />
            <h2 className="font-heading text-4xl font-semibold text-[#1A1A14] mb-4">
              How your journey comes together
            </h2>
            <p className="text-[#4A4A3C] font-body max-w-xl mx-auto">
              From your first message to the moment your chauffeur meets you at arrivals.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[90px] left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-[#DAA521]/40 z-0" />

          {processSteps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Small atmospheric image */}
                <div className="relative w-44 h-44 rounded-xl overflow-hidden mb-5 shrink-0">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#12442E]/10" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#1A1A14] mb-2">{step.title}</h3>
                <p className="text-sm text-[#4A4A3C] font-body leading-relaxed">{step.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── SECTION 5: Destinations ─── */}
      <SectionWrapper variant="section">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="section-divider" />
              <h2 className="font-heading text-4xl font-semibold text-[#1A1A14]">
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

      {/* ─── SECTION 5b: Featured Tours ─── */}
      <SectionWrapper variant="warm">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="section-divider" />
              <h2 className="font-heading text-4xl font-semibold text-[#1A1A14]">
                Our featured programmes
              </h2>
              <p className="text-[#4A4A3C] font-body mt-2 max-w-md">
                Every itinerary built from real road knowledge. Use them as starting points — we tailor every journey to your group.
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

      {/* ─── SECTION 6: Trust Line ─── */}
      <SectionWrapper variant="section">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-body text-sm text-[#8A8A7A] uppercase tracking-widest mb-3">
              Trusted by discerning travelers from India and the GCC
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-[#4A4A3C] font-body">
              {[
                { value: 10, suffix: '+', label: 'Private journeys' },
                { value: 7, suffix: '', label: 'Countries' },
                { value: 100, suffix: '%', label: 'Satisfaction' },
                { value: 24, suffix: '/7', label: 'On-trip support' },
              ].map((stat, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-[#DDD8CC] mr-1.5">·</span>}
                  <span className="font-heading font-semibold text-[#12442E] text-lg">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-[#8A8A7A]">{stat.label}</span>
                </span>
              ))}
              <span className="text-[#DDD8CC] mr-1.5">·</span>
              <span className="text-[#8A8A7A]">IATA TIDS certified</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial — centered, no card */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-divider mx-auto mb-8" />
            <p className="font-heading text-2xl font-light text-[#4A4A3C] italic leading-relaxed mb-6">
              &ldquo;We&apos;re collecting guest testimonials as our journeys are completed — with permission, always verbatim. Early trips have all been five-star. Real stories coming soon.&rdquo;
            </p>
            <p className="text-sm text-[#8A8A7A] font-body">— The Elide team</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* ─── SECTION 7: Final CTA — full-bleed background ─── */}
      <section
        className="relative py-28 md:py-36 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0a1e14]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <ScrollReveal>
              <div className="section-divider mx-auto mb-6" style={{ backgroundColor: '#E8C04A' }} />
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
                The trip you keep talking about starts with a message.
              </h2>
              <p className="text-white/70 font-body leading-relaxed mb-8">
                Tell us who&apos;s coming and when. No forms, no commitment — just a conversation. We respond within 2 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <WhatsAppButton
                  variant="large"
                  message="Hi, I'm thinking about a private European journey. Can we talk?"
                  label="Start on WhatsApp"
                />
                <Link href="/contact" className="flex items-center justify-center gap-2 text-base py-4 px-6 rounded-md border border-white/30 text-white font-semibold font-body transition-all duration-200 hover:bg-white/10">
                  Send an enquiry
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
