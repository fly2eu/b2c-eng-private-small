# Elide — Private European Tours

> **"Your Europe. Your pace. Your family."**

A B2C consumer website for Elide, a premium private chauffeured tours brand serving Indian and GCC-based travelers across Switzerland, France, Italy, and Austria & Germany.

---

## The Brand

| | |
|---|---|
| **Name** | Elide |
| **Primary tagline** | Your Europe. Your pace. Your family. |
| **Primary color** | Deep Emerald `#12442E` |
| **Accent color** | Warm Gold `#DAA521` |
| **Background** | Warm Ivory `#FAF7F0` |
| **Heading font** | Robout (custom, loaded from `public/fonts/`) |
| **Body font** | Poppins (Google Fonts) |
| **WhatsApp** | `#25D366` (standard) |

Full brand guide: [`brand-kit/brand-guide.md`](brand-kit/brand-guide.md)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15+ (App Router) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui + Radix UI |
| Animations | Framer Motion |
| Language | TypeScript |
| Icons | lucide-react |

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

**Environment variables** (create `.env.local`):
```
UNSPLASH_ACCESS_KEY=your_key_here   # optional — fallback images work without it
```

---

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Homepage
│   ├── destinations/         # All destinations + [slug] detail
│   ├── tours/                # All tours + [slug] detail (day accordion)
│   ├── about/                # About + trust page
│   ├── contact/              # Contact form + WhatsApp (server + client split)
│   ├── gallery/              # Photo gallery
│   ├── globals.css           # Tailwind v4 theme + @font-face (Robout) + component classes
│   ├── layout.tsx            # Root layout: Navbar + Footer + WhatsApp float
│   └── sitemap.ts            # Auto-generated sitemap.xml
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── shared/               # Logo (PNG), Button, WhatsAppButton
│   ├── animations/           # ScrollReveal, StaggerChildren, CountUp, Parallax
│   └── ui/                   # TourCard, DestinationCard, PriceTag, TestimonialCard
├── data/
│   ├── tours.ts              # Filters itineraries-source.ts to 'private' segment
│   ├── itineraries-source.ts # All raw itinerary data
│   └── destinations.ts       # 4 destination entries with Unsplash images
└── lib/
    ├── utils.ts              # General utilities (cn, formatPrice)
    └── whatsapp.ts           # Server-safe WhatsApp URL generator (no 'use client')
```

**Important architectural notes:**
- `src/lib/whatsapp.ts` has no `'use client'` — allows server components to generate WhatsApp URLs
- `contact/page.tsx` (server, exports metadata) + `contact/ContactClient.tsx` ('use client') — standard App Router pattern
- Logos loaded as PNG via `next/image` from `public/logos/`
- Custom font Robout loaded via `@font-face` in `globals.css` from `public/fonts/`

---

## Pages (20 static routes)

| Route | Page |
|---|---|
| `/` | Homepage |
| `/destinations` | All destinations |
| `/destinations/switzerland` | Switzerland detail |
| `/destinations/france` | France detail |
| `/destinations/italy` | Italy detail |
| `/destinations/austria-germany` | Austria & Germany detail |
| `/tours` | All tours listing |
| `/tours/[slug]` | Tour detail with day-by-day accordion |
| `/about` | About + trust page |
| `/contact` | Contact + WhatsApp + enquiry form |
| `/gallery` | Photo gallery |

---

## Collateral

All marketing collateral is in [`collateral/`](collateral/):

### Instagram Grid (1080×1080px)

| File | Post |
|---|---|
| `instagram/post-01-switzerland-hero.html` | Switzerland landscape |
| `instagram/post-02-vehicle-detail.html` | Fleet — Mercedes V-Class |
| `instagram/post-03-experiential-viewpoint.html` | The Moment — Alps viewpoint |
| `instagram/post-04-text-quote.html` | Quote card — "No strangers on the bus" |
| `instagram/post-05-france-landscape.html` | France destination |
| `instagram/post-06-behind-scenes.html` | Route planning BTS |
| `instagram/post-07-italy-landscape.html` | Italy — Rome/Florence/Tuscany |
| `instagram/post-08-tagline-cta.html` | Brand tagline — green background |
| `instagram/post-09-experiential-dining.html` | Tuscan vineyard lunch |
| `instagram/post-10-vehicle-interior.html` | Mercedes interior detail |
| `instagram/post-11-austria-landscape.html` | Austria — Vienna/Salzburg |
| `instagram/post-12-whatsapp-cta.html` | WhatsApp CTA card |

### Instagram Stories (1080×1920px)

| File | Format |
|---|---|
| `stories/story-01-tour-spotlight.html` | Tour card — Switzerland Wonderland |
| `stories/story-02-testimonial.html` | Guest quote — Priya, Dubai |
| `stories/story-03-behind-scenes.html` | BTS — route reconnaissance |
| `stories/story-04-poll.html` | Poll — "Which Europe first?" |

### WhatsApp Programme Cards (1080×1920px)

| File | Programme |
|---|---|
| `whatsapp-cards/card-switzerland-wonderland.html` | Switzerland Wonderland · 9 days · EUR 2,490 |
| `whatsapp-cards/card-my-scenic-switzerland.html` | My Scenic Switzerland · 6 days · EUR 1,590 |

### Print (A4 / Business Card)

| File | Format |
|---|---|
| `print/business-card-front.html` | Business card front (1004×638px / 85×54mm) |
| `print/business-card-back.html` | Business card back — tagline + WhatsApp QR |
| `print/letterhead-a4.html` | Branded letterhead (794×1123px / A4) |
| `print/one-pager-switzerland-wonderland.html` | Switzerland Wonderland one-pager (A4) |
| `print/one-pager-my-scenic-switzerland.html` | My Scenic Switzerland one-pager (A4) |

To render HTML collateral to PDF:
```bash
# Chrome headless (recommended)
google-chrome --headless --print-to-pdf=output.pdf --no-margins path/to/file.html

# Or Puppeteer / Playwright for pixel-perfect output
```

---

## Deployment

```bash
# Vercel (recommended)
vercel deploy
```

Set `NEXT_PUBLIC_SITE_URL=https://elide.com` in production environment variables.

---

## Brand Notes

- **Never** use the flyEurope name on this site — the B2C brand and B2B backend are separate
- **Never** use the word "luxury" as a label — show quality through detail
- **WhatsApp** is the primary conversion CTA — it appears as a floating button on every page
- **Mobile-first** — 70%+ of the target audience browses on mobile
- Logos are PNG files in `public/logos/` — swap in SVG when available from the logo-exploration branch

---

*Brand created: April 2026*
