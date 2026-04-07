import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';

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
    },
    {
      question: "How does Mizzeto help with CMS Star Ratings and CAHPS?",
      answer: "By monitoring 100% of member interactions, Mizzeto identifies patterns that directly impact CAHPS scores—like agents failing to explain grievance rights or rushing through benefit explanations. You get targeted coaching insights instead of guessing which calls to review."
    },
    {
      question: "What languages does Mizzeto support?",
      answer: "We currently support 32+ languages with healthcare-specific terminology, including Spanish, Mandarin, Vietnamese, Korean, Tagalog, Arabic, and Haitian Creole. Our models are trained on medical vocabulary and common interpreter patterns specific to Medicare and Medicaid interactions."
    },
    {
      question: "How does pricing work?",
      answer: "Mizzeto pricing is based on call volume. We offer transparent per-call pricing with no long-term contracts required. Every plan includes unlimited users, all language support, and CMS compliance scoring. Contact us for a custom quote based on your call volume."
    },
    {
      question: "Can Mizzeto score calls against our custom QA rubrics?",
      answer: "Yes. In addition to our built-in CMS compliance scoring, you can define custom evaluation criteria that reflect your organization's specific quality standards. Mizzeto scores every call against both your custom rubrics and regulatory requirements simultaneously."
    },
  ];

  return (
    <section className="bg-[#F9F7F7] py-14 md:py-20">
      <div className="max-w-[1024px] mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[26px] md:text-[34px] font-semibold text-[#112D4E] mb-4 leading-[1.2] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5a7b9e] text-[14px] md:text-[16px] leading-[1.6] font-['Charter',Georgia,serif]">
            Everything you need to know about implementing automated QA in your contact center.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-[12px] border border-[#DBE2EF] overflow-hidden transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(17,45,78,0.06)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F72AF] focus-visible:ring-offset-2 rounded-[12px]"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[15px] md:text-[17px] font-medium text-[#112D4E] pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#112D4E] text-white' : 'bg-[#F9F7F7] text-[#112D4E]'}`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-[#5a7b9e] text-[13px] md:text-[15px] leading-[1.7] font-['Charter',Georgia,serif]">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
