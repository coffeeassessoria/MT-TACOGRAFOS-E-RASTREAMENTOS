import React from 'react';
import { ArrowRight, Wrench, Smartphone } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-hero-pattern bg-cover bg-center bg-fixed">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-black to-transparent opacity-90"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-black to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Atendendo todo Mato Grosso</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Solução Completa para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">Sua Frota</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Do ajuste preciso do tacógrafo à telemetria avançada. Conformidade, segurança e economia reunidas em Sinop.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
            <Button href="#tacografos" variant="outline" className="w-full sm:w-1/2 group">
              <Wrench className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Preciso de Tacógrafo
            </Button>
            <Button href="#rastreamento" variant="primary" className="w-full sm:w-1/2 group">
              <Smartphone className="w-5 h-5 mr-2" />
              Quero Rastreamento
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
        </div>
      </div>
    </section>
  );
};