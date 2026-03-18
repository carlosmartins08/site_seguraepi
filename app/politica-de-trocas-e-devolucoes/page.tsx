import React from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { CONTACT_INFO } from '../../lib/constants';
import { QuickSummary } from '../../components/content/QuickSummary';
import { LastUpdated } from '../../components/content/LastUpdated';
import { AUTHORITY_INFO } from '../../lib/content/authority';
import { JsonLd } from '../../components/seo/JsonLd';
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from '../../lib/seo/schema';
import { SITE_URL } from '../../lib/seo/site';
import { ROUTES } from '../../lib/routes';

export const metadata = {
  title: 'Politica de Trocas e Devolucoes | Segura EPI',
  description:
    'Conheca os prazos e condicoes para trocas e devolucoes na Segura EPI, com conferencia no ato, garantia e logistica reversa segura.',
};

const badges = [
  { label: 'Conferencia no ato', color: 'bg-action-primary/15 text-action-primary' },
  { label: 'Garantia ate 7 dias', color: 'bg-emerald-100 text-emerald-700' },
  { label: 'Troca de numeracao 30 dias', color: 'bg-slate-900 text-white' },
];

const faqItems = [
  {
    q: 'O que fazer se notei que o pedido veio errado depois que o motorista foi embora?',
    a: 'Conforme nossa politica, divergencias comerciais (preco, quantidade, item errado) devem ser conferidas no ato da entrega. Reclamacoes posteriores nao sao aceitas. Recomendamos reforcar o processo de conferencia no recebimento.',
  },
  {
    q: 'Como emitir a Nota Fiscal de Devolucao?',
    a: 'A devolucao deve ser acompanhada de uma Nota Fiscal de Devolucao (total ou parcial) emitida pela sua empresa. O motorista so esta autorizado a trazer a mercadoria de volta mediante a entrega deste documento fiscal impresso.',
  },
];

const summaryItems = [
  'Conferencia obrigatoria no ato da entrega.',
  'Garantia: ate 7 dias com a Segura EPI.',
  'Troca de numeracao em ate 30 dias.',
  'Nota de devolucao e logistica reversa formal.',
];

