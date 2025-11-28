import React, { useEffect, useRef, useState } from 'react';
import { Fuel, Activity, Gauge, ShieldCheck } from 'lucide-react';

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export const AdvancedTelemetrySection: React.FC = () => {
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

  return (
    <section ref={sectionRef} className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-2 text-brand-orange mb-4">
              <Activity className="w-5 h-5" />
              <span className="font-bold uppercase tracking-widest text-sm">Rede CAN & Telemetria</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Controle Absoluto de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">Combustível</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Não dependa apenas de médias estimadas. Conectamos direto no computador de bordo (Rede CAN) do caminhão. Saiba exatamente quanto foi abastecido, o consumo real por trecho e identifique desvios ou fraudes na hora.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Fuel className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Gestão de Abastecimento</h4>
                  <p className="text-gray-500 text-sm">Cruzamento automático de dados: Litros na bomba vs. Litros no tanque.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Gauge className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Condução Econômica</h4>
                  <p className="text-gray-500 text-sm">Monitoramento de RPM, faixa verde e frenagens bruscas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Animation (Dashboard) */}
          <div className={`w-full lg:w-1/2 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative z-10 bg-brand-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              {/* Header of Dashboard */}
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-mono text-sm">AO VIVO - SCANIA R450</span>
                </div>
                <ShieldCheck className="text-brand-orange w-5 h-5" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-400 text-xs uppercase">RPM Médio</span>
                  <div className="text-2xl font-bold text-white font-mono mt-1">
                    {isVisible && <AnimatedCounter end={1350} />}
                  </div>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-400 text-xs uppercase">Velocidade</span>
                  <div className="text-2xl font-bold text-white font-mono mt-1">
                    {isVisible && <AnimatedCounter end={78} suffix=" km/h" />}
                  </div>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-400 text-xs uppercase">Consumo Inst.</span>
                  <div className="text-2xl font-bold text-brand-orange font-mono mt-1">
                    {isVisible ? "2.4 km/l" : "0.0 km/l"}
                  </div>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-400 text-xs uppercase">Tanque</span>
                  <div className="text-2xl font-bold text-white font-mono mt-1">
                    {isVisible && <AnimatedCounter end={72} suffix="%" />}
                  </div>
                </div>
              </div>

              {/* Graph Simulation */}
              <div className="h-24 w-full bg-black/40 rounded-xl border border-white/5 flex items-end px-2 pb-2 gap-1 overflow-hidden">
                {[40, 60, 45, 70, 85, 60, 75, 50, 65, 90, 70, 55, 80, 60, 75, 50].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-brand-orange/20 border-t border-brand-orange rounded-t-sm transition-all duration-500"
                    style={{ height: isVisible ? `${h}%` : '5%' }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Decoration Behind */}
            <div className="absolute -top-10 -right-10 w-full h-full border border-brand-orange/20 rounded-3xl z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};