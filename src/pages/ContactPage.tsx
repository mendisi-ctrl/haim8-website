import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import { useState } from 'react';
import type { PageType } from '../App';

interface ContactPageProps {
  onNavigate?: (page: PageType) => void;
}

export function ContactPage({ onNavigate: _onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would send the form data to your backend
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@haim8.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GradientBackground variant="dark-blue" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-[#0080E4]" />
              <span className="text-white text-sm font-semibold">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your business with AI? We'd love to hear from you. 
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </GradientBackground>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">Contact Information</h2>
              <p className="text-[#6B6F7B] mb-8">
                Have questions? We're here to help. Reach out to us through any of these channels.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0080E4] to-[#7D41B9] flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B6F7B]">{item.label}</p>
                      <p className="text-[#1A1D26] font-semibold">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-[#F8F9FB] rounded-2xl border border-[#E8E8E9]">
                <h3 className="text-lg font-semibold text-[#1A1D26] mb-2">Response Time</h3>
                <p className="text-[#6B6F7B]">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <motion.div
                  className="p-8 bg-[#F8F9FB] rounded-3xl border border-[#E8E8E9] text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0080E4] to-[#7D41B9] flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1D26] mb-3">Message Sent!</h3>
                  <p className="text-[#6B6F7B]">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 bg-[#F8F9FB] rounded-3xl border border-[#E8E8E9]">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1D26] mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E8E9] bg-white focus:outline-none focus:ring-2 focus:ring-[#0080E4] focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1D26] mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E8E9] bg-white focus:outline-none focus:ring-2 focus:ring-[#0080E4] focus:border-transparent transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1D26] mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E8E9] bg-white focus:outline-none focus:ring-2 focus:ring-[#0080E4] focus:border-transparent transition-all"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1D26] mb-2">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E8E9] bg-white focus:outline-none focus:ring-2 focus:ring-[#0080E4] focus:border-transparent transition-all resize-none"
                        placeholder="How can we help?"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#0080E4] to-[#7D41B9] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
