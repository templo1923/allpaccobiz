import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { FloatingCTA } from "@/components/floating-cta" // <--- 1. IMPORTADO CORRECTAMENTE

const inter = Inter({ subsets: ["latin"] })
const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AllPacco - Logística Internacional | Importación, Carga y Casillero Virtual",
  description:
    "Tu socio estratégico en logística internacional. Importación marítima, carga aérea y casillero virtual desde USA. Conectamos tu negocio con el mundo.",
  keywords: [
    "logística internacional",
    "importación",
    "casillero virtual",
    "carga aérea",
    "envíos desde USA",
    "AllPacco",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} font-sans antialiased bg-slate-950 text-slate-50`}>
        
        {/* Aquí va el contenido principal de tu web */}
        {children}
        
        {/* --- AQUÍ FALTABA AGREGAR EL COMPONENTE --- */}
        <FloatingCTA />
        
        {/* Analytics (Ya que lo importaste, es bueno ponerlo) */}
        <Analytics />
        
      </body>
    </html>
  )
}
