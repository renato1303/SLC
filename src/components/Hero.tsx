import React from 'react';
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, TrendingUp } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
      {/* Background Glass Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#22D3A6]/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center reveal relative z-10">
        
        {/* Direct Headline - NO eyebrow above */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] tracking-tight leading-[1.18] drop-shadow-sm break-words">
          Mais de R$30 milhões gerados estruturando processos comerciais que{' '}
          <span className="text-[#22D3A6] drop-shadow-[0_0_20px_rgba(34,211,166,0.35)]">não dependem mais do dono</span>{' '}
          para vender.
        </h1>

        {/* Sub-headline */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-[#9AA3B2] font-normal leading-relaxed max-w-2xl mx-auto px-2">
          Instalamos Setters, Closers e Sales Farming na sua operação com processo, script e gestão validados, não com sorte.
        </p>

        {/* Single CTA Button with Animated Glowing Border Light Beam */}
        <div className="mt-8 sm:mt-10 flex justify-center px-2">
          <div className="relative inline-flex items-center justify-center p-[2.5px] rounded-xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] group/beam max-w-full">
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
              className="relative z-10 inline-flex items-center justify-center px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#0B0F1A] bg-gradient-to-r from-[#22D3A6] to-[#16a37f] rounded-[9px] shadow-[0_0_25px_rgba(34,211,166,0.35)] hover:shadow-[0_0_45px_rgba(34,211,166,0.6)] transition-all cursor-pointer group whitespace-nowrap"
            >
              <span>Quero meu diagnóstico gratuito</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-2.5 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>
        </div>

        {/* Credibility Line (4 Real Metrics with Glassmorphism Cards) */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-center">
          <div className="p-3 sm:p-4 rounded-xl glass-card glass-card-hover">
            <div className="text-lg sm:text-2xl font-bold text-[#22D3A6] drop-shadow-[0_0_10px_rgba(34,211,166,0.2)]">+R$30Mi</div>
            <div className="text-[11px] sm:text-xs text-[#9AA3B2] mt-0.5 sm:mt-1 font-medium">Gerados em B2B</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl glass-card glass-card-hover">
            <div className="text-lg sm:text-2xl font-bold text-[#22D3A6] drop-shadow-[0_0_10px_rgba(34,211,166,0.2)]">+R$2Mi</div>
            <div className="text-[11px] sm:text-xs text-[#9AA3B2] mt-0.5 sm:mt-1 font-medium">Vendidos 1 a 1</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl glass-card glass-card-hover">
            <div className="text-lg sm:text-2xl font-bold text-[#22D3A6] drop-shadow-[0_0_10px_rgba(34,211,166,0.2)]">+7 Países</div>
            <div className="text-[11px] sm:text-xs text-[#9AA3B2] mt-0.5 sm:mt-1 font-medium">Operações ativas</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl glass-card glass-card-hover">
            <div className="text-lg sm:text-2xl font-bold text-[#22D3A6] drop-shadow-[0_0_10px_rgba(34,211,166,0.2)]">6 Meses</div>
            <div className="text-[11px] sm:text-xs text-[#9AA3B2] mt-0.5 sm:mt-1 font-medium">Acompanhamento</div>
          </div>
        </div>

      </div>
    </section>
  );
};
