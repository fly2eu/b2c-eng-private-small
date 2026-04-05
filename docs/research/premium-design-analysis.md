# Premium Design Reference Analysis

> Fetched and analyzed: April 2026
> Purpose: Establish minimum quality bar and extract design patterns for Elide website.
> These three sites represent the benchmark we aim to meet or exceed.

---

## 1. Jacada Travel (jacadatravel.com)

### Layout & Structure
- Sophisticated modular block system — stacked content sections that build narrative from inspiration to conversion
- Breathing room between major sections via explicit spacer blocks (36px core spacers)
- Homepage flow: hero → destinations grid → trips gallery → testimonials → text-image cards

### Hero Section
- Video-first approach with atmospheric landscape imagery
- Clear value proposition headline ("Exceptional Journeys")
- Supporting tagline emphasizing expertise — not features, but experience
- Dual CTAs: primary (plan/search) + secondary (contact)
- Generous padding creates immersive entry point

### Itinerary & Day-by-Day Content
- Trip cards use featured imagery at consistent aspect ratios (785x785px desktop)
- Expert specialist attribution builds editorial credibility
- Responsive image sets at multiple breakpoints (mobile/tablet/desktop/2x)

### Testimonials
- Carousel/slider pattern
- 5-star ratings prominent
- Source attribution (Trustpilot) builds third-party credibility
- Customer name + date displayed
- Short review title + truncated excerpt format

### Typography
- Large bold hero headlines
- Section titles with inline emphasis spans
- Clear semantic hierarchy (H1 → H2 → body)

### Color Palette
- `bg-light-brown` (warm neutral for sections) + `bg-jacaranda` (purple accent for featured) + `bg-white`
- Warm luxury aesthetic — avoids stark contrasts

### Cards & Grid
- Destination cards: image-centric, location label overlay, consistent aspect ratio
- Trip gallery cards: image + title + "View trip" CTA
- Text-image cards: bipartite layout — title/tag/excerpt + image

### CTA Strategy
- "Start Planning" repeated in header, hero, and page end
- Trip-specific "View trip" links within galleries
- Phone + email always accessible
- Trust signals (awards, Trustpilot, certifications) visible before conversion request

### Key Lessons for Elide
- Multiple "Start Planning" / "Tell us about your trip" CTAs throughout — not just at end
- Award/trust signals before the CTA, not after
- Expert credentials drive confidence — "We've driven every route" is our equivalent
- Testimonials need source attribution for credibility

---

## 2. Secret Retreats (secret-retreats.com/offers)

### Layout & Structure
- Layered absolute positioning with Z-index management creates visual depth
- Asymmetrical staggered grid — not standard 3-column
- Mobile breakpoint (767px) triggers complete layout restructuring
- Generous whitespace around primary content

### Interactive Card Mechanism
- Flip-card design: front (photography + gradient overlay) → back (descriptive content)
- Fixed dimensions 316x620px — tall portrait cards
- Hover = 180-degree CSS transform rotation
- Back card color: `#c5604e` (warm terracotta)

### Typography
- Headlines: Playfair Display serif
- Body: Brandon Grotesque sans-serif
- Navigation: Gothic A1 uppercase
- H1: 52px, H2: 42px, body: 14px, line-height 1.8em

### Color Palette
- Accent: `#d9630c` (burnt orange/saffron — culturally resonant for Asian markets)
- Background: `#f1edea` (cream)
- Text: `#333333` and `#767676`
- The warm orange resonates strongly with Indian and Middle Eastern aesthetics

### Offer/Tour Display
- No pricing shown — inquiry-driven model
- Destination-based navigation (21 countries)
- Theme categorization: Safaris, Cruises, Diving, Treks, Romantic
- "Signature Journeys" curated collection

### CTA Strategy
- Primary: "Contact Our Concierge" mid-page
- Secondary: navigation-integrated buttons
- Tertiary: embedded inquiry forms in lightboxes
- Decision: for Elide's Indian market, we show "From EUR X" starting prices — transparency builds trust

