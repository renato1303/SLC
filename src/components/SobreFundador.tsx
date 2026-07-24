import React from 'react';

export const SobreFundador: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E1424]/20 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Portrait Image Card */}
          <div className="md:col-span-5 relative reveal-left">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0E1424]/80 backdrop-blur-md">
              <picture>
                <source srcSet="/image.webp" type="image/webp" />
                <img 
                  src="/image.jpeg" 
                  alt="Filipe Rodrigues - Fundador da Sales Lab Company" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover object-center max-h-[500px] aspect-[4/5]"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B0F1A]/80 backdrop-blur-md border border-white/10 shadow-lg">
                <div className="text-base font-bold text-[#F5F7FA]">Filipe Rodrigues</div>
                <div className="text-xs text-[#22D3A6] font-medium drop-shadow-[0_0_8px_rgba(34,211,166,0.3)]">Fundador & Head de Estratégia Comercial</div>
              </div>
            </div>
          </div>

          {/* Text Content Panel */}
          <div className="md:col-span-7 space-y-6 reveal-right">
            
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F7FA] tracking-tight mb-6">
                Quem está por trás da Sales Lab Company
              </h2>

              <p className="text-sm sm:text-base text-[#9AA3B2] leading-relaxed space-y-4">
                Filipe Rodrigues já vendeu mais de R$2 milhões 1 a 1 como Closer, em 3 anos de atuação direta na linha de frente das vendas. São 7 anos de mercado digital, com experiência estruturando operações comerciais em mais de 7 países. Hoje especialista em funis de vendas e responsável por mais de R$30 milhões gerados através da estruturação de times comerciais de clientes. É idealizador da Imersão Bora Vender e conselheiro da comunidade Marketeiros de 8 e 9 dígitos. A Sales Lab Company nasceu para colocar esse método testado em campo, não em teoria, dentro de negócios que precisam vender com processo, não com sorte.
              </p>
            </div>

            {/* Quick Metrics Badges */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#9AA3B2]">
              <div className="px-4 py-3 rounded-xl glass-card border border-white/10 text-center sm:text-left">
                <span className="block text-lg font-bold text-[#22D3A6] drop-shadow-[0_0_8px_rgba(34,211,166,0.3)]">7+ Anos</span>
                <span className="text-[#9AA3B2]">No mercado digital</span>
              </div>
              <div className="px-4 py-3 rounded-xl glass-card border border-white/10 text-center sm:text-left">
                <span className="block text-lg font-bold text-[#22D3A6] drop-shadow-[0_0_8px_rgba(34,211,166,0.3)]">+R$30M</span>
                <span className="text-[#9AA3B2]">Gerados para clientes</span>
              </div>
              <div className="px-4 py-3 rounded-xl glass-card border border-white/10 text-center sm:text-left">
                <span className="block text-lg font-bold text-[#22D3A6] drop-shadow-[0_0_8px_rgba(34,211,166,0.3)]">+7 Países</span>
                <span className="text-[#9AA3B2]">Operações B2B</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

