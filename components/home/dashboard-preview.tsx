import React from 'react'
import { CheckCircle2, AlertTriangle, ShieldCheck, FileText } from 'lucide-react'

export function DashboardPreview() {
  return (
    <section className="bg-background py-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border pb-6 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-accent">Real-Time Overview</span>
              <h3 className="text-xl font-semibold text-foreground mt-1">Fleet Compliance Operations</h3>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="size-4" />
              <span>Active Monitoring</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-muted/40 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">Driver Qualification Files</span>
                <CheckCircle2 className="size-4 text-emerald-500" />
              </div>
              <p className="mt-2 text-2xl font-bold text-foreground">98.2%</p>
              <p className="mt-1 text-[11px] text-muted-foreground">All primary files verified</p>
            </div>

            <div className="rounded-xl border border-border bg-muted/40 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">Upcoming Renewals</span>
                <AlertTriangle className="size-4 text-amber-500" />
              </div>
              <p className="mt-2 text-2xl font-bold text-foreground">3 Action Items</p>
              <p className="mt-1 text-[11px] text-muted-foreground">IFTA & IRP renewals pending</p>
            </div>

            <div className="rounded-xl border border-border bg-muted/40 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">Audit Readiness</span>
                <FileText className="size-4 text-accent" />
              </div>
              <p className="mt-2 text-2xl font-bold text-foreground">Complete</p>
              <p className="mt-1 text-[11px] text-muted-foreground">Records indexed & accessible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
