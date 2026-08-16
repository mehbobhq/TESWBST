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
  // Duplicate array 3x to ensure uninterrupted looping across high-res displays
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="bg-[#f7f4ee] py-20 overflow-hidden border-b border-[#e2ded3]">
      <div className="text-center mb-12 px-4">
        <p className="font-mono text-xs font-semibold tracking-widest text-[#e8720c] uppercase">
          TRUSTED BY FLEET OWNERS
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#0c1a36] mt-2">
          Across North America
        </h2>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((t, idx) => (
            <div
              key={idx}
              className="w-[360px] md:w-[420px] flex-shrink-0 bg-[#fdfcf9] border border-[#e2ded3] rounded-2xl p-8 flex flex-col justify-between shadow-sm"
            >
              <p className="font-sans italic text-[#5b6472] text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-[#e2ded3]">
                <p className="font-sans font-bold text-sm text-[#0c1a36]">
                  {t.author}
                </p>
                <p className="font-sans text-xs text-[#5b6472] mt-0.5">
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
