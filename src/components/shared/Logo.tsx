'use client'

import Link from 'next/link'

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const textColor = variant === 'light' ? '#FAF7F0' : '#12442E'
  const subColor = variant === 'light' ? 'rgba(250,247,240,0.6)' : '#8A8A7A'
  const mountainFill = variant === 'light' ? '#FAF7F0' : '#12442E'
  const mountainAlt = variant === 'light' ? 'rgba(250,247,240,0.6)' : '#1D5C3F'

  const scales = { sm: 0.65, md: 1, lg: 1.35 }
  const scale = scales[size]

  return (
    <Link href="/" aria-label="Elide — Home">
      <svg
        viewBox="0 0 220 44"
        width={220 * scale}
        height={44 * scale}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        {/* Mountain valley icon */}
        <polygon points="4,36 14,10 24,36" fill={mountainFill} />
        <polygon points="16,36 24,16 32,36" fill={mountainAlt} opacity="0.8" />
        {/* Gold peak accents */}
        <polygon points="14,10 12,15 16,15" fill="#DAA521" />
        <polygon points="24,16 22,21 26,21" fill="#E8C04A" />
        {/* Valley path */}
        <path d="M14 36 Q19 31 24 36" stroke="#DAA521" strokeWidth="1" fill="none" strokeLinecap="round" />
        {/* Ground base */}
        <rect x="4" y="34.5" width="30" height="1.5" rx="0.75" fill={mountainFill} opacity="0.4" />
        {/* Separator */}
        <line x1="42" y1="8" x2="42" y2="36" stroke={subColor} strokeWidth="0.75" opacity="0.5" />
        {/* Wordmark */}
        <text
          x="50"
          y="25"
          fontFamily="'Robout', Georgia, serif"
          fontSize="22"
          fontWeight="600"
          letterSpacing="4"
          fill={textColor}
        >
          ELIDE
        </text>
        {/* Tagline */}
        <text
          x="51"
          y="36"
          fontFamily="'Poppins', Helvetica, Arial, sans-serif"
          fontSize="7"
          fontWeight="400"
          letterSpacing="2.5"
          fill={subColor}
        >
          PRIVATE EUROPEAN TOURS
        </text>
      </svg>
    </Link>
  )
}

/* Icon-only variant for favicon use */
export function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#12442E" />
      <polygon points="5,32 13,12 21,32" fill="#FAF7F0" opacity="0.95" />
      <polygon points="13,32 21,18 29,32" fill="#FAF7F0" opacity="0.65" />
      <polygon points="13,12 11,17 15,17" fill="#DAA521" />
      <polygon points="21,18 19,22 23,22" fill="#E8C04A" />
      <path d="M13 32 Q17 28 21 32" stroke="#DAA521" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  )
}
