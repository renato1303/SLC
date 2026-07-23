import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

export const ProvaSocialWhatsapp: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const depoimentos = [
    {
      id: 1,
      cliente: "Cliente Sales Lab #1",
      tag: "Consultoria B2B & Serviços",
      img: "/depoimento01.jpeg",
      destaque: "R$240k no mês · Meta ampliada para R$3.000.000",
      revealClass: "reveal-left"
    },
    {
      id: 2,
      cliente: "Cliente Sales Lab #2",
      tag: "Agência & Serviços B2B",
      img: "/depoimento02.jpeg",
      destaque: "2 contratos fechados na 1ª semana de aplicação",
      revealClass: "reveal-scale"
    },
    {
      id: 3,
      cliente: "Cliente Sales Lab #3",
      tag: "Mentoria High-Ticket",
      img: "/depoimento03.jpeg",
      destaque: "3 mentorias high-ticket fechadas em 5 dias",
      revealClass: "reveal-right"
    }
  ];

  return (
    <section id="resultados" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden bg-[#0B0F1A]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-[#22D3A6]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center reveal mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F7FA] tracking-tight">
            Alguns de nossos cases de sucesso
          </h2>
        </div>

        {/* Depoimentos em Vídeo */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mb-10 sm:mb-12 reveal-scale">
          {/* Video 1 - Horizontal Widescreen (16:9) */}
          <div className="w-full md:flex-1">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/15 bg-slate-900/80 shadow-2xl transition-all duration-300 hover:border-[#22D3A6]/50 hover:shadow-[0_0_25px_rgba(34,211,166,0.15)]">
              <iframe
                src="https://player.vimeo.com/video/1212392009?autoplay=1&muted=1&title=0&byline=0&portrait=0&badge=0"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title="Depoimento em Vídeo 01"
              ></iframe>
            </div>
          </div>

          {/* Video 2 - Vertical Format (9:16) */}
          <div className="w-full max-w-[280px] sm:max-w-[310px] md:w-[310px] shrink-0">
            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border border-white/15 bg-slate-900/80 shadow-2xl transition-all duration-300 hover:border-[#22D3A6]/50 hover:shadow-[0_0_25px_rgba(34,211,166,0.15)]">
              <iframe
                src="https://player.vimeo.com/video/1212392010?autoplay=1&muted=1&title=0&byline=0&portrait=0&badge=0"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title="Depoimento em Vídeo 02"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Composite Clean Screenshot Gallery */}
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
          
          {/* Top Row: 2 Vertical Screenshots side-by-side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {depoimentos.slice(0, 2).map((dep) => (
              <div 
                key={dep.id}
                onClick={() => setSelectedImg(dep.img)}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-slate-900/60 shadow-2xl transition-all duration-300 hover:border-[#22D3A6]/50 hover:shadow-[0_0_25px_rgba(34,211,166,0.15)] ${dep.revealClass}`}
              >
                <img 
                  src={dep.img} 
                  alt={dep.cliente}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-medium">
                  <ZoomIn className="w-5 h-5 text-[#22D3A6]" />
                  <span>Clique para ampliar</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 1 Horizontal Wide Screenshot Centered */}
          {depoimentos.slice(2, 3).map((dep) => (
            <div 
              key={dep.id}
              onClick={() => setSelectedImg(dep.img)}
              className="w-full max-w-2xl relative group cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-slate-900/60 shadow-2xl transition-all duration-300 hover:border-[#22D3A6]/50 hover:shadow-[0_0_25px_rgba(34,211,166,0.15)] reveal-scale sm:-mt-2 z-10"
            >
              <img 
                src={dep.img} 
                alt={dep.cliente}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-medium">
                <ZoomIn className="w-5 h-5 text-[#22D3A6]" />
                <span>Clique para ampliar</span>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-12 right-0 sm:-right-8 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedImg} 
              alt="Depoimento ampliado"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}
    </section>
  );
};

