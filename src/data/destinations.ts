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
      "There are places that take your breath before you've said a word. Switzerland is one of them. We've driven every pass, walked every lakefront, and found the corners the group buses never reach — from the Bernese Oberland to the Engadine, from old-world Gruyères to the car-free streets of Zermatt.",
    heroImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format',
    cardImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format',
    highlights: [
      'Matterhorn & Zermatt',
      'Jungfrau region & Lauterbrunnen Valley',
      'Lucerne & Chapel Bridge',
      'Glacier Express corridor',
      'Gruyères & Lavaux UNESCO Terraces',
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
      "France doesn't rush. And on this trip, neither do you. Beyond the Eiffel Tower, a private journey through France moves at a different pace — through lavender-scented Provence, along the golden Riviera coast, into châteaux country where time genuinely seems to slow. Built around the France you've been imagining.",
    heroImage:
      'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=1920&q=85&auto=format',
    cardImage:
      'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&q=80&auto=format',
    highlights: [
      'Paris & the Seine',
      'Provence lavender & markets',
      "Côte d'Azur & French Riviera",
      'Loire Valley châteaux',
      'Alsace medieval villages route',
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
      "Italy is generous. With its light. Its food. Its strangers who become friends over two hours at a shared table. Private touring lets you receive that generosity — slow down in a hilltop village, let lunch stretch into the afternoon, and arrive at the Amalfi with nothing left to organise.",
    heroImage:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=85&auto=format',
    cardImage:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80&auto=format',
    highlights: [
      'Tuscany & Chianti countryside',
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
      "Dramatic and intimate at once — that's the Austrian Alps and Bavarian highlands. Baroque churches appear around mountain bends. Lakes sit so still they look painted. The roads feel designed for exactly this: a private vehicle, time to stop, and people you want to share it with.",
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
