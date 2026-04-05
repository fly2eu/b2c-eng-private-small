# Competitor Design Analysis — B2C European Private Tours

> Fetched and analyzed: April 2026
> Purpose: Inform design decisions for the B2C brand. What to learn, what to avoid.

---

## 1. Kensington Tours (kensingtontours.com)

### What They Do Well
- **Warm neutral palette**: Deep brown/charcoal (#3a2f3c) + warm cream (#fdf9ec) avoids cold corporate vibes. Taupe accents (#767260) suggest refinement without demanding attention. **Lesson: Warm neutrals signal luxury better than bright colors.**
- **Serif + sans pairing**: SangBleuSunrise (elegant serif headers) + Averta (bold emphasis). Clean visual hierarchy. **Lesson: Serif headings with sans body text is the right choice.**
- **Sticky nav with shrink effect**: Nav compresses on scroll (6.25rem → 3.125rem). Secondary menu overlays below. Reduces friction without full-page takeover.
- **Gradient text protection on heroes**: Dark gradient overlay on hero images ensures text contrast without washing out the photography aesthetic.
- **Trustpilot integration**: Embedded social proof near key CTAs. **Lesson: Third-party trust signals (review widgets) reduce friction.**
- **Responsive card grids**: 2 columns on mobile → 4 columns desktop. `gap: 1–2rem`. Works clean.
- **Multiple CTA variants**: `.button--titanium`, `.button--transparent`, `.button--reversed` — allows strategic emphasis without full redesign.

### What to Avoid
- **Dense mobile forms**: Form toggles at 2.875rem height with complex margin tricks. Confusing on mobile. **Our approach: Keep forms clean, large touch targets, minimal fields above the fold.**
- **WhatsApp absent**: No visible WhatsApp widget. This is a miss for the Indian/GCC market. We make WhatsApp the primary CTA.
- **Western-centric**: No India/GCC market targeting. No price transparency. **Our advantage: Show "from EUR 1,590 per person" prominently.**

---

## 2. Belmond (belmond.com)

### What They Do Well
- **Restraint over decoration**: No gradients, heavy shadows, or borders. Whitespace alone creates hierarchy and premium feel. **Lesson: Breathing room = luxury signal.**
- **Conversational CTAs**: "Take me there" and "Discover" outperform generic "Book Now." Feels like an invitation, not a transaction.
- **Lifestyle photography dominance**: Hero images show people experiencing moments (not just empty landscapes). Warm, golden-hour lighting throughout. **Lesson: Show the family at the viewpoint, not just the viewpoint.**
- **Horizontal scroll for product abundance**: Multiple tour cards visible without pagination. Elegant and space-efficient.
- **Muted UI, rich photography**: Interface is near-neutral; color lives in the photography. Creates visual contrast without clutter.
- **Narrative storytelling**: Content attributed to journalists, designers, authors. Builds editorial credibility. **Lesson: "Built by people who've driven every route" is our editorial credibility angle.**
- **Limited inventory messaging**: "Bookings Now Open at [Property]" creates urgency without discounts.

### What to Avoid
- **No price visibility**: Belmond hides prices behind a booking flow. **For our market (Indian families), price transparency builds trust, not anxiety. Show starting prices prominently.**
- **No WhatsApp**: Entirely absent. Works for Western ultra-luxury; fails for Indian/GCC market.
- **Too abstract for first-time visitors**: Copy like "Discover a new pace of travel" is beautiful but vague. Indian family planners want specifics ("Geneva Airport → your hotel terrace in 3 hours").

---

## 3. Taj Hotels (tajhotels.com)
*(Access returned 403 — analyzed from market research and general knowledge)*

### Known Design Patterns
- **Warm gold + ivory palette**: Deep burgundy/wine accents with gold. Never cold. Absolutely the right reference for Indian luxury.
- **Serif typography prominently**: Elegant, traditional. Creates sense of heritage and premium positioning.
- **Large, immersive hero photography**: Full-width, high quality, warm tones.
- **Strong trust through heritage storytelling**: "Since 1903" type signals. **For us: "We've driven every route we recommend" is our equivalent heritage signal.**
- **Indian hospitality warmth in copy**: Warm, personal, "Guest" not "Customer."

### Lessons for Our Brand
- Use warm gold as the accent color (not silver, not blue)
- Hero text should feel welcoming, not commanding
- Trust signals tied to experience, not just statistics
- Family imagery is essential — Taj always shows families celebrating milestones

---

## 4. Scott Dunn (scottdunn.com)
*(From market research)*

### Key Patterns
- Ultra-luxury editorial design — magazine-quality photography
- Strong visual storytelling
- Very high price point, no pricing transparency
- **Avoid**: Their Western-only focus misses our market entirely

---

## Key Design Decisions for Our Brand

### Colors
Informed by Kensington (warm cream/brown) + Taj (warm gold + deep tones) + Belmond (restraint, editorial):
- **Primary**: Deep emerald (#1B4D3E range) — evokes Swiss forests, European refinement
- **Accent**: Warm gold (#C5963A range) — evokes the Taj aesthetic, warmth, premium
- **Background**: Warm cream (#FAF7F0) — never pure white, never cold
- **Why not burgundy or terracotta**: Emerald + gold is more distinctive in the travel category and photographs better against European landscapes

### Typography
- **Heading**: Cormorant Garamond — More elegant than Playfair (which flyEurope uses), slightly condensed, beautiful at large sizes, evokes editorial quality
- **Body**: Plus Jakarta Sans — Modern and geometric with warmth, not the cold "tech" feel of Inter or DM Sans (which flyEurope uses)

### Layout Philosophy
From Belmond: whitespace = luxury. From Kensington: warm neutrals + strong hierarchy. From Taj: warmth and family-focus.
- Large hero images with warm gradient overlays
- Cards with generous padding and subtle hover lift
- WhatsApp button always visible (bottom-right, fixed)
- Price "from EUR X" shown on every tour card
- Trust signals (Mercedes fleet, 4-star hotels, 24/7 support) near every CTA

### Photography Direction
- Warm, golden-hour tones (like Belmond)
- Show families and groups experiencing moments (not just landscapes)
- Mercedes interior shots to establish premium fleet
- No cold stock photos of blonde Western families

### CTA Strategy
- Primary: WhatsApp (green button, always visible)
- Secondary: "Plan My Trip" / "Tell Us About Your Journey" (conversational, like Belmond)
- Never: "Book Now" (too transactional) or "Contact Us" (too corporate)

---

*Analysis complete. Use this document when making design decisions.*
