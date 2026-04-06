import { EyeOff, Box, Globe, AlertTriangle, ShieldAlert, Lock, Mic, Waveform } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemSection() {
  // Generate 100 dots to represent 100% of calls
  const dots = Array.from({ length: 100 }, (_, i) => i);

  return (
    <section className="bg-[#030b09] relative overflow-hidden text-white py-32 md:py-40 border-y border-[#163f38]/30">
      {/* Intense dark mode background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,63,56,0.15)_0%,rgba(3,11,9,1)_70%)] pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7da17e]/40 to-transparent"></div>
      <div className="absolute -left-[20%] top-1/4 w-[800px] h-[800px] bg-[#163f38]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute -right-[10%] bottom-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[13px] font-bold tracking-[0.1em] uppercase font-['Instrument_Sans',system-ui,sans-serif] mb-6 shadow-[0_0_20px_rgba(239,68,68,0.15)]">
            <AlertTriangle className="w-4 h-4" />
            The QA Blind Spot
          </div>
          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[40px] md:text-[56px] font-bold text-white leading-[1.05] max-w-4xl mx-auto tracking-tight">
            CMS doesn't audit your sample. <br className="hidden md:block"/>
            <span className="text-[#5a6b68]">They audit the call that went wrong.</span>
          </h2>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: The 98% Blind Spot (Large Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-gradient-to-b from-[#0a1a17] to-[#050e0c] rounded-[24px] p-8 md:p-10 border border-[#163f38]/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="mb-12">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-[12px] flex items-center justify-center mb-6 text-red-400">
                  <EyeOff className="w-6 h-6" />
                </div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[28px] font-bold text-white mb-3 leading-tight">
                  You're sampling 2% of calls.<br/>The other 98% are a liability.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#8a9b98] text-[18px] leading-[1.6] max-w-md">
                  Manual QA teams can only review a fraction of interactions. Compliance breaches happen in the dark, and you only find out when the fines hit.
                </p>
              </div>

              {/* Data Visualization: 100 Dots */}
              <div className="bg-[#020706] border border-[#163f38]/40 rounded-[16px] p-6 shadow-inner relative">
                <div className="absolute top-4 right-4 flex items-center gap-3 text-[12px] font-bold font-['Instrument_Sans',system-ui,sans-serif]">
                  <div className="flex items-center gap-1.5 text-[#7da17e]"><div className="w-2 h-2 rounded-full bg-[#7da17e] shadow-[0_0_8px_#7da17e]"></div> Audited (2%)</div>
                  <div className="flex items-center gap-1.5 text-[#3a4b48]"><div className="w-2 h-2 rounded-full bg-[#1a2b28]"></div> Invisible (98%)</div>
                </div>
                
                <div className="grid grid-cols-10 sm:grid-cols-20 gap-2 mt-8">
                  {dots.map((dot) => {
                    const isAudited = dot < 2;
                    return (
                      <motion.div
                        key={dot}
                        animate={isAudited ? 
                          { opacity: [0.8, 1, 0.8], scale: [1, 1.1, 1] } : 
                          { opacity: [0.1, 0.3, 0.1] }
                        }
                        transition={{ 
                          duration: isAudited ? 2 : Math.random() * 3 + 2, 
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                        className={`aspect-square rounded-full ${
                          isAudited 
                            ? 'bg-[#7da17e] shadow-[0_0_12px_#7da17e]' 
                            : 'bg-[#1a2b28]'
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

          {/* Card 2: Vendor Black Box (Small Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 bg-gradient-to-b from-[#0a1a17] to-[#050e0c] rounded-[24px] p-8 md:p-10 border border-[#163f38]/50 relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="mb-8">
                <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-[12px] flex items-center justify-center mb-6 text-orange-400">
                  <Box className="w-6 h-6" />
                </div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[24px] font-bold text-white mb-3 leading-tight">
                  External vendors are a black box.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#8a9b98] text-[17px] leading-[1.6]">
                  BPOs send shiny summary reports, but you can't hear what members actually hear. You lack the raw evidence to challenge their scores.
                </p>
              </div>

              {/* Locked Report Visualization */}
              <div className="bg-[#020706] border border-[#163f38]/40 rounded-[16px] p-5 relative overflow-hidden">
                <div className="space-y-3 opacity-30 blur-[3px] select-none">
                  <div className="h-4 w-3/4 bg-[#1a2b28] rounded"></div>
                  <div className="h-4 w-1/2 bg-[#1a2b28] rounded"></div>
                  <div className="h-20 w-full bg-[#1a2b28] rounded mt-4"></div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-8 w-16 bg-green-900/50 rounded"></div>
                    <div className="h-8 w-16 bg-red-900/50 rounded"></div>
                  </div>
                </div>
                
                {/* Overlay Lock */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#020706]/60 backdrop-blur-[2px]">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-14 h-14 bg-[#0a1a17] border border-[#163f38] rounded-full flex items-center justify-center shadow-2xl mb-3"
                  >
                    <Lock className="w-6 h-6 text-[#5a6b68]" />
                  </motion.div>
                  <div className="text-[12px] font-bold font-['Instrument_Sans',system-ui,sans-serif] text-[#5a6b68] uppercase tracking-widest">
                    Raw Audio Access Denied
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Language Barrier (Full Width Bottom) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-12 bg-gradient-to-r from-[#0a1a17] via-[#081512] to-[#0a1a17] rounded-[24px] p-8 md:p-10 border border-[#163f38]/50 relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-[12px] flex items-center justify-center mb-6 text-purple-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[28px] font-bold text-white mb-3 leading-tight">
                  Lost in translation.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#8a9b98] text-[18px] leading-[1.6]">
                  If your QA team only speaks English, millions of translated calls go entirely unreviewed. You are blindly trusting interpreters with strict CMS compliance scripts.
                </p>
              </div>

              {/* Audio Waveform Visualization */}
              <div className="flex-1 w-full flex flex-col gap-4">
                
                {/* English - Safe */}
                <div className="bg-[#020706] border border-[#163f38]/40 rounded-[12px] p-4 flex items-center gap-4">
                  <div className="px-3 py-1 bg-[#163f38]/50 text-[#7da17e] text-[11px] font-bold uppercase rounded-[4px] border border-[#7da17e]/30 w-24 text-center">English</div>
                  <div className="flex-1 flex items-center gap-1 h-6">
                    {[10, 40, 20, 60, 80, 40, 20, 90, 50, 30].map((h, i) => (
                      <motion.div key={i} animate={{ height: `${h}%` }} transition={{ duration: 1, repeat: Infinity, repeatType: "mirror", delay: i * 0.1 }} className="w-1.5 bg-[#7da17e] rounded-full" />
                    ))}
                  </div>
                  <div className="text-[12px] text-[#7da17e] font-bold font-mono">100% QA</div>
                </div>

                {/* Spanish - Unreviewed */}
                <div className="bg-[#020706] border border-red-500/20 rounded-[12px] p-4 flex items-center gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-500/5 mix-blend-screen"></div>
                  <div className="px-3 py-1 bg-red-900/30 text-red-400 text-[11px] font-bold uppercase rounded-[4px] border border-red-500/30 w-24 text-center relative z-10">Spanish</div>
                  <div className="flex-1 flex items-center gap-1 h-6 opacity-30 relative z-10">
                    {[30, 20, 50, 90, 40, 70, 30, 60, 20, 40].map((h, i) => (
                      <motion.div key={i} animate={{ height: `${h}%` }} transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: i * 0.1 }} className="w-1.5 bg-red-400 rounded-full" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-red-400 font-bold font-mono relative z-10">
                    <ShieldAlert className="w-3.5 h-3.5" /> 0% QA
                  </div>
                </div>

                {/* Mandarin - Unreviewed */}
                <div className="bg-[#020706] border border-red-500/20 rounded-[12px] p-4 flex items-center gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-500/5 mix-blend-screen"></div>
                  <div className="px-3 py-1 bg-red-900/30 text-red-400 text-[11px] font-bold uppercase rounded-[4px] border border-red-500/30 w-24 text-center relative z-10">Mandarin</div>
                  <div className="flex-1 flex items-center gap-1 h-6 opacity-30 relative z-10">
                    {[50, 70, 30, 20, 80, 40, 90, 50, 20, 60].map((h, i) => (
                      <motion.div key={i} animate={{ height: `${h}%` }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: i * 0.1 }} className="w-1.5 bg-red-400 rounded-full" />
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
