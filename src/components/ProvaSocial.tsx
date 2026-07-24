import React, { useState } from 'react';
import { MessageSquare, ZoomIn, X, Sparkles } from 'lucide-react';

export const ProvaSocial: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const printsWhatsApp = [
    {
      cliente: "Cliente Sales Lab #1",
      tag: "Consultoria B2B & Serviços",
      img: "/depoimento01.webp",
      destaque: "R$240.000 no mês (Meta de R$2M subiu para R$3M)"
    },
    {
      cliente: "Cliente Sales Lab #2",
      tag: "Agência / Aceleração",
      img: "/depoimento02.webp",
      destaque: "2 contratos fechados em 1 semana"
    },
    {
      cliente: "Cliente Sales Lab #3",
      tag: "Infoprodutor & Mentoria",
      img: "/depoimento03.webp",
      destaque: "3 mentorias de R$15.000 vendidas no mesmo ciclo"
    }
  ];

  return (
    <section id="resultados" className="py-20 md:py-28 relative bg-[#050B1A] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-tech text-[#00E5A0] uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5" /> PROVA SOCIAL REAL
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Resultado de quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC9B] to-[#00E5A0]">já está dentro</span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Mensagens reais extraídas dos grupos fechados de acompanhamento da Sales Lab Company:
          </p>
        </div>

        {/* WhatsApp Chat Print Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {printsWhatsApp.map((print, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-[#0B141A] border border-emerald-500/30 shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              {/* WhatsApp Chat Header */}
              <div className="bg-[#202C33] px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#2ECC9B] to-[#1E6FEB] flex items-center justify-center font-bold text-slate-950 text-xs font-tech">
                    SL
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm flex items-center gap-1.5">
                      {print.cliente}
                      <Sparkles className="w-3.5 h-3.5 text-[#00E5A0]" />
                    </div>
                    <div className="text-[10px] text-slate-400 font-tech">
                      {print.tag}
                    </div>
                  </div>
                </div>

                <div className="text-[10px] font-tech text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  VERIFICADO
                </div>
              </div>

              {/* Chat Screenshot Image */}
              <div className="p-4 bg-[#0B141A] relative group cursor-pointer" onClick={() => setSelectedImg(print.img)}>
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900">
                  <img 
                    src={print.img} 
                    alt={print.cliente}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain max-h-[450px]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-medium">
                    <ZoomIn className="w-5 h-5 text-[#00E5A0]" />
                    <span>Clique para ampliar</span>
                  </div>
                </div>
              </div>

              {/* Result Highlight Footer */}
              <div className="bg-[#111B21] p-3.5 border-t border-slate-800/80 flex items-center justify-center gap-2.5 text-xs text-[#00E5A0] font-tech font-bold text-center">
                <span>{print.destaque}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-2xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
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

