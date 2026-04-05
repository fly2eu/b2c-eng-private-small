export interface Destination {
  slug: string
  name: string
  tagline: string
  description: string
  heroImage: string
  cardImage: string
  highlights: string[]
  bestTime: string
  featured: boolean
  tourCount: number
  countries: string[]
}

export const destinations: Destination[] = [
  {
    slug: 'switzerland',
    name: 'Switzerland',
    tagline: 'Where every mountain road is a postcard.',
    description:
      "Switzerland is our home ground. We've driven every pass, walked every lakefront, and found the hidden corners the group buses miss. From the Bernese Oberland to the Engadine, from chocolate-box Gruyères to the car-free streets of Zermatt — five programmes, one extraordinary country.",
    heroImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format',
    cardImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format',
    highlights: [
      'Matterhorn & Zermatt',
      'Jungfrau region & Lauterbrunnen Valley',
      'Lucerne & Chapel Bridge',
      'Glacier Express corridor',
      'Gruyères & Lavaux Vineyards',
    ],
    bestTime: 'May–October for mountain roads; December–March for winter landscapes',
    featured: true,
    tourCount: 5,
    countries: ['Switzerland'],
  },
  {
    slug: 'france',
    name: 'France',
    tagline: 'Paris is a chapter. Provence is the whole book.',
    description:
      "Beyond the Eiffel Tower, France unravels at a private pace — lavender fields in Provence, vineyard roads in Burgundy, the golden light of the Côte d'Azur. Custom French itineraries built around your interests.",
    heroImage:
      'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=1920&q=85&auto=format',
    cardImage:
      'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&q=80&auto=format',
    highlights: [
      'Paris & the Seine',
      'Provence lavender & markets',
      "Côte d'Azur & French Riviera",
      'Loire Valley châteaux',
      'Alsace wine route',
    ],
    bestTime: 'April–October; July–August for Provence lavender',
    featured: true,
    tourCount: 0,
    countries: ['France'],
  },
  {
    slug: 'italy',
    name: 'Italy',
    tagline: 'Every road leads somewhere beautiful.',
    description:
      "Tuscany, Amalfi, Lake Como, the Dolomites — Italy is almost unfairly photogenic. Custom private itineraries let you slow down in a hilltop village, linger over a long lunch, and skip the queues at the famous sights.",
    heroImage:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=85&auto=format',
    cardImage:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80&auto=format',
    highlights: [
      'Tuscany & Chianti vineyards',
      'Amalfi Coast drive',
      'Lake Como & Bellagio',
      'The Dolomites',
      'Rome, Venice & Florence',
    ],
    bestTime: 'April–June and September–October (avoid August crowds)',
    featured: true,
    tourCount: 0,
    countries: ['Italy'],
  },
  {
    slug: 'austria-germany',
    name: 'Austria & Germany',
    tagline: 'Alpine passes, castle roads, and Bavarian lakes.',
    description:
      "The Austrian Alps and Bavarian highlands share a landscape that feels almost theatrical — baroque churches, mirror-still lakes, and mountain roads that seem designed for a private Mercedes. Multi-day private tours combining the best of both countries.",
    heroImage:
      'https://images.unsplash.com/photo-1599423423923-6b5cbe73c6df?w=1920&q=85&auto=format',
    cardImage:
      'https://images.unsplash.com/photo-1599423423923-6b5cbe73c6df?w=800&q=80&auto=format',
    highlights: [
      'Neuschwanstein Castle',
      'Salzburg & Mozart country',
      'Hallstatt & the Salzkammergut',
      'Bavarian Alps & Zugspitze',
      'Vienna & the Ringstraße',
    ],
    bestTime: 'May–September for mountains; December for Christmas markets',
    featured: true,
    tourCount: 1,
    countries: ['Austria', 'Germany'],
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}

export const featuredDestinations = destinations.filter((d) => d.featured)
