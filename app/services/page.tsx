import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BrainCircuit,
  ClipboardCheck,
  FileStack,
  Radar,
  Route,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Compliance Services | TruckEase',
  description:
    "Managing regulatory requirements shouldn't distract you from running your business. TruckEase provides a unified compliance platform backed by direct, hands-on support.",
}

const platformServices = [
  {
    icon: Radar,
    title: 'Continuous Compliance Monitoring',
    tag: 'PAID, MONTHLY',
    body: 'Registrations, renewals, licensing requirements, and required filings, actively managed and tracked from one central system, including ongoing IRP and IFTA renewal cycles. This is the foundation, built exclusively for monthly clients.',
  },
  {
    icon: Route,
    title: 'Trip Compliance Support',
    tag: 'INCLUDED FREE WITH CONTINUOUS COMPLIANCE MONITORING',
    body: 'Before dispatch, understand whether additional permits or regulatory requirements may apply to a planned trip, helping reduce avoidable compliance issues.',
  },
  {
    icon: BrainCircuit,
    title: 'Operational Insights',
    tag: 'PLATFORM EXCLUSIVE',
    body: 'Recurring issues across drivers and vehicles, the kind that are easy to miss one record at a time, surfaced through intelligent monitoring that brings greater visibility to your compliance activities.',
  },
  {
    icon: ClipboardCheck,
    title: 'Decision Support',
    tag: 'PLATFORM EXCLUSIVE',
    body: 'Your compliance data is evaluated against a growing framework of regulatory checks and operational rules, built on real compliance expertise, to provide practical guidance for what to do next. Not just another report to review.',
  },
]

const filingSteps = [
  'Submit request',
  'Scope reviewed',
  'Timeline confirmed',
  'Filing or update completed',
  'Documentation organized',
]

export default function ServicesPage() {
  return (
    <div className="bg-[#f7f4ee] text-[#0c1a36] min-h-screen font-sans">
      {/* 1. Hero Section */}
      <section className="bg-[#0c1a36] text-white py-16 lg:py-24 text-center relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-[#16274a] px-3.5 py-1 text-xs font-mono tracking-wider text-slate-300 shadow-sm mb-6 uppercase">
            COMPLIANCE SERVICES
          </div>

          <h1 className="text-4xl font-serif font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            Compliance Solutions Built Around Your Business
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Managing regulatory requirements shouldn't distract you from running your business. TruckEase provides a unified compliance platform backed by direct, hands-on support.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-[#e8720c] hover:bg-[#d6670a] text-white font-semibold px-6 py-3 rounded-lg w-full sm:w-auto">
              <Link href="/risk-screening">
                Request a Risk Screening <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-200 hover:bg-slate-800/60 hover:text-white px-6 py-3 rounded-lg w-full sm:w-auto">
              <Link href="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="border-b border-[#e2ded3]" />

      {/* 2. Main Services Grid */}
      <section className="bg-[#f7f4ee] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#5b6472]">
                THE COMPLIANCE PLATFORM
              </span>
              <h2 className="text-3xl font-serif font-medium text-[#0c1a36] sm:text-4xl mt-2">
                One platform, working continuously.
              </h2>
              <p className="mt-4 text-[#5b6472] text-sm sm:text-base leading-relaxed">
                Combining continuous monitoring, intelligent automation, and practical compliance expertise to help you stay ahead of regulatory deadlines.
              </p>
              <p className="mt-4 text-xs sm:text-sm text-[#5b6472] leading-relaxed italic bg-[#e2ded3]/40 p-4 rounded-lg border border-[#e2ded3] max-w-2xl mx-auto text-left sm:text-center">
                Operational Insights and Decision Support are available only to clients on the ongoing platform, not as a per-service offering — both depend on continuously-tracked data that only builds up over time, so there's nothing for either to work from without an active subscription already in place.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {platformServices.map((service, i) => (
              <Reveal key={service.title} delay={(i % 2) * 100}>
                <Card className="flex h-full flex-col justify-between border border-[#e2ded3] bg-[#fdfcf9] p-8 rounded-xl shadow-sm hover:border-slate-300 transition-all">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                      <div className="rounded-lg bg-[#0c1a36] p-3 text-white w-fit">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <span className="inline-block text-[10px] font-mono font-bold tracking-wider uppercase bg-slate-100 text-[#0c1a36] px-2.5 py-1 rounded border border-[#e2ded3] w-fit">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-semibold text-[#0c1a36]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                      {service.body}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="border-b border-[#e2ded3]" />

      {/* 3. Direct Filing Support Section */}
      <section className="bg-[#fdfcf9] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal>
            <div className="max-w-3xl">
              <div className="rounded-lg bg-[#0c1a36] p-3 text-white w-fit mb-4">
                <FileStack className="h-6 w-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#5b6472]">
                DIRECT FILING SUPPORT
              </span>
              <h2 className="text-3xl font-serif font-medium text-[#0c1a36] sm:text-4xl mt-2">
                Specific filings, handled case by case.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5b6472]">
                For clients already on the Compliance Platform, we also handle filings and registration work that falls outside your regular renewal cycle: entity changes, government portal updates, one-off amendments, and similar work, case by case.
              </p>
              <p className="mt-3 text-sm text-[#5b6472]/80 leading-relaxed">
                Turnaround times vary depending on the scope and urgency of the work. If you have a deadline, we'll confirm expected timelines before the engagement begins.
              </p>
            </div>
          </Reveal>

          {/* Numbered Process Connector Motif */}
          <Reveal delay={120}>
            <div className="bg-[#f7f4ee] rounded-xl border border-[#e2ded3] p-8 sm:p-12">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#5b6472] mb-10 text-center sm:text-left">
                Filing Workflow
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-start relative">
                {filingSteps.map((step, i) => (
                  <div key={step} className="flex flex-col items-center text-center relative group">
                    {/* Circle Number */}
                    <div className="w-10 h-10 rounded-full bg-[#e8720c] text-white font-mono font-bold text-sm flex items-center justify-center mb-4 z-10 shadow-sm">
                      {i + 1}
                    </div>

                    {/* Step Title */}
                    <span className="text-sm font-medium text-[#0c1a36] max-w-[140px] leading-snug">
                      {step}
                    </span>

                    {/* Desktop Connector Line */}
                    {i < filingSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-5 left-[calc(50%+20px)] right-[calc(-50%+20px)] h-[1px] bg-[#e2ded3]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. CTA Section */}
      <CtaBand />
    </div>
  )
}
