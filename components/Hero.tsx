import React from 'react';
import { ArrowRight, CalendarCheck, Clock, MapPin } from 'lucide-react';
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
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Posto Autorizado INMETRO em Sinop - MT</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Tacógrafo Regularizado, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">Sem Multa e Sem Atraso</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Certificado vencido tira seu caminhão da pista até regularizar. A gente resolve rápido, direto na rota da BR-163 em Sinop.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto mb-8">
            <Button href="https://wa.me/5566992302207?text=Olá, preciso agendar a aferição do meu tacógrafo." target="_blank" variant="primary" className="w-full sm:w-auto group">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Agendar Aferição
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="#orcamento" variant="outline" className="w-full sm:w-auto">
              Ver Serviços e Orçamento
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-orange" />
              Aferição em até 40 minutos
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-orange" />
              Direto na rota da BR-163
            </span>
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