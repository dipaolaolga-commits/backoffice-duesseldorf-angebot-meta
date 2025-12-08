import { FileText, Users, Cloud, BarChart3, Check, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  icon: LucideIcon;
  items: string[];
  index: number;
}

const FeatureCard = ({ title, icon: Icon, items, index }: FeatureCardProps) => {
  const premiumEase = [0.25, 0.1, 0.25, 1];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: 0.1 + (index * 0.1), ease: premiumEase }}
      className="group h-full"
    >
      <div className="relative h-full bg-white rounded-2xl p-7 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100/50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-500">
            <Icon size={26} className="text-blue-600" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-5 group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>
        
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start text-slate-600 text-base">
              <div className="mt-0.5 mr-3 flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Check className="h-3 w-3 text-emerald-600" />
                </div>
              </div>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export const SolutionSection = () => {
  const premiumEase = [0.25, 0.1, 0.25, 1];
  
  const features = [
    {
      title: "Vorbereitende Buchhaltung",
      icon: FileText,
      items: [
        "Digitale Belegorganisation",
        "Bank- & Zahlungsabgleich",
        "Umsatzsteuer-Vorbereitung",
        "Monatsreports",
      ]
    },
    {
      title: "Lohnabrechnung",
      icon: Users,
      items: [
        "Lohn- & Gehaltsabrechnungen",
        "SV-Meldungen & DEÜV",
        "Lohnsteueranmeldung",
        "Digitale Lohnakte",
      ]
    },
    {
      title: "Digitale Prozesse",
      icon: Cloud,
      items: [
        "Cloud-Upload (App/PC)",
        "Automatisierte Ablage",
        "Übersichtliches Dashboard",
        "Jederzeit verfügbar",
      ]
    },
    {
      title: "Steuerlast-Prognose",
      icon: BarChart3,
      items: [
        "Finanztrend-Analyse",
        "Rücklagenrechner",
        "Monatliche Klarheit",
        "Keine Überraschungen",
      ]
    },
  ];

  return (
    <section id="solution" className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: premiumEase }}
        >
          <motion.span 
            className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: premiumEase }}
          >
            Unsere Lösung
          </motion.span>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
          >
            Ein Service, der Ihnen 
            <span className="text-blue-600"> Arbeit abnimmt</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: premiumEase }}
          >
            Wir übernehmen für Sie die komplette Verwaltung – damit Sie sich 
            auf Ihr Geschäft konzentrieren können.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
              items={feature.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
