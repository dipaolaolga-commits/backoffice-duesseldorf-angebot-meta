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
    <section id="problem" className="py-24 bg-gradient-to-br from-slate-50 via-white to-red-50/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100/30 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
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
              Das Problem: <span className="text-red-600 font-extrabold">Der Papierkram frisst Ihre Zeit</span> – und Ihre Nerven.
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
            >
              Viele kleine Unternehmen stehen jeden Monat vor denselben Herausforderungen. 
              Der Verwaltungsaufwand hält Sie davon ab, das zu tun, was Ihnen Geld bringt.
            </motion.p>
            <motion.div 
              className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
            >
               <motion.img 
                 src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80" 
                 alt="Unorganisierte Büroarbeit mit stapelnden Belegen" 
                 className="object-cover w-full h-full"
                 loading="lazy"
                 whileHover={{ rotate: 2 }}
                 transition={{ duration: 0.3, ease: "easeOut" }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-red-900/5 to-transparent"></div>
               <div className="absolute inset-0 bg-red-900/5 group-hover:bg-red-900/0 transition-colors duration-300"></div>
            </motion.div>
          </motion.div>

          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <div className="relative h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200/60 hover:border-red-200 transition-all duration-300 overflow-hidden">
                      {/* Subtle gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-red-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Modern icon design */}
                      <div className="relative z-10 mb-4">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent border border-red-200/30 group-hover:from-red-500/20 group-hover:via-red-500/10 group-hover:border-red-300/50 transition-all duration-300">
                          <Icon className="h-7 w-7 text-red-600 group-hover:text-red-700 transition-colors duration-300" aria-hidden="true" />
                        </div>
                      </div>
                      
                      {/* Text */}
                      <div className="relative z-10">
                        <p className="text-slate-800 font-medium text-base leading-relaxed group-hover:text-slate-900 transition-colors">
                          {item.text}
                        </p>
                      </div>
                      
                      {/* Subtle accent line on hover */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};