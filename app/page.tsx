import { Hero } from '@/components/home/hero'
import { WhyTruckEase } from '@/components/home/why-truckease'
import { PlatformPreview } from '@/components/home/platform-sections'
import { Problem, HowWeHelp, Philosophy } from '@/components/home/value-sections'
import { Testimonials } from '@/components/home/testimonials'
import { RiskCta } from '@/components/home/risk-cta'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyTruckEase />
      <PlatformPreview />
      <Problem />
      <HowWeHelp />
      <Philosophy />
      <Testimonials />
      <RiskCta />
    </main>
  )
}
