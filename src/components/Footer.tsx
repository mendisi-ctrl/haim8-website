import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import type { PageType } from '../App';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    solutions: [
      { label: 'AI Concierge', page: 'ai-concierge' as PageType },
      { label: 'GTM Engine', page: 'gtm-engine' as PageType },
      { label: 'Process Automation', page: 'bpa' as PageType },
    ],
    company: [
      { label: 'About Us', page: 'about' as PageType },
      { label: 'How It Works', page: 'how-it-works' as PageType },
      { label: 'Customers', page: 'customers' as PageType },
      { label: 'Pricing', page: 'pricing' as PageType },
    ],
    support: [
      { label: 'Contact', page: 'contact' as PageType },
      { label: 'Documentation', page: 'how-it-works' as PageType },
    ],
  };

  return (
    <footer className="bg-[#0A0E1A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl font-bold">
                <span className="text-white">H</span>
                <span className="text-[#0080E4]">AI</span>
                <span className="text-white">M8</span>
              </span>
            </motion.button>
            <p className="text-white/60 mb-6 max-w-sm" style={{ fontSize: '15px', lineHeight: '24px' }}>
              Simplifying AI for everyday business. Deploy intelligent assistants that work 24/7 to grow your business.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg text-white/60 hover:text-white hover:bg-white/20 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg text-white/60 hover:text-white hover:bg-white/20 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg text-white/60 hover:text-white hover:bg-white/20 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-white/60 hover:text-[#0080E4] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-white/60 hover:text-[#0080E4] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-white/60 hover:text-[#0080E4] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 HAIM8. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
