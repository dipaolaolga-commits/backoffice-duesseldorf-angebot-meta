import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { AgitationSection } from './components/AgitationSection';
import { SolutionSection } from './components/SolutionSection';
import { WhyUsSection } from './components/WhyUsSection';
import { PricingSection } from './components/PricingSection';
import { LegalSection } from './components/LegalSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <AgitationSection />
        <SolutionSection />
        <WhyUsSection />
        <PricingSection />
        <LegalSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;