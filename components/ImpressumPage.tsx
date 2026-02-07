import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 pt-36 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Startseite
          </Link>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border border-slate-200/60 p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Impressum</h1>

          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="text-slate-700 leading-relaxed space-y-2">
                <p className="font-semibold">Fabrizia Di Paola</p>
                <p>Paulusstraße 8</p>
                <p>40237 Düsseldorf</p>
                <p className="mt-4">
                  <strong>Kontakt:</strong><br />
                  E-Mail: <a href="mailto:Info@backoffice-service.net" className="text-blue-600 hover:text-blue-700 underline">Info@backoffice-service.net</a>
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Inhaberin und inhaltlich verantwortlich</h2>
              <div className="text-slate-700 leading-relaxed">
                <p>Fabrizia Di Paola</p>
                <p className="mt-2">
                  E-Mail: <a href="mailto:Info@backoffice-service.net" className="text-blue-600 hover:text-blue-700 underline">Info@backoffice-service.net</a>
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Haftung für Inhalte</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf dieser Seite nach den allgemeinen Gesetzen verantwortlich.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Haftung für Links</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Urheberrecht</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Seite unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechende Inhalte als solche gekennzeichnet. Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
