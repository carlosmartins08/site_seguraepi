'use client';

import React, { useState } from 'react';
import { cn } from '../../lib/cn';

export type FaqItem = {
  q: string;
  a: string;
};

export const FaqList: React.FC<{ items: FaqItem[] }> = ({ items }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div key={item.q} className="bg-white rounded-3xl border border-border-default p-6 md:p-8 shadow-elevation-1">
          <button
            type="button"
            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
            aria-expanded={openFaqIndex === index}
            aria-controls={`faq-panel-${index}`}
            className="w-full flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
          >
            <h3 className="text-xl md:text-2xl font-display font-black text-text-primary tracking-tight">{item.q}</h3>
            <svg
              className={cn("w-6 h-6 transition-transform", openFaqIndex === index && "rotate-180")}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" strokeWidth={2} />
            </svg>
          </button>
          {openFaqIndex === index && (
            <p
              id={`faq-panel-${index}`}
              role="region"
              className="mt-6 pt-6 border-t border-slate-50 text-slate-600 text-lg leading-relaxed"
            >
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
