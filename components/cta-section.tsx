"use client"

import { Button } from "@/components/ui/button"
import { ArrowRightIcon, MailIcon, MessageCircleIcon } from "lucide-react"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"

export function CTASection() {
  const { language } = useApp()
  const t = translations[language]

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative">
        <div className="max-w-5xl mx-auto">
          {/* Glass Card */}
          <div className="relative rounded-[2rem] overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-20" />
            <div className="absolute inset-[1px] rounded-[2rem] bg-background/95 backdrop-blur-xl" />

            <div className="relative p-8 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {t.cta.badge}
                  </div>
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 tracking-tight text-balance">
                    {t.cta.title} <span className="text-gradient">{t.cta.titleHighlight}</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.cta.subtitle}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="h-14 px-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 group"
                    >
                      {t.cta.cta1}
                      <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 bg-background/50 hover:bg-muted/50 transition-all duration-300"
                    >
                      <MailIcon className="mr-2 w-5 h-5" />
                      {t.cta.cta2}
                    </Button>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  {[
                    {
                      icon: MessageCircleIcon,
                      title: t.cta.benefit1,
                      description: t.cta.benefit1Desc,
                    },
                    {
                      icon: ArrowRightIcon,
                      title: t.cta.benefit2,
                      description: t.cta.benefit2Desc,
                    },
                    {
                      icon: MailIcon,
                      title: t.cta.benefit3,
                      description: t.cta.benefit3Desc,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={index}
                        className="flex gap-4 p-4 rounded-2xl bg-muted/50 border border-border/50 hover:border-primary/20 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
//asdsd
