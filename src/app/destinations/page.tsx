import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import DestinationCard from '@/components/ui/DestinationCard'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/animations/ScrollReveal'
import WhatsAppButton from '@/components/forms/WhatsAppButton'
import { destinations } from '@/data/destinations'

export const metadata: Metadata = {
  title: 'Destinations — Europe by Private Mercedes',
  description:
    'Switzerland, France, Italy, Austria and beyond — explore private chauffeured tour destinations. Every route personally driven by the Elide team.',
}

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 bg-[#12442E] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=60&auto=format"
            alt="European destinations"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="section-label text-[#E8C04A] mb-3 block">Where we go</span>
            <h1 className="font-heading text-5xl font-semibold text-white mb-4">
              Destinations
            </h1>
            <p className="text-white/70 font-body text-lg max-w-xl leading-relaxed">
              Every road we recommend, we've driven ourselves. These aren't destinations we found on the internet — they're places we know.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Destinations grid */}
      <SectionWrapper variant="warm">
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((dest) => (
            <StaggerItem key={dest.slug}>
              <DestinationCard destination={dest} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Custom destinations section */}
      <SectionWrapper variant="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal direction="left">
            <span className="section-label mb-2 block">Coming soon</span>
            <h2 className="font-heading text-3xl font-semibold text-[#1A1A14] mb-4">
              More destinations on request
            </h2>
            <p className="text-[#4A4A3C] font-body leading-relaxed mb-5">
              We're expanding to Turkey, Morocco, Spain, the Balkans, and Scandinavia. Custom multi-country itineraries are available now — just tell us what you have in mind.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Turkey', 'Morocco', 'Spain', 'Portugal', 'Croatia', 'Greece', 'Scandinavia'].map((d) => (
                <span key={d} className="badge badge-accent">{d}</span>
              ))}
            </div>
            <WhatsAppButton
              message="Hi, I'm interested in a custom European tour. Can you help plan something for my family?"
              label="Tell us your dream trip"
            />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=800&q=80&auto=format"
                alt="Custom European tour routes"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  )
}
