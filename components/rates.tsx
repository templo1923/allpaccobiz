"use client"

import { useState, useEffect } from "react"
import { 
  FileText, Search, MapPin, Globe, Download, CheckCircle2, 
  Calculator, Scale, Plane, Package, Smartphone, Bike, Ship, Truck, ArrowRight
} from "lucide-react"
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

// 1. DATA DE COBERTURA INTERNACIONAL
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

// 2. DATA DE CIUDADES NACIONALES
const colombiaCities = [
  "Bogotá D.C.", "Medellín", "Cali", "Barranquilla", 
  "Cartagena", "Bucaramanga", "Pereira", "Manizales", 
  "Cúcuta", "Santa Marta", "Ibagué", "Villavicencio"
]

// 3. TARIFAS CALCULADORA
const shippingRates: Record<string, number> = {
  china: 8,
  usa: 6,
  espana: 8
}

// 4. DATA DE SERVICIOS (Aquí están las 5 tarjetas restauradas)
const servicesList = [
  {
    title: "Tarifa COURIER (0-8 lbs)",
    icon: Package, // Cajita 1
    desc: "Ideal para paquetes pequeños y compras personales.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10"
  },
  {
    title: "Tarifa COURIER Plena (+9 lbs)",
    icon: Package, // Cajita 2 (Restaurada segura)
    desc: "La mejor opción para consolidar varias compras en un solo envío.",
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    title: "Carga COMERCIAL",
    icon: Ship,
    desc: "Soluciones B2B para importadores y grandes volúmenes.",
    color: "text-purple-400",
    bg: "bg-purple-500/10"
  },
  {
    title: "Celulares y Laptops",
    icon: Smartphone,
    desc: "Manejo especial para tecnología y dispositivos electrónicos.",
    color: "text-pink-400",
    bg: "bg-pink-500/10"
  },
  {
    title: "Bicicletas",
    icon: Bike,
    desc: "Transporte seguro para tu equipo deportivo de gran tamaño.",
    color: "text-green-400",
    bg: "bg-green-500/10"
  }
]

