import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Euro, TrendingUp, Calculator, Scale, Zap, BarChart3, Flame, Coins, Wallet, CheckCircle2, Loader2 } from 'lucide-react';
import { useLoading } from '../contexts/LoadingContext';

export const SavingsCalculator = () => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();
  const [hoursPerMonth, setHoursPerMonth] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [documentsPerMonth, setDocumentsPerMonth] = useState(100);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithLoading(() => navigate('/anfrage'), 1500);
  };

  // Berechnungen
  const hoursPerYear = hoursPerMonth * 12;
  const timeValuePerMonth = hoursPerMonth * hourlyRate;
  const timeValuePerYear = hoursPerYear * hourlyRate;
  
  // Geschätzte Kosten für Backoffice-Service (basierend auf Dokumentenanzahl)
  const estimatedServiceCost = documentsPerMonth < 50 ? 70 : documentsPerMonth < 200 ? 150 : 250;
  const estimatedServiceCostPerYear = estimatedServiceCost * 12;
  
  // Typische Steuerberater-Kosten (basierend auf Beleganzahl und Komplexität)
  // Steuerberater: Pauschale + pro Beleg
  const taxAdvisorBase = 150; // Monatliche Pauschale
  const taxAdvisorPerDocument = 2.5; // Pro Beleg
  const estimatedTaxAdvisorCost = taxAdvisorBase + (documentsPerMonth * taxAdvisorPerDocument);
  const estimatedTaxAdvisorCostPerYear = estimatedTaxAdvisorCost * 12;
  
  // Einsparungen gegenüber eigener Zeit
  const monthlySavings = timeValuePerMonth - estimatedServiceCost;
  const yearlySavings = timeValuePerYear - estimatedServiceCostPerYear;
  const savingsPercentage = ((yearlySavings / timeValuePerYear) * 100).toFixed(0);
  
  // Einsparungen gegenüber Steuerberater
  const savingsVsTaxAdvisorMonthly = estimatedTaxAdvisorCost - estimatedServiceCost;
  const savingsVsTaxAdvisorYearly = estimatedTaxAdvisorCostPerYear - estimatedServiceCostPerYear;
  const savingsVsTaxAdvisorPercentage = ((savingsVsTaxAdvisorYearly / estimatedTaxAdvisorCostPerYear) * 100).toFixed(0);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.20]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            So viel sparen Sie mit unserem Service
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Hier sehen Sie schwarz auf weiß, wie viel Zeit und Geld Sie jeden Monat und über die Jahre sparen können.
          </motion.p>
          <motion.p 
            className="text-sm md:text-base font-bold text-orange-600 uppercase tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Jeder Regler nach rechts = Mehr Zeit und Geld, das Sie sparen können.
          </motion.p>
        </motion.div>

        {/* Main Calculator Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Input Bereich - Links (Light Background) */}
            <div className="bg-white p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Ihre Angaben</h3>
            
              <div className="space-y-8">
                <div className="relative">
                  <label className="block text-base font-bold text-slate-900 mb-2">
                    Stunden pro Monat:
                  </label>
                  <p className="text-sm text-slate-600 mb-4">
                    Wie viele Stunden verwenden Sie monatlich für Backoffice-Aufgaben?
                  </p>
                  <div className="mb-3">
                    <motion.span
                      key={hoursPerMonth}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-3xl font-bold text-blue-600 block"
                    >
                      {hoursPerMonth} Stunden
                    </motion.span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={hoursPerMonth}
                    onChange={(e) => setHoursPerMonth(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((hoursPerMonth - 5) / 35) * 100}%, #e2e8f0 ${((hoursPerMonth - 5) / 35) * 100}%, #e2e8f0 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>5</span>
                    <span>20</span>
                    <span>40</span>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-base font-bold text-slate-900 mb-2">
                    Ihr Stundensatz (€):
                  </label>
                  <p className="text-sm text-slate-600 mb-4">
                    Was ist Ihnen eine Stunde Ihrer Zeit wert?
                  </p>
                  <div className="mb-3">
                    <motion.span
                      key={hourlyRate}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-3xl font-bold text-blue-600 block"
                    >
                      {hourlyRate.toFixed(2)} €
                    </motion.span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="150"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((hourlyRate - 30) / 120) * 100}%, #e2e8f0 ${((hourlyRate - 30) / 120) * 100}%, #e2e8f0 100%)`
                    }}
                  />
                </div>

                <div className="relative">
                  <label className="block text-base font-bold text-slate-900 mb-4">
                    Belege pro Monat:
                  </label>
                  <div className="mb-3">
                    <motion.span
                      key={documentsPerMonth}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-3xl font-bold text-blue-600 block"
                    >
                      {documentsPerMonth}
                    </motion.span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={documentsPerMonth}
                    onChange={(e) => setDocumentsPerMonth(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((documentsPerMonth - 20) / 480) * 100}%, #e2e8f0 ${((documentsPerMonth - 20) / 480) * 100}%, #e2e8f0 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>20</span>
                    <span>250</span>
                    <span>500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ergebnis Bereich - Rechts (Dark Background) */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-8 lg:p-10 text-white">
              <h3 className="text-3xl font-bold mb-8">Ihr Sparpotenzial</h3>
              
              <div className="space-y-6 mb-8">
                {/* Pro Monat */}
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-white/80" />
                    <span className="text-white/90">Pro Monat</span>
                  </div>
                  <motion.span
                    key={monthlySavings}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-xl lg:text-2xl font-bold text-white"
                  >
                    {monthlySavings > 0 ? `+${monthlySavings.toFixed(2)} €` : `${monthlySavings.toFixed(2)} €`}
                  </motion.span>
                </div>

                {/* Pro Jahr */}
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div className="flex items-center gap-4">
                    <TrendingUp className="h-6 w-6 text-white/80" />
                    <span className="text-white/90">Pro Jahr</span>
                  </div>
                  <motion.span
                    key={yearlySavings}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-xl lg:text-2xl font-bold text-white"
                  >
                    {yearlySavings > 0 ? `+${yearlySavings.toFixed(2)} €` : `${yearlySavings.toFixed(2)} €`}
                  </motion.span>
                </div>

                {/* Zeit-Einsparung */}
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-white/80" />
                    <span className="text-white/90">Zeit gespart (pro Jahr)</span>
                  </div>
                  <motion.span
                    key={hoursPerYear}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-xl lg:text-2xl font-bold text-white"
                  >
                    {hoursPerYear} Stunden
                  </motion.span>
                </div>
              </div>

              {/* Vergleich Steuerberater */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-white/90">Vergleich: Steuerberater</h4>
                <div className="space-y-4">
                  {/* Steuerberater */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Scale className="h-5 w-5 text-white/80" />
                        <span className="text-white/90 font-medium">Steuerberater</span>
                      </div>
                      <motion.span
                        key={estimatedTaxAdvisorCost}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="text-lg lg:text-xl font-bold text-white"
                      >
                        {estimatedTaxAdvisorCost.toFixed(2)} €
                      </motion.span>
                    </div>
                    <p className="text-white/70 text-xs mt-2 ml-8">pro Monat</p>
                  </div>

                  {/* Unser Service */}
                  <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-4 border-2 border-emerald-400/40">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                        <span className="text-white font-semibold">Unser Service</span>
                      </div>
                      <motion.span
                        key={estimatedServiceCost}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="text-lg lg:text-xl font-bold text-emerald-300"
                      >
                        {estimatedServiceCost.toFixed(2)} €
                      </motion.span>
                    </div>
                    <p className="text-emerald-200/80 text-xs mt-2 ml-8">pro Monat</p>
                  </div>

                  {/* Einsparung */}
                  {savingsVsTaxAdvisorYearly > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-emerald-500/30 backdrop-blur-sm rounded-xl p-5 border-2 border-emerald-400/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Wallet className="h-6 w-6 text-emerald-200" />
                          <span className="text-white font-bold">Ihre jährliche Einsparung</span>
                        </div>
                        <motion.span
                          key={savingsVsTaxAdvisorYearly}
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          className="text-xl lg:text-2xl font-bold text-emerald-200"
                        >
                          {savingsVsTaxAdvisorYearly.toFixed(2)} €
                        </motion.span>
                      </div>
                      <p className="text-emerald-100/90 text-sm ml-9">
                        Das sind <span className="font-bold text-emerald-200">{savingsVsTaxAdvisorPercentage}%</span> weniger als bei einem Steuerberater
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Summary Box */}
              {yearlySavings > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-700/50 rounded-2xl p-6 mb-8 border border-blue-600/30"
                >
                  <div className="flex items-start gap-3">
                    <Wallet className="h-5 w-5 text-white/90 mt-1 flex-shrink-0" />
                    <p className="text-white/95 text-sm leading-relaxed">
                      Für {yearlySavings.toFixed(0)}€ pro Jahr könnten Sie sich einen großen Traum erfüllen – statt Zeit und Geld für Papierkram zu verschwenden.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* CTA Button */}
              <button
                onClick={handleClick}
                disabled={isLoading}
                className="w-full bg-white text-blue-900 font-bold py-4 px-6 rounded-xl hover:bg-blue-50 transition-colors duration-300 text-center disabled:opacity-75 disabled:cursor-wait relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Nutzen Sie Ihr Sparpotenzial – Jetzt Erstgespräch buchen
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

