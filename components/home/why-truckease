// components/home/why-truckease.tsx
import React from 'react'
import { 
  ShieldCheck, 
  Globe2, 
  Cpu, 
  FolderLock, 
  Headphones, 
  Award 
} from 'lucide-react'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Proactive, continuously-tracked compliance',
  },
  {
    icon: Globe2,
    title: 'Cross-border knowledge, US & Canada',
  },
  {
    icon: Cpu,
    title: 'Technology-first platform',
  },
  {
    icon: FolderLock,
    title: 'Organized, access-controlled documents',
  },
  {
    icon: Headphones,
    title: 'Practical ongoing support',
  },
  {
    icon: Award,
    title: 'Long-term compliance confidence',
  },
]

export function WhyTruckEase() {
  return (
    <section className="bg-[#f7f4ee] py-12 border-b border-[#e2ded3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro Copy */}
        <p className="text-center text-sm font-medium text-[#5b6472] max-w-3xl mx-auto mb-8 leading-relaxed">
          Businesses choose TruckEase because compliance requires more than filing paperwork. It requires consistency, attention to detail, and technology built to catch what manual tracking misses.
        </p>

        {/* Compact 6-Item Value Strip */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                className="bg-[#fdfcf9] border border-[#e2ded3] rounded-xl p-4 flex flex-col items-center text-center justify-center space-y-2 shadow-sm"
              >
                <div className="rounded-lg bg-[#0c1a36] p-2 text-white">
                  <Icon className="size-4" />
                </div>
                <span className="text-xs font-semibold text-[#0c1a36] leading-snug">
                  {item.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
