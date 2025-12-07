import { useNavigate } from 'react-router-dom';
import { Calendar, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoading } from '../contexts/LoadingContext';

export const CTASection = () => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithLoading(() => navigate('/anfrage'), 1500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-blue-50/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Weiße Karte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center"
        >
          {/* Überschrift */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight"
          >
            Lassen Sie uns 15 Minuten sprechen –<br />
            und sofort Klarheit schaffen.
          </motion.h2>
          
          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="mb-10"
          >
            <motion.div
              whileHover={{ scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                onClick={handleClick}
                disabled={isLoading}
                className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold py-5 px-10 rounded-full shadow-[0_4px_20px_-2px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_30px_-4px_rgba(37,99,235,0.5)] transition-all duration-300 text-lg relative overflow-hidden disabled:opacity-75 disabled:cursor-wait"
                aria-label="Jetzt Erstgespräch buchen"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Jetzt Erstgespräch buchen
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                </span>
              </button>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};