import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, BarChart3, Map, Shield } from 'lucide-react';
import { Button } from './Button';

export const RastreamentoSection: React.FC = () => {
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
      {
        threshold: 0.15,
        rootMargin: "0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const baseTransition = "transition-all duration-1000 ease-out";
  
  // Elementos do Rastreamento sobem suavemente
  const contentAnimation = isVisible 
    ? "opacity-100 translate-y-0" 
    : "opacity-0 translate-y-12";

  return (
    <section ref={sectionRef} id="rastreamento" className="py-20 bg-brand-dark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          
          {/* Image Side (Mockups) */}
          <div className={`w-full lg:w-1/2 flex justify-center ${baseTransition} ${contentAnimation} delay-200`}>
            <div className="relative w-full max-w-md">
               {/* Glow Effect */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange/30 blur-[80px] rounded-full"></div>
               
               <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                alt="Dashboard de Rastreamento"
                className="relative z-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transform hover:-translate-y-2 transition-transform duration-500"
               />
               
               {/* Floating Stats Card */}
               <div className="absolute -bottom-8 -left-8 bg-brand-card p-4 rounded-xl border border-brand-orange/30 shadow-xl z-20 backdrop-blur-md animate-pulse">
                 <div className="flex flex-col">
                   <span className="text-xs text-gray-400 uppercase">Economia Média</span>
                   <span className="text-2xl font-bold text-brand-orange">-15% Combustível</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`w-full lg:w-1/2 ${baseTransition} ${contentAnimation}`}>
             <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2">Tecnologia Avançada</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              MT Rastreamentos
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Tenha o controle total da sua frota na palma da mão. Nosso sistema oferece telemetria avançada para reduzir custos operacionais, evitar desvios de rota e garantir a segurança da carga.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
                <Map className={`w-8 h-8 text-brand-orange mb-3 ${isVisible ? 'animate-pulse' : ''}`} />
                <h4 className="font-semibold text-white mb-1">Rastreamento 24h</h4>
                <p className="text-sm text-gray-400">Localização em tempo real via Satélite/4G.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
                <Shield className="w-8 h-8 text-brand-orange mb-3" />
                <h4 className="font-semibold text-white mb-1">Bloqueio Remoto</h4>
                <p className="text-sm text-gray-400">Segurança instantânea em caso de roubo.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
                <BarChart3 className="w-8 h-8 text-brand-orange mb-3" />
                <h4 className="font-semibold text-white mb-1">Relatórios Gerenciais</h4>
                <p className="text-sm text-gray-400">Histórico de rotas, velocidade e paradas.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
                <Smartphone className="w-8 h-8 text-brand-orange mb-3" />
                <h4 className="font-semibold text-white mb-1">App Intuitivo</h4>
                <p className="text-sm text-gray-400">Monitore tudo pelo celular Android ou iOS.</p>
              </div>
            </div>

            <Button href="https://wa.me/5566999999999?text=Quero conhecer o sistema de rastreamento." target="_blank">
              Solicitar Demonstração
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};