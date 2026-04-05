# Overnight Build Session — Changes Summary

> Session date: April 2026
> Build status: **PASS** — 20 static pages generated, 0 TypeScript errors, 0 build errors

---

## Nine Doctrine Corrections Applied

### CORRECTION A — No "4-star" language anywhere
- **Found in**: CLAUDE.md, docs/product-reference.md, brand-kit/brand-guide.md, src/app/page.tsx, src/app/about/page.tsx, src/data/itineraries-source.ts, src/types/itinerary.ts, all collateral HTML files
- **Changed**: Every instance of "4-star boutique hotels" → "handpicked hotels and premium stays" / "distinguished properties"
- **Rationale**: A client who only stays at 5-star properties should not see "4-star" as the lead quality signal

### CORRECTION B — No brand-locking to Mercedes
- **Found in**: CLAUDE.md, docs/product-reference.md, brand-kit/brand-guide.md, src/app/page.tsx, src/app/about/page.tsx, src/data/itineraries-source.ts, src/app/tours/[slug]/page.tsx, all collateral HTML files
- **Changed**: "Mercedes fleet" → "premium fleet"; "A Mercedes for every group size" → "A premium vehicle for every group size"; specific types (V-Class, Sprinter) retained as examples with "or equivalent"
- **Rationale**: We work with multiple premium vehicle suppliers

### CORRECTION C — Audience is not only families
- **Found in**: All page.tsx files, brand-kit/brand-guide.md, README.md, collateral files
- **Changed**: Tagline updated from "Your Europe. Your pace. Your family." → "Your Europe. Your way."; all hero/CTA copy now mentions families, couples, groups, corporates; audience chips added to homepage CTA section
- **Homepage** now includes 5 audience pills: Families / Couples / Friend groups / Corporate retreats / Milestone celebrations

### CORRECTION D — No wine/alcohol references
- **Found in**: docs/product-reference.md (tour names), src/data/itineraries-source.ts (day descriptions), src/data/destinations.ts, brand-kit/brand-guide.md, collateral files
- **Changed**: "Lavaux vineyards" → "Lavaux UNESCO terraced hillsides"; "Alsace wine route" → "Alsace villages route"; "Swiss Cheese & Wine Discovery" → "Swiss Cheese & Culinary Discovery"; private tasting day descriptions updated to cultural/food walks; "vineyard roads in Burgundy" → "cultural routes through Burgundy"

### CORRECTION E — docs/json.zip itineraries
- **Status**: json.zip exists and was unzipped. Result: directory structure only (folders named after itineraries), no actual JSON data files inside. Skipped — no data to add.
- **Note for human review**: If JSON itinerary data files are available, re-zip with the actual .json content and re-run the import step.

### CORRECTION F — EUR pricing, never fixed, never INR/AED
- **Found in**: src/app/page.tsx, src/components/ui/TourCard.tsx, src/app/tours/page.tsx, src/app/tours/[slug]/page.tsx, brand-kit/brand-guide.md, docs/product-reference.md, collateral files
- **Changed**: TourCard now shows "Starting from / EUR X,XXX / per person · indicative"; tour detail sidebar now shows "per person · indicative · twin sharing" plus "Tailored to your group — personalised quote after consultation"; removed all "INR or AED" references from copy and docs
- **Tours page**: Added "All prices shown are indicative" note in hero subtext

### CORRECTION G — France-rooted founder story (not "based in Belgium")
- **Found in**: CLAUDE.md, docs/product-reference.md, brand-kit/brand-guide.md, docs/research/market-research.md, src/app/about/page.tsx
- **Changed**: About page completely rewritten with France-rooted narrative: "We came for higher education — PhD and Masters programmes in France. We lived here, drove every road, and built Elide from personal obsession with getting the details right."
- **New value cards on About page**: "France-rooted, Europe-experienced", "Academic rigor in every itinerary" (PhD background applied to research-driven planning)

