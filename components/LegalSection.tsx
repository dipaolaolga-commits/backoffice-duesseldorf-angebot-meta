import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const LegalSection = () => {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden">
      {/* Hochwertige Hintergrundstruktur */}
      <div className="absolute inset-0 z-0">
        {/* Subtiles geometrisches Gitter */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 23, 42, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15, 23, 42, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        {/* Elegante Punktmuster */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>
      
      {/* Dekorative Gradient-Orbs mit mehr Tiefe */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/15 rounded-full blur-3xl -mr-64 -mt-64 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-200/15 rounded-full blur-3xl -ml-64 -mb-64 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-100/10 rounded-full blur-3xl z-0"></div>
      
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
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Sie sind auf der sicheren Seite
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Wir arbeiten <span className="font-semibold text-slate-900">strikt rechtskonform</span> und transparent. Hier sehen Sie genau, was wir für Sie übernehmen dürfen – und was Ihr Steuerberater macht.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {/* Allowed */}
          <motion.div 
            className="group relative h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="relative bg-white rounded-3xl p-10 lg:p-12 shadow-[0_8px_30px_-8px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_60px_-12px_rgba(16,185,129,0.25)] border-2 border-emerald-200/60 group-hover:border-emerald-400/80 transition-all duration-200 overflow-hidden h-full flex flex-col">
              {/* Eleganter Gradient-Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-green-50/0 group-hover:from-emerald-50/40 group-hover:via-emerald-50/30 group-hover:to-green-50/40 transition-opacity duration-200 pointer-events-none"></div>
              
              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500"></div>
              
              {/* Subtile Corner Accents */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-100/30 to-transparent rounded-br-full opacity-50"></div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Erlaubt (Unser Service)
                  </span>
                </h3>
                <ul className="space-y-5 flex-grow">
                  {[
                    "Vorbereitende Buchhaltung",
                    "Lohnabrechnung",
                    "Digitale Belegorganisation",
                    "Datenaufbereitung für den Steuerberater",
                    "Monats- und Jahresreports",
                    "Kontakt & Abstimmung mit Steuerberatern"
                  ].map((item, i) => (
                    <li 
                      key={`allowed-${i}`}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                      <span className="leading-relaxed text-base lg:text-lg font-medium text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Not Allowed */}
          <motion.div 
            className="group relative h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="relative bg-white rounded-3xl p-10 lg:p-12 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] hover:shadow-[0_20px_60px_-12px_rgba(15,23,42,0.18)] border-2 border-slate-200/60 group-hover:border-slate-400/80 transition-all duration-200 overflow-hidden h-full flex flex-col">
              {/* Eleganter Gradient-Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/0 via-slate-50/0 to-slate-50/0 group-hover:from-slate-50/30 group-hover:via-slate-50/20 group-hover:to-slate-50/30 transition-opacity duration-200 pointer-events-none"></div>
              
              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300"></div>
              
              {/* Subtile Corner Accents */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-slate-100/30 to-transparent rounded-br-full opacity-50"></div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-slate-500 flex-shrink-0" />
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Nicht erlaubt
                  </span>
                </h3>
                <ul className="space-y-5 flex-grow">
                  {[
                    "Bilanz",
                    "Jahresabschluss",
                    "Steuerberatung / Steuererklärungen",
                    "Verbindliche steuerliche Auskünfte"
                  ].map((item, i) => (
                    <li 
                      key={`not-allowed-${i}`}
                      className="flex items-start"
                    >
                      <XCircle className="h-5 w-5 text-slate-400 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                      <span className="leading-relaxed text-base lg:text-lg font-medium text-slate-600">{item}</span>
                    </li>
                  ))}
                  {/* Leere Items für gleiche Höhe */}
                  <li className="flex items-start opacity-0 pointer-events-none">
                    <div className="mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-5 h-5"></div>
                    </div>
                    <span className="leading-relaxed text-base lg:text-lg font-medium">&nbsp;</span>
                  </li>
                  <li className="flex items-start opacity-0 pointer-events-none">
                    <div className="mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-5 h-5"></div>
                    </div>
                    <span className="leading-relaxed text-base lg:text-lg font-medium">&nbsp;</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="inline-block bg-gradient-to-br from-blue-50/90 via-indigo-50/80 to-blue-50/90 backdrop-blur-md rounded-2xl p-8 lg:p-10 border-2 border-blue-200/60 shadow-[0_8px_30px_-8px_rgba(59,130,246,0.15)] hover:shadow-[0_12px_40px_-8px_rgba(59,130,246,0.2)] transition-shadow duration-200 max-w-3xl">
            <p className="text-lg lg:text-xl text-slate-700 font-medium leading-relaxed">
              Wir arbeiten <span className="font-bold text-slate-900">eng mit Ihrem Steuerberater zusammen</span>, um optimale Ergebnisse zu erzielen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};