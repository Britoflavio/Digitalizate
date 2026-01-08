"use client"

import { Zap, Shield, Palette, Code2, Smartphone, Rocket, Clock, HeartHandshake } from "lucide-react"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"

export function FeaturesSection() {
  const { language } = useApp()
  const t = translations[language]

  const features = [
    {
      icon: Zap,
      title: t.features.feature1,
      description: t.features.feature1Desc,
    },
    {
      icon: Shield,
      title: t.features.feature2,
      description: t.features.feature2Desc,
    },
    {
      icon: Palette,
      title: t.features.feature3,
      description: t.features.feature3Desc,
    },
    {
      icon: Code2,
      title: t.features.feature4,
      description: t.features.feature4Desc,
    },
    {
      icon: Smartphone,
      title: t.features.feature5,
      description: t.features.feature5Desc,
    },
    {
      icon: Rocket,
      title: t.features.feature6,
      description: t.features.feature6Desc,
    },
    {
      icon: Clock,
      title: t.features.feature7,
      description: t.features.feature7Desc,
    },
    {
      icon: HeartHandshake,
      title: t.features.feature8,
      description: t.features.feature8Desc,
    },
  ]

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            opacity: 0.03,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            {t.features.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight text-balance">
            {t.features.title} <span className="text-gradient">{t.features.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.features.subtitle}</p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-muted/50 border border-border/50 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-secondary/10 group-hover:border-primary/20 transition-all duration-300">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
