import { FileText, Users, Cloud, BarChart3, Check, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  icon: LucideIcon;
  items: string[];
  delay: number;
}

const FeatureCard = ({ title, icon: Icon, items, delay }: FeatureCardProps) => (
  <div className="group relative h-full"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-7 shadow-sm hover:shadow-2xl border border-slate-200/80 hover:border-blue-300/50 transition-all duration-500 h-full flex flex-col overflow-hidden">
      {/* Modern icon design */}
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-indigo-500/10 border border-blue-200/30 group-hover:from-blue-500/20 group-hover:via-blue-500/10 group-hover:to-indigo-500/20 group-hover:border-blue-300/50 transition-all duration-500">
          <Icon size={32} className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-700 transition-colors duration-300 leading-tight">{title}</h3>
      
      <ul className="space-y-3.5 flex-grow">
        {items.map((item, idx) => (
          <li 
            key={`${title}-${idx}`}
            className="flex items-start text-slate-600 text-sm group-hover:text-slate-700 transition-colors"
          >
            <div className="mt-0.5 mr-3 flex-shrink-0">
              <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200/50 flex items-center justify-center group-hover:bg-emerald-100 group-hover:border-emerald-300 transition-colors duration-300">
                <Check className="h-3 w-3 text-emerald-600" aria-hidden="true" />
              </div>
            </div>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      
      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  </div>
);

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Die Lösung: Ein Backoffice-Service, der Ihnen Arbeit abnimmt
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Wir übernehmen für Sie die komplette Verwaltung – damit Sie sich auf Ihr Geschäft konzentrieren können.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <FeatureCard 
              title="Vorbereitende Buchhaltung" 
              icon={FileText}
              delay={0.1}
              items={[
                "Digitale Belegorganisation",
                "Sortierung & Zuordnung",
                "Bank- & Zahlungsabgleich",
                "Vorsteuer-/Umsatzsteuer-Vorbereitung",
                "Monatsreports mit Gewinnübersicht",
                "Jahreszusammenfassung"
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <FeatureCard 
              title="Lohnabrechnung" 
              icon={Users}
              delay={0.2}
              items={[
                "Lohn- & Gehaltsabrechnungen",
                "SV-Meldungen & DEÜV",
                "Beitragsnachweise",
                "Lohnsteueranmeldung",
                "Jahresmeldungen",
                "Digitale Lohnakte"
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <FeatureCard 
              title="Digitale Prozesse" 
              icon={Cloud}
              delay={0.3}
              items={[
                "Cloud-Upload (App/PC)",
                "Automatisierte Ablage",
                "Sichere Datenverarbeitung",
                "Übersichtliches Dashboard",
                "Papierloses Büro",
                "Ständige Verfügbarkeit"
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <FeatureCard 
              title="Steuerlast-Prognose" 
              icon={BarChart3}
              delay={0.4}
              items={[
                "Was bleibt mir wirklich?",
                "Was muss ich zurücklegen?",
                "Realistische Steuerbelastung",
                "Rücklagenrechner",
                "Monatliche Klarheit",
                "Keine bösen Überraschungen"
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};