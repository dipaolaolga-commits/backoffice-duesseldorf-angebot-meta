import { X, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const classicPoints = [
  'Hohe Stundensätze (150€+)',
  'Zahlen für Sortieren',
  'Warten auf Rückmeldung',
  'Angst vor Nachzahlung',
];

const backofficePoints = [
  'Faire Pauschale (ab 105€)',
  'Digital & Sofort',
  'Monatliche Auswertungen',
  'Lohn inklusive',
];

export const ComparisonSection = () => {
  const premiumEase = [0.25, 0.1, 0.25, 1];

  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -ml-64 -mt-64"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl -mr-64 -mb-64"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: premiumEase }}
        >
          <span className="inline-block text-sm uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
            Vergleich
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Klassisch beim Steuerberater vs. Smart mit Backoffice Düsseldorf
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Der direkte Vergleich – so sparen Sie Zeit und Geld.
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
        >
          {/* Header Row: 2 Spalten, linksbündig wie die Zeilen darunter */}
          <div className="grid grid-cols-2 gap-4 p-4 sm:p-6 bg-slate-800/80 border-b border-slate-700/50">
            <div className="flex items-center gap-3 min-w-0 text-sm sm:text-base font-semibold text-red-400">
              <X className="h-5 w-5 flex-shrink-0" />
              Klassisch beim Steuerberater
            </div>
            <div className="flex items-center gap-3 min-w-0 text-sm sm:text-base font-semibold text-emerald-400">
              <Check className="h-5 w-5 flex-shrink-0" />
              Smart mit Backoffice Düsseldorf
            </div>
          </div>

          <div className="divide-y divide-slate-700/50">
            {classicPoints.map((_, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-2 gap-4 p-4 sm:p-6 hover:bg-slate-800/30 transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + (index * 0.04), ease: premiumEase }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <X className="h-4 w-4 text-red-400" />
                  </div>
                  <span className="text-red-200 text-sm sm:text-base font-medium">{classicPoints[index]}</span>
                </div>
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-emerald-400" />
                  </div>
                  <span className="text-emerald-200 text-sm sm:text-base font-medium">{backofficePoints[index]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
