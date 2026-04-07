import { ArrowRight, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export function CTASection() {
  return (
    <section className="bg-[#112D4E] py-16 md:py-24 relative overflow-hidden text-center flex items-center justify-center">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3F72AF]/50 to-transparent opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#3F72AF]/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F72AF]/10 border border-[#3F72AF]/20 text-[#3F72AF] text-[14px] font-bold tracking-[0.1em] uppercase font-['Instrument_Sans',system-ui,sans-serif] mb-8">
            Ready to upgrade?
          </div>

          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[30px] md:text-[40px] lg:text-[52px] font-bold text-white mb-5 leading-[1.05] tracking-tight text-center">
            Stop sampling. <br className="hidden md:block" />
            <span className="text-[#a8b8d4]">Start auditing 100%.</span>
          </h2>

          <p className="text-[#DBE2EF] text-[15px] md:text-[18px] leading-[1.6] max-w-2xl mx-auto mb-8 font-['Charter',Georgia,serif] text-center">
            See how Mizzeto finds the compliance insights and language gaps you've been missing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 w-full max-w-xl mx-auto">
            <button className="flex-1 bg-[#3F72AF] hover:bg-[#2d5a8f] text-white px-6 py-3.5 rounded-[10px] font-['Instrument_Sans',system-ui,sans-serif] font-bold text-[14px] md:text-[16px] transition-all shadow-[0_8px_24px_-8px_rgba(63,114,175,0.6)] hover:shadow-[0_12px_32px_-12px_rgba(63,114,175,0.8)] flex items-center justify-center gap-2 hover:-translate-y-1 duration-300 group">
              Book a 15-Minute Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="flex-1 bg-[#112D4E] border-2 border-[#3F72AF]/40 text-white hover:bg-[#1a3d62] hover:border-[#3F72AF]/60 px-6 py-3.5 rounded-[10px] font-['Instrument_Sans',system-ui,sans-serif] font-bold text-[14px] md:text-[16px] transition-all flex items-center justify-center gap-2 hover:-translate-y-1 duration-300">
              <Headphones className="w-5 h-5" />
              Free 1,000-Call Audit
            </button>
          </div>

          <p className="text-[#5a7b9e] text-[12px] md:text-[14px] mt-5 font-['Instrument_Sans',system-ui,sans-serif]">
            No credit card required. Results in under 48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}