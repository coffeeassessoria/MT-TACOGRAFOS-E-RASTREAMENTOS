import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Truck, Car, MessageSquare, Send } from 'lucide-react';
import { Button } from './Button';

type Step = 'type' | 'details' | 'contact';

export const LeadFormSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('type');
  const [usageType, setUsageType] = useState<'business' | 'personal' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    if (currentStep === 'type' && usageType) setCurrentStep('details');
    else if (currentStep === 'details') setCurrentStep('contact');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <section className="py-20 bg-brand-dark border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto bg-brand-card p-8 rounded-2xl border border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.1)]">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Solicitação Recebida!</h3>
            <p className="text-gray-400 mb-6">
              Nossa equipe comercial entrará em contato via WhatsApp em breve para finalizar seu orçamento personalizado.
            </p>
            <Button variant="outline" onClick={() => { setIsSuccess(false); setCurrentStep('type'); }}>
              Nova Solicitação
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-brand-dark border-y border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Não sabe qual o plano ideal?
            </h2>
            <p className="text-gray-400">
              Responda 3 perguntas rápidas e receba uma recomendação personalizada para sua necessidade.
            </p>
          </div>

          <div className="bg-brand-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Steps Indicator (Left Side) */}
            <div className="bg-brand-card p-6 md:p-8 md:w-1/3 border-b md:border-b-0 md:border-r border-white/10">
              <div className="space-y-6">
                {[
                  { id: 'type', label: '1. Finalidade', icon: <Truck className="w-5 h-5" /> },
                  { id: 'details', label: '2. Detalhes', icon: <Car className="w-5 h-5" /> },
                  { id: 'contact', label: '3. Contato', icon: <MessageSquare className="w-5 h-5" /> }
                ].map((step, idx) => (
                  <div key={step.id} className={`flex items-center gap-3 ${currentStep === step.id ? 'text-brand-orange' : 'text-gray-600'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${currentStep === step.id ? 'border-brand-orange bg-brand-orange/10' : 'border-gray-700 bg-gray-800'}`}>
                      {step.icon}
                    </div>
                    <span className={`font-semibold ${currentStep === step.id ? 'text-white' : ''}`}>{step.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Area (Right Side) */}
            <div className="p-6 md:p-8 md:w-2/3 bg-brand-black/50">
              
              {currentStep === 'type' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-xl font-bold text-white">Para que você precisa do rastreador?</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <button 
                      onClick={() => setUsageType('business')}
                      className={`p-4 rounded-xl border text-left transition-all hover:bg-white/5 ${usageType === 'business' ? 'border-brand-orange bg-brand-orange/5' : 'border-white/10'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Uso Profissional / Frota</span>
                        <Truck className="text-brand-orange" />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Caminhões, Vans, Máquinas Agrícolas.</p>
                    </button>

                    <button 
                      onClick={() => setUsageType('personal')}
                      className={`p-4 rounded-xl border text-left transition-all hover:bg-white/5 ${usageType === 'personal' ? 'border-brand-orange bg-brand-orange/5' : 'border-white/10'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Uso Pessoal</span>
                        <Car className="text-brand-orange" />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Carro de passeio, Moto, Caminhonete.</p>
                    </button>
                  </div>
                  <div className="flex justify-end pt-4">
                    <Button onClick={handleNext} disabled={!usageType}>
                      Próximo <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {currentStep === 'details' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-xl font-bold text-white">
                    {usageType === 'business' ? 'Qual o tamanho da sua frota?' : 'Quantos veículos deseja rastrear?'}
                  </h3>
                  <div className="space-y-4">
                    <select className="w-full bg-brand-card border border-white/10 rounded-lg p-3 text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none">
                      <option>1 a 4 veículos</option>
                      <option>5 a 20 veículos</option>
                      <option>Mais de 20 veículos</option>
                    </select>
                    
                    <div className="p-4 bg-brand-orange/10 rounded-lg border border-brand-orange/20">
                      <p className="text-sm text-brand-orange">
                        <span className="font-bold">Dica:</span> {usageType === 'business' 
                          ? "Para frotas acima de 5 veículos, temos planos com telemetria inclusa." 
                          : "O plano Light é perfeito para proteção contra roubo e furto."}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button onClick={() => setCurrentStep('type')} className="text-gray-400 hover:text-white px-4">Voltar</button>
                    <Button onClick={handleNext}>
                      Continuar <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {currentStep === 'contact' && (
                <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-xl font-bold text-white">Para onde enviamos a proposta?</h3>
                  
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Seu Nome</label>
                    <input required type="text" className="w-full bg-brand-card border border-white/10 rounded-lg p-3 text-white focus:border-brand-orange outline-none" placeholder="Digite seu nome" />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">WhatsApp</label>
                    <input required type="tel" className="w-full bg-brand-card border border-white/10 rounded-lg p-3 text-white focus:border-brand-orange outline-none" placeholder="(66) 99999-9999" />
                  </div>

                  <div className="flex justify-between pt-4 items-center">
                    <button type="button" onClick={() => setCurrentStep('details')} className="text-gray-400 hover:text-white px-4">Voltar</button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Enviando...' : 'Receber Proposta'} 
                      {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                    </Button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};