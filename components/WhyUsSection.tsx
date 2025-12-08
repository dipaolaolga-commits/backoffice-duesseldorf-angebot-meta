import { Shield, MessageCircle, Sparkles, Zap, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { images } from '../config/images';

interface Strength {
  id: string;
  title: string;
  text: string;
  icon: LucideIcon;
}

export const WhyUsSection = () => {
  const premiumEase = [0.25, 0.1, 0.25, 1];
  
  const strengths: Strength[] = [
    { 
      id: 'strength-1', 
      title: 'Struktur statt Chaos',
      text: "Klare Prozesse und Ordnung für Ihr Backoffice", 
      icon: Shield 
    },
    { 
      id: 'strength-2', 
      title: 'Klare Kommunikation',
      text: "Direkte Ansprache ohne Fachchinesisch", 
      icon: MessageCircle 
    },
    { 
      id: 'strength-3', 
      title: 'Faire Preise',
      text: "Transparente Paketpreise ohne versteckte Kosten", 
      icon: Sparkles 
    },
    { 
      id: 'strength-4', 
      title: 'Schnell & Zuverlässig',
      text: "Umsetzung innerhalb weniger Tage", 
      icon: Zap 
    },
  ];


  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
          >
            <motion.span 
              className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: premiumEase }}
            >
              Warum wir
            </motion.span>
            
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
            >
              Echte Entlastung.
              <span className="block text-blue-600">Kein weiterer Dienstleister.</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: premiumEase }}
            >
              Wir konzentrieren uns auf kleine Unternehmen und wissen genau, wo der Schuh drückt. Wir machen's einfach – damit Sie weiterkommen.
            </motion.p>
            
            <motion.p 
              className="text-lg text-slate-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: premiumEase }}
            >
              Als digitales Büro arbeiten wir ortsunabhängig, effizient und ohne Umwege. Wir sind ein eingespieltes Team aus Betriebswirten und Steuerfachangestellten: fachlich stark, strukturiert und zuverlässig.
            </motion.p>
            
            <motion.p 
              className="text-lg text-slate-600 mb-10 leading-relaxed font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: premiumEase }}
            >
              Alle Anfragen beantworten wir innerhalb von 48 Stunden.
            </motion.p>
            
            {/* Strength Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {strengths.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.08), ease: premiumEase }}
                    className="group"
                  >
                    <div className="relative p-5 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1 text-base">{item.title}</h3>
                          <p className="text-slate-600 text-base leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          {/* Right Column - Image + Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={images.whyUs.main} 
                alt="Professionelle Partnerschaft" 
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
