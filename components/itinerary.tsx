"use client"

import { useState, useMemo, useEffect } from "react"
import { Plane, Calendar, ChevronLeft, ChevronRight, Clock, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const flightDates2026 = [
  // January
  { date: "2026-01-10", day: "Sábado 10 de enero" },
  { date: "2026-01-17", day: "Sábado 17 de enero" },
  { date: "2026-01-24", day: "Sábado 24 de enero" },
  { date: "2026-01-31", day: "Sábado 31 de enero" },
  // February
  { date: "2026-02-07", day: "Sábado 07 de febrero" },
  { date: "2026-02-14", day: "Sábado 14 de febrero" },
  { date: "2026-02-21", day: "Sábado 21 de febrero" },
  { date: "2026-02-28", day: "Sábado 28 de febrero" },
  // March
  { date: "2026-03-07", day: "Sábado 07 de marzo" },
  { date: "2026-03-14", day: "Sábado 14 de marzo" },
  { date: "2026-03-21", day: "Sábado 21 de marzo" },
  { date: "2026-03-28", day: "Sábado 28 de marzo" },
  // April
  { date: "2026-04-04", day: "Sábado 04 de abril" },
  { date: "2026-04-11", day: "Sábado 11 de abril" },
  { date: "2026-04-18", day: "Sábado 18 de abril" },
  { date: "2026-04-25", day: "Sábado 25 de abril" },
  // May
  { date: "2026-05-02", day: "Sábado 02 de mayo" },
  { date: "2026-05-09", day: "Sábado 09 de mayo" },
  { date: "2026-05-16", day: "Sábado 16 de mayo" },
  { date: "2026-05-23", day: "Sábado 23 de mayo" },
  { date: "2026-05-30", day: "Sábado 30 de mayo" },
  // June
  { date: "2026-06-06", day: "Sábado 06 de junio" },
  { date: "2026-06-13", day: "Sábado 13 de junio" },
  { date: "2026-06-20", day: "Sábado 20 de junio" },
  { date: "2026-06-27", day: "Sábado 27 de junio" },
  // July
  { date: "2026-07-04", day: "Sábado 04 de julio" },
  { date: "2026-07-11", day: "Sábado 11 de julio" },
  { date: "2026-07-18", day: "Sábado 18 de julio" },
  { date: "2026-07-25", day: "Sábado 25 de julio" },
  // August
  { date: "2026-08-01", day: "Sábado 01 de agosto" },
  { date: "2026-08-08", day: "Sábado 08 de agosto" },
  { date: "2026-08-15", day: "Sábado 15 de agosto" },
  { date: "2026-08-22", day: "Sábado 22 de agosto" },
  { date: "2026-08-29", day: "Sábado 29 de agosto" },
  // September
  { date: "2026-09-05", day: "Sábado 05 de septiembre" },
  { date: "2026-09-12", day: "Sábado 12 de septiembre" },
  { date: "2026-09-19", day: "Sábado 19 de septiembre" },
  { date: "2026-09-26", day: "Sábado 26 de septiembre" },
  // October
  { date: "2026-10-03", day: "Sábado 03 de octubre" },
  { date: "2026-10-10", day: "Sábado 10 de octubre" },
  { date: "2026-10-17", day: "Sábado 17 de octubre" },
  { date: "2026-10-24", day: "Sábado 24 de octubre" },
  { date: "2026-10-31", day: "Sábado 31 de octubre" },
  // November
  { date: "2026-11-07", day: "Sábado 07 de noviembre" },
  { date: "2026-11-14", day: "Sábado 14 de noviembre" },
  { date: "2026-11-21", day: "Sábado 21 de noviembre" },
  { date: "2026-11-28", day: "Sábado 28 de noviembre" },
  // December
  { date: "2026-12-05", day: "Sábado 05 de diciembre" },
  { date: "2026-12-12", day: "Sábado 12 de diciembre" },
  { date: "2026-12-19", day: "Sábado 19 de diciembre" },
  { date: "2026-12-26", day: "Sábado 26 de diciembre" },
]

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

export function Itinerary() {
  const [selectedMonth, setSelectedMonth] = useState(0)
  const [today, setToday] = useState("")

  // Establecer fecha actual al cargar (evita errores de servidor/cliente)
  useEffect(() => {
    const now = new Date()
    const dateString = now.toISOString().split('T')[0] // YYYY-MM-DD
    setToday(dateString)
    setSelectedMonth(now.getMonth()) // Selecciona el mes actual por defecto
  }, [])

  const filteredFlights = useMemo(() => {
    const monthStr = String(selectedMonth + 1).padStart(2, "0")
    return flightDates2026.filter((flight) => flight.date.includes(`-${monthStr}-`))
  }, [selectedMonth])

  const handlePrevMonth = () => {
    setSelectedMonth((prev) => (prev === 0 ? 11 : prev - 1))
  }

  const handleNextMonth = () => {
    setSelectedMonth((prev) => (prev === 11 ? 0 : prev + 1))
  }

  // Lógica para determinar el estilo y texto según la fecha
  const getFlightStatus = (flightDate: string) => {
    if (!today) return { status: "loading", label: "Cargando...", color: "text-gray-400", bg: "bg-gray-500/10", dot: "bg-gray-400" }
    
    if (flightDate < today) {
      return { status: "past", label: "Realizado", color: "text-slate-500", bg: "bg-slate-500/10", dot: "bg-slate-500", icon: CheckCircle2 }
    } else if (flightDate === today) {
      return { status: "today", label: "Programado para Hoy", color: "text-yellow-400", bg: "bg-yellow-500/10", dot: "bg-yellow-400 animate-pulse", icon: Clock }
    } else {
      return { status: "future", label: "Programado", color: "text-green-400", bg: "bg-green-500/10", dot: "bg-green-400", icon: Plane }
    }
  }

  return (
    <section id="itinerario" className="py-24 md:py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4 border border-cyan-500/20">
            <Calendar className="w-4 h-4 inline mr-2" />
            Vuelos Comerciales 2026
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Itinerario de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">Vuelos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Todos los sábados despachamos vuelos comerciales desde Miami a Colombia. Planifica mejor tus envíos.
          </p>
        </div>

        {/* Navegación Meses */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={handlePrevMonth} className="border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-cyan-500/30">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="min-w-[200px] text-center">
              <span className="text-2xl font-bold text-foreground">{months[selectedMonth]}</span>
              <span className="text-xl text-muted-foreground ml-2">2026</span>
            </div>
            <Button variant="outline" size="icon" onClick={handleNextMonth} className="border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-cyan-500/30">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Pestañas de Meses */}
        <div className="max-w-4xl mx-auto mb-10 overflow-x-auto pb-2">
          <div className="flex gap-2 justify-center flex-wrap min-w-max md:min-w-0 px-4 md:px-0">
            {months.map((month, index) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedMonth === index
                    ? "bg-cyan-500 text-background shadow-lg shadow-cyan-500/25"
                    : "bg-white/[0.03] text-muted-foreground hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                {month.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        {/* Información de Ruta */}
        <div className="max-w-4xl mx-auto mb-8 p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex justify-center items-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400"/> Miami (MIA)</div>
            <Plane className="w-4 h-4 text-yellow-400 rotate-90 md:rotate-0" />
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400"/> Colombia (BOG/MDE)</div>
        </div>

        {/* Grid de Vuelos */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            {filteredFlights.map((flight, index) => {
              const status = getFlightStatus(flight.date)
              const StatusIcon = status.icon || Plane // Fallback por seguridad

              return (
                <div 
                  key={index}
                  className={`
                    group p-5 rounded-2xl border transition-all duration-300
                    ${status.status === 'past' 
                      ? 'bg-white/[0.01] border-white/5 opacity-60 hover:opacity-100' // Estilo apagado para pasados
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-cyan-500/30 shadow-lg'} // Estilo brillante para futuros
                  `}
                >
                  <div className="flex items-center gap-4">
                    {/* Icono */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${status.status === 'past' ? 'bg-slate-800 text-slate-500' : 'bg-cyan-500/10 text-cyan-400'}`}>
                      <StatusIcon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <p className={`font-semibold ${status.status === 'past' ? 'text-muted-foreground line-through decoration-slate-600' : 'text-foreground'}`}>
                        {flight.day}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Vuelo comercial</span>
                      </div>
                    </div>

                    {/* Badge de Estado */}
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-transparent ${status.bg} ${status.color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                      {status.label}
                    </span>
                  </div>
                </div>
              )
            })}
        </div>

        {/* Estado Vacío */}
        {filteredFlights.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No hay vuelos programados para este mes.</p>
            </div>
        )}

        {/* Nota al pie */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            * Los horarios pueden variar según condiciones operativas.{" "}
            <a href="#contacto" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
              Consulta disponibilidad
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
