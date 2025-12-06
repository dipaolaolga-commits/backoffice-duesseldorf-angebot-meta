import { FileText, Users, Cloud, BarChart3, Check, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  icon: LucideIcon;
  items: string[];
  delay: number;
}

const FeatureCard = ({ title, icon: Icon, items, delay }: FeatureCardProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true }}
    custom={delay}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: (d) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: d }
      }),
      hover: {
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    }}
    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
  >
    <motion.div
      variants={{
        hidden: { scale: 0.5, opacity: 0 },
        visible: { 
          scale: 1, 
          opacity: 1,
          rotate: 0,
          transition: { 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: delay + 0.1 
          } 
        },
        hover: { 
          scale: 1.15, 
          rotate: 5,
          color: "#2563eb",
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }
      }}
      className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 origin-center"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { duration: 0.4, delay: delay + 0.2 } 
          },
          hover: { opacity: 1, scale: 1 }
        }}
      >
        <Icon size={28} />
      </motion.div>
    </motion.div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={`${title}-${idx}`} className="flex items-start text-slate-600 text-sm">
          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            ⭐ Die Lösung: Ein Backoffice-Service, der Ihnen Arbeit abnimmt
          </h2>
          <p className="text-xl text-slate-600">
            Wir übernehmen für Sie die komplette Verwaltung – damit Sie sich auf Ihr Geschäft konzentrieren können.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </div>
    </section>
  );
};