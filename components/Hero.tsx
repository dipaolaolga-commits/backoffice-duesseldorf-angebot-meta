import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoading } from '../contexts/LoadingContext';

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
    <section className="relative flex items-center pt-32 pb-8 lg:pt-40 lg:pb-10 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Premium Background with Image */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80" 
          alt="Professionelles Büro" 
          className="hidden md:block w-full h-full object-cover"
          style={{ opacity: 0.20 }}
          loading="eager"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/75 via-white/70 to-slate-50/75"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Elegant gradient orbs */}
        <motion.div 
          className="absolute -top-[40%] -right-[20%] w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: premiumEase }}
        />
        <motion.div 
          className="absolute top-[20%] -left-[20%] w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: premiumEase }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Premium Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 py-2 px-5 rounded-full bg-slate-900/5 backdrop-blur-sm border border-slate-200/60 text-slate-700 text-sm font-medium tracking-wide">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield className="h-4 w-4 text-blue-600" />
              </motion.div>
              <span className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-clip-text text-transparent font-semibold">
                Ihr zuverlässiger Backoffice-Partner
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
            Mehr Zeit fürs Geschäft.
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: staggerDelay * 2, ease: premiumEase }}
            >
              Weniger Papierkram.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: staggerDelay * 3, ease: premiumEase }}
          >
            Wir übernehmen Ihre vorbereitende Buchhaltung und Lohnabrechnung, 
            damit Sie Monat für Monat Ordnung, Klarheit und echte Planbarkeit haben.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: staggerDelay * 4, ease: premiumEase }}
          >
            <motion.button
              onClick={handleClick}
              disabled={isLoading}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 shadow-[0_4px_20px_-2px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_-4px_rgba(37,99,235,0.4)] transition-all duration-500 overflow-hidden disabled:opacity-75"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Erstgespräch vereinbaren
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
            
            <motion.a 
              href="#solution"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 text-lg font-semibold rounded-xl text-slate-700 bg-white/80 backdrop-blur-sm hover:bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-500"
            >
              Mehr erfahren
            </motion.a>
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
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
              
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
