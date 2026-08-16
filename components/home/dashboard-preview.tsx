import React from 'react'

export function DashboardPreview() {
  return (
    <section className="bg-background py-16 border-b border-border font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase">
            REAL-TIME OVERVIEW
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
            Fleet Compliance Operations Dashboard
          </h2>
        </div>

        {/* Dashboard Container */}
        <div className="bg-[#0b1329] text-white rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-800">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-xl font-bold text-slate-100">Compliance Overview</h3>
            </div>
            <span className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-semibold">
              Active Monitoring
            </span>
          </div>

          {/* Core Categories & Progress Ring */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-slate-900/60 rounded-xl p-6 border border-slate-800 flex flex-col items-center justify-center text-center">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-emerald-500" strokeWidth="3.5" strokeDasharray="76, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="absolute text-center">
                  <span className="text-3xl font-bold text-white">76%</span>
                </div>
              </div>
              <span className="text-xs text-slate-400 mt-3 font-medium">Overall Compliance Position</span>
              <span className="text-xs text-emerald-400 mt-1 font-semibold">&uarr; 6% vs last 30 days</span>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-200">Hours of Service</span>
                <span className="text-rose-400 font-semibold bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20">Needs Attention (77%)</span>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-200">Vehicle Maintenance Record</span>
                <span className="text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">Needs Attention (81%)</span>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-200">SCAC Renewal</span>
                <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">Completed (100%)</span>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-200">MCS-150 Biannual Update</span>
                <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">Completed (100%)</span>
              </div>
            </div>
          </div>

          {/* Task Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800 text-xs">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
              <div className="text-slate-400 font-medium mb-1">Upcoming Tasks</div>
              <div className="font-bold text-slate-100 text-sm">Annual Inspection - Unit T104</div>
              <div className="text-amber-400 font-semibold mt-1">Due in 11 Days</div>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
              <div className="text-slate-400 font-medium mb-1">Recent Activity</div>
              <div className="font-bold text-slate-100 text-sm">IRP Fleet Renewal</div>
              <div className="text-emerald-400 font-semibold mt-1">Submitted May 12</div>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-rose-900/30 bg-rose-950/10">
              <div className="text-rose-400 font-medium mb-1">At Risk</div>
              <div className="font-bold text-slate-100 text-sm">2 Driver Files Expiring Soon</div>
              <div className="text-rose-400 font-semibold mt-1">IFTA Filing Overdue (1 Qtr)</div>
            </div>
          </div>

          {/* Stats Banner Section */}
          <div className="mt-8 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">10,000+</div>
              <div className="text-xs font-semibold text-slate-400 mt-1">Active Fleet Vehicles Tracked</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">100%</div>
              <div className="text-xs font-semibold text-slate-400 mt-1">Cross-Border Authorities Managed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">99.8%</div>
              <div className="text-xs font-semibold text-slate-400 mt-1">On-Time Quarterly Filings</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">100%</div>
              <div className="text-xs font-semibold text-slate-400 mt-1">FMCSA &amp; DOT Audit Success</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
