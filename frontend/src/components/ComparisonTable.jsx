import React from 'react';
import { comparisonData } from '../data/mock';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Competitive Advantage
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Choose Paygenix AI?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how our agentic approach outperforms traditional methods.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-100">
              <div className="p-6">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Feature</span>
              </div>
              <div className="p-6 text-center border-x border-slate-100">
                <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Traditional AI / Manual</span>
              </div>
              <div className="p-6 text-center bg-teal-50">
                <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Paygenix Agentic AI</span>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${
                  index !== comparisonData.length - 1 ? 'border-b border-slate-100' : ''
                } hover:bg-slate-50/50 transition-colors`}
              >
                <div className="p-6 flex items-center">
                  <span className="font-semibold text-slate-900">{row.feature}</span>
                </div>
                <div className="p-6 flex items-center justify-center text-center border-x border-slate-100">
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-slate-500 text-sm">{row.traditional}</span>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-center text-center bg-teal-50/50">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-sm">{row.paygenix}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Join 50+ leading NBFCs who have already made the switch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
