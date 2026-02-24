'use client';

import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { CONTACT_INFO } from '../../lib/constants';
import { SeguraLogo } from '../../components/brand/SeguraLogo';

const bullet = (text: string, key: React.Key) => (
  <li key={key} className="flex items-start gap-3 text-slate-600">
    <span className="mt-1 h-2 w-2 rounded-full bg-action-primary" aria-hidden />
    <span>{text}</span>
  </li>
);

export default function ComoComprarPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="light" />

      <Section id="como-comprar-hero" variant="dark" className="pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,155,33,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_40%)]" />
        <Container className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <SectionTitle
              subtitle="Onboarding B2B"
              title="Como Comprar e Cadastro de Clientes"
              description="Processo de cadastro estruturado para liberar compras em ate 24h uteis, com opcoes a vista ou faturadas."
              light
            />
            <div className="flex flex-wrap gap-4">
              <Button href={CONTACT_INFO.whatsapp} variant="primary">Falar com um consultor</Button>
              <Button href="/catalogo" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-text-primary">
                Ver catalogo
              </Button>
            </div>
            <div className="flex items-center gap-4 text-slate-300 text-sm">
              <SeguraLogo section="inline" variant="dark" size="sm" padding="tight" decorative />
              <span>Cadastro revisado periodicamente para manter limite alinhado ao seu volume.</span>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 shadow-elevation-2 backdrop-blur-xl">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[11px] mb-4">Prazos</p>
            <h3 className="text-3xl font-display font-black text-white mb-4">Liberacao em ate 24h uteis</h3>
            <p className="text-slate-200 text-sm leading-relaxed">
              Enviando a documentacao completa, o cadastro simplificado libera compras a vista imediatamente. Para faturamento, a analise de credito ocorre no mesmo SLA.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="modalidades" variant="offwhite">
        <Container className="space-y-16">
          <SectionTitle
            subtitle="Flexibilidade financeira"
            title="Escolha entre compra a vista ou faturada"
            description="Do cadastro rapido sem analise ate o boleto faturado com limite sob medida para sua operacao."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-elevation-1">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[11px] mb-3">Compra a vista</p>
              <h3 className="text-2xl font-display font-black text-text-primary mb-3">Cadastro rapido</h3>
              <p className="text-slate-600 mb-4">Ideal para pedidos urgentes. Coletamos apenas dados comerciais e fiscais basicos.</p>
              <ul className="space-y-3 text-sm">
                {[
                  'Sem analise de credito aprofundada.',
                  'Liberacao do pedido logo apos conferencia dos dados.',
                  'Pagamentos via Pix ou Cartao conforme combinado com o consultor.',
                ].map((item) => bullet(item, item))}
              </ul>
            </div>

            <div className="rounded-3xl border border-action-primary bg-white p-8 shadow-glow-brand">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[11px] mb-3">Compra faturada</p>
              <h3 className="text-2xl font-display font-black text-text-primary mb-3">Cadastro completo + credito</h3>
              <p className="text-slate-600 mb-4">Pensado para quem precisa de prazo. Realizamos analise segura para definir limite aderente ao seu historico.</p>
              <ul className="space-y-3 text-sm">
                {[
                  'Prazo de pagamento via boleto apos aprovacao.',
                  'Analise de credito com retorno em ate 24h uteis.',
                  'Limite revisado trimestralmente para clientes acima de R$30 mil.',
                ].map((item) => bullet(item, item))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="documentacao" className="bg-white">
        <Container className="space-y-12">
          <SectionTitle
            subtitle="Checklist de envio"
            title="Documentacao necessaria para aprovacao sem pendencias"
            description="Envie tudo na primeira remessa para garantir liberacao dentro do SLA de 24h uteis."
          />

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 border border-slate-200 rounded-3xl bg-bg-surfaceMuted/60">
              <h4 className="text-xl font-display font-bold text-text-primary mb-4">Dados fiscais</h4>
              <ul className="space-y-3 text-sm">
                {[
                  'Cartao CNPJ ativo.',
                  'Inscricao Estadual / Sintegra atualizado.',
                  'CNAE principal correto para o segmento.',
                ].map((item) => bullet(item, item))}
              </ul>
            </div>
            <div className="p-8 border border-slate-200 rounded-3xl bg-white">
              <h4 className="text-xl font-display font-bold text-text-primary mb-4">Contatos e enderecos</h4>
              <ul className="space-y-3 text-sm">
                {[
                  'Endereco completo da sede e, se aplicavel, de entrega e cobranca.',
                  'Telefone fixo e celular/WhatsApp do comprador responsavel.',
                  'Email dedicado para NFe e boletos do financeiro.',
                  'Numero de colaboradores para dimensionar estoque e mix.',
                ].map((item) => bullet(item, item))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="credito" variant="offwhite">
        <Container className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionTitle
              subtitle="Saude do limite"
              title="Politica de credito e revisao trimestral"
              description="Clientes com volume acima de R$30 mil sao revisitados a cada 3 meses para ajustar limites e manter fluxo saudavel."
            />
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                'Avisamos sobre qualquer pendencia de documentacao antes de bloquear pedidos.',
                'A revisao considera historico de pagamentos, volumes e previsao de demanda.',
                'Consultor acompanha o processo e confirma nova alocacao de limite.',
              ].map((item) => bullet(item, item))}
            </ul>
          </div>
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-elevation-1">
            <h4 className="text-xl font-display font-bold text-text-primary mb-3">Perguntas frequentes</h4>
            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <p className="font-display font-bold text-text-primary">Pessoa fisica pode comprar?</p>
                <p>O foco e B2B (PJ). Para CPF, consulte o time sobre venda a vista como consumidor final.</p>
              </div>
              <div>
                <p className="font-display font-bold text-text-primary">Como saber se o cadastro foi aprovado?</p>
                <p>Dentro de 24h uteis seu consultor retorna. Se faltar algo, avisamos na hora para nao atrasar o pedido.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="cta-final" variant="default" className="pb-28">
        <Container className="bg-bg-inverse text-white rounded-2xl p-10 md:p-14 shadow-elevation-2 border border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[11px]">Pronto para comprar</p>
              <h3 className="text-3xl md:text-4xl font-display font-black leading-tight">Envie sua documentacao agora e acelere a primeira compra</h3>
              <p className="text-slate-300 text-base">Separar os dados fiscais e de contato evita pendencias e libera seu pedido no mesmo dia util.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" className="w-full sm:w-auto">Enviar pelo WhatsApp</Button>
              <Button href={`mailto:${CONTACT_INFO.email}`} variant="outline" className="w-full sm:w-auto text-white border-white/40 hover:text-text-primary">Enviar por email</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer onOpenPrivacy={() => {}} onOpenTerms={() => {}} />
    </main>
  );
}

