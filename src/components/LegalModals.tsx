import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalsProps {
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#050B1A] border border-emerald-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-2 font-heading text-xl font-bold text-white uppercase">
            <ShieldCheck className="w-5 h-5 text-[#00E5A0]" />
            {type === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
          </div>

          <button 
            onClick={onClose}
            className="p-1 rounded-lg bg-slate-900 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-slate-300 text-xs sm:text-sm space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                A <strong>Sales Lab Company</strong> respeita a privacidade de todos os seus visitantes e clientes. Esta Política de Privacidade descreve como coletamos e protegemos suas informações de contato.
              </p>
              <h4 className="font-bold text-white text-sm">1. Coleta de Dados</h4>
              <p>
                Coletamos dados estritamente fornecidos de forma voluntária no formulário de diagnóstico gratuito (Nome, Empresa, E-mail, WhatsApp, Faturamento e Tamanho do Time) com a única finalidade de realizar a análise estratégica comercial prévia.
              </p>
              <h4 className="font-bold text-white text-sm">2. Segurança e Não Compartilhamento</h4>
              <p>
                Seus dados são armazenados em ambiente seguro e jamais serão vendidos, alugados ou compartilhados com terceiros sem autorização prévia expressa.
              </p>
              <h4 className="font-bold text-white text-sm">3. Seus Direitos</h4>
              <p>
                Você possui o direito de solicitar a alteração ou exclusão definitiva dos seus dados de nosso banco de contatos a qualquer momento entrando em contato pelo nosso canal oficial do WhatsApp.
              </p>
            </>
          ) : (
            <>
              <p>
                Ao utilizar este site e solicitar uma sessão de diagnóstico comercial com a <strong>Sales Lab Company</strong>, você concorda expressamente com os seguintes termos:
              </p>
              <h4 className="font-bold text-white text-sm">1. Natureza do Diagnóstico Gratuito</h4>
              <p>
                A sessão de diagnóstico é um serviço consultivo sem custo nem compromisso financeiro vinculante. A aplicação no formulário passa por uma triagem para verificar o enquadramento do negócio.
              </p>
              <h4 className="font-bold text-white text-sm">2. Resultados e Metodologia</h4>
              <p>
                Os cases de sucesso e faturamento citados na página (como a evolução de R$2M para R$3M) representam resultados reais de clientes que aplicaram rigorosamente a metodologia. Os resultados individuais dependem do nicho, empenho do time e execução dos processos.
              </p>
              <h4 className="font-bold text-white text-sm">3. Propriedade Intelectual</h4>
              <p>
                Todo o conteúdo, marcas, logos, nomes de métodos e materiais desta página são de propriedade exclusiva da Sales Lab Company Treinamento & Consultoria Ltda.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-heading font-bold text-xs uppercase cursor-pointer"
          >
            Entendido e Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
