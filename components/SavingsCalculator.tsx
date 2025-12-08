import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, ArrowRight, Scale, CheckCircle2, Wallet } from 'lucide-react';
import { useLoading } from '../contexts/LoadingContext';

export const SavingsCalculator = () => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();
  const premiumEase = [0.25, 0.1, 0.25, 1];
  
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
  
  const estimatedServiceCost = documentsPerMonth <= 50 ? 150 : documentsPerMonth < 200 ? 180 : 250;
  const estimatedServiceCostPerYear = estimatedServiceCost * 12;
  
  const taxAdvisorBase = 150;
  const taxAdvisorPerDocument = 2.5;
  const estimatedTaxAdvisorCost = taxAdvisorBase + (documentsPerMonth * taxAdvisorPerDocument);
  
  const monthlySavings = timeValuePerMonth - estimatedServiceCost;
  const yearlySavings = timeValuePerYear - estimatedServiceCostPerYear;
  
  const savingsVsTaxAdvisorMonthly = estimatedTaxAdvisorCost - estimatedServiceCost;

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: premiumEase }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
            Ersparnis-Rechner
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            So viel können Sie sparen
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Berechnen Sie Ihr persönliches Einsparpotenzial – 
            transparent und auf Ihre Situation zugeschnitten.
          </p>
        </motion.div>

        {/* Calculator Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
          className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200"
        >
          <div className="grid lg:grid-cols-2">
            {/* Input Section */}
            <div className="p-8 lg:p-10 bg-white">
              <h3 className="text-lg font-bold text-slate-900 mb-8">Ihre Angaben</h3>
            
              <div className="space-y-8">
                {/* Hours per month */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Stunden pro Monat für Backoffice
                  </label>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-slate-900">{hoursPerMonth}</span>
                    <span className="text-slate-500">Stunden</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={hoursPerMonth}
                    onChange={(e) => setHoursPerMonth(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    style={{
                      background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((hoursPerMonth - 5) / 35) * 100}%, #e2e8f0 ${((hoursPerMonth - 5) / 35) * 100}%, #e2e8f0 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>5h</span>
                    <span>40h</span>
                  </div>
                </div>

                {/* Hourly Rate */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Wert Ihrer Arbeitszeit (€/Stunde)
                  </label>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-slate-900">{hourlyRate}</span>
                    <span className="text-slate-500">€</span>
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
                      background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((hourlyRate - 30) / 120) * 100}%, #e2e8f0 ${((hourlyRate - 30) / 120) * 100}%, #e2e8f0 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>30€</span>
                    <span>150€</span>
                  </div>
                </div>

                {/* Documents per month */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Belege pro Monat
                  </label>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-slate-900">{documentsPerMonth}</span>
                    <span className="text-slate-500">Belege</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="300"
                    step="10"
                    value={documentsPerMonth}
                    onChange={(e) => setDocumentsPerMonth(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    style={{
                      background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((documentsPerMonth - 20) / 280) * 100}%, #e2e8f0 ${((documentsPerMonth - 20) / 280) * 100}%, #e2e8f0 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>20</span>
                    <span>300</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 lg:p-10 text-white">
              <h3 className="text-lg font-bold mb-8">Ihr Sparpotenzial</h3>
              
                <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-4 border-b border-blue-700/50">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-300" />
                    <span className="text-blue-100">Zeitersparnis pro Jahr</span>
                  </div>
                  <span className="text-xl font-bold">{hoursPerYear} Stunden</span>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-blue-700/50">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-blue-300" />
                    <span className="text-blue-100">Geldwert Ihrer Zeit</span>
                  </div>
                  <span className="text-xl font-bold text-emerald-400">+{yearlySavings.toFixed(0)} €/Jahr</span>
                </div>
              </div>

              {/* Comparison */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-blue-200 mb-4 uppercase tracking-wider">Kostenvergleich</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-blue-800/30 border border-blue-700/50">
                    <div className="flex items-center gap-3">
                      <Scale className="h-5 w-5 text-blue-300" />
                      <span className="text-blue-100">Steuerberater</span>
                    </div>
                    <span className="font-semibold">{estimatedTaxAdvisorCost.toFixed(0)} €/Monat</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      <span className="text-white font-medium">Unser Service</span>
                    </div>
                    <span className="font-bold text-emerald-400">{estimatedServiceCost} €/Monat</span>
                  </div>
                </div>

                {savingsVsTaxAdvisorMonthly > 0 && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40">
                    <div className="flex items-center gap-3">
                      <Wallet className="h-5 w-5 text-emerald-300" />
                      <div>
                        <p className="text-white font-semibold">
                          {savingsVsTaxAdvisorMonthly.toFixed(0)} € pro Monat gespart
                        </p>
                        <p className="text-emerald-200/80 text-sm">
                          gegenüber klassischer Steuerberater-Lösung
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <motion.button
                onClick={handleClick}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-blue-700 font-semibold py-4 px-6 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-75 shadow-md hover:shadow-lg"
              >
                Jetzt Angebot anfordern
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
