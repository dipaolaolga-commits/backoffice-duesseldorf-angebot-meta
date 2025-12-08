import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface QualificationData {
  employees: string;
  payroll: string;
  documents: string;
  companyType: string;
  taxAdvisor: string;
  challenge: string;
}

export const QualificationPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<QualificationData>({
    employees: '',
    payroll: '',
    documents: '',
    companyType: '',
    taxAdvisor: '',
    challenge: '',
  });

  const questions = [
    {
      id: 'employees',
      question: 'Wie viele Mitarbeiter haben Sie?',
      options: [
        { value: '0', label: 'Keine (Selbstständig)' },
        { value: '1-5', label: '1-5 Mitarbeiter' },
        { value: '6-20', label: '6-20 Mitarbeiter' },
        { value: '20+', label: 'Mehr als 20 Mitarbeiter' },
      ],
    },
    {
      id: 'documents',
      question: 'Wie viele Belege kommen monatlich ungefähr?',
      options: [
        { value: '50', label: '50' },
        { value: '80', label: '80' },
        { value: 'ab80', label: 'ab 80' },
      ],
    },
    {
      id: 'payroll',
      question: 'Was benötigen Sie?',
      options: [
        { value: 'finanzbuchhaltung', label: 'Finanzbuchhaltung' },
        { value: 'lohnbuchhaltung', label: 'Lohnbuchhaltung' },
        { value: 'beides', label: 'Beides' },
      ],
    },
    {
      id: 'companyType',
      question: 'Welche Art von Unternehmen führen Sie?',
      options: [
        { value: 'einzelunternehmen', label: 'Einzelunternehmen' },
        { value: 'gmbh', label: 'GmbH' },
        { value: 'ug', label: 'UG (haftungsbeschränkt)' },
        { value: 'andere', label: 'Andere Rechtsform' },
      ],
    },
    {
      id: 'taxAdvisor',
      question: 'Haben Sie bereits einen Steuerberater?',
      options: [
        { value: 'ja', label: 'Ja, ich habe einen Steuerberater' },
        { value: 'nein', label: 'Nein, ich suche noch einen' },
        { value: 'teilweise', label: 'Teilweise, aber unzufrieden' },
      ],
    },
    {
      id: 'challenge',
      question: 'Was ist Ihre größte Herausforderung im Backoffice?',
      options: [
        { value: 'belege', label: 'Belegorganisation und Sortierung' },
        { value: 'lohn', label: 'Lohnabrechnung und Personalverwaltung' },
        { value: 'zeit', label: 'Zeitmangel für Verwaltungsaufgaben' },
        { value: 'steuern', label: 'Unklarheit über Steuern und Rücklagen' },
        { value: 'digitalisierung', label: 'Digitalisierung und Automatisierung' },
        { value: 'andere', label: 'Andere Herausforderung' },
      ],
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [showEvaluation, setShowEvaluation] = useState(false);

  // Berechne Auswertung basierend auf den Antworten
  const calculateEvaluation = () => {
    let score = 0;
    let reasons: string[] = [];

    // Bewertung basierend auf Antworten
    if (formData.employees === '0' || formData.employees === '1-5') {
      score += 2;
      reasons.push('Ideal für kleine Unternehmen');
    }
    
    if (formData.documents === '50' || formData.documents === '80' || formData.documents === 'ab80') {
      score += 2;
      reasons.push('Optimale Beleganzahl für unseren Service');
    }
    
    if (formData.challenge === 'belege' || formData.challenge === 'zeit' || formData.challenge === 'digitalisierung') {
      score += 2;
      reasons.push('Wir lösen genau Ihre Herausforderungen');
    }
    
    if (formData.taxAdvisor === 'nein' || formData.taxAdvisor === 'teilweise') {
      score += 1;
      reasons.push('Wir können Sie optimal unterstützen');
    }

    const isSuitable = score >= 4;
    return { isSuitable, reasons, score };
  };

  const handleAnswer = (questionId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [questionId]: value }));
    
    if (currentStep < questions.length - 1) {
      // Nächste Frage nach kurzer Verzögerung
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 400);
    } else {
      // Letzte Frage beantwortet - Zeige Auswertung
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowEvaluation(true);
      }, 1500); // 1.5 Sekunden für "Analyse"
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto mb-6"
          >
            <Loader2 className="w-full h-full text-blue-600" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-slate-900 mb-2"
          >
            Wir analysieren Ihre Angaben...
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-600"
          >
            In Kürze zeigen wir Ihnen das passende Angebot
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // Zeige Auswertung nach letzter Frage
  if (showEvaluation) {
    const evaluation = calculateEvaluation();
    
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32 pb-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center"
          >
            {/* Ergebnis Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.2 
              }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
            >
              <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2.5} />
            </motion.div>

            {/* Hauptüberschrift */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              {evaluation.isSuitable 
                ? 'Unser Service passt zu Ihnen! ✨' 
                : 'Lassen Sie uns gemeinsam prüfen'}
            </motion.h2>

            {/* Beschreibung */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 mb-8"
            >
              {evaluation.isSuitable
                ? 'Basierend auf Ihren Angaben können wir Ihnen optimal helfen. Lassen Sie uns gemeinsam Ihr maßgeschneidertes Paket erstellen.'
                : 'Basierend auf Ihren Angaben möchten wir gerne persönlich mit Ihnen sprechen, um die beste Lösung für Sie zu finden.'}
            </motion.p>

            {/* Gründe */}
            {evaluation.reasons.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-blue-50 rounded-xl p-6 mb-8 text-left"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4">Warum wir zu Ihnen passen:</h3>
                <ul className="space-y-2">
                  {evaluation.reasons.map((reason, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{reason}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <button
                onClick={() => {
                  setShowEvaluation(false);
                  setCurrentStep(questions.length);
                }}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Jetzt Erstgespräch buchen
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (currentStep >= questions.length) {
    return <ContactForm qualificationData={formData} />;
  }

  const currentQuestion = questions[currentStep];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-slate-600">
              Frage {currentStep + 1} von {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-600">
              {Math.round(((currentStep + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
              className="bg-blue-600 h-2 rounded-full"
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ 
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            {currentQuestion.question}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                  formData[currentQuestion.id as keyof QualificationData] === option.value
                    ? 'border-blue-600 bg-blue-50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-slate-900">
                    {option.label}
                  </span>
                  {formData[currentQuestion.id as keyof QualificationData] === option.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Back Button */}
          {currentStep > 0 && (
            <motion.button
              onClick={handleBack}
              whileHover={{ x: -5 }}
              className="mt-8 text-slate-600 hover:text-slate-900 font-medium flex items-center transition-colors"
            >
              ← Zurück
            </motion.button>
          )}
          </motion.div>
        </AnimatePresence>

        {/* Info Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 mt-8 text-sm"
        >
          Ihre Antworten helfen uns, Ihnen das passende Angebot zu erstellen.
        </motion.p>
      </div>
    </motion.div>
  );
};

