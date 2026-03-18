'use client';

import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { DecisionCard } from '../../components/cards/DecisionCard';
import { SeguraLogo } from '../../components/brand/SeguraLogo';
import { CONTACT_INFO } from '../../lib/constants';

const heroBullets = [
  'Especificação correta.',
  'Conformidade normativa.',
  'Segurança validada.',
];

const caWithoutList = [
  'O equipamento não pode ser comercializado.',
  'O empregador pode sofrer autuação.',
  'O EPI é considerado irregular.',
];

const validarSteps = [
  {
    title: 'Identifique o número do C.A.',
    detail: 'Use a etiqueta ou gravação do próprio EPI.',
  },
  {
    title: 'Consulte na base oficial do governo',
    detail: 'A pesquisa deve ser feita diretamente no Sistema CAEPI.',
  },
  {
    title: 'Verifique os campos críticos',
    detail: 'Situação, data de validade, tipo de proteção aprovada, restrição de uso, laboratório responsável.',
  },
  {
    title: 'Evite fontes não oficiais',
    detail: 'Não use apenas prints ou planilhas de fornecedores sem checar a base governamental.',
  },
];

const errosComuns = [
  {
    title: 'Comprar apenas pelo preço',
    desc: 'Se o C.A. estiver vencido, o passivo trabalhista supera qualquer economia.',
  },
  {
    title: 'Ignorar a atividade real',
    desc: 'Cada risco exige EPI aderente à NR aplicável (ex.: luva leve para risco químico é inadequado).',
  },
  {
    title: 'Não revisar a validade do C.A.',
    desc: 'O lote pode continuar em estoque após o vencimento; valide antes de cada compra.',
  },
];

const normas = [
  {
    sigla: 'NR-06',
    title: 'Equipamento de Proteção Individual',
    bullets: [
      'Responsabilidade do empregador',
      'Fornecimento gratuito e registro de entrega',
      'Treinamento e substituição quando danificado',
    ],
  },
  {
    sigla: 'NR-10',
    title: 'Segurança em Instalações Elétricas',
    bullets: [
      'EPI específico para risco elétrico e arco',
      'Uso em trabalhos energizados',
      'Procedimentos e treinamento obrigatório',
    ],
  },
  {
    sigla: 'NR-35',
    title: 'Trabalho em Altura',
    bullets: [
      'Cinto tipo paraquedista + talabarte adequado',
      'Sistema de ancoragem compatível',
      'Treinamento e resgate previstos',
    ],
  },
];

const checklist = [
  'O C.A. está ativo?',
  'O EPI atende à norma aplicável?',
  'O risco foi corretamente identificado?',
  'Existe treinamento para uso correto?',
  'O fornecedor oferece orientação técnica?',
];

