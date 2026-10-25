import React, { useState, useEffect } from 'react';
import { ExternalLink, Mail, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, TelegramIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = portfolioData.typewriterRoles;

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText.length === currentRole.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Bio & Hero Info */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d152a] border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-lg shadow-emerald-950/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for projects & full-time</span>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
              Backend
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]">
              Developer
            </h1>
          </div>

          {/* Typewriter Subtitle */}
          <div className="h-8 flex items-center">
            <span className="text-xl sm:text-2xl font-semibold text-cyan-300 font-mono flex items-center">
              {displayedText}
              <span className="w-2.5 h-6 bg-cyan-400 ml-1.5 animate-pulse inline-block" />
            </span>
          </div>

          {/* Short Bio Paragraph */}
          <p className="text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            Saya adalah <strong className="text-white font-semibold">Alif Auliya' Haikal</strong>, seorang Backend Developer lulusan S1 <strong className="text-white font-semibold">Universitas Darul 'Ulum Jombang</strong> yang berfokus pada arsitektur database relasional, optimasi query SQL, perancangan RESTful API, dan integritas data performa tinggi.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollTo('portfolio')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
            >
              <span>View Projects</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3.5 rounded-xl bg-[#0d1428] border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
            >
              <span>Let's Talk</span>
              <Mail className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-3 pt-2">
            {[
              { icon: GithubIcon, href: portfolioData.personal.socials.github, label: 'GitHub' },
              { icon: LinkedinIcon, href: portfolioData.personal.socials.linkedin, label: 'LinkedIn' },
              { icon: InstagramIcon, href: portfolioData.personal.socials.instagram, label: 'Instagram' },
              { icon: TelegramIcon, href: portfolioData.personal.socials.telegram, label: 'Telegram' },
              { icon: Mail, href: portfolioData.personal.socials.email, label: 'Email' }
            ].map((soc, idx) => {
              const IconComp = soc.icon;
              return (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={soc.label}
                  className="w-10 h-10 rounded-xl bg-[#090e1f] border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:scale-105 transition-all shadow-md"
                >
                  <IconComp className="w-4 h-4" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Right Column: Code Terminal Mockup Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg rounded-2xl bg-[#080d1e]/90 border border-white/10 shadow-2xl shadow-cyan-950/40 overflow-hidden backdrop-blur-xl">
            
            {/* Window Topbar */}
            <div className="px-4 py-3 bg-[#060a17] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>database.sql</span>
              </div>
              <div className="w-12 text-right">
                <span className="text-[10px] text-cyan-400/80 font-mono">UTF-8</span>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-auto">
              <div className="text-slate-500 italic mb-2">-- Alif Auliya' Haikal: Backend & Database Schema</div>
              
              <div className="space-y-1">
                <div>
                  <span className="text-purple-400 font-bold">SELECT</span>
                </div>
                <div className="pl-4 space-y-0.5">
                  <div><span className="text-cyan-300">name</span> = <span className="text-amber-300">"Alif Auliya' Haikal"</span>,</div>
                  <div><span className="text-cyan-300">role</span> = <span className="text-amber-300">"Backend Developer"</span>,</div>
                  <div><span className="text-cyan-300">education</span> = <span className="text-amber-300">"S1 Univ. Darul 'Ulum Jombang"</span>,</div>
                  <div><span className="text-cyan-300">specialization</span> = <span className="text-amber-300">"Database & SQL Architecture"</span>,</div>
                  <div><span className="text-cyan-300">core_skills</span> = [</div>
                  <div className="pl-4 text-emerald-400">
                    "PostgreSQL", "MySQL", "SQL Server", "Query Optimization", "REST APIs", "Node.js"
                  </div>
                  <div>],</div>
                  <div><span className="text-cyan-300">status</span> = <span className="text-emerald-400 font-semibold">"Ready for Deployment..."</span></div>
                </div>
                <div>
                  <span className="text-purple-400 font-bold">FROM</span> <span className="text-blue-300">software_engineers</span>
                </div>
                <div>
                  <span className="text-purple-400 font-bold">WHERE</span> <span className="text-cyan-300">passion</span> = <span className="text-amber-300">"Scalable & High-Impact Systems"</span>;
                </div>
              </div>

              {/* Terminal Execution Result Pill */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Execution: 0.04ms (Indexed)
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[11px] border border-emerald-500/20">
                  Rows: 1 match
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
