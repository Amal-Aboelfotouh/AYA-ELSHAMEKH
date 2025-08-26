"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { useLanguage } from "@/components/language-provider"
import { ArrowLeft, Zap, Play, Star, ArrowRight, Heart, Shield } from "lucide-react"

export default function DemoPage() {
  const { t, isRTL } = useLanguage()
  const [currentDemo, setCurrentDemo] = useState("landing")

  const demoPages = [
    { id: "landing", name: "Landing Page", path: "/" },
    { id: "therapy", name: "Therapy Interface", path: "/therapy" },
    { id: "dashboard", name: "Progress Dashboard", path: "/dashboard" },
    { id: "onboarding", name: "User Onboarding", path: "/onboarding" },
    { id: "doctor", name: "Doctor Portal", path: "/doctor" },
    { id: "community", name: "Community", path: "/community" },
  ]

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.nav.back}
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-xl text-foreground">Nervia Demo</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher variant="select" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Demo Navigation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Nervia App Demo</CardTitle>
            <CardDescription>
              Experience the complete Nervia ecosystem with bilingual support (English/Arabic)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {demoPages.map((page) => (
                <Button
                  key={page.id}
                  variant={currentDemo === page.id ? "default" : "outline"}
                  className="justify-start h-auto p-4"
                  onClick={() => setCurrentDemo(page.id)}
                >
                  <div className="text-left">
                    <div className="font-medium">{page.name}</div>
                    <div className="text-xs opacity-70">{page.path}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Demo Content Based on Current Selection */}
        {currentDemo === "landing" && (
          <div className="space-y-8">
            {/* Hero Section Demo */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Landing Page Hero</CardTitle>
                    <CardDescription>Main landing page with bilingual support</CardDescription>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">{t.landing.fdaApproved}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <h1 className="font-serif font-bold text-4xl lg:text-6xl leading-tight text-foreground">
                    {t.landing.heroTitle}
                    <span className="text-primary block">{t.landing.heroSubtitle}</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    {t.landing.heroDescription}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8">
                    {t.landing.startTherapy}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    <Play className="mr-2 w-5 h-5" />
                    {t.landing.watchDemo}
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4 justify-center">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">50,000+ {t.landing.users}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">4.9/5 {t.landing.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works Demo */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif">{t.landing.howItWorksTitle}</CardTitle>
                <CardDescription className="text-lg">{t.landing.howItWorksSubtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      step: "01",
                      title: t.landing.connectSetup,
                      description: t.landing.connectDescription,
                      icon: Zap,
                    },
                    {
                      step: "02",
                      title: t.landing.personalizedTherapy,
                      description: t.landing.personalizedDescription,
                      icon: Heart,
                    },
                    {
                      step: "03",
                      title: t.landing.trackProgress,
                      description: t.landing.trackDescription,
                      icon: Shield,
                    },
                  ].map((item, index) => (
                    <Card key={index} className="relative overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <span className="font-serif font-bold text-2xl text-muted-foreground/50">{item.step}</span>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Other demo sections would be similar but showing translated content */}
        {currentDemo !== "landing" && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{demoPages.find((p) => p.id === currentDemo)?.name} Demo</CardTitle>
              <CardDescription>
                This section would show the translated version of the {currentDemo} page with full bilingual support.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 rounded-lg bg-muted/30 text-center">
                <p className="text-muted-foreground">
                  Navigate to{" "}
                  <code className="bg-muted px-2 py-1 rounded text-sm">
                    {demoPages.find((p) => p.id === currentDemo)?.path}
                  </code>{" "}
                  to see the full {currentDemo} interface with bilingual support.
                </p>
                <Button
                  className="mt-4"
                  onClick={() => window.open(demoPages.find((p) => p.id === currentDemo)?.path, "_blank")}
                >
                  Open {demoPages.find((p) => p.id === currentDemo)?.name}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Language Features */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Bilingual Features</CardTitle>
            <CardDescription>Complete Arabic and English support throughout the application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">English Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Left-to-right text direction</li>
                  <li>• Source Sans Pro and Playfair Display fonts</li>
                  <li>• Western number formats</li>
                  <li>• Standard date/time formats</li>
                  <li>• Medical terminology in English</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Arabic Features (العربية)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Right-to-left text direction</li>
                  <li>• Cairo font optimized for Arabic</li>
                  <li>• Arabic-Indic numerals support</li>
                  <li>• Localized date/time formats</li>
                  <li>• Medical terminology in Arabic</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
