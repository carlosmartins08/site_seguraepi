'use client';

import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { CONTACT_INFO } from '../../lib/constants';
import { JsonLd } from '../../components/seo/JsonLd';
import { buildTechArticleJsonLd, buildSpeakableJsonLd, buildBreadcrumbJsonLd } from '../../lib/seo/schema';
import { SITE_URL } from '../../lib/seo/site';
import { ROUTES } from '../../lib/routes';

const tableRows = [
  ['CabeÃ§a', 'Capacetes de seguranÃ§a', 'Impactos, queda de objetos, risco elÃ©trico'],
  ['Olhos e Face', 'Ã“culos, viseiras', 'PartÃ­culas, radiaÃ§Ã£o, respingos quÃ­micos'],
  ['Auditiva', 'Abafadores e plugs', 'RuÃ­dos contÃ­nuos ou intermitentes'],
  ['RespiratÃ³ria', 'Respiradores e filtros', 'Poeiras, gases, vapores, fumos'],
  ['MÃ£os e BraÃ§os', 'Luvas e mangotes', 'Cortes, agentes quÃ­micos, tÃ©rmicos'],
  ['Tronco', 'Aventais, jalecos, vestimentas', 'Respingos quÃ­micos e calor'],
  ['Membros Inferiores', 'Botas e sapatos de seguranÃ§a', 'Impacto, perfuraÃ§Ã£o, umidade'],
  ['Contra Quedas', 'CinturÃ£o paraquedista, trava-quedas', 'Trabalho em altura (NR-35)'],
];

