import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-[#E5E5E5] sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-8 h-8 bg-[#163f38] rounded-lg flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[24px] font-bold text-[#163f38] tracking-tight">
              Mizzeto
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#product" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#5a5a5a] text-[15px] font-medium hover:text-[#163f38] transition-colors hover:-translate-y-0.5 duration-200">
              Product
            </a>
            <a href="#how-it-works" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#5a5a5a] text-[15px] font-medium hover:text-[#163f38] transition-colors hover:-translate-y-0.5 duration-200">
              How It Works
            </a>
            <a href="#company" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#5a5a5a] text-[15px] font-medium hover:text-[#163f38] transition-colors hover:-translate-y-0.5 duration-200">
              Company
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#5a5a5a] text-[14px] font-medium hover:text-[#163f38] transition-colors">
              Log In
            </a>
            <button className="bg-[#163f38] text-white px-5 py-2.5 rounded-[8px] hover:bg-[#112d28] transition-all font-['Instrument_Sans',system-ui,sans-serif] font-medium text-[14px] shadow-[0_2px_4px_rgba(22,63,56,0.15)] hover:shadow-[0_4px_8px_rgba(22,63,56,0.2)] hover:-translate-y-0.5">
              Book Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-[#1a1a1a] hover:bg-gray-100 rounded-lg transition-colors"
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
            className="md:hidden border-t border-[#E5E5E5] bg-white overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-6">
              <a href="#product" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#1a1a1a] text-[18px] font-semibold" onClick={() => setIsOpen(false)}>Product</a>
              <a href="#how-it-works" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#1a1a1a] text-[18px] font-semibold" onClick={() => setIsOpen(false)}>How It Works</a>
              <a href="#company" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#1a1a1a] text-[18px] font-semibold" onClick={() => setIsOpen(false)}>Company</a>
              
              <div className="h-px bg-[#E5E5E5] w-full my-2"></div>
              
              <a href="#login" className="font-['Instrument_Sans',system-ui,sans-serif] text-[#5a5a5a] text-[16px] font-medium" onClick={() => setIsOpen(false)}>Log In</a>
              <button className="bg-[#163f38] text-white px-6 py-3.5 rounded-[8px] font-['Instrument_Sans',system-ui,sans-serif] font-medium text-[16px] w-full mt-2" onClick={() => setIsOpen(false)}>
                Book Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
