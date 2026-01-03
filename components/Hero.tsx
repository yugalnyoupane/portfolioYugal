
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail, ArrowRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-2">
            <MapPin className="w-3 h-3 mr-2 text-slate-400" /> {PERSONAL_INFO.location}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black font-heading tracking-tight text-slate-900 leading-[1.1]">
            Hey, I'm <span className="text-blue-600">{PERSONAL_INFO.name}</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-xl font-light leading-relaxed">
            I'm a <span className="text-slate-900 font-medium">{PERSONAL_INFO.title}</span>. I build elegant software solutions and explore the depths of machine learning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-slate-200"
            >
              Recent Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-900 rounded-full font-bold transition-all"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
            <a href={PERSONAL_INFO.github} className="text-slate-400 hover:text-slate-900 transition-colors" target="_blank">
              <Github className="w-6 h-6" />
            </a>
            <a href={PERSONAL_INFO.linkedin} className="text-slate-400 hover:text-slate-900 transition-colors" target="_blank">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-slate-900 transition-colors" target="_blank">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-100 rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform -z-10" />
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] bg-white border-[12px] border-white shadow-2xl overflow-hidden animate-in zoom-in duration-700">
              <img 
                src={PERSONAL_INFO.photo} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
