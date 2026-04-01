import React from 'react';

export const LEGAL_TEXTS = {
  privacy: {
    title: 'Política de Privacidade | Segura EPI',
    updatedAt: '2026-03-17',
    content: (
      <>
        <p>
          A Segura EPI tem compromisso inegociável com a segurança, inclusive com os dados de clientes,
          parceiros e colaboradores. Esta política descreve como coletamos, usamos, armazenamos e protegemos
          informações pessoais e empresariais, em conformidade com a LGPD (Lei 13.709/2018).
        </p>

        <h3>1. Coleta de informações</h3>
        <p>Coletamos dados necessários para cadastro, faturamento e operação logística:</p>
        <ul>
          <li>Dados da empresa: razão social, CNPJ, inscrição estadual e endereços.</li>
          <li>Dados de contato: nome, telefone e e-mail dos responsáveis por compras e financeiro.</li>
          <li>Dados financeiros: referências bancárias e histórico de crédito para compras faturadas.</li>
        </ul>

        <h3>2. Finalidade do uso dos dados</h3>
        <ul>
          <li>Processamento de pedidos: emissão de notas fiscais, boletos e duplicatas.</li>
          <li>Logística: compartilhamento necessário de endereço e contato com transportadoras parceiras.</li>
          <li>Análise de crédito: avaliação para concessão de prazos de pagamento.</li>
          <li>Comunicação: status do pedido, atualizações técnicas e campanhas via canais oficiais.</li>
        </ul>

        <h3>3. Compartilhamento de dados</h3>
        <p>A Segura EPI não comercializa dados. O compartilhamento ocorre apenas com:</p>
        <ul>
          <li>Parceiros logísticos, para execução da entrega.</li>
          <li>Órgãos públicos e fiscais, para cumprimento de obrigações legais.</li>
          <li>Instituições financeiras, para processamento de pagamentos e boletos.</li>
        </ul>

        <h3>4. Segurança e confidencialidade</h3>
        <p>
          Adotamos medidas técnicas e administrativas para proteger dados contra acessos não autorizados.
          Nossos colaboradores assinam termos de confidencialidade e seguem um código de conduta rigoroso.
        </p>

        <h3>5. Cookies</h3>
        <p>
          Utilizamos cookies necessários para funcionamento do site, além de cookies de métricas e marketing
          mediante consentimento. Você pode ajustar suas preferências a qualquer momento no banner de cookies.
        </p>

        <h3>6. Direitos do titular</h3>
        <p>Você pode solicitar:</p>
        <ul>
          <li>Confirmação da existência de tratamento de dados.</li>
          <li>Acesso, correção ou atualização de dados.</li>
          <li>Revogação de consentimento para comunicações de marketing.</li>
        </ul>

        <h3>7. Encarregado de dados (DPO)</h3>
        <p>
          Para exercer seus direitos ou tirar dúvidas sobre esta política, contate nosso DPO pelo e-mail:
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
          Ao acessar e utilizar o site da Segura EPI, você concorda com os termos e condições abaixo.
        </p>

        <h3>1. Natureza do serviço</h3>
        <p>
          A Segura EPI é uma distribuidora especializada em EPI e EPC, com foco no atendimento B2B. O site
          apresenta catálogo, serviços de SST e canais de contato.
        </p>

        <h3>2. Cadastro e compras</h3>
        <ul>
          <li>O usuário deve fornecer informações verdadeiras e atualizadas.</li>
          <li>A Segura EPI pode solicitar documentos para validação de cadastro e análise de crédito.</li>
          <li>Dados falsos ou de terceiros sem autorização podem gerar cancelamento e medidas legais.</li>
        </ul>

        <h3>3. Propriedade intelectual</h3>
        <p>
          Todo o conteúdo do site, incluindo textos, imagens, logotipos e design, é de propriedade da Segura EPI
          ou de seus parceiros. É proibida a reprodução sem autorização expressa.
        </p>

        <h3>4. Limitação de responsabilidade</h3>
        <ul>
          <li>
            Uso dos produtos: fornecemos EPIs certificados, mas a correta utilização, treinamento e fiscalização
            são responsabilidade do empregador conforme as NRs.
          </li>
          <li>
            Disponibilidade: nos esforçamos para manter o estoque atualizado, mas a disponibilidade pode variar
            conforme o fluxo de vendas.
          </li>
        </ul>

        <h3>5. Política de trocas e devoluções</h3>
        <p>
          Ao comprar, o cliente declara estar ciente da Política de Trocas e Devoluções, incluindo conferência no
          ato da entrega e prazos legais.
        </p>

        <h3>6. Alterações nos termos</h3>
        <p>
          A Segura EPI pode alterar estes termos a qualquer momento. As mudanças entram em vigor após publicação
          no site.
        </p>

        <h3>7. Foro</h3>
        <p>
          Fica eleito o foro da Comarca de Cabedelo/PB para dirimir quaisquer dúvidas ou litígios oriundos destes
          termos.
        </p>
      </>
    ),
  },
} as const;
