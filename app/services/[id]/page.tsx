"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ServiceDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const params = useParams()
  const { language } = useApp()
  const t = translations[language]
  const serviceId = params.id as string

  const servicesData = {
    "booking-systems": {
      title: t.services.service1.title,
      subtitle: t.services.service1.subtitle,
      description: t.services.service1.description,
      features: [
        t.services.service1.feature1,
        t.services.service1.feature2,
        t.services.service1.feature3,
        t.services.service1.feature4,
      ],
      benefits: [
        { title: t.services.service1.benefit1Title, description: t.services.service1.benefit1Desc },
        { title: t.services.service1.benefit2Title, description: t.services.service1.benefit2Desc },
        { title: t.services.service1.benefit3Title, description: t.services.service1.benefit3Desc },
        { title: t.services.service1.benefit4Title, description: t.services.service1.benefit4Desc },
      ],
      image: "/booking-system-dashboard.jpg",
    },
    "landing-pages": {
      title: t.services.service2.title,
      subtitle: t.services.service2.subtitle,
      description: t.services.service2.description,
      features: [
        t.services.service2.feature1,
        t.services.service2.feature2,
        t.services.service2.feature3,
        t.services.service2.feature4,
      ],
      benefits: [
        { title: t.services.service2.benefit1Title, description: t.services.service2.benefit1Desc },
        { title: t.services.service2.benefit2Title, description: t.services.service2.benefit2Desc },
        { title: t.services.service2.benefit3Title, description: t.services.service2.benefit3Desc },
        { title: t.services.service2.benefit4Title, description: t.services.service2.benefit4Desc },
      ],
      image: "/landing-page-design.jpg",
    },
    "digital-invitations": {
      title: t.services.service3.title,
      subtitle: t.services.service3.subtitle,
      description: t.services.service3.description,
      features: [
        t.services.service3.feature1,
        t.services.service3.feature2,
        t.services.service3.feature3,
        t.services.service3.feature4,
      ],
      benefits: [
        { title: t.services.service3.benefit1Title, description: t.services.service3.benefit1Desc },
        { title: t.services.service3.benefit2Title, description: t.services.service3.benefit2Desc },
        { title: t.services.service3.benefit3Title, description: t.services.service3.benefit3Desc },
        { title: t.services.service3.benefit4Title, description: t.services.service3.benefit4Desc },
      ],
      image: "/digital-invitation-animated.jpg",
    },
    ecommerce: {
      title: t.services.service4.title,
      subtitle: t.services.service4.subtitle,
      description: t.services.service4.description,
      features: [
        t.services.service4.feature1,
        t.services.service4.feature2,
        t.services.service4.feature3,
        t.services.service4.feature4,
      ],
      benefits: [
        { title: t.services.service4.benefit1Title, description: t.services.service4.benefit1Desc },
        { title: t.services.service4.benefit2Title, description: t.services.service4.benefit2Desc },
        { title: t.services.service4.benefit3Title, description: t.services.service4.benefit3Desc },
        { title: t.services.service4.benefit4Title, description: t.services.service4.benefit4Desc },
      ],
      image: "/modern-ecommerce-dashboard-online-store.jpg",
    },
  }

  const service = servicesData[serviceId as keyof typeof servicesData]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {language === "en"
              ? "Service Not Found"
              : language === "es"
                ? "Servicio No Encontrado"
                : "Serviço Não Encontrado"}
          </h1>
          <Link href="/">
            <Button>
              {language === "en" ? "Back to Home" : language === "es" ? "Volver al Inicio" : "Voltar para Início"}
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden flex flex-col">
      {/* Background Gradient Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Back Navigation */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-16 py-4">
          <Link href="/#services">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {language === "en"
                ? "Back to Services"
                : language === "es"
                  ? "Volver a Servicios"
                  : "Voltar para Serviços"}
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {service.subtitle}
                </div>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient text-balance leading-tight">
                  {service.title}
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">{service.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="gap-2">
                  {language === "en"
                    ? "Start Your Project"
                    : language === "es"
                      ? "Iniciar Tu Proyecto"
                      : "Iniciar Seu Projeto"}
                </Button>
                <Button size="lg" variant="outline">
                  {language === "en"
                    ? "Schedule Consultation"
                    : language === "es"
                      ? "Agendar Consulta"
                      : "Agendar Consulta"}
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden border border-border/50 backdrop-blur-xl">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 relative z-10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {language === "en"
                ? "Key Features"
                : language === "es"
                  ? "Características Principales"
                  : "Características Principais"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {language === "en"
                ? "Everything you need for success"
                : language === "es"
                  ? "Todo lo que necesitas para el éxito"
                  : "Tudo que você precisa para o sucesso"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature List Section */}
      <section className="py-20 lg:py-28 relative z-10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {language === "en"
                ? "Included Features"
                : language === "es"
                  ? "Características Incluidas"
                  : "Características Incluídas"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative z-10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="relative rounded-3xl overflow-hidden bg-muted/30 border border-border/50 backdrop-blur-xl p-12 lg:p-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                {language === "en"
                  ? "Ready to Get Started?"
                  : language === "es"
                    ? "¿Listo para Comenzar?"
                    : "Pronto para Começar?"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "en"
                  ? "Let's discuss how this service can transform your business."
                  : language === "es"
                    ? "Hablemos sobre cómo este servicio puede transformar tu negocio."
                    : "Vamos discutir como este serviço pode transformar seu negócio."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  {language === "en" ? "Start Project" : language === "es" ? "Iniciar Proyecto" : "Iniciar Projeto"}
                </Button>
                <Button size="lg" variant="outline">
                  {language === "en" ? "Contact Us" : language === "es" ? "Contáctanos" : "Entre em Contato"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
