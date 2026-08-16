export function Testimonials() {
  const testimonials = [
    {
      quote: "TES has transformed how we manage compliance. Everything is in one place, deadlines are clear, and we've cut risk significantly.",
      name: "Operations Director",
      location: "Alberta, Canada"
    },
    {
      quote: "The visibility and alerts give us peace of mind. We stay compliant without the constant stress of manual tracking.",
      name: "Safety Manager",
      location: "Texas, USA"
    },
    {
      quote: "Audit-ready reports in minutes. TES makes compliance simple, predictable, and reliable for our entire fleet.",
      name: "Compliance Director",
      location: "Ontario, Canada"
    }
  ]

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Trusted by Fleet Owners
          </h2>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            Across North America
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex flex-col justify-between bg-slate-50 border border-slate-200 p-6 rounded-xl shadow-sm">
              <p className="text-sm text-slate-700 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-900">{testimonial.name}</div>
                <div className="text-[11px] text-slate-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
