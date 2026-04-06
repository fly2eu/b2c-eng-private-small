# Design Overhaul Summary

> Completed: April 2026
> Scope: Homepage full redesign, premium treatment across all pages, icon removal, vehicle image replacement, CSS refinements

---

## Task 0 — Design Skill Installs

- `uipro-cli` attempted — not a real package, skipped
- `anthropics/skills@frontend-design` — successfully installed via `npx skills`

---

## Task 1 — Premium Design Teardown

Created `/docs/research/premium-design-teardown.md` with analysis of:
- Black Tomato: near-monochromatic palette, 70/30 image-to-text card ratio, no icons in content
- Hunter Moss: uppercase letter-spaced headers, full-bleed photography, consultative CTAs
- Luxury Gold: restrained palette, progressive discovery layout
- Abercrombie & Kent: light-grey borders (not heavy), photography as primary content

**Key design principle documented:** Premium travel sites let photography do the work. UI is nearly invisible. No borders, badges, or icon chrome. Typography and whitespace carry the design.

---

## Task 2 — Logo Alignment + Scroll State

**File changed:** `src/components/layout/Navbar.tsx`

- Added `items-start` to the logo flex column so the "PRIVATE EUROPEAN JOURNEYS" subtitle aligns left with the logo image
- Verified the `variant={scrolled ? 'dark' : 'light'}` prop is correct and the Logo component applies `brightness(0) invert(1)` for the light (not-scrolled) state
- Subtitle color properly toggles between `text-white/50` (not scrolled) and `text-[#8A8A7A]` (scrolled)
- Removed unused `Phone` import from Navbar

---

## Task 3 — Vehicle Image Replacements

**Fiat 500 image removed** (`photo-1549317661-bd32c8ce0db2`):

| File | Old Image | New Image |
|------|-----------|-----------|
| `src/app/page.tsx` | Fiat 500 (wrong) | `photo-1555215695-3004980ad54e` (dark luxury sedan) |
| `src/app/about/page.tsx` | Fiat 500 (wrong) | `photo-1555215695-3004980ad54e` (dark luxury sedan) |
| `src/app/gallery/page.tsx` | Fiat 500 (wrong) | `photo-1503376780353-7e6692767b70` (premium Porsche interior) |

---

## Task 4 — Homepage Full Redesign

**File rewritten:** `src/app/page.tsx`

### Sections Removed
- "This isn't a group tour / Why Elide" section with 6 icon+border feature cards
- "A premium vehicle for every group size" fleet section (moved to about page only)
- Stats strip (merged into trust line section)

### Sections Redesigned

**Section 1 — Hero (kept, enhanced)**
- Retained video background with alpine fallback
- Added two-layer subheading: emotional headline + utility bar ("Private vehicle · Dedicated driver · Every detail handled · 1–19 guests")
- Removed single paragraph subheading

**Section 2 — Vignette "What changes when it's yours"**
- Redesigned from a plain green box to a full-bleed two-column layout
- Left (55%): content with thin gold divider, Lauterbrunnen vignette, "You do." in gold, three features as text-only with gold dividing lines (no cards, no borders, no icons)
- Right (45%): full-height atmospheric alpine lake image (`photo-1596436165816-5df26fc13f4a`)
- Mobile: image first (order-first), content below

**Section 3 — Travel Styles**
- Replaced icon+bordered cards with tall portrait photography cards (`aspect-[3/4]`)
- Each card: full image with gradient overlay, style name, tagline, "For:" text at bottom
- Images: serene lake, mountain road, alpine valley, Paris street
- No icons. No borders. Text overlaid on photography.

**Section 4 — Process "How your journey comes together"**
- Removed numbered circles and all lucide icons
- Four steps side by side with thin horizontal gold connecting line (desktop)
- Small atmospheric square images above each step (messaging, map planning, luxury SUV, road journey)
- Large heading, small description. No step numbers.

**Sections 5 & 5b — Destinations + Tours**
- Retained existing DestinationCard and TourCard components
- Replaced section-label spans with `section-divider` divs above headings
- Removed "Ready to go" and "Where we go" gold uppercase labels

**Section 6 — Trust Line (new)**
- Single centered sentence: "Trusted by discerning travelers from India and the GCC"
- Horizontal stats row with CountUp numbers separated by middots
- Includes "IATA TIDS certified" inline
- One testimonial placeholder: italic quote, no card, centered, with section-divider above

**Section 7 — Final CTA**
- Full-bleed background image (Swiss Alps)
- Dark overlay
- Removed audience pill badges (Families, Couples, etc.)
- Two CTAs: WhatsApp (primary) + outline button

### Icons Removed from Homepage
All `lucide-react` imports removed from `page.tsx`:
- `Shield`, `Clock`, `Star`, `Users`, `Car`, `MapPin`, `CheckCircle`, `Phone`, `Sunrise`, `Globe`, `TreePine`, `Building2`

---

## Task 5 — Global CSS Refinements

**File changed:** `src/app/globals.css`

