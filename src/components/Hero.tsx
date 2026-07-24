import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-12 border-b border-white/10 overflow-hidden bg-[#0B0F1A]">
      
      {/* Background Person Image for Mobile/Tablet */}
      <div className="lg:hidden absolute inset-x-0 top-0 w-full h-[460px] sm:h-[560px] pointer-events-none overflow-hidden z-0 flex justify-center items-start">
        <img 
          src="/fotohead_mobile.webp" 
          alt="Sales Lab Head Mobile" 
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-top opacity-90 sm:opacity-95 filter contrast-[1.05]"
        />
        {/* Soft gradient fade overlay into dark background behind text */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0F1A]/70 to-[#0B0F1A]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/95 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B0F1A]/60 to-transparent" />
      </div>

      {/* Background Person Image for Desktop */}
      <div className="hidden lg:flex absolute inset-y-0 right-0 w-[58%] h-full pointer-events-none overflow-hidden z-0 justify-end items-start">
        <img 
          src="/fotohead.webp" 
          alt="Sales Lab Head Desktop" 
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-right-top opacity-95 filter contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0B0F1A] to-transparent" />
      </div>

      {/* Background Glass Glowing Orb */}
      <div className="absolute top-1/4 sm:top-1/3 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-10 w-[280px] sm:w-[400px] h-[200px] sm:h-[300px] bg-[#22D3A6]/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Main Content Container (Text over background image) */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Text and Action Column (Centered on mobile/tablet, left-aligned on desktop) */}
        <div className="max-w-3xl lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left reveal flex flex-col items-center lg:items-start pt-32 sm:pt-48 lg:pt-0">
          
          <div className="relative w-full flex flex-col items-center lg:items-start px-2 sm:px-4 lg:px-0 before:absolute before:-inset-6 sm:before:-inset-10 before:bg-[#0B0F1A]/85 before:blur-2xl before:-z-10 before:pointer-events-none lg:before:hidden">
            {/* Direct Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#F5F7FA] tracking-tight leading-[1.2] sm:leading-[1.18] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] break-words">
              Diagnóstico da sua estrutura comercial em 24h feito por quem estrutura operações que vendem{' '}
              <span className="text-[#22D3A6] drop-shadow-[0_0_20px_rgba(34,211,166,0.35)]">sem depender do dono</span>.
            </h1>

            {/* Sub-headline */}
            <p className="mt-3 sm:mt-6 text-sm sm:text-lg md:text-xl text-[#CBD5E1] font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              A Sales Lab analisa as seis partes que fazem um comercial funcionar: time, processo, geração de demanda, CRM, atendimento e gestão e mostra onde a sua operação está travando o crescimento.
            </p>

            {/* Single CTA Button with Animated Glowing Border Light Beam */}
            <div className="mt-6 sm:mt-10 flex flex-col items-center lg:items-start justify-center lg:justify-start w-full sm:w-auto">
              <div className="relative inline-flex items-center justify-center p-[2.5px] rounded-xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] group/beam w-full sm:w-auto max-w-full">
                {/* Soft Glowing Aura Beam */}
                <div 
                  className="absolute -inset-[200%] animate-border-beam opacity-80 blur-md pointer-events-none"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0 260deg, #22D3A6 310deg, #ffffff 345deg, #22D3A6 360deg)'
                  }}
                />
                {/* Sharp High-Contrast Border Light Beam */}
                <div 
                  className="absolute -inset-[200%] animate-border-beam pointer-events-none"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0 260deg, #22D3A6 310deg, #ffffff 345deg, #22D3A6 360deg)'
                  }}
                />
                {/* Button Content */}
                <button
                  onClick={onCtaClick}
                  className="relative z-10 w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base lg:text-lg font-bold text-[#0B0F1A] bg-gradient-to-r from-[#22D3A6] to-[#16a37f] rounded-[9px] shadow-[0_0_25px_rgba(34,211,166,0.35)] hover:shadow-[0_0_45px_rgba(34,211,166,0.6)] transition-all cursor-pointer group text-center"
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">Quero o diagnóstico da minha operação</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-2.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>

              {/* Microcopy Below Button */}
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#9AA3B2] font-medium tracking-wide text-center lg:text-left">
                Preenchimento em ~2 min · retorno do time em até 24h úteis
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
