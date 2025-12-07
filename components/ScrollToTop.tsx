import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Button wird sichtbar, wenn der Benutzer mehr als 300px nach unten gescrollt hat
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 border-2 border-white/20 hover:border-white/40 group"
          aria-label="Nach oben scrollen"
        >
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUp className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
          
          {/* Subtiler Glow-Effekt */}
          <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300 blur-sm"></div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
