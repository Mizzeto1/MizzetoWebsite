import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "Mizzeto has completely changed how we audit our external BPOs. We used to check a 2% sample of interpreter calls; now we audit 100%. We instantly found language gaps we didn't know existed.",
      author: "Sarah Jenkins",
      title: "VP of Member Experience, Nationwide Health",
      image: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBoZWFsdGhjYXJlJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1NTA3NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5
    }
  ];

  return (
    <section id="customers" className="bg-white py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#112D4E_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#112D4E]/5 border border-[#112D4E]/10 text-[#112D4E] text-[14px] font-semibold tracking-wide uppercase font-['Instrument_Sans',system-ui,sans-serif] mb-6">
            Customer Success
          </div>
          <h2 className="font-['Instrument_Sans',system-ui,sans-serif] text-[26px] md:text-[34px] font-semibold text-[#112D4E] mb-4 leading-[1.1] text-center tracking-tight">
            Proof, not promises.
          </h2>
          <p className="text-[#5a7b9e] text-[15px] md:text-[18px] leading-[1.6] text-center max-w-2xl font-['Charter',Georgia,serif]">
            Forward-thinking health plans are using Mizzeto to guarantee exceptional care across all member populations.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          className="max-w-4xl mx-auto bg-[#0d1f35] rounded-[16px] md:rounded-[24px] p-6 md:p-10 shadow-[0_32px_64px_-16px_rgba(17,45,78,0.25)] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-[#3F72AF]/10 blur-3xl group-hover:bg-[#3F72AF]/20 transition-colors duration-1000"></div>
          <Quote className="absolute top-8 right-12 w-32 h-32 text-white/5 -rotate-6" />
          
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center relative z-10">
            <div className="w-36 h-36 md:w-56 md:h-56 flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF] to-[#112D4E] rounded-full blur-[2px] scale-105"></div>
              <ImageWithFallback 
                src={testimonials[0].image} 
                alt={testimonials[0].author} 
                className="w-full h-full object-cover rounded-full border-4 border-[#0d1f35] relative z-10"
              />
            </div>
            
            <div className="flex-1 space-y-8">
              <div className="flex gap-1.5">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#3F72AF] fill-[#3F72AF]" />
                ))}
              </div>
              
              <blockquote className="text-[17px] md:text-[22px] text-white leading-[1.5] italic font-['Charter',Georgia,serif]">
                "{testimonials[0].quote}"
              </blockquote>
              
              <div className="pt-2 border-t border-[#112D4E]/50">
                <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[16px] font-bold text-white tracking-wide">
                  {testimonials[0].author}
                </div>
                <div className="text-[#a8b8d4] text-[13px] font-['Charter',Georgia,serif] mt-1">
                  {testimonials[0].title}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}