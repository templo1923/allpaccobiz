// src/components/TrustBar.js
import React from 'react';
// Asume que tienes estos logos como componentes SVG en /components/icons
// import AmazonLogo from './icons/AmazonLogo';
// import EbayLogo from './icons/EbayLogo';
// import WalmartLogo from './icons/WalmartLogo';

// Placeholder para logos
const LogoPlaceholder = ({ name }) => <span className="text-2xl font-semibold">{name}</span>;

const TrustBar = () => {
  const stats = [
    { value: "25+", label: "Años de experiencia" },
    { value: "+10,000", label: "Envíos completados" },
    { value: "Global", label: "Cobertura" },
  ];

  const logos = ["Amazon", "eBay", "Walmart", "AliExpress", "MercadoLibre", "Shopify"];
  const extendedLogos = [...logos, ...logos]; // Duplicar para efecto marquee

  return (
    <div className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl font-bold text-electric-blue">{stat.value}</p>
              <p className="text-base text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {extendedLogos.map((name, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-12 flex justify-center items-center text-slate-500 hover:text-white transition-colors">
                <LogoPlaceholder name={name} />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900"></div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
