import type { Metadata } from 'next'
import TourCard from '@/components/ui/TourCard'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/animations/ScrollReveal'
import WhatsAppButton from '@/components/forms/WhatsAppButton'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { tours } from '@/data/tours'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Private European Tours — Elide',
  description:
    'Browse our private chauffeured European tour programmes — Switzerland, France, Italy, Austria. Day-by-day itineraries, premium fleet, handpicked stays. Indicative prices from EUR 890 per person.',
}

const travelStyleOrder = ['grand-tour', 'slow', 'countryside', 'city'] as const
const travelStyleLabels: Record<string, string> = {
  'slow': 'Slow & Experiential',
  'grand-tour': 'Grand Tour',
  'countryside': 'Countryside & Nature',
  'city': 'City Explorer',
}

export default function ToursPage() {
  // Group tours by travel style, with ungrouped at end
  const grouped = travelStyleOrder.reduce((acc, style) => {
    const filtered = tours.filter((t) => t.travelStyle === style)
    if (filtered.length > 0) acc[style] = filtered
    return acc
  }, {} as Record<string, typeof tours>)
  const ungrouped = tours.filter((t) => !t.travelStyle)

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-[#12442E] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1596436165816-5df26fc13f4a?w=1920&q=70&auto=format"
            alt="European mountain road"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white mb-4">
              Private European Tours
            </h1>
            <p className="text-white/70 font-body text-lg max-w-xl leading-relaxed mb-3">
              Every itinerary is a starting point, not a fixed product. We tailor each journey to your group — your pace, your interests, your dates.
            </p>
            <p className="text-white/50 font-body text-sm max-w-lg">
              All prices shown are indicative. Your personalised quote follows a short consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Travel style intro */}
      <SectionWrapper variant="warm">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="section-divider mx-auto" />
            <h2 className="font-heading text-3xl font-semibold text-[#1A1A14] mb-4">
              How do you like to travel?
            </h2>
            <p className="text-[#4A4A3C] font-body">
              Our programmes are grouped by travel pace. Browse by style below, or scroll through all tours.
              Not sure? <a href={getWhatsAppUrl("Hi, I need help choosing the right travel style and tour for my group.")} target="_blank" rel="noopener noreferrer" className="text-[#12442E] font-medium underline underline-offset-2">WhatsApp us</a> — we'll recommend the perfect fit.
            </p>
          </div>
        </ScrollReveal>

        {/* Render grouped tours */}
        {Object.entries(grouped).map(([style, styleTours]) => (
          <div key={style} className="mb-14">
            <ScrollReveal>
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-semibold text-[#1A1A14]">
                  {travelStyleLabels[style]}
                </h3>
                <div className="w-12 h-0.5 bg-[#DAA521] mt-2" />
              </div>
            </ScrollReveal>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {styleTours.map((tour) => (
                <StaggerItem key={tour.id}>
                  <TourCard tour={tour} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        ))}

        {/* Ungrouped tours */}
        {ungrouped.length > 0 && (
          <div className="mb-14">
            <ScrollReveal>
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-semibold text-[#1A1A14]">More Programmes</h3>
                <div className="w-12 h-0.5 bg-[#DAA521] mt-2" />
              </div>
            </ScrollReveal>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ungrouped.map((tour) => (
                <StaggerItem key={tour.id}>
                  <TourCard tour={tour} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        )}

        {/* Custom tour CTA */}
        <ScrollReveal>
          <div className="mt-4 bg-[#12442E] rounded-2xl p-8 text-center">
            <h3 className="font-heading text-2xl font-semibold text-white mb-2">
              Don't see exactly what you need?
            </h3>
            <p className="text-white/70 font-body mb-3 max-w-md mx-auto">
              France, Italy, Austria, multi-country — we build custom itineraries around your dates, interests, and group. Every programme above is a starting point, not a fixed product.
            </p>
            <p className="text-white/50 font-body text-sm mb-6 max-w-sm mx-auto">
              WhatsApp us with who's traveling and what you'd love to see. We'll design the rest.
            </p>
            <WhatsAppButton
              message="Hi, I'd like a custom European tour designed for my group. Can you help?"
              label="Design a custom tour"
              variant="large"
            />
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  )
}
