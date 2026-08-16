import React from 'react'
import { ClipboardCheck, SearchCheck, ShieldCheck, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Initial Intake & Audit',
    description: 'We evaluate your current authorities, filings, and safety records to establish your baseline compliance position.',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'System & Document Onboarding',
    description: 'Driver files, vehicle registrations, and permit tracking are organized into an access-controlled digital dashboard.',
    icon: SearchCheck,
  },
  {
    number: '03',
    title: 'Continuous Tracking & Filings',
    description: 'We proactively manage IFTA, IRP, HOS reviews, and permit renewals before deadlines or violations occur.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Ongoing Risk Mitigation',
    description: 'Receive real-time insights on safety scores and inspection trends to protect your fleet operating authority.',
    icon: TrendingUp,
  },
]

export function ProcessSteps() {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-accent uppercase">
            HOW IT WORKS
          </span>
          <h2 className="mt-2 text-3xl font-serif font-medium text-foreground sm:text-4xl">
            A Structured Path to Compliance
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            From initial risk screening to ongoing cross-border fleet management, our process ensures zero operational blind spots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative bg-card border border-border p-6 rounded-xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-bold text-accent">
                      {step.number}
                    </span>
                    <div className="p-2 bg-navy rounded-lg text-white">
                      <Icon className="size-5 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
