import React, { useState } from 'react';
import { losFeatures } from '../data/mock';
import { Sparkles, Cpu, FileText, ChevronRight } from 'lucide-react';

const iconMap = {
  copilot: Sparkles,
  autopilot: Cpu,
  cam: FileText
};

const LOSSuite = () => {
  const [activeFeature, setActiveFeature] = useState(losFeatures[0].id);

  const activeData = losFeatures.find(f => f.id === activeFeature);

  return (
    <section id="los-suite" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold mb-4">
            LOS Suite
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            The LOS Suite for You
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose your level of automation — from AI-assisted to fully autonomous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature List */}
          <div className="space-y-4">
            {losFeatures.map((feature) => {
              const IconComponent = iconMap[feature.id];
              const isActive = activeFeature === feature.id;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-900'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isActive ? 'bg-teal-500' : 'bg-white group-hover:bg-teal-50'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        isActive ? 'text-white' : 'text-teal-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold">{feature.title}</h3>
                        <ChevronRight className={`w-5 h-5 transition-transform ${
                          isActive ? 'rotate-90 text-teal-400' : 'text-slate-400'
                        }`} />
                      </div>
                      <p className={`text-sm leading-relaxed ${
                        isActive ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Screenshot Preview */}
          <div className="sticky top-32">
            <div className="relative bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              {/* Screenshot Mock */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="p-6 h-full flex flex-col">
                  {/* Mock Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-slate-700 rounded-lg h-8 flex items-center px-4">
                      <span className="text-slate-400 text-xs">paygenix.ai/dashboard/{activeData?.id}</span>
                    </div>
                  </div>

                  {/* Dynamic Content Based on Feature */}
                  <div className="flex-1 bg-slate-800/50 rounded-xl p-6">
                    {activeFeature === 'copilot' && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-teal-400">
                          <Sparkles className="w-5 h-5" />
                          <span className="font-semibold">Co-Pilot Mode Active</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-slate-700/50 rounded-lg">
                            <p className="text-xs text-slate-400 mb-1">Transaction Flag</p>
                            <p className="text-sm text-white">High-Value Transfer</p>
                            <div className="flex gap-2 mt-2">
                              <button className="text-xs px-2 py-1 bg-teal-500 text-white rounded">Approve</button>
                              <button className="text-xs px-2 py-1 bg-slate-600 text-white rounded">Edit</button>
                            </div>
                          </div>
                          <div className="p-3 bg-slate-700/50 rounded-lg">
                            <p className="text-xs text-slate-400 mb-1">Risk Alert</p>
                            <p className="text-sm text-white">Seasonal Dip</p>
                            <div className="flex gap-2 mt-2">
                              <button className="text-xs px-2 py-1 bg-teal-500 text-white rounded">Accept</button>
                              <button className="text-xs px-2 py-1 bg-slate-600 text-white rounded">Override</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeFeature === 'autopilot' && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-cyan-400">
                          <Cpu className="w-5 h-5" />
                          <span className="font-semibold">Auto-Pilot Engaged</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2 bg-slate-700/30 rounded">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span className="text-sm text-slate-300">Auto-analyzing 847 transactions...</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-slate-700/30 rounded">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span className="text-sm text-slate-300">Bureau check complete</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-slate-700/30 rounded">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span className="text-sm text-slate-300">Decision: Approved @ ₹32L</span>
                          </div>
                        </div>
                        <div className="p-3 bg-teal-900/30 border border-teal-500/30 rounded-lg">
                          <p className="text-xs text-teal-400">Full audit trail generated</p>
                        </div>
                      </div>
                    )}
                    
                    {activeFeature === 'cam' && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-emerald-400">
                          <FileText className="w-5 h-5" />
                          <span className="font-semibold">CAM Generator</span>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-slate-900">
                          <div className="border-b pb-2 mb-3">
                            <p className="text-xs text-slate-400">Credit Appraisal Memo</p>
                            <p className="font-bold">ABC Traders Pvt Ltd</p>
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span className="text-slate-500">Proposed Limit:</span>
                              <span className="font-medium">₹28.5 Lakhs</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Risk Grade:</span>
                              <span className="font-medium text-green-600">A2</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Generated:</span>
                              <span className="font-medium">Auto @ 2m 14s</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-teal-500 text-white text-xs font-semibold rounded-full">
                Live Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LOSSuite;
