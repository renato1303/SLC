import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  FileText,
  PhoneCall
} from 'lucide-react';

export const FormularioDiagnostico: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    whatsapp: '',
    tamanhoTime: 'Apenas eu',
    faturamento: 'Até R$30k'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.empresa || !formData.whatsapp) return;
    setSubmitted(true);
  };

  const timeOptions = [
    'Apenas eu',
    '2 a 5 vendedores',
    '6 a 15 vendedores',
    'Mais de 15'
  ];

  const faturamentoOptions = [
    'Até R$30k',
    'R$30k a R$100k',
    'R$100k a R$500k',
    'Acima de R$500k'
  ];

  const whatsappMessage = encodeURIComponent(
    `Olá! Vim pelo site da Sales Lab Company e gostaria de agendar meu diagnóstico gratuito.\n\n` +
    `Nome: ${formData.nome || 'Cliente'}\n` +
    `Empresa: ${formData.empresa || '-'}\n` +
    `E-mail: ${formData.email || '-'}\n` +
    `WhatsApp: ${formData.whatsapp}\n` +
    `Time de Vendas: ${formData.tamanhoTime}\n` +
    `Faturamento Mensal: ${formData.faturamento}`
  );
  const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  return (
    <section 
      id="diagnostico-form" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0A0D14] relative overflow-hidden"
    >
      {/* Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[400px] bg-[#22D3A6]/10 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Section Title & 2 Steps */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 reveal-left">
            <div>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#F5F7FA] tracking-tight leading-[1.18] break-words">
                Antes de qualquer proposta, mostramos onde seu comercial está perdendo dinheiro
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#9AA3B2] leading-relaxed">
                Um processo direto e sem rodeios para entender exatamente a maturidade da sua operação comercial.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5 pt-1">
              {/* Passo 01 Card */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#0F131D]/80 border border-white/10 hover:border-[#22D3A6]/30 transition-all shadow-md">
                <div className="flex items-start gap-3.5 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#22D3A6]/10 border border-[#22D3A6]/30 flex items-center justify-center text-[#22D3A6] shrink-0 shadow-[0_0_15px_rgba(34,211,166,0.15)]">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[#22D3A6] text-[11px] sm:text-xs font-bold uppercase tracking-wider block mb-1">
                      Passo 01
                    </span>
                    <h3 className="text-base sm:text-xl font-bold text-white mb-1.5 sm:mb-2">
                      Preencha o formulário
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9AA3B2] leading-relaxed">
                      Leva apenas 40 segundos. Coletamos informações estratégicas sobre o faturamento, tamanho do time e modelo de vendas atual para mapear seus gargalos.
                    </p>
                    <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 text-xs sm:text-sm text-[#22D3A6] font-semibold flex items-center gap-2">
                      <span>40 segundos</span>
                      <span className="opacity-50">•</span>
                      <span className="opacity-75">Sem burocracia</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passo 02 Card */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#0F131D]/80 border border-white/10 hover:border-[#22D3A6]/30 transition-all shadow-md">
                <div className="flex items-start gap-3.5 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#22D3A6]/10 border border-[#22D3A6]/30 flex items-center justify-center text-[#22D3A6] shrink-0 shadow-[0_0_15px_rgba(34,211,166,0.15)]">
                    <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[#22D3A6] text-[11px] sm:text-xs font-bold uppercase tracking-wider block mb-1">
                      Passo 02
                    </span>
                    <h3 className="text-base sm:text-xl font-bold text-white mb-1.5 sm:mb-2">
                      Diagnóstico com Especialista
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9AA3B2] leading-relaxed">
                      Um especialista sênior da Sales Lab te chama para uma reunião direta no Zoom, apresentando a auditoria do seu comercial e o plano de ação personalizado.
                    </p>
                    <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 text-xs sm:text-sm text-[#22D3A6] font-semibold flex items-center gap-2">
                      <span>Sessão individual no Zoom</span>
                      <span className="opacity-50">•</span>
                      <span className="opacity-75">Plano prático</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Form Card */}
          <div className="lg:col-span-7 reveal-right">
            <div className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-[#0F131D]/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md">
              
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                  Preencha para agendar seu diagnóstico
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-[#9AA3B2]">
                  Resposta em menos de 10 minutos. Seus dados estão seguros.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

                  {/* Text Fields Grid: 2 columns on sm+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#9AA3B2]/40 focus:outline-none focus:border-[#22D3A6] focus:ring-1 focus:ring-[#22D3A6] text-sm sm:text-base transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                        Nome da empresa
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Sua empresa"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#9AA3B2]/40 focus:outline-none focus:border-[#22D3A6] focus:ring-1 focus:ring-[#22D3A6] text-sm sm:text-base transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="voce@empresa.com"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#9AA3B2]/40 focus:outline-none focus:border-[#22D3A6] focus:ring-1 focus:ring-[#22D3A6] text-sm sm:text-base transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="(11) 99999-9999"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#9AA3B2]/40 focus:outline-none focus:border-[#22D3A6] focus:ring-1 focus:ring-[#22D3A6] text-sm sm:text-base transition-all"
                      />
                    </div>
                  </div>

                  {/* Question 1: Quantidade de pessoas no time de vendas */}
                  <div>
                    <label className="block text-xs sm:text-base font-semibold text-white mb-2 sm:mb-3">
                      Quantidade de pessoas no time de vendas
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                      {timeOptions.map((opt) => {
                        const isSelected = formData.tamanhoTime === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, tamanhoTime: opt })}
                            className={`px-2.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-[11px] sm:text-sm font-medium text-center transition-all cursor-pointer flex items-center justify-center min-h-[44px] break-words ${
                              isSelected
                                ? 'border-[#22D3A6] bg-[#22D3A6]/10 text-white ring-1 ring-[#22D3A6]'
                                : 'border-white/10 bg-white/[0.03] text-[#9AA3B2] hover:bg-white/[0.07] hover:text-white'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Question 2: Faturamento mensal da empresa */}
                  <div>
                    <label className="block text-xs sm:text-base font-semibold text-white mb-2 sm:mb-3">
                      Faturamento mensal da empresa
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                      {faturamentoOptions.map((opt) => {
                        const isSelected = formData.faturamento === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, faturamento: opt })}
                            className={`px-2.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-[11px] sm:text-sm font-medium text-center transition-all cursor-pointer flex items-center justify-center min-h-[44px] break-words ${
                              isSelected
                                ? 'border-[#22D3A6] bg-[#22D3A6]/10 text-white ring-1 ring-[#22D3A6]'
                                : 'border-white/10 bg-white/[0.03] text-[#9AA3B2] hover:bg-white/[0.07] hover:text-white'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 px-4 sm:px-6 text-sm sm:text-lg font-bold text-[#0B0F1A] bg-gradient-to-r from-[#22D3A6] to-[#16a37f] hover:opacity-95 rounded-xl shadow-[0_0_25px_rgba(34,211,166,0.35)] hover:shadow-[0_0_35px_rgba(34,211,166,0.5)] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Agendar meu diagnóstico gratuito</span>
                    <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
                  </button>

                </form>
              ) : (
                <div className="text-center py-8 sm:py-10 space-y-4 sm:space-y-5">
                  <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-[#22D3A6] mx-auto drop-shadow-[0_0_20px_rgba(34,211,166,0.4)]" />
                  <h3 className="text-xl sm:text-3xl font-bold text-white">Solicitação Recebida!</h3>
                  <p className="text-sm sm:text-base text-[#9AA3B2] max-w-md mx-auto leading-relaxed">
                    Obrigado, <strong className="text-white">{formData.nome}</strong>. Recebemos as informações da empresa <strong className="text-white">{formData.empresa}</strong>. Nosso especialista entrará em contato em menos de 10 minutos.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#0B0F1A] bg-[#22D3A6] hover:bg-[#1bb891] rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,166,0.3)] mt-2 sm:mt-4 cursor-pointer"
                  >
                    <span>Confirmar via WhatsApp</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


