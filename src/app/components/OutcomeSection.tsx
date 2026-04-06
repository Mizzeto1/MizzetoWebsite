import { CheckCircle, Shield, TrendingUp, ArrowUpRight } from 'lucide-react';
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
    <section className="bg-white py-32 border-b border-[#E5E5E5] relative">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Section Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[44px] md:text-[56px] font-semibold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
            What if you could QA <br/>
            <span className="text-[#163f38] relative inline-block">
              every single call?
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#7da17e]/30 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="font-['Charter',Georgia,serif] text-[#5a5a5a] text-[20px] md:text-[24px] leading-[1.6]">
            Move from reactive sampling to proactive, total coverage.
          </p>
        </motion.div>

        {/* High-End Editorial Grid Layout */}
        <div className="grid md:grid-cols-3 border-t border-l border-[#E5E5E5]">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative p-10 lg:p-14 border-r border-b border-[#E5E5E5] bg-white hover:bg-[#f7f6f9] transition-colors duration-500 flex flex-col h-full"
              >
                {/* Subtle Hover Reveal Arrow */}
                <div className="absolute top-8 right-8 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6 text-[#163f38]/40" />
                </div>

                <div className="mb-12">
                  <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[64px] lg:text-[80px] font-bold text-[#163f38] leading-none mb-6 tracking-tighter">
                    {outcome.metric}
                  </div>
                  <div className="w-12 h-12 bg-[#7da17e]/10 rounded-[12px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#163f38]" />
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[24px] font-bold text-[#1a1a1a] mb-4">
                    {outcome.title}
                  </h3>
                  <p className="font-['Charter',Georgia,serif] text-[#5a5a5a] text-[18px] leading-[1.6]">
                    {outcome.body}
                  </p>
                </div>
                
                {/* Subtle bottom border highlight on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#163f38] group-hover:w-full transition-all duration-500 ease-out"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
