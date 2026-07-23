import React, { useEffect, useRef, useState } from 'react';
import { 
  Search, 
  Layers, 
  CalendarCheck, 
  Handshake, 
  ShieldCheck 
} from 'lucide-react';

export const Metodo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pilares = [
    {
      num: "PILAR 01",
      nome: "Diagnóstico Comercial",
      descricao: "Mapeamento de gargalos, funil atual e indicadores reais da operação",
      Icon: Search
    },
    {
      num: "PILAR 02",
      nome: "Estruturação de Ofertas",
      descricao: "Escada de produtos: entrada, high-end e ultra high ticket",
      Icon: Layers
    },
    {
      num: "PILAR 03",
      nome: "Implantação de Pré-Vendas",
      descricao: "Setters, cadência de follow-up e reversão de objeções",
      Icon: CalendarCheck
    },
    {
      num: "PILAR 04",
      nome: "Fechamento e Sales Farming",
      descricao: "Closers com script validado, rapport e revenda para a base",
      Icon: Handshake
    },
    {
      num: "PILAR 05",
      nome: "Governança Comercial",
      descricao: "Metas, dashboard de indicadores e sustentabilidade do resultado",
      Icon: ShieldCheck
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F1A] text-[#F5F7FA] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* HEADLINE & PARAGRAPH (Left Aligned, No Eyebrow Badge, Max Widths as specified) */}
        <div className="text-left space-y-4">
          <h2 className="max-w-[760px] text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] font-sans">
            <span className="text-[#F5F7FA] block">O método que já gerou</span>
            <span className="text-[#22D3A6] block">+R$30 milhões em vendas.</span>
          </h2>

          <p className="max-w-[640px] text-sm sm:text-base text-[#9AA3B2] leading-relaxed font-normal pt-1">
            Construído por quem já vendeu mais de R$2 milhões 1 a 1 como Closer e estruturou comerciais que já geraram mais de R$30 milhões, em mais de 7 países. Hoje aplicado, peça por peça, dentro de negócios de serviço, consultoria e infoproduto.
          </p>
        </div>

        {/* TIMELINE OF PILLARS (~64px vertical gap) */}
        <div className="mt-16 sm:mt-20 relative">
          
          {/* DESKTOP TIMELINE (>=1024px: Horizontal 5 columns) */}
          <div className="hidden lg:block relative">
            
            {/* Horizontal Line passing through center of circles (y = 36px) */}
            <div className="absolute top-[36px] left-[36px] right-[36px] h-[2px] bg-[#22D3A6]/25 z-0 overflow-hidden pointer-events-none">
              <div 
                className="h-full bg-[#22D3A6] transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? '100%' : '0%',
                  transitionDelay: '100ms'
                }}
              />
            </div>

            {/* 5 Pillars Grid */}
            <div className="grid grid-cols-5 gap-6 relative z-10">
              {pilares.map((pilar, idx) => {
                const { Icon } = pilar;
                const delayMs = 150 + idx * 120;

                return (
                  <div
                    key={pilar.num}
                    className="flex flex-col items-start transition-all duration-700 ease-out"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(20px)',
                      transitionDelay: `${delayMs}ms`
                    }}
                  >
                    {/* Circle ~72px with green background glow shadow matching the button tone */}
                    <div 
                      className="w-[72px] h-[72px] rounded-full flex items-center justify-center shrink-0 mb-5 shadow-[0_0_25px_rgba(34,211,166,0.35)] hover:shadow-[0_0_35px_rgba(34,211,166,0.55)] transition-shadow"
                      style={{
                        background: 'radial-gradient(circle, #22D3A6 0%, #159C7A 100%)'
                      }}
                    >
                      <Icon className="w-7 h-7 text-white stroke-[1.75]" />
                    </div>

                    {/* Label */}
                    <span className="text-[12px] font-semibold uppercase tracking-wider block mb-1 text-[#22D3A6]">
                      {pilar.num}
                    </span>

                    {/* Title */}
                    <h3 className="text-[18px] font-bold leading-snug mb-2 text-white">
                      {pilar.nome}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] text-[#9AA3B2] leading-relaxed line-clamp-2">
                      {pilar.descricao}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TABLET / MOBILE TIMELINE (<1024px: Vertical sequence with vertical line) */}
          <div className="lg:hidden relative">
            
            {/* Vertical Line passing through center of circles (x = 28px on mobile, 36px on sm) */}
            <div className="absolute top-[28px] sm:top-[36px] bottom-[28px] sm:bottom-[36px] left-[28px] sm:left-[36px] w-[2px] bg-[#22D3A6]/25 z-0 overflow-hidden pointer-events-none -translate-x-1/2">
              <div 
                className="w-full bg-[#22D3A6] transition-all duration-1000 ease-out"
                style={{
                  height: isVisible ? '100%' : '0%',
                  transitionDelay: '100ms'
                }}
              />
            </div>

            {/* Vertical Pillar List */}
            <div className="space-y-8 sm:space-y-10 relative z-10">
              {pilares.map((pilar, idx) => {
                const { Icon } = pilar;
                const delayMs = 150 + idx * 120;

                return (
                  <div
                    key={pilar.num}
                    className="flex items-start gap-4 sm:gap-6 transition-all duration-700 ease-out"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(20px)',
                      transitionDelay: `${delayMs}ms`
                    }}
                  >
                    {/* Circle ~56px on mobile, 72px on sm+ with green background glow shadow */}
                    <div 
                      className="w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(34,211,166,0.35)]"
                      style={{
                        background: 'radial-gradient(circle, #22D3A6 0%, #159C7A 100%)'
                      }}
                    >
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white stroke-[1.75]" />
                    </div>

                    {/* Text content next to circle */}
                    <div className="pt-0.5 sm:pt-1 min-w-0 flex-1">
                      <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider block mb-0.5 sm:mb-1 text-[#22D3A6]">
                        {pilar.num}
                      </span>
                      <h3 className="text-base sm:text-[18px] font-bold leading-snug mb-1 sm:mb-1.5 text-white">
                        {pilar.nome}
                      </h3>
                      <p className="text-xs sm:text-[14px] text-[#9AA3B2] leading-relaxed">
                        {pilar.descricao}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
