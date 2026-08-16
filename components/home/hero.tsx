import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Globe2, Lock, FileCheck, AlertTriangle, CheckCircle2, Clock } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Pure Sans Typography */}
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

          {/* Right Column: Integrated Live Dark Dashboard UI */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b1329] text-white rounded-2xl p-6 shadow-2xl border border-slate-800 font-sans">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <h3 className="text-lg font-bold">Compliance Overview</h3>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-medium">
                  Active Monitoring
                </span>
              </div>

              {/* Main Progress Ring & Status Rows */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-5 bg-slate-900/60 rounded-xl p-5 border border-slate-800/80 flex flex-col items-center justify-center text-center">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-emerald-500" strokeWidth="3.5" strokeDasharray="76, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-2xl font-bold">76%</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 mt-2 font-medium">Overall Compliance Position</span>
                  <span className="text-xs text-emerald-400 mt-1 font-semibold">&uarr; 6% vs last 30 days</span>
                </div>

                <div className="sm:col-span-7 space-y-2">
                  <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">Hours of Service</span>
                    <span className="text-rose-400 font-semibold bg-rose-500/10 px-2 py-0.5 rounded">Needs Attention (77%)</span>
                  </div>
                  <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">Vehicle Maintenance</span>
                    <span className="text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded">Needs Attention (81%)</span>
                  </div>
                  <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">SCAC Renewal</span>
                    <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">Completed (100%)</span>
                  </div>
                  <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">MCS-150 Biannual</span>
                    <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">Completed (100%)</span>
                  </div>
                </div>
              </div>

              {/* Task Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-800 text-xs">
                <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/60">
                  <div className="text-slate-400 font-medium mb-1">Upcoming Tasks</div>
                  <div className="font-bold text-slate-200">Annual Inspection</div>
                  <div className="text-amber-400 text-[11px] mt-0.5">Due in 11 Days</div>
                </div>
                <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/60">
                  <div className="text-slate-400 font-medium mb-1">Recent Activity</div>
                  <div className="font-bold text-slate-200">IRP Renewal</div>
                  <div className="text-emerald-400 text-[11px] mt-0.5">Submitted May 12</div>
                </div>
                <div className="bg-slate-900/40 p-3 rounded-lg border border-rose-900/30 bg-rose-950/10">
                  <div className="text-rose-400 font-medium mb-1">At Risk</div>
                  <div className="font-bold text-slate-200">2 Driver Files Expiring</div>
                  <div className="text-rose-400 text-[11px] mt-0.5">IFTA Filing Overdue</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Standardized Checkpoint Bar */}
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
