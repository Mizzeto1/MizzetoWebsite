import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`bg-white/80 backdrop-blur-md border-b border-[#DBE2EF] sticky top-0 z-50 transition-shadow duration-300 ${hasScrolled ? 'shadow-[0_1px_8px_rgba(17,45,78,0.06)]' : ''}`}>
      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-[#3F72AF] z-50 transition-none" style={{ width: `${scrollProgress * 100}%` }} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-7 h-7 bg-[#112D4E] rounded-lg flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[20px] font-bold text-[#112D4E] tracking-tight">
              Mizzeto
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#product" onClick={(e) => handleNavClick(e, 'product')} className="font-['Instrument_Sans',system-ui,sans-serif] text-[#5a7b9e] text-[15px] font-medium hover:text-[#112D4E] transition-colors duration-200">
              Product
            </a>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="font-['Instrument_Sans',system-ui,sans-serif] text-[#5a7b9e] text-[15px] font-medium hover:text-[#112D4E] transition-colors duration-200">
              How It Works
            </a>
            <a href="#customers" onClick={(e) => handleNavClick(e, 'customers')} className="font-['Instrument_Sans',system-ui,sans-serif] text-[#5a7b9e] text-[15px] font-medium hover:text-[#112D4E] transition-colors duration-200">
              Customers
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#5a7b9e] text-[14px] font-medium hover:text-[#112D4E] transition-colors">
              Log In
            </a>
            <button className="bg-[#112D4E] text-white px-5 py-2.5 rounded-[8px] hover:bg-[#0a1f3a] transition-all font-['Instrument_Sans',system-ui,sans-serif] font-medium text-[14px] shadow-[0_2px_4px_rgba(17,45,78,0.15)] hover:shadow-[0_4px_8px_rgba(17,45,78,0.2)] hover:-translate-y-0.5">
              Book Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-[#112D4E] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#DBE2EF] bg-white overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-6">
              <a href="#product" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#112D4E] text-[18px] font-semibold" onClick={(e) => handleNavClick(e, 'product')}>Product</a>
              <a href="#how-it-works" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#112D4E] text-[18px] font-semibold" onClick={(e) => handleNavClick(e, 'how-it-works')}>How It Works</a>
              <a href="#customers" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#112D4E] text-[18px] font-semibold" onClick={(e) => handleNavClick(e, 'customers')}>Customers</a>

              <div className="h-px bg-[#DBE2EF] w-full my-2"></div>

              <a href="#login" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#5a7b9e] text-[16px] font-medium" onClick={() => setIsOpen(false)}>Log In</a>
              <button className="bg-[#112D4E] text-white px-6 py-3.5 rounded-[8px] font-['Instrument_Sans',system-ui,sans-serif] font-medium text-[16px] w-full mt-2" onClick={() => setIsOpen(false)}>
                Book Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}