import { Hero } from '@/components/home/hero'
import { DashboardPreview } from '@/components/home/dashboard-preview'
import { StatsBanner } from '@/components/home/stats-banner'
import { WhyTruckEase } from '@/components/home/why-truckease'
import { HowWeHelp } from '@/components/home/value-sections'
import { ProcessSteps } from '@/components/home/process-steps'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
    </main>
  )
}
