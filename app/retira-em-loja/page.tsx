
'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Container } from '../../components/layout/Container';
import { Section } from '../../components/layout/Section';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { MethodStep } from '../../components/method/MethodStep';
import { AlertList } from '../../components/trust/AlertList';
import { DecisionCard } from '../../components/cards/DecisionCard';
import { AssistedCTA } from '../../components/conversion/AssistedCTA';
import { cn } from '../../lib/cn';

/**
 * PÁGINA RETIRA EM LOJA - SEGURA EPI
 * Comando 07 - Checklist Rápido
 */
export default function RetiraEmLojaPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqItems = [
    {
      q: "Posso retirar sem o aviso de pedido pronto?",
      a: "Não recomendamos. O aviso garante que todos os itens foram localizados, conferidos e separados fisicamente. Ir sem o aviso pode resultar em espera excessiva ou falta de algum item no estoque local."
    },
    {
      q: "Outra pessoa pode retirar por mim?",
      a: "Sim, desde que apresente documento com foto e uma autorização simples (pode ser digital) informando o número do pedido e os dados do comprador/empresa."
    },
    {
      q: "Qual o prazo máximo para retirar o pedido?",
      a: "Mantemos seu pedido separado por até 7 dias úteis. Após esse prazo, os itens retornam ao estoque geral e o pedido pode ser cancelado ou exigir nova separação."
    },
    {
      q: "Como funciona a conferência no balcão?",
      a: "Nossa equipe apresentará os itens e você deverá conferir modelos, tamanhos e quantidades. Esta etapa é fundamental para garantir que você saia com a proteção correta para sua equipe."
    },
    {
      q: "A unidade abre aos sábados e feriados?",
      a: "Nossa unidade opera de segunda a sexta-feira. Não há expediente para retirada aos sábados, domingos ou feriados nacionais e locais. Consulte os horários exatos no hero desta página."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="light" />

      {/* [1] HERO */}
      <Section id="hero" variant="default" className="pt-48 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-segura-offwhite -skew-x-12 translate-x-1/4 pointer-events-none" />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-slide-up">
              <SectionTitle 
                subtitle="Processo de retirada"
                title="Retira em Loja: pegue seu pedido com agilidade e segurança"
                description="Confira o passo a passo, o que levar e as regras de retirada. Assim você evita deslocamento desnecessário e retira seu pedido com tranquilidade."
              />
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
                <Button href="/chat?origem=retira-hero&intent=retira-em-loja" variant="primary" className="w-full sm:w-auto px-10">Quero retirar em loja</Button>
                <Button href="/chat?origem=retira-hero&intent=validar-retirada" variant="outline" className="w-full sm:w-auto px-10 border-slate-200 text-slate-600 hover:border-segura-primary hover:text-white">Validar antes de sair</Button>
              </div>
              <div className="mt-8">
                <ContextLink href="#como-funciona">Ver como funciona</ContextLink>
              </div>
            </div>
            <div className="space-y-8 animate-pop delay-200">
              <div className="grid gap-4">
                <div className="flex items-center gap-5 p-6 bg-white border border-slate-100 rounded-3xl shadow-segura-soft group hover:border-segura-primary transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-segura-primary/10 flex items-center justify-center text-segura-primary shrink-0 group-hover:bg-segura-primary group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  </div>
                  <span className="font-display font-bold text-sm uppercase tracking-tight text-segura-dark">Separação e retirada com orientação</span>
                </div>
                <div className="flex items-center gap-5 p-6 bg-white border border-slate-100 rounded-3xl shadow-segura-soft group hover:border-segura-primary transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-segura-primary/10 flex items-center justify-center text-segura-primary shrink-0 group-hover:bg-segura-primary group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="font-display font-bold text-sm uppercase tracking-tight text-segura-dark">Regras claras para evitar ida perdida</span>
                </div>
              </div>
              <div className="p-6 bg-segura-dark rounded-3xl border border-white/5 relative overflow-hidden group">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <p className="text-[10px] font-display font-bold uppercase tracking-widest text-slate-400">Endereço e horário: <span className="text-white text-xs block mt-1">Av. Santa Isabel, 96 - Cabedelo • 08h-18h</span></p>
                  <a href="#faq" className="text-segura-primary font-display font-bold text-[10px] uppercase tracking-widest hover:underline underline-offset-4 shrink-0">Ver perguntas frequentes</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* [2] COMO FUNCIONA */}
      <Section id="como-funciona" variant="offwhite">
        <Container>
          <SectionTitle subtitle="Como funciona" title="Do pedido à retirada em poucos passos" description="Veja o fluxo e evite deslocamento desnecessário." />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mt-16">
            <MethodStep number="01" title="Faça o pedido" description="Escolha os itens e informe que a retirada será em loja." />
            <MethodStep number="02" title="Aguarde a confirmação" description="A retirada só deve ocorrer após confirmação de separação/disponibilidade." />
            <MethodStep number="03" title="Separe o que levar" description="Leve documento e dados do pedido. Terceiros precisam de autorização." />
            <MethodStep number="04" title="Retire com conferência" description="Na loja, confira itens e quantidades antes de finalizar a retirada." />
          </div>
        </Container>
      </Section>

      {/* [3] PRAZOS E DISPONIBILIDADE */}
      <Section id="prazos" variant="default">
        <Container>
          <SectionTitle subtitle="Prazos e disponibilidade" title="Quando posso retirar meu pedido?" description="A retirada acontece após confirmação de separação/disponibilidade. Evite ida perdida." />
          <div className="grid lg:grid-cols-2 gap-16 mt-16 items-start">
            <div className="animate-slide-up">
              <AlertList items={[
                "Retirada somente após confirmação: A confirmação evita deslocamento sem o pedido separado.",
                "Disponibilidade pode variar por item: Um pedido pode ter itens prontos e outros aguardando reposição.",
                "Itens sob encomenda exigem validação: Quando houver encomenda, o prazo depende de reposição/fornecedor.",
                "Em caso de urgência, peça equivalentes: Podemos sugerir alternativas equivalentes quando fizer sentido."
              ]} />
            </div>
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <DecisionCard eyebrow="Cenário comum" title="Itens em estoque" description="Retirada com conferência após confirmação rápida." href="/chat?intent=separacao" actionText="Confirmar" />
                <DecisionCard eyebrow="Atenção" title="Itens sob encomenda" description="A retirada depende de validação de reposição." href="/chat?intent=encomenda" actionText="Validar" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* [4] O QUE LEVAR */}
      <Section id="o-que-levar" variant="default">
        <Container>
          <SectionTitle subtitle="O que levar" title="Documentos e informações para retirar sem travar" description="Com os dados certos em mãos, a retirada fica rápida e sem ida perdida." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 items-stretch">
            <div className="rounded-3xl bg-white p-8 border border-slate-100 shadow-segura-soft group flex flex-col h-full hover:shadow-segura-hover hover:border-segura-primary transition-all">
              <h3 className="text-xl font-display font-black mb-6 text-segura-dark uppercase tracking-tight">Pessoa Física</h3>
              <ul className="space-y-3 mb-6 flex-grow">
                {["Documento com foto (RG ou CNH)", "Número do pedido", "Confirmação de liberação"].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-500 font-sans"><div className="w-1.5 h-1.5 bg-segura-primary rounded-full shrink-0 mt-1.5" />{b}</li>
                ))}
              </ul>
              <ContextLink href="/chat?intent=pf">Tirar dúvida</ContextLink>
            </div>
            <div className="rounded-3xl bg-white p-8 border border-slate-100 shadow-segura-soft group flex flex-col h-full hover:shadow-segura-hover hover:border-segura-primary transition-all">
              <h3 className="text-xl font-display font-black mb-6 text-segura-dark uppercase tracking-tight">Empresa (PJ)</h3>
              <ul className="space-y-3 mb-6 flex-grow">
                {["Documento de quem retira", "Dados da empresa (CNPJ)", "Confirmação de liberação"].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-500 font-sans"><div className="w-1.5 h-1.5 bg-segura-primary rounded-full shrink-0 mt-1.5" />{b}</li>
                ))}
              </ul>
              <ContextLink href="/chat?intent=pj">Validar B2B</ContextLink>
            </div>
            <div className="rounded-3xl bg-white p-8 border border-slate-100 shadow-segura-soft group flex flex-col h-full hover:shadow-segura-hover hover:border-segura-primary transition-all">
              <h3 className="text-xl font-display font-black mb-6 text-segura-dark uppercase tracking-tight">Terceiros</h3>
              <ul className="space-y-3 mb-6 flex-grow">
                {["Documento do portador", "Autorização do comprador", "Número do pedido"].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-500 font-sans"><div className="w-1.5 h-1.5 bg-segura-primary rounded-full shrink-0 mt-1.5" />{b}</li>
                ))}
              </ul>
              <ContextLink href="/chat?intent=terceiro">Como autorizar</ContextLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* [5] REGRAS IMPORTANTES */}
      <Section id="regras" variant="offwhite">
        <Container>
          <SectionTitle subtitle="Regras importantes" title="O que você precisa saber antes de retirar" description="Regras simples para evitar ida perdida." />
          <div className="grid lg:grid-cols-2 gap-16 mt-16">
            <AlertList items={[
              "Retire somente após confirmação do pedido pronto.",
              "Confira modelos e tamanhos no balcão antes de assinar.",
              "Horário de almoço (12h-13h) sem atendimento para retirada.",
              "Apresentação de documento original é obrigatória."
            ]} />
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-segura-soft">
              <h4 className="text-xl font-display font-bold text-segura-dark mb-6 uppercase">Se ocorrer divergência</h4>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">Pare a retirada imediatamente e informe o atendente. Validaremos o item e buscaremos alternativa equivalente ou correção imediata.</p>
              <ContextLink href="/chat?intent=divergencia">Suporte via Chat</ContextLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* [6] CHECKLIST RÁPIDO (NÃO DAR ERRADO) */}
      <Section id="checklist" variant="default" className="reveal">
        <Container>
          <SectionTitle 
            subtitle="Checklist"
            title="Retira em Loja sem surpresa"
            description="Siga estes passos e evite ida perdida."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Card 1: Antes de sair */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-segura-soft hover:shadow-segura-hover transition-all group flex flex-col h-full">
              <h4 className="text-xl font-display font-black text-segura-dark mb-6 uppercase tracking-tight group-hover:text-segura-primary transition-colors">Antes de sair</h4>
              <ul className="space-y-4 flex-grow">
                {[
                  "Confirme se o pedido está separado e liberado.",
                  "Tenha o número do pedido em mãos.",
                  "Separe documento com foto.",
                  "Se for terceiro, leve autorização."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-sans text-slate-500">
                    <div className="w-1.5 h-1.5 bg-segura-primary rounded-full shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Ao chegar na loja */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-segura-soft hover:shadow-segura-hover transition-all group flex flex-col h-full">
              <h4 className="text-xl font-display font-black text-segura-dark mb-6 uppercase tracking-tight group-hover:text-segura-primary transition-colors">Ao chegar na loja</h4>
              <ul className="space-y-4 flex-grow">
                {[
                  "Informe que a retirada é do 'Retira em Loja'.",
                  "Apresente documento e dados do pedido.",
                  "Confirme nome/empresa do pedido.",
                  "Aguarde a liberação para conferência."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-sans text-slate-500">
                    <div className="w-1.5 h-1.5 bg-segura-primary rounded-full shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Na retirada (conferência) */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-segura-soft hover:shadow-segura-hover transition-all group flex flex-col h-full">
              <h4 className="text-xl font-display font-black text-segura-dark mb-6 uppercase tracking-tight group-hover:text-segura-primary transition-colors">Na retirada (conferência)</h4>
              <ul className="space-y-4 flex-grow">
                {[
                  "Confira itens e quantidades.",
                  "Valide tamanhos quando aplicável.",
                  "Em divergência, sinalize antes de finalizar.",
                  "Se precisar, solicite equivalente no atendimento."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-sans text-slate-500">
                    <div className="w-1.5 h-1.5 bg-segura-primary rounded-full shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 p-8 bg-segura-offwhite rounded-3xl border border-slate-100 shadow-segura-soft flex flex-col md:flex-row items-center justify-between gap-6 animate-pop">
            <p className="text-slate-500 text-sm font-sans text-center md:text-left font-medium">
              Quer conferir com a equipe antes de sair? A gente valida em minutos.
            </p>
            <ContextLink href="/chat?origem=retira-checklist&intent=validar-rapido">
              Validar agora
            </ContextLink>
          </div>

          <div className="mt-12 text-center animate-slide-up">
            <ContextLink href="#faq" className="justify-center">
              Ver perguntas frequentes
            </ContextLink>
          </div>
        </Container>
      </Section>

      {/* [7] FAQ */}
      <Section id="faq" variant="offwhite" className="reveal">
        <Container>
          <SectionTitle 
            subtitle="Suporte"
            title="Dúvidas Frequentes"
            description="As respostas mais comuns sobre o processo de retirada para agilizar sua jornada."
          />
          
          <div className="max-w-4xl mt-16 space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-white rounded-2xl border transition-all duration-500 overflow-hidden",
                  openFaqIndex === index 
                    ? "border-segura-primary/40 shadow-segura-hover" 
                    : "border-slate-100 shadow-segura-soft hover:border-segura-primary/20"
                )}
              >
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className={cn(
                    "text-lg font-display font-bold uppercase tracking-tight transition-all duration-300",
                    openFaqIndex === index ? "text-segura-primary" : "text-segura-dark group-hover:text-segura-primary"
                  )}>
                    {item.q}
                  </span>
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shrink-0 ml-4",
                    openFaqIndex === index 
                      ? "bg-segura-primary text-white rotate-180 shadow-segura-glow" 
                      : "bg-segura-offwhite text-slate-400 group-hover:bg-slate-100"
                  )}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={cn(
                  "px-8 transition-all duration-500 ease-in-out overflow-hidden",
                  openFaqIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="pb-8 pt-2 border-t border-slate-50">
                    <p className="text-slate-500 font-sans text-base leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-white rounded-4xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-segura-soft">
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-display font-bold text-segura-dark mb-2 uppercase tracking-tight">Ainda com dúvida?</h4>
              <p className="text-slate-500 font-sans text-sm">Fale com um consultor técnico agora mesmo para suporte em tempo real.</p>
            </div>
            <Button href="/chat?origem=retira-faq" variant="outline" className="w-full md:w-auto px-10 border-slate-200 text-slate-600 hover:border-segura-primary hover:text-white">Falar com especialista</Button>
          </div>
        </Container>
      </Section>

      {/* [8] CTA FINAL ASSISTIDO */}
      <Section id="cta-final" variant="immersive">
        <Container>
          <AssistedCTA />
        </Container>
      </Section>

      <Footer onOpenPrivacy={() => {}} onOpenTerms={() => {}} />
    </main>
  );
}
