import React, { useEffect, useRef, useState } from 'react';
import { Target, Compass, Truck, History } from 'lucide-react';

export const AboutSection: React.FC = () => {
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
    `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay}`;

  return (
    <section ref={sectionRef} className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Narrative */}
          <div className="space-y-8">
            <div className={transitionClass('delay-0')}>
              <div className="inline-flex items-center gap-2 text-brand-orange mb-4">
                <History className="w-5 h-5" />
                <span className="font-bold uppercase tracking-widest text-sm">Nossa Trajetória</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Unindo Forças para <br />
                <span className="text-brand-orange">Mover o Mato Grosso</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  O <strong>Grupo MT</strong> nasceu de uma necessidade real nas estradas do Centro-Oeste. De um lado, a tradição e a precisão técnica da <em>Tacógrafos Mato Grosso</em>, garantindo que veículos pesados estivessem sempre dentro da lei.
                </p>
                <p>
                  Do outro, a inovação da <em>MT Rastreamentos</em>, trazendo inteligência de dados e segurança patrimonial. Percebemos que nossos clientes não precisavam de dois fornecedores, mas sim de uma <strong>solução única</strong>.
                </p>
                <p className="text-white font-medium border-l-4 border-brand-orange pl-4">
                  Hoje, somos mais que uma oficina ou uma empresa de software. Somos o parceiro estratégico que garante que sua frota saia do pátio legalizada, segura e gerando lucro.
                </p>
              </div>
            </div>
          </div>

          {/* Cards / Visuals */}
          <div className={`grid gap-6 ${transitionClass('delay-300')}`}>
            {/* Vision Card */}
            <div className="bg-brand-card p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-colors group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nossa Visão</h3>
              <p className="text-gray-400">
                Ser a referência absoluta em gestão de frotas no Mato Grosso, reconhecida por transformar dados complexos e burocracia em tranquilidade para o transportador.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-brand-card p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-colors group">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nossa Missão</h3>
              <p className="text-gray-400">
                Integrar serviços físicos e tecnologia digital para reduzir custos operacionais, salvar vidas nas estradas e garantir a conformidade legal de cada veículo que atendemos.
              </p>
            </div>

             {/* Commitment Badge */}
             <div className="inline-flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <Truck className="w-8 h-8 text-gray-500" />
                <span className="text-gray-400 text-sm italic">Compromisso com o setor logístico desde 2010.</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};