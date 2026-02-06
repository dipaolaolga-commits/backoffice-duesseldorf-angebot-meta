import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { useLoading } from '../contexts/LoadingContext';

export const Navbar = () => {
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

    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Leistungen', href: '#solution' },
    { name: 'Preise', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const handleQualificationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithLoading(() => navigate('/anfrage'), 1500);
  };

  return (
    <nav className="relative w-full z-50 bg-transparent py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: nur Logo zentriert */}
        <div className="flex md:hidden items-center justify-center">
          <Link to="/" className="flex-shrink-0 group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Logo isScrolled={isScrolled} />
            </motion.div>
          </Link>
        </div>

        {/* Desktop: Logo links, Nav Mitte, CTA rechts */}
        <div className="hidden md:flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Logo isScrolled={isScrolled} />
            </motion.div>
          </Link>

          <div className="flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-slate-900 group-hover:w-1/2 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex-shrink-0">
            <motion.button
              onClick={handleQualificationClick}
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-75"
            >
              Anfrage starten
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};
