"use client"

import { useState } from "react"
import { FileText, Calculator, ArrowRight, ChevronDown, MapPin, Package, Plane, Smartphone, Bike } from "lucide-react"
import { Button } from "@/components/ui/button"

const coverageItems = [
  {
    title: "Cobertura Nacional Colombia",
    icon: MapPin,
    content:
      "Entregamos en todas las ciudades principales: Bogotá, Medellín, Cali, Barranquilla, Cartagena, Bucaramanga, Pereira, y más de 1,000 municipios en todo el país.",
  },
  {
    title: "Tarifa COURIER (0-8 libras)",
    icon: Package,
    content:
      "Carga de 0-2 libras: $25.00 USD | Carga de 3-8 libras: $35.00 USD. Incluye seguro para mercancía entre 1-100 USD. Entrega en Medellín TODO INCLUIDO.",
  },
  {
    title: "Tarifa COURIER Plena (+9 libras)",
    icon: Package,
    content:
      "Medellín: $6.00 USD x libra + Seguro 5% (TODO INCLUIDO). Resto del país: $7.00 USD x libra + Seguro 5%. Para tecnología y bicicletas consultar con asesor.",
  },
  {
    title: "Carga COMERCIAL",
    icon: Plane,
    content:
      "Libra a $6.00 USD + seguro. Tarifa mínima: $60.00 USD (hasta 10 libras). Puede consolidar hasta 2 vuelos (máx. 15 días). Más de 6 unidades por referencia permitidas.",
  },
  {
    title: "Celulares, Laptops y Tablets",
    icon: Smartphone,
    content:
      "Manejo especial según gama (alta, baja o usado). Tiempos de entrega: 12-20 días hábiles. Precios cotizados individualmente. Consulta con tu asesor antes de enviar.",
  },
  {
    title: "Bicicletas",
    icon: Bike,
    content:
      "Tarifa: $6.00 USD por libra + $25.00 USD de seguro obligatorio por bicicleta. El seguro cubre pérdida total, no daños.",
  },
]

export function Rates() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  return (
    <section id="tarifas" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Precios Transparentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Conoce <span className="font-black">nuestras</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              tarifas y cobertura
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conoce nuestros precios competitivos. Sin costos ocultos, sin sorpresas.
          </p>
        </div>

        <div className="mb-16">
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Tarifas AllPacco 2025</h3>
                <p className="text-sm text-muted-foreground">Documento oficial de tarifas actualizado</p>
              </div>
            </div>

            <div className="w-full aspect-[8.5/11] md:aspect-[8.5/8] rounded-xl overflow-hidden bg-background/50">
              <iframe
                src="https://blobs.vusercontent.net/blob/TARIFAS-ALLPACCO-2-%20%281%29-7TfpjHTAtp9vi10AUGwJhk56L00ijF.pdf#toolbar=0&navpanes=0&scrollbar=1"
                className="w-full h-full border-0"
                title="Tarifas AllPacco"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              COBERTURA ALLPACCO
            </span>
          </h3>

          <div className="max-w-3xl mx-auto space-y-3">
            {coverageItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-300 hover:border-cyan-500/30"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="font-semibold text-foreground">{item.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      openAccordion === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5 pl-19">
                    <p className="text-muted-foreground leading-relaxed pl-14">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
              <Calculator className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">¿Quieres calcular tu envío?</h3>
              <p className="text-muted-foreground">Usa nuestra calculadora para obtener una cotización instantánea.</p>
            </div>
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-400 text-background font-semibold px-8 shadow-lg shadow-cyan-500/25">
            Calcular Envío
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
