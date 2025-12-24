import React from 'react';
import { Network, FileSearch, Shield, Brain, ArrowRight } from 'lucide-react';

const AgenticArchitecture = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-500/10 text-teal-400 rounded-full text-sm font-semibold mb-4 border border-teal-500/20">
            Advanced Analysis & Risk Segmentation
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            State-of-the-Art{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Agentic Reasoning
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Our agents "debate" to deliver fast, precise decisions that are 100% auditable.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative max-w-4xl mx-auto">
          {/* Input Nodes */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <FileSearch className="w-6 h-6 text-teal-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Bank Statements</h4>
              <p className="text-sm text-slate-400">12+ months transaction history</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Bureau Reports</h4>
              <p className="text-sm text-slate-400">CIBIL, Experian, Equifax</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Policy Rules</h4>
              <p className="text-sm text-slate-400">Custom lending criteria</p>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-px h-12 bg-gradient-to-b from-slate-700 to-teal-500" />
              <div className="w-px h-12 bg-gradient-to-b from-slate-700 to-cyan-500" />
              <div className="w-px h-12 bg-gradient-to-b from-slate-700 to-emerald-500" />
            </div>
          </div>

          {/* Coordinator Agent */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl p-8 border border-teal-500/30 shadow-2xl shadow-teal-500/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-teal-500 text-white text-xs font-semibold rounded-full">
              Coordinator Agent
            </div>
            
            <div className="flex items-center justify-center gap-8">
              <div className="w-20 h-20 bg-teal-500/20 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-teal-400" />
              </div>
              
              <div className="flex-1 max-w-md">
                <h4 className="text-lg font-bold text-white mb-2">Consensus-Based Decision Making</h4>
                <p className="text-sm text-slate-400">
                  Specialized agents (Banking, Bureau, Policy) collaborate and debate to reach a unified, explainable decision.
                </p>
              </div>
            </div>

            {/* Agent Badges */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-medium rounded-full border border-teal-500/30">
                Banking Agent
              </span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
                Bureau Agent
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30">
                Policy Agent
              </span>
            </div>
          </div>

          {/* Output Arrow */}
          <div className="flex justify-center my-8">
            <div className="flex flex-col items-center gap-2">
              <ArrowRight className="w-6 h-6 text-teal-500 rotate-90" />
            </div>
          </div>

          {/* Output Nodes */}
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 rounded-2xl p-6 border border-teal-500/30">
              <p className="text-sm text-teal-400 mb-1">Output</p>
              <h4 className="text-2xl font-bold text-white">Sanctioned Amount</h4>
              <p className="text-slate-400 mt-2">₹24.5 Lakhs @ 14.5% p.a.</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-2xl p-6 border border-cyan-500/30">
              <p className="text-sm text-cyan-400 mb-1">Audit Trail</p>
              <h4 className="text-2xl font-bold text-white">Decision Trace</h4>
              <p className="text-slate-400 mt-2">Full Chain-of-Thought (CoT)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticArchitecture;
