'use client';

import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { CONTACT_INFO } from '../../lib/constants';
import { SeguraLogo } from '../../components/brand/SeguraLogo';
import { QuickSummary } from '../../components/content/QuickSummary';
import { LastUpdated } from '../../components/content/LastUpdated';
import { AUTHORITY_INFO } from '../../lib/content/authority';
import { mailtoHref } from '../../lib/contact';
import { JsonLd } from '../../components/seo/JsonLd';
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from '../../lib/seo/schema';
import { SITE_URL } from '../../lib/seo/site';
import { ROUTES } from '../../lib/routes';

const bullet = (text: string, key: React.Key) => (
  <li key={key} className="flex items-start gap-3 text-text-body text-bodySM">
    <span className="mt-1 h-2 w-2 rounded-full bg-action-primary" aria-hidden />
    <span>{text}</span>
  </li>
);

const faqItems = [
  {
    q: 'Pessoa física (CPF) pode comprar?',
    a: 'Nosso foco é o atendimento B2B (Pessoa Jurídica). Para CPF, consulte o time comercial sobre venda à vista (Consumidor Final).',
  },
  {
    q: 'Como sei se meu cadastro foi aprovado?',
    a: 'Assim que a análise for concluída (dentro de 24h), seu consultor entra em contato. Se houver pendência, avisamos imediatamente.',
  },
];

