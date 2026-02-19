
import React from 'react';
import { Container } from './Container';
import { Logo } from '../brand/Logo';
import { CONTACT_INFO } from '../../lib/constants';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const socialLinks = [
    { name: 'Instagram', href: CONTACT_INFO.instagram, icon: 'instagram' },
    { name: 'LinkedIn', href: CONTACT_INFO.linkedin, icon: 'linkedin' },
    { name: 'Facebook', href: CONTACT_INFO.facebook, icon: 'facebook' },
    { name: 'YouTube', href: CONTACT_INFO.youtube, icon: 'youtube' },
    { name: 'WhatsApp', href: CONTACT_INFO.whatsapp, icon: 'whatsapp' },
  ];

  return (
    <footer className="bg-segura-dark text-white py-24 border-t border-white/5">
      <Container>
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <Logo theme="white" className="h-12 mb-8" />
            <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-[0.2em] font-sans mb-8">
              Especialistas em proteção industrial e serviços técnicos B2B. Consultoria baseada em risco e conformidade.
            </p>
            <div className="space-y-4">
              <p className="text-slate-400 text-[10px] font-display font-bold uppercase tracking-widest flex items-center gap-3">
                <svg className="w-4 h-4 text-segura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {CONTACT_INFO.email}
              </p>
              <p className="text-slate-400 text-[10px] font-display font-bold uppercase tracking-widest flex items-center gap-3">
                <svg className="w-4 h-4 text-segura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {CONTACT_INFO.phone}
              </p>
              <a
                href={CONTACT_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 text-[10px] font-display font-bold uppercase tracking-widest flex items-center gap-3 hover:text-segura-primary transition-colors group"
              >
                <svg className="w-4 h-4 text-segura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="max-w-[180px] leading-tight group-hover:underline underline-offset-4">{CONTACT_INFO.fullAddress}</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-[10px] uppercase tracking-[0.3em] mb-10 text-segura-primary">Institucional</h4>
            <ul className="space-y-6 text-[10px] text-slate-400 uppercase tracking-widest font-display font-bold">
              <li><button onClick={onOpenPrivacy} className="hover:text-segura-primary transition-colors text-left uppercase">Privacidade</button></li>
              <li><button onClick={onOpenTerms} className="hover:text-segura-primary transition-colors text-left uppercase">Termos de Uso</button></li>
              <li><a href="/retira" className="hover:text-segura-primary transition-colors uppercase">Retirada Local</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-[10px] uppercase tracking-[0.3em] mb-10 text-segura-primary">Soluções</h4>
            <ul className="space-y-6 text-[10px] text-slate-400 uppercase tracking-widest font-display font-bold">
              <li><a href="/catalogo" className="hover:text-segura-primary transition-colors uppercase">Catálogo de EPI</a></li>
              <li><a href={CONTACT_INFO.whatsapp} className="hover:text-segura-primary transition-colors uppercase">Consultoria</a></li>
              <li><a href="/epi" className="hover:text-segura-primary transition-colors uppercase">Guias Técnicos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-[10px] uppercase tracking-[0.3em] mb-10 text-segura-primary">Certificações</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-white/10 p-3 rounded-xl text-center text-[9px] font-bold uppercase tracking-widest text-white/40">NR-06</div>
              <div className="border border-white/10 p-3 rounded-xl text-center text-[9px] font-bold uppercase tracking-widest text-white/40">ISO 9001</div>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-slate-600 text-[9px] font-bold uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} Segura EPI & Serviços. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-segura-primary transition-all duration-300 hover:scale-110 active:scale-95 flex items-center gap-2 group"
                title={social.name}
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-segura-primary/30 transition-colors">
                  {social.icon === 'instagram' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>}
                  {social.icon === 'linkedin' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>}
                  {social.icon === 'facebook' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>}
                  {social.icon === 'youtube' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>}
                  {social.icon === 'whatsapp' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
