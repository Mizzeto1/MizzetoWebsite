import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { MetricsStrip } from './components/MetricsStrip';
import { ProblemSection } from './components/ProblemSection';
import { OutcomeSection } from './components/OutcomeSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialSection } from './components/TestimonialSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7FBFC] font-['Charter',Georgia,serif]">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <OutcomeSection />
      <MetricsStrip />
      <HowItWorksSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
