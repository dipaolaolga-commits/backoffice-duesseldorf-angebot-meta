import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerSection } from './components/PartnerSection';
import { ProblemSection } from './components/ProblemSection';
import { AgitationSection } from './components/AgitationSection';
import { SolutionSection } from './components/SolutionSection';
import { WhyUsSection } from './components/WhyUsSection';
import { PricingSection } from './components/PricingSection';
import { LegalSection } from './components/LegalSection';
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
import { LoadingProvider } from './contexts/LoadingContext';
import { ScrollToTop } from './components/ScrollToTop';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <AgitationSection />
      <SolutionSection />
      <SavingsCalculator />
      <QuickStartSection />
      <ProcessSection />
      <ComparisonSection />
      <WhyUsSection />
      <PricingSection />
      <LegalSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

const AppContent = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50 flex flex-col w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vorqualifizierung" element={<QualificationPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </Router>
  );
};

export default App;