"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useState } from "react"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { language } = useApp()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orb */}
        <div
          className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-3xl transition-all duration-1000 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
        />
        {/* Secondary gradient orb */}
        <div
          className={`absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-secondary/30 to-transparent blur-3xl transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        />
        {/* Accent gradient orb */}
        <div
          className={`absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-t from-accent/25 to-transparent blur-3xl transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/80 backdrop-blur-sm border border-border/50 mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-foreground">{t.hero.badge}</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-8 tracking-tight text-balance transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-gradient">{t.hero.title1}</span>
            <br />
            {t.hero.title2}
            <br />
            <span className="text-gradient">{t.hero.title3}</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-pretty transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="h-14 px-8 text-base bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 group"
            >
              {t.hero.cta1}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base bg-background/50 backdrop-blur-sm border-border hover:bg-muted/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              {t.hero.cta2}
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap items-center justify-center gap-8 lg:gap-16 transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { value: t.hero.stat1, label: t.hero.stat1Label },
              { value: t.hero.stat2, label: t.hero.stat2Label },
              { value: t.hero.stat3, label: t.hero.stat3Label },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 rounded-full bg-muted-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
