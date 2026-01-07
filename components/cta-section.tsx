"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"

export function CTASection() {
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
                    Let's Talk
                  </div>
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 tracking-tight text-balance">
                    Ready to Transform Your <span className="text-gradient">Digital Presence?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Whether you need a booking system, landing page, or digital invitation, we're here to bring your
                    vision to life. Let's create something extraordinary together.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="h-14 px-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 group"
                    >
                      Schedule Consultation
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 bg-background/50 hover:bg-muted/50 transition-all duration-300"
                    >
                      <Mail className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  {[
                    {
                      icon: MessageCircle,
                      title: "Free Discovery Call",
                      description: "30-minute consultation to understand your needs",
                    },
                    {
                      icon: Zap,
                      title: "Quick Turnaround",
                      description: "Most projects delivered within 2-4 weeks",
                    },
                    {
                      icon: Shield,
                      title: "Satisfaction Guaranteed",
                      description: "Unlimited revisions until you're happy",
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

function Zap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  )
}

function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}
