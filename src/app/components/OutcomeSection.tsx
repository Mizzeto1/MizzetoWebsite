import { CheckCircle, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function OutcomeSection() {
  const outcomes = [
    {
      metric: "100%",
      icon: CheckCircle,
      title: "Complete visibility.",
      body: "Every call—transcribed, translated, and scored automatically. No more sampling.",
    },
    {
      metric: "0",
      icon: Shield,
      title: "Compliance blind spots.",
      body: "CMS-ready documentation for every single interaction, in over 30 languages.",
    },
    {
      metric: "360°",
      icon: TrendingUp,
      title: "Vendor accountability.",
      body: "See exactly how your BPOs perform in real-time. Hold external teams to internal standards.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#DBE2EF] relative">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-[#112D4E] mb-4 leading-[1.1] tracking-tight">
            What if you could QA <br />
            <span className="text-[#112D4E] relative inline-block">
              every single call?
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#3F72AF]/30 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="font-['Charter',Georgia,serif] text-[#5a7b9e] text-[15px] md:text-[18px] leading-[1.6]">
            Move from reactive sampling to proactive, total coverage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 border-t border-l border-[#DBE2EF]">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative p-6 md:p-10 lg:p-14 border-r border-b border-[#DBE2EF] bg-white flex flex-col h-full"
              >
                <div className="mb-6 md:mb-8">
                  <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[40px] md:text-[52px] lg:text-[64px] font-bold text-[#112D4E] leading-none mb-3 tracking-tighter">
                    {outcome.metric}
                  </div>
                  <div className="w-10 h-10 bg-[#3F72AF]/10 rounded-[10px] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#112D4E]" />
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[18px] md:text-[20px] font-bold text-[#112D4E] mb-2">
                    {outcome.title}
                  </h3>
                  <p className="font-['Charter',Georgia,serif] text-[#5a7b9e] text-[14px] md:text-[16px] leading-[1.6]">
                    {outcome.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}