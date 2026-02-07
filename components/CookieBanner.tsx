import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Check } from 'lucide-react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = '';
    const cookieDecision = localStorage.getItem('cookieConsent');
    if (!cookieDecision) {
      setIsVisible(true);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[10000] px-3 py-2 sm:px-4 sm:py-2"
        >
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-t-xl sm:rounded-xl shadow-lg border border-slate-200/80 border-b-0 sm:border-b px-3 py-2.5 sm:px-4 sm:py-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-4 w-4 text-slate-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-slate-900 sm:mb-0.5">
                  Datenschutz
                </h3>
                <p className="text-xs text-slate-600 leading-snug line-clamp-2 sm:line-clamp-1">
                  Wir verwenden Cookies für die bestmögliche Erfahrung. Mit Ihrer Zustimmung helfen Sie uns, die Website zu verbessern.
                </p>
              </div>
            </div>
            <div className="flex gap-2 sm:flex-shrink-0">
              <button
                onClick={handleReject}
                className="flex-1 sm:flex-none px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Nur notwendige
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium text-white bg-[#1e3a8a] rounded-lg hover:bg-[#172554] transition-colors flex items-center justify-center gap-1.5"
              >
                <Check className="h-3.5 w-3.5" />
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


