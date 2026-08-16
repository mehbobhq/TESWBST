import Image from 'next/image'
import { ShieldCheck, Globe2, Lock, FileCheck, Calendar, CheckCircle2 } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-10 pb-12 lg:pt-16 lg:pb-16 border-b border-border font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-wider text-accent uppercase">
              AI-POWERED COMPLIANCE PLATFORM
            </span>
            
            <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl leading-tight tracking-tight">
              Compliance Built for Operational Confidence.
            </h1>

            <p className="mt-3 text-sm font-semibold text-accent">
              Compliance isn't the goal. Operational confidence is.
            </p>

            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              A compliance platform that combines regulatory expertise with AI-powered 
              technology to help trucking companies across the United States and Canada 
              understand their compliance position, stay ahead of regulatory requirements, 
              and operate with greater confidence.
            </p>

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

          {/* Right Column: Unbranded White Semi-Truck Image with Compliance Overlays */}
          <div className="relative lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-xl min-h-[380px] sm:min-h-[420px] flex items-center justify-center">
              
              {/* Connector Lines */}
              <svg className="absolute inset-0 h-full w-full pointer-events-none z-10" viewBox="0 0 500 400" fill="none">
                <path d="M 140 70 Q 180 140 260 170" stroke="currentColor" className="text-border" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 380 90 Q 400 180 410 220" stroke="currentColor" className="text-border" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>

              {/* Truck Frame */}
              <div className="relative w-full h-[300px] sm:h-[360px] overflow-hidden rounded-2xl shadow-sm border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop"
                  alt="Unbranded Commercial Fleet Truck"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/20" />
              </div>

              {/* Floating Status Badges */}
              <div className="absolute top-2 left-2 z-20 bg-card/95 backdrop-blur-md border border-border p-3 rounded-xl shadow-lg flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-600">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">IRP Renewal</div>
                  <div className="text-[10px] text-muted-foreground">Due in 23 days</div>
                </div>
              </div>

              <div className="absolute top-6 right-2 z-20 bg-card/95 backdrop-blur-md border border-border p-3 rounded-xl shadow-lg flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Annual Inspection</div>
                  <div className="text-[10px] text-emerald-600 font-medium">Scheduled</div>
                </div>
              </div>

              <div className="absolute bottom-10 right-6 z-20 bg-card/95 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl w-56">
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Compliance Position</div>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-2xl font-bold text-foreground">87.4%</span>
                  <span className="text-[10px] font-semibold text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">Moderate Risk</span>
                </div>
                <div className="mt-3 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full w-[87.4%]" />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Checkpoint Bar */}
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <span className="text-accent flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              CONTINUOUSLY TRACKED CHECKPOINTS
            </span>
            <span>US &amp; CANADA COVERAGE</span>
            <span>INTEGRATED AUDIT TRAIL</span>
            <span>REAL-TIME COMPLIANCE SIGNALS</span>
          </div>
        </div>

      </div>
    </section>
  )
}
