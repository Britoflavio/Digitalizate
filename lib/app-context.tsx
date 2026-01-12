"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language } from "./translations"

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    const savedTheme = localStorage.getItem("theme")

    if (savedLanguage) setLanguage(savedLanguage)
    if (savedTheme === "dark") setIsDarkMode(true)
  }, [])

  // Update localStorage and document class when theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDarkMode])

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev)

  return (
    <AppContext.Provider value={{ language, setLanguage, isDarkMode, toggleDarkMode }}>{children}</AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within AppProvider")
  }
  return context
}
