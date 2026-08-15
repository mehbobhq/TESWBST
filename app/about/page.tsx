import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Compass,
  Eye,
  Globe2,
  Layers,
  ShieldCheck,
  Target,
  Truck,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'About Us | TruckEase Solutions',
  description:
    'Learn how TruckEase combines regulatory expertise with intelligent automation to bring clarity and operational confidence to commercial fleet compliance.',
}

const philosophyCards = [
  {
    icon: Compass,
    tag: 'THE INDUSTRY REALITY',
    text: 'The trucking industry operates in an environment where regulations keep evolving and documentation requirements keep growing, while running the actual business doesn\u2019t slow down to make room for either.',
  },
  {
    icon: Target,
    tag: 'OUR PURPOSE',
    text: 'Our role is to close that gap, not by adding more paperwork, but by building a system that tracks what matters continuously, so problems get caught early instead of discovered late.',
  },
  {
    icon: Layers,
    tag: 'THE APPROACH',
    text: 'We combine regulatory experience with automated monitoring built specifically for that job: organizing records, tracking renewals, and surfacing patterns that are difficult to catch through manual review alone.',
  },
  {
    icon: Eye,
    tag: 'OUR VALUE',
    text: 'We\u2019re not simply here to complete filings. We\u2019re here to help businesses maintain a continuously updated understanding of their compliance position, providing greater visibility before issues become operational challenges.',
  },
]