export default function ComoComprarPage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-surface">
      <JsonLd data={buildFaqJsonLd(faqItems)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', url: SITE_URL },
          { name: 'Como Comprar', url: `${SITE_URL}${ROUTES.howToBuy}` },
        ])}
      />
      <Navbar variant="light" />

      <Section id="como-comprar-hero" variant="dark" className="pt-nav pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,155,33,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_40%)]" />
        <Container size="wide" className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-8">
            <SectionTitle
              subtitle="Onboarding B2B"
              title="Como Comprar e Cadastro de Clientes | Segura EPI"
              description="Processo de cadastro estruturado e transparente para liberar compras em até 24 horas úteis após o envio da documentação completa."
              light
            />
            <div className="flex flex-wrap gap-4">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" size="lg">Falar com um consultor</Button>
              <Button href="/catalogo" variant="outline" size="lg" className="bg-bg-surface/10 text-text-inverse border-bg-surface/20 hover:bg-bg-surface hover:text-text-primary">
                Ver catálogo
              </Button>
            </div>
            <div className="flex items-center gap-4 text-text-soft text-bodySM">
              <SeguraLogo section="inline" variant="dark" size="sm" padding="tight" decorative />
              <span>Revisão trimestral para clientes com volume acima de R$ 30 mil.</span>
            </div>
            <QuickSummary
              variant="dark"
              items={[
                'Cadastro liberado em até 24h úteis após envio completo.',
                'Modalidades: compra à vista (cadastro rápido) e faturada (crédito).',
                'Documentação fiscal e contatos agilizam a aprovação.',
                'Revisão trimestral para volumes acima de R$ 30 mil.',
              ]}
            />
            <LastUpdated variant="dark" date={AUTHORITY_INFO.updatedAt} />
          </div>
          <div className="lg:col-span-5 bg-bg-surface/10 border border-bg-surface/10 rounded-2xl p-8 shadow-elevation-2 backdrop-blur-xl">
            <p className="text-action-primary font-display font-semibold uppercase tracking-[0.18em] text-labelSM mb-4">Prazos</p>
            <h3 className="text-titleXL font-display font-semibold text-text-inverse mb-4">Liberação em até 24h úteis</h3>
            <p className="text-text-faint text-bodySM leading-relaxed">
              Nosso time libera o cadastro em até 24 horas úteis após o envio de toda a documentação necessária.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="modalidades" variant="offwhite">
        <Container className="space-y-16">
          <SectionTitle
            subtitle="Modalidades de compra"
            title="Compra à vista ou faturada, conforme seu fluxo"
            description="Duas modalidades principais para atender urgência ou planejamento, com cadastro rápido ou completo."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border-subtle bg-bg-surface p-8 shadow-elevation-1">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-labelSM mb-3">Compra à vista (Cadastro rápido)</p>
              <h3 className="text-titleLG font-display font-black text-text-primary mb-3">Cadastro rápido</h3>
              <p className="text-text-body text-bodyMD mb-4">Ideal para quem tem urgência. Cadastro simplificado com dados comerciais e fiscais.</p>
              <ul className="space-y-3 text-bodySM">
                {[
                  'Sem necessidade de análise de crédito aprofundada.',
                  'Liberação do pedido mais célere.',
                  'Compra à vista com validação rápida.',
                ].map((item) => bullet(item, item))}
              </ul>
            </div>

            <div className="rounded-2xl border border-action-primary bg-bg-surface p-8 shadow-elevation-2">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-labelSM mb-3">Compra faturada / boleto</p>
              <h3 className="text-titleLG font-display font-black text-text-primary mb-3">Cadastro completo + crédito</h3>
              <p className="text-text-body text-bodyMD mb-4">Para quem busca prazo. Análise de crédito segura para definir limite compatível com o porte e histórico da empresa.</p>
              <ul className="space-y-3 text-bodySM">
                {[
                  'Análise de crédito com retorno em até 24h úteis.',
                  'Limite definido conforme histórico e capacidade da operação.',
                  'Pagamento via boleto faturado após aprovação.',
                ].map((item) => bullet(item, item))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-bg-surface p-8 shadow-elevation-1">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-labelSM">Modalidade presencial</p>
                <h3 className="text-titleLG font-display font-black text-text-primary">Retirada expressa na loja</h3>
                <p className="text-text-body text-bodyMD">
                  Feche o pedido com o consultor e retire na unidade com o pedido separado e conferido.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button href="/retirada-expressa" variant="primary" size="lg" className="w-full sm:w-auto">Ver retirada expressa</Button>
                <Button href={CONTACT_INFO.whatsapp} variant="outline" size="lg" className="w-full sm:w-auto">Falar com consultor</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="documentacao" className="bg-bg-surface">
        <Container className="space-y-12">
          <SectionTitle
            subtitle="Documentação necessária"
            title="Envie os dados certos para aprovar sem pendências"
            description="Tenha tudo em mãos para garantir liberação dentro de 24 horas úteis."
          />

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 border border-border-subtle rounded-2xl bg-bg-surfaceMuted/40">
              <h4 className="text-titleMD font-display font-bold text-text-primary mb-4">Dados fiscais</h4>
              <ul className="space-y-3 text-bodySM">
                {[
                  'Cartão CNPJ ativo.',
                  'Comprovante de Inscrição Estadual (Sintegra) atualizado.',
                  'CNAE correto para o ramo de atividade.',
                ].map((item) => bullet(item, item))}
              </ul>
            </div>
            <div className="p-8 border border-border-subtle rounded-2xl bg-bg-surface">
              <h4 className="text-titleMD font-display font-bold text-text-primary mb-4">Contatos e endereços</h4>
              <ul className="space-y-3 text-bodySM">
                {[
                  'Endereço completo da sede e confirmação dos endereços de entrega e cobrança.',
                  'Telefone fixo e celular (WhatsApp) do comprador responsável.',
                  'Email para envio de NFe/boletos e telefone do financeiro.',
                  'Número aproximado de funcionários para personalizar o atendimento.',
                ].map((item) => bullet(item, item))}
              </ul>
              <p className="text-text-muted text-bodySM mt-4">
                Dica: informar o CNAE correto e o número de funcionários agiliza a análise.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="credito" variant="offwhite">
        <Container className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionTitle
              subtitle="Política de crédito"
              title="Revisão trimestral para manter o limite alinhado"
              description="Clientes com volume acima de R$ 30 mil passam por revisão de cadastro a cada 3 meses."
            />
            <ul className="space-y-3 text-text-body text-bodySM">
              {[
                'A revisão garante limite compatível com o crescimento da demanda.',
                'A análise considera histórico e perfil da empresa.',
                'O consultor acompanha e informa qualquer pendência imediatamente.',
              ].map((item) => bullet(item, item))}
            </ul>
          </div>
          <div className="lg:col-span-5 bg-bg-surface p-8 rounded-2xl border border-border-subtle shadow-elevation-1">
            <h4 className="text-titleMD font-display font-bold text-text-primary mb-3">Perguntas frequentes</h4>
            <div className="space-y-4 text-text-body text-bodySM">
              {faqItems.map((item) => (
                <div key={item.q}>
                  <p className="font-display font-bold text-text-primary">{item.q}</p>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="cta-final" variant="default" className="pb-24 cv-auto">
        <Container className="bg-bg-inverse text-text-inverse rounded-2xl p-8 md:p-12 shadow-elevation-2 border border-border-inverse">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-labelSM">Pronto para comprar</p>
              <h3 className="text-titleXL md:text-displayXL font-display font-black leading-tight">Envie sua documentação agora e acelere a primeira compra</h3>
              <p className="text-text-soft text-bodyMD">Separar a documentação evita pendências e garante liberação dentro de 24 horas úteis.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" size="lg" className="w-full sm:w-auto">Enviar pelo WhatsApp</Button>
              <Button href={mailtoHref(CONTACT_INFO.email)} variant="outline" size="lg" className="w-full sm:w-auto text-text-inverse border-bg-surface/40 hover:text-text-primary">Enviar por e-mail</Button>
            </div>
          </div>
        </Container>
      </Section>

    </main>
  );
}









