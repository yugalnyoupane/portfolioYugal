
import React from 'react';
import { SKILLS } from '../constants';
import SectionHeading from './SectionHeading';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Technical Skills"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name} 
              className="p-8 bg-[#fafafa] border border-slate-100 rounded-3xl group hover:border-slate-200 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-900 font-bold font-heading">{skill.name}</span>
                <span className="text-xs font-bold text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-slate-900 rounded-full transition-all duration-1000 group-hover:bg-blue-600"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
