import React, { useEffect, useRef, useState } from 'react';
import { Camera, Eye, Smartphone, Wifi, AlertTriangle, FileVideo } from 'lucide-react';
import { Button } from './Button';

export const VideoTelemetrySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const transitionClass = (delay: string) => 
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay}`;

  return (
    <section ref={sectionRef} id="videotelemetria" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-4 backdrop-blur-sm ${transitionClass('delay-0')}`}>
            <Eye className="w-4 h-4 text-brand-orange" />
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Inteligência Artificial</span>
          </div>
          <h2 className={`text-3xl md:text-5xl font-bold text-white mb-6 ${transitionClass('delay-100')}`}>
            Videotelemetria com IA
          </h2>
          <p className={`text-gray-400 text-lg ${transitionClass('delay-200')}`}>
            A caixa preta visual da sua frota. Reduza acidentes em até 50% com alertas sonoros na cabine e monitore o comportamento do motorista em tempo real.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Feature: Driver Monitoring */}
          <div className={`md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden border border-white/10 group ${transitionClass('delay-300')}`}>
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop" 
              alt="Motorista de caminhão sendo monitorado por câmera de fadiga e videotelemetria com IA" 
              loading="lazy"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
            
            {/* AI Overlay Simulation */}
            <div className="absolute top-10 left-10 border-2 border-red-500/50 rounded-lg p-4 backdrop-blur-sm bg-red-500/10 animate-pulse">
              <div className="flex items-center gap-2 text-red-400 mb-1">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Fadiga Detectada</span>
              </div>
              <p className="text-white text-sm font-mono">Alert: Microsleep (0.8s)</p>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-bold text-white mb-2">Monitoramento de Fadiga & Distração</h3>
              <p className="text-gray-300">Detecta uso de celular, cigarro ou olhos fechados, emitindo alertas sonoros imediatos.</p>
            </div>
          </div>

          {/* Feature: Cloud Recording */}
          <div className={`bg-brand-card/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-colors ${transitionClass('delay-400')}`}>
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">
              <Wifi className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Gravação em Nuvem</h4>
            <p className="text-sm text-gray-400">Vídeos salvos automaticamente em alta definição 4G.</p>
          </div>

          {/* Feature: Legal Proof */}
          <div className={`bg-brand-card/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-colors ${transitionClass('delay-500')}`}>
            <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange mb-4">
              <FileVideo className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Prova Jurídica</h4>
            <p className="text-sm text-gray-400">Exonere seus motoristas em acidentes com provas visuais irrefutáveis.</p>
          </div>

          {/* Feature: Full View */}
          <div className={`md:col-span-3 bg-gradient-to-r from-brand-card to-brand-dark border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 ${transitionClass('delay-600')}`}>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-brand-black flex items-center justify-center text-gray-400"><Camera size={20}/></div>
                <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-brand-black flex items-center justify-center text-gray-400"><Eye size={20}/></div>
                <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-brand-black flex items-center justify-center text-gray-400"><Smartphone size={20}/></div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Sistema Multicâmera</h4>
                <p className="text-sm text-gray-400">Frontal, Motorista, Lateral e Traseira.</p>
              </div>
            </div>
            <Button variant="outline" href="#contato">
              Cotar Videotelemetria
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};