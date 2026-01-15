"use client"

import { useEffect, useState } from "react"
import { Store, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AlliedStores() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Cargamos el script de Elfsight solo una vez
    const script = document.createElement("script")
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="tiendas" className="relative py-24 bg-background overflow-hidden transition-all duration-300">
      
      {/* --- EFECTOS DE FONDO --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4 border border-cyan-500/20">
            <Store className="w-4 h-4 inline mr-2" />
            Compra Fácil
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Tiendas Aliadas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
            Accede a las mejores tiendas de USA. Despliega la lista para ver el catálogo completo.
          </p>

          {/* BOTÓN DE ACCIÓN (TOGGLE) */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="outline"
            className={`
              h-12 px-8 rounded-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-background 
              hover:border-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.15)]
              ${isOpen ? "bg-cyan-500/10" : ""}
            `}
          >
            {isOpen ? (
              <>
                Ocultar Tiendas <ChevronUp className="w-5 h-5 ml-2" />
              </>
            ) : (
              <>
                Ver Todas las Tiendas <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
              </>
            )}
          </Button>
        </div>

        {/* CONTENEDOR DESPLEGABLE (WIDGET) */}
        {/* Usamos max-h para animar la altura con CSS puro */}
        <div 
          className={`
            overflow-hidden transition-all duration-700 ease-in-out
            ${isOpen ? "max-h-[3000px] opacity-100 mb-12" : "max-h-0 opacity-0 mb-0"}
          `}
        >
          <div className="flex justify-center bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-sm mx-auto">
             {/* El widget siempre está aquí, solo se oculta visualmente */}
             <div className="elfsight-app-0ba30e8d-d2b0-4084-96f0-be5620543b53 w-full" data-elfsight-app-lazy />
          </div>
          
          {/* Botón secundario para cerrar si bajaste mucho */}
          <div className="text-center mt-8">
            <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                className="text-muted-foreground hover:text-cyan-400"
            >
                <ChevronUp className="w-4 h-4 mr-2" /> Cerrar lista
            </Button>
          </div>
        </div>

        {/* CTA FINAL (Siempre visible) */}
        <div className="text-center border-t border-white/5 pt-8">
          <p className="text-muted-foreground">
            ¿Buscas otra tienda?{" "}
            <a href="#contacto" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 font-medium transition-colors">
              Escríbenos
            </a>{" "}
            y compramos por ti.
          </p>
        </div>

      </div>
    </section>
  )
}
