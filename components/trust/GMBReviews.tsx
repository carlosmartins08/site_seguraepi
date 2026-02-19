
import React from 'react';
import { Container } from '../layout/Container';
import { cn } from '../../lib/cn';

interface Review {
    author: string;
    role: string;
    content: string;
    rating: number;
    date: string;
}

const reviews: Review[] = [
    {
        author: "Ricardo Mendes",
        role: "Gestor de Segurança - Logística JP",
        content: "Atendimento técnico impecável. Encontramos todos os EPIs específicos para nossa operação e a retirada foi imediata em Cabedelo.",
        rating: 5,
        date: "1 mês atrás"
    },
    {
        author: "Ana Cláudia Silva",
        role: "Engenheira de Segurança do Trabalho",
        content: "A Segura EPI é nossa parceira estratégica há anos. O suporte sobre as NRs é o diferencial que não encontramos em outros fornecedores.",
        rating: 5,
        date: "2 meses atrás"
    },
    {
        author: "Marcos Oliveira",
        role: "Diretor de Operações Industriais",
        content: "Site fácil de usar e o suporte via WhatsApp é muito ágil. Demonstram total conhecimento dos equipamentos que vendem.",
        rating: 5,
        date: "15 dias atrás"
    }
];

export const GMBReviews: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-[-12deg] translate-x-1/2 -z-10"></div>

            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-[2px] bg-segura-primary"></div>
                            <span className="text-segura-primary font-display font-bold uppercase tracking-widest text-[10px]">Prova Social Verificada</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-black text-segura-dark leading-tight uppercase">
                            AUTORIDADE RECONHECIDA <br />
                            <span className="text-slate-400">PELA INDÚSTRIA</span>
                        </h2>
                    </div>

                    <div className="bg-segura-dark p-6 rounded-3xl border border-white/10 shadow-segura-glow text-white flex items-center gap-6">
                        <div className="text-center">
                            <p className="text-3xl font-display font-black">4.9</p>
                            <div className="flex gap-1 text-segura-primary">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="h-12 w-[1px] bg-white/10"></div>
                        <div>
                            <p className="font-display font-bold uppercase text-[10px] tracking-widest text-slate-400 mb-1">Google Reviews</p>
                            <p className="text-xs text-white/80">Baseado em +250 avaliações oficiais</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div
                            key={i}
                            className="group p-8 bg-slate-50 rounded-4xl border border-slate-200 hover:bg-white hover:shadow-segura-soft transition-all duration-500 relative"
                        >
                            <div className="absolute top-8 right-8 text-slate-200 group-hover:text-segura-primary/20 transition-colors">
                                <svg className="w-12 h-12 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1215 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1215 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM3 21V18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21ZM16.017 21V18C16.017 16.8954 14.017 16 14.017 16H19.017C20.1215 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1215 23 19.017 23H16.017C14.017 23 14.017 22.1046 14.017 21ZM3 21V18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21Z" />
                                </svg>
                            </div>

                            <div className="flex gap-1 text-segura-primary mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-slate-600 font-sans italic mb-8 relative z-10">"{review.content}"</p>

                            <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-display font-black text-slate-400">
                                    {review.author[0]}
                                </div>
                                <div>
                                    <p className="font-display font-bold text-segura-dark text-xs uppercase tracking-widest">{review.author}</p>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-tight font-display">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
