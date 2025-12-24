import React from 'react';
import { trustLogos } from '../data/mock';

const TrustBar = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-10">
          Our DNA — Built by Leaders from
        </p>
        
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Scrolling Logos */}
          <div className="flex items-center justify-center gap-16 animate-scroll">
            {[...trustLogos, ...trustLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <div className="flex items-center justify-center min-w-[120px]">
                  <span className="text-2xl font-bold text-slate-400 hover:text-slate-700 transition-colors">
                    {logo.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
