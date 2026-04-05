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
  title: 'Private European Tours',
  description:
    'Browse our private chauffeured European tour programmes — Switzerland, France, Italy, Austria. Day-by-day itineraries, Mercedes fleet, 4-star hotels. From EUR 890 per person.',
}

export default function ToursPage() {
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
            <span className="section-label text-[#E8C04A]">Our programmes</span>
            <h1 className="font-heading text-5xl font-semibold text-white mt-2 mb-4">
              Private European Tours
            </h1>
            <p className="text-white/70 font-body text-lg max-w-xl leading-relaxed">
              Every itinerary built from real road knowledge. Day-by-day plans, Mercedes fleet, 4-star boutique hotels — all included.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tour Grid */}
      <SectionWrapper variant="warm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <p className="text-sm text-[#8A8A7A] font-body">
            {tours.length} programmes available
          </p>
          <a
            href={getWhatsAppUrl("Hi, I'd like to discuss a custom European tour for my family. Can you help?")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm self-start sm:self-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Need a custom tour?
          </a>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <StaggerItem key={tour.id}>
              <TourCard tour={tour} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Custom tour CTA */}
        <ScrollReveal>
          <div className="mt-12 bg-[#12442E] rounded-2xl p-8 text-center">
            <h3 className="font-heading text-2xl font-semibold text-white mb-2">
              Don't see exactly what you need?
            </h3>
            <p className="text-white/70 font-body mb-6 max-w-md mx-auto">
              France, Italy, Austria, multi-country — we build custom itineraries around your dates, interests, and group. WhatsApp us to start.
            </p>
            <WhatsAppButton
              message="Hi, I'd like a custom European tour. Can you help build an itinerary?"
              label="Design a custom tour"
              variant="large"
            />
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  )
}
