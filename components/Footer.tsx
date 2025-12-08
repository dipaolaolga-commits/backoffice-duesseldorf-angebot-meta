import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Shield, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <Logo isScrolled={false} variant="footer" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-sm">
              Ihr Partner für ein stressfreies Büro. Wir übernehmen die Verwaltung – 
              Sie konzentrieren sich auf Ihr Geschäft.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span>DSGVO-konform • Verschlüsselt • Zertifiziert</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { name: 'Leistungen', href: '#solution' },
                { name: 'Preise', href: '#pricing' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Kontakt', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-slate-500" />
                <a href="mailto:info@backoffice-düsseldorf.de" className="hover:text-white transition-colors">
                  info@backoffice-düsseldorf.de
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Backoffice Pro. Alle Rechte vorbehalten.
          </p>
          
          <nav className="flex items-center gap-6 text-xs">
            <Link 
              to="/impressum" 
              className="text-slate-500 hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link 
              to="/datenschutz" 
              className="text-slate-500 hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