### Key Lessons for Elide
- Flip-card mechanism is engaging but may confuse mobile users — avoid for primary tour cards
- Warm accent colors (orange/saffron) resonate with Indian/GCC market
- Concierge positioning fits GCC; but Indian market needs price transparency alongside
- Portrait card proportions (taller than wide) work well for destination/tour cards on mobile

---

## 3. Tully Luxury Travel (tullyluxurytravel.com) — Minimum Quality Standard

### Layout & Design Standards
- Sophisticated grid-based layout via Elementor's responsive system
- CSS variables control aspect ratios (16:9, 3:2, square) systematically
- Clean sections with hero imagery backgrounds
- Organized content hierarchies — no clutter

### Hero Section
- Full-width background image, centered content overlay
- Content width constrained to 60% desktop (100% mobile)
- "Where to next?" — gentle invitation, not command
- Dramatic photography as primary trust signal

### Gallery Design
- Curated collection cards with image overlays and text hierarchy
- Moderate rounded corners
- Carousel pattern with smooth transitions
- Categories: Destinations, Cruise & Yachts, Safari, Curate

### Typography
- ProximaNova (body) + Playfair Display (headlines)
- Base 16px, small 13px, large 36px, x-large 42px
- Font weight 400 for display, 500 for labels

### Color Palette
- Primary accent: `#D89E40` (warm gold for CTAs)
- Foundation: `#14475A` (teal/navy)
- Background: `#F7F7F7` (light)
- Note: Their navy-teal is too close to flyEurope palette — we use emerald instead

### Whitespace & Spacing
- CSS variables: 0.44rem → 5.06rem spacing scale
- 50px+ vertical section padding
- Gap: 0.5em-2em between grid/flex items
- Breathing room = their key luxury signal

### Cards
- Full-bleed background images with text overlays
- Rounded corners (5px to full-pill depending on context)
- Subtle shadows
- Aspect ratio constrained
- H3 title + descriptive text + inline CTA

### Premium Quality Expression
- Curated language: "tailored experiences," "coveted properties," "invitation-only"
- Social proof: Trustpilot 4.9/5, 38 years, Condé Nast Traveler badge
- Award carousel with auto-animate
- Selective, high-resolution photography
- "Discretion and trust" messaging — relationship-first

### Key Lessons for Elide (THIS IS THE QUALITY FLOOR)
- Our design must be at least this polished — clean grid, high-quality images, proper spacing
- CSS variables for consistent spacing is essential for quality
- Social proof carousel (Trustpilot / client count) adds significant credibility
- "Discretion and trust" messaging resonates with Indian families wanting personal attention
- Warm gold as accent: `#D89E40` — very close to our `#DAA521` — validates our palette choice
- 50px+ section padding is the minimum; our sections need 80-120px

---

## Synthesis: What This Means for Elide

### Design Decisions Confirmed
1. **Warm gold accent** (`#DAA521`) confirmed by Tully's `#D89E40` — warm gold = luxury across all three sites
2. **50px+ vertical section padding** — minimum quality floor. Elide targets 80-120px desktop
3. **Portrait card proportions** — taller cards work better on mobile (Secret Retreats validates this)
4. **Trust signals before CTA** — all three sites do this. Our "10+ journeys, every route driven" goes near CTAs
5. **Multiple "Start planning" CTAs** — Jacada's pattern: hero, mid-page, end. We replicate with WhatsApp CTAs

### Gaps vs These Benchmarks (to close in Elide v1)
- None of these sites have WhatsApp integration — our competitive advantage
- None target Indian/GCC explicitly — our competitive advantage
- None show "From EUR X" starting prices prominently — we do, and it builds trust with our audience
- All use serif headlines — validates our Cormorant Garamond / Lora / Source Serif direction

### Minimum Quality Checklist (from Tully benchmark)
- [ ] High-resolution full-width hero with centered content
- [ ] CSS variable-driven spacing system
- [ ] 80px+ vertical section padding desktop
- [ ] Warm gold accent on all CTAs and price tags
- [ ] Card designs with consistent aspect ratios and rounded corners
- [ ] Social proof near CTAs (trip count, response time, expertise signal)
- [ ] Curated language — specific, not generic

---

*Analysis complete. Tully sets the floor; Jacada and Secret Retreats provide pattern inspiration.*
