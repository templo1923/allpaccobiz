import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* Header Simple */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 h-20 flex items-center">
        <div className="max-w-5xl mx-auto w-full px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Volver al Inicio</span>
          </Link>
          <div className="flex items-center gap-2 opacity-80">
            <Shield className="w-5 h-5" />
            <span className="font-bold tracking-wider">PRIVACIDAD</span>
          </div>
        </div>
      </header>

      {/* Contenido Legal */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          
          <div className="text-center mb-12 border-b border-white/10 pb-8">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Política de Privacidad</h1>
            <p className="text-slate-400">Tratamiento de Datos Personales y Habeas Data</p>
          </div>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-justify text-sm md:text-base leading-relaxed">
            
            <p>
              En cumplimiento de la <strong>Ley 1581 de 2012</strong> y el Decreto 1377 de 2013 (Colombia), y demás normas concordantes, 
              <strong> ALLPACCO</strong> informa a sus usuarios, clientes, proveedores y colaboradores sobre su Política de Tratamiento de Datos Personales.
              Nos comprometemos a proteger la privacidad y asegurar el uso adecuado de la información suministrada.
            </p>

            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><Eye className="w-4 h-4 text-cyan-400"/> 1. RESPONSABLE DEL TRATAMIENTO</h3>
                <p><strong>ALLPACCO</strong> actúa como responsable del tratamiento de los datos personales recolectados a través de sus canales digitales, físicos y telefónicos.
                <br/>Dirección: Calle 70ª # 42 - 50, Medellín, Colombia.
                <br/>Correo electrónico: servicioalcliente@allpacco.biz</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">2. DATOS RECOLECTADOS</h3>
                <p>Para la prestación eficiente de nuestros servicios de mensajería y carga internacional, podremos recolectar los siguientes datos:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Datos de identificación (Nombre, Cédula/NIT, Pasaporte).</li>
                  <li>Datos de contacto (Dirección física, Correo electrónico, Teléfono).</li>
                  <li>Información financiera básica necesaria para facturación.</li>
                  <li>Datos del destinatario para la entrega de mercancías.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">3. FINALIDAD DEL TRATAMIENTO</h3>
                <p>Los datos personales serán utilizados exclusivamente para:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Tramitar el envío, transporte y entrega de mercancías y documentos.</li>
                  <li>Realizar procesos de aduana y nacionalización requeridos por ley.</li>
                  <li>Facturación y gestión administrativa.</li>
                  <li>Envío de notificaciones sobre el estado de sus envíos (Tracking).</li>
                  <li>Atención de Peticiones, Quejas, Reclamos y Sugerencias (PQRS).</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">4. DERECHOS DE LOS TITULARES</h3>
                <p>Como titular de los datos, usted tiene derecho a:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Conocer, actualizar y rectificar sus datos personales.</li>
                  <li>Solicitar prueba de la autorización otorgada.</li>
                  <li>Ser informado sobre el uso que se le ha dado a sus datos.</li>
                  <li>Revocar la autorización y/o solicitar la supresión del dato cuando no se respeten los principios legales.</li>
                  <li>Acceder en forma gratuita a sus datos personales.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">5. SEGURIDAD DE LA INFORMACIÓN</h3>
                <p>ALLPACCO implementa medidas técnicas, humanas y administrativas necesarias para otorgar seguridad a los registros, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">6. CAMBIOS EN LA POLÍTICA</h3>
                <p>ALLPACCO se reserva el derecho de modificar esta política en cualquier momento. Cualquier cambio sustancial será comunicado oportunamente a través de nuestro sitio web.</p>
              </section>

              <section className="bg-cyan-500/5 p-6 rounded-xl border border-cyan-500/20 mt-8">
                <h4 className="font-bold text-cyan-400 mb-2">¿Cómo ejercer sus derechos?</h4>
                <p className="mb-0">Para cualquier solicitud relacionada con sus datos personales, puede escribirnos al correo: <a href="mailto:servicioalcliente@allpacco.biz" className="text-white underline">servicioalcliente@allpacco.biz</a></p>
              </section>

            </div>
          </div>
          
          <div className="mt-12 text-center">
             <Link href="/">
                <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                   Volver al Inicio
                </Button>
             </Link>
          </div>

        </div>
      </div>
    </main>
  )
}
