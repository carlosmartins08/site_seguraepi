import React from 'react';
import { AUTHORITY_INFO } from '../../lib/content/authority';
import { cn } from '../../lib/cn';

interface AuthorityPanelProps {
  subtitle: string;
  title: string;
  description: string;
  leadLabel: string;
  sourcesLabel: string;
  updatedLabel: string;
  className?: string;
}

export const AuthorityPanel: React.FC<AuthorityPanelProps> = ({
  subtitle,
  title,
  description,
  leadLabel,
  sourcesLabel,
  updatedLabel,
  className,
}) => {
  return (
    <div className={cn('bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-elevation-1', className)}>
      <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[10px]">
        {subtitle}
      </p>
      <h3 className="text-2xl md:text-3xl font-display font-black text-text-primary mt-3">{title}</h3>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-3">{description}</p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="space-y-3">
          <p className="text-[10px] font-display font-bold uppercase tracking-[0.25em] text-slate-500">{leadLabel}</p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-bg-surfaceMuted flex items-center justify-center text-text-primary font-display font-black">
              SE
            </div>
            <div>
              <p className="text-sm font-display font-bold text-text-primary">{AUTHORITY_INFO.leadName}</p>
              <p className="text-xs text-slate-500">{AUTHORITY_INFO.leadRole}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {AUTHORITY_INFO.credentials.map((item) => (
              <span key={item} className="px-2.5 py-1 rounded-full text-[10px] font-display font-bold uppercase tracking-[0.2em] bg-slate-100 text-slate-600">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[10px] font-display font-bold uppercase tracking-[0.25em] text-slate-500">{sourcesLabel}</p>
          <div className="flex flex-wrap gap-2">
            {AUTHORITY_INFO.sources.map((item) => (
              <span key={item} className="px-2.5 py-1 rounded-full text-[10px] font-display font-bold uppercase tracking-[0.2em] bg-bg-surfaceMuted text-slate-600">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[10px] font-display font-bold uppercase tracking-[0.25em] text-slate-500">{updatedLabel}</p>
          <p className="text-sm text-slate-600">{AUTHORITY_INFO.updatedAt}</p>
          <p className="text-xs text-slate-500">Conteudo revisado por equipe tecnica.</p>
        </div>
      </div>
    </div>
  );
};
