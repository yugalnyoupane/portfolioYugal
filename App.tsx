
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        <section id="about" className="py-24 bg-white overflow-hidden relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black font-heading mb-8 text-slate-900 leading-tight">
                  Driven by data, <br/>Defined by <span className="text-blue-600 underline decoration-slate-200">code</span>.
                </h2>
                <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                  <p>
                    I'm Yugal Nyoupane, a full-stack developer from Nepal who finds beauty in logical structures and neural architectures. 
                  </p>
                  <p>
                    My passion lies in bridging the gap between sophisticated machine learning models and seamless user interfaces. I believe technology should be powerful yet invisible.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 font-heading">3+</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Years Coding</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 font-heading">12+</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Projects</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 space-y-8">
                  <blockquote className="text-2xl font-medium text-slate-900 italic font-heading">
                    "Artificial intelligence is not just a tool; it's a new medium for creativity and problem-solving."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-900" />
                    <div>
                      <p className="text-slate-900 font-bold">Yugal Nyoupane</p>
                      <p className="text-slate-400 text-sm"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Journey />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-16 bg-white border-t border-slate-50 text-center">
        <div className="container mx-auto px-6">
          <h4 className="text-xl font-black font-heading text-slate-900 mb-6">YN<span className="text-blue-600">.</span></h4>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Designed and developed with precision from the heart of Nepal. <br/>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;
