import { MessageSquare, ShieldCheck, Zap, Activity, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FeatureSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", stiffness: 60 } }
  };

  return (
    <section className="bg-[#f7f6f9] py-32 md:py-40 border-y border-[#E5E5E5] relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute left-0 top-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#7da17e]/10 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>
      <div className="absolute right-0 bottom-1/4 w-[600px] h-[600px] bg-gradient-to-l from-[#163f38]/10 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/2"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#163f38]/10 border border-[#163f38]/10 text-[#163f38] text-[14px] font-semibold tracking-wide uppercase font-['Instrument_Sans',system-ui,sans-serif] mb-6">
            <Zap className="w-4 h-4 fill-current" /> Intelligent Platform
          </div>
          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[44px] md:text-[52px] font-semibold text-[#1a1a1a] mb-6 leading-[1.05] tracking-tight">
            Spot compliance risks before the call even ends.
          </h2>
          <p className="font-['Charter',Georgia,serif] text-[#5a5a5a] text-[20px] md:text-[22px] leading-[1.6]">
            Say goodbye to slow, manual translation APIs. Mizzeto natively understands clinical context across 32 languages, automating CMS scoring instantly.
          </p>
        </motion.div>

        <div className="space-y-32">
          {/* Feature 1: Multilingual AI */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            {/* Content */}
            <motion.div variants={itemVariants} className="flex-1 space-y-8">
              <div className="w-14 h-14 bg-[#163f38] rounded-[12px] flex items-center justify-center shadow-lg">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[36px] font-semibold text-[#1a1a1a] leading-[1.15] mb-4">
                  Native multilingual context. Not basic translation.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#5a5a5a] text-[19px] leading-[1.6]">
                  Our AI is specifically trained on healthcare terminology and interpreter-mediated calls. It understands idioms, medical nuances, and exact phrasings without relying on basic third-party APIs that lose crucial compliance context.
                </p>
              </div>
              <ul className="space-y-4 pt-2">
                {[
                  'Detects medical terms in 32+ languages natively', 
                  'Analyzes three-way interpreter interactions', 
                  'Highlights mistranslations in real-time'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#7da17e]/20 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#163f38]" />
                    </div>
                    <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[#1a1a1a] text-[17px] font-medium leading-[1.4]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* High Fidelity UI Mockup */}
            <motion.div variants={itemVariants} className="flex-1 w-full">
              <div className="bg-white rounded-[24px] p-6 shadow-[0_32px_64px_-16px_rgba(22,63,56,0.15)] border border-[#E5E5E5] relative transform md:rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#f0f0f0]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-[14px] font-bold text-[#1a1a1a] font-['Instrument_Sans',system-ui,sans-serif]">Live Call Analysis</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded uppercase">English</span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 text-[11px] font-bold rounded uppercase">Vietnamese</span>
                  </div>
                </div>

                {/* Split Transcript View */}
                <div className="grid grid-cols-2 gap-4 h-[240px] overflow-hidden relative">
                  {/* Left: Original (Agent & Member) */}
                  <div className="space-y-4 pt-2">
                    <div className="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-wider mb-2">Original Audio</div>
                    <div className="p-3 bg-gray-50 rounded-[8px] text-[13px] text-[#5a5a5a] border-l-2 border-blue-400">
                      We need to verify your primary care physician...
                    </div>
                    <div className="p-3 bg-purple-50/50 rounded-[8px] text-[13px] text-[#5a5a5a] border-l-2 border-purple-400 font-serif">
                      Bác sĩ gia đình của tôi là Tiến sĩ Nguyễn...
                    </div>
                  </div>

                  {/* Right: AI Translation & Insights */}
                  <div className="space-y-4 pt-2 border-l border-[#f0f0f0] pl-4">
                    <div className="text-[10px] font-bold text-[#a0a0a0] uppercase tracking-wider mb-2">Mizzeto Context</div>
                    <div className="p-3 bg-green-50/50 rounded-[8px] text-[13px] text-[#163f38] font-medium border border-green-100">
                      Agent initiated PCP verification (Step 2/4)
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="p-3 bg-white shadow-sm border border-[#E5E5E5] rounded-[8px] text-[13px] text-[#1a1a1a] relative"
                    >
                      <span className="bg-yellow-100 text-yellow-800 px-1 rounded-sm font-medium">Dr. Nguyen</span> confirmed as PCP. 
                      <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500"></div>
                    </motion.div>
                  </div>
                  
                  {/* Fade out bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>


          {/* Feature 2: Compliance */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row-reverse gap-16 items-center"
          >
            {/* Content */}
            <motion.div variants={itemVariants} className="flex-1 space-y-8">
              <div className="w-14 h-14 bg-[#7da17e] rounded-[12px] flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-7 h-7 text-[#163f38]" />
              </div>
              <div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[36px] font-semibold text-[#1a1a1a] leading-[1.15] mb-4">
                  Automated CMS scorecard grading.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#5a5a5a] text-[19px] leading-[1.6]">
                  Stop relying on 2% sample sizes. Grade 100% of calls against strict CMS marketing and compliance guidelines. Instantly flag missing disclaimers and out-of-compliance agents.
                </p>
              </div>
              <ul className="space-y-4 pt-2">
                {[
                  'Automatic Part D & MAPD script verification', 
                  'Instant alerts for missing required disclosures', 
                  'Export-ready compliance documentation'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#163f38]/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#7da17e]" />
                    </div>
                    <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[#1a1a1a] text-[17px] font-medium leading-[1.4]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* High Fidelity UI Mockup */}
            <motion.div variants={itemVariants} className="flex-1 w-full relative">
              <div className="bg-white rounded-[24px] p-6 shadow-[0_32px_64px_-16px_rgba(22,63,56,0.15)] border border-[#E5E5E5] relative transform md:-rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                
                {/* Score Header */}
                <div className="flex justify-between items-end mb-8 pb-6 border-b border-[#f0f0f0]">
                  <div>
                    <div className="text-[13px] font-bold text-[#5a5a5a] font-['Instrument_Sans',system-ui,sans-serif] uppercase tracking-wide mb-1">Total Compliance Score</div>
                    <div className="text-[48px] font-bold text-[#163f38] leading-none font-['Instrument_Sans',system-ui,sans-serif]">96%</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-[12px] font-medium text-[#1a1a1a]">
                      <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-green-500" />
                      </div>
                      HIPAA
                    </div>
                    <div className="flex items-center gap-2 text-[12px] font-medium text-[#1a1a1a]">
                      <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1, delay: 0.6 }} className="h-full bg-yellow-500" />
                      </div>
                      Script Adherence
                    </div>
                  </div>
                </div>

                {/* Scorecard Items */}
                <div className="space-y-4">
                  {[
                    { label: "Beneficiary Verification", pass: true },
                    { label: "Explanation of Benefits (EOB)", pass: true },
                    { label: "Network Limitations Disclosed", pass: false },
                    { label: "Grievance Rights Explained", pass: true },
                  ].map((check, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className={`flex items-center justify-between p-3 rounded-[8px] border ${check.pass ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'}`}
                    >
                      <div className="flex items-center gap-3">
                        {check.pass ? 
                          <CheckCircle className="w-5 h-5 text-green-600" /> : 
                          <AlertCircle className="w-5 h-5 text-red-600" />
                        }
                        <span className={`text-[14px] font-medium font-['Instrument_Sans',system-ui,sans-serif] ${check.pass ? 'text-green-900' : 'text-red-900'}`}>
                          {check.label}
                        </span>
                      </div>
                      <span className={`text-[12px] font-bold uppercase ${check.pass ? 'text-green-600' : 'text-red-600'}`}>
                        {check.pass ? 'Pass' : 'Fail - Review'}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Floating Alert */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-6 top-1/3 bg-red-600 text-white rounded-[12px] p-4 shadow-xl z-20 max-w-[200px]"
              >
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[13px] font-bold font-['Instrument_Sans',system-ui,sans-serif]">Compliance Risk</div>
                    <div className="text-[12px] opacity-90 leading-tight mt-1">Agent skipped network limitation script at 04:12</div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
