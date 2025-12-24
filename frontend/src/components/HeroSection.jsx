import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle2, Clock, FileCheck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              Now Live: Credit Underwriter 2.0
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Paygenix AI: The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">
                Agentic Underwriting
              </span>{' '}
              Platform.
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Supercharge your firm's output with an integrated toolset that automates the manual touchpoints of MSME credit underwriting.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 group">
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-slate-200 text-slate-700 font-semibold px-8 py-6 text-lg rounded-xl hover:bg-slate-50 transition-all duration-300">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                Setup in minutes
              </span>
            </div>
          </div>

          {/* Right Content - Product UI Preview */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              {/* Mock UI Header */}
              <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-slate-400 text-sm font-mono">loan_application_2847.json</span>
              </div>

              {/* Mock UI Content */}
              <div className="p-6 grid grid-cols-5 gap-4">
                {/* Main Panel */}
                <div className="col-span-3 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">Application ID</p>
                      <p className="text-lg font-semibold text-slate-900">#MSME-2847-KA</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-500" />
                      <span className="text-sm text-slate-600">3m 42s</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 bg-slate-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">Bank Statement Analysis</span>
                        <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded-full">Complete</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '100%' }} />
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">Bureau Report</span>
                        <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded-full">Complete</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '100%' }} />
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">Policy Compliance</span>
                        <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded-full">Complete</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '100%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-teal-800 font-semibold">Approved</p>
                      <p className="text-sm text-teal-600">Sanctioned Amount: ₹24.5L</p>
                    </div>
                  </div>
                </div>

                {/* Sidebar - Agentic Reasoning */}
                <div className="col-span-2 bg-slate-900 rounded-xl p-4 space-y-3">
                  <h4 className="text-xs text-slate-400 uppercase tracking-wider">Agentic Reasoning</h4>
                  
                  <div className="space-y-2">
                    <div className="p-3 bg-slate-800 rounded-lg border-l-2 border-teal-500">
                      <p className="text-xs text-teal-400 font-medium">Banking Agent</p>
                      <p className="text-xs text-slate-300 mt-1">Healthy cash flows detected. Avg monthly inflow: ₹8.2L</p>
                    </div>
                    
                    <div className="p-3 bg-slate-800 rounded-lg border-l-2 border-cyan-500">
                      <p className="text-xs text-cyan-400 font-medium">Bureau Agent</p>
                      <p className="text-xs text-slate-300 mt-1">CIBIL Score: 742. No defaults in 24 months.</p>
                    </div>
                    
                    <div className="p-3 bg-slate-800 rounded-lg border-l-2 border-emerald-500">
                      <p className="text-xs text-emerald-400 font-medium">Policy Agent</p>
                      <p className="text-xs text-slate-300 mt-1">All compliance checks passed. Risk: Low.</p>
                    </div>
                    
                    <div className="p-3 bg-teal-900/50 rounded-lg border border-teal-500/30">
                      <p className="text-xs text-teal-300 font-medium">Coordinator</p>
                      <p className="text-xs text-slate-300 mt-1">Consensus reached. Recommend approval at ₹24.5L.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-500/10 rounded-2xl blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-200/50 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
