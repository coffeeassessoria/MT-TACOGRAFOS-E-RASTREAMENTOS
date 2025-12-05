import React from 'react';
import { MapPin, Phone, Mail, Instagram, Shield } from 'lucide-react';

interface FooterProps {
  onOpenPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
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
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=R.+Colonizador+%C3%8Anio+Pipino+-+Jardim+Ouro,+Sinop+-+MT,+78550-628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-brand-orange transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-1 shrink-0" />
                  <span>R. Colonizador Ênio Pipino - Jardim Ouro<br />Sinop - MT, 78550-628</span>
                </a>
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
              <a href="https://www.instagram.com/tacografos_mato_grosso/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              {/* Facebook link removed temporarily */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Acesso Rápido</h3>
            <ul className="space-y-2 mb-8">
              {[
                { label: 'Início', href: '#home' },
                { label: 'Tacógrafos', href: '#tacografos' },
                { label: 'Rastreamento', href: '#rastreamento' },
                { label: 'Videotelemetria', href: '#videotelemetria' },
                { label: 'Telemetria', href: '#telemetria' },
                { label: 'Diferenciais', href: '#diferenciais' }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-brand-orange transition-colors block py-1">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">Institucional</h3>
            <ul className="space-y-2">
               <li>
                <button 
                  onClick={onOpenPolicy}
                  className="flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors py-1 text-left"
                >
                  <Shield className="w-4 h-4" />
                  Política de Privacidade & LGPD
                </button>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="w-full h-96 bg-brand-card rounded-xl overflow-hidden border border-brand-orange/30 shadow-lg shadow-brand-orange/10">
            <iframe 
              src="https://maps.google.com/maps?q=R.+Colonizador+%C3%8Anio+Pipino+-+Jardim+Ouro,+Sinop+-+MT,+78550-628&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-0 invert-0"
              title="Localização Tacógrafos Mato Grosso"
            ></iframe>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Grupo MT. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 text-xs">
            <Shield className="w-3 h-3" />
            Em conformidade com a LGPD
          </p>
        </div>
      </div>
    </footer>
  );
};