export default function PoliticaTrocasPage() {
  return (
    <main className="bg-white">
      <JsonLd data={buildFaqJsonLd(faqItems)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', url: SITE_URL },
          { name: 'Politica de Trocas e Devolucoes', url: `${SITE_URL}${ROUTES.policyReturns}` },
        ])}
      />
      {/* Hero */}
      <Section id="hero-politica" variant="offwhite" className="pt-nav pb-16">
        <Container className="max-w-4xl">
          <div className="space-y-8">
            <div>
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-3">
                Politica de Trocas e Devolucoes
              </p>
              <h1 className="text-3xl md:text-5xl font-display font-black text-text-primary leading-tight">
                Politica de Trocas e Devolucoes | Segura EPI
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mt-4 max-w-3xl">
                Baseada no Codigo de Defesa do Consumidor e nas melhores praticas logisticas para garantir transparencia,
                agilidade e seguranca fiscal.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`px-4 py-2 rounded-full text-[11px] font-display font-bold uppercase tracking-[0.2em] border ${badge.color} border-black/5`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" className="px-8 py-4 text-sm shadow-glow-brand">
                Falar com atendimento
              </Button>
              <ContextLink href="/catalogo" className="text-sm">
                Ver catalogo de EPIs
              </ContextLink>
            </div>
            <QuickSummary items={summaryItems} />
            <LastUpdated date={AUTHORITY_INFO.updatedAt} />
          </div>
        </Container>
      </Section>

      {/* Secao 1 */}
      <Section id="conferencia" variant="default">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="1. Conferencia Obrigatoria no Ato da Entrega"
            title="Conferencia imediata evita divergencias"
            description="Devolucoes por desacordo comercial sao aceitas apenas no ato do recebimento."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                'Divergencia de preco ou quantidade',
                'Produto em desacordo com o pedido (item trocado)',
                'Inversao de produtos',
                'Avaria visivel na embalagem ou no produto',
                'Erro no endereco ou dados da Nota Fiscal',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-bg-surfaceMuted">
              <h3 className="text-xl font-display font-bold text-text-primary mb-4">Como proceder</h3>
              <p className="text-slate-600 leading-relaxed">
                Caso identifique divergencia, informe imediatamente o motorista. Nossa logistica aciona a coordenacao
                comercial em tempo real. Se a devolucao for inevitavel, ela deve ser feita no mesmo transporte, com a
                Nota Fiscal de Devolucao impressa.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Secao 2 */}
      <Section id="defeito" variant="offwhite">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="2. Devolucao por Defeito de Fabricacao (Garantia)"
            title="Qualidade total, com prazos claros"
            description="Seguimos prazos legais e acionamos o fabricante quando necessario."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white space-y-3">
              <h4 className="text-lg font-display font-bold text-text-primary">Ate 7 dias apos a NF</h4>
              <p className="text-slate-600 leading-relaxed">A troca ou devolucao pode ser tratada diretamente com a Segura EPI.</p>
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white space-y-3">
              <h4 className="text-lg font-display font-bold text-text-primary">Apos 7 dias</h4>
              <p className="text-slate-600 leading-relaxed">
                Direcionamos ao <ContextLink href="/chat" className="inline-flex text-slate-600">SAC</ContextLink> para acionamento da garantia junto ao fabricante, seguindo o prazo tecnico de analise.
              </p>
            </div>
          </div>
          <div className="mt-8 p-4 rounded-2xl border border-amber-200 bg-amber-50 text-amber-800 text-sm">
            Produtos com Certificado de Aprovacao (CA) vencido nao sao passiveis de devolucao, salvo se vendidos nessa
            condicao.
          </div>
        </Container>
      </Section>

      {/* Secao 3 */}
      <Section id="tamanho" variant="default">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="3. Troca de Numeracao ou Tamanho"
            title="Ajuste certo para seguranca real"
            description="Prazo de ate 30 dias corridos a contar da emissao da Nota Fiscal."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-slate-600">
              {[
                'Produto sem indicios de uso',
                'Embalagem original e etiquetas intactas',
                'Apresentacao da Nota Fiscal de compra',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-bg-surfaceMuted">
              <h4 className="text-lg font-display font-bold text-text-primary mb-3">Para quem vale</h4>
              <p className="text-slate-600 leading-relaxed">
                Botas de seguranca, uniformes e <ContextLink href="/catalogo" className="inline-flex text-slate-600">EPIs</ContextLink> que dependem de ajuste. Troca simples para manter o uso correto.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Requisitos da Nota */}
      <Section id="requisitos-nota" variant="offwhite">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="Requisitos da Nota de Devolucao"
            title="Documentacao fiscal obrigatoria"
            description="A nota deve anular os efeitos da venda original e manter a conformidade tributaria."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-slate-600">
              {[
                'Anulacao de efeitos da operacao original, inclusive tributarios',
                'Referencia da chave de acesso da nota fiscal original no campo especifico',
                'Impostos (ICMS, IPI, PIS, COFINS) identicos aos da nota original',
                'CFOP de devolucao de compra (ex.: 5.202 ou 6.202)',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white">
              <h4 className="text-lg font-display font-bold text-text-primary mb-3">Cliente nao contribuinte</h4>
              <p className="text-slate-600 leading-relaxed">
                Caso o cliente nao seja contribuinte, a Segura EPI se responsabiliza pela gestao dos processos
                administrativos da devolucao.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Secao 4 */}
      <Section id="logistica-reversa" variant="offwhite">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="4. Logistica Reversa e Retirada"
            title="Fluxo seguro e rastreavel"
            description="Devolucoes e trocas seguem controle fiscal e de seguranca."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white">
              <h4 className="text-lg font-display font-bold text-text-primary mb-3">Retiradas</h4>
              <p className="text-slate-600 leading-relaxed">
                Devem ser realizadas por transportadoras parceiras ou frota propria Segura EPI.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white">
              <h4 className="text-lg font-display font-bold text-text-primary mb-3">Restricao</h4>
              <p className="text-slate-600 leading-relaxed">
                Nao e permitida a retirada ou envio de trocas via motoristas de aplicativo (Uber, 99 etc.).
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq-politica" variant="default" className="cv-auto">
        <Container className="max-w-4xl">
          <SectionTitle subtitle="FAQ" title="Perguntas Frequentes" />
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="bg-white border border-slate-100 rounded-2xl px-5 py-4 shadow-elevation-1">
                <summary className="cursor-pointer text-lg font-display font-bold text-text-primary">
                  {item.q}
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
