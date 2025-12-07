import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoading } from '../contexts/LoadingContext';

export const Hero = () => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithLoading(() => navigate('/anfrage'), 1500);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Hintergrundbild - Optimiert für mobile Geräte */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80" 
          alt="Professionelles Büro" 
          className="hidden md:block w-full h-full object-cover"
          style={{ opacity: 0.1 }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-blue-50/50 to-white/60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex-shrink-0"
              >
                <ShieldCheck className="h-4 w-4 text-blue-700" />
              </motion.div>
              Ihr zuverlässiger Backoffice-Service
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
            >
              Mehr Zeit fürs Geschäft. <br className="hidden md:block" />
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: 'transform, opacity' }}
              >
                Weniger Stress mit Papierkram.
              </motion.span>
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
            >
              Wir übernehmen Ihre vorbereitende Buchhaltung und Lohnabrechnung, damit Sie Monat für Monat Ordnung, Klarheit und echte Planbarkeit haben.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <button
              onClick={handleClick}
              disabled={isLoading}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800 md:text-xl shadow-[0_4px_20px_-2px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_-4px_rgba(37,99,235,0.4)] transition-all duration-300 border border-blue-500/20 relative overflow-hidden disabled:opacity-75 disabled:cursor-wait" 
              aria-label="Jetzt Erstgespräch buchen"
            >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Jetzt Erstgespräch buchen
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </span>
              </button>
            <a 
              href="#solution" 
              className="group w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:text-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300" 
              aria-label="Mehr über unsere Lösung erfahren"
            >
              Mehr erfahren
            </a>
          </motion.div>

          <motion.div 
            className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'opacity' }}
          >
            <motion.span 
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
            >
              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" aria-hidden="true" /> Klar
            </motion.span>
            <motion.span 
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
            >
              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" aria-hidden="true" /> Strukturiert
            </motion.span>
            <motion.span 
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
            >
              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" aria-hidden="true" /> Bezahlbar
            </motion.span>
          </motion.div>

          {/* Partner Logos */}
          <div className="mt-12">
            {/* Animierte Logo-Slider */}
            <div className="relative overflow-hidden py-6 -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="flex gap-12 lg:gap-16">
                <motion.div
                  animate={{
                    x: [0, -1600], // Genau die Hälfte der Gesamtbreite (nur erste Reihe)
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 60,
                      ease: "linear",
                    },
                  }}
                  className="flex gap-12 lg:gap-16 items-center"
                  style={{ willChange: 'transform' }}
                >
                  {[
                    { id: 'partner-1', name: 'TechSolutions' },
                    { id: 'partner-2', name: 'BusinessPro' },
                    { id: 'partner-3', name: 'InnovateNow' },
                    { id: 'partner-4', name: 'SmartFinance' },
                    { id: 'partner-5', name: 'CloudWorks' },
                    { id: 'partner-6', name: 'DataFlow' },
                    { id: 'partner-7', name: 'SecureNet' },
                    { id: 'partner-8', name: 'DigitalHub' },
                    { id: 'partner-9', name: 'NextGen' },
                    { id: 'partner-10', name: 'PrimeTech' },
                  ].map((partner, index) => (
                    <div key={`${partner.id}-${index}`} className="flex-shrink-0">
                      <p className="text-base lg:text-lg font-medium text-slate-500 hover:text-slate-700 transition-colors duration-300 whitespace-nowrap tracking-wide">
                        {partner.name}
                      </p>
                    </div>
                  ))}
                  {/* Duplizieren für nahtlose Schleife - muss identisch sein */}
                  {[
                    { id: 'partner-1', name: 'TechSolutions' },
                    { id: 'partner-2', name: 'BusinessPro' },
                    { id: 'partner-3', name: 'InnovateNow' },
                    { id: 'partner-4', name: 'SmartFinance' },
                    { id: 'partner-5', name: 'CloudWorks' },
                    { id: 'partner-6', name: 'DataFlow' },
                    { id: 'partner-7', name: 'SecureNet' },
                    { id: 'partner-8', name: 'DigitalHub' },
                    { id: 'partner-9', name: 'NextGen' },
                    { id: 'partner-10', name: 'PrimeTech' },
                  ].map((partner, index) => (
                    <div key={`${partner.id}-dup-${index}`} className="flex-shrink-0">
                      <p className="text-base lg:text-lg font-medium text-slate-500 hover:text-slate-700 transition-colors duration-300 whitespace-nowrap tracking-wide">
                        {partner.name}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements - Reduziert auf mobilen Geräten */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
         <motion.div 
           className="hidden md:block absolute -top-[30%] -right-[10%] w-[800px] h-[800px] rounded-full bg-blue-100/60 blur-3xl opacity-70"
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 0.7, scale: 1 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
           style={{ willChange: 'transform, opacity' }}
         />
         <motion.div 
           className="hidden md:block absolute top-[20%] -left-[15%] w-[600px] h-[600px] rounded-full bg-indigo-50/60 blur-3xl opacity-60"
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 0.6, scale: 1 }}
           transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
           style={{ willChange: 'transform, opacity' }}
         />
         <motion.div 
           className="hidden md:block absolute -bottom-[20%] right-[10%] w-[700px] h-[700px] rounded-full bg-blue-50/50 blur-3xl opacity-50"
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 0.5, scale: 1 }}
           transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
           style={{ willChange: 'transform, opacity' }}
         />
      </div>
    </section>
  );
};