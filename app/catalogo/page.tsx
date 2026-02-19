
'use client';

import React, { useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { Footer } from '../../components/layout/Footer';
import { Navbar } from '../../components/layout/Navbar';
import { Logo } from '../../components/brand/Logo';
import { MOCK_PRODUCTS } from '../../lib/catalog/products';
import { applyFilters, CATEGORIES_FILTER, SEGMENTS_FILTER } from '../../lib/catalog/filters';
import { cn } from '../../lib/cn';

export default function CatalogoPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentCategory = searchParams.get('categoria') || '';
  const currentSegment = searchParams.get('segmento') || '';

  const filteredProducts = useMemo(() => {
    const results = applyFilters(MOCK_PRODUCTS, {
      category: currentCategory,
      segment: currentSegment
    });
    
    // Ordenar para que os destaques apareçam primeiro
    return [...results].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
  }, [currentCategory, currentSegment]);

  const updateFilter = (key: 'categoria' | 'segmento', value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/catalogo?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="light" />

      {/* Hero Section */}
      <Section id="catalog-hero" variant="offwhite" className="pt-40 pb-24 border-b border-slate-200">
        <Container>
          <SectionTitle 
            subtitle="Mix de Produtos" 
            title="Catálogo Digital SeguraEPI" 
            description="Filtre por categoria e segmento industrial para dimensionar a proteção ideal para sua equipe."
          />
          
          <div className="space-y-10 mt-12 bg-white p-10 rounded-3xl border border-slate-200 shadow-segura-soft animate-pop">
            <div>
              <p className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-segura-primary mb-5">Categorias Principais</p>
              <div className="flex flex-wrap gap-3">
                {CATEGORIES_FILTER.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => updateFilter('categoria', cat.value)}
                    className={cn(
                      "px-6 py-3 text-[10px] font-display font-bold uppercase tracking-widest transition-all rounded-xl border-2",
                      currentCategory === cat.value 
                        ? "bg-segura-primary border-segura-primary text-white shadow-segura-glow" 
                        : "bg-transparent border-slate-200 text-slate-500 hover:border-segura-primary hover:text-segura-primary"
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-segura-primary mb-5">Segmentos Industriais</p>
              <div className="flex flex-wrap gap-3">
                {SEGMENTS_FILTER.map((seg) => (
                  <button
                    key={seg.value}
                    onClick={() => updateFilter('segmento', seg.value)}
                    className={cn(
                      "px-6 py-3 text-[10px] font-display font-bold uppercase tracking-widest transition-all rounded-xl border-2",
                      currentSegment === seg.value 
                        ? "bg-segura-dark border-segura-dark text-white" 
                        : "bg-transparent border-slate-200 text-slate-500 hover:border-segura-dark hover:text-segura-dark"
                    )}
                  >
                    {seg.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Results Grid */}
      <Section id="catalog-results" className="pb-32">
        <Container>
          <div className="flex justify-between items-center mb-12">
            <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-slate-400">
              Mostrando <span className="text-segura-dark">{filteredProducts.length}</span> soluções técnicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className={cn(
                  "relative rounded-3xl bg-white p-8 border transition-all duration-500 group flex flex-col h-full hover:-translate-y-2",
                  product.isFeatured 
                    ? "border-segura-primary shadow-segura-glow scale-[1.02] ring-4 ring-segura-primary/5" 
                    : "border-slate-100 shadow-segura-soft hover:shadow-segura-hover hover:border-segura-primary"
                )}
              >
                {/* Badge de Destaque */}
                {product.isFeatured && (
                  <div className="absolute -top-4 left-8 px-4 py-1.5 bg-segura-primary text-white rounded-full shadow-segura-glow animate-bounce-in z-10">
                    <span className="text-[10px] font-display font-black uppercase tracking-[0.1em] flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Destaque Técnico
                    </span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                   <span className="bg-segura-success/10 text-segura-success px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest border border-segura-success/20 flex items-center gap-1.5">
                     <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                     </svg>
                     C.A. Ativo
                   </span>
                   <span className="bg-slate-100 text-slate-500 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest">
                     {product.categoryKey.replace('protecao-', '')}
                   </span>
                </div>
                
                <h3 className={cn(
                  "text-xl font-display font-bold mb-4 transition-colors",
                  product.isFeatured ? "text-segura-primary" : "text-segura-dark group-hover:text-segura-primary"
                )}>
                  {product.name}
                </h3>
                
                <p className="text-slate-500 mb-10 flex-grow text-sm leading-relaxed font-sans">
                  {product.shortDesc}
                </p>

                <div className="space-y-4 pt-8 border-t border-slate-100">
                  <Button 
                    href={`/chat?origem=catalogo&acao=cotacao&produto=${product.id}`}
                    variant={product.isFeatured ? "primary" : "outline"}
                    className={cn(
                      "w-full rounded-xl",
                      !product.isFeatured && "border-slate-200 text-slate-600 hover:border-segura-primary hover:text-white"
                    )}
                  >
                    Solicitar Cotação
                  </Button>
                  <a 
                    href={`/chat?origem=catalogo&acao=detalhes&produto=${product.id}`}
                    className="text-slate-400 font-display font-bold uppercase text-[10px] tracking-widest block text-center hover:text-segura-primary transition-colors"
                  >
                    Ver Especificações
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
               <h3 className="text-2xl font-display font-bold text-slate-400 mb-6 uppercase">Nenhum item encontrado</h3>
               <Button href="/chat" variant="primary">Falar com Consultor</Button>
            </div>
          )}
        </Container>
      </Section>

      <Footer onOpenPrivacy={() => {}} onOpenTerms={() => {}} />
    </main>
  );
}
