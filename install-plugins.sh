#!/usr/bin/env bash
# ── Marketplace Plugin Installation ──
# Run this INSIDE Claude Code: /bash ./install-plugins.sh
# Or copy-paste the commands into Claude Code one at a time.

echo "Installing marketplace plugins..."

# ── Marketplace 1: jezweb/claude-skills ──
# Best for: Frontend, Tailwind v4, shadcn, design review, color palette, favicon
echo "Adding jezweb/claude-skills marketplace..."
claude plugin marketplace add jezweb/claude-skills 2>/dev/null || true

echo "Installing frontend plugin (tailwind, shadcn, landing-page, design-review, design-system)..."
claude plugin install frontend@jezweb-skills 2>/dev/null || true

echo "Installing design-assets plugin (color-palette, favicon-gen, icon-set, image-processing)..."
claude plugin install design-assets@jezweb-skills 2>/dev/null || true

echo "Installing writing plugin (content, copywriting)..."
claude plugin install writing@jezweb-skills 2>/dev/null || true

# ── Marketplace 2: giuseppe-trisciuoglio/developer-kit ──
# Best for: Next.js App Router, React patterns, TypeScript
echo ""
echo "Adding developer-kit marketplace..."
claude plugin marketplace add giuseppe-trisciuoglio/developer-kit 2>/dev/null || true

echo "Installing Next.js skills..."
claude plugin install nextjs-app-router@developer-kit 2>/dev/null || true
claude plugin install react-patterns@developer-kit 2>/dev/null || true

# ── Marketplace 3: mrgoonie/claudekit-skills (ClaudeKit) ──
# Best for: Frontend design, UI styling, context engineering
echo ""
echo "Adding ClaudeKit marketplace..."
claude plugin marketplace add mrgoonie/claudekit-skills 2>/dev/null || true

echo "Installing web-dev-tools..."
claude plugin install web-dev-tools@claudekit-skills 2>/dev/null || true

# ── Marketplace 4: secondsky/claude-skills ──
# Fallback for tailwind-v4-shadcn if jezweb versions fail
# echo "claude plugin marketplace add secondsky/claude-skills"
# echo "claude plugin install tailwind-v4-shadcn@claude-skills"

echo ""
echo "✅ Plugin installation complete!"
echo "Run /reload-plugins in Claude Code to activate."
