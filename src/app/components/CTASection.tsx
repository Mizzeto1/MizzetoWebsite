import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';

export function CTASection() {
  return (
    <section className="bg-[#112d28] py-32 relative overflow-hidden text-center flex items-center justify-center">
      {/* Decorative background shapes */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7da17e]/50 to-transparent opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#7da17e]/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7da17e]/10 border border-[#7da17e]/20 text-[#7da17e] text-[14px] font-bold tracking-[0.1em] uppercase font-['Instrument_Sans',system-ui,sans-serif] mb-8">
            Ready to upgrade?
          </div>
          
          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[48px] md:text-[64px] font-bold text-white mb-8 leading-[1.05] tracking-tight text-center">
            Stop sampling. <br className="hidden md:block"/>
            <span className="text-[#98b6b0]">Start auditing 100%.</span>
          </h2>
          
          <p className="text-[#d6e0e2] text-[20px] md:text-[24px] leading-[1.6] max-w-2xl mx-auto mb-12 font-['Charter',Georgia,serif] text-center">
            Book a demo to see how Mizzeto finds the compliance insights and language gaps you've been missing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md mx-auto">
            <button className="flex-1 bg-[#7da17e] hover:bg-[#6c8d6d] text-[#0a1f1b] px-8 py-5 rounded-[12px] font-['Instrument_Sans',system-ui,sans-serif] font-bold text-[18px] transition-all shadow-[0_8px_24px_-8px_rgba(125,161,126,0.6)] hover:shadow-[0_12px_32px_-12px_rgba(125,161,126,0.8)] flex items-center justify-center gap-2 hover:-translate-y-1 duration-300 group">
              Get a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="flex-1 bg-[#112d28] border-2 border-[#163f38] text-white hover:bg-[#163f38] hover:border-[#7da17e]/50 px-8 py-5 rounded-[12px] font-['Instrument_Sans',system-ui,sans-serif] font-bold text-[18px] transition-all flex items-center justify-center gap-2 hover:-translate-y-1 duration-300">
              <Play className="w-5 h-5 fill-current" />
              Watch Video
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
