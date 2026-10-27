import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  // Tautan WhatsApp dengan pesan pembuka otomatis
  const waChatLink = `${personal.socials.whatsapp}?text=${encodeURIComponent(
    'Halo Alif, saya melihat portofolio Anda dan ingin berdiskusi.'
  )}`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // idle | sending | success | error
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Tanpa access key, jangan pernah tampilkan "berhasil" palsu
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error');
      setErrorMsg(
        'Form kontak belum dikonfigurasi. Sementara itu, silakan hubungi saya lewat email atau WhatsApp di samping.'
      );
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Pesan baru dari ${formData.name}`,
          message: formData.message
        })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Pesan gagal dikirim. Silakan coba lagi.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Terjadi kesalahan jaringan. Silakan coba lagi.');
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050713]">
      
      {/* Background ambient glow */}
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header with Horizontal Lines */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full flex items-center justify-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-cyan-500/40 max-w-xs" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white px-2">
              Contact <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-500/20 to-cyan-500/40 max-w-xs" />
          </div>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Have a project in mind or looking for a Backend Engineer? My inbox is always open.
          </p>
        </div>

        {/* Content: Left Info & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Let's work together */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let's work together
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Saya selalu terbuka untuk peluang baru di bidang <strong className="text-cyan-300">Backend Development</strong>, pengelolaan dan optimasi <strong className="text-cyan-300">Database SQL</strong>, maupun kolaborasi proyek sistem informasi. Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#090e21] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    EMAIL
                  </span>
                  <a href={`mailto:${personal.email}`} className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 transition-colors">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#090e21] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    LOCATION
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {personal.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#090e21] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    WHATSAPP
                  </span>
                  <a
                    href={waChatLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm font-medium text-white hover:text-emerald-300 transition-colors"
                  >
                    +62 895-0264-6082
                  </a>
                </div>
              </div>
            </div>

            {/* Find Me On Socials */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                FIND ME ON
              </span>
              <div className="flex items-center gap-3">
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
                      className="w-10 h-10 rounded-xl bg-[#090e21] border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:scale-105 transition-all shadow-md"
                    >
                      <IconComp className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Available For Work Pill Card (From Video) */}
            <div className="p-5 rounded-2xl bg-[#090e21]/90 border border-emerald-500/30 shadow-xl backdrop-blur-md space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for work</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {personal.availabilitySub}
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#090e21]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/20">
              
              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 animate-bounce">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Pesan Berhasil Terkirim!</h4>
                  <p className="text-xs text-slate-300 max-w-sm">
                    Terima kasih telah menghubungi. Pesan Anda sudah masuk ke email saya dan akan dibalas sesegera mungkin.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 text-xs font-semibold transition-colors"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot anti-spam (disembunyikan dari pengunjung) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 tracking-wider uppercase block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#050814] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 tracking-wider uppercase block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="hello@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#050814] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 tracking-wider uppercase block">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project inquiry / Job offer..."
                      className="w-full px-4 py-3 rounded-xl bg-[#050814] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 tracking-wider uppercase block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-[#050814] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 leading-relaxed">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-3 pt-1">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      atau
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <a
                    href={waChatLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/50 text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Chat via WhatsApp</span>
                  </a>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
