import { Smartphone, Zap, PiggyBank, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Step {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  icon: LucideIcon;
}

export const SolutionSection = () => {
  const premiumEase = [0.25, 0.1, 0.25, 1];

  const steps: Step[] = [
    {
      id: 'step-1',
      title: 'Digitalisieren',
      subtitle: 'App statt Schuhkarton',
      text: 'Sie laden Belege einfach per Handy oder PC hoch. Keine Sortierarbeit mehr für Sie.',
      icon: Smartphone,
    },
    {
      id: 'step-2',
      title: 'Wir übernehmen',
      subtitle: 'Der Autopilot',
      text: 'Wir prüfen, sortieren und verbuchen alles vor. Inklusive Lohnabrechnung und Meldungen.',
      icon: Zap,
    },
    {
      id: 'step-3',
      title: 'Sie sparen',
      subtitle: 'Doppelter Gewinn',
      text: 'Ihr Steuerberater erhält perfekte Daten und hat kaum Aufwand. Ihre Berater-Rechnung sinkt massiv – und Sie haben 15h+ mehr Zeit im Monat.',
      icon: PiggyBank,
    },
  ];

  return (
    <section id="solution" className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: premiumEase }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
            Die Lösung – Wie es funktioniert
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Mehr Zeit für Ihr Geschäft statt Papierkram am Wochenende.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 + (index * 0.1), ease: premiumEase }}
                className="relative bg-white rounded-2xl p-7 lg:p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100/50 mb-6">
                  <Icon size={26} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-3">
                  {step.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.blockquote
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: premiumEase }}
        >
          <p className="text-xl lg:text-2xl font-bold text-slate-900 leading-snug">
            „Trennen Sie Fleißarbeit von Steuerberatung. Das spart Geld und Nerven.“
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};
