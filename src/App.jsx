import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AcademicTimeline from './components/AcademicTimeline';
import PortfolioShowcase from './components/PortfolioShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050713] text-slate-100 bg-grid-pattern selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Ambient background glow elements */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan-900/10 via-blue-900/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <AcademicTimeline />
        <PortfolioShowcase />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
