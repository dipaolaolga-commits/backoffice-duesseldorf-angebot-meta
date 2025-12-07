import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { useLoading } from '../contexts/LoadingContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false); // Menü sofort schließen
    
    // Wenn nicht auf Homepage, zur Homepage navigieren
    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }
    
    // Auf Homepage: Smooth scrollen mit kurzer Verzögerung für bessere Performance
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Navbar Höhe
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      } else {
        // Fallback: Normaler Link, falls Element nicht gefunden wird
        window.location.href = href;
      }
    }, 100); // Kleine Verzögerung, damit das Menü zuerst geschlossen wird
  };

  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Lösung', href: '#solution' },
    { name: 'Preise', href: '#pricing' },
    { name: 'Kontakt', href: '#contact' },
  ];
  
  const handleQualificationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    navigateWithLoading(() => navigate('/vorqualifizierung'), 1500);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <Logo isScrolled={isScrolled} />
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center flex-1 justify-center mx-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="font-medium hover:text-blue-600 transition-colors text-slate-700"
                aria-label={`Navigiere zu ${link.name}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex flex-shrink-0 ml-auto">
            <button
              onClick={handleQualificationClick}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-[0_2px_12px_-2px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_16px_-2px_rgba(37,99,235,0.4)] disabled:opacity-75 disabled:cursor-wait flex items-center gap-2"
            >
              Angebot anfordern
            </button>
          </div>

          <div className="md:hidden flex items-center ml-auto">
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-700 hover:text-blue-600"
              aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isOpen}
              whileTap={{ scale: 0.9 }}
              style={{ willChange: 'transform' }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ 
                  duration: 0.25, 
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                style={{ willChange: 'transform' }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ 
              duration: 0.25, 
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 0.2 }
            }}
            style={{ willChange: 'transform, opacity, max-height' }}
            className="md:hidden absolute top-full right-0 w-full bg-white shadow-lg overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ 
                duration: 0.25, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
              style={{ willChange: 'transform' }}
              className="py-4 px-4 flex flex-col space-y-4"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href);
                    setIsOpen(false);
                  }}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.05,
                    duration: 0.2,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  style={{ willChange: 'transform, opacity' }}
                  className="text-slate-700 font-medium py-2 border-b border-slate-100 hover:text-blue-600"
                  aria-label={`Navigiere zu ${link.name}`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: navLinks.length * 0.05,
                  duration: 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                style={{ willChange: 'transform, opacity' }}
                className="pt-2"
              >
                <button
                  onClick={handleQualificationClick}
                  disabled={isLoading}
                  className="block w-full text-center py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-[0_2px_12px_-2px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_16px_-2px_rgba(37,99,235,0.4)] disabled:opacity-75 disabled:cursor-wait flex items-center justify-center gap-2"
                >
                    Angebot anfordern
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};