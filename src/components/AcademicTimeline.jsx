import React from 'react';
import { GraduationCap, Code2, Database, Layers, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import graduationPhoto from '../assets/wisuda.jpeg';

export default function AcademicTimeline() {
  const { academicFoundation } = portfolioData;

  const getYearIcon = (index) => {
    switch (index) {
      case 0: return Code2;
      case 1: return Database;
      case 2: return Layers;
      case 3: return Award;
      default: return Code2;
    }
  };

  return (
    <section id="academic" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050713]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header with Horizontal Lines */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full flex items-center justify-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-cyan-500/40 max-w-xs" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white px-2">
              Academic <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Foundation</span>
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-500/20 to-cyan-500/40 max-w-xs" />
          </div>
          
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            {academicFoundation.subtitle}
          </p>

          {/* Academic Info Banner */}
          <div className="mt-6 inline-flex flex-col items-center p-4 rounded-2xl bg-[#090e21]/90 border border-cyan-500/20 shadow-xl shadow-cyan-950/20 backdrop-blur-md">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>{academicFoundation.degree}</span>
            </div>
            <span className="text-xs text-slate-400 mt-1">
              {academicFoundation.major}
            </span>
            <span className="text-xs font-medium text-slate-300 mt-1">
              {academicFoundation.institution} &bull; <span className="text-emerald-400 font-semibold">Fresh Graduate (Baru Lulus)</span>
            </span>
          </div>
        </div>

        {/* Graduation moment */}
        <figure className="relative mx-auto w-full max-w-3xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-lg opacity-60 pointer-events-none" />

          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#090e21] shadow-2xl shadow-cyan-950/40">
            <img
              src={graduationPhoto}
              alt="Momen wisuda Alif Auliya' Haikal pada Wisuda Ke-67 Universitas Darul 'Ulum Jombang, 10 Oktober 2026"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050713]/25 via-transparent to-transparent pointer-events-none" />
          </div>

          <figcaption className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
            <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Momen Wisuda Ke-67 &bull; Universitas Darul &lsquo;Ulum Jombang &bull; 10 Oktober 2026</span>
          </figcaption>
        </figure>

        {/* Vertical Timeline */}
        <div className="relative pt-6">
          
          {/* Central Glowing Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500/20 via-cyan-500 to-blue-500/20" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/20 via-cyan-500 to-blue-500/20" />

          <div className="space-y-12">
            {academicFoundation.timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const IconComp = getYearIcon(index);

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Timeline Node Point (Center on desktop, left on mobile) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#070b1a] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Content Card (Takes half the width) */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className="relative rounded-2xl bg-[#090e21]/85 border border-white/10 p-6 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-300 group">
                      
                      {/* Year & Icon Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 tracking-wider uppercase">
                          <IconComp className="w-3.5 h-3.5" />
                          <span>{item.year}</span>
                        </div>
                        {index === 3 && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-semibold text-emerald-400">
                            <CheckCircle2 className="w-3 h-3" />
                            Lulus S1
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                        {item.subtitle}
                      </p>

                      {/* Key Concepts */}
                      <div className="mt-4 space-y-1">
                        <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                          KEY CONCEPTS
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {item.concepts}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mt-3 space-y-1.5">
                        <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                          TECH STACK
                        </span>
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {item.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Major Project */}
                      <div className="mt-4 pt-3 border-t border-white/5 space-y-1">
                        <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                          MAJOR PROJECT
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed italic">
                          {item.project}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
