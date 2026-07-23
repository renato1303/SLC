export interface DiagnosticFormData {
  nome: string;
  empresa: string;
  email: string;
  whatsapp: string;
  faturamento: string;
  tamanhoTime: string;
}

export interface Testimonial {
  id: string;
  nomeCliente: string;
  cargoEmpresa: string;
  tempo: string;
  mensagem: string;
  resultadoDestaque: string;
}

export interface FAQItem {
  pergunta: string;
  resposta: string;
}

export interface EcosystemFront {
  id: number;
  titulo: string;
  subtitulo: string;
  detalhes: string[];
  tag: string;
}
