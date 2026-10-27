import React, { useState } from 'react';
import { Download, Code2, Database, Award, GraduationCap, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpeg';

export default function About() {
  const { personal, stats } = portfolioData;
  const [cvMissing, setCvMissing] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Pastikan file CV benar-benar ada & berupa PDF sebelum mengunduh
  const handleDownloadCv = async (e) => {
    e.preventDefault();

    if (!personal.cvUrl) {
      scrollTo('contact');
      return;
    }

    try {
      const res = await fetch(personal.cvUrl, { method: 'HEAD' });
      const contentType = res.headers.get('content-type') || '';

      if (!res.ok || !contentType.includes('pdf')) {
        setCvMissing(true);
        return;
      }

      setCvMissing(false);
      const link = document.createElement('a');
      link.href = personal.cvUrl;
      link.download = 'CV-Alif-Auliya-Haikal.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      setCvMissing(true);
    }
  };

  const getIcon = (name) => {
    switch (name) {
      case 'Database': return Database;
      case 'Award': return Award;
      case 'GraduationCap': return GraduationCap;
      default: return Code2;
    }
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050713]">
      
      <div className="w-full max-w-6xl mx-auto space-y-16">
        
        {/* Section Header with Horizontal Lines */}
        <div className="flex flex-col items-center justify-center text-center relative">
          <div className="w-full flex items-center justify-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-cyan-500/40 max-w-xs" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white px-2">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-500/20 to-cyan-500/40 max-w-xs" />
          </div>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Transforming raw data into robust backend systems
          </p>
        </div>

        {/* Main Content: Bio + Glowing Circular Avatar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Bio Text */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="space-y-1">
              <span className="text-sm font-semibold text-cyan-400 tracking-wide uppercase">
                Hello, I'm
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {personal.name}
              </h3>
            </div>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Saya adalah lulusan baru S1 dari <strong className="text-white">Universitas Darul 'Ulum Jombang (UNDAR)</strong> dengan passion mendalam di bidang <strong className="text-cyan-300">Backend Development</strong> dan spesialisasi arsitektur <strong className="text-cyan-300">Database Relasional (SQL)</strong>.
              </p>
              <p>
                Bagi saya, database bukan sekadar tempat penyimpanan, melainkan pondasi utama performa seluruh aplikasi. Saya terbiasa merancang skema database yang bersih ternormalisasi (1NF hingga 3NF), menyusun query kompleks terindeks yang efisien, mengimplementasikan stored procedures/triggers, serta memastikan konsistensi data melalui transaksi berprinsip ACID.
              </p>
              <p>
                Dengan bekal pendidikan akademik dan eksplorasi intensif di ekosistem backend seperti <span className="text-white font-medium">PostgreSQL, MySQL, SQL Server, Node.js, dan Express</span>, saya siap berkontribusi secara profesional untuk mengembangkan sistem backend yang tangguh dan skalabel.
              </p>
            </div>

            {/* Buttons: Download CV & View Projects */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={personal.cvUrl || '#contact'}
                download={personal.cvUrl ? "CV-Alif-Auliya-Haikal.pdf" : undefined}
                onClick={handleDownloadCv}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <button
                onClick={() => scrollTo('portfolio')}
                className="px-6 py-3 rounded-xl bg-[#0b1022] border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>View Projects</span>
              </button>
            </div>

            {cvMissing && (
              <p className="text-xs text-amber-300/90 leading-relaxed">
                File CV belum diunggah. Sementara itu, silakan hubungi saya lewat{' '}
                <a href={`mailto:${personal.email}`} className="underline hover:text-amber-200">
                  {personal.email}
                </a>.
              </p>
            )}
          </div>

          {/* Right: Circular Glowing Avatar Frame */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              
              {/* Outer Neon Glow Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition duration-500" />
              
              {/* Circular Border Wrapper */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-1.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-2xl">
                <div className="relative w-full h-full rounded-full bg-[#090e1f] overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Foto profil Alif Auliya' Haikal"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Theme tint + inner ring for depth */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#050713]/50 via-transparent to-cyan-500/10 pointer-events-none" />
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15 pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Stats Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {stats.map((item) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={item.id}
                className="relative rounded-2xl bg-[#090e21]/80 border border-white/10 p-6 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/30 transition-all duration-300 group flex items-start justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-300 tracking-wider uppercase pt-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.subtitle}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {item.value}
                  </span>
                  <div className="text-slate-500 flex justify-end pt-1">
                    <ArrowUpRight className="w-4 h-4 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
