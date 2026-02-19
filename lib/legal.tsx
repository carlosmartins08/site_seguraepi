import React from 'react';

type LegalEntry = {
  title: string;
  updatedAt: string; // ISO date string
  content: React.ReactNode;
};

export const LEGAL_TEXTS: Record<'privacy' | 'terms', LegalEntry> = {
  privacy: {
    title: 'Política de Privacidade',
    updatedAt: '2026-02-10',
    content: (
      <div className="space-y-8">
        <p className="text-xl font-display font-medium text-segura-dark">
          A Segura EPI trata a proteção de dados como parte do nosso compromisso com segurança no trabalho e
          conformidade. Esta política explica como coletamos, usamos e protegemos suas informações, em linha com a
          Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
        </p>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">1. Coleta de informações</h3>
          <p>Coletamos apenas o necessário para operar com eficiência B2B:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Dados da empresa:</strong> Razão social, CNPJ, inscrição estadual e endereços.</li>
            <li><strong>Dados de contato:</strong> Nome, telefone/WhatsApp e e-mail de responsáveis por Compras e Financeiro.</li>
            <li><strong>Dados financeiros:</strong> referências bancárias e histórico de crédito para compras faturadas.</li>
            <li><strong>Dados técnicos:</strong> risco, função e aplicação para recomendar EPIs adequados.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">2. Finalidades</h3>
          <p>Usamos os dados para:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Processar pedidos:</strong> emissão de NF-e, boletos e duplicatas.</li>
            <li><strong>Logística:</strong> compartilhamento mínimo com transportadoras para entrega.</li>
            <li><strong>Análise de crédito:</strong> concessão de prazos de pagamento.</li>
            <li><strong>Comunicação:</strong> status de pedidos, alertas técnicos e campanhas relevantes.</li>
            <li><strong>Melhoria contínua:</strong> métricas anônimas de uso para aprimorar o site e catálogo.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">3. Compartilhamento</h3>
          <p>Não vendemos dados. Compartilhamos apenas quando necessário com:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Parceiros logísticos:</strong> para entrega.</li>
            <li><strong>Órgãos fiscais:</strong> para obrigações legais.</li>
            <li><strong>Instituições financeiras:</strong> para pagamentos e boletos.</li>
            <li><strong>Fornecedores de tecnologia:</strong> serviços de hospedagem, métricas e automação, sempre com contratos de confidencialidade.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">4. Cookies e preferências</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Necessários:</strong> mantêm o site funcional e seguro.</li>
            <li><strong>Métricas:</strong> nos ajudam a melhorar performance e navegação.</li>
            <li><strong>Marketing:</strong> personalizam ofertas e campanhas B2B. Você pode recusar ou ajustar a qualquer momento no banner de consentimento.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">5. Segurança e retenção</h3>
          <p>
            Aplicamos controles técnicos e administrativos, acesso restrito por função e armazenamento em provedores com certificações de segurança.
            Dados financeiros e de crédito são mantidos pelo prazo legal ou enquanto necessários à relação comercial.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">6. Direitos do titular</h3>
          <p>Você pode solicitar, a qualquer momento:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Confirmação e acesso aos dados.</li>
            <li>Correção ou atualização.</li>
            <li>Anonimização ou eliminação de dados desnecessários.</li>
            <li>Revogação de consentimento para comunicações de marketing.</li>
          </ul>
          <p>Envie sua solicitação ao nosso Encarregado de Dados (DPO) pelo e-mail informado nos contatos oficiais.</p>
        </section>
      </div>
    ),
  },
  terms: {
    title: 'Termos de Uso',
    updatedAt: '2026-02-10',
    content: (
      <div className="space-y-8">
        <p className="text-xl font-display font-medium text-segura-dark border-l-4 border-segura-primary pl-6 py-2 bg-segura-offwhite">
          Ao usar o site da Segura EPI, você concorda com estes termos. O foco é atender empresas (B2B) com EPIs e serviços de SST.
        </p>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">1. Natureza do serviço</h3>
          <p>Apresentamos catálogo, orientações técnicas e canais de contato para cotações e faturamento.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">2. Cadastro e compras</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Forneça informações verdadeiras e atualizadas.</li>
            <li>Podemos solicitar documentos para validação e análise de crédito.</li>
            <li>Uso indevido de dados de terceiros pode resultar em bloqueio e medidas legais.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">3. Propriedade intelectual</h3>
          <p>Conteúdos, marcas e layouts pertencem à Segura EPI ou parceiros. Reprodução ou uso comercial requer autorização prévia.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">4. Limitação de responsabilidade</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>EPIs são fornecidos com CA; uso correto, treinamento e fiscalização são responsabilidade do empregador conforme NRs.</li>
            <li>Disponibilidade de estoque pode variar pelo fluxo de vendas.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">5. Trocas e devoluções</h3>
          <p>Conferir a mercadoria na entrega. Prazos seguem a legislação aplicável e nossas políticas internas comunicadas no ato da compra.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">6. Alterações</h3>
          <p>Podemos atualizar estes termos. Mudanças entram em vigor na publicação. Em casos relevantes, solicitaremos novo consentimento.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-segura-dark uppercase tracking-tight">7. Foro</h3>
          <p>Fica eleito o foro da Comarca de Cabedelo/PB para resolver conflitos oriundos destes termos.</p>
        </section>
      </div>
    ),
  },
};
