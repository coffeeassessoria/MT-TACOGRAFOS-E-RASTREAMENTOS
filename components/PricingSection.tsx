import React, { useState, useRef, useEffect } from 'react';
import { Tag, Info, CheckCircle2, AlertCircle, FileText, Mail } from 'lucide-react';
import { Button } from './Button';

type PriceItem = {
  service: string;
  description: string;
  price: string;
  obs: string;
  highlight?: boolean;
};

const tacografoData: PriceItem[] = [
  {
    service: "Ensaio Metrológico",
    description: "Teste obrigatório de medição e calibração.",
    price: "R$ 200,00",
    obs: "Validade de 2 anos (INMETRO)."
  },
  {
    service: "Selagem",
    description: "Aplicação de lacres de segurança numerados.",
    price: "R$ 50,00",
    obs: "Necessário se o lacre estiver rompido.",
  },
  {
    service: "Aferição Completa",
    description: "Pacote: Ensaio + Selagem + Certificado.",
    price: "R$ 250,00",
    obs: "Mais procurado.",
    highlight: true
  },
  {
    service: "Caixa de Discos (Semanal)",
    description: "Caixa com 10 conjuntos de discos 7 dias.",
    price: "R$ 45,00",
    obs: "Marca VDO original."
  },
  {
    service: "Instalação Kit VDO",
    description: "Equipamento novo + Instalação no painel.",
    price: "Sob Consulta",
    obs: "Varia conforme modelo do caminhão."
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
    <section ref={sectionRef} id="precos" className="py-20 bg-brand-black relative">
      <div className="container mx-auto px-4">

        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 text-brand-orange mb-2">
            <Tag className="w-5 h-5" />
            <span className="font-bold uppercase tracking-widest text-sm">Investimento Transparente</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tabela de Preços Estimados
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sem surpresas na hora de pagar. Confira nossos valores de referência para os serviços da oficina.
          </p>
        </div>

        {/* Content Container */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* DESKTOP TABLE VIEW (Hidden on Mobile) */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10 bg-brand-card/30 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-6 text-brand-orange font-bold text-sm uppercase tracking-wider w-1/4">Serviço / Plano</th>
                  <th className="p-6 text-gray-300 font-semibold text-sm uppercase tracking-wider w-1/3">Descrição Breve</th>
                  <th className="p-6 text-white font-bold text-sm uppercase tracking-wider w-1/6">Preço (R$)</th>
                  <th className="p-6 text-gray-300 font-semibold text-sm uppercase tracking-wider w-1/4">Observações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {currentData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`transition-colors hover:bg-white/5 ${item.highlight ? 'bg-brand-orange/5' : ''}`}
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        {item.highlight && <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />}
                        <span className={`font-bold ${item.highlight ? 'text-brand-orange' : 'text-white'}`}>
                          {item.service}
                        </span>
                      </div>
                    </td>
                    <td className="p-6 text-gray-400 text-sm">{item.description}</td>
                    <td className="p-6">
                      <span className="font-mono font-bold text-lg text-white">{item.price}</span>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Info className="w-4 h-4 shrink-0" />
                        <span>{item.obs}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARD VIEW (Hidden on Desktop) */}
          <div className="md:hidden space-y-4">
            {currentData.map((item, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl border ${
                  item.highlight 
                    ? 'border-brand-orange/30 bg-brand-orange/5' 
                    : 'border-white/10 bg-brand-card'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`font-bold text-lg ${item.highlight ? 'text-brand-orange' : 'text-white'}`}>
                    {item.service}
                  </h3>
                  {item.highlight && <span className="px-2 py-1 bg-brand-orange text-white text-[10px] font-bold rounded uppercase">Destaque</span>}
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-gray-500 mt-1 shrink-0" />
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-gray-500 mt-1 shrink-0" />
                    <p className="text-gray-400 text-sm italic">{item.obs}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Investimento:</span>
                  <span className="font-mono font-bold text-xl text-white">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-600 max-w-3xl mx-auto mb-6">
              * Os valores podem sofrer alterações sem aviso prévio. O valor final pode depender da análise técnica do veículo.
            </p>
            <Button variant="primary" href="mailto:contato@tacografosmatogrosso.com.br" target="_blank">
              <Mail className="w-5 h-5 mr-2" />
              Solicitar Orçamento Oficial
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};