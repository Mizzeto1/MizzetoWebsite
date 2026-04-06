import { ArrowRight, CheckCircle2, ChevronRight, Code2, Database, Languages, Play, ShieldAlert, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Seamless Ingestion',
      description: 'We connect directly to your call center infrastructure (API, SFTP, or cloud storage) to automatically pull 100% of your raw audio recordings and metadata without manual sampling.',
    },
    {
      number: '02',
      title: 'Transcribe & Translate',
      description: 'Our specialized healthcare AI processes the audio—accurately transcribing medical terminology and translating non-English calls with zero manual effort.',
    },
    {
      number: '03',
      title: 'Automated QA & CMS',
      description: 'Every interaction is instantly scored against strict CMS guidelines and your proprietary custom rubrics to surface critical compliance risks before they become fines.',
    }
  ];

  return (
    <section className="bg-white py-32 border-y border-[#E5E5E5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start mb-20">
          <div className="max-w-2xl">
            <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[40px] md:text-[48px] font-bold text-[#1a1a1a] leading-[1.1] mb-6 tracking-tight">
              A fully automated pipeline from <br className="hidden md:block" />
              <span className="text-[#7da17e]">raw audio to compliance score.</span>
            </h2>
            <p className="font-['Charter',Georgia,serif] text-[#5a5a5a] text-[20px] leading-[1.6]">
              A scalable, secure engine built on healthcare-grade infrastructure. No manual sampling. No missed insights. Just total visibility across your entire operation.
            </p>
          </div>
          <div className="md:pt-4">
            <button className="flex items-center gap-2 bg-[#163f38] text-white px-7 py-3.5 rounded-full font-['Instrument_Sans',system-ui,sans-serif] font-bold text-[15px] hover:bg-[#112d28] hover:scale-105 transition-all shadow-[0_4px_12px_rgba(22,63,56,0.2)]">
              View integration docs
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Graphic Pipeline */}
        <div className="bg-[#030b09] rounded-[24px] md:rounded-[32px] p-6 md:p-12 mb-16 relative overflow-hidden border border-[#163f38]/30 shadow-2xl">
          
          {/* Subtle Background Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#163f38]/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7da17e]/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>

          {/* Continuous Animated Connection Line (Desktop: Horizontal, Mobile: Vertical) */}
          <div className="absolute left-[39px] md:left-[10%] top-[40px] md:top-[45%] bottom-[40px] md:bottom-auto md:right-[10%] w-[2px] md:w-auto md:h-[2px] bg-[#163f38]/40 z-0">
            {/* Animated Data Packet */}
            <motion.div 
              animate={{ 
                y: ['0%', '100%'], 
                x: ['0%', '0%']
              }}
              // On desktop, switch to horizontal animation via CSS media queries by hiding/showing different motion divs
              className="md:hidden absolute top-0 left-0 w-[2px] h-[100px] bg-gradient-to-b from-transparent via-[#7da17e] to-transparent shadow-[0_0_10px_#7da17e]"
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              animate={{ x: ['-10%', '110%'] }}
              className="hidden md:block absolute top-0 left-0 w-[150px] h-[2px] bg-gradient-to-r from-transparent via-[#7da17e] to-transparent shadow-[0_0_10px_#7da17e]"
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10 pl-16 md:pl-0">
            
            {/* Stage 1: API/Infrastructure (Code Window) */}
            <div className="flex flex-col group">
              <div className="h-[220px] bg-[#0a1a17] rounded-xl border border-[#163f38] flex flex-col overflow-hidden mb-8 shadow-2xl relative">
                {/* Mac-style header */}
                <div className="h-8 bg-[#050e0c] border-b border-[#163f38] flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#163f38]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#163f38]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#163f38]"></div>
                  </div>
                  <div className="text-[10px] font-mono text-[#5a6b68] ml-2 flex items-center gap-1"><Code2 className="w-3 h-3"/> integration.ts</div>
                </div>
                
                {/* JSON Payload */}
                <div className="p-4 font-mono text-[11px] leading-relaxed">
                  <div className="text-[#8a9b98]">// Webhook received</div>
                  <div className="text-white"><span className="text-purple-400">const</span> <span className="text-blue-400">callData</span> = {'{'}</div>
                  <div className="pl-4 text-[#7da17e]">id: <span className="text-orange-300">"call_9f82..."</span>,</div>
                  <div className="pl-4 text-[#7da17e]">source: <span className="text-orange-300">"genesys"</span>,</div>
                  <div className="pl-4 text-[#7da17e]">audio_url: <span className="text-orange-300">"s3://bucket/audio.wav"</span>,</div>
                  <div className="pl-4 text-[#7da17e]">duration: <span className="text-blue-300">421</span></div>
                  <div className="text-white">{'}'}</div>
                  
                  {/* Blinking cursor */}
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-blue-400">await</span> <span className="text-[#7da17e]">Mizzeto.ingest</span>(callData)
                    <motion.div animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1.5 h-3 bg-white"></motion.div>
                  </div>
                </div>
              </div>

              <div>
                <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[13px] font-bold text-[#7da17e] mb-2 tracking-widest uppercase">
                  Step 01
                </div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[22px] font-bold text-white mb-3">{steps[0].title}</h3>
                <p className="font-['Charter',Georgia,serif] text-[#8a9b98] text-[15px] leading-[1.6]">
                  {steps[0].description}
                </p>
              </div>
            </div>

            {/* Stage 2: Mizzeto Transcript/Translate */}
            <div className="flex flex-col group">
              <div className="h-[220px] bg-white rounded-xl border border-[#E5E5E5] flex flex-col overflow-hidden mb-8 shadow-2xl relative">
                
                {/* Audio Waveform Header */}
                <div className="h-12 bg-[#f7f6f9] border-b border-[#E5E5E5] flex items-center px-4 gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#163f38] flex items-center justify-center">
                    <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                  </div>
                  <div className="flex-1 flex items-center gap-[2px] h-4 overflow-hidden">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <motion.div 
                        key={i} 
                        animate={{ height: [`${Math.random() * 60 + 20}%`, `${Math.random() * 80 + 20}%`, `${Math.random() * 60 + 20}%`] }} 
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }} 
                        className="w-[3px] bg-[#7da17e] rounded-full" 
                      />
                    ))}
                  </div>
                </div>

                {/* Split Transcript View */}
                <div className="flex-1 flex flex-col p-3 gap-2 bg-[#faf9fc]">
                  {/* Original Spanish */}
                  <div className="bg-white p-2.5 rounded-lg border border-[#E5E5E5] relative">
                    <div className="absolute -top-2.5 right-2 bg-[#f7f6f9] border border-[#E5E5E5] px-2 py-0.5 rounded text-[9px] font-bold text-[#8a9b98] uppercase tracking-wider flex items-center gap-1">
                      <Languages className="w-3 h-3"/> Original: ES
                    </div>
                    <p className="text-[11px] font-['Charter',Georgia,serif] text-[#5a5a5a] italic leading-tight mt-1">
                      "Necesito cancelar mi plan de Medicare Advantage porque es muy caro..."
                    </p>
                  </div>
                  
                  {/* Translated English */}
                  <div className="bg-[#163f38]/5 p-2.5 rounded-lg border border-[#163f38]/20 relative">
                    <div className="absolute -top-2.5 right-2 bg-[#163f38] text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                      <Database className="w-3 h-3"/> Transcribed: EN
                    </div>
                    <p className="text-[11px] font-['Charter',Georgia,serif] text-[#1a1a1a] font-medium leading-tight mt-1">
                      "I need to cancel my Medicare Advantage plan because it is too expensive..."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[13px] font-bold text-[#7da17e] mb-2 tracking-widest uppercase">
                  Step 02
                </div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[22px] font-bold text-white mb-3">{steps[1].title}</h3>
                <p className="font-['Charter',Georgia,serif] text-[#8a9b98] text-[15px] leading-[1.6]">
                  {steps[1].description}
                </p>
              </div>
            </div>

            {/* Stage 3: CMS & QA Scorecard */}
            <div className="flex flex-col group">
              <div className="h-[220px] bg-[#0a1a17] rounded-xl border border-[#163f38] flex flex-col overflow-hidden mb-8 shadow-2xl relative">
                
                {/* Score Header */}
                <div className="p-4 border-b border-[#163f38] flex items-center justify-between bg-gradient-to-r from-[#050e0c] to-[#0a1a17]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#7da17e]" />
                    <span className="text-[13px] font-bold text-white tracking-wide">CMS COMPLIANCE</span>
                  </div>
                  <div className="text-[20px] font-bold font-['Instrument_Sans',system-ui,sans-serif] text-[#7da17e]">
                    85<span className="text-[12px] text-[#5a6b68] ml-0.5">%</span>
                  </div>
                </div>

                {/* Rubric Checklist */}
                <div className="flex-1 p-4 space-y-3 bg-[#030b09]">
                  
                  {/* Pass */}
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7da17e] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-white">Required Disclosures Read</div>
                      <div className="text-[9px] text-[#5a6b68] font-mono mt-0.5">Section 4.1.2</div>
                    </div>
                  </div>
                  
                  {/* Fail/Flag */}
                  <div className="flex items-start gap-2 bg-red-500/10 p-2 -mx-2 rounded border border-red-500/20 relative">
                    <ShieldAlert className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-red-400">Grievance Escaltion Missed</div>
                      <div className="text-[9px] text-red-400/70 font-mono mt-0.5">CMS Guideline 10.3</div>
                    </div>
                  </div>

                  {/* Pass */}
                  <div className="flex items-start gap-2 opacity-50">
                    <CheckCircle2 className="w-4 h-4 text-[#7da17e] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-white">Call Recording Consent</div>
                    </div>
                  </div>

                </div>
              </div>

              <div>
                <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[13px] font-bold text-[#7da17e] mb-2 tracking-widest uppercase">
                  Step 03
                </div>
                <h3 className="font-['Instrument_Sans',system-ui,sans-serif] text-[22px] font-bold text-white mb-3">{steps[2].title}</h3>
                <p className="font-['Charter',Georgia,serif] text-[#8a9b98] text-[15px] leading-[1.6]">
                  {steps[2].description}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
