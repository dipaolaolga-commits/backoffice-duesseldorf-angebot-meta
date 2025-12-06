import { Calendar } from 'lucide-react';

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-blue-600 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-50"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-80 h-80 bg-blue-700 rounded-full opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Lassen Sie uns 15 Minuten sprechen – <br className="hidden md:block"/>
          und sofort Klarheit schaffen.
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Unverbindlich. Kostenlos. Sie sagen uns, wo Sie stehen. Wir zeigen Ihnen, wie Sie Monat für Monat entlastet werden.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#contact" 
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center text-lg"
            aria-label="Jetzt Erstgespräch buchen"
          >
            <Calendar className="mr-2 h-6 w-6" aria-hidden="true" />
            🎯 Jetzt Erstgespräch buchen
          </a>
        </div>
        
        <p className="mt-8 text-sm text-blue-200 opacity-80">
          Keine Verpflichtung. Einfach ein gutes Gespräch.
        </p>
      </div>
    </section>
  );
};