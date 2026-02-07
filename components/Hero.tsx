import { useNavigate } from 'react-router-dom';
import { CheckCircle2, MapPin, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoading } from '../contexts/LoadingContext';
import { SlotsCounter } from './SlotsCounter';
import { AnimatedCTAButton } from './AnimatedCTAButton';
import { images } from '../config/images';

export const Hero = () => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithLoading(() => navigate('/anfrage'), 1500);
  };

  // Premium animation config
  const premiumEase = [0.25, 0.1, 0.25, 1];
  const staggerDelay = 0.12;

  return (
    <section className="relative flex items-center pt-36 pb-8 lg:pt-40 lg:pb-10 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-slate-50">
      {/* Premium Background with Image */}
      <div className="absolute inset-0 z-0">
        {/* Background Image – Desktop & Mobil, gleicher Look mit weißem Overlay */}
        <img 
          src={images.hero.background} 
          alt="Professionelles Büro" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        
        {/* Einziges Overlay: Weiße Ebene ca. 85 % Deckkraft */}
        <div className="absolute inset-0 bg-white/85" aria-hidden="true" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-7xl mx-auto">
          
          {/* Premium Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 py-2 px-5 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/70 text-blue-800 text-sm font-medium tracking-wide shadow-sm">
              <MapPin className="h-4 w-4 flex-shrink-0 text-[#ED3728]" aria-hidden />
              <span className="font-semibold text-[#1e3a8a]">
                Für Inhaber in Düsseldorf & Umgebung
              </span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: staggerDelay, ease: premiumEase }}
          >
            Schluss mit teurer Fleißarbeit:{' '}
            <motion.span 
              className="text-[#1e3a8a]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: staggerDelay * 2, ease: premiumEase }}
            >
              Wir erledigen Ihren Papierkram schon ab <span className="whitespace-nowrap">105{'\u00A0'}€</span>
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 mb-6 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: staggerDelay * 3, ease: premiumEase }}
          >
            Befreien Sie sich von Chaos und hohen Steuerberater-Rechnungen für einfache Sortieraufgaben.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            id="hero-cta"
            className="flex flex-col sm:flex-row justify-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: staggerDelay * 4, ease: premiumEase }}
          >
            <AnimatedCTAButton onClick={handleClick} disabled={isLoading}>
              Jetzt Verfügbarkeit prüfen & Rabatt sichern
            </AnimatedCTAButton>
          </motion.div>

          {/* Verknappung unter den CTAs */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: staggerDelay * 4.2, ease: premiumEase }}
          >
            <SlotsCounter />
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-sm text-slate-500 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: staggerDelay * 5, ease: premiumEase }}
          >
            {[
              { icon: CheckCircle2, text: 'DSGVO-konform' },
              { icon: Award, text: 'Zertifiziert' },
              { icon: Star, text: 'Top-bewertet' },
            ].map((item, index) => (
              <motion.span 
                key={item.text}
                className="flex items-center gap-2 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: staggerDelay * 5 + (index * 0.1), ease: premiumEase }}
              >
                <item.icon className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-600">{item.text}</span>
              </motion.span>
            ))}
          </motion.div>

          {/* Partner Logos - Premium Style */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: staggerDelay * 6, ease: premiumEase }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-4">
              Vertraut von führenden Unternehmen
            </p>
            
            <div className="relative overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50/95 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50/95 to-transparent z-10"></div>
              
              <motion.div
                animate={{ x: [0, -1400] }}
                transition={{
                  x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" }
                }}
                className="flex gap-16 items-center"
              >
                {[
                  { name: "Sophie's Schulcatering", logo: null },
                  { name: 'Kompass Event & Catering', logo: null },
                  { name: 'Lead Ink', logo: null },
                  { name: 'Starvy', logo: null },
                  { name: 'Pizzeria PIÙ', logo: null },
                  { name: "Sophie's Schulcatering", logo: null },
                  { name: 'Kompass Event & Catering', logo: null },
                  { name: 'Lead Ink', logo: null },
                  { name: 'Starvy', logo: null },
                  { name: 'Pizzeria PIÙ', logo: null },
                ].map((partner, index) => (
                  <div 
                    key={`partner-${index}`}
                    className="flex-shrink-0 h-12 flex items-center"
                  >
                    {partner.logo ? (
                      <img 
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-base font-semibold text-slate-400 hover:text-slate-600 transition-colors duration-300 tracking-wide">
                        {partner.name}
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
