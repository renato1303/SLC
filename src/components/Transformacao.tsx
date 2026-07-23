import React from 'react';
import { Users, LineChart, Layers, Building2, ArrowRight } from 'lucide-react';

interface TransformacaoProps {
  onCtaClick?: () => void;
}

export const Transformacao: React.FC<TransformacaoProps> = ({ onCtaClick }) => {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById('diagnostico-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[300px] bg-[#22D3A6]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center reveal mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F7FA] tracking-tight">
            O que muda no seu negócio depois da Sales Lab
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9AA3B2] max-w-xl mx-auto">
            A transição de uma operação dependente do dono para uma estrutura comercial previsível e profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          
          {/* Card 1 */}
          <div className="p-8 rounded-2xl glass-card glass-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#22D3A6]/10 border border-[#22D3A6]/30 text-[#22D3A6] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,166,0.15)]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F5F7FA] mb-3">
                Vendas acontecendo sem sua presença constante
              </h3>
              <p className="text-sm text-[#9AA3B2] leading-relaxed">
                Setters e Closers treinados executam reuniões e fechamentos diariamente com processos e roteiros padronizados. Você assume o papel de líder estratégico da empresa enquanto o motor comercial roda de forma independente.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl glass-card glass-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#22D3A6]/10 border border-[#22D3A6]/30 text-[#22D3A6] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,166,0.15)]">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F5F7FA] mb-3">
                Previsibilidade real e meta batida todo mês
              </h3>
              <p className="text-sm text-[#9AA3B2] leading-relaxed">
                Com um pipeline organizado, cadência ativa de prospecção e controle diário de métricas (agendamento, comparecimento e conversão), você sabe exatamente quanto caixa vai entrar antes do mês fechar.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl glass-card glass-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#22D3A6]/10 border border-[#22D3A6]/30 text-[#22D3A6] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,166,0.15)]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F5F7FA] mb-3">
                Ticket médio e LTV significativamente maiores
              </h3>
              <p className="text-sm text-[#9AA3B2] leading-relaxed">
                Implementamos uma escada completa de produtos (entrada, back-end, high-end e ultra high ticket) que extrai o valor máximo da sua base ativa de clientes e escala continuamente o Lifetime Value.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-2xl glass-card glass-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#22D3A6]/10 border border-[#22D3A6]/30 text-[#22D3A6] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,166,0.15)]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F5F7FA] mb-3">
                Equity real e valor de mercado da empresa
              </h3>
              <p className="text-sm text-[#9AA3B2] leading-relaxed">
                Transformamos seu setor comercial em um ativo estruturado com playbooks, métricas e processos documentados, aumentando drasticamente o valor de valuation da sua empresa para futuros investidores ou M&A.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Button with Animated Glowing Border Light Beam */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center px-2 reveal">
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
              onClick={handleClick}
              className="relative z-10 inline-flex items-center justify-center px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#0B0F1A] bg-gradient-to-r from-[#22D3A6] to-[#16a37f] rounded-[9px] shadow-[0_0_25px_rgba(34,211,166,0.35)] hover:shadow-[0_0_45px_rgba(34,211,166,0.6)] transition-all cursor-pointer group whitespace-nowrap"
            >
              <span>Quero o diagnóstico da minha operação</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-2.5 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>

          {/* Microcopy Below Button */}
          <p className="mt-3 text-xs sm:text-sm text-[#9AA3B2] text-center font-medium tracking-wide">
            Preenchimento em ~2 min · retorno do time em até 24h úteis
          </p>
        </div>

      </div>
    </section>
  );
};

