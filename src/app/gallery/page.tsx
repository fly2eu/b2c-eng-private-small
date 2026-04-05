import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/animations/ScrollReveal'
import WhatsAppButton from '@/components/forms/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Gallery — Europe Through Our Lens',
  description:
    'Photography from Elide private European tours — Switzerland, France, Italy. Mountain roads, lakeside villages, and the moments that make a trip unforgettable.',
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format',
    alt: 'Swiss Alps — Bernese Oberland',
    category: 'Switzerland',
    caption: 'Jungfrau region, Bernese Oberland',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80&auto=format',
    alt: 'Mercedes V-Class interior — Elide private tours',
    category: 'Fleet',
    caption: 'Your vehicle for the journey',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=800&q=80&auto=format',
    alt: 'Family at European viewpoint',
    category: 'Experience',
    caption: 'Moments worth stopping for',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=800&q=80&auto=format',
    alt: 'Swiss mountain lake',
    category: 'Switzerland',
    caption: 'Lake Lucerne, Central Switzerland',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&q=80&auto=format',
    alt: 'France — French countryside',
    category: 'France',
    caption: 'French countryside, Provence',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1518730420292-e1deabe1f8c2?w=800&q=80&auto=format',
    alt: 'Interlaken Switzerland',
    category: 'Switzerland',
    caption: 'Interlaken, gateway to the Alps',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80&auto=format',
    alt: 'Italy — Venice canal',
    category: 'Italy',
    caption: 'Venice, Northern Italy',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80&auto=format',
    alt: 'Premium vehicle interior',
    category: 'Fleet',
    caption: 'Mercedes S-Class — VIP touring',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=800&q=80&auto=format',
    alt: 'Mountain road in Europe',
    category: 'Roads',
    caption: 'Alpine passes, our speciality',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80&auto=format',
    alt: 'European road trip',
    category: 'Roads',
    caption: 'Every road, personally driven',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1596436165816-5df26fc13f4a?w=800&q=80&auto=format',
    alt: 'Alpine scenery',
    category: 'Switzerland',
    caption: 'Alpine lake, early morning',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1599423423923-6b5cbe73c6df?w=800&q=80&auto=format',
    alt: 'Austria — Alpine village',
    category: 'Austria',
    caption: 'Austrian Alpine village',
    wide: false,
  },
]

const categories = ['All', 'Switzerland', 'France', 'Italy', 'Austria', 'Fleet', 'Roads', 'Experience']

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-[#12442E] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1518730420292-e1deabe1f8c2?w=1920&q=60&auto=format"
            alt="European gallery"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="section-label text-[#E8C04A] mb-3 block">The experience</span>
            <h1 className="font-heading text-5xl font-semibold text-white mb-4">
              Europe through our lens
            </h1>
            <p className="text-white/70 font-body text-lg max-w-xl leading-relaxed">
              Mountain passes, lakeside villages, and the moments between. This is what a private European tour looks and feels like.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery grid */}
      <SectionWrapper variant="warm">
        <StaggerChildren className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <StaggerItem key={i}>
              <div className="break-inside-avoid group relative overflow-hidden rounded-xl border border-[#EDE8DE]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={img.wide ? 450 : 600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="badge badge-accent text-xs mb-1">{img.category}</span>
                    <p className="text-white text-sm font-body font-medium">{img.caption}</p>
                  </div>
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
              Your family. Your photos. Your story.
            </h2>
            <p className="text-[#4A4A3C] font-body mb-7">
              Every Elide trip is designed to create moments worth photographing. Let's design yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton
                message="Hi, I saw the gallery and I'd love to plan a private European tour. Can we talk?"
                label="Plan your trip"
                variant="large"
              />
              <Link href="/tours" className="btn-outline text-base py-4 px-6 justify-center">
                Browse our tours
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  )
}
