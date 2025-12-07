import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="inline-block">
              <div className="[&_span]:!text-white [&_.text-blue-600]:!text-blue-400 [&_.text-blue-700]:!text-blue-400">
                <Logo isScrolled={false} />
              </div>
            </Link>
            <p className="text-sm mt-2 text-slate-400">Ihr Partner für ein stressfreies Büro.</p>
          </div>
        
        <nav className="flex space-x-6 text-sm" aria-label="Footer Navigation">
          <Link to="/impressum" className="hover:text-white transition-colors" aria-label="Impressum">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-white transition-colors" aria-label="Datenschutz">Datenschutz</Link>
        </nav>
        
          <div className="mt-8 md:mt-0 text-sm">
            &copy; {new Date().getFullYear()} Backoffice Pro. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};