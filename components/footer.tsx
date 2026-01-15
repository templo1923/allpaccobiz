import {
  Package,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Home,
  BookOpen,
  Shield,
  Fingerprint,
} from "lucide-react"

export function Footer() {
  const whatsappLink = "https://wa.me/573104183528?text=Hola%20AllPacco,%20quisiera%20cotizar%20un%20env%C3%ADo."

  return (
    <footer id="contacto" className="border-t border-white/10 bg-white/[0.02]">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">¿Listo para expandir tu negocio?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Obtén una cotización personalizada en menos de 24 horas. Nuestro equipo de expertos está listo para
              ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 bg-cyan-500 hover:bg-cyan-400 text-background font-bold rounded-xl shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 hover:scale-105"
              >
                Solicitar Cotización
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 bg-white/5 hover:bg-white/10 border border-white/10 text-foreground font-semibold rounded-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column (ACTUALIZADO CON LOGO DE IMAGEN) */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* 1. LA CAJITA (Igual que en Navbar) */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <Package className="w-6 h-6 text-background" />
              </div>
              
              {/* 2. TU LOGO DE IMAGEN */}
              <img 
                src="/logo-allpacco.png" 
                alt="AllPacco Logística" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Tu socio estratégico en logística internacional. Conectamos tu negocio con el mundo desde 2014.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Secciones (ACTUALIZADO CON ENLACES LEGALES) */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Secciones</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors">
                  <Home className="w-4 h-4 text-yellow-400" /> Inicio
                </a>
              </li>
              <li>
                <a href="#blog" className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors">
                  <BookOpen className="w-4 h-4 text-yellow-400" /> Blog informativo
                </a>
              </li>
              <li>
                <a href="#contacto" className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors">
                  <MapPin className="w-4 h-4 text-yellow-400" /> Contacto
                </a>
              </li>
              {/* Enlaces Legales Reales */}
              <li>
                <a href="/terminos" className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors">
                  <Shield className="w-4 h-4 text-yellow-400" /> Términos y condiciones
                </a>
              </li>
              <li>
                <a href="/privacidad" className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors">
                  <Fingerprint className="w-4 h-4 text-yellow-400" /> Políticas de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* USA Office */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 flex items-center gap-2">
              <span className="text-lg">🇺🇸</span> Oficina USA
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  8600 NW 17th St, Suite 100
                  <br />
                  Doral, FL 33126
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+13051234567" className="hover:text-cyan-400 transition-colors">
                  +1 (305) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:usa@allpacco.biz" className="hover:text-cyan-400 transition-colors">
                  usa@allpacco.biz
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Lun - Vie: 9am - 6pm EST</span>
              </li>
            </ul>
          </div>

          {/* Colombia Office - ACTUALIZADA CON TU NÚMERO */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 flex items-center gap-2">
              <span className="text-lg">🇨🇴</span> Oficina Colombia
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  Calle 70ª # 42 - 50
                  <br />
                  Medellín, Antioquia
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                {/* Número corregido */}
                <a href="tel:+573104183528" className="hover:text-cyan-400 transition-colors font-bold text-foreground">
                  +57 310 418 3528
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:servicioalcliente@allpacco.biz" className="hover:text-cyan-400 transition-colors">
                  servicioalcliente@allpacco.biz
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Lun - Vie: 8am - 5pm COT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider">
            <p>© 2025 ALLPACCO - Todos los Derechos Reservados.</p>
            <div className="flex gap-4">
               <a href="/privacidad" className="hover:text-cyan-400 transition-colors">Política de Privacidad</a>
               <span className="text-white/20">|</span>
               <a href="/terminos" className="hover:text-cyan-400 transition-colors">Derechos de Usuario</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
