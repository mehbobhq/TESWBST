import React from 'react'

const testimonials = [
  {
    quote:
      "What's actually changed for us isn't just staying compliant — it's seeing things we'd never have caught on our own. We know which drivers need a conversation before it's a real problem, and which trucks keep showing up in inspections for the same reason. That's not something we were tracking before.",
    author: 'Tejinder K.',
    location: 'Alberta',
  },
  {
    quote:
      "IFTA, IRP, our SFC renewal, HOS — TruckEase keeps track of all of it so we're not scrambling every quarter. Having someone actually watching our safety score before it becomes a problem has made a real difference.",
    author: 'Harjinder S.',
    location: 'Saskatchewan',
  },
  {
    quote:
      "It's not just filings anymore. Weekly HOS reviews, patterns across pre- and post-trip inspections, a real read on which drivers are actually performing well — we're making decisions now instead of just reacting to whatever comes up. That's the real difference.",
    author: 'Sohail M.',
    location: 'Michigan',
  },
  {
    quote:
      "We built our cross-border operation from the ground up with TruckEase — authorities, account setup, vehicle registration, tax filing, all of it. Starting a business is stressful enough without wondering if you're compliant. They made sure we weren't.",
    author: 'Wasim M.',
    location: 'Ontario',
  },
]

export function TestimonialsSection() {
  // Duplicate array once (2x total) to pair perfectly with translateX(-50%)
  const marqueeItems = [...testimonials, ...testimonials]

  return (
    <section className="bg-background py-20 overflow-hidden border-b border-border">
      <div className="text-center mb-12 px-4">
        <p className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          TRUSTED BY FLEET OWNERS
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mt-2">
          Across North America
        </h2>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-6 animate-marquee-loop">
          {marqueeItems.map((t, idx) => (
            <div
              key={idx}
              className="w-[360px] md:w-[420px] flex-shrink-0 bg-card border border-border rounded-2xl p-8 flex flex-col justify-between shadow-sm"
            >
              <p className="font-sans italic text-muted-foreground text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-sans font-bold text-sm text-foreground">
                  {t.author}
                </p>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
