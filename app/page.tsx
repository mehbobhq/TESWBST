import { Hero } from '@/components/home/hero'
import { DashboardPreview } from '@/components/home/dashboard-preview'
import { StatsBanner } from '@/components/home/stats-banner'
import { WhyTruckEase as ValueProps } from '@/components/home/why-truckease'
import { HowWeHelp as PlatformCapabilities } from '@/components/home/value-sections'
import { ProcessSteps } from '@/components/home/process-steps'
import { Testimonials } from '@/components/home/testimonials'
import { RiskCta as CtaBanner } from '@/components/home/risk-cta'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <DashboardPreview />
      <StatsBanner />
      <ValueProps />
      <PlatformCapabilities />
      <ProcessSteps />
      <Testimonials />
      <CtaBanner />
    </main>
  )
}
