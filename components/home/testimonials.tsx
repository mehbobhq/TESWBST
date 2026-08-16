import React from 'react'

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "What's actually changed for us isn't just staying compliant — it's seeing things we'd never have caught on our own. We know which drivers need a conversation before it's a real problem, and which trucks keep showing up in inspections for the same reason. That's not something we were tracking before.",
      name: 'Tejinder K.',
      location: 'Alberta',
    },
    {
      quote:
        "IFTA, IRP, our SFC renewal, HOS — TruckEase keeps track of all of it so we're not scrambling every quarter. Having someone actually watching our safety score before it becomes a problem has made a real difference.",
      name: 'Harjinder S.',
      location: 'Saskatchewan',
    },
    {
      quote:
        "It's not just filings anymore. Weekly HOS reviews, patterns across pre- and post-trip inspections, a real read on which drivers are actually performing well — we're making decisions now instead of just reacting to whatever comes up. That's the real difference.",
      name: 'Sohail M.',
      location: 'Michigan',
    },
    {
      quote:
        "We built our cross-border operation from the ground up with TruckEase — authorities, account setup, vehicle registration, tax filing, all of it. Starting a business is stressful enough without wondering if you're compliant. They made sure we weren't.",
      name: 'Wasim M.',
      location: 'Ontario',
    },
  ]

  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-wider text-accent uppercase">
            TRUSTED BY FLEET OWNERS
          </span>
          <h2 className="mt-2 text-3xl font-serif font-medium text-foreground">
            Across North America
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-card border border-border p-6 rounded-xl shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="text-xs font-bold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
