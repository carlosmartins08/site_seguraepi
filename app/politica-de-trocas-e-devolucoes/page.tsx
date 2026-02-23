import React from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { CONTACT_INFO } from '../../lib/constants';

export const metadata = {
  title: 'Política de Trocas e Devoluções | Segura EPI',
  description:
    'Conheça os prazos, condições e procedimentos para trocas, devoluções e garantia dos EPIs na Segura EPI. Transparência, conformidade e logística segura.',
};

const badges = [
  { label: 'Conferir no ato da entrega', color: 'bg-segura-primary/15 text-segura-primary' },
  { label: 'Garantia até 7 dias direto conosco', color: 'bg-emerald-100 text-emerald-700' },
  { label: 'Troca de numeração em 30 dias', color: 'bg-slate-900 text-white' },
];

const faqItems = [
  {
    q: 'O que fazer se notei que o pedido veio errado depois que o motorista foi embora?',
    a: 'Divergências comerciais (preço, quantidade, item trocado, inversão, avaria visível, erro de NF/endereço) precisam ser conferidas no ato da entrega. Reclamações posteriores não são aceitas. Reforce a conferência no recebimento.',
  },
  {
    q: 'Como emito a Nota Fiscal de Devolução?',
    a: 'A devolução deve ser acompanhada de NF de Devolução (total ou parcial) emitida pela sua empresa. O motorista só traz a mercadoria de volta com esse documento fiscal impresso.',
  },
];

export default function PoliticaTrocasPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <Section id="hero-politica" variant="offwhite" className="pb-16">
        <Container className="max-w-4xl">
          <div className="space-y-8">
            <div>
              <p className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-3">
                Política de Trocas e Devoluções
              </p>
              <h1 className="text-3xl md:text-5xl font-display font-black text-segura-dark leading-tight">
                Transparência para proteger quem usa e quem compra EPI.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mt-4 max-w-3xl">
                Baseada no Código de Defesa do Consumidor e em logística auditada, para resolver rápido e com segurança
                fiscal.
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
              <Button href={CONTACT_INFO.whatsapp} variant="primary" className="px-8 py-4 text-sm shadow-segura-glow">
                Falar com SAC
              </Button>
              <ContextLink href="/catalogo" className="text-sm">
                Ver catálogo de EPIs
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Seção 1 */}
      <Section id="conferencia" variant="default">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="1. Conferência Obrigatória"
            title="Confira tudo no ato da entrega"
            description="A agilidade depende da conferência imediata. Divergências comerciais só são aceitas no recebimento."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                'Divergência de preço ou quantidade',
                'Produto em desacordo (item trocado) ou inversão de produtos',
                'Avaria visível na embalagem ou produto',
                'Erro no endereço ou dados da Nota Fiscal',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-segura-primary mt-2" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-segura-offwhite">
              <h3 className="text-xl font-display font-bold text-segura-dark mb-4">Como proceder</h3>
              <p className="text-slate-600 leading-relaxed">
                Identificou divergência? Avise imediatamente o motorista. A logística aciona a coordenação comercial em
                tempo real. Se precisar devolver, faça no mesmo transporte com a Nota Fiscal de Devolução impressa.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Seção 2 */}
      <Section id="defeito" variant="offwhite">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="2. Defeito de Fabricação (Garantia)"
            title="Qualidade total, com prazos claros"
            description="Seguimos os prazos legais e acionamos o fabricante quando necessário."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white space-y-3">
              <h4 className="text-lg font-display font-bold text-segura-dark">Até 7 dias da NF</h4>
              <p className="text-slate-600 leading-relaxed">Tratamos troca ou devolução diretamente com a Segura EPI.</p>
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white space-y-3">
              <h4 className="text-lg font-display font-bold text-segura-dark">Após 7 dias</h4>
              <p className="text-slate-600 leading-relaxed">
                Acionamos o fabricante via SAC, respeitando o prazo técnico de análise de cada marca.
              </p>
            </div>
          </div>
          <div className="mt-8 p-4 rounded-2xl border border-amber-200 bg-amber-50 text-amber-800 text-sm">
            Produtos com Certificado de Aprovação (CA) vencido não são passíveis de devolução, salvo se vendidos nessa
            condição.
          </div>
        </Container>
      </Section>

      {/* Seção 3 */}
      <Section id="tamanho" variant="default">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="3. Troca de Numeração ou Tamanho"
            title="Ajuste certo para segurança real"
            description="Prazo de até 30 dias corridos a partir da emissão da Nota Fiscal."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-slate-600">
              {[
                'Produto sem indícios de uso',
                'Embalagem original e etiquetas intactas',
                'Apresentar a Nota Fiscal de compra',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-segura-primary mt-2" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-segura-offwhite">
              <h4 className="text-lg font-display font-bold text-segura-dark mb-3">Para quem vale</h4>
              <p className="text-slate-600 leading-relaxed">
                Botas de segurança, uniformes e demais EPIs que dependem de ajuste. Troca simples, sem burocracia, para
                manter o uso correto.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Seção 4 */}
      <Section id="logistica-reversa" variant="offwhite">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="4. Logística Reversa e Retirada"
            title="Fluxo seguro e rastreável"
            description="Devoluções e trocas seguem controle fiscal e de segurança."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white">
              <h4 className="text-lg font-display font-bold text-segura-dark mb-3">Retiradas</h4>
              <p className="text-slate-600 leading-relaxed">
                Realizadas por transportadoras parceiras ou frota própria Segura EPI, garantindo rastreabilidade.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white">
              <h4 className="text-lg font-display font-bold text-segura-dark mb-3">Restrição</h4>
              <p className="text-slate-600 leading-relaxed">
                Não aceitamos retirada/envio via motoristas de aplicativo (Uber, 99 etc.) por segurança e controle fiscal.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq-politica" variant="default">
        <Container className="max-w-4xl">
          <SectionTitle subtitle="FAQ" title="Perguntas Frequentes" />
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="bg-white border border-slate-100 rounded-2xl px-5 py-4 shadow-segura-soft">
                <summary className="cursor-pointer text-lg font-display font-bold text-segura-dark">
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
