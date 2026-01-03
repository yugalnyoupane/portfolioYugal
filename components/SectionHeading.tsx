
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">{subtitle}</p>}
      <div className={`mt-6 h-1 w-12 bg-slate-900 rounded-full ${center ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
