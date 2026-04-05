---
name: svg-logo-designer
description: |
  Create production-quality SVG logos with icon and wordmark variants.
  Use when the user asks to design a logo, create brand marks, generate favicon,
  or produce logo variants (horizontal, stacked, icon-only). Trigger on "logo",
  "brand mark", "icon", "favicon", "wordmark", or "monogram".
---

# SVG Logo Designer

## Overview
Creates production-quality SVG logos directly in code. Produces multiple variants suitable for web, print, and social media use.

## When to Activate
- User asks to create or design a logo
- Project needs a logo as part of brand identity
- CLAUDE.md references logo creation
- User needs favicon, app icon, or social media profile image

## Logo Design Principles

### What Makes a Good Logo
1. **Simple** — Recognizable at 16px (favicon) and 400px (hero)
2. **Distinctive** — Not confusable with existing brands
3. **Relevant** — Visually connected to the brand's domain
4. **Versatile** — Works on light/dark backgrounds, small/large sizes
5. **Timeless** — Avoids trendy effects that will date quickly

### SVG Best Practices
- Use `viewBox` for scalability — never fixed width/height on the root SVG
- Use `currentColor` where possible for easy color overrides
- Keep paths clean — minimize nodes, use smooth curves
- Group logically: `<g id="icon">`, `<g id="wordmark">`
- Include `aria-label` for accessibility
- Optimize: remove unnecessary groups, merge paths where possible
- No raster images embedded in SVG
- No external font dependencies in SVG — convert text to paths for the final version, OR use a web-safe fallback

### Logo Structure
Every logo project produces these variants:

```
brand-kit/logos/
├── [name]-primary.svg          # Horizontal: icon + wordmark
├── [name]-stacked.svg          # Vertical: icon above wordmark
├── [name]-icon.svg             # Icon/mark only
├── [name]-wordmark.svg         # Text only (no icon)
├── [name]-favicon.svg          # Optimized for 32x32 / 16x16
└── [name]-dark.svg             # Primary logo for dark backgrounds
```

## Design Process

### Step 1: Understand the Brand
Read the brand guide. Extract:
- Brand name
- Industry/domain
- Personality (warm? bold? elegant? playful?)
- Color palette (primary, accent)
- Typography (heading font — may inform wordmark style)
- What to AVOID (competitor logos, clichéd symbols)

### Step 2: Explore Icon Concepts
Generate 2-3 icon directions:
- **Abstract geometric** — shapes that evoke the brand's essence
- **Letterform** — stylized initials or monogram
- **Symbolic** — simplified representation of a relevant concept
- **Negative space** — clever use of space within/between shapes

For travel brands specifically:
- AVOID: Globe icons, airplane silhouettes, compass roses, generic map pins, suitcases
- CONSIDER: Subtle path/road motifs, architectural elements, horizon lines, abstract landscapes, elegant monograms, leaf/nature forms, doorway/arch shapes

### Step 3: Build in SVG
```xml
<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" aria-label="[Brand Name] logo">
  <g id="icon">
    <!-- Icon paths here -->
  </g>
  <g id="wordmark">
    <!-- Text or text-as-path here -->
  </g>
</svg>
```

### Step 4: Test Sizes
Verify the logo works at:
- **16x16** — Browser favicon (icon only)
- **32x32** — Retina favicon (icon only)
- **40-48px height** — Navigation bar (primary horizontal)
- **200px width** — Footer, about page
- **Full width** — Hero sections, print materials

### Step 5: Color Variants
- Primary colors on light background
- White/light version on dark background
- Single-color version (for embossing, watermarks)
- Ensure sufficient contrast at all sizes

## SVG Code Quality

### Clean SVG Template
```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 [width] [height]" 
     xmlns="http://www.w3.org/2000/svg"
     aria-label="[Brand] logo"
     role="img">
  <title>[Brand Name]</title>
  <defs>
    <!-- Gradients, clips, etc. if needed -->
  </defs>
  <g id="logo" fill="none">
    <g id="icon">
      <path d="..." fill="[primary-color]"/>
    </g>
    <g id="wordmark" fill="[text-color]">
      <path d="..."/>
    </g>
  </g>
</svg>
```

### Typography in Logos
For the wordmark:
- **Preferred**: Use `<text>` with the brand's heading font for development/preview
- **Production**: Convert to `<path>` for the final deliverable (eliminates font dependency)
- If keeping as `<text>`, specify: `font-family`, `font-weight`, `font-size`, `letter-spacing`

### Optimization Checklist
- [ ] No unnecessary `<g>` wrappers
- [ ] Paths use relative commands where shorter
- [ ] No inline styles (use attributes or minimal `<style>` block)
- [ ] viewBox dimensions are clean integers
- [ ] No `transform` on root `<svg>`
- [ ] Colors use hex (not `rgb()` or `hsl()`) for compatibility

## Integration

### Next.js Usage
```tsx
// As inline component
import Logo from '@/components/shared/Logo';

// As image
import Image from 'next/image';
<Image src="/logos/brand-primary.svg" alt="Brand Name" width={160} height={40} />
```

### Favicon
```tsx
// app/layout.tsx
export const metadata = {
  icons: {
    icon: '/logos/brand-favicon.svg',
    apple: '/logos/brand-icon.svg',
  },
};
```
