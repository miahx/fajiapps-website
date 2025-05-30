import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "white"
  size?: "sm" | "md" | "lg"
}

export default function Button({ children, variant = "primary", size = "md", className, ...props }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    primary:
      "bg-gradient-to-r from-orange-500 to-primary hover:from-orange-600 hover:to-primary/90 text-white shadow-lg",
    secondary: "bg-white text-primary hover:bg-gray-100 shadow-lg",
    white: "bg-white text-primary hover:bg-gray-100 shadow-lg",
  }

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-lg",
    lg: "px-10 py-4 text-xl",
  }

  return (
    <button className={cn(baseClasses, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
