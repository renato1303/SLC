import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { LegalModals } from './LegalModals';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pela página da Sales Lab Company e quero meu diagnóstico comercial gratuito."
  );
  const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#030712] border-t border-slate-800/80 pt-16 pb-12 relative text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#2ECC9B] to-[#1E6FEB] flex items-center justify-center font-bold text-slate-950 font-heading text-lg">
                S
              </div>
              <span className="font-heading text-2xl font-black text-white tracking-wider">
                SALES LAB <span className="text-[#00E5A0]">COMPANY</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-light">
              Programa de aceleração comercial de alta performance para empresas B2B de serviços e infoprodutos. Instalamos Setters, Closers e Sales Farming para multiplicar seu faturamento com margem e previsibilidade.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-[#00E5A0] font-heading font-bold text-sm hover:bg-[#00E5A0] hover:text-slate-950 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Atendimento Direto no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-tech text-xs font-bold text-white uppercase tracking-widest">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#cenario" className="hover:text-[#00E5A0] transition-colors">O Cenário Atual</a></li>
              <li><a href="#transformacao" className="hover:text-[#00E5A0] transition-colors">A Transformação</a></li>
              <li><a href="#ecossistema" className="hover:text-[#00E5A0] transition-colors">O Ecossistema 6 Frentes</a></li>
              <li><a href="#resultados" className="hover:text-[#00E5A0] transition-colors">Resultados e Casos</a></li>
              <li><a href="#fundador" className="hover:text-[#00E5A0] transition-colors">Filipe Rodrigues</a></li>
              <li><a href="#diagnostico" className="hover:text-[#00E5A0] transition-colors">Diagnóstico Gratuito</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-tech text-xs font-bold text-white uppercase tracking-widest">
              Conecte-se Conosco
            </h4>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/saleslabcompany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#00E5A0] hover:border-emerald-500/50 transition-colors"
                aria-label="Instagram Sales Lab Company"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Sales Lab Company Treinamento & Consultoria Ltda.
            </p>
          </div>

        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Sales Lab Company. Todos os direitos reservados. CNPJ: 48.392.104/0001-89.
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setModalType('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Políticas de Privacidade
            </button>
            <button 
              onClick={() => setModalType('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modals */}
      {modalType && (
        <LegalModals type={modalType} onClose={() => setModalType(null)} />
      )}
    </footer>
  );
};
