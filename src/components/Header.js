// src/components/Header.js
"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavLinks = () => (
  <>
    <a href="#inicio" className="hover:text-electric-blue transition-colors">Inicio</a>
    <a href="#tarifas" className="hover:text-electric-blue transition-colors">Tarifas</a>
    <a href="#blog" className="hover:text-electric-blue transition-colors">Blog</a>
  </>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 bg-black/30 backdrop-blur-lg border-b border-white/10 rounded-b-2xl px-6">
          <a href="#" className="text-2xl font-bold text-white">AllPacco</a>
          
          <nav className="hidden md:flex items-center gap-8 text-white font-medium">
            <NavLinks />
          </nav>

          <a href="#cotizar" className="hidden md:block bg-electric-blue text-slate-900 font-bold px-6 py-2 rounded-lg hover:bg-white transition-colors duration-300">
            Cotiza tu importación
          </a>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-4">
          <div className="flex flex-col items-center gap-4 bg-black/50 backdrop-blur-lg rounded-lg p-6 text-white">
            <NavLinks />
            <a href="#cotizar" className="w-full text-center bg-electric-blue text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-white transition-colors duration-300 mt-4">
              Cotiza tu importación
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
