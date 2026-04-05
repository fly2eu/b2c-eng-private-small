---
name: social-media-templates
description: |
  Create Instagram grid posts and story templates as self-contained HTML files
  that render at exact social media dimensions. Use when creating social media
  content, Instagram templates, story designs, or social media grids.
  Trigger on "Instagram", "social media template", "grid post", "story template",
  "social content", or "1080x1080".
---

# Social Media Template Generator

## Output Format
All templates are self-contained HTML files with inline CSS. No external dependencies.
Each file renders at the exact pixel dimensions for its platform.

## Instagram Post (1080x1080px)
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; height: 1080px; overflow: hidden; }
    .post {
      width: 1080px; height: 1080px;
      font-family: [brand-body-font], sans-serif;
      position: relative;
      /* Brand background color or image */
    }
  </style>
</head>
<body>
  <div class="post">
    <!-- Content here -->
  </div>
</body>
</html>
```

## Instagram Story (1080x1920px)
```html
<style>
  body { width: 1080px; height: 1920px; overflow: hidden; }
</style>
```

## Template Types

### 1. Destination Landscape Post
- Full-bleed background image (use Unsplash URL or placeholder)
- Gradient overlay at bottom (transparent → brand dark color)
- Destination name in heading font, large
- Subtle brand logo watermark top-right
- No CTA text — the image sells

### 2. Text-on-Color Post
- Solid brand primary color background
- Centered text: quote, stat, or CTA
- Heading font for the main text
- Body font for attribution or subtitle
- Brand logo bottom-center

### 3. Tour Spotlight Post
- Split layout: top 60% image, bottom 40% info
- Tour name, duration, price
- 3 bullet highlights
- "WhatsApp us" CTA with phone icon
- Brand colors throughout

### 4. Behind-the-Scenes Post
- Image with branded border/frame
- Caption area with brand styling
- Personal, warm tone
- Small logo placement

### 5. Story — Tour Spotlight
- Full-screen destination image
- Tour name overlay
- Price badge
- "Swipe Up" or "Link in Bio" CTA
- Brand logo top

### 6. Story — Poll/Question
- Brand primary background
- Question text centered
- Poll/answer options styled as buttons
- Engaging, warm copy

### Grid Planning
Plan 12 posts in a 4x3 grid. Alternate between:
- Row 1: Landscape | Detail | Landscape | Text
- Row 2: Tour Spotlight | Landscape | BTS | Text
- Row 3: Landscape | Detail | Landscape | CTA

The grid should look cohesive when viewed as a whole — consistent color palette, alternating light/dark posts.

## File Naming
```
collateral/instagram/
├── post-01-destination-switzerland.html
├── post-02-fleet-vclass.html
├── post-03-experience-family.html
├── post-04-text-tagline.html
├── ...
├── post-12-text-cta.html
└── grid-preview.html  (shows all 12 in a 4x3 grid)

collateral/stories/
├── story-tour-spotlight.html
├── story-behind-scenes.html
├── story-testimonial.html
└── story-poll.html
```

## Brand Consistency
- Use EXACT hex colors from brand-guide.md
- Use Google Fonts loaded via `<link>` in each HTML file
- Maintain consistent padding/margins across templates
- Logo in consistent position across all posts
