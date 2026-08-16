import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Globe2, Lock, FileCheck, CheckCircle2, Calendar } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-sans font-bold tracking-wider text-accent uppercase">
              AI-POWERED COMPLIANCE PLATFORM
            </span>
            
            <h1 className="mt-3 text-4xl font-sans font-bold text-foreground sm:text-5xl leading-[1.12] tracking-tight">
              Compliance Built for{' '}
              <span className="text-accent block sm:inline">
                Operational Confidence.
              </span>
            </h1>

            <p className="mt-4 text-sm font-sans text-muted-foreground leading-relaxed max-w-md">
              TruckEase helps trucking companies across the US and Canada stay ahead of renewals, organize records, and reduce risk before it impacts your business.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-sm transition-all px-6">
                <Link href="/risk-screening">
                  Request a Risk Screening &rarr;
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted font-semibold rounded-lg transition-all bg-card px-6">
                <Link href="/platform">
                  Explore the Platform
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-2 gap-y-3 gap-x-4 pt-6 border-t border-border text-xs font-sans text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>FMCSA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-accent" />
                <span>Canada &amp; US Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-accent" />
                <span>Secure &amp; Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-accent" />
                <span>Audit Ready</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column - Truck Photo & Floating UI Overlays */}
          <div className="relative lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-xl min-h-[360px] sm:min-h-[420px] flex items-center justify-center">
              
              {/* Semi-Truck Photo */}
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-border bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
                  alt="TruckEase Fleet Semi-Truck"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Card 1: Top Left - IRP Renewal */}
              <div className="absolute top-2 left-[-10px] sm:left-2 z-20 bg-card/95 backdrop-blur-md border border-border p-3 rounded-xl shadow-lg flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-sans font-bold text-foreground">IRP Renewal</div>
                  <div className="text-[10px] font-sans text-muted-foreground">Due in 23 days</div>
                </div>
              </div>

              {/* Floating Card 2: Top Right - Annual Inspection */}
              <div className="absolute top-8 right-[-10px] sm:right-2 z-20 bg-card/95 backdrop-blur-md border border-border p-3 rounded-xl shadow-lg flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-sans font-bold text-foreground">Annual Inspection</div>
                  <div className="text-[10px] font-sans text-emerald-600 dark:text-emerald-400 font-medium">Scheduled</div>
                </div>
              </div>

              {/* Floating Card 3: Center Overlay - Compliance Position */}
              <div className="absolute bottom-10 right-4 sm:right-12 z-20 bg-card/95 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl w-52">
                <div className="text-[10px] font-sans font-semibold text-muted-foreground uppercase tracking-wider">Compliance Position</div>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-2xl font-sans font-bold text-foreground">87.4%</span>
                  <span className="text-[10px] font-sans font-semibold text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">Moderate Risk</span>
                </div>
                <div className="mt-2 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full w-[87.4%]" />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Checkpoint Line Motif */}
        <div className="mt-16 pt-6 border-t border-border relative">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>CONTINUOUSLY TRACKED CHECKPOINTS</span>
            </div>
            <div className="hidden sm:flex items-center gap-8 text-muted-foreground">
              <span>US &amp; CANADA COVERAGE</span>
              <span>INTEGRATED AUDIT TRAIL</span>
              <span>REAL-TIME COMPLIANCE SIGNALS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
