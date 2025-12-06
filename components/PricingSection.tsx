import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Leistungspakete</h2>
          <p className="text-slate-400 text-lg">Transparent und fair. Wählen Sie, was zu Ihnen passt.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-colors flex flex-col"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">Paket BASIC</h3>
              <p className="text-slate-400 text-sm mt-1">Belegorganisation & Struktur</p>
            </div>
            <p className="text-slate-400 text-sm mb-6 min-h-[40px]">Für Selbstständige & kleine Betriebe ohne Mitarbeiter.</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">ab 70 €</span>
              <span className="text-slate-400"> / Monat</span>
              <p className="text-xs text-slate-500 mt-1">(bei Selbst-Digitalisierung)</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li key="basic-1" className="flex items-start"><Check className="h-5 w-5 text-green-400 mr-3 shrink-0" aria-hidden="true" /> Vorbereitung für den Steuerberater</li>
              <li key="basic-2" className="flex items-start"><Check className="h-5 w-5 text-green-400 mr-3 shrink-0" aria-hidden="true" /> Gewinnreport / Monat</li>
            </ul>
            <a href="#contact" className="block w-full text-center py-3 px-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium transition-colors">
              Anfragen
            </a>
          </motion.div>

          {/* Plus */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-blue-600 rounded-2xl p-8 border border-blue-500 shadow-2xl scale-105 relative flex flex-col z-10"
          >
            <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              BELIEBT
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">Paket PLUS</h3>
              <p className="text-blue-100 text-sm mt-1">Buchhaltung + Lohnabrechnung</p>
            </div>
            <p className="text-blue-100 text-sm mb-6 min-h-[40px]">Für Unternehmen mit Mitarbeitern.</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">ab 200 €</span>
              <span className="text-blue-100"> / Monat</span>
              <p className="text-xs text-blue-200 mt-1">Lohnabrechnung je MA 35–55 €</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li key="plus-1" className="flex items-start"><Check className="h-5 w-5 text-white mr-3 shrink-0" aria-hidden="true" /> Alles aus Paket Basic</li>
              <li key="plus-2" className="flex items-start"><Check className="h-5 w-5 text-white mr-3 shrink-0" aria-hidden="true" /> Komplette Lohnabrechnung</li>
              <li key="plus-3" className="flex items-start"><Check className="h-5 w-5 text-white mr-3 shrink-0" aria-hidden="true" /> Alle Reports & Auswertungen</li>
              <li key="plus-4" className="flex items-start"><Check className="h-5 w-5 text-white mr-3 shrink-0" aria-hidden="true" /> Jahresübersichten inklusive</li>
            </ul>
            <a href="#contact" className="block w-full text-center py-3 px-4 bg-white hover:bg-slate-100 text-blue-600 rounded-lg font-bold transition-colors">
              Jetzt starten
            </a>
          </motion.div>

          {/* Premium */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-colors flex flex-col"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">Paket PREMIUM</h3>
              <p className="text-slate-400 text-sm mt-1">Rundum-Betreuung</p>
            </div>
            <p className="text-slate-400 text-sm mb-6 min-h-[40px]">Für Unternehmen, die alles abgeben wollen.</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">Individuell</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li key="premium-1" className="flex items-start"><Check className="h-5 w-5 text-green-400 mr-3 shrink-0" aria-hidden="true" /> Vollständige Backoffice-Unterstützung</li>
              <li key="premium-2" className="flex items-start"><Check className="h-5 w-5 text-green-400 mr-3 shrink-0" aria-hidden="true" /> Persönliche Betreuung</li>
              <li key="premium-3" className="flex items-start"><Check className="h-5 w-5 text-green-400 mr-3 shrink-0" aria-hidden="true" /> Priorisierte Bearbeitung</li>
              <li key="premium-4" className="flex items-start"><Check className="h-5 w-5 text-green-400 mr-3 shrink-0" aria-hidden="true" /> Maßgeschneiderte Lösungen</li>
            </ul>
            <a href="#contact" className="block w-full text-center py-3 px-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium transition-colors">
              Angebot anfordern
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};