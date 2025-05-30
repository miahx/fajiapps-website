import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-0 overflow-hidden relative",
        hover && "group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3",
        className,
      )}
    >
      {children}
    </div>
  )
}
