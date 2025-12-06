import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const LegalSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-bold text-slate-900 mb-4"
          >Rechtssicherheit</motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Was wir tun dürfen – und was nicht. Wir arbeiten strikt rechtskonform und transparent, damit Sie auf der sicheren Seite sind.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Allowed */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-500"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
              Erlaubt (Unser Service)
            </h3>
            <ul className="space-y-4">
              {[
                "Vorbereitende Buchhaltung",
                "Lohnabrechnung",
                "Digitale Belegorganisation",
                "Datenaufbereitung für den Steuerberater",
                "Monats- und Jahresreports",
                "Kontakt & Abstimmung mit Steuerberatern"
              ].map((item, i) => (
                <li key={`allowed-${i}`} className="flex items-start text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not Allowed */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-slate-300"
          >
             <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <XCircle className="h-6 w-6 text-slate-400 mr-2" />
              Nicht erlaubt
            </h3>
            <ul className="space-y-4">
              {[
                "Bilanz",
                "Jahresabschluss",
                "Steuerberatung / Steuererklärungen",
                "Verbindliche steuerliche Auskünfte"
              ].map((item, i) => (
                <li key={`not-allowed-${i}`} className="flex items-start text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-center text-slate-500 mt-12 text-sm"
        >
          Wir arbeiten eng mit Ihrem Steuerberater zusammen, um optimale Ergebnisse zu erzielen.
        </motion.p>
      </div>
    </section>
  );
};