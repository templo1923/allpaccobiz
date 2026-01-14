// src/components/ServicesSection.js
import React from 'react';
import { Ship, Package, Warehouse } from 'lucide-react';

const services = [
  {
    icon: <Ship size={40} className="text-electric-blue" />,
    title: "Importación",
    description: "Traemos tus productos desde cualquier parte del mundo con eficiencia y seguridad."
  },
  {
    icon: <Package size={40} className="text-electric-blue" />,
    title: "Carga Comercial",
    description: "Soluciones logísticas a gran escala para tu negocio, optimizando costos y tiempos."
  },
  {
    icon: <Warehouse size={40} className="text-electric-blue" />,
    title: "Casillero Virtual",
    description: "Tu propia dirección en EE.UU. para recibir compras y consolidar envíos."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
