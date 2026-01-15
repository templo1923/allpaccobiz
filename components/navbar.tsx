"use client"

import { useState } from "react"
import { Menu, X, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  // Enlace directo a tu WhatsApp
  const whatsappLink = "https://wa.me/573104183528?text=Hola%20AllPacco,%20quisiera%20cotizar%20un%20env%C3%ADo."

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* --- LOGO COMPUESTO (Cajita + Tu Imagen Original) --- */}
          <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity focus:outline-none group">
             
             {/* 1. LA CAJITA (Intacta) */}
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:scale-105 transition-transform">
                <Package className="w-6 h-6 text-background" />
             </div>

             {/* 2. TU NUEVO LOGO (Sin filtros de color) */}
             <img 
               // ⚠️ IMPORTANTE: Cambia este nombre por el de tu archivo nuevo (ej: logo-nuevo.png)
               src="/logo-allpacco.png" 
               alt="AllPacco Logística" 
               // Ya NO tiene 'invert' ni 'brightness-0'. Se verá con sus colores originales.
               className="h-14 w-auto object-contain" 
             />
          </a>

          {/* Menú Escritorio */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors">
              Servicios
            </a>
            <a href="#tiendas" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors">
              Tiendas Aliadas
            </a>
            <a href="#tarifas" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors">
              Tarifas
            </a>
            <a href="#itinerario" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors">
              Itinerario
            </a>
            <a href="#blog" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors">
              Blog
            </a>
            <a href="#contacto" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors">
              Contacto
            </a>
            
            {/* Botón de Acción (WhatsApp) */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all transform hover:scale-105">
                Cotizar Ahora
              </Button>
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <button className="lg:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Navegación Móvil */}
        {isOpen && (
          <div className="lg:hidden pb-8 pt-4 space-y-4 border-t border-white/5 animate-in slide-in-from-top-5">
            <a href="#servicios" className="block px-4 py-2 text-lg text-muted-foreground hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
              Servicios
            </a>
            <a href="#tiendas" className="block px-4 py-2 text-lg text-muted-foreground hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
              Tiendas Aliadas
            </a>
            <a href="#tarifas" className="block px-4 py-2 text-lg text-muted-foreground hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
              Tarifas
            </a>
            <a href="#itinerario" className="block px-4 py-2 text-lg text-muted-foreground hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
              Itinerario
            </a>
            <a href="#blog" className="block px-4 py-2 text-lg text-muted-foreground hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
              Blog
            </a>
            <a href="#contacto" className="block px-4 py-2 text-lg text-muted-foreground hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
              Contacto
            </a>
            
            <div className="px-4 pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="w-full h-12 text-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-lg shadow-cyan-500/20">
                  Cotizar Ahora
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