const valuesList = [
  {
    name: 'Integrity',
    desc: 'Uncompromised honesty and ethics in every audit, filing, and customer interaction.',
  },
  {
    name: 'Accuracy',
    desc: 'Precision-first compliance tracking where details and deadlines matter most.',
  },
  {
    name: 'Accountability',
    desc: 'Taking true ownership of our platform insights and client workflows.',
  },
  {
    name: 'Continuous Improvement',
    desc: 'Constant platform evolution to keep pace with shifting regulations.',
  },
  {
    name: 'Customer Partnership',
    desc: 'Building long-term success alongside fleet owners and operators.',
  },
  {
    name: 'Professional Excellence',
    desc: 'Delivering industry-grade rigor and dependable support at scale.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-[#f7f4ee] text-[#0c1a36] min-h-screen font-sans">
      {/* 1. Hero Section */}
      <section className="bg-[#0c1a36] text-white py-16 lg:py-24 text-center relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-[#16274a] px-3.5 py-1 text-xs font-mono tracking-wider text-slate-300 shadow-sm mb-6 uppercase">
            ABOUT TRUCKEASE
          </div>

          <h1 className="text-4xl font-serif font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            Bringing Clarity and Confidence to Commercial Compliance
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Built for United States and Canadian commercial fleets seeking continuous operational visibility and hassle-free regulatory management.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#e8720c] hover:bg-[#d6670a] text-white font-semibold px-6 py-3 rounded-lg w-full sm:w-auto shadow-sm"
            >
              <Link href="/risk-screening">
                Request a Risk Screening <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border border-slate-500/80 text-white hover:bg-slate-800/80 hover:text-white hover:border-slate-400 font-semibold px-6 py-3 rounded-lg w-full sm:w-auto transition-colors"
            >
              <Link href="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="border-b border-[#e2ded3]" />

      {/* 2. Our Mission & Vision Section */}
      <section className="bg-[#f7f4ee] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Mission Card */}
              <Card className="flex flex-col justify-between border border-[#e2ded3] bg-[#fdfcf9] p-8 sm:p-10 rounded-2xl shadow-sm">
                <div className="space-y-4">
                  <div className="rounded-xl bg-[#0c1a36] text-white size-12 flex items-center justify-center">
                    <Target className="size-6" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#5b6472]">
                    OUR MISSION
                  </span>
                  <p className="text-[#0c1a36] font-serif text-lg sm:text-xl font-medium leading-relaxed pt-1">
                    To help trucking businesses operate with confidence through continuously-tracked compliance, smart automation, and practical support when you need a person, not just a system.
                  </p>
                </div>
                <div className="mt-8 border-t border-[#e2ded3] pt-4 flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#5b6472]">
                  <Users className="size-4 text-[#e8720c]" />
                  Human-In-The-Loop Technology
                </div>
              </Card>

              {/* Vision Card */}
              <Card className="flex flex-col justify-between border border-[#e2ded3] bg-[#fdfcf9] p-8 sm:p-10 rounded-2xl shadow-sm">
                <div className="space-y-4">
                  <div className="rounded-xl bg-[#0c1a36] text-white size-12 flex items-center justify-center">
                    <Compass className="size-6" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#5b6472]">
                    OUR VISION
                  </span>
                  <p className="text-[#0c1a36] font-serif text-lg sm:text-xl font-medium leading-relaxed pt-1">
                    To become the trusted compliance platform for trucking companies across North America, where regulatory expertise and real technology work together, not one standing in for the other.
                  </p>
                </div>
                <div className="mt-8 border-t border-[#e2ded3] pt-4 flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#5b6472]">
                  <Truck className="size-4 text-[#e8720c]" />
                  North American Fleet Standard
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="border-b border-[#e2ded3]" />

      {/* 3. Core Philosophy Section */}
      <section className="bg-[#fdfcf9] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#5b6472]">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-3xl font-serif font-medium text-[#0c1a36] sm:text-4xl mt-2">
                Why We Build for Operational Confidence
              </h2>
            </div>
          </Reveal>

          {/* 4 Quadrant Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {philosophyCards.map((card, i) => (
              <Reveal key={card.tag} delay={i * 90}>
                <Card className="flex h-full flex-col justify-between border border-[#e2ded3] bg-[#f7f4ee] p-8 rounded-xl shadow-sm hover:border-slate-300 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="rounded-lg bg-[#0c1a36] p-3 text-white">
                        <card.icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-[#5b6472] uppercase">
                        {card.tag}
                      </span>
                    </div>
                    <p className="text-base text-[#5b6472] leading-relaxed font-normal">
                      {card.text}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Callout Banner */}
          <Reveal delay={200}>
            <div className="mt-8 rounded-2xl border border-[#e2ded3] bg-[#f7f4ee] p-8 sm:p-10 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0c1a36] text-white mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="text-lg sm:text-xl font-serif font-medium text-[#0c1a36] max-w-3xl mx-auto leading-relaxed">
                &ldquo;Because when compliance is visible instead of reactive, businesses spend less time worrying about paperwork and more time running the business.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="border-b border-[#e2ded3]" />

      {/* 4. Our Values Section */}
      <section className="bg-[#f7f4ee] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e2ded3] bg-[#fdfcf9] px-3.5 py-1 text-xs font-mono font-semibold text-[#5b6472] shadow-sm mb-3">
                <Award className="size-3.5 text-[#e8720c]" />
                GUIDED PRINCIPLES
              </div>
              <h2 className="text-3xl font-serif font-medium text-[#0c1a36] sm:text-4xl">
                Our Values
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valuesList.map((val, i) => (
              <Reveal key={val.name} delay={i * 60}>
                <Card className="h-full border border-[#e2ded3] bg-[#fdfcf9] p-6 shadow-sm hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-2.5 text-[#0c1a36] font-serif font-semibold text-base">
                    <CheckCircle2 className="size-4 text-[#e8720c] shrink-0" />
                    {val.name}
                  </div>
                  <p className="text-xs sm:text-sm text-[#5b6472] leading-relaxed pl-6 mt-2">
                    {val.desc}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="border-b border-[#e2ded3]" />

      {/* 5. Where We Operate Callout Section */}
      <section className="bg-[#fdfcf9] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-[#e2ded3] bg-[#0c1a36] text-white p-8 sm:p-12 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-[#16274a] px-3.5 py-1 text-xs font-mono font-semibold text-slate-300 uppercase">
                  <Globe2 className="size-3.5" />
                  REGIONAL SCOPE
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-white tracking-tight">
                  Where We Operate
                </h2>
                <p className="text-slate-200 text-lg font-medium">
                  United States and Canada.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Providing cross-border regulatory tracking, state/provincial filings, and fleet risk screening across all major jurisdictions.
                </p>
              </div>

              <div className="shrink-0">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#e8720c] hover:bg-[#d6670a] text-white font-semibold px-6 py-3 rounded-lg shadow-sm"
                >
                  <Link href="/risk-screening">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="border-b border-[#e2ded3]" />

      {/* 6. Core Commitments */}
      <section className="bg-[#f7f4ee] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#5b6472]">
                WHAT DRIVES US
              </span>
              <h2 className="text-3xl font-serif font-medium text-[#0c1a36] sm:text-4xl mt-2">
                Built to solve real compliance friction.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5b6472]">
                We design tools and workflows specifically around commercial transportation regulations across US and Canadian jurisdictions.
              </p>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-2">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-[#e2ded3] bg-[#fdfcf9] p-6 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-[#e8720c] mb-3" />
                  <h3 className="font-serif font-semibold text-[#0c1a36]">Continuous Oversight</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5b6472] leading-relaxed">
                    Moving away from last-minute annual scrambles toward calm, automated tracking.
                  </p>
                </div>
                <div className="rounded-xl border border-[#e2ded3] bg-[#fdfcf9] p-6 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-[#e8720c] mb-3" />
                  <h3 className="font-serif font-semibold text-[#0c1a36]">Cross-Border Scope</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5b6472] leading-relaxed">
                    Designed from the ground up for fleets traversing state and provincial borders.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <CtaBand />
    </div>
  )
}
