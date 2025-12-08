import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoading } from '../contexts/LoadingContext';

export const PricingSection = () => {
  const navigate = useNavigate();
  const { navigateWithLoading, isLoading } = useLoading();
  const premiumEase = [0.25, 0.1, 0.25, 1];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithLoading(() => navigate('/anfrage'), 1500);
  };

  const plans = [
    {
      name: 'Starter',
      subtitle: 'bis 50 Belege',
      price: '150',
      brutto: '178,50',
      popular: false,
    },
    {
      name: 'Business',
      subtitle: 'bis 80 Belege',
      price: '180',
      brutto: '214,20',
      popular: true,
    },
    {
      name: 'Premium',
      subtitle: 'ab 80 Belege',
      price: '250',
      brutto: '297,50',
      popular: false,
    },
  ];

  const features = [
    'Einrichtung der Finanzbuchhaltung',
    'Bank- und Kassenerfassung',
    'Umsatzsteuer-Vorbereitung',
    'Monatsreport mit Gewinnübersicht',
    'Digitale Belegaufbewahrung',
    'Vorbereitung der EÜR',
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.20]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: premiumEase }}
        >
          <motion.span 
            className="inline-block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4"
          >
            Preise
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Transparent & fair.
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Wählen Sie das Paket, das zu Ihrem Unternehmen passt. 
            Keine versteckten Kosten, keine Überraschungen.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + (index * 0.1), ease: premiumEase }}
              className="relative flex flex-col"
            >
              <div className={`
                flex-1 rounded-2xl p-7 lg:p-8 border transition-all duration-500
                bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl
              `}>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1 text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="text-base text-slate-500">
                    {plan.subtitle}
                  </p>
                </div>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">
                      {plan.price} €
                    </span>
                    <span className="text-sm text-slate-500">
                      / Monat
                    </span>
                  </div>
                  <p className="text-xs mt-1 text-slate-400">
                    brutto {plan.brutto} €
                  </p>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-emerald-50">
                        <Check className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="text-base text-slate-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <motion.button
                  onClick={handleClick}
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-75"
                >
                  Jetzt starten
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: premiumEase }}
        >
          <div className="inline-flex items-center gap-2 text-sm text-slate-500">
            <Shield className="h-4 w-4 text-emerald-500" />
            <span>Jederzeit kündbar • Keine Mindestlaufzeit</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
