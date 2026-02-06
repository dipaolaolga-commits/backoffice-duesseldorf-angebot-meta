import { X, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const classicItems = [
  'Belege im Schuhkarton sammeln',
  'Steuerberater sortiert für 150€+/Std.',
  'Keine aktuelle Übersicht',
  'Hohe Nachzahlungen möglich',
];

const backofficeItems = [
  'Belege per Klick hochladen',
  'Wir erledigen alles pauschal ab 105€',
  'Monatliche Finanz-Updates',
  'Planbare Kosten & Ruhe',
];

export const ClassicVsBackofficeSection = () => {
  const premiumEase = [0.25, 0.1, 0.25, 1];

  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -ml-64 -mt-64" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl -mr-64 -mb-64" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: premiumEase }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
            <span className="whitespace-nowrap">Warum Experten-Preise zahlen,</span>
            <br />
            wenn es clever geht?
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
            Der direkte Vergleich: So sparen Sie jeden Monat bares Geld.
          </p>
        </motion.div>

        {/* Two-Column Comparison */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Der klassische Weg (Teuer) */}
          <motion.div
            className="rounded-2xl border border-red-900/50 bg-slate-800/50 backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: premiumEase }}
          >
            <div className="p-6 sm:p-8 border-b border-slate-700/50 bg-red-950/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Der klassische Weg <span className="text-red-400 font-semibold">(Teuer)</span>
                </h3>
              </div>
            </div>
            <ul className="p-6 sm:p-8 space-y-4">
              {classicItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-slate-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + (index * 0.06), ease: premiumEase }}
                >
                  <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Der Backoffice-Weg (Smart) – animierter grüner Rahmen */}
          <motion.div
            className="rounded-2xl p-[2px] overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
            style={{
              background: 'linear-gradient(90deg, #059669, #10b981, #34d399, #10b981, #059669)',
              backgroundSize: '200% 200%',
              animation: 'emeraldBorderGradient 4s ease infinite',
            }}
          >
            <div className="rounded-[14px] bg-slate-800/50 backdrop-blur-sm overflow-hidden border border-slate-700/30">
              <div className="p-6 sm:p-8 border-b border-slate-700/50 bg-emerald-950/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Der Backoffice-Weg <span className="text-emerald-400 font-semibold">(Smart)</span>
                </h3>
              </div>
            </div>
            <ul className="p-6 sm:p-8 space-y-4">
              {backofficeItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-slate-300"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + (index * 0.06), ease: premiumEase }}
                >
                  <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
