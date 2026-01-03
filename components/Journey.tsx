
import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';
import SectionHeading from './SectionHeading';
import { Briefcase, GraduationCap } from 'lucide-react';

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="My Journey"
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div className="space-y-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">Work Experience</h3>
            </div>
            
            <div className="space-y-10">
              {EXPERIENCES.map((exp) => (
                <div key={exp.company} className="relative pl-6 border-l-2 border-slate-100 hover:border-blue-500 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-slate-100" />
                  <div className="mb-1 flex flex-wrap justify-between items-center gap-2">
                    <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                    <span className="text-sm font-bold text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-500 text-sm leading-relaxed flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">Education</h3>
            </div>
            
            <div className="space-y-10">
              {EDUCATION.map((edu) => (
                <div key={edu.institution} className="relative pl-6 border-l-2 border-slate-100 hover:border-emerald-500 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-slate-100" />
                  <div className="mb-1 flex flex-wrap justify-between items-center gap-2">
                    <h4 className="text-xl font-bold text-slate-900">{edu.degree}</h4>
                    <span className="text-sm font-bold text-slate-400">{edu.period}</span>
                  </div>
                  <p className="text-emerald-600 font-medium mb-4">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
