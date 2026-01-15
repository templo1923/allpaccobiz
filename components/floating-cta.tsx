"use client"

import { MessageCircle, X } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappLink = "https://wa.me/573104183528?text=Hola%20AllPacco,%20necesito%20asesor%C3%ADa%20con%20un%20env%C3%ADo."

  // Efecto para que aparezca suavemente después de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-10 duration-700">
      
      {/* Globo de texto (Tooltip) */}
      <div className="relative mr-2 bg-white text-slate-900 px-4 py-2 rounded-xl rounded-tr-none shadow-xl border border-cyan-100 hidden md:block">
        <p className="text-sm font-bold flex items-center gap-2">
          👋 ¿Necesitas ayuda?
        </p>
        <span className="absolute -right-2 top-0 w-0 h-0 border-t-[10px] border-t-white border-r-[10px] border-r-transparent"></span>
      </div>

      {/* Botón Principal */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-transform hover:scale-110 active:scale-95"
      >
        {/* Anillo de animación (Radar) */}
        <span className="absolute -inset-1 rounded-full bg-cyan-400 opacity-75 animate-ping duration-[2s]"></span>
        
        {/* Punto de notificación (Rojo) */}
        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 border-2 border-slate-900 z-10"></span>

        {/* Icono */}
        <MessageCircle className="relative z-10 h-8 w-8 text-white fill-white/20" />
      </a>
    </div>
  )
}
