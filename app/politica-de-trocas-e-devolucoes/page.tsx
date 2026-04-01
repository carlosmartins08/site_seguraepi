import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
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
import { FaqList, FaqItem } from '../../components/home/FaqList';

export const metadata = {
  title: 'Política de Trocas e Devoluções | Segura EPI',
  description:
    'Conheça os prazos e condições para trocas e devoluções na Segura EPI, com conferência no ato, garantia e logística reversa segura.',
  alternates: {
    canonical: `${SITE_URL}${ROUTES.policyReturns}`,
  },
};

const badges = [
  { label: 'Conferência no ato', color: 'bg-action-primary/15 text-action-primary' },
  { label: 'Garantia até 7 dias', color: 'bg-status-successSoft text-status-successStrong' },
  { label: 'Troca de numeração 30 dias', color: 'bg-bg-inverse text-white' },
];

const faqItems: FaqItem[] = [
  {
    q: 'O que fazer se notei que o pedido veio errado depois que o motorista foi embora?',
    a: 'Conforme nossa política, divergências comerciais (preço, quantidade, item errado) devem ser conferidas no ato da entrega. Reclamações posteriores não são aceitas. Recomendamos reforçar o processo de conferência no recebimento.',
  },
  {
    q: 'Como emitir a Nota Fiscal de Devolução?',
    a: 'A devolução deve ser acompanhada de uma Nota Fiscal de Devolução (total ou parcial) emitida pela sua empresa. O motorista só está autorizado a trazer a mercadoria de volta mediante a entrega deste documento fiscal impresso.',
  },
];

const summaryItems = [
  'Conferência obrigatória no ato da entrega.',
  'Garantia: até 7 dias com a Segura EPI.',
  'Troca de numeração em até 30 dias.',
  'Nota de devolução e logística reversa formal.',
];

