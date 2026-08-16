import React from 'react'
import { Hero } from '@/components/Hero'
import { DashboardPreview } from '@/components/DashboardPreview'
import { Features } from '@/components/Features'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { Testimonials } from '@/components/Testimonials'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Dashboard Preview Section */}
      <DashboardPreview />

      {/* Stats Banner Section Removed Completely */}

      {/* 3. Feature Icons & Services */}
      <Features />

      {/* 4. Process Timeline */}
      <ProcessTimeline />

      {/* 5. Client Reviews */}
      <Testimonials />

      {/* 6. Call To Action Banner */}
      <CallToAction />
    </main>
  )
}
