import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-blue-600 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-50"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-80 h-80 bg-blue-700 rounded-full opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
        >
          Lassen Sie uns 15 Minuten sprechen – <br className="hidden md:block"/>
          und sofort Klarheit schaffen.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
        >
          Unverbindlich. Kostenlos. Sie sagen uns, wo Sie stehen. Wir zeigen Ihnen, wie Sie Monat für Monat entlastet werden.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center text-lg"
            aria-label="Jetzt Erstgespräch buchen"
          >
            <Calendar className="mr-2 h-6 w-6" aria-hidden="true" />
            🎯 Jetzt Erstgespräch buchen
          </motion.a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8 text-sm text-blue-200 opacity-80"
        >
          Keine Verpflichtung. Einfach ein gutes Gespräch.
        </motion.p>
      </div>
    </section>
  );
};