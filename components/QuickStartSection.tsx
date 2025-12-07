import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, CheckCircle2, Rocket, ArrowRight, LucideIcon, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoading } from '../contexts/LoadingContext';

interface Step {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  mainText: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  image: string;
}

export const QuickStartSection = () => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigateWithLoading(() => navigate('/vorqualifizierung'), 1500);
  };

  const steps: Step[] = [
    {
      id: 'step-1',
      number: '1',
      title: 'Unverbindliches Erstgespräch',
      subtitle: 'Start',
      mainText: 'Du machst den Test ✨',
      description: 'In 60 Sekunden wissen Sie, ob unser Service zu Ihnen passt.',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 'step-2',
      number: '2',
      title: 'Individuelles Angebot',
      subtitle: 'Angebot',
      mainText: 'Ihr maßgeschneidertes Paket',
      description: 'Basierend auf Ihren Bedürfnissen erstellen wir ein individuelles Angebot für Sie.',
      icon: CheckCircle2,
      color: 'text-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 'step-3',
      number: '3',
      title: 'Schnelle Umsetzung',
      subtitle: 'Freiheit',
      mainText: 'Ihr neues, geordnetes Backoffice',
      description: 'Innerhalb von 7 Tagen sind Sie startklar. Sie haben sofort Klarheit und Ordnung.',
      icon: Rocket,
      color: 'text-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            In 3 Schritten von der{' '}
            <span className="relative">
              Unordnung
              <span className="absolute bottom-0 left-0 right-0 h-3 bg-blue-600/20 -z-10"></span>
            </span>
            {' '}zur{' '}
            <span className="relative text-blue-600">
              Freiheit
              <span className="absolute bottom-0 left-0 right-0 h-3 bg-blue-600/20 -z-10"></span>
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-slate-500 font-medium uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            IHR BACKOFFICE-FAHRPLAN
          </motion.p>
          <motion.p 
            className="text-base md:text-lg text-slate-600 leading-relaxed mb-20 lg:mb-28"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Schnell, einfach und ohne Risiko. Innerhalb von 7 Tagen haben Sie Klarheit und Ordnung.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <motion.div
                key={step.id}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Large step number above card */}
                <div className="absolute -top-8 lg:-top-10 left-1/2 -translate-x-1/2 z-20">
                  <span className="text-5xl lg:text-6xl font-extrabold text-blue-600/70 leading-none drop-shadow-md">
                    {step.number}
                  </span>
                </div>
                
                <div className="relative bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-200/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-blue-300/60 transition-all duration-300 h-full overflow-hidden">
                  {/* Image */}
                  <div className="h-48 relative overflow-hidden bg-slate-100">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.style.background = `linear-gradient(to br, ${step.bgColor})`;
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  
                  <div className="p-6 lg:p-8">
                    {/* Subtitle with icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm lg:text-base font-bold text-blue-700 uppercase tracking-wider">
                          SCHRITT {step.number} · {step.subtitle}
                        </span>
                      </div>
                      <div className={`w-8 h-8 bg-gradient-to-br ${step.bgColor} rounded-lg flex items-center justify-center border border-slate-200/50`}>
                        <Icon className={`h-4 w-4 ${step.color}`} />
                      </div>
                    </div>
                    
                    {/* Main text */}
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 leading-tight">
                      {step.mainText}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    {/* Call to action */}
                    {isLast ? (
                      <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>ZIEL ERREICHT ✨</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                        <span>NÄCHSTER SCHRITT</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>
                  
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/10 group-hover:via-blue-50/5 group-hover:to-blue-50/10 transition-all duration-300 rounded-3xl pointer-events-none"></div>
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
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          <div>
            <button
              onClick={handleClick}
              disabled={isLoading}
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-800 hover:via-blue-700 hover:to-indigo-800 shadow-[0_4px_20px_-2px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_-4px_rgba(37,99,235,0.4)] transition-all duration-300 border border-blue-500/20 relative overflow-hidden disabled:opacity-75 disabled:cursor-wait"
              aria-label="Jetzt Erstgespräch buchen"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center gap-3">
                <Calendar className="h-6 w-6" />
                Jetzt Erstgespräch buchen
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Keine Verpflichtung • Unverbindlich • Kostenlos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

