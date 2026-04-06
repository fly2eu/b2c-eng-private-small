import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, MapPin, CheckCircle, XCircle, ChevronDown, ArrowLeft, Car } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import TourCard from '@/components/ui/TourCard'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/animations/ScrollReveal'
import WhatsAppButton from '@/components/forms/WhatsAppButton'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { getTourBySlug, tours } from '@/data/tours'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) return {}
  return {
    title: `${tour.title} — ${tour.durationDays.min}-Day Private Tour`,
    description: `${tour.description} From EUR ${tour.priceFromEur?.toLocaleString()} per person. Private vehicle, handpicked hotels, 24/7 on-trip support.`,
    openGraph: {
      title: `${tour.title} | Elide Private European Tours`,
      description: tour.description,
      images: [{ url: tour.heroImage.startsWith('https://placehold') ? 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85' : tour.heroImage }],
    },
  }
}

// Unsplash images mapped per destination/country
const HERO_IMAGES: Record<string, string> = {
  switzerland: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format',
  france: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=1920&q=85&auto=format',
  italy: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=85&auto=format',
  austria: 'https://images.unsplash.com/photo-1599423423923-6b5cbe73c6df?w=1920&q=85&auto=format',
}

function getHeroImage(tour: ReturnType<typeof getTourBySlug>): string {
  if (!tour) return HERO_IMAGES.switzerland
  const country = tour.countries[0]?.toLowerCase() || 'switzerland'
  for (const key of Object.keys(HERO_IMAGES)) {
    if (country.includes(key)) return HERO_IMAGES[key]
  }
  return HERO_IMAGES.switzerland
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) notFound()

  const heroImg = getHeroImage(tour)
  const relatedTours = tours.filter((t) => t.id !== tour.id && t.countries.some(c => tour.countries.includes(c))).slice(0, 3)
  const whatsappMsg = `Hi, I'm interested in the "${tour.title}" tour. Can you tell me more about availability and pricing?`

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src={heroImg}
          alt={`${tour.title} — private chauffeured tour`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1A]/90 via-[#0F2A1A]/40 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/tours" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-body transition-colors">
              <ArrowLeft size={14} />
              All tours
            </Link>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
          <div className="max-w-3xl">
            <span className="section-label text-[#E8C04A] mb-3 block">{tour.countries.join(' · ')}</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white leading-tight mb-4">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="flex items-center gap-1.5 text-sm text-white/80 font-body">
                <Clock size={15} className="text-[#E8C04A]" />
                {tour.durationDays.min} days
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/80 font-body">
                <Users size={15} className="text-[#E8C04A]" />
                Up to {tour.groupSize.max} guests
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/80 font-body">
                <Car size={15} className="text-[#E8C04A]" />
                Private vehicle
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/80 font-body">
                <MapPin size={15} className="text-[#E8C04A]" />
                Handpicked hotels
              </span>
            </div>
            {tour.priceFromEur && (
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-white/50 font-body uppercase tracking-widest">From</span>
                <span className="font-heading text-3xl font-semibold text-[#E8C04A]">EUR {tour.priceFromEur.toLocaleString()}</span>
                <span className="text-sm text-white/50 font-body">per person</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Sticky CTA Bar ─── */}
      <div className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-sm border-b border-[#EDE8DE] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <p className="hidden sm:block font-heading text-lg font-semibold text-[#1A1A14] truncate">
            {tour.title}
          </p>
          <div className="flex items-center gap-3 ml-auto">
            {tour.priceFromEur && (
              <span className="hidden sm:block text-sm text-[#8A8A7A] font-body">
                From <strong className="text-[#12442E] font-semibold font-heading">EUR {tour.priceFromEur.toLocaleString()}</strong> / person
              </span>
            )}
            <a
              href={getWhatsAppUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2.5 px-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enquire now
            </a>
          </div>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <SectionWrapper variant="warm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* Left: content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <ScrollReveal>
              <div>
                <span className="section-label mb-2 block">Overview</span>
                <p className="text-[#4A4A3C] font-body leading-relaxed text-base">
                  {tour.description}
                </p>
              </div>
            </ScrollReveal>

            {/* Highlights */}
            <ScrollReveal>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1A1A14] mb-4">
                  Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#4A4A3C] font-body">
                      <CheckCircle size={16} className="text-[#12442E] mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Day-by-Day Accordion */}
            <ScrollReveal>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1A1A14] mb-3">
                  Day by day
                </h2>
                <p className="text-sm text-[#4A4A3C] font-body mb-5 leading-relaxed bg-[#F4EFE4] rounded-xl px-5 py-4 border border-[#DDD8CC]">
                  <strong className="text-[#12442E]">Every itinerary is a starting point.</strong>{' '}
                  Days can be reordered, extended, or adjusted to suit your group&apos;s pace and interests. Tell us what matters most — we&apos;ll build around it.
                </p>
                <DayAccordion days={tour.days} />
              </div>
            </ScrollReveal>

            {/* Included / Not Included */}
            <ScrollReveal>
              <div>
                <p className="text-sm text-[#4A4A3C] font-body mb-4 leading-relaxed">
                  Everything below is handled. You don&apos;t need to think about any of it.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#F4EFE4] rounded-xl p-6">
                  <h3 className="font-heading text-lg font-semibold text-[#1A1A14] mb-4 flex items-center gap-2">
                    <CheckCircle size={18} className="text-[#2D7A4F]" />
                    What&apos;s included
                  </h3>
                  <ul className="space-y-2">
                    {tour.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#4A4A3C] font-body">
                        <span className="text-[#2D7A4F] font-bold mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#EDE8DE]">
                  <h3 className="font-heading text-lg font-semibold text-[#1A1A14] mb-4 flex items-center gap-2">
                    <XCircle size={18} className="text-[#8A8A7A]" />
                    Not included
                  </h3>
                  <ul className="space-y-2">
                    {tour.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#4A4A3C] font-body">
                        <span className="text-[#8A8A7A] mt-0.5">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-5">
              {/* Price card */}
              <ScrollReveal direction="right">
                <div className="bg-white rounded-2xl border border-[#EDE8DE] p-6 shadow-sm">
                  <div className="mb-4 pb-4 border-b border-[#EDE8DE]">
                    <p className="text-xs text-[#8A8A7A] font-body uppercase tracking-widest mb-1">Starting from</p>
                    <p className="font-heading text-4xl font-semibold text-[#DAA521]">
                      EUR {tour.priceFromEur?.toLocaleString()}
                    </p>
                    <p className="text-sm text-[#8A8A7A] font-body mt-0.5">per person · indicative · twin sharing</p>
                    <p className="text-xs text-[#8A8A7A] font-body mt-2">Indicative pricing — every journey is tailored. WhatsApp us for your personalised quote.</p>
                  </div>
                  <ul className="space-y-2 text-sm text-[#4A4A3C] font-body mb-5">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#12442E]" />{tour.durationDays.min} days / {tour.durationDays.min - 1} nights</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#12442E]" />Groups of {tour.groupSize.min}–{tour.groupSize.max}</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#12442E]" />Private vehicle, no shared transfers</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#12442E]" />Handpicked hotel accommodation</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#12442E]" />Daily breakfast included</li>
                  </ul>
                  <a
                    href={getWhatsAppUrl(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Get a quote on WhatsApp
                  </a>
                  <Link href="/contact" className="btn-outline w-full justify-center mt-2.5 text-sm">
                    Send an enquiry
                  </Link>
                  <p className="text-center text-xs text-[#8A8A7A] font-body mt-3">
                    We respond within 2 hours
                  </p>
                </div>
              </ScrollReveal>

              {/* Trust signals */}
              <ScrollReveal direction="right" delay={0.1}>
                <div className="bg-[#F4EFE4] rounded-xl p-5">
                  <p className="text-xs font-body font-medium uppercase tracking-[0.1em] text-[#8A8A7A] mb-3">
                    Why Elide
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      'Private vehicle — your group only',
                      'Every route personally driven by our team',
                      'Based in Europe — on-ground support',
                      'Handpicked hotels — comfort and character',
                      '24/7 support throughout your trip',
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#4A4A3C] font-body">
                        <span className="text-[#12442E] font-bold mt-0.5">✓</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Tags */}
              {tour.tags.length > 0 && (
                <ScrollReveal direction="right" delay={0.15}>
                  <div className="flex flex-wrap gap-2">
                    {tour.tags.map((tag, i) => (
                      <span key={i} className="badge badge-primary text-xs">{tag}</span>
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Related Tours ─── */}
      {relatedTours.length > 0 && (
        <SectionWrapper variant="section">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-semibold text-[#1A1A14] mb-8">
              You might also like
            </h2>
          </ScrollReveal>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTours.map((t) => (
              <StaggerItem key={t.id}>
                <TourCard tour={t} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </SectionWrapper>
      )}

      {/* ─── Bottom CTA ─── */}
      <SectionWrapper variant="primary">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-white mb-3">
            This journey is waiting for you.
          </h2>
          <p className="text-white/70 font-body mb-6">
            WhatsApp us to check availability, adjust the itinerary, or start from scratch. No commitment — just a conversation.
          </p>
          <WhatsAppButton variant="large" message={whatsappMsg} label="Start on WhatsApp" />
        </div>
      </SectionWrapper>
    </>
  )
}

// ─── Day Accordion (client component) ─────────────────────────────────────────
import DayAccordion from './DayAccordion'
