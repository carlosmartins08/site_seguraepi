'use client';

import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { CONTACT_INFO } from '../../lib/constants';

const tableRows = [
  ['Cabeça', 'Capacetes de segurança', 'Impactos, queda de objetos, risco elétrico'],
  ['Olhos e Face', 'Óculos, viseiras', 'Partículas, radiação, respingos químicos'],
  ['Auditiva', 'Abafadores e plugs', 'Ruídos contínuos ou intermitentes'],
  ['Respiratória', 'Respiradores e filtros', 'Poeiras, gases, vapores, fumos'],
  ['Mãos e Braços', 'Luvas e mangotes', 'Cortes, agentes químicos, térmicos'],
  ['Tronco', 'Aventais, jalecos, vestimentas', 'Respingos químicos e calor'],
  ['Membros Inferiores', 'Botas e sapatos de segurança', 'Impacto, perfuração, umidade'],
  ['Contra Quedas', 'Cinturão paraquedista, trava-quedas', 'Trabalho em altura (NR-35)'],
];

export default function GuiaEpiPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="light" />

      <Section id="hero-epi" variant="offwhite" className="pt-36 pb-20">
        <Container className="max-w-5xl space-y-8">
          <div className="space-y-4">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[11px]">Guia Técnico de Equipamentos de Proteção Individual</p>
            <h1 className="text-4xl md:text-5xl font-display font-black text-text-primary leading-tight">O Que São Equipamentos de Proteção Individual (EPI)?</h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Conforme a Norma Regulamentadora nº 6 (NR-06), do Ministério do Trabalho e Emprego, EPI é todo dispositivo ou produto de uso individual destinado à proteção do trabalhador contra riscos capazes de ameaçar sua segurança e saúde no exercício da atividade laboral. É obrigatório sempre que as medidas de proteção coletiva não eliminarem totalmente o risco ou não forem suficientes para controlá-lo.
            </p>
            <ContextLink href="/centro-tecnico">Entenda como validar o CA no Centro Técnico</ContextLink>
          </div>
        </Container>
      </Section>

      <Section id="classificacao" variant="default">
        <Container className="max-w-6xl space-y-10">
          <SectionTitle
            subtitle="Classificação dos EPIs por área do corpo"
            title="Categorias de Equipamentos de Proteção Individual"
            description="Os EPIs são classificados conforme a parte do corpo protegida e o tipo de risco controlado."
          />

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-elevation-1">
            <div className="grid grid-cols-3 bg-bg-inverse text-white text-sm font-display uppercase tracking-[0.15em]">
              <div className="px-4 py-3">Categoria</div>
              <div className="px-4 py-3">Exemplos</div>
              <div className="px-4 py-3">Proteção contra</div>
            </div>
            <div className="divide-y divide-slate-100">
              {tableRows.map((row) => (
                <div key={row[0]} className="grid grid-cols-3 text-sm text-slate-700">
                  <div className="px-4 py-3 font-semibold text-text-primary">{row[0]}</div>
                  <div className="px-4 py-3">{row[1]}</div>
                  <div className="px-4 py-3">{row[2]}</div>
                </div>
              ))}
            </div>
          </div>

          <Button href="/epi/categorias" variant="primary" className="px-8">
            Ver categorias disponíveis no Catálogo B2B
          </Button>
        </Container>
      </Section>

      <Section id="responsabilidades" variant="offwhite">
        <Container className="max-w-5xl space-y-10">
          <SectionTitle
            subtitle="Responsabilidades legais"
            title="Responsabilidades previstas na NR-06"
            description="A legislação brasileira define deveres claros para empregadores e empregados."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-elevation-1 space-y-3">
              <h3 className="text-lg font-display font-bold text-text-primary">Empregador</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>Fornecer EPI gratuitamente</li>
                <li>Garantir adequação ao risco</li>
                <li>Exigir uso correto</li>
                <li>Treinar o trabalhador</li>
                <li>Substituir quando danificado ou vencido</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-elevation-1 space-y-3">
              <h3 className="text-lg font-display font-bold text-text-primary">Empregado</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>Utilizar apenas para a finalidade indicada</li>
                <li>Zelar pela conservação</li>
                <li>Comunicar irregularidades</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="certificado" variant="default">
        <Container className="max-w-5xl space-y-8">
          <SectionTitle
            subtitle="Certificado de Aprovação (CA)"
            title="O que é o Certificado de Aprovação (CA)?"
            description="Nenhum EPI pode ser comercializado ou utilizado no Brasil sem o CA expedido pelo Ministério do Trabalho."
          />
          <p className="text-slate-600 text-lg leading-relaxed">
            O CA atesta que o equipamento foi testado e aprovado conforme critérios técnicos específicos. A validação deve ser feita diretamente na base oficial do governo.
          </p>
          <Button href="/centro-tecnico" variant="outline" className="w-full sm:w-auto">
            Validar um CA no Centro Técnico
          </Button>
        </Container>
      </Section>

      <Section id="manutencao" variant="offwhite">
        <Container className="max-w-5xl space-y-10">
          <SectionTitle
            subtitle="Critérios de troca e manutenção"
            title="Inspeção, conservação e substituição"
            description="A durabilidade depende de uso, ambiente, armazenamento e instruções do fabricante."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-elevation-1">
              <ul className="space-y-3 text-slate-600 text-sm">
                <li>✓ Inspeção visual diária</li>
                <li>✓ Higienização conforme recomendação técnica</li>
                <li>✓ Armazenamento em local seco e protegido</li>
                <li>✓ Substituição imediata em caso de dano</li>
                <li>✓ Verificação periódica da validade do CA</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-elevation-1 text-slate-600 text-sm space-y-3">
              <p>A durabilidade do EPI varia com intensidade de uso, ambiente de trabalho e cuidados de conservação.</p>
              <p>Quando houver dúvida sobre integridade ou prazo, substitua e valide o CA antes de liberar para operação.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="posicionamento" variant="default" className="pb-28">
        <Container className="max-w-5xl space-y-8">
          <SectionTitle
            subtitle="Posicionamento Segura EPI"
            title="Especificação correta evita risco operacional"
            description="A escolha do EPI certo depende do risco real, da norma aplicável e da validade do CA."
          />
          <p className="text-slate-600 text-lg leading-relaxed">
            A Segura EPI atua como distribuidor consultivo, auxiliando empresas na validação técnica antes da aquisição. Validamos aplicação, norma, conformidade e responsabilidade legal para reduzir risco trabalhista e operacional.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/centro-tecnico" variant="primary" className="px-7">Validar especificação</Button>
            <Button href={CONTACT_INFO.whatsapp} variant="outline" className="px-7">Solicitar orçamento</Button>
            <Button href="https://catalogo.seguraepi.com.br" variant="ghost" className="px-7 bg-bg-surfaceMuted text-text-primary">
              Acessar Catálogo B2B
            </Button>
          </div>
        </Container>
      </Section>

    </main>
  );
}

