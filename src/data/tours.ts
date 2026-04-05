import { Itinerary } from '@/types/itinerary'
import { itineraries } from './itineraries-source'

// B2C-safe helper: strip flyEurope references from included/description text
function sanitize(text: string): string {
  return text.replace(/flyEurope/g, 'Elide').replace(/fly europe/gi, 'Elide')
}

function sanitizeItinerary(tour: Itinerary): Itinerary {
  return {
    ...tour,
    included: tour.included.map(sanitize),
    description: sanitize(tour.description),
    days: tour.days.map((d) => ({ ...d, description: sanitize(d.description) })),
  }
}

// Only publish the 'private' segment tours for B2C
export const tours: Itinerary[] = itineraries
  .filter((t) => t.segment === 'private' && t.published)
  .map(sanitizeItinerary)

export const featuredTours = tours.filter((t) => t.featured)

export function getTourBySlug(slug: string): Itinerary | undefined {
  return tours.find((t) => t.slug === slug)
}

export function getToursByRegion(region: string): Itinerary[] {
  return tours.filter((t) => t.region.toLowerCase().includes(region.toLowerCase()))
}
