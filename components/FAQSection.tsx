import { motion } from 'framer-motion';
import { ChevronDown, Shield, Lock, FileCheck } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Wie schnell kann ich starten?',
      answer: 'Nach dem unverbindlichen Erstgespräch können Sie innerhalb von 7 Tagen starten. Wir richten alles für Sie ein und übernehmen sofort die Verwaltung.',
    },
    {
      id: 'faq-2',
      question: 'Was passiert mit meinen Daten?',
      answer: 'Ihre Daten sind bei uns absolut sicher. Wir arbeiten DSGVO-konform, verwenden verschlüsselte Datenübertragung und sind haftpflichtversichert. Ihre Daten werden niemals an Dritte weitergegeben.',
    },
    {
      id: 'faq-3',
      question: 'Kann ich jederzeit kündigen?',
      answer: 'Ja, Sie können jederzeit ohne Fristen kündigen. Keine langfristigen Verträge, keine versteckten Kosten. Wir möchten, dass Sie zufrieden sind.',
    },
    {
      id: 'faq-4',
      question: 'Wie funktioniert die Zusammenarbeit mit meinem Steuerberater?',
      answer: 'Wir arbeiten eng mit Ihrem Steuerberater zusammen. Wir bereiten alle Daten vor, organisieren die Belege und stellen sicher, dass alles rechtzeitig und korrekt beim Steuerberater ankommt.',
    },
    {
      id: 'faq-5',
      question: 'Was kostet der Service genau?',
      answer: 'Die Kosten hängen von Ihrem Paket und der Anzahl der Belege ab. Unser Paket BASIC startet ab 70€/Monat. Im Erstgespräch erstellen wir Ihnen ein individuelles, transparentes Angebot.',
    },
    {
      id: 'faq-6',
      question: 'Brauche ich spezielle Software?',
      answer: 'Nein, Sie müssen keine Software installieren. Wir arbeiten cloud-basiert – Sie laden Ihre Belege einfach per App oder PC hoch. Alles funktioniert über unser sicheres Dashboard.',
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Subtile Hintergrundstruktur */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}></div>
      </div>
      
      {/* Dekorative Gradient-Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/15 rounded-full blur-3xl -mr-48 -mt-48 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/15 rounded-full blur-3xl -ml-48 -mb-48 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/10 rounded-full blur-3xl z-0"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Häufige Fragen
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Alles, was Sie wissen müssen – transparent beantwortet
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl border-2 border-slate-200/60 hover:border-blue-400/60 transition-all duration-300 overflow-hidden relative h-full"
                aria-expanded={openId === faq.id}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/30 group-hover:via-blue-50/20 group-hover:to-indigo-50/30 transition-all duration-500 rounded-2xl"></div>
                
                {/* Subtile Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-blue-400/20 blur-sm"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 pr-8 group-hover:text-blue-700 transition-colors duration-300 leading-snug">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ 
                        rotate: openId === faq.id ? 180 : 0,
                        scale: openId === faq.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="flex-shrink-0 mt-1"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-300">
                        <ChevronDown className="h-5 w-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openId === faq.id ? 'auto' : 0,
                      opacity: openId === faq.id ? 1 : 0,
                      marginTop: openId === faq.id ? 16 : 0,
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.4, 0, 0.2, 1],
                      opacity: { duration: 0.3 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t-2 border-slate-100 group-hover:border-blue-200 transition-colors duration-300">
                      <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="mt-12 grid sm:grid-cols-3 gap-4 lg:gap-6"
        >
          <motion.div
            className="bg-white/60 rounded-xl p-4 border border-slate-200/40 shadow-sm transition-all duration-300 text-center"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-emerald-200/40">
              <Shield className="h-5 w-5 text-emerald-600" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-1 text-base">DSGVO-konform</h4>
            <p className="text-xs text-slate-500">Ihre Daten sind sicher</p>
          </motion.div>
          
          <motion.div
            className="bg-white/60 rounded-xl p-4 border border-slate-200/40 shadow-sm transition-all duration-300 text-center"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-blue-200/40">
              <Lock className="h-5 w-5 text-blue-600" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-1 text-base">Verschlüsselt</h4>
            <p className="text-xs text-slate-500">Sichere Datenübertragung</p>
          </motion.div>
          
          <motion.div
            className="bg-white/60 rounded-xl p-4 border border-slate-200/40 shadow-sm transition-all duration-300 text-center"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-indigo-200/40">
              <FileCheck className="h-5 w-5 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-1 text-base">Jederzeit kündbar</h4>
            <p className="text-xs text-slate-500">Keine langfristigen Verträge</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

