import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import TourCard from '@/components/ui/TourCard'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/animations/ScrollReveal'
import WhatsAppButton from '@/components/forms/WhatsAppButton'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { getDestinationBySlug, destinations } from '@/data/destinations'
import { getToursByRegion } from '@/data/tours'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const dest = getDestinationBySlug(slug)
  if (!dest) return {}
  const metaDesc = `Private chauffeured journeys through ${dest.name} — every detail handled, every day yours. ${dest.tagline}`
  return {
    title: `${dest.name} Private Journeys — Elide`,
    description: metaDesc.slice(0, 160),
    openGraph: {
      title: `${dest.name} | Elide Private European Journeys`,
      description: metaDesc.slice(0, 160),
      images: [{ url: dest.heroImage }],
    },
  }
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params
  const dest = getDestinationBySlug(slug)
  if (!dest) notFound()

  const destTours = getToursByRegion(dest.name)
  const whatsappMsg = `Hi, I'm interested in a private tour of ${dest.name}. Can you help?`

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <Image
          src={dest.heroImage}
          alt={`${dest.name} private tours`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1A]/90 via-[#0F2A1A]/35 to-transparent" />

        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/destinations" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-body transition-colors">
              <ArrowLeft size={14} />
              All destinations
            </Link>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-2xl">
            <h1 className="font-heading text-5xl font-semibold text-white mb-3">
              {dest.name}
            </h1>
            <p className="text-xl text-white/80 font-heading font-light italic">
              {dest.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <SectionWrapper variant="warm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="section-divider" />
              <p className="text-[#4A4A3C] font-body leading-relaxed text-base mb-6">
                {dest.description}
              </p>
              <div className="flex items-start gap-2 text-sm text-[#4A4A3C] font-body">
                <span><strong className="text-[#1A1A14]">Best time to visit:</strong> {dest.bestTime}</span>
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal direction="right">
              <div className="bg-[#F4EFE4] rounded-xl p-6">
                <h3 className="font-heading text-lg font-semibold text-[#1A1A14] mb-4">Highlights</h3>
                <ul className="space-y-2.5">
                  {dest.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#4A4A3C] font-body">
                      <span className="text-[#DAA521] mt-0.5 shrink-0">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-[#DDD8CC]">
                  <a
                    href={getWhatsAppUrl(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Plan a {dest.name} trip
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>

      {/* Tours for this destination */}
      {destTours.length > 0 ? (
        <SectionWrapper variant="section">
          <ScrollReveal>
            <div className="section-divider" />
            <h2 className="font-heading text-3xl font-semibold text-[#1A1A14] mb-8">
              Journeys through {dest.name}
            </h2>
          </ScrollReveal>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destTours.map((tour) => (
              <StaggerItem key={tour.id}>
                <TourCard tour={tour} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </SectionWrapper>
      ) : (
        <SectionWrapper variant="section">
          <ScrollReveal>
            <div className="bg-[#12442E] rounded-2xl p-10 text-center max-w-xl mx-auto">
              <h2 className="font-heading text-2xl font-semibold text-white mb-3">
                Custom {dest.name} tours
              </h2>
              <p className="text-white/70 font-body mb-6">
                We build custom itineraries for {dest.name} around your dates, interests, and group size. WhatsApp us to start planning.
              </p>
              <WhatsAppButton message={whatsappMsg} label={`Plan my ${dest.name} trip`} variant="large" />
            </div>
          </ScrollReveal>
        </SectionWrapper>
      )}
    </>
  )
}
