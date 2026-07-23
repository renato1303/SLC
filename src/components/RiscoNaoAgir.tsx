import React from 'react';
import { Frown, HeartPulse, DollarSign, Clock, ShieldAlert, Swords, AlertOctagon } from 'lucide-react';

export const RiscoNaoAgir: React.FC = () => {
  const riscos = [
    {
      icon: <Frown className="w-7 h-7 text-[#00E5A0]" />,
      palavra: "Frustrar a Equipe",
      explicacao: "Bons vendedores sem metas claras, sem treinamento contínuo e sem processo previsível perdem a motivação, cobram resultados do gesto e terminam pedindo demissão."
    },
    {
      icon: <HeartPulse className="w-7 h-7 text-blue-400" />,
      palavra: "Perder Saúde",
      explicacao: "O fundador tenta ser Closer, SDR, gestor de tráfego e gerente comercial simultaneamente. O resultado é ansiedade, estresse crônico e exaustão mental."
    },
    {
      icon: <DollarSign className="w-7 h-7 text-[#00E5A0]" />,
      palavra: "Perder Caixa (Dinheiro na Mesa)",
      explicacao: "Centenas de leads qualificados que entraram na sua base são esquecidos por falta de um funil de Sales Farming e follow-ups estruturados."
    },
    {
      icon: <Clock className="w-7 h-7 text-blue-400" />,
      palavra: "Perder Tempo",
      explicacao: "Meses ou anos tentando reinventar a roda, testando scripts furados da internet e errando em contratações que custam salários e rescisões altas."
    },
    {
      icon: <ShieldAlert className="w-7 h-7 text-[#00E5A0]" />,
      palavra: "Perder Moral",
      explicacao: "Sua marca perde o posicionamento de autoridade no mercado quando o atendimento comercial é desorganizado, demorado ou agressivo de forma amadora."
    },
    {
      icon: <Swords className="w-7 h-7 text-blue-400" />,
      palavra: "Perder Espaço para a Concorrência",
      explicacao: "Enquanto você hesita em profissionalizar seu comercial, concorrentes mais estruturados capturam seus clientes e dominam a fatia mais lucrativa do mercado."
    }
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#030712] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/40 border border-amber-500/30 text-xs font-tech text-amber-400 uppercase tracking-widest mb-4">
            <AlertOctagon className="w-3.5 h-3.5" /> O CUSTO DA OMISSÃO
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            O custo de continuar tentando <span className="text-[#00E5A0]">resolver isso sozinho</span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Tentar estruturar uma máquina de vendas na base da tentativa e erro sem método testado expõe seu negócio a 6 riscos devastadores:
          </p>
        </div>

        {/* 6 Risk Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riscos.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-[#050B1A] border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:border-emerald-400/50 transition-colors">
                {item.icon}
              </div>

              <div className="font-tech text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">
                RISCO CRÍTICO #{index + 1}
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-3 uppercase">
                {item.palavra}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.explicacao}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Impact Statement Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-900 to-red-950/40 border border-red-500/30 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <p className="font-heading text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
              "Isso não é só perder uma venda.{' '}
              <span className="text-red-400 text-glow-green">É rotatividade do time — ou perda total do time comercial."</span>
            </p>
            <p className="mt-3 text-slate-300 text-sm max-w-2xl mx-auto font-normal">
              Empresas sem processo perdem seus melhores talentos para concorrentes que entregam reuniões qualificadas e comissões constantes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
