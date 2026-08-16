import React from 'react'
import {
  AlertCircle,
  Wrench,
  CheckCircle2,
  Info,
  ChevronRight,
  Calendar,
  Clock,
  ShieldAlert,
  AlertTriangle
} from 'lucide-react'

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

        {/* Outer Dashboard Card Frame */}
        <div className="bg-[#0B0F19] text-slate-100 rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-800">
          
          {/* Dashboard Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
            <h3 className="text-xl font-bold text-white tracking-tight">Compliance Overview</h3>
            <span className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-semibold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Active Monitoring
            </span>
          </div>

          {/* Top Section: Radial Score Chart + Compliance Status List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Radial Gauge */}
            <div className="lg:col-span-4 bg-[#111726] rounded-xl p-6 border border-slate-800 flex flex-col items-center justify-center text-center shadow-inner">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  {/* Background Ring */}
                  <path
                    className="text-slate-800"
                    strokeWidth="3.2"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Progress Ring */}
                  <path
                    className="text-emerald-400"
                    strokeWidth="3.2"
                    strokeDasharray="76, 100"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-4xl font-extrabold text-white tracking-tight">76%</span>
                  <p className="text-[11px] font-medium text-slate-400 mt-0.5 max-w-[90px] leading-tight mx-auto">
                    Overall Compliance Position
                  </p>
                </div>
              </div>
              <div className="mt-4 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <span>&uarr; 6%</span>
                <span className="text-slate-400 font-normal">vs last 30 days</span>
              </div>
            </div>

            {/* Main Category Status Rows */}
            <div className="lg:col-span-8 space-y-3">
              
              {/* 1. Hours of Service */}
              <div className="bg-[#111726] hover:bg-[#161d30] transition-colors rounded-xl p-3.5 sm:p-4 border border-slate-800 flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-3 min-w-0">
                  <AlertCircle className="h-5 w-5 text-rose-500 shrink-0" />
                  <span className="font-semibold text-slate-200 truncate">Hours of Service</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-semibold text-rose-400 hidden sm:inline">Needs Attention</span>
                  <span className="font-bold text-white">77%</span>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </div>
              </div>

              {/* 2. Vehicle Maintenance Record */}
              <div className="bg-[#111726] hover:bg-[#161d30] transition-colors rounded-xl p-3.5 sm:p-4 border border-slate-800 flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-3 min-w-0">
                  <Wrench className="h-5 w-5 text-amber-500 shrink-0" />
                  <span className="font-semibold text-slate-200 truncate">Vehicle Maintenance Record</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-semibold text-amber-400 hidden sm:inline">Needs Attention</span>
                  <span className="font-bold text-white">81%</span>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </div>
              </div>

              {/* 3. IRP Fleet Renewal */}
              <div className="bg-[#111726] hover:bg-[#161d30] transition-colors rounded-xl p-3.5 sm:p-4 border border-slate-800 flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-3 min-w-0">
                  <Info className="h-5 w-5 text-cyan-400 shrink-0" />
                  <span className="font-semibold text-slate-200 truncate">IRP Fleet Renewal</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-semibold text-cyan-400 hidden sm:inline">On Track</span>
                  <span className="text-xs font-medium text-slate-400">Application Submitted</span>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </div>
              </div>

              {/* 4. SCAC Renewal */}
              <div className="bg-[#111726] hover:bg-[#161d30] transition-colors rounded-xl p-3.5 sm:p-4 border border-slate-800 flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-3 min-w-0">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="font-semibold text-slate-200 truncate">SCAC Renewal</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-semibold text-emerald-400 hidden sm:inline">Completed</span>
                  <span className="font-bold text-white">100%</span>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </div>
              </div>

              {/* 5. MCS-150 Biannual Update */}
              <div className="bg-[#111726] hover:bg-[#161d30] transition-colors rounded-xl p-3.5 sm:p-4 border border-slate-800 flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-3 min-w-0">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="font-semibold text-slate-200 truncate">MCS-150 Biannual Update</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-semibold text-emerald-400 hidden sm:inline">Completed</span>
                  <span className="font-bold text-white">100%</span>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Columns: Upcoming Tasks, Recent Activity & At Risk */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-slate-800/80 text-xs">
            
            {/* Column 1: Upcoming Tasks */}
            <div className="bg-[#111726] p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 font-bold text-slate-200 text-sm">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <span>Upcoming Tasks</span>
                  </div>
                  <button className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300">View all</button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-rose-500" />
                      <span>Annual Inspection – Unit T104</span>
                    </div>
                    <span className="font-bold text-rose-400">21 Days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      <span>Schedule Maintenance – T134</span>
                    </div>
                    <span className="font-bold text-amber-400">36 Days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      <span>IFTA Filing</span>
                    </div>
                    <span className="font-bold text-amber-400">41 Days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Recent Activity */}
            <div className="bg-[#111726] p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 font-bold text-slate-200 text-sm">
                    <Clock className="h-4 w-4 text-slate-400" />
                    <span>Recent Activity</span>
                  </div>
                  <button className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300">View all</button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                      <span>SCAC Renewal</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 font-semibold">Completed</span>
                      <span className="text-slate-400">June 10</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                      <span>MCS-150 Biannual Update</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 font-semibold">Completed</span>
                      <span className="text-slate-400">June 19</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                      <span>US Bonded Carrier App.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 font-semibold">Completed</span>
                      <span className="text-slate-400">June 02</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: At Risk */}
            <div className="bg-[#181119] p-5 rounded-xl border border-rose-900/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-900/40">
                  <div className="flex items-center gap-2 font-bold text-rose-400 text-sm">
                    <AlertTriangle className="h-4 w-4 text-rose-500" />
                    <span>At Risk</span>
                  </div>
                  <button className="text-[11px] font-semibold text-rose-400 hover:text-rose-300">View all</button>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-rose-300">
                      <ShieldAlert className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                      <span className="truncate">1 Trailer Inspection Expiring in 4 days</span>
                    </div>
                    <p className="text-[10px] text-rose-400/70 pl-5 mt-0.5">Reminders sent 8</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-rose-300">
                      <ShieldAlert className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                      <span className="truncate">2 Driver Files Expiring in 12 days</span>
                    </div>
                    <p className="text-[10px] text-rose-400/70 pl-5 mt-0.5">Reminders sent 5</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
