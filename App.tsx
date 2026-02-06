import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerSection } from './components/PartnerSection';
import { ProblemSection } from './components/ProblemSection';
import { ClassicVsBackofficeSection } from './components/ClassicVsBackofficeSection';
import { SolutionSection } from './components/SolutionSection';
import { WhyUsSection } from './components/WhyUsSection';
import { PricingSection } from './components/PricingSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { QualificationPage } from './components/QualificationPage';
import { SavingsCalculator } from './components/SavingsCalculator';
import { QuickStartSection } from './components/QuickStartSection';
import { ProcessSection } from './components/ProcessSection';
import { ComparisonSection } from './components/ComparisonSection';
import { FAQSection } from './components/FAQSection';
import { ImpressumPage } from './components/ImpressumPage';
import { DatenschutzPage } from './components/DatenschutzPage';
import { ThankYouPage } from './components/ThankYouPage';
import { CookieBanner } from './components/CookieBanner';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { LoadingProvider } from './contexts/LoadingContext';
import { SlotsProvider } from './contexts/SlotsContext';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ClassicVsBackofficeSection />
      <SolutionSection />
      <SavingsCalculator />
      <QuickStartSection />
      <ProcessSection />
      <ComparisonSection />
      <WhyUsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <MobileStickyCTA />
    </>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAnfragePage = location.pathname === '/anfrage' || location.pathname === '/danke';

  return (
    <>
      <div className={`min-h-screen flex flex-col w-full overflow-x-hidden ${isHomePage || isAnfragePage ? 'bg-blue-50' : 'bg-slate-50'}`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/anfrage" element={<QualificationPage />} />
            <Route path="/danke" element={<ThankYouPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <LoadingProvider>
        <SlotsProvider>
          <AppContent />
        </SlotsProvider>
      </LoadingProvider>
    </Router>
  );
};

export default App;