import React from 'react';
import { aiSuperpowers } from '../data/mock';
import { Zap, Bot, TrendingUp } from 'lucide-react';

const iconMap = {
  Zap: Zap,
  Bot: Bot,
  TrendingUp: TrendingUp
};

const AISuperPowers = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            AI Superpowers
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Transform Your Underwriting
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Leverage cutting-edge agentic AI to revolutionize your credit decisioning process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aiSuperpowers.map((power, index) => {
            const IconComponent = iconMap[power.icon];
            return (
              <div
                key={power.id}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-teal-200 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {power.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {power.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-teal-500/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AISuperPowers;
