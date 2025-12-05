import React from 'react';
import { X, ShieldCheck, Lock, Cookie, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-brand-card border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-brand-black/50">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-orange" />
              <h2 className="text-xl md:text-2xl font-bold text-white">Política de Privacidade & LGPD</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 text-gray-300 leading-relaxed scrollbar-thin scrollbar-thumb-brand-orange/20 scrollbar-track-transparent">
            
            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                <FileText className="w-5 h-5 text-brand-orange" />
                1. Introdução
              </h3>
              <p>
                O <strong>Grupo MT</strong> (Tacógrafos Mato Grosso e MT Rastreamentos) valoriza a privacidade de seus usuários e clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong>.
              </p>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                <Lock className="w-5 h-5 text-brand-orange" />
                2. Coleta de Dados
              </h3>
              <p className="mb-2">Coletamos os seguintes tipos de informações:</p>
              <ul className="list-disc pl-5 space-y-1 marker:text-brand-orange">
                <li><strong>Dados Pessoais fornecidos pelo usuário:</strong> Nome, e-mail, telefone e informações sobre frota/veículo ao preencher nossos formulários de contato ou orçamento.</li>
                <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas acessadas e tempo de permanência (coletados de forma anônima para análise de performance).</li>
              </ul>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                <TargetIcon className="w-5 h-5 text-brand-orange" />
                3. Finalidade do Tratamento
              </h3>
              <p>Os dados coletados são utilizados para:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 marker:text-brand-orange">
                <li>Retornar solicitações de orçamento e agendamento de serviços.</li>
                <li>Enviar comunicações comerciais relevantes (caso autorizado).</li>
                <li>Melhorar a experiência de navegação no site.</li>
                <li>Cumprimento de obrigações legais (no caso de serviços de aferição INMETRO).</li>
              </ul>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                <Cookie className="w-5 h-5 text-brand-orange" />
                4. Política de Cookies
              </h3>
              <p>
                Utilizamos cookies para aprimorar a funcionalidade do site e analisar o tráfego. Você pode gerenciar as preferências de cookies diretamente nas configurações do seu navegador.
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2 marker:text-brand-orange">
                <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento do site.</li>
                <li><strong>Cookies de Análise:</strong> Google Analytics (para entender como o site é usado).</li>
                <li><strong>Cookies de Marketing:</strong> Para campanhas de publicidade direcionada (Google Ads/Meta Ads).</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-white mb-3">5. Seus Direitos (Titular dos Dados)</h3>
              <p>Conforme a LGPD, você tem direito a:</p>
              <ul className="grid md:grid-cols-2 gap-2 mt-2">
                <li className="bg-white/5 p-2 rounded border border-white/5 text-sm">Confirmar a existência de tratamento de dados.</li>
                <li className="bg-white/5 p-2 rounded border border-white/5 text-sm">Acessar seus dados pessoais.</li>
                <li className="bg-white/5 p-2 rounded border border-white/5 text-sm">Corrigir dados incompletos ou desatualizados.</li>
                <li className="bg-white/5 p-2 rounded border border-white/5 text-sm">Solicitar a exclusão de dados desnecessários.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-white mb-3">6. Contato do Encarregado (DPO)</h3>
              <p>
                Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato através do e-mail: <a href="mailto:contato@grupomt.com.br" className="text-brand-orange hover:underline">contato@grupomt.com.br</a>.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10 bg-brand-black/50 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-brand-orange text-white font-bold rounded-lg hover:bg-brand-orangeHover transition-colors"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Helper icon component since Target is used in AboutSection and might conflict if not careful, 
// though imports are scoped. I'll define a local one or rename.
const TargetIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
