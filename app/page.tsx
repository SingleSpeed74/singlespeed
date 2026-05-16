export default function SingleSpeedStore() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-zinc-400 mb-4">
              SingleSpeed
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Button Temperature Gauge Kit
            </h1>

            <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-xl">
              Gauge température pour Nissan S13 style OEM se monte en lieu et place. Le kit contient une gauge de température, les câbles de branchement et l'écran pour la lecture de données.
            </p>

            <div className="flex items-center gap-4 mb-10">
              <span className="text-4xl font-bold">110€</span>
              <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm text-zinc-300">
                Shipping worldwide
              </span>
            </div>

            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform">
              Order now
            </button>
          </div>

          <div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-8">
                Configure your gauge
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Temperature Unit
                  </label>

                  <select className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-white">
                    <option>Celsius (°C)</option>
                    <option>Fahrenheit (°F)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Opening Design
                  </label>

                  <select className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-white">
                    <option>180SX</option>
                    <option>PS13</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Fluid Type
                  </label>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-zinc-800 border border-zinc-700 rounded-2xl py-4 hover:border-white transition-colors">
                      Water
                    </button>

                    <button className="bg-zinc-950 border border-zinc-700 rounded-2xl py-4 hover:border-white transition-colors">
                      Oil
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Order Notes (optional)
                  </label>

                  <textarea
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 min-h-[120px] outline-none focus:border-white"
                    placeholder="Add your specific request..."
                  />
                </div>

                <div className="space-y-4 mb-6">
                  <input placeholder="Full name" className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3" />
                  <input placeholder="Email" className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3" />
                  <input placeholder="Phone (optional)" className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3" />
                  <input placeholder="Address" className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3" />
                  <input placeholder="Postal code" className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3" />
                  <input placeholder="City" className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3" />
                  <input placeholder="Country" className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3" />
                </div>

                <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-transform">
                  Request your kit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h3 className="text-xl font-semibold mb-3">
              Customizable
            </h3>
            <p className="text-zinc-400">
              Multiple configuration options to fit your build.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h3 className="text-xl font-semibold mb-3">
              Compact Design
            </h3>
            <p className="text-zinc-400">
              Clean and minimal format for custom interiors.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h3 className="text-xl font-semibold mb-3">
              Built for Enthusiasts
            </h3>
            <p className="text-zinc-400">
              Designed for automotive projects and custom setups.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
