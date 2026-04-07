import { EyeOff, Box, Globe, AlertTriangle, ShieldAlert, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemSection() {
  const dots = Array.from({ length: 30 }, (_, i) => i);

  return (
    <section id="product" className="bg-[#0a1525] relative overflow-hidden text-white py-12 md:py-16 border-y border-[#112D4E]/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(63,114,175,0.15)_0%,rgba(10,21,37,1)_70%)] pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3F72AF]/40 to-transparent"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold tracking-[0.1em] uppercase font-['Instrument_Sans',system-ui,sans-serif] mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            The QA Blind Spot
          </div>
          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[22px] md:text-[28px] lg:text-[32px] font-bold text-white leading-[1.15] max-w-2xl mx-auto tracking-tight">
            CMS doesn't audit your sample. <br className="hidden md:block" />
            <span className="text-[#5a7b9e]">They audit the call that went wrong.</span>
          </h2>
        </motion.div>

        {/* Bento Box Grid — 3 equal columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Card 1: The 98% Blind Spot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-[#0d1f35] to-[#081525] rounded-[12px] p-5 border border-[#112D4E]/50 relative overflow-hidden flex flex-col"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4">
                <div className="w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-[8px] flex items-center justify-center mb-3 text-red-400">
                  <EyeOff className="w-4 h-4" />
                </div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[15px] font-bold text-white mb-1.5 leading-tight">
                  You're sampling 2% of calls. The other 98% are a liability.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#8a9bb8] text-[12px] leading-[1.5]">
                  Manual QA teams can only review a fraction of interactions. Compliance breaches happen in the dark.
                </p>
              </div>

              <div className="bg-[#060f1c] border border-[#112D4E]/40 rounded-[8px] p-3 mt-auto relative">
                <div className="flex items-center justify-end gap-2 text-[10px] font-bold font-['Instrument_Sans',system-ui,sans-serif] mb-2">
                  <div className="flex items-center gap-1 text-[#3F72AF]"><div className="w-1.5 h-1.5 rounded-full bg-[#3F72AF] shadow-[0_0_6px_#3F72AF]"></div> Audited</div>
                  <div className="flex items-center gap-1 text-[#2a3d5e]"><div className="w-1.5 h-1.5 rounded-full bg-[#1a2d4e]"></div> Invisible</div>
                </div>
                <div className="grid grid-cols-10 gap-1">
                  {dots.map((dot) => {
                    const isAudited = dot < 1;
                    return (
                      <motion.div
                        key={dot}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: isAudited ? 1 : 0.2, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: dot * 0.01 }}
                        className={`aspect-square rounded-full ${isAudited
                          ? 'bg-[#3F72AF] shadow-[0_0_8px_#3F72AF]'
                          : 'bg-[#1a2d4e]'
                          }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Vendor Black Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-b from-[#0d1f35] to-[#081525] rounded-[12px] p-5 border border-[#112D4E]/50 relative overflow-hidden flex flex-col"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4">
                <div className="w-8 h-8 bg-orange-500/10 border border-orange-500/20 rounded-[8px] flex items-center justify-center mb-3 text-orange-400">
                  <Box className="w-4 h-4" />
                </div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[15px] font-bold text-white mb-1.5 leading-tight">
                  External vendors are a black box.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#8a9bb8] text-[12px] leading-[1.5]">
                  BPOs send shiny summary reports, but you can't hear what members actually hear.
                </p>
              </div>

              <div className="bg-[#060f1c] border border-[#112D4E]/40 rounded-[8px] p-3 mt-auto relative overflow-hidden">
                <div className="space-y-2 opacity-30 blur-[3px] select-none">
                  <div className="h-2.5 w-3/4 bg-[#1a2d4e] rounded"></div>
                  <div className="h-2.5 w-1/2 bg-[#1a2d4e] rounded"></div>
                  <div className="h-10 w-full bg-[#1a2d4e] rounded mt-2"></div>
                  <div className="flex gap-1.5 mt-2">
                    <div className="h-5 w-12 bg-green-900/50 rounded"></div>
                    <div className="h-5 w-12 bg-red-900/50 rounded"></div>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#060f1c]/60 backdrop-blur-[2px]">
                  <div className="w-10 h-10 bg-[#0d1f35] border border-[#112D4E] rounded-full flex items-center justify-center shadow-2xl mb-1.5">
                    <Lock className="w-4 h-4 text-[#5a7b9e]" />
                  </div>
                  <div className="text-[10px] font-bold font-['Instrument_Sans',system-ui,sans-serif] text-[#5a7b9e] uppercase tracking-widest">
                    Access Denied
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Language Barrier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-b from-[#0d1f35] to-[#081525] rounded-[12px] p-5 border border-[#112D4E]/50 relative overflow-hidden flex flex-col"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4">
                <div className="w-8 h-8 bg-purple-500/10 border border-purple-500/20 rounded-[8px] flex items-center justify-center mb-3 text-purple-400">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[15px] font-bold text-white mb-1.5 leading-tight">
                  Lost in translation.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#8a9bb8] text-[12px] leading-[1.5]">
                  Non-English calls go entirely unreviewed. You're blindly trusting interpreters.
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                <div className="bg-[#060f1c] border border-[#112D4E]/40 rounded-[8px] p-2.5 flex items-center gap-2">
                  <div className="px-2 py-0.5 bg-[#112D4E]/50 text-[#3F72AF] text-[9px] font-bold uppercase rounded w-16 text-center border border-[#3F72AF]/30">English</div>
                  <div className="flex-1 flex items-center gap-[2px] h-4">
                    {[10, 40, 20, 60, 80, 40, 20, 90].map((h, i) => (
                      <div key={i} className="w-1 bg-[#3F72AF] rounded-full" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="text-[10px] text-[#3F72AF] font-bold font-mono">100%</div>
                </div>

                <div className="bg-[#060f1c] border border-red-500/20 rounded-[8px] p-2.5 flex items-center gap-2 relative overflow-hidden">
                  <div className="px-2 py-0.5 bg-red-900/30 text-red-400 text-[9px] font-bold uppercase rounded w-16 text-center border border-red-500/30 relative z-10">Spanish</div>
                  <div className="flex-1 flex items-center gap-[2px] h-4 opacity-30 relative z-10">
                    {[30, 20, 50, 90, 40, 70, 30, 60].map((h, i) => (
                      <div key={i} className="w-1 bg-red-400 rounded-full" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-red-400 font-bold font-mono relative z-10">
                    <ShieldAlert className="w-3 h-3" /> 0%
                  </div>
                </div>

                <div className="bg-[#060f1c] border border-red-500/20 rounded-[8px] p-2.5 flex items-center gap-2 relative overflow-hidden">
                  <div className="px-2 py-0.5 bg-red-900/30 text-red-400 text-[9px] font-bold uppercase rounded w-16 text-center border border-red-500/30 relative z-10">Mandarin</div>
                  <div className="flex-1 flex items-center gap-[2px] h-4 opacity-30 relative z-10">
                    {[50, 70, 30, 20, 80, 40, 90, 50].map((h, i) => (
                      <div key={i} className="w-1 bg-red-400 rounded-full" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-red-400 font-bold font-mono relative z-10">
                    <ShieldAlert className="w-3 h-3" /> 0%
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
