"use client"

import { useEffect } from "react"
import { Store } from "lucide-react"

export function AlliedStores() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="tiendas" className="relative py-24 md:py-32 bg-background overflow-hidden">
      
      {/* --- EFECTOS DE FONDO (Para que se vea profesional) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4 border border-cyan-500/20">
            <Store className="w-4 h-4 inline mr-2" />
            Compra Fácil
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Conoce nuestras
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              tiendas aliadas
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Compra en las mejores tiendas de Estados Unidos y nosotros nos encargamos de traer tus productos hasta la
            puerta de tu casa en Colombia.
          </p>
        </div>

        {/* WIDGET ELFSIGHT (Mantenemos tu widget funcional) */}
        <div className="flex justify-center bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-sm">
          <div className="elfsight-app-0ba30e8d-d2b0-4084-96f0-be5620543b53 w-full" data-elfsight-app-lazy />
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ¿No encuentras tu tienda favorita?{" "}
            <a href="#contacto" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 font-medium transition-colors">
              Contáctanos
            </a>{" "}
            y te ayudamos con tu compra.
          </p>
        </div>
      </div>
    </section>
  )
}
