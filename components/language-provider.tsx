"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Language, getTranslation, isRTL, type Translations } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem("nervia-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("nervia-language", lang)

    // Update document direction and lang attribute
    document.documentElement.dir = isRTL(lang) ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }

  const t = getTranslation(language)
  const rtl = isRTL(language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL: rtl }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
