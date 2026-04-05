export interface DayPlan {
  dayNumber: number;
  title: string;
  description: string;
  distanceKm?: number;
  stops: string[];
  overnightCity: string;
}

export interface Itinerary {
  id: string;
  slug: string;
  title: string;
  segment: 'self-drive' | 'supercar' | 'private' | 'coach';
  countries: string[];
  region: string;
  durationDays: { min: number; max: number };
  groupSize: { min: number; max: number };
  description: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  hotelTier: '3-star' | '4-star' | '5-star' | 'mixed';
  priceFromEur: number | null;
  heroImage: string;
  days: DayPlan[];
  tags: string[];
  featured: boolean;
  published: boolean;
  /** Travel pace/style category — used for filtering and recommendations */
  travelStyle?: 'slow' | 'grand-tour' | 'countryside' | 'city';
}
