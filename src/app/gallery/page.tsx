'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ScrollReveal, { StaggerChildren, StaggerItem } from '@/components/animations/ScrollReveal'
import WhatsAppButton from '@/components/forms/WhatsAppButton'

const galleryImages = [
  // Destinations
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80&auto=format',
    alt: 'Swiss Alps — Bernese Oberland',
    category: 'Destinations',
    caption: 'Jungfrau region, Switzerland',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1518730420292-e1deabe1f8c2?w=800&q=80&auto=format',
    alt: 'Interlaken, gateway to the Alps',
    category: 'Destinations',
    caption: 'Interlaken, Switzerland',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=800&q=80&auto=format',
    alt: 'Lake Lucerne, Central Switzerland',
    category: 'Destinations',
    caption: 'Lake Lucerne, Switzerland',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&q=80&auto=format',
    alt: 'French countryside, Provence',
    category: 'Destinations',
    caption: 'Provence, France',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80&auto=format',
    alt: 'Venice canal, Northern Italy',
    category: 'Destinations',
    caption: 'Venice, Italy',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1599423423923-6b5cbe73c6df?w=800&q=80&auto=format',
    alt: 'Austrian Alpine village',
    category: 'Destinations',
    caption: 'Austrian Alps',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1596436165816-5df26fc13f4a?w=1000&q=80&auto=format',
    alt: 'Alpine lake, early morning',
    category: 'Destinations',
    caption: 'Alpine lake, Switzerland',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80&auto=format',
    alt: 'Mountain lake in the Alps',
    category: 'Destinations',
    caption: 'Mountain lake, Swiss Alps',
    wide: false,
  },
  // Experiences
  {
    src: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=800&q=80&auto=format',
    alt: 'Group at European mountain viewpoint',
    category: 'Experiences',
    caption: 'Viewpoints worth staying at',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80&auto=format',
    alt: 'Road trip through Europe',
    category: 'Experiences',
    caption: 'Every road, personally driven',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=800&q=80&auto=format',
    alt: 'Alpine mountain road',
    category: 'Experiences',
    caption: 'Alpine passes, our speciality',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80&auto=format',
    alt: 'Local food market in Europe',
    category: 'Experiences',
    caption: 'Local markets and food culture',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format',
    alt: 'Friends traveling together in Europe',
    category: 'Experiences',
    caption: 'Your group, your pace',
    wide: true,
  },
  // Stays
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format',
    alt: 'Boutique hotel with mountain view',
    category: 'Stays',
    caption: 'Handpicked hotels with views',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80&auto=format',
    alt: 'Premium hotel room in Europe',
    category: 'Stays',
    caption: 'Distinguished properties throughout',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80&auto=format',
    alt: 'Hotel terrace overlooking Europe',
    category: 'Stays',
    caption: 'Waking up to views like this',
    wide: false,
  },
  // Fleet
  {
    src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80&auto=format',
    alt: 'Premium vehicle interior — Elide fleet',
    category: 'Fleet',
    caption: 'Premium interior, every journey',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80&auto=format',
    alt: 'Private vehicle for European touring',
    category: 'Fleet',
    caption: 'Your private vehicle for the journey',
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80&auto=format',
    alt: 'VIP vehicle for private touring',
    category: 'Fleet',
    caption: 'VIP touring — for milestone occasions',
    wide: false,
  },
]

const categories = ['All', 'Destinations', 'Experiences', 'Stays', 'Fleet']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

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
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white mb-4">
              Europe through our lens
            </h1>
            <p className="text-white/70 font-body text-lg max-w-xl leading-relaxed">
              Mountain passes, lakeside villages, and the moments between. This is what a private European tour looks and feels like.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <SectionWrapper variant="warm">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#12442E] text-white border-[#12442E]'
                  : 'border-[#DDD8CC] text-[#4A4A3C] hover:border-[#12442E] hover:text-[#12442E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="break-inside-avoid group relative overflow-hidden rounded-xl border border-[#EDE8DE]"
              >
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
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant="section">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-semibold text-[#1A1A14] mb-4">
              Your journey. Your photos. Your story.
            </h2>
            <p className="text-[#4A4A3C] font-body mb-7">
              Every Elide journey is designed to create moments worth photographing. Let's design yours.
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
