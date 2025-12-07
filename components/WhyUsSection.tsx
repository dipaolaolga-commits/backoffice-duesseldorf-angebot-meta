import { ThumbsUp, MessageCircle, Shield, Zap, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Strength {
  id: string;
  text: string;
  icon: LucideIcon;
}

export const WhyUsSection = () => {
  const strengths: Strength[] = [
    { id: 'strength-1', text: "Klare Strukturen statt Chaos", icon: Shield },
    { id: 'strength-2', text: "Direkte Kommunikation ohne Fachchinesisch", icon: MessageCircle },
    { id: 'strength-3', text: "Faire, transparente Paketpreise", icon: ThumbsUp },
    { id: 'strength-4', text: "Schnelle Umsetzung & Hohe Zuverlässigkeit", icon: Zap },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight"
            >
              Warum wir?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="text-2xl text-blue-600 font-bold mb-8 leading-relaxed"
            >
              Weil Sie keinen weiteren Dienstleister brauchen – sondern echte Entlastung.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="text-lg text-slate-600 mb-12 leading-relaxed"
            >
              Wir konzentrieren uns auf kleine Unternehmen und wissen genau, wo der Schuh drückt. Wir machen's einfach – damit Sie weiterkommen.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-5">
              {strengths.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.id}
                    className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl border border-slate-200/60 hover:border-blue-300 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 border border-blue-200/50 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-sm">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="mt-12 lg:mt-0 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl -z-10 transform scale-110"></div>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80" 
                alt="Professionelle Partnerschaft" 
                className="rounded-3xl w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent rounded-3xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};