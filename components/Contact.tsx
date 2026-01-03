
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
          center
        />

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 font-heading">Let's discuss your next project.</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a specific proposal or just want to chat, feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email me at</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white font-bold hover:text-blue-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Your Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Your Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Subject</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="How can I help you?"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'idle' && (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
                {status === 'sending' && (
                  <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                )}
                {status === 'sent' && (
                  <>Sent Successfully! <CheckCircle2 className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
