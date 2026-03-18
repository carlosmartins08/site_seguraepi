import React from 'react';

type LegalEntry = {
  title: string;
  updatedAt: string; // ISO date string
  content: React.ReactNode;
};

export const LEGAL_TEXTS: Record<'privacy' | 'terms', LegalEntry> = {
  privacy: {
    title: 'Politica de Privacidade',
    updatedAt: '2026-03-17',
    content: (
      <div className="space-y-8">
        <p className="text-xl font-display font-medium text-text-primary">
          A Segura EPI tem compromisso inegociavel com a seguranca, inclusive com os dados de clientes, parceiros e
          colaboradores. Esta politica descreve como coletamos, usamos, armazenamos e protegemos informacoes pessoais e
          empresariais, em conformidade com a LGPD (Lei nº 13.709/2018).
        </p>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">1. Coleta de informacoes</h3>
          <p>Coletamos dados necessarios para viabilizar a operacao comercial e logistica:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Dados da empresa:</strong> razao social, CNPJ, inscricao estadual e enderecos.</li>
            <li><strong>Dados de contato:</strong> nome, telefone (fixo/WhatsApp) e e-mail de responsaveis por Compras e Financeiro.</li>
            <li><strong>Dados financeiros:</strong> referencias bancarias e historico de credito para analise de limites nas compras faturadas.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">2. Finalidade do uso dos dados</h3>
          <p>Usamos as informacoes coletadas exclusivamente para:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Processamento de pedidos:</strong> emissao de notas fiscais, boletos e duplicatas.</li>
            <li><strong>Logistica:</strong> compartilhamento minimo de dados de endereco e contato com transportadoras parceiras.</li>
            <li><strong>Analise de credito:</strong> avaliacao de perfil para concessao de prazos de pagamento.</li>
            <li><strong>Comunicacao:</strong> status de pedido, atualizacoes tecnicas e campanhas relevantes via e-mail e WhatsApp.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">3. Compartilhamento de dados</h3>
          <p>A Segura EPI nao comercializa dados. O compartilhamento ocorre apenas com:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Parceiros logisticos:</strong> para execucao da entrega.</li>
            <li><strong>Orgaos publicos e fiscais:</strong> para cumprimento de obrigacoes legais (emissao de NF-e).</li>
            <li><strong>Instituicoes financeiras:</strong> para processamento de pagamentos e boletos.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">4. Seguranca e confidencialidade</h3>
          <p>
            Adotamos medidas tecnicas e administrativas para proteger seus dados contra acessos nao autorizados. Todos os
            colaboradores assinam termos de confidencialidade e seguem Codigo de Conduta com proibicao expressa de
            divulgacao a terceiros nao autorizados.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">5. Cookies e preferencias</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Necessarios:</strong> mantem o site funcional e seguro.</li>
            <li><strong>Metricas:</strong> ajudam a melhorar performance e navegacao.</li>
            <li><strong>Marketing:</strong> personalizam ofertas e campanhas relevantes. Voce pode gerenciar no banner de consentimento.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">6. Seus direitos (LGPD)</h3>
          <p>Voce pode solicitar:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Confirmacao da existencia de tratamento de dados.</li>
            <li>Acesso aos dados mantidos por nos.</li>
            <li>Correcao de dados incompletos, inexatos ou desatualizados.</li>
            <li>Revogacao de consentimento para comunicacoes de marketing.</li>
          </ul>
          <p>Para exercer seus direitos, contate nosso Encarregado de Dados (DPO) em sac@seguraepi.com.br.</p>
        </section>
      </div>
    ),
  },
  terms: {
    title: 'Termos de Uso do Site',
    updatedAt: '2026-03-17',
    content: (
      <div className="space-y-8">
        <p className="text-xl font-display font-medium text-text-primary border-l-4 border-action-primary pl-6 py-2 bg-bg-surfaceMuted">
          Bem-vindo ao site da Segura EPI. Ao acessar e utilizar nossas plataformas digitais, voce concorda com estes
          termos e condicoes.
        </p>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">1. Natureza do servico</h3>
          <p>
            A Segura EPI e uma distribuidora especializada em EPI e EPC, com foco no atendimento B2B. O site apresenta
            catalogo, servicos de SST e canais de contato.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">2. Cadastro e compras</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>O usuario deve fornecer informacoes verdadeiras e atualizadas.</li>
            <li>Podemos solicitar documentos comprobatórios para validacao de cadastro e analise de credito.</li>
            <li>Uso de dados falsos ou de terceiros sem autorizacao pode gerar cancelamento e medidas legais.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">3. Propriedade intelectual</h3>
          <p>
            Todo conteudo do site (textos, imagens, logotipos, videos e design) e propriedade da Segura EPI ou parceiros.
            E proibida a reproducao ou distribuicao sem autorizacao expressa.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">4. Limitacao de responsabilidade</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>EPIs sao fornecidos com CA; uso correto e treinamento sao responsabilidade do empregador conforme NRs.</li>
            <li>Disponibilidade pode variar conforme fluxo de vendas e estoque.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">5. Politica de trocas e devolucoes</h3>
          <p>
            O cliente declara estar ciente da Politica de Trocas e Devolucoes, com conferencia no ato da entrega e prazos
            legais para reclamacoes por defeito ou vicio.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">6. Alteracoes nos termos</h3>
          <p>
            A Segura EPI pode alterar estes termos a qualquer momento. As mudancas entram em vigor apos publicacao no site.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">7. Foro</h3>
          <p>Fica eleito o foro da Comarca de Cabedelo/PB para dirimir quaisquer duvidas ou litigios.</p>
        </section>
      </div>
    ),
  },
};
