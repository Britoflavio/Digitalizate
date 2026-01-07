"use client"

import { Calendar, Globe, PartyPopper, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Calendar,
    title: "Online Booking Systems",
    subtitle: "Turneros",
    description:
      "Intelligent appointment scheduling platforms that streamline operations for clinics, salons, consultants, and service-based businesses.",
    features: [
      "Real-time availability sync",
      "Automated SMS & email reminders",
      "Multi-staff calendars",
      "Payment integration",
    ],
    gradient: "from-primary to-accent",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Globe,
    title: "Custom Landing Pages",
    subtitle: "High-Converting Design",
    description:
      "Conversion-focused landing pages that capture attention, tell your story, and turn visitors into loyal customers.",
    features: [
      "Mobile-first responsive",
      "SEO & Core Web Vitals optimized",
      "A/B testing ready",
      "Analytics integration",
    ],
    gradient: "from-accent to-secondary",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: PartyPopper,
    title: "Digital Invitations",
    subtitle: "Interactive Experiences",
    description:
      "Stunning animated invitations for weddings, birthdays, corporate events, and celebrations that leave lasting impressions.",
    features: ["Custom animations & effects", "RSVP tracking dashboard", "Photo gallery integration", "Social sharing"],
    gradient: "from-secondary to-primary",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-16 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 tracking-tight text-balance">
            Digital Solutions That <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We specialize in three core digital products, each crafted with precision, performance, and your business
            goals in mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isReversed = index % 2 === 1

            return (
              <div
                key={index}
                className={`group relative rounded-3xl bg-muted/30 border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5`}
              >
                <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch`}>
                  {/* Content */}
                  <div className="flex-1 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{service.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {service.subtitle}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{service.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-fit group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
                    >
                      Learn More
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>

                  {/* Image */}
                  <div className="flex-1 relative min-h-[300px] lg:min-h-[400px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50" />
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-${isReversed ? "r" : "l"} from-muted/80 via-transparent to-transparent`}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
