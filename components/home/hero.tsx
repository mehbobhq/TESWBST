import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0c1a36] text-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Text Content */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-[#16274a] px-3.5 py-1 text-xs font-mono font-semibold tracking-wider text-slate-300 shadow-sm mb-6 uppercase">
              AI-Powered Compliance Platform
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl font-serif font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Compliance Built for{' '}
              <span className="!text-cyan-400 font-semibold" style={{ color: '#22d3ee' }}>
                Operational Confidence.
              </span>
            </h1>

            {/* Thesis Line */}
            <p className="mt-4 text-base sm:text-lg font-mono font-semibold text-[#e8720c]">
              Compliance isn't the goal. Operational confidence is.
            </p>

            {/* Body */}
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              A compliance platform that combines regulatory expertise with AI-powered
              technology to help trucking companies across the United States and Canada
              understand their compliance position, stay ahead of regulatory requirements,
              and operate with greater confidence.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Primary CTA */}
              <Button asChild size="lg" className="bg-[#e8720c] hover:bg-[#d6670a] text-white font-semibold rounded-lg shadow-sm">
                <Link href="/risk-screening">
                  Request a Risk Screening
                </Link>
              </Button>

              {/* Secondary CTA (Ghost/Outline) */}
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:border-white/50 hover:bg-white/5 font-semibold rounded-lg">
                <Link href="/platform">
                  Explore the Platform
                </Link>
              </Button>
            </div>
          </div>

          {/* Truck Visual Container */}
          <div className="relative lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-xl transition-all duration-300 hover:scale-[1.02]">
              <Image
                src="/hero-truck.png"
                alt="TruckEase Commercial Fleet Tractor and Trailer"
                width={800}
                height={500}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>

        {/* Checkpoint Line Motif */}
        <div className="mt-16 pt-8 border-t border-slate-800 relative">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e8720c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e8720c]"></span>
              </span>
              <span>LIVE CHECKPOINT TRACKING</span>
            </div>
            <div className="hidden sm:flex items-center gap-8 text-slate-500">
              <span>US &amp; CANADA COVERAGE</span>
              <span>AUTOMATED AUDIT TRAIL</span>
              <span>REAL-TIME COMPLIANCE SIGNALS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
