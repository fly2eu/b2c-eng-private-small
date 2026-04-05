# Brand Guide — Elide Private European Tours

> Created: April 2026
> This is the single source of truth for brand identity decisions.
> All design, copy, and marketing must follow this guide.

---

## Brand Name

**Selected Name: Elide**

### 5 Brand Name Options Considered

| Name | Syllables | Meaning/Reasoning | Domain Candidate | How It Sounds |
|------|-----------|-------------------|-----------------|---------------|
| **Elide** ⭐ | 3 | "Val" (valley in Italian/Spanish) + "Doro" (gold in Italian). Evokes golden European valleys — Swiss Alps, Tuscan hills, Rhine valley. Feels boutique-hotel premium. | elide.com *(verify with registrar)* | "We booked our Switzerland trip through Elide." — Natural, memorable, premium. |
| **Eloria** ⭐ | 3 | Invented — sounds like a boutique hotel in the Italian Lakes. Warm ending (-ia). No specific meaning, so it can mean exactly what the brand makes it mean. | eloria.com *(verify with registrar)* | "Eloria arranged our whole Europe itinerary." — Elegant, personal. |
| **Alparo** | 3 | Alps + "-aro" (a warm Romance suffix). Evokes the Alpine landscape directly. Clear travel association. | alparo.com *(verify)* | "Going with Alparo this summer." — Works, but slightly on-the-nose. |
| **Verdevo** | 3 | "Verde" (green, Italian/Spanish) + "-vo" (invented suffix). Evokes lush European landscapes. Distinctive. | verdevo.com *(verify)* | "We used Verdevo for our Italy trip." — Distinctive but less intuitive. |
| **Orbella** | 3 | "Orb" (world) + "bella" (beautiful, Italian). Evokes "beautiful world." Romantic and travel-adjacent. | orbella.com *(verify)* | "Orbella planned our family holiday." — Slightly feminine, less neutral. |

### Selected: Elide

**Why Elide wins:**
- The valley-gold meaning is deeply European and aligns perfectly with our Switzerland focus (valleys are everywhere — Lauterbrunnen, Rhine, Rhone)
- "Gold" in the name subtly communicates premium quality without being explicit
- Works beautifully as a logo wordmark — V-A-L-D-O-R-O, 7 letters, great kerning
- Pronounceable in Hindi, Arabic, Tamil, and English without difficulty
- Feels like a boutique Ticino hotel brand — exactly the register we want
- Short enough for WhatsApp display name: **Elide**

**Runner-up: Eloria** (used for logo Option B)

---

## Taglines

