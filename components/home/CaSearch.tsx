'use client';

import React, { useState } from 'react';
import { Button } from '../actions/Button';

type CaSearchProps = {
  defaultQuery?: string;
};

export const CaSearch: React.FC<CaSearchProps> = ({ defaultQuery = 'ca' }) => {
  const [caSearch, setCaSearch] = useState('');

  return (
    <div className="bg-slate-900/60 rounded-3xl p-4 md:p-6 border border-white/10 shadow-inner shadow-black/20 mb-8">
      <label className="flex items-center gap-2 text-slate-200 text-xs font-display font-bold uppercase tracking-[0.25em] mb-3">
        <svg className="w-4 h-4 text-action-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        Validação Técnica
      </label>
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        <div className="relative flex-1">
          <input
            value={caSearch}
            onChange={(e) => setCaSearch(e.target.value)}
            placeholder={'Digite o número do C.A. ou o nome do produto...'}
            className="w-full rounded-2xl bg-slate-800/70 border border-slate-700 text-white px-5 py-4 placeholder:text-slate-500 focus:outline-none focus:border-action-primary focus:ring-2 focus:ring-focus-ring transition-all"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-action-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
        </div>
        <Button
          href={`/catalogo?busca=${encodeURIComponent(caSearch || defaultQuery)}`}
          variant="primary"
          className="px-8 py-4 whitespace-nowrap"
          trackEvent="cta_buscar_ca"
        >
          Buscar CA / Produto
        </Button>
      </div>
    </div>
  );
};
