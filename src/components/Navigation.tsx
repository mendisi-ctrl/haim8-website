import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import type { PageType } from '../App';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const solutions = [
  { label: 'AI Concierge', page: 'ai-concierge' as PageType },
  { label: 'GTM Engine', page: 'gtm-engine' as PageType },
  { label: 'Business Process Automation', page: 'bpa' as PageType },
];

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageType) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  const navLinks = [
    { label: 'Home', page: 'home' as PageType },
    { label: 'How It Works', page: 'how-it-works' as PageType },
    { label: 'Customers', page: 'customers' as PageType },
    { label: 'Pricing', page: 'pricing' as PageType },
    { label: 'About', page: 'about' as PageType },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0E1A]/90 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold">
              <span className="text-white">H</span>
              <span className="text-[#0080E4]">AI</span>
              <span className="text-white">M8</span>
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.page}
                onClick={() => handleNavigate(link.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-[#0080E4]'
                    : 'text-white/70 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Solutions Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-[#0A0E1A]/95 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden"
                  >
                    {solutions.map((solution) => (
                      <button
                        key={solution.page}
                        onClick={() => handleNavigate(solution.page)}
                        className={`w-full px-4 py-3 text-left text-sm transition-colors hover:bg-white/5 ${
                          currentPage === solution.page ? 'text-[#0080E4]' : 'text-white/70'
                        }`}
                      >
                        {solution.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              onClick={() => handleNavigate('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#0080E4] to-[#7D41B9] text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0E1A]/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavigate(link.page)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentPage === link.page
                      ? 'bg-white/10 text-[#0080E4]'
                      : 'text-white/70 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-white/10">
                <p className="px-4 py-2 text-xs text-white/40 uppercase tracking-wider">Solutions</p>
                {solutions.map((solution) => (
                  <button
                    key={solution.page}
                    onClick={() => handleNavigate(solution.page)}
                    className="block w-full text-left px-4 py-3 text-white/70 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {solution.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handleNavigate('contact')}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#0080E4] to-[#7D41B9] text-white font-semibold rounded-lg"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
