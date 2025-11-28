import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-brand-black pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Contact Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="Logo MT Rastreamentos" 
                className="h-24 w-auto object-contain mix-blend-screen opacity-90" 
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-brand-orange transition-colors">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <span>R. Colonizador Ênio Pipino - Jardim Ouro<br />Sinop - MT, 78550-628</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-brand-orange transition-colors">
                <Phone className="w-5 h-5 shrink-0" />
                <span>(66) 99230-2207</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-brand-orange transition-colors">
                <Mail className="w-5 h-5 shrink-0" />
                <span>contato@grupomt.com.br</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wider">Horário de Funcionamento</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li className="flex justify-between max-w-xs"><span>Segunda - Sexta:</span> <span>07:30 – 17:00</span></li>
                <li className="flex justify-between max-w-xs"><span>Sábado:</span> <span>08:00 – 11:15</span></li>
                <li className="flex justify-between max-w-xs"><span>Domingo:</span> <span>Fechado</span></li>
              </ul>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Acesso Rápido</h3>
            <ul className="space-y-2">
              {['Início', 'Tacógrafos', 'Rastreamento', 'Diferenciais'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ó/g, 'o')}`} className="text-gray-400 hover:text-brand-orange transition-colors block py-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="w-full h-96 bg-brand-card rounded-xl overflow-hidden border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.038448834994!2d-55.518889!3d-11.871111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a785002967169b%3A0x600c02c011400878!2sTacografos%20Mato%20Grosso!5e0!3m2!1sen!2sbr!4v1709230220700!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Grupo MT. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};