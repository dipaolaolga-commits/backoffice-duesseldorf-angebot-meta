import { useNavigate } from 'react-router-dom';
import { Check, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoading } from '../contexts/LoadingContext';

export const PricingSection = () => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithLoading(() => navigate('/vorqualifizierung'), 1500);
  };

  return (
    <section id="pricing" className="py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Leichtes Grid-Hintergrund */}
      <div className="absolute inset-0 z-0 opacity-[0.22]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}></div>
      </div>
      
      {/* Dekorative Gradient-Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -mr-48 -mt-48 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -ml-48 -mb-48 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
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
            Leistungspakete
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Transparent und fair. Wählen Sie, was zu Ihnen passt.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Stufe 1: bis 50 Belege */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/60 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-900">bis 50 Belege</h3>
              <p className="text-slate-600 text-sm mt-1">Für kleine Unternehmen</p>
            </div>
            <div className="mb-6">
              <div className="mb-2">
                <span className="text-3xl font-bold text-slate-900">150 €</span>
                <span className="text-slate-600"> / Monat</span>
              </div>
              <p className="text-sm text-slate-500">brutto 178,50 €</p>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Einrichtung der Finanzbuchhaltung</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Stammdaten anlegen</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Anlagenerfassung</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Schnittstellen anlegen</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Bank und Kasse erfassen</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Umsatzsteuer-Voranmeldung vorbereiten</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Monatsreport mit Einnahmen-, Ausgaben- und Gewinnübersicht</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Digitale Aufbewahrung aller Dokumente und Belege</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Vorbereitung der Einnahmen-Überschussrechnung (EÜR)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Monatliche Liste der fehlenden Belege zur Nachreichung</span>
              </li>
            </ul>
            <button
              onClick={handleClick}
              disabled={isLoading}
              className="group block w-full text-center py-4 px-6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 rounded-xl text-white font-semibold transition-all duration-300 shadow-[0_4px_16px_-2px_rgba(15,23,42,0.2)] hover:shadow-[0_6px_24px_-4px_rgba(15,23,42,0.3)] border border-slate-500/30 relative overflow-hidden disabled:opacity-75 disabled:cursor-wait"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Anfragen
              </span>
            </button>
          </motion.div>

          {/* Stufe 2: bis 80 Belege */}
          <motion.div 
            className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 border-2 border-blue-400/60 shadow-2xl scale-115 relative flex flex-col z-10 ring-4 ring-blue-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="mb-5">
              <h3 className="text-2xl font-bold text-white mb-2">bis 80 Belege</h3>
              <p className="text-white/90 text-base mt-1 font-medium">Für mittlere Unternehmen</p>
            </div>
            <div className="mb-7">
              <div className="mb-2">
                <span className="text-4xl font-bold text-white">180 €</span>
                <span className="text-white/90 text-lg"> / Monat</span>
              </div>
              <p className="text-sm text-white/85 font-medium">brutto 214,20 €</p>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-3 shrink-0 mt-0.5" aria-hidden="true" strokeWidth={3} />
                <span className="text-white/95 text-sm font-medium">Einrichtung der Finanzbuchhaltung</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-3 shrink-0 mt-0.5" aria-hidden="true" strokeWidth={3} />
                <span className="text-white/95 text-sm font-medium">Stammdaten anlegen</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-3 shrink-0 mt-0.5" aria-hidden="true" strokeWidth={3} />
                <span className="text-white/95 text-sm font-medium">Anlagenerfassung</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-3 shrink-0 mt-0.5" aria-hidden="true" strokeWidth={3} />
                <span className="text-white/95 text-sm font-medium">Schnittstellen anlegen</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-3 shrink-0 mt-0.5" aria-hidden="true" strokeWidth={3} />
                <span className="text-white/95 text-sm font-medium">Bank und Kasse erfassen</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-3 shrink-0 mt-0.5" aria-hidden="true" strokeWidth={3} />
                <span className="text-white/95 text-sm font-medium">Umsatzsteuer-Voranmeldung vorbereiten</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-3 shrink-0 mt-0.5" aria-hidden="true" strokeWidth={3} />
                <span className="text-white/95 text-sm font-medium">Monatsreport mit Einnahmen-, Ausgaben- und Gewinnübersicht</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-3 shrink-0 mt-0.5" aria-hidden="true" strokeWidth={3} />
                <span className="text-white/95 text-sm font-medium">Digitale Aufbewahrung aller Dokumente und Belege</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-3 shrink-0 mt-0.5" aria-hidden="true" strokeWidth={3} />
                <span className="text-white/95 text-sm font-medium">Vorbereitung der Einnahmen-Überschussrechnung (EÜR)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-3 shrink-0 mt-0.5" aria-hidden="true" strokeWidth={3} />
                <span className="text-white/95 text-sm font-medium">Monatliche Liste der fehlenden Belege zur Nachreichung</span>
              </li>
            </ul>
            <button
              onClick={handleClick}
              disabled={isLoading}
              className="group block w-full text-center py-4 px-6 bg-white hover:bg-slate-50 text-blue-700 rounded-xl font-semibold transition-all duration-300 shadow-[0_4px_20px_-2px_rgba(59,130,246,0.15)] hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.25)] border-2 border-white/50 relative overflow-hidden disabled:opacity-75 disabled:cursor-wait"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Jetzt starten
              </span>
            </button>
          </motion.div>

          {/* Stufe 3: ab 80 Belege */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/60 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-900">ab 80 Belege</h3>
              <p className="text-slate-600 text-sm mt-1">Für größere Unternehmen</p>
            </div>
            <div className="mb-6">
              <div className="mb-2">
                <span className="text-3xl font-bold text-slate-900">250 €</span>
                <span className="text-slate-600"> / Monat</span>
              </div>
              <p className="text-sm text-slate-500">brutto 297,50 €</p>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Einrichtung der Finanzbuchhaltung</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Stammdaten anlegen</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Anlagenerfassung</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Schnittstellen anlegen</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Bank und Kasse erfassen</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Umsatzsteuer-Voranmeldung vorbereiten</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Monatsreport mit Einnahmen-, Ausgaben- und Gewinnübersicht</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Digitale Aufbewahrung aller Dokumente und Belege</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Vorbereitung der Einnahmen-Überschussrechnung (EÜR)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">Monatliche Liste der fehlenden Belege zur Nachreichung</span>
              </li>
            </ul>
            <button
              onClick={handleClick}
              disabled={isLoading}
              className="group block w-full text-center py-4 px-6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 rounded-xl text-white font-semibold transition-all duration-300 shadow-[0_4px_16px_-2px_rgba(15,23,42,0.2)] hover:shadow-[0_6px_24px_-4px_rgba(15,23,42,0.3)] border border-slate-500/30 relative overflow-hidden disabled:opacity-75 disabled:cursor-wait"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Angebot anfordern
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};