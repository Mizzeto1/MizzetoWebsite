import { Hexagon, Triangle, Circle, Square } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustBar() {
  const logos = [
    { icon: Hexagon, name: "Acme Health" },
    { icon: Triangle, name: "CarePlus" },
    { icon: Circle, name: "NovaShield" },
    { icon: Square, name: "Horizon Med" },
    { icon: Hexagon, name: "Apex Care" },
  ];

  return (
    <section className="bg-white border-t border-b border-[#E5E5E5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 md:py-14">
        <p className="text-center font-['Instrument_Sans',system-ui,sans-serif] text-[13px] font-bold text-[#a0a0a0] uppercase tracking-[0.2em] mb-8">
          Trusted by compliance teams at leading health plans
        </p>
        
        {/* Infinite scroll or simple wrap - doing simple wrap with animation for elegance */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {logos.map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div key={idx} className="flex items-center gap-2 group cursor-default">
                <Icon className="w-6 h-6 text-[#163f38] transition-transform duration-300 group-hover:scale-110" />
                <span className="text-[22px] font-bold text-[#163f38] font-['Instrument_Sans',system-ui,sans-serif] tracking-tight">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
