import { Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: ["Platform", "Integrations", "Security", "Pricing"]
    },
    {
      title: "Solutions",
      links: ["For Health Plans", "For BPOs", "Multilingual QA", "CMS Compliance"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Contact"]
    }
  ];

  return (
    <footer className="bg-white py-16 md:py-24 border-t border-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          
          <div className="md:col-span-1 space-y-6">
            {/* Logo placeholder */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#163f38] rounded-md"></div>
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[24px] font-bold text-[#163f38] tracking-tight">
                Mizzeto
              </span>
            </div>
            <p className="text-[#5a5a5a] text-[16px] leading-[1.6] font-['Charter',Georgia,serif]">
              Empowering healthcare organizations with actionable insights across 100% of multilingual interactions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#1a1a1a] hover:text-[#7da17e] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#1a1a1a] hover:text-[#7da17e] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#1a1a1a] hover:text-[#7da17e] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="font-['Instrument_Sans',system-ui,sans-serif] text-[16px] font-semibold text-[#1a1a1a] mb-6 tracking-wide">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-[#5a5a5a] text-[14px] hover:text-[#163f38] transition-colors font-['Instrument_Sans',system-ui,sans-serif] font-medium">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className="pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#5a5a5a] text-[14px] font-['Charter',Georgia,serif]">
            © {new Date().getFullYear()} Mizzeto Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#5a5a5a] text-[14px] hover:text-[#163f38] font-['Charter',Georgia,serif]">
              Privacy Policy
            </a>
            <a href="#" className="text-[#5a5a5a] text-[14px] hover:text-[#163f38] font-['Charter',Georgia,serif]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
