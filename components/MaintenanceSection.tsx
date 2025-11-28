import React, { useEffect, useRef, useState } from 'react';
import { Wrench, BellRing, CalendarCheck, ArrowRight } from 'lucide-react';

export const MaintenanceSection: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const steps = [
    {
      icon: <CalendarCheck className="w-10 h-10" />,
      title: "1. Monitoramento",
      desc: "O sistema lê o KM rodado e as horas de motor via telemetria."
    },
    {
      icon: <BellRing className="w-10 h-10" />,
      title: "2. Alerta Automático",
      desc: "Gestor recebe aviso de que a revisão ou aferição está próxima."
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "3. Execução Integrada",
      desc: "Agendamento direto na oficina Tacógrafos MT em Sinop."
    }
  ];

  return (
    <section ref={sectionRef} id="manutencao" className="py-20 bg-brand-black border-y border-white/5 relative">
      <div className="container mx-auto px-4 text-center">
        
        <div className={`max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Manutenção Preventiva Automatizada
          </h2>
          <p className="text-gray-400 text-lg">
            A força do Grupo MT: Software e Oficina trabalhando juntos. Sua frota não para por esquecimento e você evita custos corretivos.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-10">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-orange/0 via-brand-orange/50 to-brand-orange/0 border-t-2 border-dashed border-white/20 z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative z-10 bg-brand-card p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 mx-auto bg-brand-black rounded-full border-4 border-brand-card flex items-center justify-center text-brand-orange mb-6 shadow-lg relative">
                {step.icon}
                {index < 2 && <ArrowRight className="md:hidden absolute -bottom-8 text-gray-600" />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};