import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Lösung', href: '#solution' },
    { name: 'Preise', href: '#pricing' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ShieldCheck className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-blue-800'}`} />
            <span className="ml-2 text-xl font-bold text-slate-900">
              Backoffice<span className="text-blue-600">Pro</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium hover:text-blue-600 transition-colors text-slate-700"
                aria-label={`Navigiere zu ${link.name}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-700 hover:text-blue-600"
              aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 font-medium py-2 border-b border-slate-100 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
              aria-label={`Navigiere zu ${link.name}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};