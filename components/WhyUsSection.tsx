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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-bold text-slate-900 mb-6"
            >
              Warum wir?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-blue-600 font-medium mb-6"
            >
              Weil Sie keinen weiteren Dienstleister brauchen – sondern echte Entlastung.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-slate-600 mb-8 text-lg"
            >
              Wir konzentrieren uns auf kleine Unternehmen und wissen genau, wo der Schuh drückt. Wir machen's einfach – damit Sie weiterkommen.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {strengths.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4, ease: "easeOut" }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-slate-900">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-10 lg:mt-0 relative"
          >
             <div className="absolute top-4 left-4 w-full h-full bg-slate-100 rounded-2xl -z-10 transform translate-x-2 translate-y-2"></div>
             <img 
               src="https://picsum.photos/seed/handshake/800/600" 
               alt="Professionelle Partnerschaft" 
               className="rounded-2xl shadow-xl w-full object-cover"
               loading="lazy"
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
};