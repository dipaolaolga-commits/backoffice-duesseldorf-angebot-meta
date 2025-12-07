import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, Phone, Building } from 'lucide-react';

interface QualificationData {
  employees: string;
  payroll: string;
  documents: string;
  companyType: string;
  taxAdvisor: string;
  challenge: string;
}

interface ContactFormProps {
  qualificationData: QualificationData;
}

export const ContactForm = ({ qualificationData }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise die Formular-Daten gesendet werden
    console.log('Formular-Daten:', { ...formData, qualificationData });
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </motion.div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Vielen Dank für Ihre Anfrage!
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Wir haben Ihre Angaben erhalten und melden uns in Kürze bei Ihnen, um ein passendes Angebot zu erstellen.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Zurück zur Startseite
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Lassen Sie uns in Kontakt treten
            </h2>
            <p className="text-lg text-slate-600">
              Basierend auf Ihren Angaben können wir Ihnen ein maßgeschneidertes Angebot erstellen.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                  Vorname *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Max"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                  Nachname *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Mustermann"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  E-Mail-Adresse *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="max@beispiel.de"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Telefonnummer
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                Unternehmen
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Ihr Unternehmen"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Zusätzliche Nachricht (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                placeholder="Haben Sie noch Fragen oder spezielle Anforderungen?"
              />
            </div>

            {/* Qualification Summary */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 className="text-sm font-semibold text-blue-900 mb-3">
                Ihre Angaben im Überblick:
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-slate-600">Mitarbeiter:</span>{' '}
                  <span className="font-medium text-slate-900">{qualificationData.employees || 'Nicht angegeben'}</span>
                </div>
                <div>
                  <span className="text-slate-600">Lohnabrechnung:</span>{' '}
                  <span className="font-medium text-slate-900">{qualificationData.payroll || 'Nicht angegeben'}</span>
                </div>
                <div>
                  <span className="text-slate-600">Belege/Monat:</span>{' '}
                  <span className="font-medium text-slate-900">{qualificationData.documents || 'Nicht angegeben'}</span>
                </div>
                <div>
                  <span className="text-slate-600">Unternehmensform:</span>{' '}
                  <span className="font-medium text-slate-900">{qualificationData.companyType || 'Nicht angegeben'}</span>
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-lg"
            >
              <Send className="h-5 w-5" />
              Anfrage absenden
            </motion.button>

            <p className="text-xs text-slate-500 text-center">
              Mit dem Absenden stimmen Sie zu, dass wir Ihre Daten zur Bearbeitung Ihrer Anfrage verwenden.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

