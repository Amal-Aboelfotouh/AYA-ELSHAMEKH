import Image from "next/image"
import { cn } from "@/lib/utils"

interface NerviaLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
}

export function NerviaLogo({ className, size = "lg", showText = false }: NerviaLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-16 h-16", // increased default size from w-12 h-12 to w-16 h-16
    xl: "w-20 h-20", // increased xl size from w-16 h-16 to w-20 h-20
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <Image src="/nervia-logo.png" alt="Nervia Logo" fill className="object-contain" priority />
      </div>
      {showText && <span className={cn("font-serif font-bold text-foreground", textSizeClasses[size])}>Nervia</span>}
    </div>
  )
}
