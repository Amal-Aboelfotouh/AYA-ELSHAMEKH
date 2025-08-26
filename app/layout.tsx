import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3, Cairo } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
})

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  display: "swap",
  variable: "--font-cairo",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Nervia - Advanced Pain Relief Therapy",
  description: "Revolutionary TENS device and app for personalized pain management therapy",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${playfairDisplay.variable} ${sourceSans.variable} ${cairo.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
