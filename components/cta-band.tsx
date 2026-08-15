// components/cta-band.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CtaBand() {
  return (
    <section className="bg-[#f7f4ee] py-16 border-t border-[#e2ded3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-mono font-semibold text-[#e8720c] tracking-wider uppercase mb-2">
          GET STARTED
        </p>
        <h2 className="text-3xl font-serif font-medium text-[#0c1a36] sm:text-4xl">
          Build Compliance With Confidence.
        </h2>
        <p className="mt-4 text-base text-[#5b6472] max-w-2xl mx-auto leading-relaxed">
          Whether you're looking for greater visibility into your compliance position or a more organized way to manage ongoing regulatory requirements, TruckEase is ready to help. Let's build a stronger compliance foundation for your business.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-[#e8720c] hover:bg-[#d6670a] text-white font-semibold rounded-lg shadow-sm">
            <Link href="/risk-screening">
              Request a Risk Screening
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-[#0c1a36]/20 bg-transparent text-[#0c1a36] hover:border-[#0c1a36]/50 hover:bg-[#0c1a36]/5 font-semibold rounded-lg">
            <Link href="/contact">
              Contact Our Team
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
