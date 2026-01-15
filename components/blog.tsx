"use client"

import { ArrowRight, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const posts = [
  {
    title: "Guía completa para importar desde USA a Colombia 2024",
    excerpt: "Todo lo que necesitas saber sobre aranceles, documentación y tiempos de entrega para tus importaciones.",
    image: "/shipping-containers-cargo-logistics.jpg",
    category: "Guías",
    author: "AllPacco Team",
    date: "15 Dic 2024",
    readTime: "8 min",
  },
  {
    title: "¿Cómo funciona el casillero virtual?",
    excerpt: "Aprende a usar tu dirección en Miami para comprar en cualquier tienda de Estados Unidos.",
    image: "/mailbox-packages-delivery.jpg",
    category: "Tutorial",
    author: "AllPacco Team",
    date: "10 Dic 2024",
    readTime: "5 min",
  },
  {
    title: "Tips para ahorrar en tus envíos internacionales",
    excerpt: "Descubre cómo consolidar tus paquetes y reducir costos en tus próximas compras online.",
    image: "/savings-money-packages-shopping.jpg",
    category: "Tips",
    author: "AllPacco Team",
    date: "5 Dic 2024",
    readTime: "4 min",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              Recursos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              Nuestro
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">Blog</span>
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-white/20 text-foreground hover:bg-white/5 self-start md:self-auto bg-transparent"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500 text-background">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
