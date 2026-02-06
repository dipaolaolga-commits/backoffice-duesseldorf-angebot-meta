import { X, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { images } from '../config/images';

interface ProblemItem {
  id: string;
  title: string;
  text: string;
  icon: LucideIcon;
}

export const ProblemSection = () => {
  const premiumEase = [0.25, 0.1, 0.25, 1];

  const problems: ProblemItem[] = [
    {
      id: 'problem-1',
      title: 'Das teure Missverständnis:',
      text: 'Ihr Steuerberater ist Experte für Steuerrecht – nicht fürs Sortieren. Wenn er Ihre Belege ordnet, zahlen Sie Experten-Honorare für Sekretariats-Aufgaben.',
      icon: X,
    },
    {
      id: 'problem-2',
      title: 'Der Zeit-Fresser:',
      text: 'Nach einem langen Arbeitstag wartet oft noch das Büro-Chaos. Statt Feierabend heißt es: Rechnungen suchen.',
      icon: X,
    },
    {
      id: 'problem-3',
      title: 'Der Blindflug:',
      text: 'Ohne aktuelle Zahlen warten Sie nur auf die nächste Nachricht vom Finanzamt.',
      icon: X,
    },
    {
      id: 'problem-4',
      title: 'Die Umsatz-Bremse:',
      text: 'Während Sie Quittungen abheften, verdienen Sie kein Geld. Sie sind Fachkraft – Ihre Zeit gehört zum Kunden oder auf die Baustelle, nicht in den Aktenordner.',
      icon: X,
    },
  ];

  return (
    <section id="problem" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
            >
              Ist Ihr Wochenende für die Familie oder für Belege?
            </motion.h2>

            <motion.p
              className="text-lg text-slate-600 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: premiumEase }}
            >
              Viele Unternehmer in Düsseldorf und Umgebung tappen in die gleiche Kostenfalle:
            </motion.p>

            {/* Problem Cards - wie zuvor im 2x2-Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.08), ease: premiumEase }}
                    className="group"
                  >
                    <div className="relative p-5 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                          <Icon className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Bild und Badge wie zuvor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: premiumEase }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.problem.main}
                alt="Stressige Büroarbeit"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
            </div>

            {/* Floating stat card - 15h+ Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: premiumEase }}
              className="absolute -bottom-6 left-4 md:-left-6 bg-white rounded-xl shadow-xl p-5 border border-slate-100"
            >
              <p className="text-3xl font-bold text-red-600 mb-1">15h+</p>
              <p className="text-sm text-slate-600">verlorene Zeit pro Monat</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
