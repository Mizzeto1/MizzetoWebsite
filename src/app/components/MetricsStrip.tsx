import { motion } from 'motion/react';

export function MetricsStrip() {
  const metrics = [
    { value: '47M+', label: 'Calls Analyzed' },
    { value: '32', label: 'Languages Supported' },
    { value: '98.7%', label: 'Transcription Accuracy' },
    { value: '<48hr', label: 'Time to First Insight' },
  ];

  return (
    <section className="bg-[#2B4865] py-8 md:py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(118,159,205,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[24px] md:text-[30px] lg:text-[36px] font-bold text-white leading-none tracking-tight">
                {metric.value}
              </div>
              <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[12px] text-[#B9D7EA] mt-2 font-medium tracking-wide uppercase">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
