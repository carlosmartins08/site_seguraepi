import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { SectionTitle } from '../components/typography/SectionTitle';
import { Button } from '../components/actions/Button';
import { DecisionCard } from '../components/cards/DecisionCard';
import { MethodStep } from '../components/method/MethodStep';
import { ScrollReveal } from '../components/home/ScrollReveal';
import { FaqList, FaqItem } from '../components/home/FaqList';
import { LeadForm } from '../components/home/LeadForm';
import { OG_IMAGE } from '../lib/seo/site';
import { ROUTES, buildUrl } from '../lib/routes';

export const metadata = {
  title: 'EPI com C.A. Ativo, Consultoria Tecnica e Logistica Agil B2B | Segura EPI',
  description:
    'A Segura EPI e sua mentora em seguranca do trabalho. Distribuidor B2B focado em conformidade legal, C.A. ativo, especificacao tecnica e entrega rapida no Nordeste.',
  alternates: {
    canonical: 'https://seguraepi.com.br/',
  },
  openGraph: {
    title: 'EPI com C.A. Ativo, Consultoria Tecnica e Logistica Agil B2B | Segura EPI',
    description:
      'Distribuidor B2B com foco em conformidade legal, C.A. ativo, especificacao tecnica e entrega rapida no Nordeste.',
    url: 'https://seguraepi.com.br/',
    siteName: 'Segura EPI',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  const microProofs = [
    '+1.500 empresas ativas',
    'C.A. checado em base oficial',
    'Logistica estrategica para a Paraiba',
  ];

  const clarityPoints = [
    {
      title: 'Risco Zero',
      description: 'Analise do risco real e especifico de cada atividade na sua operacao.',
    },
    {
      title: 'Conformidade Legal',
      description: 'Aderencia total a Norma Regulamentadora aplicavel ao seu setor.',
    },
    {
      title: 'Validade e Integridade',
      description: 'C.A. ativo com controle rigoroso de lote e rastreabilidade.',
    },
    {
      title: 'Previsibilidade',
      description: 'Agilidade na reposicao via logistica otimizada para o Nordeste.',
    },
  ];

  const sectors = [
    {
      title: 'Construcao Civil',
      focus: 'NR-18 - NR-35 - Trabalho em Altura',
      description:
        'Solucoes robustas para canteiro de obras, com foco em durabilidade, protecao em altura e reposicao programada.',
    },
    {
      title: 'Industria',
      focus: 'Risco Mecanico, Quimico e Termico',
      description:
        'Protecao de alta performance para ambientes fabris, garantindo integridade do colaborador e do processo produtivo.',
    },
    {
      title: 'Energia / Eletrica',
      focus: 'NR-10 - Protecao contra Arco Eletrico',
      description:
        'Equipamentos especializados para eletricistas, com total aderencia as exigencias normativas.',
    },
    {
      title: 'Logistica / Armazenagem',
      focus: 'Ergonomia e Movimentacao',
      description:
        'EPIs que unem protecao e conforto para rotinas intensas, reduzindo fadiga muscular.',
    },
    {
      title: 'Agronegocio',
      focus: 'Protecao Quimica e Solar',
      description:
        'Solucoes contra intemperies, exposicao solar e riscos especificos de defensivos.',
    },
  ];

  const categories = [
    {
      title: 'Capacetes de Seguranca',
      description: 'Protecao contra impacto com ajuste confiavel e C.A. ativo.',
      slug: 'capacetes',
    },
    {
      title: 'Luvas de Protecao Tecnica',
      description: 'Risco quimico, mecanico e corte com sensibilidade tatil.',
      slug: 'luvas',
    },
    {
      title: 'Respiratorios e Mascaras',
      description: 'PFF2, filtros e respiradores com orientacao de troca.',
      slug: 'respiratorios',
    },
    {
      title: 'Trabalho em Altura (NR-35)',
      description: 'Cintos, talabartes e trava-quedas certificados.',
      slug: 'altura',
    },
    {
      title: 'Auditivos e Abafadores',
      description: 'Reducao de ruido com conforto para turnos longos.',
      slug: 'auditivos',
    },
    {
      title: 'Vestimentas de Protecao',
      description: 'Uniformes e barreiras termicas para ambientes exigentes.',
      slug: 'vestimentas',
    },
    {
      title: 'Calcados de Seguranca',
      description: 'Conforto, grip e tecnologia Neo Evolution.',
      slug: 'calcados',
    },
    {
      title: 'Protecao Facial e Ocular',
      description: 'Oculos, viseiras e protetores contra impacto e respingos.',
      slug: 'ocular',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Validacao ativa de C.A.',
      description: 'Checagem constante na base oficial para garantir certificacao valida.',
    },
    {
      number: '02',
      title: 'Indicacao conforme norma',
      description: 'Recomendacao baseada na NR aplicavel e risco real da atividade.',
    },
    {
      number: '03',
      title: 'Controle de lote e validade',
      description: 'Gestao rigorosa para integridade, prazo e rastreabilidade.',
    },
    {
      number: '04',
      title: 'Logistica regional estrategica',
      description: 'Operacao otimizada para o Nordeste com prazos previsiveis.',
    },
    {
      number: '05',
      title: 'Processo estruturado B2B',
      description: 'Cotacao, pos-venda e fluxo formal de trocas e devolucoes.',
    },
  ];

  const cases = [
    {
      title: 'Construcao Civil - Obra vertical em Joao Pessoa',
      description:
        'Padronizacao de EPI para 60 colaboradores, reposicao quinzenal e cumprimento da NR-18 sem paradas operacionais.',
    },
    {
      title: 'Industria Quimica - Operacao de risco complexo',
      description:
        'Fornecimento de EPIs especiais com C.A. ativo e logistica just-in-time para a Paraiba, mantendo a operacao segura.',
    },
  ];

  const faqItems: FaqItem[] = [
    {
      q: 'Como a Segura EPI garante a validade do C.A.?',
      a: 'Trabalhamos apenas com EPIs certificados e checamos a vigencia na base oficial antes de cada venda.',
    },
    {
      q: 'A Segura EPI realmente tem pronta entrega no Nordeste?',
      a: 'Sim. Estoque inteligente e logistica estrategica garantem reposicao agil em Joao Pessoa e em toda a regiao.',
    },
    {
      q: 'Qual o criterio para indicar o EPI certo para meu risco?',
      a: 'Analisamos atividade e risco especifico, indicando o EPI ideal em conformidade com a NR aplicavel.',
    },
    {
      q: 'Voces atendem apenas grandes empresas?',
      a: 'Atendemos empresas de todos os portes, mantendo o mesmo padrao tecnico e agilidade.',
    },
    {
      q: 'Quais as formas de pagamento B2B?',
      a: 'Compra a vista (cadastro rapido) e compra faturada com analise de credito em ate 24h.',
    },
  ];

  return (
    <main className="relative" id="main-content">
      <Navbar variant="dark" />
      <ScrollReveal />

      {/* Hero */}
      <Section id="hero" variant="dark" className="pt-28 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-bg-inverse to-slate-900 opacity-85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,155,33,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.05),transparent_35%)]" />
        <Container className="relative z-10">
          <div className="max-w-4xl space-y-8">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
              Distribuidor B2B - Conformidade - Logistica Agil
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight text-white uppercase tracking-tight">
              EPI com Conformidade Garantida, Especificacao Tecnica e Entrega Agil no Nordeste.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
              Nos entregamos mais que equipamentos: entregamos seguranca com inteligencia, conhecimento e compromisso com a vida. Distribuidor B2B que garante C.A. ativo, atendimento consultivo e logistica preparada para empresas que tem o capital humano como prioridade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href={buildUrl(ROUTES.chat, { intent: 'orcamento-rapido', origem: 'home-hero' })}
                variant="primary"
                className="px-10 py-5 shadow-glow-brand"
                trackEvent="cta_home_hero_orcamento"
              >
                Solicitar orcamento rapido
              </Button>
              <Button
                href={buildUrl(ROUTES.chat, { intent: 'validar-especificacao', origem: 'home-hero' })}
                variant="outline"
                className="px-10 py-5 text-white border-white/30 hover:border-action-primary hover:text-action-primaryHover"
                trackEvent="cta_home_hero_validar"
              >
                Validar especificacao tecnica
              </Button>
              <Button
                href={buildUrl(ROUTES.catalog, { origem: 'home-hero' })}
                variant="ghost"
                className="px-10 py-5 text-white border border-white/10 hover:border-action-primary"
                trackEvent="cta_home_hero_catalogo"
              >
                Acessar catalogo B2B
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {microProofs.map((item) => (
                <div key={item} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-xs uppercase tracking-[0.2em] text-slate-200 font-display font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Bloco de clareza */}
      <Section id="clareza" variant="offwhite" className="pt-16 pb-16 reveal">
        <Container>
          <SectionTitle
            subtitle="O que realmente resolvemos"
            title="Seguranca e uma escolha tecnica. Menos risco, mais conhecimento."
            description="Seguranca do trabalho nao e compra, e investimento. Atuamos como parceiro tecnico para reduzir risco e garantir conformidade."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {clarityPoints.map((item) => (
              <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
                <p className="text-xs font-display font-bold uppercase tracking-[0.25em] text-action-primary">{item.title}</p>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button
              href={buildUrl(ROUTES.center, { origem: 'home-clareza' })}
              variant="primary"
              className="px-8 py-4"
              trackEvent="cta_home_centro_tecnico"
            >
              Conheca nosso Centro Tecnico e Consultoria
            </Button>
          </div>
        </Container>
      </Section>

      {/* Setores atendidos */}
      <Section id="segmentos" variant="default" className="pt-16 pb-16 reveal">
        <Container>
          <SectionTitle
            subtitle="Setores atendidos"
            title="EPI especializado por setor: da NR-10 a NR-35."
            description="Solucoes completas para riscos especificos, do chao de fabrica ao canteiro de obras."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {sectors.map((sector) => (
              <div key={sector.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
                <p className="text-[10px] font-display font-bold uppercase tracking-[0.25em] text-action-primary">{sector.focus}</p>
                <h3 className="text-xl font-display font-black uppercase tracking-tight text-text-primary mt-3">{sector.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">{sector.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Categorias */}
      <Section id="categorias" variant="default" className="pt-16 pb-16 reveal">
        <Container>
          <SectionTitle
            subtitle="Categorias de produto"
            title="Linha completa de EPI para sua operacao"
            description="Seu estoque nao pode falhar. Logistica regional e reposicao rapida para itens essenciais."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {categories.map((item) => (
              <DecisionCard
                key={item.title}
                title={item.title}
                description={item.description}
                href={buildUrl(ROUTES.catalog, { origem: 'home-categorias', categoria: item.slug })}
                actionText="Ver catalogo"
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <Button
              href={buildUrl(ROUTES.catalog, { origem: 'home-categorias-cta' })}
              variant="primary"
              className="px-8 py-4"
              trackEvent="cta_home_catalogo"
            >
              Ver catalogo B2B completo
            </Button>
            <Button
              href={buildUrl(ROUTES.chat, { intent: 'cotar-itens', origem: 'home-categorias-cta' })}
              variant="outline"
              className="px-8 py-4"
              trackEvent="cta_home_lista_itens"
            >
              Solicitar orcamento por lista de itens
            </Button>
          </div>
        </Container>
      </Section>

      {/* Diferencial operacional */}
      <Section id="processo" variant="offwhite" className="pt-16 pb-16 reveal">
        <Container>
          <SectionTitle
            subtitle="Diferencial operacional"
            title="Nao e so fornecimento. E um processo de validacao B2B."
            description="Minimizamos falhas, reduzimos risco de autuacao e garantimos seguranca com um fluxo tecnico padronizado."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {processSteps.map((step) => (
              <MethodStep key={step.number} number={step.number} title={step.title} description={step.description} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Centro tecnico */}
      <Section id="centro-tecnico" variant="dark" className="pt-16 pb-16 reveal">
        <Container>
          <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 md:p-12">
            <SectionTitle
              subtitle="Centro tecnico"
              title="Decisao tecnica com informacao confiavel"
              description="Nosso centro de conhecimento reune orientacoes baseadas em NRs, boas praticas e experiencia de campo para apoiar sua equipe de seguranca."
              alignment="left"
            />
            <Button
              href={buildUrl(ROUTES.center, { origem: 'home-centro-tecnico' })}
              variant="primary"
              className="px-8 py-4 mt-8"
              trackEvent="cta_home_centro_tecnico_2"
            >
              Acessar o Centro Tecnico Segura EPI
            </Button>
          </div>
        </Container>
      </Section>

      {/* Prova social */}
      <Section id="cases" variant="default" className="pt-16 pb-16 reveal">
        <Container>
          <SectionTitle
            subtitle="Prova social"
            title="Seguranca de verdade se prova com dados"
            description="Casos reais de execucao tecnica e previsibilidade operacional."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {cases.map((item) => (
              <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
                <h3 className="text-lg font-display font-black uppercase tracking-tight text-text-primary">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq" variant="offwhite" className="pt-16 pb-16 reveal">
        <Container>
          <SectionTitle subtitle="FAQ" title="Duvidas rapidas" />
          <FaqList items={faqItems} />
        </Container>
      </Section>

      {/* Orcamento rapido */}
      <Section id="orcamento" variant="default" className="pt-16 pb-16 reveal">
        <Container>
          <SectionTitle
            subtitle="Orcamento rapido"
            title="Peca seu orcamento agora com atendimento tecnico especializado"
            description="Sua solicitacao sera analisada por um especialista tecnico antes mesmo do envio da cotacao."
          />
          <div className="mt-10">
            <LeadForm />
          </div>
        </Container>
      </Section>

      {/* Expansao */}
      <Section id="expansao" variant="dark" className="pt-16 pb-16 reveal">
        <Container>
          <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 md:p-12">
            <SectionTitle
              subtitle="Expansao estruturada"
              title="Seja um guardiao da nossa marca no Nordeste"
              description="Estamos expandindo a rede de representantes com foco em etica, conhecimento tecnico e alto desempenho."
              alignment="left"
            />
            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                href={buildUrl(ROUTES.chat, { intent: 'representante', origem: 'home-expansao' })}
                variant="primary"
                className="px-8 py-4"
                trackEvent="cta_home_parceiro"
              >
                Seja parceiro
              </Button>
              <Button
                href={buildUrl(ROUTES.chat, { intent: 'representante', origem: 'home-expansao' })}
                variant="outline"
                className="px-8 py-4 text-white border-white/30 hover:border-action-primary hover:text-action-primaryHover"
                trackEvent="cta_home_modelo"
              >
                Quero entender o modelo estruturado
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

