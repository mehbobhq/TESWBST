import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BrainCircuit,
  ClipboardCheck,
  FileStack,
  Radar,
  Route,
  ArrowRight as StepArrow,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Trucking Compliance Services | TruckEase Solutions',
  description:
    'The TruckEase Compliance Platform combines continuous monitoring, intelligent automation, and practical compliance expertise, with direct filing support when you need it.',
}

const platformServices = [
  {
    icon: Radar,
    title: 'Continuous Compliance Monitoring',
    body: 'Registrations, renewals, licensing requirements, and required filings, actively managed and tracked from one central system designed to keep your operation compliant and informed. This is the foundation, built exclusively for monthly clients.',
  },
  {
    icon: Route,
    title: 'Trip Compliance Support',
    body: 'Before dispatch, understand whether additional permits or regulatory requirements apply to a planned trip, helping reduce avoidable compliance issues.',
  },
  {
    icon: BrainCircuit,
    title: 'Operational Insights',
    body: 'Identify trends, recurring issues, and opportunities for improvement through intelligent monitoring that brings greater visibility to your compliance activities.',
  },
  {
    icon: ClipboardCheck,
    title: 'Decision Support',
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
    <div className="bg-white text-slate-900 min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-slate-50/50 py-16 lg:py-20 text-center border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-600 shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-600" />
            COMPLIANCE SERVICES
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-[1.15]">
            Compliance Solutions Built Around Your Business
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Managing regulatory requirements shouldn't distract you from running your fleet. TruckEase provides a unified compliance platform backed by direct hands-on support.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
              <Link href="/risk-screening">
                Request a Risk Screening <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
              <Link href="/platform">
                Explore the Platform
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Main Services Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                THE COMPLIANCE PLATFORM
              </span>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mt-2">
                One platform, working continuously.
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Combining continuous monitoring, intelligent automation, and practical compliance expertise to help you stay ahead of regulatory deadlines.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {platformServices.map((service, i) => (
              <Reveal key={service.title} delay={(i % 2) * 100}>
                <Card className="flex h-full flex-col border border-slate-200/80 bg-white p-7 rounded-xl shadow-sm hover:border-cyan-300 hover:shadow-md transition-all">
                  <div className="rounded-lg bg-cyan-50 p-3 text-cyan-600 w-fit mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Direct Filing Support Section */}
      <section className="bg-slate-50/50 py-16 lg:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Text Header Content */}
          <Reveal>
            <div className="max-w-3xl">
              <div className="rounded-lg bg-cyan-50 p-3 text-cyan-600 w-fit mb-4">
                <FileStack className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                DIRECT FILING SUPPORT
              </span>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mt-2">
                Specific filings, handled case by case.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                For clients already on the Compliance Platform, we also handle specific filings and registration updates directly: IRP, IFTA, entity changes, government portal updates, and similar work on a case-by-case basis.
              </p>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Turnaround times vary depending on the scope and urgency of the work. If you have a deadline, expected timelines are confirmed before engagement begins.
              </p>
            </div>
          </Reveal>

          {/* Horizontal Process Card */}
          <Reveal delay={120}>
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-8 text-center sm:text-left">
                Filing Workflow Step-by-Step
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-start relative">
                {filingSteps.map((step, i) => (
                  <div key={step} className="flex flex-col items-center text-center group relative">
                    {/* Badge */}
                    <div className="w-12 h-12 rounded-full bg-cyan-500 text-white font-extrabold text-sm flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform mb-4">
                      0{i + 1}
                    </div>

                    {/* Step Title */}
                    <span className="text-sm font-semibold text-slate-800 max-w-[140px] leading-snug">
                      {step}
                    </span>

                    {/* Connecting Arrow for desktop view */}
                    {i < filingSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-6 -right-3 -translate-y-1/2 translate-x-1/2 text-slate-300">
                        <StepArrow className="w-4 h-4" />
                      </div>
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
