---
name: brand-identity-creator
description: |
  Create a complete brand identity from scratch — name, color palette, typography, voice guide, taglines.
  Use when the user asks to create a new brand, define brand identity, pick colors/fonts/names,
  write a voice guide, or generate taglines. Trigger when you see "brand", "identity", "palette",
  "brand name", "voice guide", "tagline", or "brand kit" in the context.
---

# Brand Identity Creator

## Overview
This skill guides the creation of a complete brand identity system. It produces a `brand-guide.md` with all decisions documented, plus supporting assets.

## When to Activate
- User asks to create a brand from scratch
- Project has no existing brand identity
- CLAUDE.md or project docs reference "Phase B — Brand Identity"
- User asks about brand names, colors, typography, voice, or taglines

## Brand Name Generation

### Process
1. **Research the market** — Understand competitors, audience, and positioning
2. **Generate 8-10 raw candidates** — Explore multiple directions:
   - Evocative (emotion/feeling-based): e.g., "Ember", "Lume"
   - Geographic/cultural associations: e.g., "Maison", "Riviera"
   - Conceptual (what the brand represents): e.g., "Wayfare", "Meridian"
   - Invented (unique fabricated words): e.g., "Velora", "Arivio"
3. **Filter to 5 finalists** using these criteria:
   - Pronounceable across target languages
   - 2-3 syllables (memorable, works as WhatsApp display name)
   - Not too close to existing brands (search the web)
   - Domain availability (.com preferred, .co or .travel acceptable)
   - Sounds natural in conversation: "We booked through [name]"
   - No negative connotations in target markets
4. **Present with reasoning** — For each name, explain: meaning, why it fits, domain status, how it sounds in use

### Domain Check
For each candidate, search: `[name].com site available` or use `whois` if available.
Check `.com`, `.co`, `.travel`, `.eu` variants.

## Color Palette Creation

### Process
1. **Start from brand positioning** — Premium? Playful? Corporate? Warm? Cool?
2. **Define the primary color** — The ONE color that defines the brand
3. **Build the full system:**

```
--primary:        [signature]     → Headers, key UI, brand recognition
--primary-light:  [+20% lighter]  → Hover states, highlights
--primary-dark:   [+20% darker]   → Dark sections, footer backgrounds
--accent:         [complementary]  → CTAs, prices, action elements
--accent-light:   [softer accent]  → Badges, tags, subtle highlights
--bg-warm:        [background]     → Page background (never pure white)
--bg-section:     [alternate bg]   → Section alternation
--text-primary:   [near-black]     → Headings (never pure black)
--text-secondary: [medium gray]    → Descriptions, metadata
--text-muted:     [light gray]     → Captions, footnotes
--border:         [subtle border]  → Dividers, card borders
```

4. **Test combinations** — Ensure WCAG AA contrast ratios (4.5:1 for text, 3:1 for large text)
5. **Document with hex codes** — Every color gets a name, hex, and usage rule

### Color Theory Rules
- Warm brands: Gold, amber, terracotta, burgundy, emerald base
- Cool brands: Navy, teal, slate, indigo base
- Never use pure #000000 or #FFFFFF — always warm/cool variants
- Accent should contrast with primary (complementary or split-complementary)
- Background should be barely-tinted white (e.g., #FAF8F5, #FEFCF8, #F8F6F1)

## Typography Selection

### Process
1. **Heading font** — Sets the brand personality
   - Serif: elegant, traditional, editorial (Cormorant, Libre Baskerville, Lora)
   - Sans-serif: modern, clean, confident (Plus Jakarta Sans, Outfit, Albert Sans)
   - Semi-serif/slab: distinctive, contemporary (Zilla Slab, Bitter)
2. **Body font** — Must be readable at 15-16px on mobile
   - Always sans-serif for body
   - Multiple weights required (400, 500, 600, 700 minimum)
   - Good x-height for screen readability
3. **Test the pairing** — Heading + body must have visual contrast but harmonic relationship
4. **Define the type scale** with `clamp()` values for responsive sizing

### Google Fonts Only
All fonts must be available on Google Fonts for Next.js `next/font/google` import.

## Voice Guide

### Structure
```markdown
## Brand Voice Guide

### Personality
[3-5 adjective description: e.g., "Warm, knowledgeable, reassuring"]

### Tone
[How the personality manifests in different contexts]

### Person
[First/second/third person rules]

### Do's
- [Specific writing behaviors to follow]

### Don'ts
- [Specific writing behaviors to avoid]

### Banned Words
- [Words that conflict with brand positioning]

### Sample Copy
[3-5 examples showing the voice in action across different formats:
headline, body copy, CTA, social media caption, email subject]
```

## Tagline Generation

### Rules
- 5-8 words maximum
- Evokes the brand's core promise
- Not generic (couldn't apply to any competitor)
- Works across: website subhead, social bio, business card, email signature
- Generate 3 options with reasoning for each

## Output

Save everything to `brand-kit/brand-guide.md` with this structure:
```markdown
# [Brand Name] — Brand Guide

## Brand Name
[Name and reasoning]

## Tagline
[Primary tagline + 2 alternates]

## Color Palette
[Full palette with hex codes and usage rules]

## Typography
[Font pairing with type scale]

## Voice Guide
[Full voice documentation]

## Usage Rules
[Do's and don'ts for applying the brand]
```
