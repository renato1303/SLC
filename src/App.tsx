import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FormularioDiagnostico } from './components/FormularioDiagnostico';
import { Metodo } from './components/Metodo';
import { Transformacao } from './components/Transformacao';
import { ProvaSocialWhatsapp } from './components/ProvaSocialWhatsapp';
import { SobreFundador } from './components/SobreFundador';
import { FormularioFaqFooter } from './components/FormularioFaqFooter';

export default function App() {
  // IntersectionObserver for smooth scroll reveal transitions
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px 100px 0px'
      }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    const formEl = document.getElementById('diagnostico-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#F5F7FA] font-sans selection:bg-[#22D3A6] selection:text-[#0B0F1A]">
      {/* 1. Header (Logo + CTA) */}
      <Header onCtaClick={scrollToForm} />

      <main>
        {/* 2. Hero Section (Início) */}
        <Hero onCtaClick={scrollToForm} />

        {/* 3. Formulário + Seção "Antes de qualquer proposta" */}
        <FormularioDiagnostico />

        {/* 4. Método Sales Lab (+R$30M) */}
        <Metodo />

        {/* 5. A Transformação */}
        <Transformacao onCtaClick={scrollToForm} />

        {/* 6. Prova Social (Depoimentos estilo prints de WhatsApp) */}
        <ProvaSocialWhatsapp />

        {/* 7. Sobre o Fundador (Filipe Rodrigues) */}
        <SobreFundador />

        {/* 8. Formulário + FAQ + Footer */}
        <FormularioFaqFooter />
      </main>
    </div>
  );
}