export default function CentroTecnicoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="dark" />

      <Section id="centro-hero" variant="dark" className="pt-nav pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,155,33,0.12),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.06),transparent_40%)]" />
        <Container className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <SectionTitle
              subtitle="Centro Técnico Segura EPI"
              title="Especificação correta. Conformidade normativa. Segurança validada."
              description="Valide C.A., confirme normas e escolha o EPI certo usando sempre a base oficial do governo."
              light
            />
            <div className="flex flex-wrap gap-3">
              {heroBullets.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full text-[11px] font-display font-bold uppercase tracking-[0.2em] bg-white/10 border border-white/15 text-white"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                href="https://caepi.mte.gov.br/"
                variant="primary"
                className="px-8"
              >
                Validar especificação
              </Button>
              <Button
                href="/catalogo"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:text-text-primary"
              >
                Acessar catálogo
              </Button>
            </div>
            <div className="flex items-center gap-3 text-slate-200 text-sm">
              <SeguraLogo section="inline" variant="dark" size="sm" padding="tight" decorative />
              <span>Validação sempre com a base oficial do Ministério do Trabalho.</span>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 shadow-elevation-2 backdrop-blur-xl">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[11px] mb-3">
              Fonte primária
            </p>
            <h3 className="text-3xl font-display font-black text-white mb-3">Sistema CAEPI</h3>
            <p className="text-slate-200 text-sm leading-relaxed">
              A validação de C.A. deve ser feita diretamente na base oficial do governo. Outros relatórios são apoio,
              mas a fonte primária é sempre o Ministério do Trabalho.
            </p>
            <ContextLink
              href="https://caepi.mte.gov.br/"
              className="mt-6 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar CAEPI
            </ContextLink>
          </div>
        </Container>
      </Section>

      <Section id="hub-tecnico" variant="default">
        <Container className="space-y-10">
          <SectionTitle
            subtitle="Mapa Tecnico"
            title="Tudo o que voce precisa, em uma unica trilha"
            description="Comece pelo guia geral, aprofunde por categoria e valide o C.A. antes de fechar o pedido."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <DecisionCard
              eyebrow="Guia Geral"
              title="Guia Tecnico de EPI"
              description="Conceitos, categorias por area do corpo e responsabilidades da NR-06."
              href="/epi"
              actionText="Abrir guia tecnico"
            />
            <DecisionCard
              eyebrow="Por Categoria"
              title="Guias Tecnicos por Categoria"
              description="Aprofunde por tipo de protecao com recomendacoes e FAQ tecnico."
              href="/epi/categorias"
              actionText="Ver categorias"
            />
            <DecisionCard
              eyebrow="Validacao"
              title="Validar Certificado de Aprovacao"
              description="Passo a passo para checar situacao, validade e restricoes no CAEPI."
              href="/centro-tecnico#como-validar"
              actionText="Ver como validar"
            />
          </div>
        </Container>
      </Section>

      <Section id="o-que-e-ca" variant="offwhite">
        <Container className="space-y-10">
          <SectionTitle
            subtitle="O que é o CA?"
            title="Certificado de Aprovação — licença oficial para comercializar e usar EPI"
            description="Documento emitido pelo Ministério do Trabalho que autoriza comercialização e uso. Sem C.A. válido, o EPI é irregular."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-elevation-1">
              <h3 className="text-xl font-display font-bold text-text-primary mb-3">Sem C.A. válido</h3>
              <ul className="space-y-3 text-slate-600">
                {caWithoutList.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-action-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-3xl border border-action-primary/30 bg-white shadow-glow-brand">
              <h3 className="text-xl font-display font-bold text-text-primary mb-3">Fonte oficial</h3>
              <p className="text-slate-600 leading-relaxed">
                Ministério do Trabalho e Emprego — Sistema CAEPI. Sempre valide na base governamental antes de comprar,
                especificar ou substituir um EPI.
              </p>
              <ContextLink
                href="https://caepi.mte.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                Abrir base oficial
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="como-validar" variant="default">
        <Container className="space-y-12">
          <SectionTitle
            subtitle="Como validar um C.A."
            title="Passo técnico recomendado"
            description="Siga o fluxo abaixo para reduzir risco de autuação e garantir conformidade."
          />
          <div className="grid md:grid-cols-2 gap-10">
            {validarSteps.map((step, index) => (
              <div
                key={step.title}
                className="p-6 rounded-3xl border border-slate-200 bg-white shadow-elevation-1 flex gap-4"
              >
                <div className="h-10 w-10 rounded-2xl bg-action-primary/10 text-action-primary font-display font-black flex items-center justify-center">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-text-primary">{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="erros-comuns" variant="offwhite">
        <Container className="space-y-10">
          <SectionTitle
            subtitle="Erros comuns"
            title="O que mais causa autuação ou falha de especificação"
            description="Evite decisões por preço, fora de norma ou sem checar validade do C.A."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {errosComuns.map((item) => (
              <div key={item.title} className="p-6 rounded-3xl border border-slate-200 bg-white shadow-elevation-1">
                <h4 className="text-lg font-display font-bold text-text-primary mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="normas" variant="default">
        <Container className="space-y-10">
          <SectionTitle
            subtitle="Principais normas"
            title="NRs que direcionam a escolha de EPI"
            description="Mapeie o risco à norma aplicável para evitar especificações incorretas."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {normas.map((norma) => (
              <div key={norma.sigla} className="p-6 rounded-3xl border border-slate-200 bg-white shadow-elevation-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-action-primary/10 text-action-primary font-display font-bold text-xs tracking-[0.2em]">
                    {norma.sigla}
                  </span>
                  <h4 className="text-lg font-display font-bold text-text-primary">{norma.title}</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {norma.bullets.map((b) => (
                    <li key={b} className="flex gap-2 items-start">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-action-primary" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="epc-epi" variant="offwhite">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <SectionTitle
              subtitle="EPC x EPI"
              title="Prioridade estratégica de proteção"
              description="A ordem correta: eliminar risco, controlar risco, proteger individualmente."
            />
          </div>
          <div className="space-y-4 p-8 rounded-3xl border border-slate-200 bg-white shadow-elevation-1">
            <div>
              <h4 className="text-lg font-display font-bold text-text-primary">EPC (Equipamento de Proteção Coletiva)</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Protege vários trabalhadores e deve ser priorizado sempre que possível.</p>
            </div>
            <div>
              <h4 className="text-lg font-display font-bold text-text-primary">EPI</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Proteção individual usada quando o risco não pode ser eliminado ou controlado por EPC.</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <span className="font-display font-bold text-action-primary uppercase tracking-[0.2em]">Ordem técnica</span>
              <span>1) Eliminar risco</span>
              <span>2) Controlar risco</span>
              <span>3) Proteger individualmente</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="checklist" variant="default">
        <Container className="space-y-10">
          <SectionTitle
            subtitle="Checklist técnico"
            title="Confirme antes de comprar"
            description="Use esta lista para reduzir retrabalho, atrasos e autuações."
          />
          <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-white shadow-elevation-1"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-action-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="posicionamento" variant="offwhite">
        <Container className="space-y-6">
          <SectionTitle
            subtitle="Posicionamento Segura EPI"
            title="Segurança não é produto. É decisão técnica."
            description="Validamos aplicação, norma, conformidade e responsabilidade legal antes de recomendar qualquer EPI."
          />
          <p className="text-slate-600 text-lg max-w-4xl">
            Nós não vendemos EPI como item de prateleira. Para cada cliente, confirmamos risco real, norma aplicável,
            C.A. válido e se há treinamento previsto. Assim, reduzimos o passivo trabalhista e elevamos a proteção do
            time.
          </p>
        </Container>
      </Section>

      <Section id="cta-final" variant="default" className="pb-28">
        <Container className="bg-bg-inverse text-white rounded-2xl p-10 md:p-14 shadow-elevation-2 border border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[11px]">Antes de comprar</p>
              <h3 className="text-3xl md:text-4xl font-display font-black leading-tight">Valide, consulte e só então feche o pedido</h3>
              <p className="text-slate-300 text-base">
                Validar C.A., confirmar norma e registrar treinamento evita autuações e devoluções por especificação errada.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                href="https://caepi.mte.gov.br/"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Validar especificação
              </Button>
              <Button
                href={CONTACT_INFO.whatsapp}
                variant="outline"
                className="w-full sm:w-auto text-white border-white/40 hover:text-text-primary"
              >
                Solicitar orçamento
              </Button>
              <Button
                href="/catalogo"
                variant="ghost"
                className="w-full sm:w-auto bg-white/10 text-white hover:text-text-primary"
              >
                Acessar catálogo B2B
              </Button>
            </div>
          </div>
        </Container>
      </Section>

    </main>
  );
}


