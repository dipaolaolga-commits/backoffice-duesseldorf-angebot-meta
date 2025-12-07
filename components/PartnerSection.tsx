import { motion } from 'framer-motion';

interface Partner {
  id: string;
  name: string;
  initials: string;
}

export const PartnerSection = () => {
  // 10 Partner mit einfachen Namenslogos
  const partners: Partner[] = [
    { id: 'partner-1', name: 'TechSolutions', initials: 'TS' },
    { id: 'partner-2', name: 'BusinessPro', initials: 'BP' },
    { id: 'partner-3', name: 'InnovateNow', initials: 'IN' },
    { id: 'partner-4', name: 'SmartFinance', initials: 'SF' },
    { id: 'partner-5', name: 'CloudWorks', initials: 'CW' },
    { id: 'partner-6', name: 'DataFlow', initials: 'DF' },
    { id: 'partner-7', name: 'SecureNet', initials: 'SN' },
    { id: 'partner-8', name: 'DigitalHub', initials: 'DH' },
    { id: 'partner-9', name: 'NextGen', initials: 'NG' },
    { id: 'partner-10', name: 'PrimeTech', initials: 'PT' },
  ];

  // Dupliziere die Partner für nahtlose Endlosschleife
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 lg:py-20 bg-white border-y border-slate-200/60 relative overflow-hidden">
      {/* Subtile Hintergrundstruktur */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8"
          >
            Vertrauen Sie auf bewährte Partner
          </motion.p>
        </motion.div>

        {/* Animierte Logo-Slider */}
        <div className="relative overflow-hidden">
          {/* Fade-Effekte an den Rändern */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex gap-8 lg:gap-12">
            <motion.div
              animate={{
                x: [0, -2400], // Bewegt sich um die Breite von 10 Logos (ca. 240px pro Logo inkl. Gap)
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60, // Langsamere, elegantere Bewegung
                  ease: "linear",
                },
              }}
              className="flex gap-8 lg:gap-12"
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-48 lg:w-56 group"
                >
                  <div className="h-24 lg:h-28 flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border-2 border-slate-200/60 hover:border-blue-300/60 transition-all duration-300 group-hover:shadow-lg relative overflow-hidden">
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/50 transition-all duration-300"></div>
                    
                    {/* Logo mit Initialen */}
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                        <span className="text-white font-bold text-xl lg:text-2xl">
                          {partner.initials}
                        </span>
                      </div>
                      <p className="text-sm lg:text-base font-semibold text-slate-700 group-hover:text-blue-700 transition-colors duration-300">
                        {partner.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Optional: Text unter den Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            Wir arbeiten mit führenden Partnern zusammen
          </p>
        </motion.div>
      </div>
    </section>
  );
};
