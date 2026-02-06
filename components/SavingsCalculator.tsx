import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLoading } from '../contexts/LoadingContext';
import { SlotsCounter } from './SlotsCounter';

const BUCHFUEHRUNGSSATZ = 80;   // €/Std. (realistischer Mischwert für Kanzleien)
const AKTIONSPAUSCHALE = 105;   // €/Monat (Backoffice Aktions-Tarif)

export const SavingsCalculator = () => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();
  const premiumEase = [0.25, 0.1, 0.25, 1];

  const [hoursPerMonth, setHoursPerMonth] = useState(5);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithLoading(() => navigate('/anfrage'), 1500);
  };

  const costSteuerberaterPerMonth = hoursPerMonth * BUCHFUEHRUNGSSATZ;
  const savingsPerMonth = Math.max(0, costSteuerberaterPerMonth - AKTIONSPAUSCHALE);
  const savingsPerYear = savingsPerMonth * 12;

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15, 23, 42) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: premiumEase }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
            Rechner
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Rechnen Sie nach: So viel Geld verbrennen Sie aktuell.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
          className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200"
        >
          <div className="p-8 lg:p-10">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Wie viel Zeitaufwand (in Std.) verursacht Ihre Buchhaltung monatlich beim Steuerberater?
            </label>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-slate-900">{hoursPerMonth}</span>
              <span className="text-slate-500">Std.</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={hoursPerMonth}
              onChange={(e) => setHoursPerMonth(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              style={{
                background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((hoursPerMonth - 1) / 9) * 100}%, #e2e8f0 ${((hoursPerMonth - 1) / 9) * 100}%, #e2e8f0 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-slate-400 mt-2">
              <span>1 Std.</span>
              <span>10 Std.</span>
            </div>

            {/* Rote Box (Steuerberater) + Grüne Box (Backoffice) */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                <p className="font-semibold text-red-800">Klassisches Steuerbüro</p>
                <p className="text-red-700 mt-1">
                  {hoursPerMonth} Std. × {BUCHFUEHRUNGSSATZ} € (Durchschnitt) = {costSteuerberaterPerMonth.toFixed(0)} € / Monat
                </p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <p className="font-semibold text-emerald-800">Backoffice Aktions-Tarif</p>
                <p className="text-emerald-700 mt-1">ab {AKTIONSPAUSCHALE} €</p>
              </div>
            </div>

            {/* Blauer Ergebnis-Balken */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 text-white text-center">
              <p className="text-blue-200 text-sm font-medium mb-2">Sie sparen monatlich:</p>
              <p className="text-3xl font-bold text-white mb-4">
                {savingsPerMonth.toLocaleString('de-DE')} €
              </p>
              <p className="text-blue-200 text-sm font-medium mb-1">Sie sparen jährlich:</p>
              <p className="text-4xl font-bold text-white">
                {savingsPerYear.toLocaleString('de-DE')} €
              </p>
            </div>

            <div className="mt-8">
              <motion.button
                type="button"
                onClick={handleClick}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 rounded-xl text-base font-semibold bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-75 flex items-center justify-center gap-2"
              >
                Jetzt Angebot anfordern
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <div className="mt-4 flex justify-center">
                <SlotsCounter />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