Three options — all meet the criteria (short, specific, can't be used by another travel company):

### Option A (Selected for Primary Use)
**"Your Europe. Your pace. Your family."**
- Direct, personal, answers the exact fear of the Indian family traveler (no group buses, no strangers)
- Works as homepage subhead, social bio, and print tagline
- 8 words but reads as 3 short beats

### Option B
**"Every route, personally driven."**
- Plays on both the literal (chauffeur) and figurative (personal attention) meaning
- Differentiates from group tours and generic operators
- Compact, 5 words

### Option C
**"Private roads through magnificent Europe."**
- More poetic, evokes the physical experience
- Works well as a print/Instagram headline
- 6 words

**Primary tagline: "Your Europe. Your pace. Your family."**

---

## Color Palette

**Direction: Deep Emerald + Warm Gold** (Option A from CLAUDE.md)

Chosen because:
- Emerald green evokes Swiss forests, Alpine meadows, and European refinement
- Warm gold resonates with Indian luxury aesthetics (Taj Hotels, Oberoi)
- This combination is completely distinct from flyEurope (navy/orange)
- Photographs beautifully against European landscapes
- Warm and prestigious without being cold or corporate

### Full Palette

```css
/* Brand Palette — Elide */

--color-primary:          #12442E;   /* Deep Emerald — headers, key UI, dark sections */
--color-primary-light:    #1D5C3F;   /* Lighter Emerald — hover states, subtle accents */
--color-primary-dark:     #0A2E1C;   /* Dark Forest — footer, dark mode sections */

--color-accent:           #DAA521;   /* Warm Gold — CTAs, prices, highlights, badges */
--color-accent-light:     #E8C04A;   /* Soft Gold — tags, badges, light accents */
--color-accent-dark:      #B8891A;   /* Deep Gold — hover on accent elements */

--color-bg-warm:          #FAF7F0;   /* Warm Ivory — primary page background (NOT pure white) */
--color-bg-section:       #F4EFE4;   /* Warm Cream — alternating section background */
--color-bg-dark:          #0F2A1A;   /* Near-black with green tint — dark hero overlays */

--color-text-primary:     #1A1A14;   /* Near-black with warm brown tint — headings */
--color-text-secondary:   #4A4A3C;   /* Warm dark gray — descriptions, body text */
--color-text-muted:       #8A8A7A;   /* Lighter warm gray — captions, metadata, footnotes */

--color-border:           #DDD8CC;   /* Warm beige border — card borders, dividers */
--color-border-subtle:    #EDE8DE;   /* Very subtle warm border */

--color-success:          #2D7A4F;   /* Forest green — trust signals, confirmations */
--color-whatsapp:         #25D366;   /* WhatsApp green — ALWAYS use this exact value */

/* Usage in Tailwind (via CSS variables in globals.css) */
```

### Color Usage Rules
- **Never** use pure `#FFFFFF` as background — always warm ivory `#FAF7F0`
- **Never** use pure `#000000` as text — always warm near-black `#1A1A14`
- **Primary** (emerald) is for headings, nav, footer background, key UI elements
- **Accent** (gold) is for CTA buttons, price tags, star ratings, highlight badges
- **Warm ivory** alternates with **warm cream** between sections for rhythm
- **WhatsApp green** `#25D366` is sacred — never modify this color

---

## Typography

### Heading Font: Robout
- **Google Fonts**: Yes — `font-family: 'Robout', serif`
- **Weights used**: 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Why**: More elegant than Playfair Display (flyEurope uses Playfair). Slightly condensed at large sizes. Beautiful for hero headlines. Evokes editorial European sophistication. Perfect for price display.
- **Subsets**: latin, latin-ext (for European characters)

### Body Font: Poppins
- **Google Fonts**: Yes — `font-family: 'Poppins', sans-serif`
- **Weights used**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Why**: Modern and geometric with warmth. Not the cold "tech" feel of Inter or Roboto. Not DM Sans (flyEurope uses DM Sans). Excellent readability on mobile. Works perfectly for trust signals, CTAs, and body copy.

### Type Scale

| Usage | Size | Weight | Font | Notes |
|-------|------|--------|------|-------|
| Hero title | clamp(36px, 6vw, 64px) | SemiBold (600) | Robout | Line height 1.1 |
| Section title | clamp(28px, 4vw, 44px) | SemiBold (600) | Robout | Line height 1.2 |
| Card title | 20px | SemiBold (600) | Robout | Line height 1.3 |
| Subtitle/deck | 16–18px | Light (300) | Poppins | Line height 1.6 |
| Body text | 15–16px | Regular (400) | Poppins | Line height 1.7 |
| Small/labels | 12–13px | Medium (500) | Poppins | Uppercase, tracking 0.08em |
| CTA buttons | 14–15px | SemiBold (600) | Poppins | Letter spacing 0.02em |
| Price | 24–28px | SemiBold (600) | Robout | Warm gold color |
| Navigation | 14px | Medium (500) | Poppins | Letter spacing 0.04em |
| Footer | 13px | Regular (400) | Poppins | Muted gray |

---

## Brand Voice Guide

### Brand Personality
A well-traveled Indian friend who lives in Europe. They've driven every road they recommend. They understand what Indian families want (space, pace, comfort, good food recommendations). They speak to you directly, warmly, and with specificity.

### Tone
Warm · Knowledgeable · Reassuring · Specific · Personal

**NOT**: Corporate · Salesy · Vague · Generic

### Always Second Person
"You" and "your family." Never "our customers." Never "travelers."

### The Five Voice Rules

**1. Specific over vague**
- ✅ "Your chauffeur meets you at Geneva Airport with a name board."
- ❌ "Airport transfer included."

**2. Sensory before logistical**
- ✅ "By mid-morning you're watching the Eiger from your hotel terrace. Your luggage is already in the room."
- ❌ "Day 1: Geneva arrival and transfer to Interlaken."

**3. Confidence without arrogance**
- ✅ "We've driven this road a hundred times. We know exactly where to stop."
- ❌ "We're the best private tour operator in Europe."

**4. No B2B language. Ever.**
- ❌ agents, DMC, net rates, white-label, B2B, trade
- ✅ family, your trip, your driver, your itinerary

**5. Show it, don't label it**
- ✅ "A Mercedes V-Class waits at arrivals, WiFi already on."
- ❌ "Luxury vehicle transfer included."

### Banned Words and Phrases
- "Luxury" (as a label) — show it through detail instead
- "World-class" — meaningless
- "Best-in-class" — marketing jargon
- "Seamless" — overused
- "Curated" — overused
- "Bespoke" → use "custom" or "designed for your family"
- "Hassle-free" → use "everything handled" or "not a single logistical worry"
- "End-to-end" → describe each end instead
- "Unique" (as a standalone claim)
- Any B2B terminology

### Sample Copy Patterns

**Pattern 1: Day description**
```
WEAK: Day 1: Geneva arrival. Transfer to Interlaken.
STRONG: Your driver meets you at Geneva Airport. Stop in Gruyères for lunch — the cobblestoned medieval village is one of Switzerland's most underrated spots. Arrive in Interlaken late afternoon with the Eiger, Mönch, and Jungfrau framed in your hotel window.
```

**Pattern 2: Feature + benefit**
```
WEAK: Includes Mercedes V-Class with WiFi.
STRONG: Your V-Class has WiFi for the kids, USB charging, and enough legroom for everyone to actually enjoy the drive.
```

**Pattern 3: Trust signal**
```
WEAK: 24/7 support available.
STRONG: We're on the ground in Europe, not routing calls from overseas. If something changes — a road closure, a late flight, a restaurant recommendation — message us. We respond.
```

**Pattern 4: CTA**
```
WEAK: Book Now / Contact Us
STRONG: Tell us about your family → We'll design your journey
STRONG: Start on WhatsApp → We respond within 2 hours
```

### Tone in Different Contexts

| Context | Tone | Example |
|---------|------|---------|
| Hero headline | Aspirational, warm | "Switzerland for your family, the way you imagined it." |
| Tour description | Specific, cinematic | "Seventy-two waterfalls. Sheer cliff walls. The Lauterbrunnen Valley is the landscape that makes Swiss cheese adverts make sense." |
| Trust signals | Confident, matter-of-fact | "We've driven every route we recommend. Not a single one is on the itinerary because it looked good on paper." |
| WhatsApp CTA | Warm, direct | "Tell us who's traveling. We'll take it from there." |
| Price context | Transparent, reassuring | "From EUR 1,590 per person. Final quote in INR or AED — just ask." |
| Error/apology | Human, direct | "Something went wrong on our end. WhatsApp us directly — faster than a form." |

---

## Logo Direction

See `brand-kit/logos/` for SVG files.

### Elide Logo (Option A)
- Icon: Stylized mountain valley form with a subtle golden peak — the "V" of Elide echoed in the valley silhouette
- Wordmark: Robout, letter-spaced, all-caps or title case
- Colors: Primary emerald on warm ivory / reversed cream on emerald

### Eloria Logo (Option B)
- Icon: Elegant monogram or abstract road/path motif
- Wordmark: Robout, elegant spacing
- Colors: Same brand palette

---

## Social Media Presence

### Instagram Bio
**Elide** · Private European tours for Indian & GCC families.
Your Europe. Your pace. Your family. 🇨🇭🇫🇷🇮🇹
→ WhatsApp to plan your trip ↓

### WhatsApp Profile
Name: **Elide**
About: Private chauffeured tours of Europe. WhatsApp us to start planning.

### Brand Hashtags
`#Elide` `#PrivateEuropeTour` `#SwitzerlandWithFamily` `#EuropeByMercedes` `#IndiaToEurope`

---

## Key Brand Differentiators (Use in Copy)

1. **Private, always** — "Your vehicle. Your family. No strangers on the bus."
2. **Mercedes fleet** — Not just "a car" — a specific, recognizable vehicle
3. **4-star boutique hotels** — Handpicked, not chain hotels
4. **We've driven every route** — Real on-ground knowledge, not AI itineraries
5. **Based in Europe** — On-ground support, not an overseas call centre
6. **24/7 on-trip support** — Real humans who know Europe
7. **Price transparency** — "From EUR X per person" — no hiding behind "call for quote"

---

## What Elide Is NOT

- Not a group tour (never 20+ strangers on a bus)
- Not an agent (no B2B language, no commission talk)
- Not flyEurope (completely different visual identity, tone, and audience)
- Not a generic luxury brand (warm and specific, not cold and abstract)
- Not Western-luxury-only (we understand Indian families, GCC travelers, and what makes a trip work for them)

---

*Brand guide version 1.0 — April 2026*
*For questions or updates, refer to CLAUDE.md and docs/product-reference.md*
