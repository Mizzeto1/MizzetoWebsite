import { Check, Play, Globe, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  const benefits = [
    '100% call coverage, not 2% sampling',
    '30+ languages including interpreter lines',
    'Full visibility into BPO and vendor calls',
    'CMS-aligned QA scoring',
  ];

  return (
    <section className="bg-white border-b border-[#D6E6F2] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#B9D7EA]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/4" />

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-10 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left side - Copy */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#2B4865]/5 border border-[#2B4865]/10 text-[#2B4865] text-[11px] lg:text-[13px] font-semibold tracking-wide uppercase font-['Instrument_Sans',system-ui,sans-serif]">
                <Activity className="w-4 h-4" />
                <span>The new standard for Health Plan QA</span>
              </div>
              <h1 className="font-['Instrument_Sans',system-ui,sans-serif] text-[28px] md:text-[36px] lg:text-[50px] font-semibold text-[#2B4865] leading-[1.08] tracking-tight">
                Audit 100% of calls. In any language. Across every vendor.
              </h1>
              <p className="font-['Charter',Georgia,serif] text-[15px] md:text-[17px] lg:text-[21px] text-[#769FCD] leading-[1.5] max-w-2xl">
                The AI QA platform built specifically for health plans to monitor compliance and member experience without sampling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid sm:grid-cols-2 gap-3"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-[#B9D7EA]/30 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-[#2B4865]" />
                  </div>
                  <span className="text-[#2B4865] text-[13px] lg:text-[15px] leading-[1.5]">{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button className="bg-[#2B4865] text-white px-5 lg:px-7 py-3 rounded-[8px] hover:bg-[#1e3650] transition-colors font-['Instrument_Sans',system-ui,sans-serif] font-medium text-[14px] lg:text-[15px] shadow-[0_4px_14px_rgba(43,72,101,0.25)] flex items-center justify-center gap-2 hover:-translate-y-0.5 duration-200">
                Book a 15-Minute Demo
              </button>
              <button className="bg-white border border-[#D6E6F2] text-[#2B4865] px-5 lg:px-7 py-3 rounded-[8px] hover:bg-[#F7FBFC] transition-colors font-['Instrument_Sans',system-ui,sans-serif] font-medium text-[14px] lg:text-[15px] shadow-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 duration-200">
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
            <div className="bg-white rounded-[16px] p-6 shadow-[0_24px_48px_-12px_rgba(43,72,101,0.15)] border border-[#D6E6F2] relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D6E6F2]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2B4865] flex items-center justify-center">
                    <span className="text-white font-['Instrument_Sans',system-ui,sans-serif] font-bold">98</span>
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#2B4865] font-['Instrument_Sans',system-ui,sans-serif]">Call #892-Medicare-Adv</div>
                    <div className="text-[12px] text-[#769FCD] flex items-center gap-1 mt-0.5">
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
                <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-[#D6E6F2] -z-10"></div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#B9D7EA]/30 flex items-center justify-center flex-shrink-0 mt-1 ring-4 ring-white">
                    <span className="text-[10px] font-bold text-[#2B4865]">M</span>
                  </div>
                  <div className="bg-[#F7FBFC] rounded-[8px] rounded-tl-none p-3 text-[13px] text-[#769FCD] font-['Charter',Georgia,serif] flex-1 border border-[#D6E6F2]">
                    Necesito saber si mi insulina está cubierta este año.
                  </div>
                </div>

                <div className="flex gap-4 flex-row-reverse">
                  <div className="w-6 h-6 rounded-full bg-[#2B4865]/10 flex items-center justify-center flex-shrink-0 mt-1 ring-4 ring-white">
                    <span className="text-[10px] font-bold text-[#2B4865]">A</span>
                  </div>
                  <div className="bg-[#2B4865] rounded-[8px] rounded-tr-none p-3 text-[13px] text-white font-['Charter',Georgia,serif] flex-1 shadow-sm">
                    Sí, déjeme verificar. ¿Puede confirmar su fecha de nacimiento?
                  </div>
                </div>
              </div>

              {/* Compliance checks */}
              <div className="bg-[#F7FBFC] rounded-[8px] p-4 border border-[#D6E6F2] space-y-3">
                <div className="text-[12px] font-bold text-[#2B4865] uppercase tracking-wider mb-2 font-['Instrument_Sans',system-ui,sans-serif]">Auto-QA Checks</div>

                <div className="flex items-center justify-between text-[13px]">
                  <div className="flex items-center gap-2 text-[#769FCD]">
                    <Check className="w-4 h-4 text-[#769FCD]" />
                    HIPAA Verification
                  </div>
                  <span className="font-mono text-green-600 font-medium">PASS</span>
                </div>

                <div className="flex items-center justify-between text-[13px]">
                  <div className="flex items-center gap-2 text-[#769FCD]">
                    <Check className="w-4 h-4 text-[#769FCD]" />
                    Formulary Explanation
                  </div>
                  <span className="font-mono text-green-600 font-medium">PASS</span>
                </div>
              </div>
            </div>

            {/* Static decorative cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -right-4 top-12 bg-white rounded-[8px] p-3 shadow-xl border border-[#D6E6F2] flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-[#2B4865]/10 flex items-center justify-center">
                <Check className="w-4 h-4 text-[#2B4865]" />
              </div>
              <div>
                <div className="text-[12px] font-bold text-[#2B4865] font-['Instrument_Sans',system-ui,sans-serif]">Fully Compliant</div>
                <div className="text-[11px] text-[#769FCD]">All disclosures verified</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -left-4 bottom-12 bg-[#2B4865] text-white rounded-[8px] p-3 shadow-xl flex items-center gap-3 z-20"
            >
              <div className="flex gap-1 items-end h-6">
                {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-[#B9D7EA] rounded-t-[2px]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div>
                <div className="text-[12px] font-bold font-['Instrument_Sans',system-ui,sans-serif]">100% Audited</div>
                <div className="text-[11px] text-[#B9D7EA]">Across 32 languages</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
