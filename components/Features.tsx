import React from 'react';
import { Users, Radio, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Suporte Local Humanizado",
      description: "Estamos em Sinop. Você fala com gente de verdade, pronta para resolver seu problema na hora."
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Tecnologia 4G/5G",
      description: "Equipamentos homologados pela ANATEL e sistemas de última geração para máxima cobertura."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agilidade Integrada",
      description: "Oficina e instalação no mesmo lugar. Resolva tacógrafo e rastreador em uma única parada."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Por que escolher o <span className="text-brand-orange">Grupo MT</span>?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unimos a tradição da mecânica com a inovação da tecnologia para oferecer a melhor experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-brand-card p-8 rounded-2xl border border-white/5 hover:border-brand-orange/50 hover:bg-brand-orange/5 hover:shadow-[0_10px_40px_-10px_rgba(255,102,0,0.1)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};