import { motion } from 'framer-motion';
import { MessageSquare, FileText, CheckCircle2, TrendingUp } from 'lucide-react';

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const ProcessSection = () => {
  const steps: ProcessStep[] = [
    {
      id: 'process-1',
      number: '01',
      title: 'Erstgespräch & Analyse',
      description: 'Wir lernen Sie und Ihr Unternehmen kennen. Gemeinsam analysieren wir Ihre aktuelle Situation und identifizieren Optimierungspotenziale.',
      icon: MessageSquare,
    },
    {
      id: 'process-2',
      number: '02',
      title: 'Individuelles Angebot',
      description: 'Basierend auf Ihren Bedürfnissen erstellen wir ein maßgeschneidertes Paket. Transparent, fair und ohne versteckte Kosten.',
      icon: FileText,
    },
    {
      id: 'process-3',
      number: '03',
      title: 'Schnelle Einrichtung',
      description: 'Innerhalb von 7 Tagen sind Sie startklar. Wir richten alles ein, verbinden uns mit Ihrem Steuerberater und übernehmen sofort.',
      icon: CheckCircle2,
    },
    {
      id: 'process-4',
      number: '04',
      title: 'Laufende Betreuung',
      description: 'Monat für Monat sorgen wir für Ordnung, Klarheit und Planbarkeit. Sie haben immer den Überblick und können sich auf Ihr Geschäft konzentrieren.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 relative overflow-hidden">
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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            So funktioniert die Zusammenarbeit
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Transparent, einfach und zuverlässig. Von der ersten Kontaktaufnahme bis zur laufenden Betreuung.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
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
                {/* Connecting line (only between steps) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 via-blue-400 to-transparent z-0">
                    <div className="h-full w-full bg-gradient-to-r from-blue-500 to-indigo-500 origin-left" />
                  </div>
                )}
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-200/60 hover:border-blue-300 transition-all duration-500 h-full">
                  {/* Step number badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-blue-500/80 via-indigo-500/80 to-blue-600/80 rounded-xl flex items-center justify-center border border-white/80 shadow-md">
                    <span className="text-sm font-semibold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 border border-blue-200/50 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                    <Icon className="h-8 w-8 text-blue-700" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/20 group-hover:via-blue-50/10 group-hover:to-blue-50/20 transition-all duration-300 rounded-3xl pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

