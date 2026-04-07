import { ArrowRight, CheckCircle, CheckCircle2, Code2, Database, Languages, Play, ShieldAlert, ShieldCheck, AlertCircle, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24 border-y border-[#D6E6F2] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2B4865]/10 border border-[#2B4865]/10 text-[#2B4865] text-[14px] font-semibold tracking-wide uppercase font-['Instrument_Sans',system-ui,sans-serif] mb-6">
              How It Works
            </div>
            <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[26px] md:text-[34px] lg:text-[40px] font-bold text-[#2B4865] leading-[1.1] mb-4 tracking-tight">
              A fully automated pipeline from <br className="hidden md:block" />
              <span className="text-[#769FCD]">raw audio to compliance score.</span>
            </h2>
            <p className="font-['Charter',Georgia,serif] text-[#769FCD] text-[15px] md:text-[18px] leading-[1.6]">
              A scalable, secure engine built on healthcare-grade infrastructure. No manual sampling. No missed insights. Just total visibility.
            </p>
          </div>
          <div className="md:pt-4">
            <button className="flex items-center gap-2 bg-[#2B4865] text-white px-5 py-3 rounded-full font-['Instrument_Sans',system-ui,sans-serif] font-bold text-[13px] md:text-[15px] hover:bg-[#1e3650] hover:scale-105 transition-all shadow-[0_4px_12px_rgba(43,72,101,0.2)]">
              View integration docs
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Pipeline Graphic */}
        <div className="bg-[#1B3A57] rounded-[16px] md:rounded-[32px] p-4 md:p-10 mb-16 md:mb-24 relative overflow-hidden border border-[#2B4865]/30 shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2B4865]/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#769FCD]/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>

          {/* Connection line */}
          <div className="absolute left-[39px] md:left-[10%] top-[40px] md:top-[45%] bottom-[40px] md:bottom-auto md:right-[10%] w-[2px] md:w-auto md:h-[2px] bg-[#2B4865]/40 z-0">
            <motion.div
              animate={{ x: ['-10%', '110%'] }}
              className="hidden md:block absolute top-0 left-0 w-[150px] h-[2px] bg-gradient-to-r from-transparent via-[#769FCD] to-transparent shadow-[0_0_10px_#769FCD]"
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-8 relative z-10 pl-0 md:pl-0">

            {/* Stage 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="h-[180px] md:h-[220px] bg-[#1e4060] rounded-xl border border-[#2B4865] flex flex-col overflow-hidden mb-6 shadow-2xl relative">
                <div className="h-8 bg-[#162f4a] border-b border-[#2B4865] flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2B4865]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2B4865]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2B4865]"></div>
                  </div>
                  <div className="text-[10px] font-mono text-[#B9D7EA] ml-2 flex items-center gap-1"><Code2 className="w-3 h-3" /> integration.ts</div>
                </div>
                <div className="p-4 font-mono text-[11px] leading-relaxed">
                  <div className="text-[#B9D7EA]">// Webhook received</div>
                  <div className="text-white"><span className="text-purple-400">const</span> <span className="text-blue-400">callData</span> = {'{'}</div>
                  <div className="pl-4 text-[#769FCD]">id: <span className="text-orange-300">"call_9f82..."</span>,</div>
                  <div className="pl-4 text-[#769FCD]">source: <span className="text-orange-300">"genesys"</span>,</div>
                  <div className="pl-4 text-[#769FCD]">audio_url: <span className="text-orange-300">"s3://bucket/audio.wav"</span>,</div>
                  <div className="pl-4 text-[#769FCD]">duration: <span className="text-blue-300">421</span></div>
                  <div className="text-white">{'}'}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-blue-400">await</span> <span className="text-[#769FCD]">Mizzeto.ingest</span>(callData)
                    <motion.div animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1.5 h-3 bg-white" />
                  </div>
                </div>
              </div>
              <div>
                <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[11px] md:text-[13px] font-bold text-[#769FCD] mb-1 tracking-widest uppercase">Step 01</div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[18px] md:text-[22px] font-bold text-white mb-2">Seamless Ingestion</h3>
                <p className="font-['Charter',Georgia,serif] text-[#B9D7EA] text-[13px] md:text-[15px] leading-[1.6]">
                  We connect directly to your call center infrastructure to automatically pull 100% of raw audio recordings.
                </p>
              </div>
            </motion.div>

            {/* Stage 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="h-[180px] md:h-[220px] bg-white rounded-xl border border-[#D6E6F2] flex flex-col overflow-hidden mb-6 shadow-2xl relative">
                <div className="h-12 bg-[#F7FBFC] border-b border-[#D6E6F2] flex items-center px-4 gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2B4865] flex items-center justify-center">
                    <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                  </div>
                  <div className="flex-1 flex items-center gap-[2px] h-4 overflow-hidden">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="w-[3px] bg-[#769FCD] rounded-full" style={{ height: `${Math.random() * 60 + 20}%` }} />
                    ))}
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-3 gap-2 bg-[#fafcfd]">
                  <div className="bg-white p-2.5 rounded-lg border border-[#D6E6F2] relative">
                    <div className="absolute -top-2.5 right-2 bg-[#F7FBFC] border border-[#D6E6F2] px-2 py-0.5 rounded text-[9px] font-bold text-[#769FCD] uppercase tracking-wider flex items-center gap-1">
                      <Languages className="w-3 h-3" /> Original: ES
                    </div>
                    <p className="text-[11px] font-['Charter',Georgia,serif] text-[#769FCD] italic leading-tight mt-1">
                      "Necesito cancelar mi plan de Medicare Advantage porque es muy caro..."
                    </p>
                  </div>
                  <div className="bg-[#2B4865]/5 p-2.5 rounded-lg border border-[#2B4865]/20 relative">
                    <div className="absolute -top-2.5 right-2 bg-[#2B4865] text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                      <Database className="w-3 h-3" /> Transcribed: EN
                    </div>
                    <p className="text-[11px] font-['Charter',Georgia,serif] text-[#2B4865] font-medium leading-tight mt-1">
                      "I need to cancel my Medicare Advantage plan because it is too expensive..."
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[11px] md:text-[13px] font-bold text-[#769FCD] mb-1 tracking-widest uppercase">Step 02</div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[18px] md:text-[22px] font-bold text-white mb-2">Transcribe & Translate</h3>
                <p className="font-['Charter',Georgia,serif] text-[#B9D7EA] text-[13px] md:text-[15px] leading-[1.6]">
                  Specialized healthcare AI processes audio—accurately transcribing medical terms and translating non-English calls.
                </p>
              </div>
            </motion.div>

            {/* Stage 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="h-[180px] md:h-[220px] bg-[#1e4060] rounded-xl border border-[#2B4865] flex flex-col overflow-hidden mb-6 shadow-2xl relative">
                <div className="p-4 border-b border-[#2B4865] flex items-center justify-between bg-gradient-to-r from-[#162f4a] to-[#1e4060]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#769FCD]" />
                    <span className="text-[13px] font-bold text-white tracking-wide">CMS COMPLIANCE</span>
                  </div>
                  <div className="text-[20px] font-bold font-['Instrument_Sans',system-ui,sans-serif] text-[#769FCD]">
                    85<span className="text-[12px] text-[#B9D7EA] ml-0.5">%</span>
                  </div>
                </div>
                <div className="flex-1 p-4 space-y-3 bg-[#1B3A57]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#769FCD] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-white">Required Disclosures Read</div>
                      <div className="text-[9px] text-[#B9D7EA] font-mono mt-0.5">Section 4.1.2</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-red-500/10 p-2 -mx-2 rounded border border-red-500/20 relative">
                    <ShieldAlert className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-red-400">Grievance Escalation Missed</div>
                      <div className="text-[9px] text-red-400/70 font-mono mt-0.5">CMS Guideline 10.3</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 opacity-50">
                    <CheckCircle2 className="w-4 h-4 text-[#769FCD] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-white">Call Recording Consent</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[11px] md:text-[13px] font-bold text-[#769FCD] mb-1 tracking-widest uppercase">Step 03</div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[18px] md:text-[22px] font-bold text-white mb-2">Automated QA & CMS Scoring</h3>
                <p className="font-['Charter',Georgia,serif] text-[#B9D7EA] text-[13px] md:text-[15px] leading-[1.6]">
                  Every interaction is scored against CMS guidelines and your custom rubrics to surface compliance risks instantly.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Deep-Dive Feature Blocks */}
        <div className="space-y-16 md:space-y-24">

          {/* Feature 1: Multilingual AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
          >
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 bg-[#2B4865] rounded-[10px] flex items-center justify-center shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[24px] md:text-[30px] font-semibold text-[#2B4865] leading-[1.15] mb-3">
                  Native multilingual context. Not basic translation.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#769FCD] text-[15px] md:text-[17px] leading-[1.6]">
                  Our AI is specifically trained on healthcare terminology and interpreter-mediated calls. It understands idioms, medical nuances, and exact phrasings.
                </p>
              </div>
              <ul className="space-y-4 pt-2">
                {[
                  'Detects medical terms in 32+ languages natively',
                  'Analyzes three-way interpreter interactions',
                  'Highlights mistranslations in real-time'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#B9D7EA]/30 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#2B4865]" />
                    </div>
                    <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[#2B4865] text-[14px] md:text-[15px] font-medium leading-[1.4]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mockup */}
            <div className="flex-1 w-full">
              <div className="bg-white rounded-[16px] md:rounded-[24px] p-4 md:p-6 shadow-[0_32px_64px_-16px_rgba(43,72,101,0.15)] border border-[#D6E6F2] relative">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#D6E6F2]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-[14px] font-bold text-[#2B4865] font-['Instrument_Sans',system-ui,sans-serif]">Live Call Analysis</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded uppercase">English</span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 text-[11px] font-bold rounded uppercase">Vietnamese</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 h-[240px] overflow-hidden relative">
                  <div className="space-y-4 pt-2">
                    <div className="text-[10px] font-bold text-[#B9D7EA] uppercase tracking-wider mb-2">Original Audio</div>
                    <div className="p-3 bg-[#F7FBFC] rounded-[8px] text-[13px] text-[#769FCD] border-l-2 border-blue-400">
                      We need to verify your primary care physician...
                    </div>
                    <div className="p-3 bg-purple-50/50 rounded-[8px] text-[13px] text-[#769FCD] border-l-2 border-purple-400 font-serif">
                      Bác sĩ gia đình của tôi là Tiến sĩ Nguyễn...
                    </div>
                  </div>
                  <div className="space-y-4 pt-2 border-l border-[#D6E6F2] pl-4">
                    <div className="text-[10px] font-bold text-[#B9D7EA] uppercase tracking-wider mb-2">Mizzeto Context</div>
                    <div className="p-3 bg-green-50/50 rounded-[8px] text-[13px] text-[#2B4865] font-medium border border-green-100">
                      Agent initiated PCP verification (Step 2/4)
                    </div>
                    <div className="p-3 bg-white shadow-sm border border-[#D6E6F2] rounded-[8px] text-[13px] text-[#2B4865] relative">
                      <span className="bg-yellow-100 text-yellow-800 px-1 rounded-sm font-medium">Dr. Nguyen</span> confirmed as PCP.
                      <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Compliance Scorecard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center"
          >
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 bg-[#769FCD] rounded-[10px] flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[24px] md:text-[30px] font-semibold text-[#2B4865] leading-[1.15] mb-3">
                  Automated CMS scorecard grading.
                </h3>
                <p className="font-['Charter',Georgia,serif] text-[#769FCD] text-[15px] md:text-[17px] leading-[1.6]">
                  Grade 100% of calls against strict CMS marketing and compliance guidelines. Instantly flag missing disclaimers and out-of-compliance agents.
                </p>
              </div>
              <ul className="space-y-4 pt-2">
                {[
                  'Automatic Part D & MAPD script verification',
                  'Instant alerts for missing required disclosures',
                  'Export-ready compliance documentation'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#2B4865]/10 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#769FCD]" />
                    </div>
                    <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[#2B4865] text-[14px] md:text-[15px] font-medium leading-[1.4]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mockup */}
            <div className="flex-1 w-full relative">
              <div className="bg-white rounded-[16px] md:rounded-[24px] p-4 md:p-6 shadow-[0_32px_64px_-16px_rgba(43,72,101,0.15)] border border-[#D6E6F2] relative z-10">
                <div className="flex justify-between items-end mb-8 pb-6 border-b border-[#D6E6F2]">
                  <div>
                    <div className="text-[13px] font-bold text-[#769FCD] font-['Instrument_Sans',system-ui,sans-serif] uppercase tracking-wide mb-1">Total Compliance Score</div>
                    <div className="text-[48px] font-bold text-[#2B4865] leading-none font-['Instrument_Sans',system-ui,sans-serif]">96%</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-[12px] font-medium text-[#2B4865]">
                      <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-green-500" />
                      </div>
                      HIPAA
                    </div>
                    <div className="flex items-center gap-2 text-[12px] font-medium text-[#2B4865]">
                      <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }} className="h-full bg-yellow-500" />
                      </div>
                      Script Adherence
                    </div>
                  </div>
                </div>

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
                      viewport={{ once: true }}
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
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
