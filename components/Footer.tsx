export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-white">
            Backoffice<span className="text-blue-500">Pro</span>
          </span>
          <p className="text-sm mt-2">Ihr Partner für ein stressfreies Büro.</p>
        </div>
        
        <nav className="flex space-x-6 text-sm" aria-label="Footer Navigation">
          <a href="#" className="hover:text-white transition-colors" aria-label="Impressum">Impressum</a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Datenschutz">Datenschutz</a>
          <a href="#" className="hover:text-white transition-colors" aria-label="AGB">AGB</a>
        </nav>
        
        <div className="mt-8 md:mt-0 text-sm">
          &copy; {new Date().getFullYear()} Backoffice Pro. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};