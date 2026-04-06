import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { OutcomeSection } from './components/OutcomeSection';
import { FeatureSection } from './components/FeatureSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialSection } from './components/TestimonialSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--mz-surface)] font-['Charter',Georgia,serif]">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <OutcomeSection />
      <FeatureSection />
      <HowItWorksSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
