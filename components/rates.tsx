"use client"

import { useState } from "react"
import { FileText, Search, MapPin, Globe, ChevronDown, Download, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// DATOS DE PAÍSES (Extraídos de tu lista)
const coverageData = [
  {
    region: "América",
    countries: [
      "Argentina", "Bolivia", "Brasil", "Canadá", "Chile", "Colombia", "Costa Rica", "Cuba", 
      "Ecuador", "El Salvador", "Estados Unidos", "Guatemala", "Guyana", "Haití", "Honduras", 
      "Jamaica", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "República Dominicana", 
      "Surinam", "Trinidad y Tobago", "Uruguay", "Venezuela"
    ]
  },
  {
    region: "Europa",
    countries: [
      "Alemania", "Andorra", "Austria", "Bélgica", "Bosnia y Herzegovina", "Bulgaria", "Chipre", 
      "Croacia", "Dinamarca", "Eslovaquia", "Eslovenia", "España", "Estonia", "Finlandia", "Francia", 
      "Grecia", "Hungría", "Irlanda", "Islandia", "Italia", "Letonia", "Liechtenstein", "Lituania", 
      "Luxemburgo", "Malta", "Mónaco"
    ]
  },
  {
    region: "Asia",
    countries: ["China", "India", "Japón", "Corea del Sur"]
  }
]

export function Rates() {
  const [searchTerm, setSearchTerm] = useState("")

  // Lógica de filtrado de países
  const filteredCoverage = coverageData.map(group => ({
    ...group,
    countries: group.countries.filter(c => 
      c.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.countries.length > 0) // Ocultar regiones vacías

  return (
    <section id="tarifas" className="relative py-24 bg-background overflow-hidden">
      
      {/* Fondo Decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4 border border-cyan-500/20">
            <FileText className="w-4 h-4 inline mr-2" />
            Precios Transparentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tarifas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cobertura Global</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce nuestros precios competitivos. Sin costos ocultos, sin sorpresas. 
            Descarga nuestras tarifas o busca tu país de destino.
          </p>
        </div>

        {/* --- ACORDEÓN PRINCIPAL --- */}
        <Accordion type="single" collapsible className="w-full space-y-6">
          
          {/* ITEM 1: TARIFAS (PDF) */}
          <AccordionItem value="tarifas" className="border border-white/10 rounded-2xl bg-white/5 px-6 overflow-hidden data-[state=open]:border-cyan-500/50 transition-all duration-300">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Tarifas 2025</h3>
                  <p className="text-sm text-muted-foreground">Clic para ver o descargar la tabla de precios oficial</p>
                </div>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="pb-6 pt-2">
              <div className="bg-black/40 rounded-xl border border-white/10 overflow-hidden">
                {/* Header del Visor */}
                <div className="flex justify-between items-center p-4 border-b border-white/10 bg-white/5">
                  <span className="text-sm text-muted-foreground">Documento PDF Oficial</span>
                  <a href="/tarifas-allpacco.pdf" download>
                    <Button size="sm" variant="outline" className="h-8 gap-2 border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-400">
                      <Download className="w-4 h-4" /> Descargar
                    </Button>
                  </a>
                </div>
                
                {/* Visor PDF (Iframe) */}
                <div className="w-full h-[500px] bg-white">
                  <iframe 
                    src="/tarifas-allpacco.pdf#toolbar=0" 
                    className="w-full h-full"
                    title="Tarifas AllPacco"
                  />
                </div>
                
                <div className="p-4 text-center bg-white/5">
                   <p className="text-xs text-muted-foreground">
                     * Las tarifas están sujetas a cambios sin previo aviso. Aplican términos y condiciones.
                   </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* ITEM 2: COBERTURA (BUSCADOR) */}
          <AccordionItem value="cobertura" className="border border-white/10 rounded-2xl bg-white/5 px-6 overflow-hidden data-[state=open]:border-cyan-500/50 transition-all duration-300">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Cobertura Internacional</h3>
                  <p className="text-sm text-muted-foreground">Envíos a América, Europa y Asia</p>
                </div>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="pb-8 pt-4">
              
              {/* Buscador */}
              <div className="relative mb-8 max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Buscar país (ej: España, Colombia...)" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 bg-black/20 border-white/10 focus:border-cyan-500/50 rounded-xl text-lg"
                />
              </div>

              {/* Lista de Países Filtrada */}
              {filteredCoverage.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredCoverage.map((group) => (
                    <div key={group.region} className="space-y-4">
                      <h4 className="flex items-center gap-2 font-bold text-cyan-400 border-b border-white/10 pb-2">
                        <MapPin className="w-4 h-4" /> {group.region}
                      </h4>
                      <ul className="space-y-2">
                        {group.countries.map((country) => (
                          <li key={country} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500/50 group-hover:text-cyan-400" />
                            {country}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No encontramos cobertura en "{searchTerm}" por el momento.</p>
                </div>
              )}

            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
    </section>
  )
}
