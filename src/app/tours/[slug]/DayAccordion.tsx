'use client'

import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import { DayPlan } from '@/types/itinerary'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export default function DayAccordion({ days }: { days: DayPlan[] }) {
  const [openDay, setOpenDay] = useState<number | null>(0)

  return (
    <div className="border border-[#EDE8DE] rounded-xl overflow-hidden divide-y divide-[#EDE8DE]">
      {days.map((day, i) => {
        const isOpen = openDay === i
        return (
          <div key={i}>
            <button
              onClick={() => setOpenDay(isOpen ? null : i)}
              className="w-full flex items-center gap-4 px-5 py-4 bg-white hover:bg-[#FAF7F0] transition-colors text-left"
              aria-expanded={isOpen}
            >
              {/* Day number badge */}
              <span className="shrink-0 w-9 h-9 rounded-full bg-[#12442E] text-white flex items-center justify-center font-body text-sm font-semibold">
                {day.dayNumber}
              </span>
              <span className="flex-1 font-heading text-base font-semibold text-[#1A1A14]">
                {day.title}
              </span>
              {day.overnightCity && (
                <span className="hidden sm:flex items-center gap-1 text-xs text-[#8A8A7A] font-body shrink-0">
                  <MapPin size={11} />
                  {day.overnightCity}
                </span>
              )}
              <ChevronDown
                size={18}
                className={cn('shrink-0 text-[#8A8A7A] transition-transform duration-200', isOpen && 'rotate-180')}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-3 bg-[#FAF7F0]">
                    <p className="text-sm text-[#4A4A3C] font-body leading-relaxed mb-3">
                      {day.description}
                    </p>
                    {day.stops && day.stops.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {day.stops.map((stop, j) => (
                          <span key={j} className="badge badge-primary text-xs">
                            {stop}
                          </span>
                        ))}
                      </div>
                    )}
                    {day.distanceKm && (
                      <p className="text-xs text-[#8A8A7A] font-body mt-3">
                        ~{day.distanceKm} km driving
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
