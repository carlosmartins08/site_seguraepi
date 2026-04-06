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
        <div key={item.q} className="bg-bg-surface rounded-2xl border border-border-subtle p-6 md:p-8 shadow-elevation-1">
          <button
            type="button"
            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
            aria-expanded={openFaqIndex === index}
            aria-controls={`faq-panel-${index}`}
            className="w-full flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
          >
            <h3 className="text-titleMD font-display font-semibold text-text-primary tracking-tight">{item.q}</h3>
            <svg
              className={cn("w-5 h-5 transition-transform", openFaqIndex === index && "rotate-180")}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" strokeWidth={2} />
            </svg>
          </button>
          <div
            id={`faq-panel-${index}`}
            role="region"
            className={cn(
              "mt-4 grid transition-[grid-template-rows,opacity] duration-base ease-standard",
              openFaqIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <p className="overflow-hidden text-text-body text-bodySM md:text-bodyMD leading-relaxed border-t border-border-muted pt-4">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};