export default function PoliticaTrocasPage() {
  return (
    <main className="bg-white">
      <Navbar variant="light" />
      <JsonLd data={buildFaqJsonLd(faqItems)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', url: SITE_URL },
          { name: 'Política de Trocas e Devoluções', url: `${SITE_URL}${ROUTES.policyReturns}` },
        ])}
      />
      {/* Hero */}
      <Section id="hero-politica" variant="offwhite" className="pt-nav pb-14">
        <Container size="default" className="max-w-4xl">
          <div className="space-y-8">
            <div>
              <p className="text-action-primary font-display font-semibold uppercase tracking-[0.18em] text-[11px] mb-3">
                Política de Trocas e Devoluções
              </p>
              <h1 className="text-3xl md:text-4xl font-display font-semibold text-text-primary leading-tight">
                Política de Trocas e Devoluções | Segura EPI
              </h1>
              <p className="text-text-body text-base md:text-lg leading-relaxed mt-4 max-w-3xl">
                Baseada no Código de Defesa do Consumidor e nas melhores práticas logísticas para garantir transparência,
                agilidade e segurança fiscal.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`px-4 py-2 rounded-full text-[11px] font-semibold border ${badge.color} border-black/5`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" size="lg">
                Falar com atendimento
              </Button>
              <ContextLink href="/catalogo" className="text-sm">
                Ver catálogo de EPIs
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
            subtitle="1. Conferência Obrigatória no Ato da Entrega"
            title="Conferência imediata evita divergências"
            description="Devoluções por desacordo comercial são aceitas apenas no ato do recebimento."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                'Divergência de preço ou quantidade',
                'Produto em desacordo com o pedido (item trocado)',
                'Inversão de produtos',
                'Avaria visível na embalagem ou no produto',
                'Erro no endereço ou dados da Nota Fiscal',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-text-body">
                  <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-bg-surfaceMuted">
              <h3 className="text-xl font-display font-bold text-text-primary mb-4">Como proceder</h3>
              <p className="text-text-body leading-relaxed">
                Caso identifique divergência, informe imediatamente o motorista. Nossa logística aciona a coordenação
                comercial em tempo real. Se a devolução for inevitável, ela deve ser feita no mesmo transporte, com a
                Nota Fiscal de Devolução impressa.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Secao 2 */}
      <Section id="defeito" variant="offwhite">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="2. Devolução por Defeito de Fabricação (Garantia)"
            title="Qualidade total, com prazos claros"
            description="Seguimos prazos legais e acionamos o fabricante quando necessário."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-white space-y-3">
              <h4 className="text-lg font-display font-bold text-text-primary">Até 7 dias após a NF</h4>
              <p className="text-text-body leading-relaxed">A troca ou devolução pode ser tratada diretamente com a Segura EPI.</p>
            </div>
            <div className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-white space-y-3">
              <h4 className="text-lg font-display font-bold text-text-primary">Após 7 dias</h4>
              <p className="text-text-body leading-relaxed">
                Direcionamos ao <ContextLink href="/chat" className="inline-flex text-text-body">SAC</ContextLink> para acionamento da garantia junto ao fabricante, seguindo o prazo técnico de análise.
              </p>
            </div>
          </div>
          <div className="mt-8 p-4 rounded-2xl border border-status-warningBorder bg-status-warningSoft text-status-warningStrong text-sm">
            Produtos com Certificado de Aprovação (CA) vencido não são passíveis de devolução, salvo se vendidos nessa
            condição.
          </div>
        </Container>
      </Section>

      {/* Secao 3 */}
      <Section id="tamanho" variant="default">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="3. Troca de Numeração ou Tamanho"
            title="Ajuste certo para segurança real"
            description="Prazo de até 30 dias corridos a contar da emissão da Nota Fiscal."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-text-body">
              {[
                'Produto sem indícios de uso',
                'Embalagem original e etiquetas intactas',
                'Apresentação da Nota Fiscal de compra',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-bg-surfaceMuted">
              <h4 className="text-lg font-display font-bold text-text-primary mb-3">Para quem vale</h4>
              <p className="text-text-body leading-relaxed">
                Botas de segurança, uniformes e <ContextLink href="/catalogo" className="inline-flex text-text-body">EPIs</ContextLink> que dependem de ajuste. Troca simples para manter o uso correto.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Requisitos da Nota */}
      <Section id="requisitos-nota" variant="offwhite">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="Requisitos da Nota de Devolução"
            title="Documentação fiscal obrigatória"
            description="A nota deve anular os efeitos da venda original e manter a conformidade tributária."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-text-body">
              {[
                'Anulação de efeitos da operação original, inclusive tributários',
                'Referência da chave de acesso da nota fiscal original no campo específico',
                'Impostos (ICMS, IPI, PIS, COFINS) identicos aos da nota original',
                'CFOP de devolução de compra (ex.: 5.202 ou 6.202)',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-white">
              <h4 className="text-lg font-display font-bold text-text-primary mb-3">Cliente não contribuinte</h4>
              <p className="text-text-body leading-relaxed">
                Caso o cliente não seja contribuinte, a Segura EPI se responsabiliza pela gestão dos processos
                administrativos da devolução.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Secao 4 */}
      <Section id="logistica-reversa" variant="offwhite">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="4. Logística Reversa e Retirada"
            title="Fluxo seguro e rastreável"
            description="Devoluções e trocas seguem controle fiscal e de segurança."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-white">
              <h4 className="text-lg font-display font-bold text-text-primary mb-3">Retiradas</h4>
              <p className="text-text-body leading-relaxed">
                Devem ser realizadas por transportadoras parceiras ou frota própria Segura EPI.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-white">
              <h4 className="text-lg font-display font-bold text-text-primary mb-3">Restrição</h4>
              <p className="text-text-body leading-relaxed">
                Não é permitida a retirada ou envio de trocas via motoristas de aplicativo (Uber, 99 etc.).
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq-politica" variant="default" className="cv-auto">
        <Container size="narrow">
          <SectionTitle subtitle="FAQ" title="Perguntas Frequentes" />
          <FaqList items={faqItems} />
        </Container>
      </Section>

      <Section id="policy-cta" variant="dark" className="pb-20">
        <Container>
          <div className="bg-bg-deep border border-border-inverse rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-display font-semibold text-text-inverse">Precisa de apoio com uma troca?</h3>
            <p className="text-text-faint mt-2">Fale com o time comercial para orientar a melhor logística.</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" size="lg">Falar no WhatsApp</Button>
              <Button href={ROUTES.chat} variant="outline-inverse" size="lg">
                Abrir atendimento
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}


