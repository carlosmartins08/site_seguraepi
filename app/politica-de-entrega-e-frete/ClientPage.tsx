'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { LegalModal } from '../../components/layout/LegalModal';
import { CONTACT_INFO } from '../../lib/constants';
import { LEGAL_TEXTS } from '../../lib/legal';

const badges = [
  { label: 'Entrega gratuita GJP acima de R$ 500', color: 'bg-segura-primary/15 text-segura-primary' },
  { label: 'CIF ou FOB conforme sua operação', color: 'bg-slate-900 text-white' },
  { label: 'Rastreio e conferência na entrega', color: 'bg-emerald-100 text-emerald-700' },
];

export default function ClientPage() {
  const [legalModal, setLegalModal] = useState<{ open: boolean; type: 'privacy' | 'terms' }>({
    open: false,
    type: 'privacy',
  });

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="light" />

      <Section id="hero-entrega" variant="offwhite" className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1600&q=80"
            alt="Centro de distribuição e frota"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-white/80" />
        </div>
        <Container className="relative max-w-5xl">
          <div className="space-y-8">
            <div>
              <p className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-3">
                Política de Entrega e Frete
              </p>
              <h1 className="text-3xl md:text-5xl font-display font-black text-segura-dark leading-tight">
                Logística segura, prazos combinados e rastreio visível.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mt-4 max-w-3xl">
                Atendemos Grande João Pessoa com rota própria e grandes pedidos em todo o Nordeste com transportadoras
                auditadas. Integridade do EPI e cumprimento do prazo são prioridade.
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
                Consultar frete agora
              </Button>
              <ContextLink href="/catalogo" className="text-sm">
                Ver catálogo
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="frete-gratis" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="1. Frete Grátis e Condições Especiais"
            title="Custo-benefício sem abrir mão da rastreabilidade"
            description="Condições sob medida para pedidos locais e regionais."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-segura-offwhite">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-segura-primary/15 text-segura-primary flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 5 9-5-9-5-9 5zm0 5l9 5 9-5m-9 5v5" /></svg>
                </div>
                <h3 className="text-xl font-display font-bold text-segura-dark">Grande João Pessoa</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Pedidos acima de R$ 500,00 têm entrega gratuita via rota própria. Consulte seu vendedor para confirmar a
                disponibilidade no seu bairro e janela de entrega.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900/10 text-slate-900 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h2l1 3h11l1-3h2m-2-5h2l2 5v6a1 1 0 01-1 1h-3m-4 0H9m-4 0H4a1 1 0 01-1-1v-6l2-5h2" /></svg>
                </div>
                <h3 className="text-xl font-display font-bold text-segura-dark">Demais Regiões</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Operamos com transportadoras parceiras que oferecem prazos competitivos, rastreabilidade e manuseio
                seguro dos volumes.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="modalidades" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="2. Modalidades de Envio (CIF e FOB)"
            title="Escolha conforme a estratégia da sua operação"
            description="Definimos no momento da cotação a modalidade que melhor atende seu pedido."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-segura-primary/15 text-segura-primary flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-lg font-display font-bold text-segura-dark">Frete CIF</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Pago pela Segura EPI em negociações específicas ou rotas promocionais. Assumimos pagamento e gestão da
                entrega até sua porta.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900/10 text-slate-900 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h2l1 3h11l1-3h2m-2-5h2l2 5v6a1 1 0 01-1 1h-3m-4 0H9m-4 0H4a1 1 0 01-1-1v-6l2-5h2" /></svg>
                </div>
                <h4 className="text-lg font-display font-bold text-segura-dark">Frete FOB</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Pago pelo cliente. Você escolhe a transportadora de confiança para coletar no nosso CD; preparamos a
                carga paletizada/embalada e pronta para coleta.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="recebimento" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="3. Protocolo de Recebimento Seguro"
            title="Conferência na entrega garante integridade e agilidade"
            description="Siga estes passos ao receber a mercadoria."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-slate-600">
              {[
                'Conte os volumes e compare com a NF e o CT-e.',
                'Avalie a embalagem: sinais de violação, avaria ou umidade.',
                'Ressalva imediata no verso do comprovante se houver problema (item faltante ou trocado).',
                'Comunique o setor de Logística no ato.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-segura-primary mt-2" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-3xl border border-amber-200 bg-amber-50 text-amber-800 text-sm">
              Não aceitamos reclamações de divergência de volume após a saída do entregador. A ressalva no comprovante é
              essencial para abrir o chamado.
            </div>
          </div>
        </Container>
      </Section>

      <Section id="prazos" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="4. Prazos de Entrega"
            title="Contagem a partir do faturamento"
            description="Transparência sobre quando seu EPI chega."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-segura-primary/15 text-segura-primary flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h4 className="text-lg font-display font-bold text-segura-dark">Rotas locais (frota própria)</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Entregas conforme cronograma das rotas. Consulte os dias da sua região.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-slate-900/10 text-slate-900 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-lg font-display font-bold text-segura-dark">Transportadoras</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Prazos conforme tabela da transportadora contratada, variando por cidade de destino.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Footer
        onOpenPrivacy={() => setLegalModal({ open: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModal({ open: true, type: 'terms' })}
      />

      <LegalModal
        isOpen={legalModal.open}
        onClose={() => setLegalModal({ ...legalModal, open: false })}
        title={LEGAL_TEXTS[legalModal.type].title}
        content={LEGAL_TEXTS[legalModal.type].content}
        updatedAt={LEGAL_TEXTS[legalModal.type].updatedAt}
      />
    </main>
  );
}
