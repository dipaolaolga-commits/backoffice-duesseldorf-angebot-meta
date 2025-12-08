import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Check } from 'lucide-react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieDecision = localStorage.getItem('cookieConsent');
    
    if (!cookieDecision) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    document.body.style.overflow = '';
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    document.body.style.overflow = '';
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[10000]"
          />
          
          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[10001] p-4"
          >
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Datenschutz-Einstellungen
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. 
                    Mit Ihrer Zustimmung helfen Sie uns, unsere Website zu verbessern.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleReject}
                  className="flex-1 px-5 py-3 bg-slate-100 text-slate-700 font-medium text-sm rounded-xl hover:bg-slate-200 transition-colors duration-200"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 px-5 py-3 bg-blue-600 text-white font-medium text-sm rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Check className="h-4 w-4" />
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

