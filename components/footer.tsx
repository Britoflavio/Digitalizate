"use client"
import { Instagram, Linkedin, Mail, Twitter, MapPin, Phone } from "lucide-react"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useApp()
  const t = translations[language]

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-primary-foreground font-bold text-xl tracking-tight">N</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground tracking-tight">Nexus</span>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                  Digital Studio
                </span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-xs">{t.footer.description}</p>
            <div className="flex items-center gap-2">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-muted hover:bg-gradient-to-br hover:from-primary hover:to-secondary text-muted-foreground hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-foreground mb-4">{t.footer.servicesTitle}</h3>
            <ul className="space-y-3">
              {[t.footer.service1, t.footer.service2, t.footer.service3, t.footer.service4].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-foreground mb-4">{t.footer.companyTitle}</h3>
            <ul className="space-y-3">
              {[t.footer.company1, t.footer.company2, t.footer.company3, t.footer.company4].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold text-foreground mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{t.footer.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+54 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">hello@nexus.studio</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
