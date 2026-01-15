"use client"

export function TrustBar() {
  const brands = ["Amazon", "eBay", "Walmart", "Alibaba", "AliExpress", "Target"]

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
          Conectamos tu negocio con los principales marketplaces
        </p>

        {/* Infinite scroll animation */}
        <div className="relative">
          <div className="flex animate-marquee gap-16">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-2xl font-bold text-muted-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
