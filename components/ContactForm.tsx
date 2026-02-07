import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { webhooks } from '../config/webhook';

interface QualificationData {
  employees: string;
  employeesLabel: string;
  payroll: string;
  payrollLabel: string;
  documents: string;
  documentsLabel: string;
  companyType: string;
  companyTypeLabel: string;
  taxAdvisor: string;
  taxAdvisorLabel: string;
  challenge: string;
  challengeLabel: string;
}

interface ContactFormProps {
  qualificationData: QualificationData;
}

export const ContactForm = ({ qualificationData }: ContactFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Debug: Log die erhaltenen QualificationData
  console.log('ContactForm - QualificationData erhalten:', qualificationData);

  const sendToPabblyWebhook = async (data: any) => {
    try {
      const response = await fetch(webhooks.pabbly.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Webhook request failed');
      }

      const result = await response.json();
      console.log('Webhook erfolgreich gesendet:', result);
      return result;
    } catch (error) {
      console.error('Fehler beim Senden an Webhook:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Alle Daten zusammenfassen - verwende Labels (vollständige Texte) als primäre Werte
    const allData = {
      // Kontaktdaten
      FirstName: formData.firstName,
      LastName: formData.lastName,
      Email: formData.email,
      Phone: formData.phone,
      Company: formData.company,
      Message: formData.message,
      
      // Qualifikationsdaten - IMMER die vollständigen Antworttexte (Labels) verwenden
      Employees: qualificationData.employeesLabel || qualificationData.employees || '',
      Payroll: qualificationData.payrollLabel || qualificationData.payroll || '',
      Documents: qualificationData.documentsLabel || qualificationData.documents || '',
      CompanyType: qualificationData.companyTypeLabel || qualificationData.companyType || '',
      TaxAdvisor: qualificationData.taxAdvisorLabel || qualificationData.taxAdvisor || '',
      Challenge: qualificationData.challengeLabel || qualificationData.challenge || '',
      
      // Metadaten
      Timestamp: new Date().toISOString(),
      Source: 'Website Kontaktformular',
    };

    // Debug: Log die gesendeten Daten
    console.log('=== WEBHOOK DATA ===');
    console.log('QualificationData vollständig:', qualificationData);
    console.log('Gesendete Daten:', allData);
    console.log('Labels vorhanden:', {
      employeesLabel: !!qualificationData.employeesLabel,
      payrollLabel: !!qualificationData.payrollLabel,
      documentsLabel: !!qualificationData.documentsLabel,
      companyTypeLabel: !!qualificationData.companyTypeLabel,
      taxAdvisorLabel: !!qualificationData.taxAdvisorLabel,
      challengeLabel: !!qualificationData.challengeLabel,
    });

    try {
      // Daten an Pabbly Webhook senden
      await sendToPabblyWebhook(allData);
      
      // Navigiere zur Dankesseite
      navigate('/danke');
    } catch (error) {
      // Auch bei Fehler zur Dankesseite navigieren (bessere UX)
      console.error('Fehler beim Senden der Daten:', error);
      navigate('/danke');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-36 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 md:px-8 pt-2"
        >
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              In 2 Minuten zu Ihrem Angebot
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

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="relative w-full rounded-xl text-white font-bold py-4 px-8 text-lg shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed bg-[#1e3a8a] hover:bg-[#172554]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Send className="h-5 w-5" />
                    </motion.div>
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Anfrage absenden
                  </>
                )}
              </span>
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

