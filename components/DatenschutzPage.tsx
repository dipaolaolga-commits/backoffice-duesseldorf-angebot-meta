import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DatenschutzPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Allgemeine Hinweise</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Datenerfassung auf dieser Website</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Datenschutz</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf dieser Seite personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Wir behalten uns ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-slate-50 rounded-xl p-4 mb-4 border border-slate-200">
                <p className="text-slate-700 leading-relaxed">
                  <strong>Fabrizia Di Paola</strong><br />
                  Paulusstraße 8<br />
                  40237 Düsseldorf<br />
                  <br />
                  E-Mail: <a href="mailto:Info@backoffice-service.net" className="text-blue-600 hover:text-blue-700 underline">Info@backoffice-service.net</a>
                </p>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Kontaktformular</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Google Analytics</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited („Google"). Google Analytics verwendet „Cookies", Textdateien, die auf Ihrem Gerät gespeichert werden und eine Analyse der Nutzung der Website ermöglichen. Die durch Cookies erzeugten Informationen über Ihre Nutzung dieser Website werden in der Regel an einen Server von Google übertragen und dort gespeichert.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Google Analytics wird ausschließlich mit der Erweiterung "_anonymizeIp()" genutzt. Dadurch wird Ihre IP-Adresse gekürzt und anonymisiert, um einen direkten Personenbezug auszuschließen.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Die Rechtsgrundlage für die Nutzung von Google Analytics ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookie-Einstellungen in Ihrem Browser ändern oder das Opt-Out-Cookie setzen.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Widerruf der Einwilligung zur Datenerhebung</strong><br />
                Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Alternativ können Sie die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie das folgende Opt-Out-Cookie setzen:
              </p>
              <div className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-200">
                <p className="text-slate-700 leading-relaxed">
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout?hl=de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline font-medium"
                  >
                    Google Analytics deaktivieren
                  </a>
                </p>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Weitere Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">https://support.google.com/analytics/answer/6004245?hl=de</a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Ihre Rechte</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Sie haben jederzeit das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. Außerdem haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten sowie das Recht auf Datenübertragbarkeit.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden: <a href="mailto:Info@backoffice-service.net" className="text-blue-600 hover:text-blue-700 underline">Info@backoffice-service.net</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
