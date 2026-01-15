"use client"

import { useState, useEffect } from "react"
import { Search, ArrowRight, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const rotatingWords = ["fácil", "Económica", "& segura"]

export function Hero() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  // Efecto para rotar palabras (sin cambios)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // --- NUEVA FUNCIÓN DE RASTREO ---
  const handleTracking = () => {
    // Si el usuario escribió un número, lo mandamos directo a la búsqueda
    if (trackingNumber.trim()) {
      window.open(`https://www.aftership.com/track?t=${trackingNumber}`, '_blank')
    } else {
      // Si está vacío, solo abrimos la página de rastreo general
      window.open('https://www.aftership.com/track', '_blank')
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cargo-ship-containers-port-aerial-view-night.jpg"
          alt="Puerto de contenedores"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm text-muted-foreground">Especialistas en Carga Aérea USA - Colombia</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Con AllPacco Importación
          <br />
          <span className="inline-block min-w-[200px] md:min-w-[300px]">
            <span
              key={currentWordIndex}
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 animate-fade-in"
            >
              {rotatingWords[currentWordIndex]}
            </span>
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
          AllPacco el puente entre el mundo y tu negocio. Envíos aéreos desde Miami con tiempos express de 3-5 días.
        </p>

        {/* Tracking Search Box */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Ingresa tu número de rastreo..."
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  // AÑADIDO: Detectar tecla Enter
                  onKeyDown={(e) => e.key === "Enter" && handleTracking()} 
                  className="w-full h-14 pl-12 pr-4 bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground text-lg rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                />
              </div>
              <Button
                size="lg"
                // AÑADIDO: Evento onClick
                onClick={handleTracking} 
                className="h-14 px-8 bg-cyan-500 hover:bg-cyan-400 text-background font-bold text-lg rounded-xl shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 hover:scale-105 cursor-pointer"
              >
                <Plane className="w-5 h-5 mr-2" />
                Rastrear
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 bg-yellow-400 hover:bg-yellow-300 text-background font-bold rounded-xl border-yellow-400 hover:border-yellow-300 shadow-lg shadow-yellow-500/20"
            >
              Cotiza tu importación
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "50K+", label: "Envíos Aéreos" },
            { value: "3-5", label: "Días de Entrega" },
            { value: "99.8%", label: "Entregas Exitosas" },
            { value: "24/7", label: "Soporte al Cliente" },
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Descubre más</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
