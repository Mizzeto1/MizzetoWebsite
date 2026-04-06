import { Check, Play, ShieldAlert, Globe, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  const benefits = [
    '100% call coverage, not 2% sampling',
    '30+ languages including interpreter lines',
    'Full visibility into BPO and vendor calls',
    'CMS-aligned QA scoring',
  ];

  return (
    <section className="bg-white border-b border-[#E5E5E5] relative overflow-hidden">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#7da17e]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/4" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left side - Copy */}
          <div className="lg:col-span-3 space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#163f38]/5 border border-[#163f38]/10 text-[#163f38] text-[14px] font-semibold tracking-wide uppercase font-['Instrument_Sans',system-ui,sans-serif]">
                <Activity className="w-4 h-4" />
                <span>The new standard for Health Plan QA</span>
              </div>
              <h1 className="font-['Instrument_Sans',system-ui,sans-serif] text-[52px] lg:text-[64px] font-semibold text-[#1a1a1a] leading-[1.05] tracking-tight">
                Audit 100% of calls. In any language. Across every vendor.
              </h1>
              <p className="font-['Charter',Georgia,serif] text-[22px] lg:text-[24px] text-[#5a5a5a] leading-[1.5] max-w-2xl">
                The AI QA platform built specifically for health plans to monitor compliance and member experience without sampling.
              </p>
            </motion.div>

            {/* Bullet points */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#7da17e]/20 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-[#163f38]" />
                  </div>
                  <span className="text-[#1a1a1a] text-[17px] leading-[1.5]">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button className="bg-[#163f38] text-white px-8 py-4 rounded-[8px] hover:bg-[#112d28] transition-colors font-['Instrument_Sans',system-ui,sans-serif] font-medium text-[16px] shadow-[0_4px_14px_rgba(22,63,56,0.25)] flex items-center justify-center gap-2 hover:-translate-y-0.5 duration-200">
                Get a Demo
              </button>
              <button className="bg-white border border-[#E5E5E5] text-[#1a1a1a] px-8 py-4 rounded-[8px] hover:bg-[#f7f6f9] transition-colors font-['Instrument_Sans',system-ui,sans-serif] font-medium text-[16px] shadow-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 duration-200">
                <Play className="w-4 h-4 fill-current" />
                See How it Works
              </button>
            </motion.div>
          </div>

          {/* Right side - High Fidelity Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="lg:col-span-2 relative"
          >
            {/* Main floating card */}
            <div className="bg-white rounded-[16px] p-6 shadow-[0_24px_48px_-12px_rgba(22,63,56,0.15)] border border-[#E5E5E5] relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E5E5]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#163f38] flex items-center justify-center">
                    <span className="text-white font-['Instrument_Sans',system-ui,sans-serif] font-bold">98</span>
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#1a1a1a] font-['Instrument_Sans',system-ui,sans-serif]">Call #892-Medicare-Adv</div>
                    <div className="text-[12px] text-[#5a5a5a] flex items-center gap-1 mt-0.5">
                      <Globe className="w-3 h-3" /> Spanish (Detected)
                    </div>
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-green-100 text-green-800 text-[12px] font-bold rounded-[4px] font-['Instrument_Sans',system-ui,sans-serif]">
                  CMS COMPLIANT
                </div>
              </div>

              {/* Transcript snippet */}
              <div className="space-y-4 mb-6 relative">
                <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-[#f0f0f0] -z-10"></div>
                
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#7da17e]/20 flex items-center justify-center flex-shrink-0 mt-1 ring-4 ring-white">
                    <span className="text-[10px] font-bold text-[#163f38]">M</span>
                  </div>
                  <div className="bg-[#f7f6f9] rounded-[8px] rounded-tl-none p-3 text-[13px] text-[#5a5a5a] font-['Charter',Georgia,serif] flex-1 border border-[#E5E5E5]">
                    Necesito saber si mi insulina está cubierta este año.
                  </div>
                </div>
                
                <div className="flex gap-4 flex-row-reverse">
                  <div className="w-6 h-6 rounded-full bg-[#163f38]/10 flex items-center justify-center flex-shrink-0 mt-1 ring-4 ring-white">
                    <span className="text-[10px] font-bold text-[#163f38]">A</span>
                  </div>
                  <div className="bg-[#163f38] rounded-[8px] rounded-tr-none p-3 text-[13px] text-white font-['Charter',Georgia,serif] flex-1 shadow-sm">
                    Sí, déjeme verificar. ¿Puede confirmar su fecha de nacimiento?
                  </div>
                </div>
              </div>

              {/* Compliance checks */}
              <div className="bg-[#f7f6f9] rounded-[8px] p-4 border border-[#E5E5E5] space-y-3">
                <div className="text-[12px] font-bold text-[#1a1a1a] uppercase tracking-wider mb-2 font-['Instrument_Sans',system-ui,sans-serif]">Auto-QA Checks</div>
                
                <div className="flex items-center justify-between text-[13px]">
                  <div className="flex items-center gap-2 text-[#5a5a5a]">
                    <Check className="w-4 h-4 text-[#7da17e]" />
                    HIPAA Verification
                  </div>
                  <span className="font-mono text-green-600 font-medium">PASS</span>
                </div>
                
                <div className="flex items-center justify-between text-[13px]">
                  <div className="flex items-center gap-2 text-[#5a5a5a]">
                    <Check className="w-4 h-4 text-[#7da17e]" />
                    Formulary Explanation
                  </div>
                  <span className="font-mono text-green-600 font-medium">PASS</span>
                </div>
              </div>
            </div>

            {/* Decorative elements / Floating cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-12 bg-white rounded-[8px] p-3 shadow-xl border border-[#E5E5E5] flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <ShieldAlert className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <div className="text-[12px] font-bold text-[#1a1a1a] font-['Instrument_Sans',system-ui,sans-serif]">Risk Prevented</div>
                <div className="text-[11px] text-[#5a5a5a]">Disclosures missed (0)</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 bottom-12 bg-[#163f38] text-white rounded-[8px] p-3 shadow-xl flex items-center gap-3 z-20"
            >
               <div className="flex gap-1 items-end h-6">
                 {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ height: "20%" }}
                     animate={{ height: `${h}%` }}
                     transition={{ repeat: Infinity, duration: 1.5, repeatType: "mirror", delay: i * 0.1 }}
                     className="w-1.5 bg-[#7da17e] rounded-t-[2px]"
                   />
                 ))}
               </div>
              <div>
                <div className="text-[12px] font-bold font-['Instrument_Sans',system-ui,sans-serif]">100% Audited</div>
                <div className="text-[11px] text-[#98b6b0]">Across 32 languages</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
