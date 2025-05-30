"use client"

import { Heart, ChevronRight, MapPin, MessageCircle, Zap } from "lucide-react"
import Button from "@/components/ui/Button"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 z-20">
      <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in-up">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-orange-100">
            <Heart className="h-5 w-5 text-orange-500" />
            <span className="text-orange-600 font-medium">Made with love for our community</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-primary to-purple-600 bg-clip-text text-transparent tracking-tight">
            FajiApp
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">FajiBuy & FajiBusiness</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            One Idea. Two Apps. One Seamless Marketplace.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Bringing neighbors together, one conversation at a time 💬
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" onClick={() => scrollToSection("stay-updated")} className="group">
            Be the First to Know
            <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center gap-8 mt-12 opacity-60">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <MapPin className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-sm text-gray-600">Local</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Chat</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Fast</span>
          </div>
        </div>
      </div>
    </section>
  )
}
