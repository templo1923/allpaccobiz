import Link from "next/link"
import { ArrowLeft, FileText, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
            <Scale className="w-5 h-5" />
            <span className="font-bold tracking-wider">LEGAL</span>
          </div>
        </div>
      </header>

      {/* Contenido Legal */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          
          <div className="text-center mb-12 border-b border-white/10 pb-8">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Términos y Condiciones</h1>
            <p className="text-slate-400">Contrato de Mensajería Expresa y Prestación de Servicios Postales</p>
          </div>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-justify text-sm md:text-base leading-relaxed">
            
            <p>
              Entre <strong>ALLPACCO</strong>, y el remitente se ha celebrado, mediante este documento, un contrato de Mensajería Expresa. 
              Se considera también que para la prestación del servicio postal de mensajería las condiciones que acuerdan los contratantes 
              son las previstas en las normas que regulan los servicios postales, lo contemplado en el Código de Comercio para el contrato 
              de transporte en lo que le sea aplicable, los Acuerdos y Convenios Internacionales vigentes ratificados por Colombia sobre estas materias.
            </p>

            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-bold text-white mb-2">PRIMERA. - OBJETO</h3>
                <p>El objeto del presente contrato será la prestación del servicio postal el cual consiste en el desarrollo de las actividades de recepción, clasificación, transporte y entrega de objetos postales cuyo peso sea inferior al señalado por las normas postales, a través de redes postales, dentro del país o para envío hacia otros países o recepción desde el exterior, relacionados con un envío debidamente identificado.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">SEGUNDA. - PRECIO Y FORMA DE PAGO</h3>
                <p>Será el que se señale en la guía y/o en la factura que se expida para el efecto.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">TERCERA. - PLAZO Y ENTREGA</h3>
                <p>El plazo máximo y condiciones para la entrega de los objetos postales se pactarán de acuerdo a lo dispuesto en el Parágrafo 1 del Artículo 6 de la Resolución 3095 de 2011 proferida por la Comisión de Regulación de Comunicaciones (CRC) y las normas que las modifiquen, adicionen o complementen.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">CUARTA. - OBLIGACIONES DEL OPERADOR</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Suministrar información precisa y actualizada acerca de los servicios, tarifas, cobertura, tiempos de entrega y trámite de PQRS.</li>
                  <li>Establecer procedimientos claros para el trámite de PQRS e indemnizaciones (Ley 1369 de 2009, Res. 3038 de 2011).</li>
                  <li>Prestar el Servicio Postal sin discriminación alguna.</li>
                  <li>Reparar a los usuarios en casos de pérdida, expoliación o avería según el régimen de indemnizaciones vigente.</li>
                  <li>Prestar el servicio con calidad e idoneidad y bajo las condiciones ofrecidas.</li>
                  <li>Establecer mecanismos de atención preferencial a personas con discapacidad, mujeres gestantes y adultos mayores.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">QUINTA. - OBLIGACIONES DEL USUARIO</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Declarar el valor real y el contenido real del objeto postal.</li>
                  <li>Hacer uso adecuado de la red postal según la normatividad vigente.</li>
                  <li>Verificar si el objeto requiere embalaje especial.</li>
                  <li>Identificarse con documento válido (CC, CE, Pasaporte) ante el operador.</li>
                  <li>No enviar objetos prohibidos por normas postales o reglamentos internos.</li>
                  <li>Suministrar datos idóneos del remitente y destinatario (incluyendo código postal).</li>
                  <li>Aceptar que la entrega se realiza a mayores de 18 años (salvo autorización expresa para mayores de 12).</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">SEXTA. - DERECHOS DEL USUARIO</h3>
                <p>Incluyen: prestación del servicio conforme a lo pactado, secreto e inviolabilidad de las comunicaciones, respeto a la intimidad, neutralidad, igualdad de trato, indemnización por pérdida/avería, devolución de objetos no entregados, y demás derechos contemplados en la ley colombiana y convenios internacionales.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">SÉPTIMA. - INCUMPLIMIENTO DEL OPERADOR</h3>
                <p>Se considera incumplimiento no dar cumplimiento a las condiciones ofrecidas y a las características inherentes o propias de cada servicio.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">OCTAVA. - EXONERACIÓN DE RESPONSABILIDAD</h3>
                <p>El operador se exonera en eventos de caso fortuito o fuerza mayor, incluyendo: decisiones de autoridades (distintas a aduaneras/policía), cierre de puertos/vías, condiciones climatológicas y causa extraña.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">NOVENA. - TRÁMITE DE PQRS</h3>
                <p>El usuario podrá presentar PQRS a través de: a) Página Web del Operador, b) Línea telefónica, c) Oficinas físicas. Solicitudes no relacionadas con el curso del envío no se consideran PQR postal.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">DÉCIMA SEGUNDA. - CLÁUSULA COMPROMISORIA</h3>
                <p>Las diferencias se tramitarán por vía directa (arreglo directo en 30 días). Si no hay acuerdo, se someterán a un tribunal de arbitramento de la Cámara de Comercio de Bogotá.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">CANALES DE ATENCIÓN</h3>
                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                  <p><strong>Oficina única Medellín:</strong> Calle 70ª # 42 - 50, Medellín (C.P. 050010)</p>
                  <p><strong>PBX:</strong> 604 252 6906</p>
                  <p><strong>Celular:</strong> +57 310 418 3528</p>
                  <p><strong>Email:</strong> servicioalcliente@allpacco.biz</p>
                  <p><strong>Web:</strong> www.allpacco.biz</p>
                </div>
              </section>

              <section className="text-xs text-slate-500 mt-8 border-t border-white/5 pt-4">
                <p>Vigilado por MinTIC y Superintendencia de Industria y Comercio (SIC). Resolución CRC 3038 de 2011.</p>
              </section>

            </div>
          </div>
          
          <div className="mt-12 text-center">
             <Link href="/">
                <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold">
                   Aceptar y Volver al Inicio
                </Button>
             </Link>
          </div>

        </div>
      </div>
    </main>
  )
}
