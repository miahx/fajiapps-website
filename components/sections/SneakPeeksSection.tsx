import { Smartphone, Store, MessageCircle, Zap } from "lucide-react"
import Card from "@/components/ui/Card"

export default function SneakPeeksSection() {
  return (
    <section id="sneak-peeks" className="py-24 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sneak Peeks</h2>
          <p className="text-xl text-gray-600 mb-4">See what&apos;s coming your way</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FajiBuy Card */}
          <Card hover className="text-center relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-primary"></div>

            <div className="mb-8 flex justify-center">
              <div className="relative group-hover:scale-105 transition-transform duration-500">
                <div className="w-56 h-[28rem] bg-gradient-to-br from-orange-500 via-primary to-blue-600 rounded-[3rem] shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <Smartphone className="h-28 w-28 text-white/90 relative z-10" />
                </div>
                <div className="absolute inset-6 bg-white rounded-[2.5rem] flex items-center justify-center shadow-inner">
                  <div className="text-center space-y-3">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-primary bg-clip-text text-transparent">
                      FajiBuy
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Customer App</div>
                    <div className="flex justify-center gap-2 mt-4">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">FajiBuy</h3>
            <p className="text-lg text-gray-600 font-medium mb-6">Browse. Chat. Order. All nearby.</p>
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span className="bg-orange-100 px-3 py-1 rounded-full">🛍️ Shop Local</span>
              <span className="bg-blue-100 px-3 py-1 rounded-full">💬 Direct Chat</span>
            </div>
          </Card>

          {/* FajiBusiness Card */}
          <Card hover className="text-center relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>

            <div className="mb-8 flex justify-center">
              <div className="relative group-hover:scale-105 transition-transform duration-500">
                <div className="w-56 h-[28rem] bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-[3rem] shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <Store className="h-28 w-28 text-white/90 relative z-10" />
                </div>
                <div className="absolute inset-6 bg-white rounded-[2.5rem] flex items-center justify-center shadow-inner">
                  <div className="text-center space-y-3">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      FajiBusiness
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Vendor App</div>
                    <div className="flex justify-center gap-2 mt-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">FajiBusiness</h3>
            <p className="text-lg text-gray-600 font-medium mb-6">Go digital in minutes. Reach real customers.</p>
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span className="bg-green-100 px-3 py-1 rounded-full">🚀 Instant Setup</span>
              <span className="bg-emerald-100 px-3 py-1 rounded-full">📈 Grow Sales</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
