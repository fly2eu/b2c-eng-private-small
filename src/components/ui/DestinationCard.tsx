import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Destination } from '@/data/destinations'

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.slug}`} className="card group block overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={destination.cardImage}
          alt={`${destination.name} private tours`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1A]/80 via-[#0F2A1A]/20 to-transparent" />
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {destination.tourCount > 0 && (
            <span className="badge badge-accent text-xs mb-2">
              {destination.tourCount} programme{destination.tourCount !== 1 ? 's' : ''}
            </span>
          )}
          <h3 className="font-heading text-2xl font-semibold text-white mb-1">
            {destination.name}
          </h3>
          <p className="text-sm text-white/70 font-body line-clamp-2 leading-relaxed mb-3">
            {destination.tagline}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold font-body text-[#E8C04A] group-hover:gap-2.5 transition-all">
            Explore
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}
