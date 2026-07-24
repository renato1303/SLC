import React from 'react';
import { 
  Users,
  Workflow,
  Database,
  Clock,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  FileText,
  UserCheck,
  Calendar,
  MapPin
} from 'lucide-react';

export const FormularioDiagnostico: React.FC = () => {
  const analiseItems = [
    {
      icon: Users,
      title: 'Time comercial:',
      description: 'quem você tem, quem falta, onde a estrutura está incompleta.'
    },
    {
      icon: Workflow,
      title: 'Processo e cadência:',
      description: 'etapas do funil, follow-up e script — o que existe e o que ainda está no improviso.'
    },
    {
      icon: Database,
      title: 'CRM:',
      description: 'se está configurado como sistema ou funciona como agenda de contatos.'
    },
    {
      icon: Clock,
      title: 'Atendimento:',
      description: 'o tempo entre o lead chegar e alguém falar com ele.'
    },
    {
      icon: BarChart3,
      title: 'Gestão:',
      description: 'indicadores acompanhados, rotinas de daily e weekly, capacidade de prever o próximo mês.'
    }
  ];

  const proximosPassos = [
    {
      step: '01',
      icon: FileText,
      title: 'Preenchimento do formulário',
      description: 'Você preenche o formulário com dados da sua operação.'
    },
    {
      step: '02',
      icon: UserCheck,
      title: 'Análise de perfil',
      description: 'Nosso time confirma seu perfil em até 24h úteis.'
    },
    {
      step: '03',
      icon: Calendar,
      title: 'Reunião estratégica',
      description: 'Agendamos a reunião de 45 min com um especialista.'
    },
    {
      step: '04',
      icon: MapPin,
      title: 'Mapa da sua operação',
      description: 'Você sai da conversa com o mapa claro da sua operação.'
    }
  ];

  return (
    <section 
      id="diagnostico-form" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0A0D14] relative overflow-hidden"
    >
      {/* Background Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[400px] bg-[#22D3A6]/10 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        
        {/* 1. SEÇÃO: Não é uma reunião de venda + Próximos Passos */}
        <div className="space-y-8 sm:space-y-10 reveal">
          {/* Main Headline & Subheadline */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5F7FA] tracking-tight leading-[1.18] break-words">
              Não é uma reunião de venda
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-xl text-[#9AA3B2] leading-relaxed">
              É uma análise da sua estrutura. Você sai da conversa com um mapa claro com autonomia para decidir os próximos passos por conta própria ou com nossa ajuda.
            </p>
          </div>

          {/* Como funciona o próximo passo */}
          <div className="space-y-5">
            <h3 className="text-xl sm:text-3xl font-bold text-[#F5F7FA] text-center tracking-tight">
              Como funciona o próximo passo:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-2">
              {proximosPassos.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#0F131D]/90 border border-white/10 hover:border-[#22D3A6]/30 transition-all shadow-md relative group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="text-xs sm:text-sm font-bold text-[#22D3A6] bg-[#22D3A6]/10 px-3 py-1 rounded-md border border-[#22D3A6]/20">
                          Passo {item.step}
                        </span>
                        <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-[#9AA3B2] group-hover:text-[#22D3A6] transition-colors" />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. SEÇÃO: O que é analisado no diagnóstico */}
        <div className="pt-14 sm:pt-20 mt-6 sm:mt-10 border-t border-white/10 reveal">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5F7FA] tracking-tight leading-[1.18] break-words">
              O que é analisado no diagnóstico
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#9AA3B2] max-w-2xl mx-auto leading-relaxed">
              Mapeamos os 5 pontos estratégicos que fazem um comercial funcionar para mostrar onde a sua operação está travando o crescimento.
            </p>
          </div>

          {/* 5 Analysis Points */}
          <div className="space-y-3.5 sm:space-y-4">
            {analiseItems.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#0F131D]/90 border border-white/10 hover:border-[#22D3A6]/30 transition-all shadow-lg flex items-start sm:items-center gap-4 sm:gap-5 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#22D3A6]/10 border border-[#22D3A6]/30 flex items-center justify-center text-[#22D3A6] shrink-0 shadow-[0_0_15px_rgba(34,211,166,0.15)] group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-sm sm:text-base text-[#9AA3B2] leading-relaxed">
                    <strong className="text-white font-semibold text-base sm:text-lg mr-2 block sm:inline mb-0.5 sm:mb-0">
                      {item.title}
                    </strong>
                    <span>{item.description}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

