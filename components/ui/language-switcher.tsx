"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/components/language-provider"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  variant?: "button" | "select"
  size?: "sm" | "default" | "lg"
}

export function LanguageSwitcher({ variant = "button", size = "sm" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()

  if (variant === "select") {
    return (
      <Select value={language} onValueChange={(value) => setLanguage(value as "en" | "ar")}>
        <SelectTrigger className="w-32">
          <Globe className="w-4 h-4 mr-2" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ar">العربية</SelectItem>
        </SelectContent>
      </Select>
    )
  }

  return (
    <Button variant="ghost" size={size} onClick={() => setLanguage(language === "en" ? "ar" : "en")} className="gap-2">
      <Globe className="w-4 h-4" />
      {language === "en" ? "العربية" : "English"}
    </Button>
  )
}
