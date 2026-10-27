import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040610] border-t border-white/5 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Location */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1.5px]">
                <div className="w-full h-full bg-[#070b18] rounded-[10px] flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m10 15 5-3-5-3v6Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Dev<span className="text-cyan-400">Alif</span>
              </span>
            </div>

            <p className="text-sm font-medium text-slate-300">
              {personal.name} <span className="text-cyan-400">({personal.nickname})</span>
            </p>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Backend Developer & Database Specialist &bull; Lulusan S1 Universitas Darul 'Ulum Jombang.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              QUICK LINKS
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              {['home', 'about', 'academic', 'portfolio', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="hover:text-cyan-300 transition-colors capitalize"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              CONNECT
            </span>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-cyan-400" />
              <a href={`mailto:${personal.email}`} className="hover:text-cyan-300 transition-colors">
                {personal.email}
              </a>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              {[
                { icon: GithubIcon, href: personal.socials.github, label: 'GitHub' },
                { icon: LinkedinIcon, href: personal.socials.linkedin, label: 'LinkedIn' },
                { icon: InstagramIcon, href: personal.socials.instagram, label: 'Instagram' },
                { icon: WhatsAppIcon, href: personal.socials.whatsapp, label: 'WhatsApp' },
              ].map((soc, idx) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={soc.label}
                    className="w-9 h-9 rounded-xl bg-[#080d1e] border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  >
                    <IconComp className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with React &amp; Tailwind &bull; Crafted with passion in Jombang
          </p>
        </div>

      </div>
    </footer>
  );
}
