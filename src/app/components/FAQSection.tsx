import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Mizzeto handle interpreter lines?",
      answer: "Our models are uniquely trained on multi-party, bilingual conversations. When an interpreter is on the line, Mizzeto attributes speakers correctly and analyzes both the English and non-English segments to ensure nothing gets lost in translation."
    },
    {
      question: "Is Mizzeto compliant with HIPAA and CMS regulations?",
      answer: "Yes, our platform is built specifically for healthcare. All data is encrypted at rest and in transit. We maintain SOC 2 Type II compliance and offer BAA agreements out of the box."
    },
    {
      question: "Can it integrate with our existing contact center (e.g., Genesys, NICE)?",
      answer: "Absolutely. Mizzeto offers pre-built integrations for major CCaaS providers and secure APIs for custom or legacy setups. We ingest call recordings and metadata securely without disrupting your existing workflows."
    },
    {
      question: "How quickly can we see results after deployment?",
      answer: "Most of our customers see actionable insights within 48 hours of connecting their audio streams. Because we automate the QA process, you skip the manual rubric creation and jump straight to analysis."
    }
  ];

  return (
    <section className="bg-[#f7f6f9] py-24 md:py-32">
      <div className="max-w-[1024px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[40px] font-semibold text-[#1a1a1a] mb-6 leading-[1.2]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5a5a5a] text-[18px] leading-[1.6]">
            Everything you need to know about implementing automated QA in your contact center.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-[12px] border border-[#E5E5E5] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[20px] font-medium text-[#1a1a1a]">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 p-2 rounded-full ${isOpen ? 'bg-[#163f38]/10' : 'bg-[#f7f6f9]'}`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#163f38]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#163f38]" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-[#5a5a5a] text-[16px] leading-[1.6] font-['Charter',Georgia,serif]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
