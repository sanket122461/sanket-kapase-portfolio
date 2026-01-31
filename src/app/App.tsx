import { useState, useEffect } from 'react';
import { Hero } from '@/app/components/portfolio/Hero';
import { About } from '@/app/components/portfolio/About';
import { Skills } from '@/app/components/portfolio/Skills';
import { Projects } from '@/app/components/portfolio/Projects';
import { Experience } from '@/app/components/portfolio/Experience';
import { Contact } from '@/app/components/portfolio/Contact';
import { Navigation } from '@/app/components/portfolio/Navigation';
import { Cursor } from '@/app/components/portfolio/Cursor';
import { ParticlesBackground } from '@/app/components/portfolio/ParticlesBackground';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-cyan-500 border-b-transparent rounded-full animate-spin animate-reverse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ParticlesBackground />
      <Cursor />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="relative z-10 border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Portfolio. Built with passion & code.</p>
        </div>
      </footer>
    </div>
  );
}
