import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import SneakPeeksSection from "@/components/sections/SneakPeeksSection"
import LaunchSection from "@/components/sections/LaunchSection"
import StayUpdatedSection from "@/components/sections/StayUpdatedSection"
import Footer from "@/components/sections/Footer"
import FloatingElements from "@/components/ui/FloatingElements"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <SneakPeeksSection />
      <LaunchSection />
      {/* <StayUpdatedSection /> */}
      <Footer />
    </div>
  )
}
