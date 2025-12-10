import React from 'react';
import { MapPin, Phone, ArrowRight, Clock, Navigation } from 'lucide-react';
import { Button } from './Button';

export const LocationContactSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-brand-card rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Sinop - MT</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Visite nossa <br />
              <span className="text-brand-orange">Sede em Sinop</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8">
              Venha tomar um café conosco e conhecer nossa estrutura. Oficina especializada e equipe de suporte técnico pronta para atender você.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Endereço</h4>
                  <p className="text-gray-400">R. Colonizador Ênio Pipino - Jardim Ouro<br/>Sinop - MT, 78550-628</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Phone className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Central de Atendimento</h4>
                  <p className="text-gray-400 text-xl font-mono">(66) 99230-2207</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Clock className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Horário de Funcionamento</h4>
                  <ul className="text-gray-400 text-sm mt-1 space-y-1">
                    <li className="flex justify-between gap-8"><span>Segunda - Sexta:</span> <span>07:30 – 17:00</span></li>
                    <li className="flex justify-between gap-8"><span>Sábado:</span> <span>08:00 – 11:15</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="https://www.google.com/maps/search/?api=1&query=Tac%C3%B3grafos+Mato+Grosso+Sinop" target="_blank" className="w-full sm:w-auto">
                <Navigation className="w-5 h-5 mr-2" />
                Traçar Rota no GPS
              </Button>
              <Button variant="outline" href="tel:+5566992302207" className="w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>

          {/* Map/Image Side */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative">
            <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay z-10 pointer-events-none"></div>
            <iframe 
              src="https://maps.google.com/maps?q=Tac%C3%B3grafos+Mato+Grosso+Sinop&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              title="Localização Tacógrafos Mato Grosso"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};