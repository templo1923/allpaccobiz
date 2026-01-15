"use client"

import { useState } from "react"
import { Menu, X, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  // Enlace directo a tu WhatsApp
  const whatsappLink = "https://wa.me/573104183528?text=Hola%20AllPacco,%20quisiera%20cotizar%20un%20env%C3%ADo."

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <Package className="w-6 h-6 text-background" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              All<span className="text-cyan-400">Pacco</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#tiendas" className="text-muted-foreground hover:text-foreground transition-colors">
              Tiendas Aliadas
            </a>
            <a href="#tarifas" className="text-muted-foreground hover:text-foreground transition-colors">
              Tarifas
            </a>
            <a href="#itinerario" className="text-muted-foreground hover:text-foreground transition-colors">
              Itinerario
            </a>
            <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
            {/* Botón de Escritorio actualizado */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-background font-semibold px-6 shadow-lg shadow-cyan-500/25">
                Cotizar Ahora
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            <a href="#servicios" className="block text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#tiendas" className="block text-muted-foreground hover:text-foreground transition-colors">
              Tiendas Aliadas
            </a>
            <a href="#tarifas" className="block text-muted-foreground hover:text-foreground transition-colors">
              Tarifas
            </a>
            <a href="#itinerario" className="block text-muted-foreground hover:text-foreground transition-colors">
              Itinerario
            </a>
            <a href="#blog" className="block text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#contacto" className="block text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
            {/* Botón Móvil actualizado */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-background font-semibold shadow-lg shadow-cyan-500/25">
                Cotizar Ahora
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
