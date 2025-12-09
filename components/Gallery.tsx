import React from 'react';

export const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Nossa Estrutura & Clientes</h2>
            <p className="text-gray-400">Confiança construída com trabalho sério em Mato Grosso.</p>
          </div>
          {/* Placeholder for logo strip could go here */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
           {/* Main Large Image */}
           <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
             <img 
               src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1000&auto=format&fit=crop" 
               alt="Caminhão de frota monitorada rodando em estradas de Mato Grosso" 
               loading="lazy"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 flex items-end p-6">
               <p className="text-white font-medium">Frota Monitorada</p>
             </div>
           </div>
           
           {/* Secondary Images */}
           <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
              <img 
               src="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=500&auto=format&fit=crop" 
               alt="Equipe técnica especializada em instalação de rastreadores e tacógrafos" 
               loading="lazy"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
           </div>
           <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
              <img 
               src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format&fit=crop" 
               alt="Detalhe de equipamento tacógrafo digital VDO instalado no painel" 
               loading="lazy"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
           </div>
           
           {/* Wide Bottom Image */}
           <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-2xl">
              <img 
               src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" 
               alt="Gestor de frotas analisando gráficos de desempenho e economia em computador" 
               loading="lazy"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
           </div>
        </div>
      </div>
    </section>
  );
};