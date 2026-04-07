import { Shield, Linkedin, FileText } from 'lucide-react';

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
    <footer className="bg-white py-10 md:py-14 border-t border-[#DBE2EF]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16 mb-10">

          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#112D4E] rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[22px] font-bold text-[#112D4E] tracking-tight">
                Mizzeto
              </span>
            </div>
            <p className="text-[#5a7b9e] text-[14px] leading-[1.6] font-['Charter',Georgia,serif]">
              Empowering healthcare organizations with actionable insights across 100% of multilingual interactions.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#F9F7F7] border border-[#DBE2EF] flex items-center justify-center text-[#112D4E] hover:bg-[#112D4E] hover:text-white hover:border-[#112D4E] transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Blog" className="w-9 h-9 rounded-full bg-[#F9F7F7] border border-[#DBE2EF] flex items-center justify-center text-[#112D4E] hover:bg-[#112D4E] hover:text-white hover:border-[#112D4E] transition-all duration-200">
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="font-['Instrument_Sans',system-ui,sans-serif] text-[14px] font-bold text-[#112D4E] mb-5 tracking-wide uppercase">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-[#5a7b9e] text-[14px] hover:text-[#112D4E] transition-colors font-['Instrument_Sans',system-ui,sans-serif] font-medium">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className="pt-8 border-t border-[#DBE2EF] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#5a7b9e] text-[13px] font-['Charter',Georgia,serif]">
            &copy; {new Date().getFullYear()} Mizzeto Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#5a7b9e] text-[13px] hover:text-[#112D4E] font-['Instrument_Sans',system-ui,sans-serif] font-medium transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#5a7b9e] text-[13px] hover:text-[#112D4E] font-['Instrument_Sans',system-ui,sans-serif] font-medium transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[#5a7b9e] text-[13px] hover:text-[#112D4E] font-['Instrument_Sans',system-ui,sans-serif] font-medium transition-colors">
              BAA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
