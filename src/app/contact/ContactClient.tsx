'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Send, Clock, CheckCircle } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ScrollReveal from '@/components/animations/ScrollReveal'
import WhatsAppButton from '@/components/forms/WhatsAppButton'

const GROUP_SIZES = ['Just 2 of us', '3–4 people', '5–7 people', '8–12 people', '13–16 people', 'Not sure yet']
const DESTINATIONS = ['Switzerland', 'France', 'Italy', 'Austria & Germany', 'Multi-country', 'Not sure — help me decide']
const TRAVEL_STYLES = ['Slow & Experiential', 'Grand Tour', 'Countryside & Nature', 'City Explorer', 'Not sure — help me decide']

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    phoneCode: '+91',
    groupSize: '',
    dates: '',
    destinations: [] as string[],
    message: '',
    travelStyle: '',
    whatsapp: true,
  })

  function toggleDestination(d: string) {
    setForm((f) => ({
      ...f,
      destinations: f.destinations.includes(d)
        ? f.destinations.filter((x) => x !== d)
        : [...f.destinations, d],
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-[#12442E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="section-label text-[#E8C04A] mb-3 block">Get in touch</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white mb-4">
              Let&apos;s plan your trip
            </h1>
            <p className="text-white/70 font-body text-lg max-w-xl leading-relaxed">
              Tell us about your family and when you&apos;re thinking of traveling. We&apos;ll design your journey from there.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionWrapper variant="warm">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Left: Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              {submitted ? (
                <div className="bg-white rounded-2xl border border-[#EDE8DE] p-10 text-center">
                  <div className="w-14 h-14 bg-[#2D7A4F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-[#2D7A4F]" />
                  </div>
                  <h2 className="font-heading text-2xl font-semibold text-[#1A1A14] mb-2">
                    Message received!
                  </h2>
                  <p className="text-[#4A4A3C] font-body mb-6">
                    We&apos;ll get back to you within 2 hours. In the meantime, feel free to WhatsApp us directly for a faster response.
                  </p>
                  <WhatsAppButton
                    message="Hi, I just sent an enquiry. Looking forward to planning my trip!"
                    label="Follow up on WhatsApp"
                  />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#EDE8DE] p-6 sm:p-8 space-y-5">
                  <h2 className="font-heading text-2xl font-semibold text-[#1A1A14]">
                    Send an enquiry
                  </h2>

                  <div>
                    <label className="form-label">Your name *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">WhatsApp / mobile number *</label>
                    <div className="flex gap-2">
                      <select
                        className="form-input w-28 shrink-0"
                        value={form.phoneCode}
                        onChange={(e) => setForm({ ...form, phoneCode: e.target.value })}
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+974">🇶🇦 +974</option>
                        <option value="+965">🇰🇼 +965</option>
                        <option value="+966">🇸🇦 +966</option>
                        <option value="+973">🇧🇭 +973</option>
                        <option value="+968">🇴🇲 +968</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+61">🇦🇺 +61</option>
                      </select>
                      <input
                        type="tel"
                        required
                        className="form-input flex-1"
                        placeholder="9876543210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Group size</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {GROUP_SIZES.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setForm({ ...form, groupSize: size })}
                          className={`px-3 py-1.5 rounded-md text-sm font-body font-medium border transition-all ${
                            form.groupSize === size
                              ? 'bg-[#12442E] text-white border-[#12442E]'
                              : 'border-[#DDD8CC] text-[#4A4A3C] hover:border-[#12442E] hover:text-[#12442E]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Preferred travel dates / month</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. October 2026, or flexible"
                      value={form.dates}
                      onChange={(e) => setForm({ ...form, dates: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">Destinations interested in</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {DESTINATIONS.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => toggleDestination(d)}
                          className={`px-3 py-1.5 rounded-md text-sm font-body font-medium border transition-all ${
                            form.destinations.includes(d)
                              ? 'bg-[#DAA521] text-[#1A1A14] border-[#DAA521]'
                              : 'border-[#DDD8CC] text-[#4A4A3C] hover:border-[#DAA521] hover:text-[#1A1A14]'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Travel style (optional)</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {TRAVEL_STYLES.map((style) => (
                        <button
                          key={style}
                          type="button"
                          onClick={() => setForm({ ...form, travelStyle: style })}
                          className={`px-3 py-1.5 rounded-md text-sm font-body font-medium border transition-all ${
                            form.travelStyle === style
                              ? 'bg-[#12442E] text-white border-[#12442E]'
                              : 'border-[#DDD8CC] text-[#4A4A3C] hover:border-[#12442E] hover:text-[#12442E]'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Anything else we should know? (optional)</label>
                    <textarea
                      className="form-input min-h-[90px] resize-none"
                      placeholder="Special occasions, dietary requirements, accessibility needs, must-see places..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.checked })}
                      className="mt-0.5 accent-[#12442E] w-4 h-4"
                    />
                    <span className="text-sm text-[#4A4A3C] font-body">
                      Prefer to continue this conversation on WhatsApp (recommended — faster responses)
                    </span>
                  </label>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={16} />
                    Send enquiry
                  </button>

                  <p className="text-center text-xs text-[#8A8A7A] font-body">
                    We respond within 2 hours during business hours · No spam, ever
                  </p>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* Right: sidebar */}
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal direction="right">
              <div className="bg-[#12442E] rounded-2xl p-6 text-white">
                <p className="text-xs font-body font-medium uppercase tracking-[0.1em] text-white/50 mb-3">
                  Fastest response
                </p>
                <h3 className="font-heading text-2xl font-semibold mb-2">
                  WhatsApp us directly
                </h3>
                <p className="text-white/70 font-body text-sm leading-relaxed mb-5">
                  Start a conversation now. We respond within 2 hours. Send us your travel dates and we&apos;ll start designing your trip.
                </p>
                <WhatsAppButton
                  message="Hi, I'd like to plan a private European tour. Can we talk about dates and itinerary?"
                  label="Open WhatsApp chat"
                  variant="large"
                />
                <div className="flex items-center gap-2 mt-4">
                  <Clock size={13} className="text-white/40" />
                  <span className="text-xs text-white/40 font-body">Response within 2 hours · CET / IST business hours</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-[#F4EFE4] rounded-xl p-5">
                <h4 className="font-heading text-base font-semibold text-[#1A1A14] mb-3">What to expect</h4>
                <ul className="space-y-2.5">
                  {[
                    "We'll confirm receipt within 2 hours",
                    'A team member will reach out via WhatsApp or email',
                    "We'll ask a few questions to understand your trip",
                    "You'll receive a custom itinerary draft within 24–48 hours",
                    'No commitment, no pressure — just a conversation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#4A4A3C] font-body">
                      <span className="text-[#12442E] font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-white rounded-xl p-5 border border-[#EDE8DE]">
                <p className="text-xs font-body font-medium uppercase tracking-[0.1em] text-[#8A8A7A] mb-2">Email</p>
                <a href="mailto:hello@elide.com" className="font-body text-[#12442E] font-medium hover:text-[#DAA521] transition-colors">
                  hello@elide.com
                </a>
                <p className="text-xs text-[#8A8A7A] font-body mt-1">For formal enquiries and documents</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white rounded-xl p-5 border border-[#EDE8DE] flex items-center gap-4">
                <div className="text-center flex-shrink-0">
                  <div className="text-lg font-heading font-bold text-[#12442E]">IATA</div>
                  <div className="text-xs font-body font-medium text-[#12442E]">TIDS</div>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-[#1A1A14]">IATA TIDS Certified</p>
                  <p className="text-xs text-[#8A8A7A] font-body mt-0.5">Recognised travel industry credentials</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </SectionWrapper>
    </>
  )
}
