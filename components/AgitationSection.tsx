import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface Consequence {
  id: string;
  text: string;
}

export const AgitationSection = () => {
  const premiumEase = [0.25, 0.1, 0.25, 1];
  
  const consequences: Consequence[] = [
    { id: 'consequence-1', text: "Fehlende Struktur führt zu verpassten Entscheidungen." },
    { id: 'consequence-2', text: "Unklare Rücklagen sorgen für finanzielle Engpässe." },
    { id: 'consequence-3', text: "Manuelle Prozesse kosten jeden Monat wertvolle Stunden." },
    { id: 'consequence-4', text: "Wenn etwas beim Steuerberater fehlt, wird es teuer." },
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl -ml-64 -mb-64"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.span 
          className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: premiumEase }}
        >
          Die Konsequenzen
        </motion.span>
        
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
        >
          Chaos, unnötige Kosten 
          <span className="block text-red-400">und das Gefühl, hinterherzulaufen.</span>
        </motion.h2>
        
        {/* Consequences List */}
        <div className="space-y-3 mb-12 mt-10 text-left max-w-2xl mx-auto">
          {consequences.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.08), ease: premiumEase }}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-red-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: premiumEase }}
          className="inline-block"
        >
          <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50">
            <p className="text-lg text-slate-300 leading-relaxed">
              Sie arbeiten hart – aber ohne ein sauberes Backoffice arbeiten Sie 
              <span className="text-red-400 font-semibold"> doppelt hart</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