export default function GuiaEpiPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={buildTechArticleJsonLd({
        headline: 'Equipamentos de Proteção Individual | Guia Técnico',
        description: 'Entenda o que é EPI segundo a NR-06, categorias por área do corpo, responsabilidades legais e como validar o Certificado de Aprovação (CA).',
        url: `${SITE_URL}/epi`,
        datePublished: '2025-01-01',
        dateModified: '2025-10-01',
      })} />
      <JsonLd data={buildSpeakableJsonLd(`${SITE_URL}/epi`, ['h1', 'h2', '.speakable'])} />
      <JsonLd data={buildBreadcrumbJsonLd([
        { name: 'Home', url: SITE_URL },
        { name: 'Guia de EPI', url: `${SITE_URL}${ROUTES.epi}` },
      ])} />
      <Navbar variant="light" />

      <Section id="hero-epi" variant="offwhite" className="pt-nav pb-20">
        <Container className="max-w-5xl space-y-8">
          <div className="space-y-4">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[11px]">Guia TÃ©cnico de Equipamentos de ProteÃ§Ã£o Individual</p>
            <h1 className="text-4xl md:text-5xl font-display font-black text-text-primary leading-tight">O Que SÃ£o Equipamentos de ProteÃ§Ã£o Individual (EPI)?</h1>
            <p className="speakable text-text-body text-lg leading-relaxed">
              Conforme a Norma Regulamentadora nÂº 6 (NR-06), do MinistÃ©rio do Trabalho e Emprego, EPI Ã© todo dispositivo ou produto de uso individual destinado Ã  proteÃ§Ã£o do trabalhador contra riscos capazes de ameaÃ§ar sua seguranÃ§a e saÃºde no exercÃ­cio da atividade laboral. Ã‰ obrigatÃ³rio sempre que as medidas de proteÃ§Ã£o coletiva nÃ£o eliminarem totalmente o risco ou nÃ£o forem suficientes para controlÃ¡-lo.
            </p>
            <ContextLink href="/centro-tecnico">Entenda como validar o CA no Centro TÃ©cnico</ContextLink>
          </div>
        </Container>
      </Section>

      <Section id="classificacao" variant="default">
        <Container className="max-w-6xl space-y-10">
          <SectionTitle
            subtitle="ClassificaÃ§Ã£o dos EPIs por Ã¡rea do corpo"
            title="Categorias de Equipamentos de ProteÃ§Ã£o Individual"
            description="Os EPIs sÃ£o classificados conforme a parte do corpo protegida e o tipo de risco controlado."
          />

          <div className="overflow-hidden rounded-xl border border-border-default shadow-elevation-1">
            <div className="grid grid-cols-3 bg-bg-inverse text-white text-sm font-display uppercase tracking-[0.15em]">
              <div className="px-4 py-3">Categoria</div>
              <div className="px-4 py-3">Exemplos</div>
              <div className="px-4 py-3">ProteÃ§Ã£o contra</div>
            </div>
            <div className="divide-y divide-slate-100">
              {tableRows.map((row) => (
                <div key={row[0]} className="grid grid-cols-3 text-sm text-text-secondary">
                  <div className="px-4 py-3 font-semibold text-text-primary">{row[0]}</div>
                  <div className="px-4 py-3">{row[1]}</div>
                  <div className="px-4 py-3">{row[2]}</div>
                </div>
              ))}
            </div>
          </div>

          <Button href="/epi/categorias" variant="primary" className="px-8">
            Ver categorias disponÃ­veis no CatÃ¡logo B2B
          </Button>
        </Container>
      </Section>

      <Section id="responsabilidades" variant="offwhite">
        <Container className="max-w-5xl space-y-10">
          <SectionTitle
            subtitle="Responsabilidades legais"
            title="Responsabilidades previstas na NR-06"
            description="A legislaÃ§Ã£o brasileira define deveres claros para empregadores e empregados."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl border border-border-default shadow-elevation-1 space-y-3">
              <h3 className="text-lg font-display font-bold text-text-primary">Empregador</h3>
              <ul className="space-y-2 text-text-body text-sm">
                <li>Fornecer EPI gratuitamente</li>
                <li>Garantir adequaÃ§Ã£o ao risco</li>
                <li>Exigir uso correto</li>
                <li>Treinar o trabalhador</li>
                <li>Substituir quando danificado ou vencido</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl border border-border-default shadow-elevation-1 space-y-3">
              <h3 className="text-lg font-display font-bold text-text-primary">Empregado</h3>
              <ul className="space-y-2 text-text-body text-sm">
                <li>Utilizar apenas para a finalidade indicada</li>
                <li>Zelar pela conservaÃ§Ã£o</li>
                <li>Comunicar irregularidades</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="certificado" variant="default">
        <Container className="max-w-5xl space-y-8">
          <SectionTitle
            subtitle="Certificado de AprovaÃ§Ã£o (CA)"
            title="O que Ã© o Certificado de AprovaÃ§Ã£o (CA)?"
            description="Nenhum EPI pode ser comercializado ou utilizado no Brasil sem o CA expedido pelo MinistÃ©rio do Trabalho."
          />
          <p className="text-text-body text-lg leading-relaxed">
            O CA atesta que o equipamento foi testado e aprovado conforme critÃ©rios tÃ©cnicos especÃ­ficos. A validaÃ§Ã£o deve ser feita diretamente na base oficial do governo.
          </p>
          <Button href="/centro-tecnico" variant="outline" className="w-full sm:w-auto">
            Validar um CA no Centro TÃ©cnico
          </Button>
        </Container>
      </Section>

      <Section id="manutencao" variant="offwhite">
        <Container className="max-w-5xl space-y-10">
          <SectionTitle
            subtitle="CritÃ©rios de troca e manutenÃ§Ã£o"
            title="InspeÃ§Ã£o, conservaÃ§Ã£o e substituiÃ§Ã£o"
            description="A durabilidade depende de uso, ambiente, armazenamento e instruÃ§Ãµes do fabricante."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl border border-border-default shadow-elevation-1">
              <ul className="space-y-3 text-text-body text-sm">
                <li>âœ“ InspeÃ§Ã£o visual diÃ¡ria</li>
                <li>âœ“ HigienizaÃ§Ã£o conforme recomendaÃ§Ã£o tÃ©cnica</li>
                <li>âœ“ Armazenamento em local seco e protegido</li>
                <li>âœ“ SubstituiÃ§Ã£o imediata em caso de dano</li>
                <li>âœ“ VerificaÃ§Ã£o periÃ³dica da validade do CA</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl border border-border-default shadow-elevation-1 text-text-body text-sm space-y-3">
              <p>A durabilidade do EPI varia com intensidade de uso, ambiente de trabalho e cuidados de conservaÃ§Ã£o.</p>
              <p>Quando houver dÃºvida sobre integridade ou prazo, substitua e valide o CA antes de liberar para operaÃ§Ã£o.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="posicionamento" variant="default" className="pb-28">
        <Container className="max-w-5xl space-y-8">
          <SectionTitle
            subtitle="Posicionamento Segura EPI"
            title="EspecificaÃ§Ã£o correta evita risco operacional"
            description="A escolha do EPI certo depende do risco real, da norma aplicÃ¡vel e da validade do CA."
          />
          <p className="text-text-body text-lg leading-relaxed">
            A Segura EPI atua como distribuidor consultivo, auxiliando empresas na validaÃ§Ã£o tÃ©cnica antes da aquisiÃ§Ã£o. Validamos aplicaÃ§Ã£o, norma, conformidade e responsabilidade legal para reduzir risco trabalhista e operacional.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/centro-tecnico" variant="primary" className="px-7">Validar especificaÃ§Ã£o</Button>
            <Button href={CONTACT_INFO.whatsapp} variant="outline" className="px-7">Solicitar orÃ§amento</Button>
            <Button href="https://catalogo.seguraepi.com.br" variant="ghost" className="px-7 bg-bg-surfaceMuted text-text-primary">
              Acessar CatÃ¡logo B2B
            </Button>
          </div>
        </Container>
      </Section>

    </main>
  );
}




