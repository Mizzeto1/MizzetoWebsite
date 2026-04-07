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
    <section className="bg-[#F9F7F7] py-14 md:py-20">
      <div className="max-w-[1024px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[26px] md:text-[34px] font-semibold text-[#112D4E] mb-4 leading-[1.2]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5a7b9e] text-[14px] md:text-[16px] leading-[1.6]">
            Everything you need to know about implementing automated QA in your contact center.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-[12px] border border-[#DBE2EF] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[15px] md:text-[18px] font-medium text-[#112D4E]">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 p-2 rounded-full ${isOpen ? 'bg-[#112D4E]/10' : 'bg-[#F9F7F7]'}`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#112D4E]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#112D4E]" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 md:p-6 pt-0 text-[#5a7b9e] text-[13px] md:text-[15px] leading-[1.6] font-['Charter',Georgia,serif]">
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