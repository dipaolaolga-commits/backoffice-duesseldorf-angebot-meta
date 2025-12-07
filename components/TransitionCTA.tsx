import { useNavigate } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoading } from '../contexts/LoadingContext';

interface TransitionCTAProps {
  title: string;
  description?: string;
  buttonText?: string;
  scrollToId?: string;
  variant?: 'light' | 'dark';
}

export const TransitionCTA = ({ 
  title, 
  description, 
  buttonText = 'Jetzt Erstgespräch buchen',
  scrollToId,
  variant = 'light'
}: TransitionCTAProps) => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (scrollToId) {
      // Smooth scroll zu einer Sektion
      const element = document.querySelector(scrollToId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    } else {
      // Navigation zur Vorqualifizierung
      navigateWithLoading(() => navigate('/vorqualifizierung'), 1500);
    }
  };

  const isDark = variant === 'dark';

  return (
    <section className={`py-16 lg:py-20 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-blue-800 via-indigo-800 to-blue-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50/30'
    }`}>
      {/* Hintergrundstruktur */}
      <div className={`absolute inset-0 z-0 ${isDark ? 'opacity-[0.08]' : 'opacity-[0.03]'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(15, 23, 42, 0.1)'} 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(15, 23, 42, 0.05)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(15, 23, 42, 0.05)'} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* Dekorative Gradient-Orbs */}
      {isDark ? (
        <>
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/25 rounded-full blur-3xl -ml-64 -mt-64 z-0"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/25 rounded-full blur-3xl -mr-64 -mb-64 z-0"></div>
        </>
      ) : (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -mr-48 -mt-48 z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -ml-48 -mb-48 z-0"></div>
        </>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
                isDark ? 'text-blue-50' : 'text-slate-600'
              }`}
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                onClick={handleClick}
                disabled={isLoading}
                className={`group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 relative overflow-hidden disabled:opacity-75 disabled:cursor-wait ${
                  isDark
                    ? 'bg-white text-blue-700 hover:text-blue-800 shadow-[0_4px_20px_-2px_rgba(59,130,246,0.15)] hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.25)]'
                    : 'bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800 text-white shadow-[0_4px_20px_-2px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_-4px_rgba(37,99,235,0.4)]'
                }`}
              >
                {isDark && (
                  <>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/60 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  </>
                )}
                {!isDark && (
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {buttonText}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
