'use client'

import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

// Doubled from original sizes as per Part 3B instructions
const widths = { sm: 200, md: 260, lg: 320 }
const heights = { sm: 52, md: 68, lg: 84 }

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const w = widths[size]
  const h = heights[size]

  return (
    <Link href="/" aria-label="Elide — Home" className="block shrink-0">
      <Image
        src="/logos/elide-main.png"
        alt="Elide — Private European Tours"
        width={w}
        height={h}
        priority
        style={{
          height: h,
          width: 'auto',
          filter: variant === 'light'
            ? 'brightness(0) invert(1)'
            : 'none',
        }}
      />
    </Link>
  )
}

export function LogoIcon({ size = 40, variant = 'dark' }: { size?: number; variant?: 'dark' | 'light' }) {
  return (
    <Image
      src="/logos/elide-icon.png"
      alt="Elide"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        filter: variant === 'light' ? 'brightness(0) invert(1)' : 'none',
      }}
    />
  )
}
