import React, { useState, useRef, useEffect } from 'react';
import { Wrench, Info, CheckCircle2, Gauge, Lock, Award, Package, Settings, MessageCircle } from 'lucide-react';
import { Button } from './Button';

type ServiceItem = {
  service: string;
  description: string;
  obs: string;
  icon: React.ReactNode;
  highlight?: boolean;
};

const tacografoData: ServiceItem[] = [
  {
    service: "Ensaio Metrológico",
    description: "Teste obrigatório de medição e calibração.",
    obs: "Validade de 2 anos (INMETRO).",
    icon: <Gauge className="w-6 h-6" />
  },
  {
    service: "Selagem",
    description: "Aplicação de lacres de segurança numerados.",
    obs: "Necessário se o lacre estiver rompido.",
    icon: <Lock className="w-6 h-6" />
  },
  {
    service: "Aferição Completa",
    description: "Pacote: Ensaio + Selagem + Certificado.",
    obs: "Mais procurado.",
    icon: <Award className="w-6 h-6" />,
    highlight: true
  },
  {
    service: "Caixa de Discos (Semanal)",
    description: "Caixa com 10 conjuntos de discos 7 dias.",
    obs: "Marca VDO original.",
    icon: <Package className="w-6 h-6" />
  },
  {
    service: "Instalação Kit VDO",
    description: "Equipamento novo + Instalação no painel.",
    obs: "Varia conforme modelo do caminhão.",
    icon: <Settings className="w-6 h-6" />
  }
];

export const PricingSection: React.FC = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const currentData = tacografoData;

  return (
    <section ref={sectionRef} id="orcamento" className="py-20 bg-brand-black relative">
      <div className="container mx-auto px-4">

        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 text-brand-orange mb-2">
            <Wrench className="w-5 h-5" />
            <span className="font-bold uppercase tracking-widest text-sm">Orçamento sob medida</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O Que Fazemos na Oficina
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada caminhão tem uma configuração diferente, então não fechamos um preço fixo aqui. Manda o modelo do seu veículo no WhatsApp e a gente monta o orçamento certo pra ele.
          </p>
        </div>

        {/* Content Container */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentData.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  item.highlight
                    ? 'border-brand-orange/30 bg-brand-orange/5 hover:shadow-[0_10px_40px_-10px_rgba(255,102,0,0.2)]'
                    : 'border-white/10 bg-brand-card hover:border-brand-orange/30'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    item.highlight ? 'bg-brand-orange text-white' : 'bg-brand-orange/10 text-brand-orange'
                  }`}>
                    {item.icon}
                  </div>
                  {item.highlight && (
                    <span className="px-2 py-1 bg-brand-orange text-white text-[10px] font-bold rounded uppercase">Mais procurado</span>
                  )}
                </div>

                <h3 className={`font-bold text-lg mb-2 ${item.highlight ? 'text-brand-orange' : 'text-white'}`}>
                  {item.service}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

                <div className="flex items-start gap-2 pt-4 border-t border-white/10 text-xs text-gray-500">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{item.obs}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-10 text-center">
            <p className="text-xs text-gray-600 max-w-3xl mx-auto mb-6">
              Cada orçamento sai depois da análise do veículo, sem chute e sem surpresa na hora de pagar.
            </p>
            <Button
              variant="primary"
              href="https://wa.me/5566992302207?text=Olá, quero um orçamento pros serviços de tacógrafo."
              target="_blank"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pedir Orçamento no WhatsApp
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
