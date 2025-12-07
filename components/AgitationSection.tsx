import { motion } from 'framer-motion';

interface Consequence {
  id: string;
  text: string;
}

export const AgitationSection = () => {
  const consequences: Consequence[] = [
    { id: 'consequence-1', text: "Fehlende Struktur führt zu fehlenden Entscheidungen." },
    { id: 'consequence-2', text: "Unklare Rücklagen sorgen für finanzielle Engpässe." },
    { id: 'consequence-3', text: "Nicht digitalisierte Abläufe kosten jeden Monat Stunden." },
    { id: 'consequence-4', text: "Wenn etwas beim Steuerberater fehlt, wird's teuer." },
    { id: 'consequence-5', text: "Fehler in der Lohnabrechnung sorgen für Ärger mit Mitarbeitern und Ämtern." },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1450101499163-8841024dfea7?w=1920&h=1080&fit=crop&q=80" 
          alt="Stress und Chaos im Büro" 
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      </div>
      
      {/* Durchscheinende Hintergrundstruktur - Geometrische Formen */}
      <div className="absolute inset-0 z-10 opacity-[0.08]">
        {/* Diagonal verlaufende Linien */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.1) 2px,
              rgba(255,255,255,0.1) 4px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.08) 2px,
              rgba(255,255,255,0.08) 4px
            )
          `,
        }}></div>
        
        {/* Hexagonale Struktur */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px',
        }}></div>
        
        {/* Vertikale und horizontale Linien */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}></div>
      </div>
      
      {/* Zusätzliches subtiles Punktmuster */}
      <div className="absolute inset-0 opacity-[0.03] z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/20 rounded-full blur-3xl -mr-48 -mt-48 z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-900/20 rounded-full blur-3xl -ml-48 -mb-48 z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-10 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Und die Folgen? <br />
            <motion.span 
              className="text-red-400 font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
            >
              Chaos, unnötige Kosten und das Gefühl, ständig hinterherzulaufen.
            </motion.span>
          </motion.h2>
          
          <div className="grid md:grid-cols-1 gap-5 mb-16 text-left max-w-2xl mx-auto">
            {consequences.map((item, index) => (
              <motion.div 
                key={item.id}
                className="group flex items-start space-x-4 bg-slate-800/40 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-red-500/30 hover:bg-slate-800/60 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: 'transform, opacity' }}
              >
                <motion.div 
                  className="h-2.5 w-2.5 rounded-full bg-red-500 flex-shrink-0 mt-2 shadow-lg shadow-red-500/50 relative" 
                  aria-hidden="true"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.6, 1],
                    delay: index * 0.2,
                  }}
                >
                  {/* Pulsating ring effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-red-500"
                    animate={{
                      scale: [1, 2, 2],
                      opacity: [0.6, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: [0.4, 0, 1, 1],
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>
                <p className="text-lg text-slate-200 leading-relaxed group-hover:text-white transition-colors">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                Sie arbeiten hart – aber ohne ein sauberes Backoffice arbeiten Sie <span className="text-red-400 font-bold">doppelt hart</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};