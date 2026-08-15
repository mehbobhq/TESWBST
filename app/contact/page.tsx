// app/contact/page.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Clock, MapPin, ShieldCheck, Check, Send } from 'lucide-react'

const inquiryTopics = [
  'New Authority Setup',
  'Driver Qualification Files',
  'Hours of Service Compliance',
  'Vehicle Maintenance Records',
  'Permits & Registrations',
  'Renewal',
  'Highway Use Tax Filing',
  'CSA/BASIC Scores',
  'Drug & Alcohol Program Review',
  'Other / Custom Request',
]

const reasonOptions = [
  'General question',
  'Risk Screening follow-up',
  'Direct Filing Support inquiry',
  'Platform / pricing question',
  'Other',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-[#f7f4ee] min-h-screen text-[#0c1a36]">
      {/* 1. HERO SECTION (Dark Navy Theme) */}
      <section className="bg-[#0c1a36] text-white py-16 lg:py-20 text-center relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-4 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-slate-200">Contact</span>
          </nav>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-[#16274a] px-3.5 py-1 text-xs font-mono font-semibold tracking-wider text-slate-300 shadow-sm mb-6 uppercase">
            Human Support & Compliance Inquiries
          </div>

          {/* Title */}
          <h1 className="text-4xl font-serif font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            Talk to Us
          </h1>

          {/* Body */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a question about compliance, the platform, or something specific to your operation? Send us a message and we'll get back to you.
          </p>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="w-full border-t border-[#e2ded3]" />

      {/* 2. CONTENT SECTION */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            
            {/* Left Column: Direct Channels & Scope */}
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-24">
              <div className="bg-[#fdfcf9] rounded-2xl p-8 border border-[#e2ded3] shadow-sm space-y-8">
                <div>
                  <h2 className="text-xl font-serif font-semibold text-[#0c1a36] tracking-tight">
                    Direct Channels
                  </h2>
                </div>

                <div className="space-y-7">
                  {/* Email Info */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#0c1a36] p-2.5 text-white shrink-0">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#0c1a36]">Email Contact</h3>
                      <p className="text-xs text-[#5b6472] mt-0.5">General &amp; Support Inquiries</p>
                      <a
                        href="mailto:contact@truckease.co"
                        className="mt-1 inline-block text-sm font-medium text-[#e8720c] hover:underline"
                      >
                        contact@truckease.co
                      </a>
                    </div>
                  </div>

                  {/* Desk Hours */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#0c1a36] p-2.5 text-white shrink-0">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#0c1a36]">Human Review Hours</h3>
                      <p className="text-xs text-[#5b6472] mt-0.5">Monday – Friday, 8:00 AM – 6:00 PM EST</p>
                    </div>
                  </div>

                  {/* Coverage */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#0c1a36] p-2.5 text-white shrink-0">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#0c1a36]">Regional Operations</h3>
                      <p className="text-xs text-[#5b6472] mt-0.5 leading-relaxed">
                        Serving commercial fleets across the United States and Canada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scope Statement (Navy Panel) */}
              <div className="bg-[#0c1a36] text-white rounded-2xl p-8 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-[#e8720c] font-mono font-semibold text-xs tracking-wider uppercase">
                  <ShieldCheck className="size-4 shrink-0" />
                  Operational Confidence
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  TruckEase Solutions Inc. provides independent compliance software and administrative workflow support for commercial trucking operations.
                </p>
              </div>
            </div>

            {/* Right Column: Form Card */}
            <div className="lg:col-span-7 bg-[#fdfcf9] rounded-2xl p-8 sm:p-10 border border-[#e2ded3] shadow-sm">
              <div className="space-y-2 pb-6 border-b border-[#e2ded3] mb-8">
                <h2 className="text-2xl font-serif font-semibold text-[#0c1a36] tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-sm text-[#5b6472]">
                  Fill out the form below and our team will get back to you during desk review hours.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-xl border border-emerald-300 bg-emerald-50/50 p-8 text-center space-y-4">
                  <div className="mx-auto size-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Check className="size-6 stroke-[3]" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-emerald-950">Thank you for reaching out!</h3>
                  <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Your message has been received. Our support desk will review your inquiry and respond during human review hours.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name & Email Grid */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="full-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0c1a36]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        required
                        className="w-full rounded-lg border border-[#e2ded3] bg-white px-4 py-3 text-sm text-[#0c1a36] focus:border-[#0c1a36] focus:outline-none focus:ring-1 focus:ring-[#0c1a36] transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0c1a36]">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-[#e2ded3] bg-white px-4 py-3 text-sm text-[#0c1a36] focus:border-[#0c1a36] focus:outline-none focus:ring-1 focus:ring-[#0c1a36] transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Company & Identifiers Grid */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="company-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0c1a36]">
                        Company Name <span className="font-normal text-[#5b6472] lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company-name"
                        name="company-name"
                        className="w-full rounded-lg border border-[#e2ded3] bg-white px-4 py-3 text-sm text-[#0c1a36] focus:border-[#0c1a36] focus:outline-none focus:ring-1 focus:ring-[#0c1a36] transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="dot-number" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0c1a36]">
                        USDOT / MC / NSC / CVOR <span className="font-normal text-[#5b6472] lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="dot-number"
                        name="dot-number"
                        className="w-full rounded-lg border border-[#e2ded3] bg-white px-4 py-3 text-sm text-[#0c1a36] focus:border-[#0c1a36] focus:outline-none focus:ring-1 focus:ring-[#0c1a36] transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Reason for Contact Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="reason" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0c1a36]">
                      Reason for Contact *
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-[#e2ded3] bg-white px-4 py-3 text-sm text-[#0c1a36] focus:border-[#0c1a36] focus:outline-none focus:ring-1 focus:ring-[#0c1a36] transition-all font-medium"
                    >
                      <option value="" disabled>Select a reason...</option>
                      {reasonOptions.map((reason) => (
                        <option key={reason} value={reason}>{reason}</option>
                      ))}
                    </select>
                  </div>

                  {/* Topic Checkboxes */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0c1a36]">
                      What's this about, more specifically?{' '}
                      <span className="font-normal text-[#5b6472] lowercase">(optional)</span>
                    </label>
                    
                    <div className="flex flex-wrap gap-2 pt-1">
                      {inquiryTopics.map((topic) => {
                        const isChecked = selectedTopics.includes(topic)
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => toggleTopic(topic)}
                            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                              isChecked
                                ? 'bg-[#0c1a36] text-white shadow-sm'
                                : 'bg-white text-[#5b6472] hover:bg-[#f7f4ee] border border-[#e2ded3]'
                            }`}
                          >
                            {isChecked && <Check className="size-3.5 stroke-[3]" />}
                            <span>{topic}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Driving Today Textarea */}
                  <div className="space-y-2 pt-2">
                    <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0c1a36]">
                      What's driving this today? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-lg border border-[#e2ded3] bg-white px-4 py-3 text-sm text-[#0c1a36] focus:border-[#0c1a36] focus:outline-none focus:ring-1 focus:ring-[#0c1a36] transition-all font-medium resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#e8720c] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#d6670a] focus:outline-none active:scale-[0.99]"
                    >
                      <Send className="size-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
