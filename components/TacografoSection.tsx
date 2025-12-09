import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Award, Clock, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const TacografoSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: desconectar após a primeira animação para não repetir
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.15, // Dispara quando 15% da seção estiver visível
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
  
  // Animação vindo da esquerda para a imagem
  const imageAnimation = isVisible 
    ? "opacity-100 translate-x-0" 
    : "opacity-0 -translate-x-10";

  // Animação vindo de baixo para o texto
  const textAnimation = isVisible 
    ? "opacity-100 translate-y-0" 
    : "opacity-0 translate-y-10";

  return (
    <section ref={sectionRef} id="tacografos" className="py-20 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className={`w-full lg:w-1/2 relative ${baseTransition} ${imageAnimation}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
              <div className="absolute inset-0 bg-brand-orange/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop" 
                alt="Instalação de tacógrafo em caminhão e manutenção VDO em Sinop" 
                loading="lazy"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-card/90 backdrop-blur-md p-4 rounded-xl border border-white/10 z-20 transition-all duration-1000 shadow-[0_0_0_rgba(0,0,0,0)] border-transparent group-hover:border-green-500/30 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <div className="flex items-center gap-4">
                  <div className={`bg-green-500/20 p-3 rounded-full text-green-500 ${isVisible ? 'animate-pulse' : ''}`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Certificado INMETRO</h4>
                    <p className="text-xs text-gray-400">Posto autorizado com selo de qualidade VDO</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange/20 blur-[100px] rounded-full"></div>
          </div>

          {/* Content Side */}
          <div className={`w-full lg:w-1/2 ${baseTransition} ${textAnimation} delay-300`}>
            <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2">Oficina Especializada</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tacógrafos Mato Grosso - Posto Credenciado INMETRO
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Evite multas e mantenha sua frota regularizada. Nossa oficina em Sinop oferece serviço ágil para que seu caminhão não fique parado. Realizamos selagem, ensaio e manutenção completa.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Aferição e Selagem (INMETRO)",
                "Manutenção de Tacógrafos VDO",
                "Rapidez no atendimento para motoristas",
                "Equipamentos originais e garantia"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="https://wa.me/5566992302207?text=Olá, preciso agendar um serviço de tacógrafo." target="_blank">
                Agendar Serviço
              </Button>
              <div className="flex items-center gap-2 text-gray-400 px-4">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Atendimento rápido</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};