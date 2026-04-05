---
name: brand-collateral
description: |
  Create branded print collateral as PDF files — business cards, letterheads,
  programme one-pagers, WhatsApp programme cards. Uses Python (reportlab or fpdf2)
  to generate production-quality PDFs with brand fonts, colors, and logos.
  Trigger on "business card", "letterhead", "PDF", "one-pager", "programme card",
  "print collateral", "WhatsApp card", or "branded PDF".
---

# Brand Collateral Generator

## Overview
Generates production-quality PDF collateral using Python. All outputs use the brand's colors, fonts, and logo.

## Prerequisites
```bash
pip install fpdf2 Pillow cairosvg
```

## Business Card (85mm × 55mm)

### Front
- Brand logo (centered or top-left, depends on brand style)
- Person's name (heading font, medium-large)
- Title (body font, regular)
- Divider line in accent color

### Back
- Tagline (centered, heading font)
- Contact details: phone, email, website
- WhatsApp QR code (generated via `qrcode` library)
- Brand primary color background with white text, OR white background with primary accents

### Implementation Pattern
```python
from fpdf import FPDF

class BusinessCard(FPDF):
    def __init__(self):
        super().__init__(orientation='L', unit='mm', format=(55, 85))
        # Card dimensions: 85mm wide × 55mm tall (landscape)
```

## Letterhead (A4: 210mm × 297mm)

### Header
- Brand logo top-left (max 40mm wide)
- Company name + tagline top-right
- Thin accent-color line separating header from body

### Footer
- Contact information: phone, email, website, WhatsApp
- Brand primary color accent line
- Small logo or icon

### Body Area
- Clean, generous margins (25mm left, 20mm right, 20mm bottom)
- Body font at 11pt
- Placeholder text area

## Programme One-Pager (A4)

### Layout for Each Tour Programme
```
┌──────────────────────────────────┐
│  [Hero Image — full width]       │
│                                  │
│  TOUR NAME (heading, large)      │
│  Duration · Group Size · Price   │
├──────────────────────────────────┤
│  Overview paragraph              │
│  (2-3 sentences, experiential)   │
├──────────────────────────────────┤
│  DAY-BY-DAY (compact)            │
│  Day 1: Title — one line desc    │
│  Day 2: Title — one line desc    │
│  ...                             │
├──────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐     │
│  │ INCLUDED │  │NOT INCL. │     │
│  │ ✓ Hotels │  │ ✗ Flights│     │
│  │ ✓ Driver │  │ ✗ Meals  │     │
│  └──────────┘  └──────────┘     │
├──────────────────────────────────┤
│  [WhatsApp QR]  [CTA Text]      │
│  "Scan to start planning"       │
│  [Brand Logo]  [Contact Info]   │
└──────────────────────────────────┘
```

## WhatsApp Programme Card (1080 × 1920px)

Shareable image designed for WhatsApp forwards. Created as HTML (like social media templates) then optionally converted to PNG.

### Layout
```
┌─────────────────┐
│  [Destination    │
│   Hero Image]    │  60% of height
│                  │
├─────────────────┤
│  TOUR NAME       │
│  ────────────    │
│  6 Days · €1,590 │
│                  │
│  ✦ Highlight 1   │  
│  ✦ Highlight 2   │
│  ✦ Highlight 3   │
│                  │
│  [WhatsApp CTA]  │
│  "Tap to enquire"│
│                  │
│  [Brand Logo]    │
└─────────────────┘
```

## QR Code Generation
```python
import qrcode

def generate_whatsapp_qr(phone, message, output_path):
    url = f"https://wa.me/{phone}?text={message}"
    qr = qrcode.QRCode(version=1, box_size=10, border=2)
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    img.save(output_path)
```

## Font Handling in PDFs
```python
# Download Google Font TTF files first
# Example for Cormorant Garamond + Plus Jakarta Sans:
pdf.add_font('heading', '', 'fonts/CormorantGaramond-SemiBold.ttf', uni=True)
pdf.add_font('body', '', 'fonts/PlusJakartaSans-Regular.ttf', uni=True)
pdf.add_font('body', 'B', 'fonts/PlusJakartaSans-SemiBold.ttf', uni=True)
```

## Output Structure
```
collateral/
├── print/
│   ├── business-card-front.pdf
│   ├── business-card-back.pdf
│   ├── letterhead.pdf
│   └── letterhead-template.pdf (with placeholder body text)
├── pdf-programmes/
│   ├── my-scenic-switzerland.pdf
│   ├── switzerland-wonderland.pdf
│   └── ...
└── whatsapp-cards/
    ├── my-scenic-switzerland.html
    ├── switzerland-wonderland.html
    └── ...
```

## Color Conversion
Brand colors are defined in hex. Convert to RGB tuples for PDF libraries:
```python
def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

# Usage
primary_rgb = hex_to_rgb('#1B4D3E')  # → (27, 77, 62)
```
