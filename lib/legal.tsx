import React from 'react';

export const LEGAL_TEXTS = {
  privacy: {
    title: 'Politica de Privacidade | Segura EPI',
    updatedAt: '2026-03-17',
    content: (
      <>
        <p>
          A Segura EPI tem compromisso inegociavel com a seguranca, inclusive com os dados de clientes,
          parceiros e colaboradores. Esta politica descreve como coletamos, usamos, armazenamos e protegemos
          informacoes pessoais e empresariais, em conformidade com a LGPD (Lei 13.709/2018).
        </p>

        <h3>1. Coleta de informacoes</h3>
        <p>Coletamos dados necessarios para cadastro, faturamento e operacao logistica:</p>
        <ul>
          <li>Dados da empresa: razao social, CNPJ, inscricao estadual e enderecos.</li>
          <li>Dados de contato: nome, telefone e e-mail dos responsaveis por compras e financeiro.</li>
          <li>Dados financeiros: referencias bancarias e historico de credito para compras faturadas.</li>
        </ul>

        <h3>2. Finalidade do uso dos dados</h3>
        <ul>
          <li>Processamento de pedidos: emissao de notas fiscais, boletos e duplicatas.</li>
          <li>Logistica: compartilhamento necessario de endereco e contato com transportadoras parceiras.</li>
          <li>Analise de credito: avaliacao para concessao de prazos de pagamento.</li>
          <li>Comunicacao: status do pedido, atualizacoes tecnicas e campanhas via canais oficiais.</li>
        </ul>

        <h3>3. Compartilhamento de dados</h3>
        <p>A Segura EPI nao comercializa dados. O compartilhamento ocorre apenas com:</p>
        <ul>
          <li>Parceiros logisticos, para execucao da entrega.</li>
          <li>Orgaos publicos e fiscais, para cumprimento de obrigacoes legais.</li>
          <li>Instituicoes financeiras, para processamento de pagamentos e boletos.</li>
        </ul>

        <h3>4. Seguranca e confidencialidade</h3>
        <p>
          Adotamos medidas tecnicas e administrativas para proteger dados contra acessos nao autorizados.
          Nossos colaboradores assinam termos de confidencialidade e seguem um codigo de conduta rigoroso.
        </p>

        <h3>5. Cookies</h3>
        <p>
          Utilizamos cookies necessarios para funcionamento do site, alem de cookies de metricas e marketing
          mediante consentimento. Voce pode ajustar suas preferencias a qualquer momento no banner de cookies.
        </p>

        <h3>6. Direitos do titular</h3>
        <p>Voce pode solicitar:</p>
        <ul>
          <li>Confirmacao da existencia de tratamento de dados.</li>
          <li>Acesso, correcao ou atualizacao de dados.</li>
          <li>Revogacao de consentimento para comunicacoes de marketing.</li>
        </ul>

        <h3>7. Encarregado de dados (DPO)</h3>
        <p>
          Para exercer seus direitos ou tirar duvidas sobre esta politica, contate nosso DPO pelo e-mail:
          <a href="mailto:sac@seguraepi.com.br"> sac@seguraepi.com.br</a>.
        </p>
      </>
    ),
  },
  terms: {
    title: 'Termos de Uso do Site | Segura EPI',
    updatedAt: '2026-03-17',
    content: (
      <>
        <p>
          Ao acessar e utilizar o site da Segura EPI, voce concorda com os termos e condicoes abaixo.
        </p>

        <h3>1. Natureza do servico</h3>
        <p>
          A Segura EPI e uma distribuidora especializada em EPI e EPC, com foco no atendimento B2B. O site
          apresenta catalogo, servicos de SST e canais de contato.
        </p>

        <h3>2. Cadastro e compras</h3>
        <ul>
          <li>O usuario deve fornecer informacoes verdadeiras e atualizadas.</li>
          <li>A Segura EPI pode solicitar documentos para validacao de cadastro e analise de credito.</li>
          <li>Dados falsos ou de terceiros sem autorizacao podem gerar cancelamento e medidas legais.</li>
        </ul>

        <h3>3. Propriedade intelectual</h3>
        <p>
          Todo o conteudo do site, incluindo textos, imagens, logotipos e design, e de propriedade da Segura EPI
          ou de seus parceiros. E proibida a reproducao sem autorizacao expressa.
        </p>

        <h3>4. Limitacao de responsabilidade</h3>
        <ul>
          <li>
            Uso dos produtos: fornecemos EPIs certificados, mas a correta utilizacao, treinamento e fiscalizacao
            sao responsabilidade do empregador conforme as NRs.
          </li>
          <li>
            Disponibilidade: nos esforcamos para manter o estoque atualizado, mas a disponibilidade pode variar
            conforme o fluxo de vendas.
          </li>
        </ul>

        <h3>5. Politica de trocas e devolucoes</h3>
        <p>
          Ao comprar, o cliente declara estar ciente da Politica de Trocas e Devolucoes, incluindo conferencia no
          ato da entrega e prazos legais.
        </p>

        <h3>6. Alteracoes nos termos</h3>
        <p>
          A Segura EPI pode alterar estes termos a qualquer momento. As mudancas entram em vigor apos publicacao
          no site.
        </p>

        <h3>7. Foro</h3>
        <p>
          Fica eleito o foro da Comarca de Cabedelo/PB para dirimir quaisquer duvidas ou litigios oriundos destes
          termos.
        </p>
      </>
    ),
  },
} as const;
