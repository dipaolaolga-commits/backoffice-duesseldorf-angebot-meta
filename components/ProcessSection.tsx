import { motion } from 'framer-motion';
import { MessageSquare, FileText, CheckCircle2, TrendingUp, LucideIcon } from 'lucide-react';

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ProcessSection = () => {
  const premiumEase = [0.25, 0.1, 0.25, 1];
  
  const steps: ProcessStep[] = [
    {
      id: 'process-1',
      number: '01',
      title: 'Erstgespräch',
      description: 'Wir lernen Sie und Ihr Unternehmen kennen und analysieren Ihre aktuelle Situation.',
      icon: MessageSquare,
    },
    {
      id: 'process-2',
      number: '02',
      title: 'Angebot',
      description: 'Nach dem Erstgespräch wissen wir genau, welche Leistungen Sie benötigen und erstellen Ihnen daraufhin ein konkretes Angebot, das Ihren tatsächlichen Bedarf abbildet.',
      icon: FileText,
    },
    {
      id: 'process-3',
      number: '03',
      title: 'Start',
      description: 'Sobald wir alle erforderlichen Unterlagen von Ihnen erhalten haben, können wir sofort starten.',
      icon: CheckCircle2,
    },
    {
      id: 'process-4',
      number: '04',
      title: 'Betreuung',
      description: 'Monat für Monat sorgen wir für Ordnung, Klarheit und Planbarkeit.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: premiumEase }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
            Unser Prozess
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            So funktioniert die Zusammenarbeit
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Von der ersten Kontaktaufnahme bis zur laufenden Betreuung – 
            transparent, einfach und zuverlässig.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-slate-100 z-0">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-slate-300 to-transparent" />
                  </div>
                )}
                
                <div className="relative bg-slate-50/80 hover:bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-1 px-2.5 py-1 bg-slate-900 rounded-lg text-xs font-bold text-white">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
