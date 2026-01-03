
import React, { useState, useEffect } from 'react';
import { NAVIGATION } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-slate-100' : 'py-8 bg-transparent'}`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-black font-heading tracking-tighter text-slate-900">
          YN<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAVIGATION.map(item => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-slate-500 hover:text-slate-900 text-[13px] font-bold uppercase tracking-widest transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-slate-900 text-white text-[13px] font-bold rounded-full hover:bg-slate-800 transition-all uppercase tracking-widest"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 space-y-6 shadow-xl animate-in slide-in-from-top duration-300">
          {NAVIGATION.map(item => (
            <a 
              key={item.name} 
              href={item.href} 
              className="block text-slate-900 text-lg font-bold font-heading"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="block w-full text-center py-4 bg-slate-900 text-white font-bold rounded-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
