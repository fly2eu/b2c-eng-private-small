# CLAUDE.md — B2C European Private Tours (Brand 1)

> This file is persistent project memory. It loads into every Claude Code session.
> Read `docs/product-reference.md` for the full product catalogue.
> Read `docs/research/market-research.md` for pre-built market intelligence.
> Every design, content, and brand decision must follow these rules.

---

## Project Overview

**What:** A B2C consumer-facing website for a premium travel brand selling private chauffeured European tours to Indian and GCC-based travelers. 1–19 guests, handpicked hotels and premium stays, premium fleet, fully managed door-to-door experiences.

**Who sees this site:** End consumers — families, couples, friend groups planning a European holiday. NOT travel agents, NOT B2B. Every word should speak directly to the traveler.

**Stack:** Next.js 15+ (App Router) · Tailwind CSS v4 · shadcn/ui · Radix UI · Framer Motion · TypeScript

**The brand does not exist yet.** This project creates everything from scratch: name, logo, color palette, typography, voice, website, social media, print materials.

**Parent company:** This brand is powered by flyEurope (a B2B European DMC), but the flyEurope name must NEVER appear on the B2C site. The consumer never needs to know about the B2B backend.

---

## CRITICAL: Differentiation from flyEurope

The B2B website (flyEurope) uses:
- **Colors:** Navy (#1A3A5C) + Orange (#E87A2E) + Cream (#FAE6CF)
- **Fonts:** Playfair Display (headings) + DM Sans (body)
- **Tone:** Professional, agent-focused, B2B
- **Layout:** Corporate, informational

**This B2C brand must be COMPLETELY different:**
- Different color family (no navy, no orange — see palette direction below)
- Different font pairing (no Playfair, no DM Sans)
- Different tone (warm, personal, audience-inclusive — families, couples, groups, corporates)
- Different layout approach (editorial, photography-led, emotional)

If at any point the B2C site could be mistaken for flyEurope, something has gone wrong.

---

## Parallel Execution Strategy (Git Worktrees)

This project uses git worktrees for parallel execution:

```
main branch:           Research → Brand Identity → Website → Social/Print
logo-exploration:      Logo concepts (parallel, needs human review)
```

### Worktree Commands
```bash
# After initial setup on main:
git worktree add ../b2c-brand1-logo logo-exploration

# Work on logo in the worktree:
cd ../b2c-brand1-logo
# ... create logo concepts ...
# When approved, merge back:
cd ../b2c-brand1
git merge logo-exploration
```

### Phase Dependencies
```
PHASE A (Research) ──────────────────┐
     │                                │
     ▼                                │
PHASE B (Brand Identity) ────────────┤
     │         │                      │
     │         ▼                      │
     │    LOGO BRANCH ───────────────►│ (merge when approved)
     │         ▲                      │
     │         │ human review         │
     ▼                                │
PHASE C (Website) ◄──────────────────┘
     │
     ▼
PHASE D (Social & Print)
```

**PHASE A and the logo branch can run in parallel.**
**PHASE C can start before the logo is finalized** — use a text placeholder for the logo, swap in the SVG when the logo branch merges.

---

## Phase A — Research

> **Status: PRE-BUILT.** Market research has been completed and saved to `docs/research/market-research.md`.
> Claude Code should READ this file, not repeat the web searches.
> 
> However, Claude Code SHOULD still:
> 1. Fetch and visually analyze 3-5 competitor websites (kensingtontours.com, scottdunn.com, blacktomato.com, tajhotels.com, sotc.in) for design patterns
> 2. Note specific UI patterns, color usage, typography choices, and layout approaches
> 3. Save visual analysis notes to `docs/research/design-analysis.md`

---

## Phase B — Brand Identity

### Brand Name
Generate 5 brand name options. Criteria:
- **Warm and European-feeling** — evokes the experience, not the logistics
- **Memorable and unique** — can be trademarked, domain available (.com ideally)
- **Not generic travel words** — avoid "tours", "holidays", "travels", "journeys" as the main word
- **Pronounceable by Indian/Arabic speakers** — no difficult consonant clusters
- **2-3 syllables max** — easy to say, easy to remember
- **Should work as a WhatsApp display name** — short enough to be recognizable

Name directions to explore:
- European place/concept associations (but not a real city name)
- Warmth/arrival/home concepts
- Movement/road/passage concepts
- Something that sounds like a boutique hotel brand

For each name, provide: meaning/reasoning, domain availability check (search the web), how it sounds in casual conversation ("We booked our Europe trip through [name]").

Select the top 2 and create logo concepts for both.

### Logo Direction
Create SVG logos on the `logo-exploration` branch. For each of the top 2 names:
- Primary logo (horizontal — name + icon/mark)
- Icon-only version (for favicons, WhatsApp profile, app icon)
- Design should feel: warm, premium, travel-adjacent without being cliché
- Avoid: globe icons, airplane icons, compass roses, generic map pins
- Consider: subtle European architectural elements, road/path motifs, elegant monograms, abstracted landscape forms
- Must work at: 32px (favicon), 200px (nav), and full-width (hero)
- Colors: use the brand palette (define palette before logo)
- Typography in logo: can be a custom/modified version of the heading font

Present both options to the user with a brief explanation. Wait for feedback before proceeding.

### Color Palette

**DIRECTION (research-informed):**
The palette must feel warm, premium, and distinctly NOT like flyEurope or generic tech brands.

Explore one of these palettes (choose based on research):

**Option A — Deep Emerald + Warm Gold**
- Primary: deep emerald green (#12442E range)
- Accent: warm gold/amber (#DAA521 range)
- Background: warm cream/ivory
- This evokes: European forests, Swiss valleys, refined elegance

**Option B — Burgundy/Wine + Antique Gold**
- Primary: deep burgundy/wine (#6B2D3E range)
- Accent: antique gold (#B8944F range)
- Background: warm off-white
- This evokes: European vineyards, warm hospitality, richness

**Option C — Warm Terracotta + Sage**
- Primary: terracotta/warm earth (#B5562A range)
- Accent: sage green (#7A8B6F range)
- Background: warm stone
- This evokes: Mediterranean warmth, Tuscan hills, grounded elegance

**Choose ONE direction and define the full palette:**
```
--primary:        [signature color]     → Headers, accents, key UI elements
--primary-light:  [lighter variant]     → Hover states, subtle highlights
--primary-dark:   [darker variant]      → Dark sections, footer
--accent:         [warm accent]         → CTAs, prices, highlights
--accent-light:   [softer accent]       → Badges, tags
--bg-warm:        [warm white/cream]    → Page background (NEVER pure #FFFFFF)
--bg-section:     [off-white/cream]     → Alternating section backgrounds
--text-primary:   [near-black, warm]    → Headings (NEVER pure #000000)
--text-secondary: [warm gray]           → Descriptions, metadata
--text-muted:     [lighter warm gray]   → Captions, footnotes
--border:         [warm border color]   → Card borders, dividers
--success:        [green]               → Trust signals, confirmations
--whatsapp:       #25D366              → WhatsApp buttons (standard brand color)
```

### Typography

**Heading font:** Elegant serif or semi-serif. Must be on Google Fonts. Must NOT be Playfair Display (flyEurope uses it).

Explore these options:
- **Robout** — elegant, slightly condensed, beautiful at large sizes
- **Libre Baskerville** — classic, reliable, very readable
- **Source Serif Pro** — modern serif, clean, multiple weights
- **Lora** — friendly serif, great for editorial feel
- **Noto Serif Display** — contemporary, wide language support

**Body font:** Clean sans-serif. Must NOT be DM Sans (flyEurope uses it).

Explore these options:
- **Poppins** — modern, geometric, warm
- **Outfit** — clean, contemporary, multiple weights
- **Nunito Sans** — rounded, friendly, very readable on mobile
- **Albert Sans** — modern, slightly condensed, elegant

**Pick one heading + one body font. Test the combination.**

### Type Scale
```
Hero title:       clamp(36px, 6vw, 64px)   font-semibold    [Heading font]
Section title:    clamp(28px, 4vw, 44px)   font-semibold    [Heading font]
Card title:       20px                      font-semibold    [Heading font]
Subtitle:         16–18px                   font-light       [Body font]
Body:             15–16px                   font-normal      [Body font]
Small/labels:     12–13px                   font-medium      [Body font], uppercase, tracking-wide
CTA buttons:      14–15px                   font-semibold    [Body font]
Price:            24–28px                   font-semibold    [Heading font]
```

### Brand Voice Guide

**Personality:** A well-traveled Indian friend who lives in Europe.
**Tone:** Warm, knowledgeable, reassuring, specific.
**Person:** Second person — "you" and "your family."

**Voice Rules:**
- Specific over vague: "Your chauffeur meets you at Geneva Airport" not "Airport transfer included"
- Sensory language: Describe what it FEELS like, not just logistics
- Confidence without arrogance: "We've driven every route we recommend" not "We're the best"
- No B2B language ever: No "agents", "net rates", "white-label", "DMC", "B2B"
- Show, don't label: Never say "luxury" — show it through detail and design

**Banned Words:**
"World-class", "Luxury" (as a label), "Best-in-class", "Seamless", "Curated", "Bespoke" (use "custom" or "tailored"), "Hassle-free" (overused), any B2B language

**Sample Copy Patterns:**
```
HEADLINE: [Emotional benefit or aspiration]
SUBHEAD: [Specific, tangible detail]
BODY:    [Paint the picture, then explain the logistics]
CTA:     [Specific action with clear outcome]

EXAMPLE:
"Your family's first morning in Switzerland."
"A private Mercedes meets you at Geneva Airport. By lunch, you're watching the Alps from your hotel terrace."
[Describe the feel, the pace, the freedom]
"Tell us about your group — we'll design your trip."
```

**Taglines:** Generate 3 options. Criteria:
- Short (5-8 words max)
- Evokes the private, personal nature of the experience
- Not generic (could NOT be used by any other travel company)
- Works as a social media bio, website subhead, and print tagline

Save everything to `brand-kit/brand-guide.md` and logo SVGs to `brand-kit/logos/`.

---

## Phase C — Website

### Design Philosophy

**The Vibe:**
Premium but warm. Aspirational but approachable. NOT cold Western minimalism. NOT loud maximalism.

Think: **a boutique hotel lobby in Europe as experienced by a well-traveled Indian family** — warm materials, curated details, unhurried elegance, a sense of arrival. The website should feel like the trip itself: considered, comfortable, and quietly impressive.

**Design Benchmarks (study these for patterns, not to copy):**
- aman.com — ultra-premium, warm minimalism, space
- belmond.com — editorial warmth, storytelling
- tajhotels.com — Indian luxury done right
- kensingtontours.com — clean, trust-building, destination expertise

**What Premium Means for This Audience:**
- Large, immersive destination photography (not small thumbnails)
- Warm color palette with intentional whitespace
- Typography that feels elegant but readable (not ultra-thin)
- Trust signals near every CTA
- WhatsApp button always prominent
- Price transparency at the programme level
- Diverse audience imagery — families, couples, groups, corporates

**What NOT to Do:**
- No cold corporate aesthetic
- No generic stock photos
- No text-heavy pages without visual breaks
- No small, dense grids on mobile
- No "Contact Us" as the only CTA
- Prices always shown as indicative starting points — never fixed
- No "luxury" as a word label

### Image Strategy
- **Destination photos:** Golden hour, warm tones, human scale
- **Vehicle photos:** Show interior comfort — backseat, legroom, amenities
- **People photos:** Diverse groups reflecting the audience — Indian families, mixed groups
- **Experience photos:** Local dining, food markets, cultural experiences, market walks
- Use Unsplash API for destination photography (set UNSPLASH_ACCESS_KEY in .env.local)
- Vehicle images: reuse from `reference-images/` folder
- All images via Next.js `<Image>` — never `<img>`
- Hero images: full-width, min 1920px, blur placeholder
- Mobile: full-width images, single column

### Spacing & Layout
```
Page max-width:       1280px (max-w-7xl mx-auto)
Section padding:      80–100px vertical desktop, 48–60px mobile
Section side padding: 24px mobile, 48px desktop
Card grid gap:        24px
Card border-radius:   16px
Button border-radius: 8px (slightly rounded, not pill)
Button padding:       14px 28px
```

**Responsive (Mobile-First):**
- Mobile (<768px): Single column. Full-width images. Large tap targets. WhatsApp fixed bottom.
- Tablet (768–1024px): 2-column grids.
- Desktop (>1024px): Full layout, 3-4 column grids. Animations active.

**CRITICAL: 70%+ mobile audience. Design mobile first, desktop second.**

### Animations & Motion
Library: Framer Motion. Subtle and purposeful.

| Element | Animation | Duration |
|---------|-----------|----------|
| Section reveal | fadeIn + translateY(20px) | 500ms |
| Card hover | scale(1.02) + shadow expand | 250ms |
| Hero image | Subtle parallax scroll | Continuous |
| Stats/numbers | Count up when in viewport | 1.5s |
| Page transition | Fade | 300ms |
| CTA button hover | Background color shift | 200ms |
| Image load | Blur-up → sharp | 400ms |

### File Structure
```
src/
├── app/
│   ├── page.tsx                   → Homepage
│   ├── destinations/
│   │   ├── page.tsx               → All destinations overview
│   │   └── [slug]/page.tsx        → Individual destination
│   ├── tours/
│   │   ├── page.tsx               → All tours/programmes
│   │   └── [slug]/page.tsx        → Individual tour with day-by-day
│   ├── about/page.tsx             → About + trust page (team-focused, no named founder)
│   ├── contact/page.tsx           → Contact + WhatsApp + form
│   ├── gallery/page.tsx           → Photo gallery / experiences
│   └── layout.tsx                 → Root layout with nav + footer
├── components/
│   ├── layout/                    → Navbar, Footer, PageHero
│   ├── ui/                        → TourCard, DestinationCard, TestimonialCard, PriceTag
│   ├── forms/                     → ContactForm, EnquiryForm, WhatsAppButton
│   ├── animations/                → ScrollReveal, StaggerChildren, CountUp, Parallax
│   └── shared/                    → Logo, Button, Badge, SectionWrapper
├── data/
│   ├── tours.ts                   → Tour data (from itinerary JSONs)
│   └── destinations.ts            → Destination data with images
└── lib/
    └── utils.ts                   → Utility functions
```

### Component Rules
- Every section wraps in `<SectionWrapper>` for consistent padding/max-width
- All cards have hover state with subtle lift + shadow
- All grids collapse to single column on mobile
- Images always use Next.js `<Image>` — never `<img>`
- Icons from `lucide-react`
- WhatsApp floating button on every page (bottom-right, always visible on mobile)

### Page Specifications

**Homepage:**
1. Hero: Full-width destination image with overlay headline + CTA
2. "How It Works" section: 3-4 step visual flow
3. Featured destinations: 4-6 cards with large images
4. Featured tours: 3 programme cards with price + duration
5. "Why Private?" section: benefits with icons
6. Trust signals strip: stats (countries, support hours, fleet size)
7. CTA section: WhatsApp + form
8. Footer: full navigation, contact info, WhatsApp, social links

**Tour Detail Page ([slug]):**
1. Hero image with tour title, duration, price
2. Overview paragraph (experiential, sensory copy)
3. Day-by-day accordion (from itinerary data)
4. What's included / not included
5. Vehicle info with image
6. Price section with group size options
7. CTA: WhatsApp with pre-filled message for this specific tour
8. Related tours

**Destination Page ([slug]):**
1. Hero with destination name and editorial intro
2. Why visit section
3. Available tours in this destination
4. Best time to visit
5. Sample experiences
6. CTA

**About Page:**
- Team-focused (not named founder)
- "Built by people who've driven every route" angle
- Our approach: research-driven, detail-obsessed
- Founded by Europeans-by-experience — people who came for studies, stayed for the roads
- 24/7 support story
- NO fake team photos — use illustrations or abstract design

**Contact Page:**
- WhatsApp button (primary, largest CTA)
- Phone number
- Enquiry form (Name, Phone with +91/+971 pre-fill, Group size, Preferred dates, Destinations checkboxes, Optional message, WhatsApp checkbox pre-checked)
- "We respond within 2 hours"
- Map or European time zone indicator

### SEO Foundations
- Every page: unique `<title>` + `<meta description>`
- Structured data: TourPackage schema for programme pages
- Sitemap.xml auto-generated
- One H1 per page
- Alt text on all images
- Fast load times (< 3s on 3G)
- Open Graph + Twitter Card meta

### WhatsApp Integration
- Floating button on every page (especially mobile)
- WhatsApp number: +XX XXX XXX XXXX (placeholder)
- Pre-filled messages with context per page:
  - Homepage: "Hi, I'm interested in a private European tour. Can you help?"
  - Tour page: "Hi, I'm interested in [Tour Name] for [X] people. Can you tell me more?"
  - Contact page: "Hi, I'd like to plan a private European tour for my family."
- "Chat with us on WhatsApp" as primary CTA alongside "Send Enquiry"

---

## Phase D — Social & Print Collateral

### Instagram Grid (First 12 Posts)
Plan a cohesive grid. Alternating pattern:
1. Destination landscape (Switzerland)
2. Vehicle/fleet detail shot
3. Experiential moment (family at viewpoint)
4. Text-on-image (quote or stat)
5. Destination landscape (France)
6. Behind-the-scenes (route planning, map)
7. Destination landscape (Italy)
8. Text-on-image (tagline or CTA)
9. Experiential moment (dining, walking)
10. Vehicle interior detail
11. Destination landscape (Austria)
12. Text-on-image (WhatsApp CTA)

Create as HTML files that render at 1080x1080px (Instagram square).

### Instagram Story Templates (3-4 reusable formats)
- "Tour Spotlight" — destination image + tour name + price + swipe up
- "Behind the Scenes" — text + image + personal touch
- "Testimonial" — quote card format
- "Poll/Question" — engagement format

### Print Collateral
All PDF files using brand fonts, colors, and styling:
- **Business Card** — front: logo + name + title + contact; back: tagline + WhatsApp QR code
- **Letterhead** — clean, logo top, contact info bottom
- **WhatsApp Programme Cards** — One per featured tour (1080x1920px image, shareable). Tour name, duration, price, 3 highlights, WhatsApp link.
- **PDF One-Pager per Tour** — A4, branded, includes: overview, day-by-day summary, inclusions, price, QR code to WhatsApp

---

## Git Conventions

- Main branch: `main`
- Logo exploration: `logo-exploration` (git worktree)
- Commit after each phase completion
- Commit messages: imperative — "Add brand identity and color palette"
- Never commit `.env` files or `node_modules/`

---

## What Success Looks Like

A visitor (30-something Indian professional planning a Europe trip for their family) lands on this site and within 10 seconds:
1. Understands this is private European travel, not a bus tour
2. Sees imagery that makes them imagine themselves there
3. Finds the WhatsApp button
4. Feels confident this company can handle their trip
5. Starts a conversation

**The site should feel like the trip itself: warm, considered, and quietly impressive.**

---

*Created: April 2026*
