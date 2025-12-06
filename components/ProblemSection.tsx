import { AlertCircle, FileWarning, Clock, TrendingDown, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Problem {
  id: string;
  text: string;
  icon: LucideIcon;
}

export const ProblemSection = () => {
  const problems: Problem[] = [
    { id: 'problem-1', text: "Belege stapeln sich, nichts ist sortiert.", icon: FileWarning },
    { id: 'problem-2', text: "Steuerberater sind überlastet oder lehnen neue Mandanten ab.", icon: AlertCircle },
    { id: 'problem-3', text: "Lohnabrechnungen dauern zu lange oder sind fehleranfällig.", icon: Clock },
    { id: 'problem-4', text: "Keine klare Übersicht: Was ist Gewinn? Was muss zurückgelegt werden?", icon: TrendingDown },
    { id: 'problem-5', text: "Angst vor falschen Abgaben, Fristen oder Nachzahlungen.", icon: AlertCircle },
    { id: 'problem-6', text: "Ständige Unsicherheit, ob \"alles richtig\" gemacht wurde.", icon: FileWarning },
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-bold text-slate-900 mb-6"
            >
              Das Problem: <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-red-600"
              >Der Papierkram frisst Ihre Zeit</motion.span> – und Ihre Nerven.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-lg text-slate-600 mb-8"
            >
              Viele kleine Unternehmen stehen jeden Monat vor denselben Herausforderungen. 
              Der Verwaltungsaufwand hält Sie davon ab, das zu tun, was Ihnen Geld bringt.
            </motion.p>
            <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-xl">
               <img 
                 src="https://picsum.photos/seed/officechaos/600/400" 
                 alt="Unorganisierte Büroarbeit mit stapelnden Belegen" 
                 className="object-cover w-full h-full opacity-90"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-red-900/10"></div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ul className="space-y-6">
              {problems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    className="flex items-start bg-slate-50 p-4 rounded-lg border-l-4 border-red-500 shadow-sm"
                  >
                    <Icon className="h-6 w-6 text-red-500 mr-4 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};