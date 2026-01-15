"use client"

import { Plane, Package, ArrowRight, Globe, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Plane,
    title: "Carga Aérea",
    description:
      "Envíos urgentes con tiempos de tránsito reducidos. Ideal para mercancía de alto valor o entregas time-sensitive desde USA a Colombia.",
    features: ["Express 3-5 días", "Handling Especial", "Door to Door", "Despacho Aduanero"],
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Package,
    title: "Casillero Virtual",
    description:
      "Tu dirección en Miami para compras online. Consolida tus paquetes y ahorra hasta un 70% en envíos internacionales.",
    features: ["Dirección USA Gratis", "Consolidación", "Reenvío a Colombia"],
    color: "from-cyan-300 to-cyan-500",
  },
]

const benefits = [
  {
    icon: Globe,
    title: "Cobertura Global",
    description: "Presencia en +25 países",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Tu carga siempre protegida",
  },
  {
    icon: Clock,
    title: "Tiempo Real",
    description: "Tracking 24/7",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Carga Aérea
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              USA - Colombia
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Especialistas en transporte aéreo de mercancía. Desde tu paquete personal hasta carga comercial, llegamos a
            toda Colombia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-background" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="group/btn text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0"
                >
                  Cotizar Ahora
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Row */}
        <div className="grid sm:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                <benefit.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
