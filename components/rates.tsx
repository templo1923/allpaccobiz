"use client"

import { useState, useEffect } from "react"
import { FileText, Search, MapPin, Globe, Download, CheckCircle2, Calculator, Scale, Plane, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// 1. DATA DE COBERTURA (Tu lista de países)
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

// 2. TARIFAS POR PAÍS (Tus precios oficiales)
const shippingRates: Record<string, number> = {
  china: 8,
  usa: 6,
  espana: 8
}

export function Rates() {
  // Estados para el Buscador de Cobertura
  const [searchTerm, setSearchTerm] = useState("")

  // Estados para la Calculadora
  const [weight, setWeight] = useState("")
  const [country, setCountry] = useState("usa")
  const [totalCost, setTotalCost] = useState<number | null>(null)

  // Lógica de filtrado de países (Cobertura)
  const filteredCoverage = coverageData.map(group => ({
    ...group,
    countries: group.countries.filter(c => 
      c.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.countries.length > 0)

  // Lógica de la Calculadora (Efecto automático)
  useEffect(() => {
    const pounds = parseFloat(weight)
    if (!pounds || isNaN(pounds)) {
      setTotalCost(null)
      return
    }
    const rate = shippingRates[country]
    setTotalCost(pounds * rate)
  }, [weight, country])

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
            Tarifas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Calculadora</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcula el costo exacto de tu envío en segundos, descarga nuestras tarifas oficiales o verifica nuestra cobertura global.
          </p>
        </div>

        {/* --- ACORDEÓN PRINCIPAL --- */}
        <Accordion type="single" collapsible defaultValue="calculadora" className="w-full space-y-6">
          
          {/* ITEM 1: CALCULADORA (NUEVO) - Abierto por defecto */}
          <AccordionItem value="calculadora" className="border border-cyan-500/30 rounded-2xl bg-white/5 px-6 overflow-hidden data-[state=open]:border-cyan-500 data-[state=open]:shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-all duration-300">
            <AccordionTrigger className="hover:no-underline py-6 group">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">Calculadora de Fletes</h3>
                  <p className="text-sm text-muted-foreground">Cotiza tu envío desde China, USA o España</p>
                </div>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="pb-8 pt-2">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                
                {/* Controles de la Calculadora */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-slate-300 flex items-center gap-2">
                      <Plane className="w-4 h-4 text-cyan-400" /> País de Origen
                    </Label>
                    <Select value={country} onValueChange={setCountry}>
                      <SelectTrigger className="h-12 bg-black/20 border-white/10 text-lg">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usa">🇺🇸 Estados Unidos ($6/lb)</SelectItem>
                        <SelectItem value="china">🇨🇳 China ($8/lb)</SelectItem>
                        <SelectItem value="espana">🇪🇸 España ($8/lb)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-slate-300 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-cyan-400" /> Peso en Libras (lb)
                    </Label>
                    <Input 
                      type="number" 
                      placeholder="Ej: 10" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="h-12 bg-black/20 border-white/10 text-lg"
                    />
                  </div>
                </div>

                {/* Resultado Visual */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl p-6 text-center h-full flex flex-col justify-center items-center relative overflow-hidden">
                   {totalCost !== null ? (
                     <div className="animate-in zoom-in duration-300">
                        <p className="text-sm text-cyan-400 uppercase tracking-widest font-semibold mb-2">Costo Estimado</p>
                        <div className="flex items-center justify-center text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">
                          <span className="text-3xl text-cyan-500 mr-1">$</span>
                          {totalCost.toFixed(2)}
                        </div>
                        <p className="text-xs text-slate-400">
                          *Tarifa de {country === 'usa' ? 'USA' : country === 'china' ? 'China' : 'España'} aplicada: ${shippingRates[country]}/lb
                        </p>
                     </div>
                   ) : (
                     <div className="text-muted-foreground opacity-50">
                        <Calculator className="w-12 h-12 mx-auto mb-2" />
                        <p>Ingresa el peso para calcular</p>
                     </div>
                   )}
                </div>

              </div>
              
              {/* Botón de acción */}
              {totalCost !== null && (
                 <div className="mt-8 text-center">
                    <a href={`https://wa.me/573104183528?text=Hola,%20coticé%20un%20envío%20de%20${weight}lb%20desde%20${country.toUpperCase()}%20por%20$${totalCost}.%20Quiero%20más%20info.`} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform">
                        Solicitar este envío ahora
                      </Button>
                    </a>
                 </div>
              )}
            </AccordionContent>
          </AccordionItem>

          {/* ITEM 2: TARIFAS PDF */}
          <AccordionItem value="tarifas-pdf" className="border border-white/10 rounded-2xl bg-white/5 px-6 overflow-hidden data-[state=open]:border-cyan-500/50 transition-all duration-300">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Tarifas Oficiales 2025 (PDF)</h3>
                  <p className="text-sm text-muted-foreground">Descarga la lista completa de precios y condiciones</p>
                </div>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="pb-6 pt-2">
              <div className="bg-black/40 rounded-xl border border-white/10 overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b border-white/10 bg-white/5">
                  <span className="text-sm text-muted-foreground">Documento Oficial</span>
                  <a href="/tarifas-allpacco.pdf" download>
                    <Button size="sm" variant="outline" className="h-8 gap-2 border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-400">
                      <Download className="w-4 h-4" /> Descargar PDF
                    </Button>
                  </a>
                </div>
                <div className="w-full h-[500px] bg-white">
                  <iframe 
                    src="/tarifas-allpacco.pdf#toolbar=0" 
                    className="w-full h-full"
                    title="Tarifas AllPacco"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* ITEM 3: COBERTURA */}
          <AccordionItem value="cobertura" className="border border-white/10 rounded-2xl bg-white/5 px-6 overflow-hidden data-[state=open]:border-cyan-500/50 transition-all duration-300">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Cobertura Internacional</h3>
                  <p className="text-sm text-muted-foreground">Busca tu país de destino (América, Europa, Asia)</p>
                </div>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="pb-8 pt-4">
              <div className="relative mb-8 max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Escribe un país (ej: Colombia, España...)" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 bg-black/20 border-white/10 focus:border-cyan-500/50 rounded-xl text-lg"
                />
              </div>

              {filteredCoverage.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredCoverage.map((group) => (
                    <div key={group.region} className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                      <h4 className="flex items-center gap-2 font-bold text-cyan-400 border-b border-white/10 pb-2">
                        <MapPin className="w-4 h-4" /> {group.region}
                      </h4>
                      <ul className="space-y-2">
                        {group.countries.map((country) => (
                          <li key={country} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group cursor-default">
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
                  <p>No encontramos resultados para "{searchTerm}"</p>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  )
}
