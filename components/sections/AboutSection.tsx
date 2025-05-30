import { Users, Heart, ShoppingBag, Store } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl font-medium text-gray-800">We&apos;ve all been there... 🚶‍♀️</p>
            <p>
              Walking from shop to shop under the hot sun, asking &quot;Do you have this?&quot; only to hear
              &quot;Sorry, we&apos;re out of stock.&quot; The frustration. The wasted time. The tired feet. We felt it
              too.
            </p>
            <p>
              And we saw the other side - hardworking shop owners with amazing products, waiting for customers who
              didn&apos;t know they existed. So close, yet so far apart.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl flex items-center justify-center shadow-xl">
              <Users className="h-24 w-24 text-gray-400" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div className="text-center py-12 bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl mb-16">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-primary bg-clip-text text-transparent mb-6">
            So we built something beautiful ✨
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two apps that bring people together, making life easier for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-orange-600">FajiBuy</h4>
                <p className="text-gray-600">For amazing customers like you</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Chat directly with local shops. Ask questions. Place orders. Choose pickup or delivery. No more guessing
              games - just simple, friendly conversations with your neighborhood stores.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                <Store className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-green-600">FajiBusiness</h4>
                <p className="text-gray-600">For hardworking business owners</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Get online instantly. Connect with real customers nearby. Answer questions, showcase products, and grow
              your business - all from your phone. No websites needed.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl font-medium text-gray-800 mb-4">Why &quot;Faji&quot;? 🤔</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Because we believe life should be <span className="font-semibold text-orange-600">easier</span>,
            <span className="font-semibold text-blue-600"> smoother</span>, and
            <span className="font-semibold text-green-600"> more joyful</span> - whether you&apos;re buying or selling.
            We&apos;re here to bring people together, one conversation at a time.
          </p>
        </div>
      </div>
    </section>
  )
}
