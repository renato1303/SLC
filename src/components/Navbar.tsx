import React, { useState, useEffect } from 'react';
import { ShieldCheck, ChevronRight, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formEl = document.getElementById('diagnostico');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#030712]/90 backdrop-blur-md border-b border-emerald-500/20 py-3 shadow-2xl shadow-emerald-950/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2ECC9B] to-[#1E6FEB] rounded-lg rotate-45 opacity-80 group-hover:opacity-100 transition-opacity blur-[2px]"></div>
              
              {/* Hexagon icon */}
              <div className="relative w-9 h-9 bg-[#050B1A] rounded-md flex items-center justify-center border border-emerald-400/40">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#00E5A0]" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-black tracking-wider text-white leading-none">
                SALES LAB <span className="text-[#00E5A0]">COMPANY</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-tech font-bold uppercase mt-0.5">
                Aceleração Comercial B2B
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#cenario" className="hover:text-[#00E5A0] transition-colors">O Cenário</a>
            <a href="#transformacao" className="hover:text-[#00E5A0] transition-colors">Transformação</a>
            <a href="#ecossistema" className="hover:text-[#00E5A0] transition-colors">O Ecossistema</a>
            <a href="#resultados" className="hover:text-[#00E5A0] transition-colors">Resultados</a>
            <a href="#fundador" className="hover:text-[#00E5A0] transition-colors">Filipe Rodrigues</a>
            <a href="#faq" className="hover:text-[#00E5A0] transition-colors">FAQ</a>
          </nav>

          {/* Right Status Badge & CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs text-emerald-400 font-tech">
              <span className="w-2 h-2 rounded-full bg-[#00E5A0] animate-pulse"></span>
              <span>OPERAÇÃO ATIVA</span>
            </div>

            <button 
              onClick={scrollToForm}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-black font-heading text-slate-950 bg-gradient-to-r from-[#2ECC9B] via-[#00E5A0] to-[#4FA3FF] rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,229,160,0.5)] cursor-pointer group"
            >
              <span>DIAGNÓSTICO GRATUITO</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050B1A] border-b border-emerald-500/20 px-4 pt-4 pb-6 mt-3 space-y-3">
          <a href="#cenario" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-[#00E5A0] font-medium border-b border-slate-900">O Cenário</a>
          <a href="#transformacao" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-[#00E5A0] font-medium border-b border-slate-900">Transformação</a>
          <a href="#ecossistema" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-[#00E5A0] font-medium border-b border-slate-900">O Ecossistema</a>
          <a href="#resultados" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-[#00E5A0] font-medium border-b border-slate-900">Resultados</a>
          <a href="#fundador" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-[#00E5A0] font-medium border-b border-slate-900">Filipe Rodrigues</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-[#00E5A0] font-medium border-b border-slate-900">FAQ</a>
          
          <div className="pt-2">
            <button 
              onClick={scrollToForm}
              className="w-full py-3 text-center text-sm font-heading font-black text-slate-950 bg-gradient-to-r from-[#2ECC9B] to-[#00E5A0] rounded-lg shadow-lg shadow-emerald-500/20"
            >
              AGENDAR DIAGNÓSTICO GRATUITO →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
