import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  MessageCircle, 
  Instagram, 
  Linkedin
} from 'lucide-react';

export const FormularioFaqFooter: React.FC = () => {
  // FAQ State (starts closed)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 0,
      q: 'Quanto tempo leva para ver resultado?',
      a: 'As primeiras 2 a 3 semanas já mostram sinal. Como reestruturamos script, oferta de entrada e ativamos a base atual via Sales Farming logo no início, boa parte dos clientes fecha antes de completar o primeiro mês dentro do programa.'
    },
    {
      id: 1,
      q: 'Preciso já ter um time de vendas montado?',
      a: 'Não. Se hoje você vende sozinho, instalamos o Funil de RH Comercial o mesmo processo que usamos para atrair, filtrar e contratar Setters e Closers do zero. A lógica é "contratar enquanto treina, treinar enquanto contrata".'
    },
    {
      id: 2,
      q: 'Funciona para o meu tipo de negócio (infoproduto, serviço, consultoria)?',
      a: 'Sim. A metodologia foi desenhada pra operações de ticket entre R$3 mil e R$250 mil da oferta de entrada até o ultra high ticket cobrindo consultorias, agências, mentorias e infoprodutores que vendem 1 a 1.'
    },
    {
      id: 3,
      q: 'Vocês só ensinam ou ajudam a implementar de fato?',
      a: 'Implementamos junto. Além dos encontros quinzenais de hot seat pra validar script e chamadas gravadas, você tem reuniões individuais com nossos gestores comerciais pra auditar seus números e um Gerente de Sucesso te acompanhando na aplicação, não só no conteúdo.'
    },
    {
      id: 4,
      q: 'O programa é online ou presencial?',
      a: '100% online e ao vivo. Você, seus Setters, Closers e gestores participam dos treinamentos de qualquer lugar sem custo de deslocamento e sem depender de agenda presencial.'
    }
  ];

  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Vim pelo site da Sales Lab Company e gostaria de agendar meu diagnóstico gratuito.')}`;

  return (
    <>
      {/* FAQ SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center reveal mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F7FA] tracking-tight">
              Ainda está com dúvida?
            </h2>
            <p className="mt-3 text-sm text-[#9AA3B2]">
              Tire suas dúvidas sobre o funcionamento do programa de aceleração comercial da Sales Lab.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="rounded-2xl glass-card border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-[#F5F7FA] hover:text-[#22D3A6] transition-colors cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#22D3A6] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#9AA3B2] leading-relaxed border-t border-white/10">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 text-[#9AA3B2] text-xs">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8 mb-6">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img 
              src="/logo-removebg-preview.png" 
              alt="Sales Lab Company" 
              loading="lazy"
              decoding="async"
              className="h-12 sm:h-14 w-auto mb-3 opacity-95 drop-shadow-[0_0_12px_rgba(34,211,166,0.2)]"
            />
            <p className="text-xs text-[#9AA3B2] max-w-sm">
              Aceleração comercial B2B para empresas de serviços, consultorias e infoprodutos.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/saleslabcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card border border-white/10 text-[#F5F7FA] hover:text-[#22D3A6] hover:border-[#22D3A6]/40 transition-all hover:scale-105"
              aria-label="Instagram Sales Lab Company"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="max-w-5xl mx-auto text-center text-[#9AA3B2] text-[11px] space-y-1">
          <p>© {new Date().getFullYear()} Sales Lab Company Ltda. Todos os direitos reservados. CNPJ: 48.392.104/0001-89.</p>
          <p className="text-[#9AA3B2]/60">Sua privacidade e segurança de dados são prioridades absolutas.</p>
        </div>
      </footer>
    </>
  );
};

