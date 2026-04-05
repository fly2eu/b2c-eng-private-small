---
name: travel-website-b2c
description: |
  Patterns for building B2C travel websites targeting Indian and GCC consumers.
  Covers WhatsApp integration, trust signal placement, enquiry forms with Indian
  phone codes, mobile-first design for 3G networks, price display in multiple
  currencies, and conversion-optimized tour detail pages. Trigger on "travel website",
  "tour page", "WhatsApp button", "enquiry form", "destination page", "itinerary",
  "tour card", "price display", or when building pages for travel consumers.
---

# Travel Website B2C — Indian & GCC Market Patterns

## WhatsApp Integration (CRITICAL)

Indian travelers initiate bookings via WhatsApp. This is the #1 conversion channel.

### Floating WhatsApp Button
Every page must have a floating WhatsApp button. Implementation:

```tsx
// components/forms/WhatsAppButton.tsx
'use client';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export function WhatsAppButton({ message, className }: WhatsAppButtonProps) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const defaultMsg = process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE;
  const text = encodeURIComponent(message || defaultMsg || '');
  const href = `https://wa.me/${phone?.replace(/[^0-9]/g, '')}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 
        rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg 
        hover:bg-[#20BD5A] transition-all hover:scale-105
        md:bottom-8 md:right-8 ${className}`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">WhatsApp Us</span>
    </a>
  );
}
```

### Per-Page Pre-filled Messages
```tsx
// Homepage
<WhatsAppButton message="Hi, I'm interested in a private European tour. Can you help?" />

// Tour detail page
<WhatsAppButton message={`Hi, I'm interested in the ${tour.title} tour for my family. Can you tell me more?`} />

// Contact page
<WhatsAppButton message="Hi, I'd like to plan a private European tour. Here are my details:" />
```

### WhatsApp as Primary CTA
In every CTA section, WhatsApp should be the PRIMARY button (green, prominent).
"Send Enquiry" form is SECONDARY. Phone call is TERTIARY.

```tsx
<div className="flex flex-col sm:flex-row gap-3">
  <WhatsAppCTA message="..." className="bg-[#25D366]">
    Chat on WhatsApp
  </WhatsAppCTA>
  <Button variant="outline">Send Enquiry</Button>
</div>
```

## Enquiry Form (Indian Market)

### Phone Number Field
Pre-fill country code. Support India (+91) and GCC (+971, +974, +965, +966, +968, +973).

```tsx
<div className="flex gap-2">
  <Select defaultValue="+91">
    <SelectItem value="+91">🇮🇳 +91</SelectItem>
    <SelectItem value="+971">🇦🇪 +971</SelectItem>
    <SelectItem value="+974">🇶🇦 +974</SelectItem>
    <SelectItem value="+966">🇸🇦 +966</SelectItem>
    <SelectItem value="+965">🇰🇼 +965</SelectItem>
    <SelectItem value="+44">🇬🇧 +44</SelectItem>
  </Select>
  <Input type="tel" placeholder="Phone number" />
</div>
```

### Form Fields (Keep Simple)
1. Name (required)
2. Phone with country code (required)
3. Group size dropdown: "2", "3-4", "5-7", "8-12", "13-19"
4. Preferred travel month (month/year picker — NOT exact dates)
5. Destinations interested in (checkboxes — top 6 destinations)
6. Anything else (optional textarea)
7. "Contact me on WhatsApp" checkbox (PRE-CHECKED by default)

## Tour Detail Page Pattern

### Above the Fold (Mobile)
```
[Hero Image — full width, 60vh]
[Tour Title — large serif]
[Duration badge] [Group size badge] [Price badge]
[WhatsApp CTA — full width green button]
```

### Day-by-Day Accordion
```tsx
// Each day: expandable, shows description + stops + overnight city
<Accordion type="single" collapsible>
  {tour.days.map(day => (
    <AccordionItem key={day.dayNumber} value={`day-${day.dayNumber}`}>
      <AccordionTrigger>
        <span className="font-semibold">Day {day.dayNumber}</span>
        <span className="text-muted-foreground ml-2">{day.title}</span>
      </AccordionTrigger>
      <AccordionContent>
        <p>{day.description}</p>
        {day.stops && (
          <div className="flex flex-wrap gap-2 mt-3">
            {day.stops.map(stop => (
              <Badge key={stop} variant="secondary">{stop}</Badge>
            ))}
          </div>
        )}
        <p className="text-sm text-muted-foreground mt-2">
          Overnight: {day.overnightCity}
        </p>
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

### Price Display
```tsx
// Show EUR with explanation
<div className="text-center">
  <p className="text-sm text-muted-foreground uppercase tracking-wide">From</p>
  <p className="text-3xl font-heading font-semibold text-primary">
    €{tour.priceFromEur.toLocaleString()}
  </p>
  <p className="text-sm text-muted-foreground">per person · twin sharing</p>
  <p className="text-xs text-muted-foreground mt-1">
    Final quote in your preferred currency
  </p>
</div>
```

## Trust Signals

### Near Every CTA
Place 1-2 trust signals adjacent to every conversion point:
- "We respond within 2 hours"
- "No booking commitment"
- "Free trip planning consultation"
- "24/7 support during your trip"
- "Every route personally driven by our team"

### Stats Strip
A horizontal strip with key numbers (use CountUp animation):
```
[X] Countries  |  24/7 Support  |  Mercedes Fleet  |  [X]+ Happy Families
```

### Trust Signal Component
```tsx
function TrustSignal({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Icon className="h-4 w-4 text-primary" />
      <span>{text}</span>
    </div>
  );
}
```

## Mobile-First Rules (3G Networks)

Indian mobile networks can be slow. Optimize for 3G:
- Hero images: Use Next.js `<Image>` with `priority` only for first hero
- All other images: `loading="lazy"` with blur placeholders
- Fonts: Use `next/font/google` with `display: 'swap'`
- Bundle size: Tree-shake icons (import individually from lucide-react)
- Target: < 3 seconds First Contentful Paint on 3G
- Single column on mobile — never 2+ column grids below 768px
- Touch targets: minimum 44x44px for all interactive elements
- WhatsApp button: minimum 48x48px, always visible

## Destination Page Pattern

### Structure
1. Hero with destination name (e.g., "Switzerland")
2. Editorial intro (2-3 paragraphs, sensory, experiential)
3. "Tours in [Destination]" — cards for available programmes
4. "Best Time to Visit" — month-by-month guide
5. "What You'll Experience" — 3-4 highlight boxes with icons
6. CTA: "Start planning your [Destination] trip"

### SEO
- Title: "[Destination] Private Tours — [Brand Name]"
- H1: Contains destination + "private tour" or similar
- Meta description: 155 chars, includes destination + "from India" or "private"
- Schema: `TouristDestination` + `TourPackage` for listed tours
