import { Hero } from '@/components/home/hero'
import { WhyTruckEase } from '@/components/home/why-truckease'
import { RiskCta } from '@/components/home/risk-cta'
import { Testimonials } from '@/components/home/testimonials'
// Imports from consolidated section files
import { PlatformSections } from '@/components/home/platform-sections'
import { ValueSections } from '@/components/home/value-sections'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyTruckEase />
      <PlatformSections />
      <ValueSections />
      <Testimonials />
      <RiskCta />
    </main>
  )
}
