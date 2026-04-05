import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  innerClassName?: string
  id?: string
  variant?: 'warm' | 'section' | 'dark' | 'primary' | 'white'
}

export default function SectionWrapper({
  children,
  className,
  innerClassName,
  id,
  variant = 'warm',
}: SectionWrapperProps) {
  const bgMap = {
    warm: 'bg-[#FAF7F0]',
    section: 'bg-[#F4EFE4]',
    dark: 'bg-[#0F2A1A]',
    primary: 'bg-[#12442E]',
    white: 'bg-white',
  }

  return (
    <section
      id={id}
      className={cn(
        'section-wrapper',
        bgMap[variant],
        className
      )}
    >
      <div className={cn('section-inner', innerClassName)}>
        {children}
      </div>
    </section>
  )
}
