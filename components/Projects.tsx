
import React from 'react';
import { PROJECTS } from '../constants';
import SectionHeading from './SectionHeading';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#fdfdfd]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Recent Projects" 
        />

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500 flex flex-col md:flex-row h-full"
            >
              <div className="md:w-1/2 relative overflow-hidden h-64 md:h-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  {project.link && (
                    <a href={project.link} className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors" target="_blank">
                      Live Preview <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-slate-600 transition-colors">
                      Code <Github className="ml-2 w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
