import React from 'react'

const stats = [
  { label: 'Active Fleet Vehicles Tracked', value: '10,000+' },
  { label: 'Cross-Border Authorities Managed', value: '100%' },
  { label: 'On-Time Quarterly Filings', value: '99.8%' },
  { label: 'FMCSA & DOT Audit Success', value: '100%' },
]

export function StatsBanner() {
  return (
    <section className="bg-navy py-10 text-navy-foreground border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold font-serif sm:text-3xl text-accent">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-navy-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
