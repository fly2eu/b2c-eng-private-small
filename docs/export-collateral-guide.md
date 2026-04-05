# Export Collateral Guide — Elide

> How to convert HTML collateral files to PNG/PDF for use in marketing.

---

## Quick Start (Automated)

```bash
# From project root:
npm install  # installs puppeteer (devDependency)
./scripts/export-collateral.sh
# Files output to: collateral-exports/
```

---

## What the Script Does

The `export-collateral.sh` script:
1. Detects Puppeteer or Chrome headless
2. Renders each HTML file at the correct dimensions
3. Saves PNG (all files) and PDF (print files only) to `collateral-exports/`

### File Dimensions

| Category | Width | Height |
|----------|-------|--------|
| Instagram posts | 1080px | 1080px |
| Instagram stories | 1080px | 1920px |
| WhatsApp programme cards | 1080px | 1920px |
| Print (A4, letterhead, one-pagers) | 794px | 1123px |
| Business cards | 1004px | 638px |

---

## Manual Export — Chrome Headless (No Puppeteer)

```bash
# Install Chrome if not present:
brew install --cask google-chrome   # macOS

# Export a single file to PDF:
google-chrome --headless --print-to-pdf=output.pdf --no-margins path/to/file.html

# Export to PNG (screenshot):
google-chrome --headless --screenshot=output.png --window-size=1080,1080 path/to/file.html
```

### Instagram Posts (1080x1080)
```bash
for f in collateral/instagram/*.html; do
  name=$(basename "$f" .html)
  google-chrome --headless --screenshot="collateral-exports/${name}.png" \
    --window-size=1080,1080 "$f"
done
```

### Instagram Stories / WhatsApp Cards (1080x1920)
```bash
for f in collateral/stories/*.html collateral/whatsapp-cards/*.html; do
  name=$(basename "$f" .html)
  google-chrome --headless --screenshot="collateral-exports/${name}.png" \
    --window-size=1080,1920 "$f"
done
```

### Print Files (A4 PDF)
```bash
for f in collateral/print/*.html; do
  name=$(basename "$f" .html)
  google-chrome --headless --print-to-pdf="collateral-exports/${name}.pdf" \
    --no-margins "$f"
done
```

---

## Manual Export — macOS Safari / Preview

1. Open the HTML file in Safari
2. File → Export as PDF
3. Or: Use `⌘+P` → Save as PDF

---

## Manual Export — Online Tool (No Installation)

1. Go to [htmlcsstoimage.com](https://htmlcsstoimage.com/) or [hcaptail.io](https://hcaptail.io/)
2. Upload or paste the HTML file content
3. Set dimensions as per the table above
4. Download PNG/PDF

---

## File Organization

```
collateral/
├── instagram/          → 1080x1080 posts (12 files)
├── stories/            → 1080x1920 stories (4 files)
├── whatsapp-cards/     → 1080x1920 WhatsApp cards (2 files)
└── print/              → A4 print files (5 files)

collateral-exports/     → Generated outputs (gitignored)
```

---

## Adding to .gitignore

The `collateral-exports/` folder should be in `.gitignore` as generated files:

```
collateral-exports/
```

---

*Last updated: April 2026*
