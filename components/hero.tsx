"use client"

import { useState, useEffect, useRef } from "react"
import { Search, ArrowRight, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const rotatingWords = ["fácil", "Económica", "& segura"]

// --- COMPONENTE INTERNO PARA ANIMAR NÚMEROS ---
function AnimatedStat({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [suffix, setSuffix] = useState("")
  const [target, setTarget] = useState(0)
  const [hasDecimal, setHasDecimal] = useState(false)

  useEffect(() => {
    // Expresión regular para separar número (incluso decimal) del texto extra
    // Ejemplo: "99.8%" -> match[1]="99.8", match[3]="%"
    const match = value.match(/^([\d\.]+)(.*)$/)
    if (match) {
      const num = parseFloat(match[1])
      setTarget(num)
      setSuffix(match[2])
      setHasDecimal(match[1].includes("."))
    }
  }, [value])

  useEffect(() => {
    let startTime: number
    const duration = 2000 // Duración de la animación (2 segundos)
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Función de suavizado (Ease Out Expo) para que frene al final
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      
      setDisplayValue(target * easeProgress)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    if (target > 0) {
      requestAnimationFrame(animate)
    }
  }, [target])

  // Formateo final: Si tenía decimal, mostramos 1 decimal. Si no, entero.
  const formattedNumber = hasDecimal 
    ? displayValue.toFixed(1) 
    : Math.round(displayValue).toString()

  return (
    <span>
      {formattedNumber}{suffix}
    </span>
  )
}

export function Hero() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  // Efecto para rotar palabras
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // --- FUNCIÓN DE RASTREO ---
  const handleTracking = () => {
    if (trackingNumber.trim()) {
      window.open(`https://www.aftership.com/track?t=${trackingNumber}`, '_blank')
    } else {
      window.open('https://www.aftership.com/track', '_blank')
    }
  }

  // Link de WhatsApp
  const whatsappLink = "https://wa.me/573104183528?text=Hola%20AllPacco,%20quisiera%20cotizar%20un%20env%C3%ADo."

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36">
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
                  onKeyDown={(e) => e.key === "Enter" && handleTracking()} 
                  className="w-full h-14 pl-12 pr-4 bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground text-lg rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                />
              </div>
              <Button
                size="lg"
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
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 bg-yellow-400 hover:bg-yellow-300 text-background font-bold rounded-xl border-yellow-400 hover:border-yellow-300 shadow-lg shadow-yellow-500/20"
              >
                Cotiza tu importación
              </Button>
            </a>
          </div>
        </div>

        {/* STATS ANIMADOS (Aquí está la magia) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "50K+", label: "Envíos Aéreos" },
            { value: "3-5", label: "Días de Entrega" },
            { value: "99.8%", label: "Entregas Exitosas" },
            { value: "24/7", label: "Soporte al Cliente" },
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1 tabular-nums">
                {/* Usamos nuestro nuevo componente animado */}
                <AnimatedStat value={stat.value} />
              </div>
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
