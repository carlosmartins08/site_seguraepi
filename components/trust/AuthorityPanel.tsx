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
    <div className={cn('bg-bg-surface border border-border-subtle rounded-2xl p-8 md:p-10 shadow-elevation-1', className)}>
      <p className="text-action-primary font-display font-semibold uppercase tracking-[0.18em] text-labelSM">
        {subtitle}
      </p>
      <h3 className="text-titleLG md:text-titleXL font-display font-semibold text-text-primary mt-3">{title}</h3>
      <p className="text-text-body text-bodySM md:text-bodyMD leading-relaxed mt-3">{description}</p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="space-y-3">
          <p className="text-labelSM font-display font-semibold uppercase tracking-[0.18em] text-text-muted">{leadLabel}</p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-bg-surfaceMuted flex items-center justify-center text-text-primary font-display font-bold">
              SE
            </div>
            <div>
              <p className="text-bodySM font-display font-semibold text-text-primary">{AUTHORITY_INFO.leadName}</p>
              <p className="text-bodySM text-text-muted">{AUTHORITY_INFO.leadRole}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {AUTHORITY_INFO.credentials.map((item) => (
              <span key={item} className="px-2.5 py-1 rounded-full text-labelSM font-semibold bg-bg-surfaceMuted text-text-body">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-labelSM font-display font-semibold uppercase tracking-[0.18em] text-text-muted">{sourcesLabel}</p>
          <div className="flex flex-wrap gap-2">
            {AUTHORITY_INFO.sources.map((item) => (
              <span key={item} className="px-2.5 py-1 rounded-full text-labelSM font-semibold bg-bg-surfaceMuted text-text-body">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-labelSM font-display font-semibold uppercase tracking-[0.18em] text-text-muted">{updatedLabel}</p>
          <p className="text-bodySM text-text-body">{AUTHORITY_INFO.updatedAt}</p>
          <p className="text-bodySM text-text-muted">Conteúdo revisado por equipe técnica.</p>
        </div>
      </div>
    </div>
  );
};




