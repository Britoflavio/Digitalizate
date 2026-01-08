"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Menu, X, Moon, Sun, Globe, ChevronDown } from "lucide-react"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"

function LanguageSelector({
  language,
  setLanguage,
  variant = "default",
}: {
  language: string
  setLanguage: (lang: "en" | "es" | "pt") => void
  variant?: "default" | "mobile"
}) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const languages = [
    { code: "en" as const, label: "English" },
    { code: "es" as const, label: "Español" },
    { code: "pt" as const, label: "Português" },
  ]

  return (
    <div className="relative" ref={ref}>
      <Button
        variant={variant === "mobile" ? "outline" : "ghost"}
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={variant === "mobile" ? "flex-1 bg-transparent" : "text-muted-foreground hover:text-foreground"}
      >
        <Globe className="w-4 h-4 mr-2" />
        {language.toUpperCase()}
        <ChevronDown className={`w-3 h-3 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-36 bg-popover border border-border rounded-lg shadow-xl z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2.5 text-sm text-left hover:bg-muted transition-colors ${
                language === lang.code ? "bg-muted font-medium" : ""
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, isDarkMode, toggleDarkMode } = useApp()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-primary-foreground font-bold text-xl tracking-tight">N</span>
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-30 blur-md -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground tracking-tight">Nexus</span>
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                Digital Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { label: t.nav.services, href: "#services" },
              { label: t.nav.portfolio, href: "#portfolio" },
              { label: t.nav.about, href: "#about" },
              { label: t.nav.contact, href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSelector language={language} setLanguage={setLanguage} />

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="text-muted-foreground hover:text-foreground"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              {t.nav.login}
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              {t.nav.startProject}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border p-6">
          <nav className="flex flex-col gap-2">
            {[
              { label: t.nav.services, href: "#services" },
              { label: t.nav.portfolio, href: "#portfolio" },
              { label: t.nav.about, href: "#about" },
              { label: t.nav.contact, href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-2 mt-4 px-4">
              <LanguageSelector language={language} setLanguage={setLanguage} variant="mobile" />

              <Button variant="outline" size="sm" onClick={toggleDarkMode}>
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>

            <Button className="mt-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
              {t.nav.startProject}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
