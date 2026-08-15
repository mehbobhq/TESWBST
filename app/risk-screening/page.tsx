// app/risk-screening/page.tsx

import type { Metadata } from "next"
import Link from "next/link"
import { RiskScreeningForm } from "@/components/risk-screening-form"
import { Reveal } from "@/components/reveal"
import { Card } from "@/components/ui/card"
import { 
  ClipboardList, 
  Globe, 
  AlertTriangle, 
  MessagesSquare, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react"

export const metadata: Metadata = {
  title: "Free Risk Screening | TruckEase Solutions",
  description:
    "A quick screening surfaces the compliance signals most likely to need attention — so you can act on your timeline, not find out the hard way.",
}

const steps = [
  {
    icon: ClipboardList,
    title: "1. Review requested",
    body: "Complete a brief 5-question assessment to highlight key compliance signals, then provide your fleet details to start the review.",
  },
  {
    icon: Globe,
    title: "2. Public information reviewed",
    body: "We examine publicly available regulatory records, safety databases, and registration histories linked to your business.",
  },
  {
    icon: AlertTriangle,
    title: "3. Potential areas for attention identified",
    body: "We evaluate your records to surface quiet red flags, filing gaps, score movements, and operational inconsistencies.",
  },
  {
    icon: MessagesSquare,
    title: "4. Next steps discussed",
    body: "We share findings and walk you through what needs immediate attention, what can wait, and how to address potential risks.",
  },
]

const screeningScope = [
  "Public safety indicators that could attract additional regulatory attention",
  "Authority and registration issues that may interrupt operations",
  "Filing gaps and regulatory inconsistencies that deserve attention",
  "Canadian compliance indicators where applicable",
]

export default function RiskScreeningPage() {
  return (
    <div className="bg-[#f7f4ee] text-[#0c1a36] min-h-screen">
      {/* 1. Hardcoded Dark Navy Hero Section */}
      <section className="bg-[#0c1a36] text-white py-16 lg:py-20 text-center relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-[#16274a] px-3.5 py-1 text-xs font-mono font-semibold tracking-wider text-slate-300 shadow-sm mb-6 uppercase">
            NO COST, NO OBLIGATION
          </div>

          {/* Title */}
          <h1 className="text-4xl font-serif font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            See your compliance risk before it disrupts your operation.
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A quick screening surfaces the compliance signals most likely to need attention — so you can act on your timeline, not find out the hard way.
          </p>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="border-b border-[#e2ded3]" />

      {/* 2. How a screening works Section */}
      <section className="bg-[#fdfcf9] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#5b6472]">
                THE PROCESS
              </span>
              <h2 className="text-3xl font-serif font-medium text-[#0c1a36] sm:text-4xl mt-2">
                How a screening works
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <Card className="flex h-full flex-col justify-between border border-[#e2ded3] bg-[#f7f4ee] p-6 shadow-sm rounded-xl">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-lg bg-[#0c1a36] text-white">
                      <step.icon className="size-5" />
                    </div>
                    <h3 className="mt-4 font-serif font-semibold text-[#0c1a36] text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5b6472]">
                      {step.body}
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

      {/* 3. Form & Scope Section */}
      <section className="py-16 sm:py-24 bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            
            {/* Left Column: Context & Scope */}
            <Reveal className="lg:sticky lg:top-24 space-y-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#5b6472]">
                  START YOUR REVIEW
                </span>
                <h2 className="mt-2 text-3xl font-serif font-medium text-[#0c1a36] sm:text-4xl">
                  Tell us about your fleet
                </h2>
                <p className="mt-4 text-[#5b6472] leading-relaxed">
                  Answer 5 quick assessment questions followed by your basic fleet details to receive your customized findings.
                </p>
              </div>

              {/* What your risk screening looks for */}
              <Card className="border border-[#e2ded3] bg-[#fdfcf9] p-6 sm:p-8 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 text-[#0c1a36] mb-4">
                  <ShieldCheck className="size-6 text-[#e8720c] shrink-0" />
                  <h3 className="font-serif font-semibold text-lg">
                    What your risk screening looks for:
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {screeningScope.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#5b6472]">
                      <CheckCircle2 className="size-4 text-[#e8720c] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Compliance Disclaimer */}
              <p className="text-xs text-[#5b6472] leading-relaxed italic border-l-2 border-[#e2ded3] pl-4 py-1">
                Disclaimer: This screening reviews publicly available regulatory information only. It is not a guarantee of compliance, an official government rating, or legal advice.
              </p>
            </Reveal>

            {/* Right Column: Multi-screen Interactive Form Component */}
            <Reveal delay={100}>
              <div className="bg-[#fdfcf9] border border-[#e2ded3] rounded-2xl p-6 sm:p-8 shadow-sm">
                <RiskScreeningForm />
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  )
}
