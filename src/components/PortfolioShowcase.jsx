import React, { useState, useEffect, useRef } from 'react';
import { Code2, Award, Layers, ExternalLink, CheckCircle, X, ChevronRight, Database, Server, Wrench, Layout } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const { projects, certificates, techStack } = portfolioData;

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Modal behaviour: close on Escape, trap keyboard focus, and lock page scroll
  useEffect(() => {
    if (!selectedProject) return;

    const previouslyFocused = document.activeElement;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        return;
      }

      // Keep Tab / Shift+Tab cycling inside the dialog
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050713]">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header with Horizontal Lines */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full flex items-center justify-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-cyan-500/40 max-w-xs" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white px-2">
              Portfolio <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Showcase</span>
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-500/20 to-cyan-500/40 max-w-xs" />
          </div>
          
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Explore my journey through projects, certificates, and technical expertise. Each section represents a milestone in my continuous learning path.
          </p>

          {/* 3 Pill Tabs Switcher (Exactly as in the video) */}
          <div className="mt-8 inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#080d1e] border border-white/10 shadow-2xl backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>PROJECTS</span>
            </button>

            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'certificates'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>CERTIFICATES</span>
            </button>

            <button
              onClick={() => setActiveTab('tech')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'tech'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>TECH STACK</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PROJECTS */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="relative rounded-2xl bg-[#090e21]/80 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-300 flex flex-col group"
              >
                {/* Project Header Banner Preview */}
                <div className="relative h-44 bg-gradient-to-br from-[#0c142e] via-[#091124] to-[#060a16] p-5 flex flex-col justify-between border-b border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] text-slate-300 backdrop-blur-md">
                      <Database className="w-3.5 h-3.5 text-cyan-400" />
                      <span>SQL Architecture</span>
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                      proj.status === 'DEPLOYED'
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                        : proj.status === 'COMPLETED'
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        : 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                    }`}>
                      &bull; {proj.status}
                    </span>
                  </div>

                  {/* Visual Schema Icon Graphic */}
                  <div className="flex items-center justify-center my-auto">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Code2 className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Tech Tags on Preview */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Links Row */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        title="View Source"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                        title="Live System"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: CERTIFICATES */}
        {activeTab === 'certificates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="relative rounded-2xl bg-[#090e21]/80 border border-white/10 p-6 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 flex items-start gap-4 group"
              >
                {/* Number Badge (01, 02, etc.) */}
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <span className="text-sm font-extrabold text-cyan-400 font-mono">
                    {cert.id}
                  </span>
                </div>

                {/* Certificate Content */}
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 shrink-0">
                      {cert.year}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="text-xs font-medium text-slate-300">
                      {cert.issuer}
                    </p>
                    {cert.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.desc}
                  </p>

                  {/* Credential ID, validity & verification link */}
                  <div className="pt-2 mt-1 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-slate-500 font-mono">
                      <span>ID: {cert.code}</span>
                      <span>Valid: {cert.validUntil}</span>
                    </div>

                    {cert.verifyUrl && cert.verifyUrl !== '#' && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: TECH STACK */}
        {activeTab === 'tech' && (
          <div className="space-y-12 pt-4">
            
            {/* Category 1: Database Layer */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 tracking-wider uppercase">
                <Database className="w-4 h-4" />
                <span>DATABASE LAYER (CORE EXPERTISE)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {techStack.database.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#080d1e] border border-white/10 hover:border-cyan-400/50 hover:scale-105 transition-all flex flex-col items-center justify-center text-center group"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm mb-2 shadow-md"
                      style={{ backgroundColor: item.bg, color: item.color, border: `1px solid ${item.border}` }}
                    >
                      {item.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-cyan-400 font-mono mt-0.5">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2: Backend */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 tracking-wider uppercase">
                <Server className="w-4 h-4" />
                <span>BACK-END (SERVER-SIDE)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {techStack.backend.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#080d1e] border border-white/10 hover:border-blue-400/50 hover:scale-105 transition-all flex flex-col items-center justify-center text-center group"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm mb-2 shadow-md"
                      style={{ backgroundColor: item.bg, color: item.color, border: `1px solid ${item.border}` }}
                    >
                      {item.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-blue-400 font-mono mt-0.5">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3: Tools & DevOps */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 tracking-wider uppercase">
                <Wrench className="w-4 h-4" />
                <span>DATABASE & ENGINEERING TOOLS</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {techStack.tools.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#080d1e] border border-white/10 hover:border-purple-400/50 hover:scale-105 transition-all flex flex-col items-center justify-center text-center group"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm mb-2 shadow-md"
                      style={{ backgroundColor: item.bg, color: item.color, border: `1px solid ${item.border}` }}
                    >
                      {item.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-purple-400 font-mono mt-0.5">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 4: Front-End */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase">
                <Layout className="w-4 h-4" />
                <span>FRONT-END (CLIENT-SIDE BASICS)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {techStack.frontend.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#080d1e] border border-white/10 hover:border-emerald-400/50 hover:scale-105 transition-all flex flex-col items-center justify-center text-center group"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm mb-2 shadow-md"
                      style={{ backgroundColor: item.bg, color: item.color, border: `1px solid ${item.border}` }}
                    >
                      {item.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono mt-0.5">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090e21] border border-cyan-500/30 shadow-2xl p-6 sm:p-8 space-y-6"
          >
            
            <button
              ref={closeButtonRef}
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                Project Architecture
              </span>
              <h3 id="project-modal-title" className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Highlights */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Key Technical Highlights
              </span>
              <ul className="space-y-2">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
              >
                Close
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-cyan-500/25 flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
