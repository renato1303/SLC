import React, { useState } from 'react';
import { Layers, Target, Users, PhoneCall, UserPlus, BarChart3, ChevronRight, CheckCircle2, Zap } from 'lucide-react';
import { EcosystemFront } from '../types';

export const EcossistemaMetodo: React.FC = () => {
  const [selectedFront, setSelectedFront] = useState<number>(0);

  const frentes: EcosystemFront[] = [
    {
      id: 1,
      titulo: "1. Funis de Marketing + Comerciais",
      subtitulo: "Aquisição multicanal e atração contínua de potenciais compradores",
      tag: "AQUISIÇÃO & PROSPECÇÃO",
      detalhes: [
        "Funil de Aquisição de Alta Conversão",
        "E-books, Desafios & Webinários de Vendas",
        "Processo de Aplicação & Qualificação de Leads",
        "Social Selling nas redes sociais do negócio",
        "Estratégias de Prospecção Hunter & Inbound",
        "Sales Farming na base ativa de contatos",
        "Programa de Embaixadores e Indicações de Clientes"
      ]
    },
    {
      id: 2,
      titulo: "2. Produtos e Ofertas de Valor",
      subtitulo: "Escada de produtos desenhada para extrair o máximo LTV e ROI",
      tag: "VALOR & MARGEM",
      detalhes: [
        "Produtos de Entrada para rápida ativação",
        "Ofertas Back-End na faixa de R$ 3.000",
        "Programas High-End de R$ 15.000 a R$ 60.000",
        "Imersões e Mentorias Ultra High Ticket (até R$ 250.000)",
        "Modelos de Recorrência e Retenção",
        "Arquitetura de Ofertas para geração de Equity real"
      ]
    },
    {
      id: 3,
      titulo: "3. Pré-Vendas (Setters / SDRs)",
      subtitulo: "A arte de qualificar e vender o agendamento de reuniões",
      tag: "QUALIFICAÇÃO & AGENDAMENTO",
      detalhes: [
        "Scripts de abordagem ativa para Instagram e WhatsApp",
        "Follow-up criativo e de alta frequência (sem soar chato)",
        "Quebra de objeções iniciais de tempo e interesse",
        "Régua de Lembretes Multicanal (E-mail + SMS + WhatsApp + Ligação)",
        "Redução drástica do No-Show nas reuniões de vendas"
      ]
    },
    {
      id: 4,
      titulo: "4. Vendas (Closers)",
      subtitulo: "Condução profissional de reuniões de fechamento 1 a 1",
      tag: "FECHAMENTO & CONVERSÃO",
      detalhes: [
        "Técnicas de Rapport imediato via Zoom/Google Meet",
        "Anamnese comercial profunda para identificar dores reais",
        "Apresentação irresistível da solução e empilhamento de valor",
        "Scripts de Fechamento e Contorno de Objeções de Preço",
        "Venda do próximo passo e transição para o Onboarding"
      ]
    },
    {
      id: 5,
      titulo: "5. Funil de RH Comercial",
      subtitulo: "Seleção contínua: contrata enquanto treina, treina enquanto contrata",
      tag: "GENTE & GESTÃO DE TIME",
      detalhes: [
        "VSL de Vaga Comercial para atrair os melhores talentos",
        "Página de Inscrição e Triagem automatizada de currículos",
        "Testes práticos de pitch de vendas e simulações ao vivo",
        "Entrevista estruturada com o Gestor Comercial",
        "Onboarding express e rampa rápida de produtividade do vendedor"
      ]
    },
    {
      id: 6,
      titulo: "6. Gestão de Processos e Métricas",
      subtitulo: "Dashboard comercial com controle cirúrgico de indicadores em tempo real",
      tag: "DASHBOARD & OPERAÇÃO",
      detalhes: [
        "Acompanhamento da Taxa de Agendamento por SDR/Setter",
        "Métrica exata de Comparecimento (Taxa de Show-Up)",
        "Taxa de Conversão por Closer e por Origem de Lead",
        "Controle em tempo real do Ticket Médio e CAC",
        "Ranking diário de vendas e gamificação do time"
      ]
    }
  ];

  return (
    <section id="ecossistema" className="py-20 md:py-28 relative bg-[#030712] border-t border-slate-800/80">
      {/* Background glow lines */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-tech text-[#00E5A0] uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" /> METODOLOGIA PROPRIETÁRIA SALES LAB
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Não é curso. É um <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC9B] via-[#00E5A0] to-[#4FA3FF]">ecossistema comercial completo</span> instalado na sua empresa.
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Sua operação é blindada por 6 frentes estratégicas integradas. Clique nas frentes abaixo para ver exatamente o que instalamos dentro do seu negócio:
          </p>
        </div>

        {/* Central Hex Hub & 6 Fronts Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Front Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {frentes.map((frente, idx) => (
              <button
                key={frente.id}
                onClick={() => setSelectedFront(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  selectedFront === idx 
                    ? 'bg-slate-900 border-[#00E5A0] shadow-lg shadow-emerald-950/50 translate-x-2' 
                    : 'bg-[#050B1A] border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-tech font-bold text-sm ${
                    selectedFront === idx 
                      ? 'bg-[#00E5A0] text-slate-950' 
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    0{frente.id}
                  </div>
                  <div>
                    <h3 className={`font-heading text-base font-bold ${
                      selectedFront === idx ? 'text-white' : 'text-slate-300'
                    }`}>
                      {frente.titulo.split('. ')[1]}
                    </h3>
                    <span className="text-[10px] font-tech text-emerald-400/90 uppercase tracking-widest">
                      {frente.tag}
                    </span>
                  </div>
                </div>

                <ChevronRight className={`w-5 h-5 transition-transform ${
                  selectedFront === idx ? 'text-[#00E5A0] translate-x-1' : 'text-slate-600'
                }`} />
              </button>
            ))}
          </div>

          {/* Right Column: Active Front Detailed Spec Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#050B1A] border border-emerald-500/30 relative overflow-hidden shadow-2xl">
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <span className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 font-tech text-xs font-bold text-[#00E5A0] uppercase tracking-wider">
                {frentes[selectedFront].tag}
              </span>
              <span className="text-xs font-tech text-slate-400">
                FRENTE ESTRATÉGICA 0{frentes[selectedFront].id} DE 06
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white mb-2">
              {frentes[selectedFront].titulo}
            </h3>

            <p className="text-slate-300 text-sm mb-6 font-normal">
              {frentes[selectedFront].subtitulo}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-tech font-bold uppercase tracking-widest text-slate-400 mb-2">
                O que instalamos na prática:
              </h4>

              {frentes[selectedFront].detalhes.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800/80">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5A0] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-tech text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-[#00E5A0] animate-pulse"></span>
                SISTEMA PLUG AND PLAY
              </span>
              <span>Estrutura Pronta para Execução</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
