import { ShieldCheck, Lock, FileCheck, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustBar() {
  const badges = [
    { icon: ShieldCheck, label: 'SOC 2 Type II', sublabel: 'Certified' },
    { icon: Lock, label: 'HIPAA', sublabel: 'Compliant' },
    { icon: FileCheck, label: 'HITRUST CSF', sublabel: 'Validated' },
    { icon: BadgeCheck, label: 'BAA', sublabel: 'Available' },
  ];

  return (
    <section className="bg-white border-t border-b border-[#D6E6F2]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-5 md:py-7">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-20"
        >
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div key={idx} className="flex items-center gap-2 px-2 py-1">
                <div className="w-8 h-8 bg-[#2B4865]/5 border border-[#2B4865]/10 rounded-[6px] flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#2B4865]" />
                </div>
                <div>
                  <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[12px] font-bold text-[#2B4865] leading-tight">
                    {badge.label}
                  </div>
                  <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[10px] text-[#769FCD] leading-tight">
                    {badge.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
