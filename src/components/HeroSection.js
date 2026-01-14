// src/components/HeroSection.js
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-white bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611693343383-a095a56333a3?q=80&w=2070&auto=format&fit=crop"
          alt="Fondo de logística"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 max-w-4xl">
          El puente entre tu negocio y el mundo
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
          Soluciones logísticas para importaciones, carga comercial y casilleros virtuales.
        </p>

        <form onSubmit={(e ) => e.preventDefault()} className="w-full max-w-2xl">
          <div className="relative flex flex-col sm:flex-row items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/20 shadow-lg">
            <input
              type="text"
              placeholder="Ingresa tu # de guía"
              className="w-full sm:flex-1 bg-transparent text-white text-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-electric-blue rounded-lg"
            />
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-electric-blue text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              <span>Rastrear</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
