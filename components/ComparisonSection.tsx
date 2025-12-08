import { X, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface ComparisonItem {
  id: string;
  feature: string;
  without: boolean | string;
  withUs: boolean | string;
}

export const ComparisonSection = () => {
  const premiumEase = [0.25, 0.1, 0.25, 1];
  
  const comparisons: ComparisonItem[] = [
    { id: 'comp-1', feature: 'Strukturierte Belegorganisation', without: false, withUs: true },
    { id: 'comp-2', feature: 'Monatliche Gewinnübersicht', without: false, withUs: true },
    { id: 'comp-3', feature: 'Pünktliche Lohnabrechnungen', without: 'Oft verspätet', withUs: 'Immer pünktlich' },
    { id: 'comp-4', feature: 'Zeit für Ihr Kerngeschäft', without: 'Wenig', withUs: 'Mehr' },
    { id: 'comp-5', feature: 'Klarheit über Rücklagen', without: false, withUs: true },
    { id: 'comp-6', feature: 'Stress durch Papierkram', without: 'Hoch', withUs: 'Keiner' },
  ];

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
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -ml-64 -mt-64"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl -mr-64 -mb-64"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            Mit uns vs. Ohne uns
          </h2>
          
          <p className="text-xl text-slate-400 leading-relaxed">
            Sehen Sie den Unterschied auf einen Blick
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
        >
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-6 bg-slate-800/80 border-b border-slate-700/50">
            <div className="text-sm sm:text-base font-semibold text-slate-400">Kriterium</div>
            <div className="text-center text-sm sm:text-base font-semibold text-red-400">Ohne uns</div>
            <div className="text-center text-sm sm:text-base font-semibold text-emerald-400">Mit uns</div>
          </div>

          {/* Comparison Items */}
          <div className="divide-y divide-slate-700/50">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.id}
                className="grid grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-6 hover:bg-slate-800/30 transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + (index * 0.04), ease: premiumEase }}
              >
                <div className="flex items-center min-w-0">
                  <span className="text-slate-300 text-sm sm:text-base font-medium leading-snug break-words">{item.feature}</span>
                </div>
                
                <div className="flex items-center justify-center min-w-0">
                  {typeof item.without === 'boolean' ? (
                    item.without ? (
                      <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-5 w-5 text-emerald-400" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <X className="h-5 w-5 text-red-400" />
                      </div>
                    )
                  ) : (
                    <span className="text-red-300 text-xs sm:text-sm font-medium text-center leading-tight break-words">{item.without}</span>
                  )}
                </div>
                
                <div className="flex items-center justify-center min-w-0">
                  {typeof item.withUs === 'boolean' ? (
                    item.withUs ? (
                      <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-5 w-5 text-emerald-400" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <X className="h-5 w-5 text-red-400" />
                      </div>
                    )
                  ) : (
                    <span className="text-emerald-300 text-xs sm:text-sm font-medium text-center leading-tight break-words">{item.withUs}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
