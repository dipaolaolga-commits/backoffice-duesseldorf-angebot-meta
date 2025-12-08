import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Lock, FileCheck } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const premiumEase = [0.25, 0.1, 0.25, 1];

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Wie schnell kann ich starten?',
      answer: 'Sobald wir alle erforderlichen Unterlagen von Ihnen erhalten haben, können wir sofort starten.',
    },
    {
      id: 'faq-2',
      question: 'Was passiert mit meinen Daten?',
      answer: 'Ihre Daten sind bei uns absolut sicher. Wir arbeiten DSGVO-konform, verwenden verschlüsselte Datenübertragung und sind haftpflichtversichert.',
    },
    {
      id: 'faq-3',
      question: 'Kann ich jederzeit kündigen?',
      answer: 'Sie können innerhalb von einer 4-wöchigen Frist zum Monatsende kündigen.',
    },
    {
      id: 'faq-4',
      question: 'Was ist, wenn ich Bilanzierungspflichtig bin?',
      answer: 'Wir übernehmen die komplette vorbereitende Buchhaltung. Alle Unterlagen werden von uns sauber aufbereitet und dem Steuerberater digital zur Verfügung gestellt. Dadurch sparen Sie Zeit und senken Ihre Kosten beim Steuerberater deutlich, weil dort weniger Arbeitsaufwand entsteht.',
    },
    {
      id: 'faq-5',
      question: 'Was kostet der Service genau?',
      answer: 'Die Kosten richten sich nach der Anzahl Ihrer Belege und den Leistungen, die Sie eventuell zusätzlich benötigen, wie z.B. Lohnbuchhaltung. Nach dem Erstgespräch wissen wir genau, welche Leistungen Sie benötigen und erstellen Ihnen daraufhin ein konkretes Angebot, das Ihren tatsächlichen Bedarf abbildet.',
    },
    {
      id: 'faq-6',
      question: 'Brauche ich spezielle Software?',
      answer: 'Nein, Sie brauchen keine Software zu installieren. Alles funktioniert cloud-basiert über unser sicheres Dashboard.',
    },
  ];

  const trustBadges = [
    { icon: Shield, title: 'DSGVO-konform', subtitle: 'Datenschutz garantiert' },
    { icon: Lock, title: 'Verschlüsselt', subtitle: 'Sichere Übertragung' },
    { icon: FileCheck, title: 'Flexibel', subtitle: 'Jederzeit kündbar' },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: premiumEase }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
            FAQ
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Häufige Fragen
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Alles, was Sie wissen müssen – transparent beantwortet
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + (index * 0.05), ease: premiumEase }}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left bg-slate-50/80 hover:bg-slate-100/80 rounded-xl p-5 border border-slate-100 hover:border-slate-200 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: premiumEase }}
                    className="flex-shrink-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200">
                      <ChevronDown className="h-4 w-4 text-slate-500" />
                    </div>
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: premiumEase }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-slate-200">
                        <p className="text-slate-600 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: premiumEase }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {trustBadges.map((badge, index) => (
            <div 
              key={index}
              className="text-center p-4 rounded-xl bg-slate-50/50 border border-slate-100"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                <badge.icon className="h-5 w-5 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-slate-900 text-base mb-0.5">{badge.title}</h4>
              <p className="text-sm text-slate-500">{badge.subtitle}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
