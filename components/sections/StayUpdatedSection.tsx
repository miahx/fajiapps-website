"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Heart } from "lucide-react"
import Button from "@/components/ui/button"

export default function StayUpdatedSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically call your API
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section
      id="stay-updated"
      className="py-24 px-4 bg-gradient-to-br from-orange-500 via-primary to-purple-600 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Be the First to Know! 💫</h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Join our community and get notified the moment we launch. Plus, you&apos;ll receive early access and special
          perks! 🎁
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 rounded-full border-0 text-gray-900 placeholder-gray-500 text-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-white/20"
            required
          />
          <Button type="submit" variant="white" size="lg" className="px-8 py-4">
            <Mail className="h-5 w-5 mr-2" />
            Notify Me!
          </Button>
        </form>

        {isSubscribed && (
          <div className="mt-6 p-6 bg-white/20 backdrop-blur-sm text-white rounded-2xl animate-fade-in-up border border-white/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="h-6 w-6 text-red-300" />
              <span className="text-xl font-bold">Thank you!</span>
            </div>
            <p>We&apos;ll notify you the moment FajiApp launches. Get ready for something amazing! ✨</p>
          </div>
        )}

        <div className="mt-12 flex justify-center gap-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-sm">People waiting</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm">Amazing apps</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">∞</div>
            <div className="text-sm">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  )
}