### CORRECTION H — Real clients (10+ served)
- **Found in**: docs/product-reference.md, src/app/about/page.tsx, src/app/page.tsx
- **Changed**: Stats updated throughout — "10+ private journeys delivered", "100% client satisfaction"; product-reference.md updated from "we're early stage" to "10+ satisfied clients, every one referred us"
- **About page**: Added testimonial placeholder section with 3 styled cards ("Client testimonial coming soon") — intentionally styled, not broken-looking
- **Trust & Credentials section**: Added on About page with IATA TIDS badge, 100% satisfaction stat, 2-hour response time

### CORRECTION I — Category education (new concept for audience)
- **Found**: Homepage was missing category education entirely
- **Added**: Two new homepage sections:
  1. **"A Different Way to See Europe"** — side-by-side comparison cards (group tour vs private), ends with "This is private touring. And once you experience it, you won't go back."
  2. **"Choose Your Style"** — 4 travel pace cards (Slow & Experiential, Grand Tour, Countryside & Nature, City Explorer) with audience tags and WhatsApp CTA
- **Hero** updated: "Europe without the tour bus." / "Your own vehicle. Your own driver. Every day designed around you."
- **travelStyle** field added to Itinerary type and assigned to all private itineraries

---

## Documents Revised

| File | Changes Made |
|------|-------------|
| `CLAUDE.md` | Corrections A, B, C, D, G, H |
| `docs/product-reference.md` | Corrections A, B, C, D, F, G, H |
| `brand-kit/brand-guide.md` | Corrections A, B, C, D, F, G, H |
| `docs/research/market-research.md` | Corrections B, C, D, F, G, H |
| `docs/research/design-analysis.md` | Corrections A, B, C, G |
| `README.md` | Correction C (tagline) |

---

## Website Changes

### Homepage (`src/app/page.tsx`)
- Hero: New headline "Europe without the tour bus." + updated subhead
- Stats strip: Updated to "10+ private journeys delivered", "100% client satisfaction"
- **NEW**: "A Different Way to See Europe" section (group vs private contrast)
- **NEW**: "Choose Your Style" section (4 travel pace cards)
- "How It Works" → "How Your Trip Comes Together" (reframed steps)
- Fleet section: De-branded from Mercedes to "premium vehicle"
- CTA section: Added audience pills (families, couples, groups, corporates, milestones); removed "INR or AED" from footer note
- All family-only copy broadened

### About Page (`src/app/about/page.tsx`)
- Hero: Updated to "Founded by Europeans-by-experience"
- Story section: Completely rewritten with France-rooted founder narrative
- Stats: "10+ private journeys", "100% client satisfaction"
- Values: Added "France-rooted, Europe-experienced" and "Academic rigor" cards
- **NEW**: "Trust & Credentials" section with IATA TIDS badge, satisfaction stat, response time
- **NEW**: Testimonial placeholder cards (3 × styled placeholder)
- Fleet: Vehicle names de-branded from "Mercedes X" to "V-Class (or equivalent)"

### Tours Listing (`src/app/tours/page.tsx`)
- Hero: Added "itineraries are starting points, not fixed products" messaging
- Added "All prices shown are indicative" note
- Grouped tours by travelStyle: Grand Tour / Slow & Experiential / Countryside & Nature
- Custom tour CTA: Updated copy

### Tour Detail (`src/app/tours/[slug]/page.tsx`)
- "Private Mercedes" → "Private vehicle"
- Hotel tier label → "Handpicked hotels"
- Price sidebar: Added "indicative" qualifier + "personalised quote after consultation" note
- Meta description updated

### Contact Page (`src/app/contact/ContactClient.tsx`)
- Added "Travel Style" selector (5 options)
- Added IATA TIDS badge in sidebar
- Audience copy broadened
- Remains fully 'use client' — correct server/client split maintained

### Gallery Page (`src/app/gallery/page.tsx`)
- Converted to client component (needed for useState filter)
- 20+ curated Unsplash images (was 13)
- Category filter tabs: All / Destinations / Experiences / Stays / Fleet
- Framer Motion AnimatePresence + staggered reveal on filter
- CTA copy broadened ("Your journey" not "Your family")

