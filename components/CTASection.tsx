import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoading } from '../contexts/LoadingContext';

export const CTASection = () => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();
  const premiumEase = [0.25, 0.1, 0.25, 1];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithLoading(() => navigate('/anfrage'), 1500);
  };

  const benefits = [
    'Unverbindliches Erstgespräch',
    'Individuelles Angebot',
    'Start in 7 Tagen möglich',
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -ml-64 -mt-64"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl -mr-64 -mb-64"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: premiumEase }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden border border-slate-700/50"
        >
          
          {/* Content */}
          <div className="relative z-10">
            <motion.span 
              className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
            >
              Jetzt starten
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: premiumEase }}
            >
              Bereit für weniger Papierkram?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-300 mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
            >
              Lassen Sie uns 15 Minuten sprechen – und sofort Klarheit schaffen.
            </motion.p>
            
            {/* Benefits */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: premiumEase }}
            >
              {benefits.map((benefit, index) => (
                <span key={index} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  {benefit}
                </span>
              ))}
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: premiumEase }}
            >
              <motion.button
                onClick={handleClick}
                disabled={isLoading}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center bg-white text-slate-900 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 disabled:opacity-75"
              >
                Erstgespräch vereinbaren
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
