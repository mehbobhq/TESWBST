import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Globe2, Lock, FileCheck, CheckCircle2 } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold tracking-wider text-accent uppercase">
              AI-Powered Compliance Platform
            </span>
            <h1 className="mt-3 text-4xl font-serif font-medium text-foreground sm:text-5xl leading-[1.15] tracking-tight">
              Compliance Built for{' '}
              <span className="text-foreground font-semibold block sm:inline">
                Operational Confidence.
              </span>
            </h1>
            
            {/* Locked Thesis Line */}
            <p className="mt-3 text-sm font-mono font-semibold text-accent">
              Compliance isn't the goal. Operational confidence is.
            </p>

            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              A compliance platform that combines regulatory expertise with AI-powered 
              technology to help trucking companies across the United States and Canada 
              understand their compliance position, stay ahead of regulatory requirements, 
              and operate with greater confidence.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-md transition-all">
                <Link href="/risk-screening">
                  Request a Risk Screening &rarr;
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted font-semibold rounded-lg transition-all">
                <Link href="/platform">
                  Explore the Platform
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-2 gap-4 pt-6 border-t border-border text-xs font-semibold text-muted-foreground">
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

          {/* Right Hero Visual Column */}
          <div className="relative lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-2xl min-h-[320px] rounded-2xl border border-border bg-gradient-to-br from-card to-muted/50 p-6 shadow-xl flex items-center justify-center">
              
              {/* Fallback Truck Graphic / Visual Placeholder with Inline SVG */}
              <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                <div className="p-4 bg-navy/10 rounded-2xl mb-3">
                  <svg 
                    className="h-16 w-16 text-accent" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.75" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                    <path d="M15 18H9" />
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                    <circle cx="17" cy="18" r="2" />
                    <circle cx="7" cy="18" r="2" />
                  </svg>
                </div>
                <span className="text-xs font-mono font-medium">TruckEase Fleet Intelligence Engine</span>
              </div>
              
              {/* Floating UI Card Overlay 1 */}
              <div className="absolute top-4 right-4 z-20 bg-card/95 backdrop-blur-sm border border-border p-3 rounded-xl shadow-lg flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Annual Inspection</div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Scheduled</div>
                </div>
              </div>

              {/* Floating UI Card Overlay 2 */}
              <div className="absolute bottom-6 left-4 z-20 bg-card/95 backdrop-blur-sm border border-border p-3.5 rounded-xl shadow-xl w-48">
                <div className="text-[10px] uppercase font-mono font-bold text-muted-foreground">Compliance Position</div>
                <div className="text-xl font-bold text-foreground mt-0.5">87.4%</div>
                <div className="text-[11px] font-semibold text-accent mt-0.5">Moderate Risk</div>
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
