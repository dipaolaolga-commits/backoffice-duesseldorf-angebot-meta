import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '../contexts/LoadingContext';
import { AnimatedCTAButton } from './AnimatedCTAButton';

export const MobileStickyCTA = () => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById('hero-cta');
    if (!heroCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }
    );

    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithLoading(() => navigate('/anfrage'), 1500);
  };

  return (
    <AnimatePresence mode="wait">
      {showSticky ? (
        <motion.div
          key="mobile-sticky-cta"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 pb-6 md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        >
          <AnimatedCTAButton
            onClick={handleClick}
            disabled={isLoading}
            fullWidth
            className="!py-3.5 !text-base"
          >
            Jetzt Verfügbarkeit prüfen & Rabatt sichern
          </AnimatedCTAButton>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
