import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, CheckCircle2, Rocket, ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoading } from '../contexts/LoadingContext';
import { images } from '../config/images';

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const QuickStartSection = () => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();
  const premiumEase = [0.25, 0.1, 0.25, 1];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigateWithLoading(() => navigate('/anfrage'), 1500);
  };

  const steps: Step[] = [
    {
      id: 'step-1',
      number: '1',
      title: 'Kurzer Check',
      description: 'In 60 Sekunden wissen Sie, ob unser Service zu Ihnen passt.',
      icon: Calendar,
      image: images.quickStart.step1,
    },
    {
      id: 'step-2',
      number: '2',
      title: 'Angebot',
      description: 'Sie erhalten ein maßgeschneidertes, transparentes Angebot.',
      icon: CheckCircle2,
      image: images.quickStart.step2,
    },
    {
      id: 'step-3',
      number: '3',
      title: 'Start',
      description: 'Innerhalb von 7 Tagen sind Sie startklar mit Klarheit und Ordnung.',
      icon: Rocket,
      image: images.quickStart.step3,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: premiumEase }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
            Schnellstart
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            In 3 Schritten zur 
            <span className="text-blue-600"> Freiheit</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Schnell, einfach und ohne Risiko. Starten Sie noch heute.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + (index * 0.1), ease: premiumEase }}
                className="relative group"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-[2px] z-0">
                    <div className="h-full bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />
                  </div>
                )}
                
                <div className="relative bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-500 h-full overflow-hidden">
                  {/* Number badge */}
                  <div className="absolute top-5 left-5 z-10 w-12 h-12 bg-slate-900 rounded-xl text-base font-bold text-white flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Image */}
                  <div className="h-64 lg:h-72 relative overflow-hidden bg-slate-100">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: premiumEase }}
        >
          <motion.button
            onClick={handleClick}
            disabled={isLoading}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-75"
          >
            Jetzt starten
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          <p className="mt-4 text-sm text-slate-500">
            Unverbindlich • Kostenlos • In 60 Sekunden
          </p>
        </motion.div>
      </div>
    </section>
  );
};
