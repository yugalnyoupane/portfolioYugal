
import React from 'react';
import { EXPERIENCES } from '../constants';
import SectionHeading from './SectionHeading';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Work Journey" 
          subtitle="A timeline of my professional experience in the tech industry."
        />

        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.company} className="relative pl-8 pb-12 last:pb-0 group">
              {/* Timeline Line */}
              {index !== EXPERIENCES.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-slate-800 group-hover:bg-blue-500/50 transition-colors" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
              </div>

              <div className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 hover:border-slate-700 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-blue-400 font-medium">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <span className="px-4 py-1 bg-slate-800 text-slate-400 text-sm font-bold rounded-full border border-slate-700">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
