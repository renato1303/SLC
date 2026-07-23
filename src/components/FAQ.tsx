import React, { useState } from 'react';
import { HelpCircle, Plus, Minus, ShieldCheck } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      pergunta: "Em quanto tempo vejo resultado na prática?",
      resposta: "Nas primeiras 2 a 3 semanas. Como entregamos scripts prontos e reestruturamos a oferta de entrada e a abordagem ativa com a base existente (Sales Farming), nossos clientes costumam fechar novos contratos antes mesmo de concluir o primeiro mês."
    },
    {
      pergunta: "Preciso já ter um time de vendas montado para entrar?",
      resposta: "Não. Se você ainda vende sozinho, nós instalamos nosso Funil de RH Comercial para atrair, filtrar e contratar seus primeiros Setters e Closers. Você aprende a 'contratar enquanto treina e treinar enquanto contrata'."
    },
    {
      pergunta: "Funciona para infoprodutos e também para serviços/consultoria?",
      resposta: "Sim. A metodologia atende perfeitamente empresas de serviços B2B, consultorias de alto valor, agências, mentorias e infoprodutores que vendem High-Ticket (R$ 3.000 a R$ 250.000). O princípio de qualificação e fechamento 1 a 1 é o mesmo."
    },
    {
      pergunta: "Vocês só ensinam teoria ou ajudam a implementar no meu negócio?",
      resposta: "Nós acompanhamos a implementação real. Além dos 24 encontros de hot seat para validar suas chamadas gravadas e scripts, você terá 6 reuniões estratégicas individuais com nossos gestores comerciais para auditar seus números."
    },
    {
      pergunta: "O programa é online ou presencial?",
      resposta: "100% online e ao vivo, permitindo que você e toda a sua equipe comercial (SDRs, Closers e Gestores) participem dos treinamentos de qualquer lugar do Brasil ou do mundo sem custos de deslocamento."
    },
    {
      pergunta: "E se minha equipe comercial resistir à mudança de processo?",
      resposta: "Resistência acontece por falta de clareza ou comissões baixas. Quando seu time percebe que o novo processo entrega reuniões muito mais qualificadas e aumenta a taxa de fechamento — enchendo o bolso deles de comissão —, a adesão é imediata."
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#050B1A] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-tech text-[#00E5A0] uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> DÚVIDAS FREQUENTES
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Respostas diretas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC9B] to-[#00E5A0]">sem enrolação</span>
          </h2>

          <p className="mt-3 text-slate-300 text-base">
            Tudo o que você precisa saber sobre como funciona a aceleração comercial da Sales Lab Company:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
              >
                <span className="font-heading text-lg sm:text-xl font-bold text-white uppercase">
                  {faq.pergunta}
                </span>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  openIndex === idx ? 'bg-[#00E5A0] text-slate-950 rotate-180' : 'bg-slate-800 text-slate-300'
                }`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 font-light">
                  {faq.resposta}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
