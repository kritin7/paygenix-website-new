import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900">
      {/* CTA Section */}
      <div className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            See Paygenix AI in Action
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Address Bharat's 30 Lakh Crore Credit Gap. Transform your underwriting today.
          </p>
          <Button className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 group">
            Book a Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <a href="/" className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <ellipse
                      cx="20"
                      cy="20"
                      rx="14"
                      ry="16"
                      fill="none"
                      stroke="#3ECFA5"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">
                  Paygenix <span className="text-teal-400">AI</span>
                </span>
              </a>
              <p className="text-slate-400 text-sm mb-4">
                The Agentic Underwriting Platform for MSME Credit.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-slate-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-slate-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-slate-400 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#los-suite" className="text-slate-400 hover:text-white transition-colors text-sm">LOS Suite</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#team" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <Mail className="w-4 h-4 text-teal-500" />
                  hello@paygenix.ai
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <Phone className="w-4 h-4 text-teal-500" />
                  +91 98765 43210
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                  Mumbai, Maharashtra, India
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2025 Paygenix AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