export function Rates() {
  const [searchTerm, setSearchTerm] = useState("")
  const [weight, setWeight] = useState("")
  const [country, setCountry] = useState("usa")
  const [totalCost, setTotalCost] = useState<number | null>(null)

  const filteredCoverage = coverageData.map(group => ({
    ...group,
    countries: group.countries.filter(c => 
      c.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.countries.length > 0)

  // CALCULADORA: Lógica mejorada anti-negativos
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === "") {
      setWeight("")
      return
    }
    const num = parseFloat(value)
    if (num < 0) return // Ignora valores negativos
    
    setWeight(value)
  }

  useEffect(() => {
    const pounds = parseFloat(weight)
    if (!pounds || isNaN(pounds) || pounds < 0) {
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4 border border-cyan-500/20">
            <FileText className="w-4 h-4 inline mr-2" />
            Servicios Integrales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tarifas, Servicios y <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cobertura Total</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde un celular hasta un contenedor. Calcula tu envío o conoce nuestros servicios especializados.
          </p>
        </div>

        {/* 1. CALCULADORA */}
        <div className="mb-20 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-cyan-500/30 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,229,255,0.05)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Calculator className="w-32 h-32 text-cyan-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                    <Calculator className="w-6 h-6 text-cyan-400" /> Calculadora de Fletes
                </h3>

                <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-slate-300">País de Origen</Label>
                            <Select value={country} onValueChange={setCountry}>
                            <SelectTrigger className="h-12 bg-black/20 border-white/10 text-lg"><SelectValue /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="usa">🇺🇸 Estados Unidos ($6/lb)</SelectItem>
                                <SelectItem value="china">🇨🇳 China ($8/lb)</SelectItem>
                                <SelectItem value="espana">🇪🇸 España ($8/lb)</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-slate-300">Peso (Libras)</Label>
                            <Input 
                              type="number" 
                              min="0"
                              placeholder="Ej: 10" 
                              value={weight} 
                              onChange={handleWeightChange} 
                              className="h-12 bg-black/20 border-white/10 text-lg" 
                            />
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-6 text-center h-full flex flex-col justify-center items-center">
                        {totalCost !== null ? (
                            <div className="animate-in zoom-in duration-300">
                                <p className="text-sm text-cyan-400 uppercase font-bold mb-2">Costo Estimado</p>
                                <div className="text-5xl font-bold text-white mb-2"><span className="text-3xl text-cyan-500">$</span>{totalCost.toFixed(2)}</div>
                                <a href={`https://wa.me/573104183528?text=Hola,%20cotización:%20${weight}lb%20desde%20${country}.`} target="_blank" className="inline-block mt-4">
                                    <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold">Solicitar Envío</Button>
                                </a>
                            </div>
                        ) : (
                            <div className="text-muted-foreground opacity-50"><p>Ingresa los datos para calcular</p></div>
                        )}
                    </div>
                </div>
            </div>
        </div>

        {/* 2. SERVICIOS (LAS 5 TARJETAS) */}
        <div className="mb-20 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-10">Tipos de Tarifas y Carga</h3>
            <div className="flex flex-wrap justify-center gap-6">
                {servicesList.map((item, idx) => {
                    const Icon = item.icon
                    return (
                        <div key={idx} className="group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1">
                            <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <Icon className={`w-7 h-7 ${item.color}`} />
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>

        {/* 3. COBERTURA NACIONAL (LISTA ELEGANTE) */}
        <div className="mb-20 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-950/50 to-slate-950/50 rounded-3xl border border-white/10 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="p-8 md:p-12 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold mb-6 border border-yellow-500/20">
                        <Truck className="w-3 h-3" /> ENVIAMOS A TODA COLOMBIA
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Cobertura Nacional Garantizada</h3>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-10">
                        Llevamos tus paquetes hasta la puerta de tu casa, sin importar en qué ciudad te encuentres. Nuestra red logística cubre el 100% del territorio nacional.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {colombiaCities.map((city, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-4 h-4 text-cyan-400" />
                                </div>
                                <span className="text-sm font-medium text-slate-200">{city}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/5">
                        <p className="text-sm text-slate-400 flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-400" /> Y el resto de municipios del país a través de nuestras aliadas nacionales.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* 4. ACORDEÓN TÉCNICO */}
        <Accordion type="single" collapsible className="w-full space-y-4 max-w-4xl mx-auto">
            <AccordionItem value="cobertura-internacional" className="border border-white/10 rounded-xl bg-white/5 px-4">
                <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3"><Globe className="w-5 h-5 text-purple-400"/> <span className="text-lg font-semibold">Ver Cobertura Internacional Detallada</span></div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                    <div className="relative mb-6 max-w-md mx-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="Buscar país..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 bg-black/20 border-white/10" />
                    </div>
                    {filteredCoverage.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-3">
                            {filteredCoverage.map((group) => (
                                <div key={group.region}>
                                    <h4 className="font-bold text-cyan-400 mb-2 border-b border-white/10 pb-1">{group.region}</h4>
                                    <ul className="space-y-1 text-sm text-slate-400">
                                        {group.countries.map(c => <li key={c}>{c}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : <p className="text-center text-slate-500">Sin resultados.</p>}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pdf-download" className="border border-white/10 rounded-xl bg-white/5 px-4">
                <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3"><Download className="w-5 h-5 text-blue-400"/> <span className="text-lg font-semibold">Descargar Tarifario PDF Oficial</span></div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                    <div className="bg-white h-[500px] rounded-lg overflow-hidden">
                         <iframe src="/tarifas-allpacco.pdf#toolbar=0" className="w-full h-full" title="Tarifas PDF" />
                    </div>
                    <div className="text-center mt-4">
                        <a href="/tarifas-allpacco.pdf" download><Button variant="outline">Descargar Archivo</Button></a>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

      </div>
    </section>
  )
}
