import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { AlliedStores } from "@/components/allied-stores"
import { Rates } from "@/components/rates"
import { Itinerary } from "@/components/itinerary"
import { Blog } from "@/components/blog"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <AlliedStores />
      <Rates />
      <Itinerary />
      <Blog />
      <Footer />
    </main>
  )
}
