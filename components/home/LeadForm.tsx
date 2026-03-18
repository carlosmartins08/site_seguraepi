'use client';

import React, { useState } from 'react';
import { Button } from '../actions/Button';
import { ROUTES } from '../../lib/routes';
import { LEAD_STORAGE_KEY } from '../../lib/lead';

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

  const handleChange = (field: keyof LeadFormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof window === 'undefined') return;

    const payload = {
      ...form,
      source: 'home-orcamento',
      createdAt: new Date().toISOString(),
    };

    window.sessionStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(payload));
    window.location.href = ROUTES.thanks;
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-elevation-1 space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="lead-name" className="text-xs font-display font-bold uppercase tracking-[0.2em] text-slate-500">
            Nome do comprador
          </label>
          <input
            id="lead-name"
            name="lead_name"
            value={form.name}
            onChange={handleChange('name')}
            required
            placeholder="Digite seu nome"
            autoComplete="name"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-action-primary/40 focus:border-action-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lead-company" className="text-xs font-display font-bold uppercase tracking-[0.2em] text-slate-500">
            Empresa (Razao Social)
          </label>
          <input
            id="lead-company"
            name="lead_company"
            value={form.company}
            onChange={handleChange('company')}
            required
            placeholder="Nome da empresa"
            autoComplete="organization"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-action-primary/40 focus:border-action-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lead-cnpj" className="text-xs font-display font-bold uppercase tracking-[0.2em] text-slate-500">
            CNPJ (opcional)
          </label>
          <input
            id="lead-cnpj"
            name="lead_cnpj"
            value={form.cnpj}
            onChange={handleChange('cnpj')}
            placeholder="00.000.000/0000-00"
            inputMode="numeric"
            autoComplete="off"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-action-primary/40 focus:border-action-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lead-segment" className="text-xs font-display font-bold uppercase tracking-[0.2em] text-slate-500">
            Segmento
          </label>
          <select
            id="lead-segment"
            name="lead_segment"
            value={form.segment}
            onChange={handleChange('segment')}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-action-primary/40 focus:border-action-primary"
          >
            <option value="">Selecione</option>
            <option value="Construcao">Construcao</option>
            <option value="Industria">Industria</option>
            <option value="Logistica">Logistica</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="lead-whatsapp" className="text-xs font-display font-bold uppercase tracking-[0.2em] text-slate-500">
            WhatsApp
          </label>
          <input
            id="lead-whatsapp"
            name="lead_whatsapp"
            value={form.whatsapp}
            onChange={handleChange('whatsapp')}
            required
            placeholder="(00) 00000-0000"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-action-primary/40 focus:border-action-primary"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="lead-items" className="text-xs font-display font-bold uppercase tracking-[0.2em] text-slate-500">
            Lista de itens de interesse
          </label>
          <textarea
            id="lead-items"
            name="lead_items"
            value={form.items}
            onChange={handleChange('items')}
            rows={4}
            placeholder="Ex: 30 botas NR-35, 50 luvas nitrilicas, 20 respiradores PFF2"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-action-primary/40 focus:border-action-primary"
          />
        </div>
      </div>

      <Button type="submit" variant="primary" className="w-full md:w-auto px-10 py-4 shadow-glow-brand">
        Receber atendimento consultivo no WhatsApp
      </Button>
    </form>
  );
};
