import React, { useEffect, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

// Lazy loading below-the-fold components to minimize initial bundle size and maximize loading speed
const FormularioDiagnostico = lazy(() => import('./components/FormularioDiagnostico').then(m => ({ default: m.FormularioDiagnostico })));
const Metodo = lazy(() => import('./components/Metodo').then(m => ({ default: m.Metodo })));
const Transformacao = lazy(() => import('./components/Transformacao').then(m => ({ default: m.Transformacao })));
const ProvaSocialWhatsapp = lazy(() => import('./components/ProvaSocialWhatsapp').then(m => ({ default: m.ProvaSocialWhatsapp })));
const SobreFundador = lazy(() => import('./components/SobreFundador').then(m => ({ default: m.SobreFundador })));
const FormularioFaqFooter = lazy(() => import('./components/FormularioFaqFooter').then(m => ({ default: m.FormularioFaqFooter })));

// Lightweight section fallback matching space to prevent Cumulative Layout Shift (CLS)
const SectionFallback = () => <div className="min-h-[300px] w-full bg-transparent" />;

export default function App() {
  // IntersectionObserver for lightweight scroll reveal transitions
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
        rootMargin: '0px 0px 120px 0px'
      }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  const scrollToForm = () => {
    const formEl = document.getElementById('diagnostico-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#F5F7FA] font-sans selection:bg-[#22D3A6] selection:text-[#0B0F1A]">
      {/* 1. Header (Logo + CTA) - Loaded immediately for zero delay */}
      <Header onCtaClick={scrollToForm} />

      <main>
        {/* 2. Hero Section (Início) - Critical Above-the-fold */}
        <Hero onCtaClick={scrollToForm} />

        {/* Below the fold sections lazy loaded asynchronously */}
        <Suspense fallback={<SectionFallback />}>
          <div className="cv-auto">
            {/* 3. Formulário + Seção "Antes de qualquer proposta" */}
            <FormularioDiagnostico />
          </div>

          <div className="cv-auto">
            {/* 4. Método Sales Lab (+R$30M) */}
            <Metodo />
          </div>

          <div className="cv-auto">
            {/* 5. A Transformação */}
            <Transformacao onCtaClick={scrollToForm} />
          </div>

          <div className="cv-auto">
            {/* 6. Prova Social (Depoimentos estilo prints de WhatsApp) */}
            <ProvaSocialWhatsapp />
          </div>

          <div className="cv-auto">
            {/* 7. Sobre o Fundador (Filipe Rodrigues) */}
            <SobreFundador />
          </div>

          <div className="cv-auto">
            {/* 8. Formulário + FAQ + Footer */}
            <FormularioFaqFooter />
          </div>
        </Suspense>
      </main>
    </div>
  );
}
