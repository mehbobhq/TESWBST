import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Globe2, Lock, FileCheck, CheckCircle2 } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
              AI-Powered Compliance Platform
            </span>
            <h1 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl leading-[1.15] tracking-tight">
              Compliance Built for{' '}
              <span className="text-blue-600 block sm:inline">
                Operational Confidence.
              </span>
            </h1>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              TES helps trucking companies across the US and Canada stay ahead of renewals, 
              organize records, and reduce risk before it impacts your business.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md">
                <Link href="/risk-screening">
                  Request a Risk Screening &rarr;
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold">
                <Link href="/platform">
                  Explore the Platform
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-2 gap-4 pt-6 border-t border-slate-100 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
                <span>FMCSA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-blue-600" />
                <span>Canada &amp; US Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-blue-600" />
                <span>Secure &amp; Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-blue-600" />
                <span>Audit Ready</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="relative lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-2xl">
              
              {/* Truck Visual with Grounded Drop Shadow */}
              <div className="relative z-10 drop-shadow-[0_20px_25px_rgba(15,23,42,0.12)]">
                <Image
                  src="/hero-truck-light.png"
                  alt="TES Fleet Semi-Truck"
                  width={800}
                  height={450}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Floating UI Card Overlay 1 */}
              <div className="absolute -top-4 right-8 z-20 bg-white/95 backdrop-blur-sm border border-slate-200/80 p-3 rounded-xl shadow-lg flex items-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">Annual Inspection</div>
                  <div className="text-[10px] text-emerald-600 font-medium">Scheduled</div>
                </div>
              </div>

              {/* Floating UI Card Overlay 2 */}
              <div className="absolute top-20 right-0 z-20 bg-white/95 backdrop-blur-sm border border-slate-200/80 p-3.5 rounded-xl shadow-xl w-48">
                <div className="text-[10px] uppercase font-bold text-slate-400">Compliance Position</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">87.4%</div>
                <div className="text-[11px] font-semibold text-amber-600 mt-0.5">Moderate Risk</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
