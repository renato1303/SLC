import React from 'react';
import { Target, Users, Wrench, Flame, Calendar, Video, Check, ArrowRight } from 'lucide-react';

export const ProgramaPilares: React.FC = () => {
  const scrollToForm = () => {
    const formEl = document.getElementById('diagnostico');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pilares = [
    {
      numero: "01",
      icon: <Users className="w-6 h-6 text-[#00E5A0]" />,
      titulo: "Aceleração Simultânea do Triângulo do Negócio",
      descricao: "Treinamos e alinhamos o Dono (visão estratégica), os Gestores (controle e liderança) e a Equipe Comercial de Setters e Closers (execução de campo)."
    },
    {
      numero: "02",
      icon: <Target className="w-6 h-6 text-[#4FA3FF]" />,
      titulo: "Acompanhamento Individualizado da sua Operação",
      descricao: "Análise profunda e individual do seu modelo de vendas. Não usamos conselhos genéricos: olhamos suas métricas, seus scripts e suas chamadas gravadas."
    },
    {
      numero: "03",
      icon: <Wrench className="w-6 h-6 text-[#00E5A0]" />,
      titulo: "Ferramentas & Processos Plug & Play",
      descricao: "Acesso imediato a templates de scripts de prospecção, VSLs de contratação de RH, planilhas de gestão de comissões e dashboards de indicadores prontos."
    },
    {
      numero: "04",
      icon: <Flame className="w-6 h-6 text-[#4FA3FF]" />,
      titulo: "Treinamento com Quem Está no Campo de Batalha",
      descricao: "Aprenda com executivos que fecham contratos de 6 dígitos diariamente e gerenciam times que faturam dezenas de milhões no mercado B2B e digital."
    }
  ];

  const itensReunioesIndividuais = [
    "Otimização da Taxa de Agendamento por SDR/Setter",
    "Engenharia de Funis de Venda e Escada de Produtos",
    "Modelo de Contratação e RH Comercial de Rampa Rápida",
    "Auditoria e Análise de Calls de Venda Gravadas (Zoom)",
    "Scripts Customizados de Prospecção Ativa (Hunter)",
    "Pitch de Apresentação e Discurso de Fechamento",
    "Gestão Comercial e Painel de Metas em Tempo Real"
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#030712] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-tech text-[#00E5A0] uppercase tracking-widest mb-4">
            <Target className="w-3.5 h-3.5" /> ESTRUTURA DO PROGRAMA
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Programa de Aceleração <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC9B] via-[#00E5A0] to-[#4FA3FF]">Sales Lab</span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Um ecossistema desenhado para transformar sua área comercial em um ativo previsível e lucrativo nos próximos 6 meses:
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pilares.map((pilar, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#050B1A] border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-emerald-400/50 transition-colors">
                  {pilar.icon}
                </div>
                <span className="font-heading text-3xl font-black text-slate-700 group-hover:text-[#00E5A0] transition-colors">
                  {pilar.numero}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-white mb-2">
                {pilar.titulo}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {pilar.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Sub-Blocks: Hot Seats & Individual Strategic Meetings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Sub-Block 1: Hot Seats */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-[#050B1A] border border-emerald-500/30 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[#00E5A0] flex items-center justify-center mb-6">
                <Video className="w-6 h-6" />
              </div>

              <span className="px-3 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-xs font-tech font-bold uppercase tracking-wider">
                ACOMPANHAMENTO COLETIVO & APLICADO
              </span>

              <h3 className="font-heading text-2xl font-black text-white mt-4 mb-3 uppercase">
                24 Encontros de Conteúdo Hot Seat & Implementação
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Acontecem a cada 15 dias durante os 6 meses de programa. Espaço prático de análise direta do seu negócio, tira-dúvidas ao vivo com o especialista, simulação de chamadas comerciais e treinamento contínuo de novas táticas do mercado.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-tech text-emerald-400">
              <Calendar className="w-4 h-4 text-[#00E5A0]" />
              <span>Frequência quinzenal ao vivo + Acesso às gravações</span>
            </div>
          </div>

          {/* Sub-Block 2: 6 Individual Meetings */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-[#050B1A] border border-blue-500/30 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>

              <span className="px-3 py-1 rounded bg-blue-950 text-blue-400 border border-blue-500/30 text-xs font-tech font-bold uppercase tracking-wider">
                DIAGNÓSTICO ESTRATÉGICO EXCLUSIVO
              </span>

              <h3 className="font-heading text-2xl font-black text-white mt-4 mb-3 uppercase">
                6 Reuniões Individuais ao longo dos 6 Meses
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Sessões individuais de alinhamento com gestores de vendas das operações da Sales Lab Company para auditoria cirúrgica da sua empresa:
              </p>

              <div className="space-y-2 mb-6">
                {itensReunioesIndividuais.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-tech text-blue-400">Análise Privada da sua Operação</span>
              <button 
                onClick={scrollToForm}
                className="text-xs font-heading font-bold text-white hover:text-[#00E5A0] flex items-center gap-1 cursor-pointer"
              >
                Garantir Minha Vaga <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
