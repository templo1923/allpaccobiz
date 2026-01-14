// src/components/Footer.js
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Columna 1: Logo y Resumen */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">AllPacco</h3>
            <p className="text-slate-400">Conectando tu negocio con el mundo a través de soluciones logísticas confiables y tecnológicas.</p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="hover:text-electric-blue transition-colors">Servicios</a></li>
              <li><a href="#tarifas" className="hover:text-electric-blue transition-colors">Tarifas</a></li>
              <li><a href="#rastreo" className="hover:text-electric-blue transition-colors">Rastrea tu envío</a></li>
              <li><a href="#blog" className="hover:text-electric-blue transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <p className="font-semibold">Doral, FL, USA</p>
            <p className="mt-2">
              <a href="tel:+1-XXX-XXX-XXXX" className="hover:text-electric-blue transition-colors">
                <span className="font-bold text-slate-400">USA:</span> +1 (XXX) XXX-XXXX
              </a>
            </p>
            <p>
              <a href="tel:+57-XXX-XXX-XXXX" className="hover:text-electric-blue transition-colors">
                <span className="font-bold text-slate-400">COL:</span> +57 (XXX) XXX-XXXX
              </a>
            </p>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h4 className="font-bold text-white mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-electric-blue transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-slate-400 hover:text-electric-blue transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-slate-400 hover:text-electric-blue transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} AllPacco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
