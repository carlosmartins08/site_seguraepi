'use client';

import React, { useMemo, useState } from 'react';
import { Button } from '../actions/Button';
import { ROUTES } from '../../lib/routes';
import { LEAD_STORAGE_KEY } from '../../lib/lead';
import { storeChatContext } from '../../lib/chat-context';
import { Field, fieldBase } from '../forms/Field';

type LeadFormState = {
  name: string;
  company: string;
  cnpj: string;
  segment: string;
  whatsapp: string;
  items: string;
};

export const LeadForm: React.FC = () => {
  const [form, setForm] = useState<LeadFormState>({
    name: '',
    company: '',
    cnpj: '',
    segment: '',
    whatsapp: '',
    items: '',
  });
  const [consent, setConsent] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange =
    (field: keyof LeadFormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const errors = useMemo(
    () => ({
      name: form.name.trim() ? '' : 'Informe o nome do comprador.',
      company: form.company.trim() ? '' : 'Informe a razão social.',
      whatsapp: form.whatsapp.trim() ? '' : 'Informe um WhatsApp válido.',
    }),
    [form]
  );

  const hasErrors = Object.values(errors).some(Boolean);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof window === 'undefined') return;
    if (hasErrors || !consent) {
      setTouched({ name: true, company: true, whatsapp: true });
      return;
    }

    const payload = {
      ...form,
      source: 'home-orcamento',
      createdAt: new Date().toISOString(),
      consentAt: consent ? new Date().toISOString() : undefined,
    };

    window.sessionStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(payload));
    storeChatContext({ intent: 'lead-form', origem: 'home-orcamento' });
    window.location.href = ROUTES.thanks;
  };

  return (
    <form onSubmit={handleSubmit} className="bg-bg-surface border border-border-subtle rounded-2xl p-6 md:p-10 shadow-elevation-1 space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-display font-semibold text-text-primary">Dados para atendimento rápido</h3>
        <p className="text-sm text-text-body">Preencha o mínimo necessário para o consultor montar a proposta.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field id="lead-name" label="Nome do comprador" required error={touched.name ? errors.name : ''}>
          <input
            id="lead-name"
            name="lead_name"
            value={form.name}
            onChange={handleChange('name')}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            placeholder="Digite seu nome"
            autoComplete="name"
            className={fieldBase}
          />
        </Field>

        <Field id="lead-company" label="Empresa (razão social)" required error={touched.company ? errors.company : ''}>
          <input
            id="lead-company"
            name="lead_company"
            value={form.company}
            onChange={handleChange('company')}
            onBlur={() => setTouched((prev) => ({ ...prev, company: true }))}
            placeholder="Nome da empresa"
            autoComplete="organization"
            className={fieldBase}
          />
        </Field>

        <Field id="lead-cnpj" label="CNPJ (opcional)" hint="Se tiver em mãos, acelera a análise.">
          <input
            id="lead-cnpj"
            name="lead_cnpj"
            value={form.cnpj}
            onChange={handleChange('cnpj')}
            placeholder="00.000.000/0000-00"
            inputMode="numeric"
            autoComplete="off"
            className={fieldBase}
          />
        </Field>

        <Field id="lead-segment" label="Segmento">
          <select
            id="lead-segment"
            name="lead_segment"
            value={form.segment}
            onChange={handleChange('segment')}
            className={fieldBase}
          >
            <option value="">Selecione</option>
            <option value="Construcao">Construção</option>
            <option value="Industria">Indústria</option>
            <option value="Logistica">Logística</option>
            <option value="Outros">Outros</option>
          </select>
        </Field>

        <Field
          id="lead-whatsapp"
          label="WhatsApp para contato"
          required
          error={touched.whatsapp ? errors.whatsapp : ''}
          className="md:col-span-2"
        >
          <input
            id="lead-whatsapp"
            name="lead_whatsapp"
            value={form.whatsapp}
            onChange={handleChange('whatsapp')}
            onBlur={() => setTouched((prev) => ({ ...prev, whatsapp: true }))}
            placeholder="(00) 00000-0000"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={fieldBase}
          />
        </Field>

        <Field id="lead-items" label="Itens de interesse" className="md:col-span-2">
          <textarea
            id="lead-items"
            name="lead_items"
            value={form.items}
            onChange={handleChange('items')}
            rows={4}
            placeholder="Ex: 30 botas NR-35, 50 luvas nitrílicas, 20 respiradores PFF2"
            className={fieldBase}
          />
        </Field>
      </div>

      <div className="flex flex-col gap-4">
        <label className="flex items-start gap-3 text-xs text-text-body">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            required
            className="mt-0.5 h-4 w-4 rounded border-border-default text-action-primary focus:ring-focus-ring"
          />
          <span>
            Ao enviar, você concorda com o tratamento dos dados conforme a{' '}
            <a className="underline hover:text-action-primary" href={ROUTES.privacyPolicy}>
              Política de Privacidade
            </a>.
          </span>
        </label>

        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto shadow-glow-brand">
          Receber atendimento consultivo no WhatsApp
        </Button>
      </div>
    </form>
  );
};
