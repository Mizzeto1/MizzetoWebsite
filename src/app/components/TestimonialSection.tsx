import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    quote: "Mizzeto has completely changed how we audit our external BPOs. We used to check a 2% sample of interpreter calls; now we audit 100%. We instantly found language gaps we didn't know existed.",
    author: "Sarah Jenkins",
    title: "VP of Member Experience",
    company: "Nationwide Health",
    initials: "SJ",
    rating: 5,
  },
  {
    quote: "Before Mizzeto, our Spanish-speaking members were essentially unmonitored. Within 48 hours of deployment, we identified critical compliance gaps in our interpreter line that had gone unnoticed for months.",
    author: "Michael Torres",
    title: "Director of Quality Assurance",
    company: "Pacific Care MCO",
    initials: "MT",
    rating: 5,
  },
  {
    quote: "The CMS scoring alone saved our compliance team hundreds of hours per quarter. But the real game-changer was getting full visibility into our vendor calls—we finally have the evidence to hold them accountable.",
    author: "Dr. Linda Osei",
    title: "Chief Quality Officer",
    company: "Meridian Health Plan",
    initials: "LO",
    rating: 5,
  },
];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="customers" className="bg-white py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2B4865_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2B4865]/5 border border-[#2B4865]/10 text-[#2B4865] text-[14px] font-semibold tracking-wide uppercase font-['Instrument_Sans',system-ui,sans-serif] mb-6">
            Customer Success
          </div>
          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[26px] md:text-[34px] font-semibold text-[#2B4865] mb-4 leading-[1.1] text-center tracking-tight">
            Proof, not promises.
          </h2>
          <p className="text-[#769FCD] text-[15px] md:text-[18px] leading-[1.6] text-center max-w-2xl font-['Charter',Georgia,serif]">
            Forward-thinking health plans are using Mizzeto to guarantee exceptional care across all member populations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          className="max-w-4xl mx-auto bg-[#1e4060] rounded-[16px] md:rounded-[24px] p-6 md:p-10 shadow-[0_32px_64px_-16px_rgba(43,72,101,0.25)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-[#769FCD]/10 blur-3xl"></div>
          <Quote className="absolute top-8 right-12 w-32 h-32 text-white/5 -rotate-6" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center relative z-10"
            >
              {/* Avatar */}
              <div className="w-28 h-28 md:w-44 md:h-44 flex-shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#769FCD] to-[#2B4865] rounded-full blur-[2px] scale-105"></div>
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#769FCD] to-[#2B4865] flex items-center justify-center relative z-10 border-4 border-[#1e4060]">
                  <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[32px] md:text-[48px] font-bold text-white/90 select-none">
                    {t.initials}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex gap-1.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#B9D7EA] fill-[#B9D7EA]" />
                  ))}
                </div>

                <blockquote className="text-[16px] md:text-[20px] text-white leading-[1.5] italic font-['Charter',Georgia,serif]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="pt-2 border-t border-[#2B4865]/50">
                  <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[15px] font-bold text-white tracking-wide">
                    {t.author}
                  </div>
                  <div className="text-[#B9D7EA] text-[13px] font-['Charter',Georgia,serif] mt-0.5">
                    {t.title}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 relative z-10">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setDirection(idx > current ? 1 : -1); setCurrent(idx); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === current ? 'bg-[#769FCD] w-8' : 'bg-[#2B4865] hover:bg-[#769FCD]/40'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => paginate(-1)}
                className="w-10 h-10 rounded-full border border-[#2B4865] hover:border-[#769FCD]/50 flex items-center justify-center text-[#B9D7EA] hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-10 h-10 rounded-full border border-[#2B4865] hover:border-[#769FCD]/50 flex items-center justify-center text-[#B9D7EA] hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
