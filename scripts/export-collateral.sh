#!/usr/bin/env bash
# export-collateral.sh — Convert Elide collateral HTML files to PNG/PDF
# Usage: ./scripts/export-collateral.sh
# Requires: Node.js + npx (for Puppeteer), or Chrome headless as fallback

set -e

COLLATERAL_DIR="collateral"
OUTPUT_DIR="collateral-exports"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

mkdir -p "$PROJECT_ROOT/$OUTPUT_DIR"

echo "=== Elide Collateral Export ==="
echo "Project: $PROJECT_ROOT"
echo "Output: $OUTPUT_DIR/"
echo ""

# Check if puppeteer is available via npx
check_puppeteer() {
  npx --yes puppeteer --version 2>/dev/null && return 0
  return 1
}

# Check if Chrome/Chromium is available
CHROME_BIN=""
for candidate in google-chrome chromium-browser chromium /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome; do
  if command -v "$candidate" &>/dev/null; then
    CHROME_BIN="$candidate"
    break
  fi
done

# Export function using Puppeteer (preferred — pixel-perfect)
export_with_puppeteer() {
  local html_file="$1"
  local output_name="$2"
  local width="${3:-1080}"
  local height="${4:-1080}"

  node -e "
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: $width, height: $height, deviceScaleFactor: 2 });
  await page.goto('file://$PROJECT_ROOT/$html_file', { waitUntil: 'networkidle2' });
  await page.waitForTimeout(1000);

  // PNG screenshot
  await page.screenshot({
    path: '$PROJECT_ROOT/$OUTPUT_DIR/${output_name}.png',
    fullPage: false,
    clip: { x: 0, y: 0, width: $width, height: $height }
  });

  // PDF (for print files)
  if ('$html_file'.includes('print') || '$html_file'.includes('one-pager') || '$html_file'.includes('letterhead')) {
    await page.pdf({
      path: '$PROJECT_ROOT/$OUTPUT_DIR/${output_name}.pdf',
      width: '${width}px',
      height: '${height}px',
      printBackground: true
    });
  }

  await browser.close();
  console.log('Exported: ${output_name}');
})().catch(console.error);
" 2>/dev/null
}

# Export function using Chrome headless (fallback)
export_with_chrome() {
  local html_file="$1"
  local output_name="$2"

  if [[ "$html_file" == *"print"* ]] || [[ "$html_file" == *"one-pager"* ]] || [[ "$html_file" == *"letterhead"* ]]; then
    "$CHROME_BIN" --headless --disable-gpu --print-to-pdf="$PROJECT_ROOT/$OUTPUT_DIR/${output_name}.pdf" \
      --no-margins "file://$PROJECT_ROOT/$html_file" 2>/dev/null && \
      echo "Exported PDF: ${output_name}" || echo "Failed: ${output_name}"
  fi

  "$CHROME_BIN" --headless --disable-gpu \
    --screenshot="$PROJECT_ROOT/$OUTPUT_DIR/${output_name}.png" \
    "file://$PROJECT_ROOT/$html_file" 2>/dev/null && \
    echo "Exported PNG: ${output_name}" || echo "Failed: ${output_name}"
}

# Determine export method
EXPORT_METHOD=""
if node -e "require('puppeteer')" 2>/dev/null; then
  EXPORT_METHOD="puppeteer"
  echo "Using: Puppeteer (node_modules)"
elif check_puppeteer; then
  EXPORT_METHOD="npx-puppeteer"
  echo "Using: Puppeteer (npx)"
elif [[ -n "$CHROME_BIN" ]]; then
  EXPORT_METHOD="chrome"
  echo "Using: Chrome headless ($CHROME_BIN)"
else
  echo "WARNING: Neither Puppeteer nor Chrome found."
  echo "Please install one of:"
  echo "  npm install --save-dev puppeteer"
  echo "  brew install --cask google-chrome"
  echo ""
  echo "Manual export instructions in: docs/export-collateral-guide.md"
  exit 1
fi

# ─── Instagram Posts (1080x1080) ────────────────────────────────────────────
echo ""
echo "--- Instagram Posts ---"
for f in "$PROJECT_ROOT/$COLLATERAL_DIR/instagram/"*.html; do
  name=$(basename "$f" .html)
  echo "Processing: $name"
  if [[ "$EXPORT_METHOD" == "puppeteer" ]] || [[ "$EXPORT_METHOD" == "npx-puppeteer" ]]; then
    export_with_puppeteer "$COLLATERAL_DIR/instagram/$(basename "$f")" "$name" 1080 1080
  else
    export_with_chrome "$COLLATERAL_DIR/instagram/$(basename "$f")" "$name"
  fi
done

# ─── Instagram Stories (1080x1920) ──────────────────────────────────────────
echo ""
echo "--- Instagram Stories ---"
for f in "$PROJECT_ROOT/$COLLATERAL_DIR/stories/"*.html; do
  name=$(basename "$f" .html)
  echo "Processing: $name"
  if [[ "$EXPORT_METHOD" == "puppeteer" ]] || [[ "$EXPORT_METHOD" == "npx-puppeteer" ]]; then
    export_with_puppeteer "$COLLATERAL_DIR/stories/$(basename "$f")" "$name" 1080 1920
  else
    export_with_chrome "$COLLATERAL_DIR/stories/$(basename "$f")" "$name"
  fi
done

# ─── WhatsApp Cards (1080x1920) ─────────────────────────────────────────────
echo ""
echo "--- WhatsApp Programme Cards ---"
for f in "$PROJECT_ROOT/$COLLATERAL_DIR/whatsapp-cards/"*.html; do
  name=$(basename "$f" .html)
  echo "Processing: $name"
  if [[ "$EXPORT_METHOD" == "puppeteer" ]] || [[ "$EXPORT_METHOD" == "npx-puppeteer" ]]; then
    export_with_puppeteer "$COLLATERAL_DIR/whatsapp-cards/$(basename "$f")" "$name" 1080 1920
  else
    export_with_chrome "$COLLATERAL_DIR/whatsapp-cards/$(basename "$f")" "$name"
  fi
done

# ─── Print Collateral ────────────────────────────────────────────────────────
echo ""
echo "--- Print Collateral ---"
for f in "$PROJECT_ROOT/$COLLATERAL_DIR/print/"*.html; do
  name=$(basename "$f" .html)
  echo "Processing: $name"
  if [[ "$EXPORT_METHOD" == "puppeteer" ]] || [[ "$EXPORT_METHOD" == "npx-puppeteer" ]]; then
    # A4 = 794x1123px at 96dpi
    export_with_puppeteer "$COLLATERAL_DIR/print/$(basename "$f")" "$name" 794 1123
  else
    export_with_chrome "$COLLATERAL_DIR/print/$(basename "$f")" "$name"
  fi
done

echo ""
echo "=== Export complete ==="
echo "Files saved to: $PROJECT_ROOT/$OUTPUT_DIR/"
ls "$PROJECT_ROOT/$OUTPUT_DIR/"
