import { Hero } from '@/components/home/hero'
import { WhyTruckEase } from '@/components/home/why-truckease'
import { PlatformPreview } from '@/components/home/platform-preview'
import { Problem } from '@/components/home/problem'
import { HowWeHelp } from '@/components/home/how-we-help'
import { Testimonials } from '@/components/home/testimonials'
import { RiskCta } from '@/components/home/risk-cta'
import { CtaBand } from '@/components/home/cta-band'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyTruckEase />
      <PlatformPreview />
      <Problem />
      <HowWeHelp />
      <Testimonials />
      <RiskCta />
      <CtaBand />
    </main>
  )
}
