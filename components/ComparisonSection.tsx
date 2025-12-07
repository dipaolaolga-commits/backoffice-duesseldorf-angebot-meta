import { X, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface ComparisonItem {
  id: string;
  feature: string;
  without: boolean | string;
  withUs: boolean | string;
}

export const ComparisonSection = () => {
  const comparisons: ComparisonItem[] = [
    {
      id: 'comp-1',
      feature: 'Strukturierte Belegorganisation',
      without: false,
      withUs: true,
    },
    {
      id: 'comp-2',
      feature: 'Monatliche Gewinnübersicht',
      without: false,
      withUs: true,
    },
    {
      id: 'comp-3',
      feature: 'Pünktliche Lohnabrechnungen',
      without: 'Oft verspätet',
      withUs: 'Immer pünktlich',
    },
    {
      id: 'comp-4',
      feature: 'Zeit für Ihr Kerngeschäft',
      without: 'Wenig Zeit',
      withUs: 'Mehr Zeit',
    },
    {
      id: 'comp-5',
      feature: 'Klarheit über Rücklagen',
      without: false,
      withUs: true,
    },
    {
      id: 'comp-6',
      feature: 'Stress durch Papierkram',
      without: 'Hoch',
      withUs: 'Kein Stress',
    },
    {
      id: 'comp-7',
      feature: 'Fehlerrisiko',
      without: 'Hoch',
      withUs: 'Minimal',
    },
    {
      id: 'comp-8',
      feature: 'Kostenkontrolle',
      without: 'Unklar',
      withUs: 'Transparent',
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Durchscheinende Hintergrundstruktur */}
      <div className="absolute inset-0 z-0 opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}></div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl -ml-48 -mt-48 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl -mr-48 -mb-48 z-0"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Mit uns vs. Ohne uns
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Sehen Sie den Unterschied auf einen Blick
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Header */}
          <div className="grid md:grid-cols-3 gap-4 p-6 bg-white/5 border-b border-white/10">
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold text-slate-300">Kriterium</h3>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-red-400">Ohne uns</h3>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-emerald-400">Mit uns</h3>
            </div>
          </div>

          {/* Comparison Items */}
          <div className="divide-y divide-white/10">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.id}
                className="grid md:grid-cols-3 gap-4 p-6 hover:bg-white/5 transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.05), ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="md:col-span-1 flex items-center">
                  <span className="text-slate-200 font-medium">{item.feature}</span>
                </div>
                
                <div className="flex items-center justify-center">
                  {typeof item.without === 'boolean' ? (
                    item.without ? (
                      <Check className="h-6 w-6 text-emerald-400" />
                    ) : (
                      <X className="h-6 w-6 text-red-400" />
                    )
                  ) : (
                    <span className="text-red-300 text-sm font-medium">{item.without}</span>
                  )}
                </div>
                
                <div className="flex items-center justify-center">
                  {typeof item.withUs === 'boolean' ? (
                    item.withUs ? (
                      <Check className="h-6 w-6 text-emerald-400" />
                    ) : (
                      <X className="h-6 w-6 text-red-400" />
                    )
                  ) : (
                    <span className="text-emerald-300 text-sm font-medium">{item.withUs}</span>
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