- Added `.section-divider` class: 40px wide, 1px tall, gold (`var(--color-accent)`), `margin-bottom: 1.5rem`
- Removed default `border: 1px solid var(--color-border-subtle)` from `.card` class — photo cards need no border, border can be applied per-component when needed

---

## Task 6 — Premium Treatment Across All Pages

### Tours `[slug]` page (`src/app/tours/[slug]/page.tsx`)
- Removed: `Clock, Users, MapPin, CheckCircle, XCircle, Car` icon imports
- Replaced hero metadata row icons with plain text + middot separators
- Replaced `section-label` span ("Overview") with `section-divider` div
- Replaced CheckCircle icons in highlights list with `✓` text characters
- Replaced CheckCircle icons in "What's included" heading with plain heading
- Replaced XCircle icon in "Not included" heading with plain heading
- Replaced CheckCircle icons in sidebar trust list with `✓` text characters

### About page (`src/app/about/page.tsx`)
- Removed: `CheckCircle, Car, Shield, Clock, MapPin, Users, GraduationCap` icon imports
- Removed icon data from `values` array
- Replaced 6 icon+white-bordered cards with clean text-only layout: top-border line + heading + body
- Replaced all `section-label` spans with `section-divider` divs:
  - "About us" label → removed
  - "Our story" label → section-divider
  - "How we work" label → section-divider
  - "Trust & Credentials" label → section-divider
  - "Client voices" label → removed
  - "The fleet" label → section-divider
- Kept `Star` icon for the star rating display (appropriate decorative use)

### Destinations `[slug]` page (`src/app/destinations/[slug]/page.tsx`)
- Removed: `Calendar, MapPin` icon imports (kept `ArrowLeft` for back navigation)
- Removed `Calendar` icon from "Best time to visit" line
- Replaced `MapPin` icon in highlights sidebar with `—` dash character
- Replaced `section-label` spans with `section-divider` divs or removed them
- Cleaned "Destination" hero label

---

## Task 7 — Design Quality Audit

**Additional files cleaned:**

| File | Change |
|------|--------|
| `src/components/layout/Navbar.tsx` | Removed unused `Phone` import |
| `src/app/gallery/page.tsx` | Removed "The experience" section-label |
| `src/app/tours/page.tsx` | Removed "Our programmes" section-label; replaced "Find your style" with section-divider |
| `src/app/destinations/page.tsx` | Removed "Where we go" section-label; replaced "Coming soon" with section-divider |
| `src/app/contact/ContactClient.tsx` | Removed "Get in touch" section-label |

**Build:** Passes cleanly on all runs. No TypeScript errors. No unused import warnings.

---

## Remaining Known Issues / TODOs

1. **DayAccordion icons** (`src/app/tours/[slug]/DayAccordion.tsx`): Uses `ChevronDown` and `MapPin` from lucide-react — these are functional (accordion toggle + location context). Left in place as they serve a UX purpose rather than decorating content.

2. **TourCard and DestinationCard** still use `Clock, Users, MapPin, ArrowRight` icons for metadata display. These could be replaced with plain text in a future pass for full icon removal.

3. **Footer** uses `Mail` icon from lucide-react for the email link — functional, retained.

4. **Contact form** (`ContactClient.tsx`) uses `Send, Clock, CheckCircle` for form button and trust signals. Functional context, retained but could be cleaned.

5. **Hero video** (`public/hero-video.mp4`) excluded from git tracking due to GitHub's 100MB file size limit. Added to `.gitignore`. Drop the file locally to activate — the section falls back to an alpine background image if the video is absent.

6. **Testimonials** remain placeholders — real client testimonials to be added when collected.

7. **Unsplash `UNSPLASH_ACCESS_KEY`** — not yet set in `.env.local`. All current images use direct Unsplash CDN URLs. Set the key if dynamic image fetching is needed.

---

## Files Changed Summary

| File | Task | Type of Change |
|------|------|---------------|
| `docs/research/premium-design-teardown.md` | Task 1 | Created |
| `src/components/layout/Navbar.tsx` | Tasks 2, 7 | Logo alignment fix, remove unused import |
| `src/app/page.tsx` | Tasks 3, 4 | Complete rewrite — new sections, photography-led design |
| `src/app/about/page.tsx` | Tasks 3, 6 | Icon removal, section-label cleanup, values card redesign |
| `src/app/gallery/page.tsx` | Tasks 3, 7 | Vehicle image fix, section-label removal |
| `src/app/tours/[slug]/page.tsx` | Task 6 | Icon removal, section cleanup |
| `src/app/destinations/[slug]/page.tsx` | Task 6 | Icon removal, section cleanup |
| `src/app/tours/page.tsx` | Task 7 | Section-label cleanup |
| `src/app/destinations/page.tsx` | Task 7 | Section-label cleanup |
| `src/app/contact/ContactClient.tsx` | Task 7 | Section-label removal |
| `src/app/globals.css` | Task 5 | Added `.section-divider`, removed `.card` default border |
| `.gitignore` | Task 0 | Added `*.mp4` |
| `docs/design-overhaul-summary.md` | Task 8 | Created |