### TourCard (`src/components/ui/TourCard.tsx`)
- Price display: "Starting from" + "per person · indicative"
- Travel style badge replaces generic tags when travelStyle is set

### Logo (`src/components/shared/Logo.tsx`)
- Logo sizes doubled: sm 140→200px, md 180→260px, lg 220→320px

### Footer (`src/components/layout/Footer.tsx`)
- Added TIDS certification badge (logo image + label)
- Updated brand tagline copy

### Data
- `src/data/itineraries-source.ts`: Removed all flyEurope references, wine/vineyard language, de-branded vehicle names, added travelStyle to all private itineraries
- `src/data/destinations.ts`: Removed wine references (Lavaux Vineyards → UNESCO Terraces, Alsace wine route → Alsace villages route)
- `src/types/itinerary.ts`: Added optional `travelStyle` field

---

## Logo Changes
- Logo component sizes doubled across all three breakpoints
- `/public/logos/tids-certification.png` copied from `docs/TIDS-Logo.png`
- TIDS badge added: Footer (brand column), About page (Trust & Credentials), Contact page (sidebar)

---

## Collateral Changes (HTML files)

Files updated with doctrine corrections:
- `collateral/instagram/post-01-switzerland-hero.html` — tagline, pricing
- `collateral/instagram/post-02-vehicle-detail.html` — Mercedes de-branding
- `collateral/instagram/post-10-vehicle-interior.html` — de-branding
- `collateral/print/one-pager-my-scenic-switzerland.html` — 4-star, pricing
- `collateral/print/one-pager-switzerland-wonderland.html` — 4-star, pricing
- `collateral/print/letterhead-a4.html` — tagline
- `collateral/stories/story-01-tour-spotlight.html` — pricing
- `collateral/whatsapp-cards/card-my-scenic-switzerland.html` — pricing

New files created:
- `scripts/export-collateral.sh` — Shell script for Puppeteer/Chrome headless export
- `docs/export-collateral-guide.md` — Manual export instructions
- Puppeteer added to `package.json` devDependencies

---

## Build Status: PASS

```
✓ Compiled successfully in 1865ms
✓ TypeScript: 0 errors
✓ 20 static pages generated
✓ All routes rendering correctly
```

Routes: `/`, `/about`, `/contact`, `/destinations`, `/gallery`, `/tours`, `/sitemap.xml`,
`/destinations/[switzerland|france|italy|austria-germany]`,
`/tours/[my-scenic-switzerland|switzerland-wonderland|sweet-tour-switzerland|swiss-alps-express-circuit|alpine-private-grand-tour|swiss-cheese-culinary-discovery|between-lakes-and-alps]`

---

## Items Needing Human Review

1. **json.zip**: Contains only empty directory structure — no actual JSON itinerary data. If detailed JSON itineraries are available, they should be added and used to enrich `itineraries-source.ts`.

2. **WhatsApp number**: Still placeholder `+XX XXX XXX XXXX` in `src/lib/whatsapp.ts` — update before launch.

3. **Tour hero images**: All tours still using placeholder Unsplash images. Real photography from actual trips should replace these when available.

4. **Testimonials**: Three placeholder cards on About page ("Client testimonial coming soon") — replace with real testimonials when available.

5. **Email address**: Still `hello@elide.com` placeholder — update when domain is confirmed.

6. **Logo**: `public/logos/elide-main.png` and `public/logos/elide-icon.png` should be reviewed for quality at the new doubled sizes. If they look blurry, higher-resolution PNGs or SVG should replace them.

7. **TIDS logo sizing**: The TIDS badge in Footer uses `height: 40, width: 'auto'` — verify it renders correctly with the actual TIDS logo dimensions.

8. **Collateral export**: Run `./scripts/export-collateral.sh` after installing Puppeteer (`npm install`) to generate PNG/PDF files.

9. **slug for swiss-cheese-culinary-discovery**: Renamed from `swiss-cheese-wine-discovery` in the itinerary data. If any external links pointed to the old slug, they will 404. Add a redirect in `next.config.ts` if needed.

---

*Generated: April 2026 overnight build session*
