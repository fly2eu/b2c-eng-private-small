import Link from 'next/link'
import Image from 'next/image'
import { Clock, Users, MapPin, ArrowRight } from 'lucide-react'
import { Itinerary } from '@/types/itinerary'
import { cn } from '@/lib/utils'

interface TourCardProps {
  tour: Itinerary
  className?: string
  variant?: 'default' | 'featured'
}

export default function TourCard({ tour, className, variant = 'default' }: TourCardProps) {
  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in the "${tour.title}" tour. Can you tell me more?`
  )
  const whatsappUrl = `https://wa.me/1XXXXXXXXXX?text=${whatsappMsg}`

  return (
    <article className={cn('card group flex flex-col h-full', className)}>
      {/* Image */}
      <Link href={`/tours/${tour.slug}`} className="block overflow-hidden relative aspect-[4/3]">
        <Image
          src={tour.heroImage.startsWith('https://placehold')
            ? `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format`
            : tour.heroImage}
          alt={`${tour.title} — private chauffeured tour`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIhAAAQQCAgMBAAAAAAAAAAAAAQIDBBEFBhIhMVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Aq9P6yuLqSWOwkrW2NkdJG5xyQ0AnGW9wB7Vc2mzV1rqFPWXG7yzyMYWl8jmtBI7nAA4H2oiDhDT1Kx0m3UMVhFDDFE1kbGvJDQBgAZP4AUiIH//Z"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#0F2A1A]/0 group-hover:bg-[#0F2A1A]/20 transition-colors duration-300" />
        {/* Tag badge */}
        {tour.tags[0] && (
          <span className="absolute top-3 left-3 badge badge-primary text-xs">
            {tour.tags[0]}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Meta row */}
        <div className="flex items-center gap-4 mb-3">
          <span className="flex items-center gap-1 text-xs text-[#8A8A7A] font-body">
            <MapPin size={12} className="text-[#DAA521]" />
            {tour.countries.join(', ')}
          </span>
          <span className="flex items-center gap-1 text-xs text-[#8A8A7A] font-body">
            <Clock size={12} className="text-[#DAA521]" />
            {tour.durationDays.min} days
          </span>
          <span className="flex items-center gap-1 text-xs text-[#8A8A7A] font-body">
            <Users size={12} className="text-[#DAA521]" />
            Up to {tour.groupSize.max}
          </span>
        </div>

        {/* Title */}
        <Link href={`/tours/${tour.slug}`}>
          <h3 className="font-heading text-xl font-semibold text-[#1A1A14] group-hover:text-[#12442E] transition-colors leading-snug mb-2">
            {tour.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-[#4A4A3C] leading-relaxed line-clamp-3 flex-1 mb-4">
          {tour.description}
        </p>

        {/* Highlights — first 3 */}
        <ul className="mb-4 space-y-1.5">
          {tour.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[#4A4A3C] font-body">
              <span className="text-[#DAA521] mt-0.5 font-bold">✓</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Footer: price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-[#EDE8DE] mt-auto">
          <div>
            {tour.priceFromEur && (
              <>
                <p className="price-from">From</p>
                <p className="price-tag">EUR {tour.priceFromEur.toLocaleString()}</p>
                <p className="text-[10px] text-[#8A8A7A] font-body">per person</p>
              </>
            )}
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="flex items-center gap-1.5 text-sm font-semibold font-body text-[#12442E] hover:text-[#DAA521] transition-colors group/cta"
          >
            View tour
            <ArrowRight size={15} className="group-hover/cta:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  )
}
