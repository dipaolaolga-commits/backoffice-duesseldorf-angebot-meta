import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const LegalSection = () => {
  const premiumEase = [0.25, 0.1, 0.25, 1];
  
  const allowed = [
    "Vorbereitende Buchhaltung",
    "Lohnabrechnung",
    "Digitale Belegorganisation",
    "Datenaufbereitung für den Steuerberater",
    "Monats- und Jahresreports",
    "Abstimmung mit Steuerberatern"
  ];
  
  const notAllowed = [
    "Bilanz",
    "Jahresabschluss",
    "Steuerberatung / Steuererklärungen",
    "Verbindliche steuerliche Auskünfte"
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: premiumEase }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
            Rechtssicherheit
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Sie sind auf der sicheren Seite.
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Wir arbeiten strikt rechtskonform und transparent. Hier sehen Sie genau, 
            was wir übernehmen dürfen – und was Ihr Steuerberater macht.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {/* Allowed Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
            className="group"
          >
            <div className="relative bg-white rounded-2xl p-7 lg:p-8 border-2 border-emerald-200 hover:border-emerald-300 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-t-2xl"></div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                </div>
                <span>Unser Service</span>
              </h3>
              
              <ul className="space-y-3">
                {allowed.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Not Allowed Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: premiumEase }}
            className="group"
          >
            <div className="relative bg-white rounded-2xl p-7 lg:p-8 border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-slate-300 rounded-t-2xl"></div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                  <XCircle className="h-5 w-5 text-slate-500" />
                </div>
                <span>Aufgaben des Steuerberaters</span>
              </h3>
              
              <ul className="space-y-3">
                {notAllowed.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
