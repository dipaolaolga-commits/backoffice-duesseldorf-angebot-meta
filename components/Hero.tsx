import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Ihr zuverlässiger Backoffice-Service
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
            >
              Mehr Zeit fürs Geschäft. <br className="hidden md:block" />
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-blue-600"
              >
                Weniger Stress mit Papierkram.
              </motion.span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-4 text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Wir übernehmen Ihre vorbereitende Buchhaltung und Lohnabrechnung, damit Sie Monat für Monat Ordnung, Klarheit und echte Planbarkeit haben.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-xl shadow-lg hover:shadow-xl transition-all" 
              aria-label="Jetzt Erstgespräch buchen"
            >
              Jetzt Erstgespräch buchen
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </motion.a>
            <motion.a 
              href="#solution" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-lg font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 md:text-xl shadow-sm transition-all" 
              aria-label="Mehr über unsere Lösung erfahren"
            >
              Mehr erfahren
            </motion.a>
          </motion.div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500">
            <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" aria-hidden="true" /> Klar</span>
            <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" aria-hidden="true" /> Strukturiert</span>
            <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" aria-hidden="true" /> Bezahlbar</span>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
         <div className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] rounded-full bg-blue-100/60 blur-3xl opacity-70" />
         <div className="absolute top-[20%] -left-[15%] w-[600px] h-[600px] rounded-full bg-indigo-50/60 blur-3xl opacity-60" />
         <div className="absolute -bottom-[20%] right-[10%] w-[700px] h-[700px] rounded-full bg-blue-50/50 blur-3xl opacity-50" />
      </div>
    </section>
  );
};