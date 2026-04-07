import { EyeOff, Box, Globe, AlertTriangle, ShieldAlert, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemSection() {
  const dots = Array.from({ length: 100 }, (_, i) => i);

  return (
    <section id="product" className="bg-[#0a1525] relative overflow-hidden text-white py-16 md:py-24 border-y border-[#112D4E]/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(63,114,175,0.15)_0%,rgba(10,21,37,1)_70%)] pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3F72AF]/40 to-transparent"></div>
      <div className="absolute -left-[20%] top-1/4 w-[800px] h-[800px] bg-[#112D4E]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute -right-[10%] bottom-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] md:text-[13px] font-bold tracking-[0.1em] uppercase font-['Instrument_Sans',system-ui,sans-serif] mb-4 shadow-[0_0_20px_rgba(239,68,68,0.15)]">
            <AlertTriangle className="w-4 h-4" />
            The QA Blind Spot
          </div>
          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[26px] md:text-[44px] font-bold text-white leading-[1.1] max-w-4xl mx-auto tracking-tight">
            CMS doesn't audit your sample. <br className="hidden md:block" />
            <span className="text-[#5a7b9e]">They audit the call that went wrong.</span>
          </h2>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Card 1: The 98% Blind Spot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-gradient-to-b from-[#0d1f35] to-[#081525] rounded-[16px] md:rounded-[24px] p-5 md:p-10 border border-[#112D4E]/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="mb-12">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-[12px] flex items-center justify-center mb-6 text-red-400">
                  <EyeOff className="w-6 h-6" />
                </div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[24px] font-bold text-white mb-3 leading-tight">
                  You're sampling 2% of calls.<br />The other 98% are a liability.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#8a9bb8] text-[16px] leading-[1.6] max-w-md">
                  Manual QA teams can only review a fraction of interactions. Compliance breaches happen in the dark, and you only find out when the fines hit.
                </p>
              </div>

              {/* Data Visualization: 100 Dots */}
              <div className="bg-[#060f1c] border border-[#112D4E]/40 rounded-[16px] p-6 shadow-inner relative">
                <div className="absolute top-4 right-4 flex items-center gap-3 text-[12px] font-bold font-['Instrument_Sans',system-ui,sans-serif]">
                  <div className="flex items-center gap-1.5 text-[#3F72AF]"><div className="w-2 h-2 rounded-full bg-[#3F72AF] shadow-[0_0_8px_#3F72AF]"></div> Audited (2%)</div>
                  <div className="flex items-center gap-1.5 text-[#2a3d5e]"><div className="w-2 h-2 rounded-full bg-[#1a2d4e]"></div> Invisible (98%)</div>
                </div>

                <div className="grid grid-cols-10 gap-2 mt-8">
                  {dots.map((dot) => {
                    const isAudited = dot < 2;
                    return (
                      <motion.div
                        key={dot}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: isAudited ? 1 : 0.2, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: dot * 0.008 }}
                        className={`aspect-square rounded-full ${isAudited
                          ? 'bg-[#3F72AF] shadow-[0_0_12px_#3F72AF]'
                          : 'bg-[#1a2d4e]'
                          }`}
                      />
                    );
                  })}
                </div>

                {/* Scanning Laser Effect */}
                <motion.div
                  animate={{ left: ['0%', '100%', '0%'] }}
                  transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                  className="absolute top-0 bottom-0 w-[2px] bg-red-500/30 blur-[2px] z-20"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-full bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Vendor Black Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 bg-gradient-to-b from-[#0d1f35] to-[#081525] rounded-[16px] md:rounded-[24px] p-5 md:p-10 border border-[#112D4E]/50 relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="mb-8">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-[10px] flex items-center justify-center mb-4 text-orange-400">
                  <Box className="w-6 h-6" />
                </div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[18px] md:text-[20px] font-bold text-white mb-2 leading-tight">
                  External vendors are a black box.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#8a9bb8] text-[13px] md:text-[15px] leading-[1.6]">
                  BPOs send shiny summary reports, but you can't hear what members actually hear. You lack the raw evidence to challenge their scores.
                </p>
              </div>

              <div className="bg-[#060f1c] border border-[#112D4E]/40 rounded-[16px] p-5 relative overflow-hidden">
                <div className="space-y-3 opacity-30 blur-[3px] select-none">
                  <div className="h-4 w-3/4 bg-[#1a2d4e] rounded"></div>
                  <div className="h-4 w-1/2 bg-[#1a2d4e] rounded"></div>
                  <div className="h-20 w-full bg-[#1a2d4e] rounded mt-4"></div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-8 w-16 bg-green-900/50 rounded"></div>
                    <div className="h-8 w-16 bg-red-900/50 rounded"></div>
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#060f1c]/60 backdrop-blur-[2px]">
                  <div className="w-14 h-14 bg-[#0d1f35] border border-[#112D4E] rounded-full flex items-center justify-center shadow-2xl mb-3">
                    <Lock className="w-6 h-6 text-[#5a7b9e]" />
                  </div>
                  <div className="text-[12px] font-bold font-['Instrument_Sans',system-ui,sans-serif] text-[#5a7b9e] uppercase tracking-widest">
                    Raw Audio Access Denied
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Language Barrier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-12 bg-gradient-to-r from-[#0d1f35] via-[#091828] to-[#0d1f35] rounded-[16px] md:rounded-[24px] p-5 md:p-10 border border-[#112D4E]/50 relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-[12px] flex items-center justify-center mb-6 text-purple-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[24px] font-bold text-white mb-3 leading-tight">
                  Lost in translation.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#8a9bb8] text-[14px] md:text-[16px] leading-[1.6]">
                  If your QA team only speaks English, millions of translated calls go entirely unreviewed. You are blindly trusting interpreters with strict CMS compliance scripts.
                </p>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                {/* English - Safe */}
                <div className="bg-[#060f1c] border border-[#112D4E]/40 rounded-[12px] p-4 flex items-center gap-4">
                  <div className="px-3 py-1 bg-[#112D4E]/50 text-[#3F72AF] text-[11px] font-bold uppercase rounded-[4px] border border-[#3F72AF]/30 w-24 text-center">English</div>
                  <div className="flex-1 flex items-center gap-1 h-6">
                    {[10, 40, 20, 60, 80, 40, 20, 90, 50, 30].map((h, i) => (
                      <div key={i} className="w-1.5 bg-[#3F72AF] rounded-full" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="text-[12px] text-[#3F72AF] font-bold font-mono">100% QA</div>
                </div>

                {/* Spanish */}
                <div className="bg-[#060f1c] border border-red-500/20 rounded-[12px] p-4 flex items-center gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-500/5 mix-blend-screen"></div>
                  <div className="px-3 py-1 bg-red-900/30 text-red-400 text-[11px] font-bold uppercase rounded-[4px] border border-red-500/30 w-24 text-center relative z-10">Spanish</div>
                  <div className="flex-1 flex items-center gap-1 h-6 opacity-30 relative z-10">
                    {[30, 20, 50, 90, 40, 70, 30, 60, 20, 40].map((h, i) => (
                      <div key={i} className="w-1.5 bg-red-400 rounded-full" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-red-400 font-bold font-mono relative z-10">
                    <ShieldAlert className="w-3.5 h-3.5" /> 0% QA
                  </div>
                </div>

                {/* Mandarin */}
                <div className="bg-[#060f1c] border border-red-500/20 rounded-[12px] p-4 flex items-center gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-500/5 mix-blend-screen"></div>
                  <div className="px-3 py-1 bg-red-900/30 text-red-400 text-[11px] font-bold uppercase rounded-[4px] border border-red-500/30 w-24 text-center relative z-10">Mandarin</div>
                  <div className="flex-1 flex items-center gap-1 h-6 opacity-30 relative z-10">
                    {[50, 70, 30, 20, 80, 40, 90, 50, 20, 60].map((h, i) => (
                      <div key={i} className="w-1.5 bg-red-400 rounded-full" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-red-400 font-bold font-mono relative z-10">
                    <ShieldAlert className="w-3.5 h-3.5" /> 0% QA
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