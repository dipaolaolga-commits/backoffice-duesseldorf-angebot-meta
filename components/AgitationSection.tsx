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
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Und die Folgen? <br />
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-red-400"
            >Chaos, unnötige Kosten und das Gefühl, ständig hinterherzulaufen.</motion.span>
          </motion.h2>
          
          <div className="grid md:grid-cols-1 gap-6 mb-12 text-left max-w-2xl mx-auto">
            {consequences.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                className="flex items-center space-x-4"
              >
                <div className="h-2 w-2 rounded-full bg-red-500 flex-shrink-0" aria-hidden="true"></div>
                <p className="text-lg text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl font-semibold text-white border-t border-slate-700 pt-8 inline-block"
          >
            Sie arbeiten hart – aber ohne ein sauberes Backoffice arbeiten Sie doppelt hart.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};