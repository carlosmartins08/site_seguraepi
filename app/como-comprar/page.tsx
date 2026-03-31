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
  <li key={key} className="flex items-start gap-3 text-text-body">
    <span className="mt-1 h-2 w-2 rounded-full bg-action-primary" aria-hidden />
    <span>{text}</span>
  </li>
);

const faqItems = [
  {
    q: 'Pessoa fisica (CPF) pode comprar?',
    a: 'Nosso foco e o atendimento B2B (Pessoa Juridica). Para CPF, consulte o time comercial sobre venda a vista (Consumidor Final).',
  },
  {
    q: 'Como sei se meu cadastro foi aprovado?',
    a: 'Assim que a analise for concluida (dentro de 24h), seu consultor entra em contato. Se houver pendencia, avisamos imediatamente.',
  },
];

export default function ComoComprarPage() {
  return (
    <main className="min-h-screen bg-white">
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
              description="Processo de cadastro estruturado e transparente para liberar compras em ate 24 horas uteis apos o envio da documentacao completa."
              light
            />
            <div className="flex flex-wrap gap-4">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" size="lg">Falar com um consultor</Button>
              <Button href="/catalogo" variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-text-primary">
                Ver catalogo
              </Button>
            </div>
            <div className="flex items-center gap-4 text-text-soft text-sm">
              <SeguraLogo section="inline" variant="dark" size="sm" padding="tight" decorative />
              <span>Revisao trimestral para clientes com volume acima de R$ 30 mil.</span>
            </div>
            <QuickSummary
              variant="dark"
              items={[
                'Cadastro liberado em ate 24h uteis apos envio completo.',
                'Modalidades: compra a vista (cadastro rapido) e faturada (credito).',
                'Documentacao fiscal e contatos agilizam a aprovacao.',
                'Revisao trimestral para volumes acima de R$ 30 mil.',
              ]}
            />
            <LastUpdated variant="dark" date={AUTHORITY_INFO.updatedAt} />
          </div>
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-8 shadow-elevation-2 backdrop-blur-xl">
            <p className="text-action-primary font-display font-semibold uppercase tracking-[0.18em] text-[11px] mb-4">Prazos</p>
            <h3 className="text-3xl font-display font-semibold text-white mb-4">Liberacao em ate 24h uteis</h3>
            <p className="text-text-faint text-sm leading-relaxed">
              Nosso time libera o cadastro em ate 24 horas uteis apos o envio de toda a documentacao necessaria.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="modalidades" variant="offwhite">
        <Container className="space-y-16">
          <SectionTitle
            subtitle="Modalidades de compra"
            title="Compra a vista ou faturada, conforme seu fluxo"
            description="Duas modalidades principais para atender urgencia ou planejamento, com cadastro rapido ou completo."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border-subtle bg-bg-surface p-8 shadow-elevation-1">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[11px] mb-3">Compra a vista (Cadastro rapido)</p>
              <h3 className="text-2xl font-display font-black text-text-primary mb-3">Cadastro rapido</h3>
              <p className="text-text-body mb-4">Ideal para quem tem urgencia. Cadastro simplificado com dados comerciais e fiscais.</p>
              <ul className="space-y-3 text-sm">
                {[
                  'Sem necessidade de analise de credito aprofundada.',
                  'Liberacao do pedido mais celere.',
                  'Compra a vista com validacao rapida.',
                ].map((item) => bullet(item, item))}
              </ul>
            </div>

            <div className="rounded-2xl border border-action-primary bg-bg-surface p-8 shadow-elevation-2">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[11px] mb-3">Compra faturada / boleto</p>
              <h3 className="text-2xl font-display font-black text-text-primary mb-3">Cadastro completo + credito</h3>
              <p className="text-text-body mb-4">Para quem busca prazo. Analise de credito segura para definir limite compativel com o porte e historico da empresa.</p>
              <ul className="space-y-3 text-sm">
                {[
                  'Analise de credito com retorno em ate 24h uteis.',
                  'Limite definido conforme historico e capacidade da operacao.',
                  'Pagamento via boleto faturado apos aprovacao.',
                ].map((item) => bullet(item, item))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-bg-surface p-8 shadow-elevation-1">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[11px]">Modalidade presencial</p>
                <h3 className="text-2xl font-display font-black text-text-primary">Retirada expressa na loja</h3>
                <p className="text-text-body">
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

      <Section id="documentacao" className="bg-white">
        <Container className="space-y-12">
          <SectionTitle
            subtitle="Documentacao necessaria"
            title="Envie os dados certos para aprovar sem pendencias"
            description="Tenha tudo em maos para garantir liberacao dentro de 24 horas uteis."
          />

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 border border-border-subtle rounded-2xl bg-bg-surfaceMuted/60">
              <h4 className="text-xl font-display font-bold text-text-primary mb-4">Dados fiscais</h4>
              <ul className="space-y-3 text-sm">
                {[
                  'Cartao CNPJ ativo.',
                  'Comprovante de Inscricao Estadual (Sintegra) atualizado.',
                  'CNAE correto para o ramo de atividade.',
                ].map((item) => bullet(item, item))}
              </ul>
            </div>
            <div className="p-8 border border-border-subtle rounded-2xl bg-bg-surface">
              <h4 className="text-xl font-display font-bold text-text-primary mb-4">Contatos e enderecos</h4>
              <ul className="space-y-3 text-sm">
                {[
                  'Endereco completo da sede e confirmacao dos enderecos de entrega e cobranca.',
                  'Telefone fixo e celular (WhatsApp) do comprador responsavel.',
                  'Email para envio de NFe/boletos e telefone do financeiro.',
                  'Numero aproximado de funcionarios para personalizar o atendimento.',
                ].map((item) => bullet(item, item))}
              </ul>
              <p className="text-text-muted text-xs mt-4">
                Dica: informar o CNAE correto e o numero de funcionarios agiliza a analise.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="credito" variant="offwhite">
        <Container className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionTitle
              subtitle="Politica de credito"
              title="Revisao trimestral para manter o limite alinhado"
              description="Clientes com volume acima de R$ 30 mil passam por revisao de cadastro a cada 3 meses."
            />
            <ul className="space-y-3 text-sm text-text-body">
              {[
                'A revisao garante limite compativel com o crescimento da demanda.',
                'A analise considera historico e perfil da empresa.',
                'O consultor acompanha e informa qualquer pendencia imediatamente.',
              ].map((item) => bullet(item, item))}
            </ul>
          </div>
          <div className="lg:col-span-5 bg-bg-surface p-8 rounded-2xl border border-border-subtle shadow-elevation-1">
            <h4 className="text-xl font-display font-bold text-text-primary mb-3">Perguntas frequentes</h4>
            <div className="space-y-4 text-sm text-text-body">
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
        <Container className="bg-bg-inverse text-white rounded-2xl p-8 md:p-12 shadow-elevation-2 border border-border-inverse">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[11px]">Pronto para comprar</p>
              <h3 className="text-3xl md:text-4xl font-display font-black leading-tight">Envie sua documentacao agora e acelere a primeira compra</h3>
              <p className="text-text-soft text-base">Separar a documentacao evita pendencias e garante liberacao dentro de 24 horas uteis.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" size="lg" className="w-full sm:w-auto">Enviar pelo WhatsApp</Button>
              <Button href={mailtoHref(CONTACT_INFO.email)} variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/40 hover:text-text-primary">Enviar por email</Button>
            </div>
          </div>
        </Container>
      </Section>

    </main>
  );
}




