"use client"

import Button from "@/components/ui/button"

export default function LaunchSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="launch" className="py-24 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-primary text-white px-8 py-4 rounded-full text-xl font-bold mb-8 shadow-lg">
          <span className="text-2xl">🚀</span>
          Launching This Year!!!
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The wait is almost over!</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Get ready for a <span className="font-semibold text-orange-600">smarter way to shop</span> and a
          <span className="font-semibold text-green-600"> simpler way to sell</span>. FajiApp is coming to Android and
          iOS, bringing your neighborhood closer together.
        </p>
        <Button size="lg" onClick={() => scrollToSection("stay-updated")}>
          Notify Me When It&apos;s Ready! 🔔
        </Button>
      </div>
    </section>
  )
}
