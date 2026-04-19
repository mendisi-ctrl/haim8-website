import { motion } from 'framer-motion';
import { ArrowLeft, Cog, FileText, Workflow, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import type { PageType } from '../App';

interface BPADetailPageProps {
  onNavigate: (page: PageType) => void;
}

export function BPADetailPage({ onNavigate }: BPADetailPageProps) {
  const automations = [
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'Automatically extract data from invoices, contracts, and forms with 95% accuracy.',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Connect your apps and automate repetitive tasks across your entire tech stack.',
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that optimizes for availability, preferences, and time zones.',
    },
  ];

  const useCases = [
    { title: 'Invoice Processing', desc: 'Extract and reconcile invoice data automatically' },
    { title: 'Customer Onboarding', desc: 'Streamline new customer setup across systems' },
    { title: 'Report Generation', desc: 'Auto-generate weekly and monthly reports' },
    { title: 'Data Entry', desc: 'Eliminate manual data entry with intelligent extraction' },
    { title: 'Email Management', desc: 'Auto-sort, prioritize, and respond to emails' },
    { title: 'Approval Workflows', desc: 'Route documents for approval automatically' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GradientBackground variant="dark-blue" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Cog className="w-5 h-5 text-[#0080E4]" />
                <span className="text-white text-sm font-semibold">Business Process Automation</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Work Smarter, <span className="gradient-text">Not Harder</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Eliminate repetitive tasks and free your team to focus on what matters. 
                Our AI-powered automation handles the busy work with 95% accuracy.
              </p>
              <motion.button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#0080E4] to-[#7D41B9] text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Automate Your Workflows
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0080E4]/30 to-[#7D41B9]/30 rounded-3xl blur-2xl" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white font-semibold">Active Automations</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">12 Running</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Invoice Processing', status: 'Active', time: '2m ago' },
                    { name: 'Email Sorting', status: 'Active', time: '5m ago' },
                    { name: 'Report Generation', status: 'Active', time: '1h ago' },
                    { name: 'Data Sync', status: 'Active', time: '2h ago' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-white/90">{item.name}</span>
                      </div>
                      <span className="text-white/40 text-sm">{item.time}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Time Saved This Week</span>
                    <span className="text-white font-semibold">47 hours</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </GradientBackground>

      {/* Automation Types */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">What You Can Automate</h2>
            <p className="text-[#6B6F7B] text-lg">Streamline every aspect of your operations</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {automations.map((item, i) => (
              <motion.div
                key={item.title}
                className="p-8 rounded-2xl bg-[#F8F9FB] border border-[#E8E8E9] hover:border-[#0080E4]/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0080E4] to-[#7D41B9] flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1D26] mb-3">{item.title}</h3>
                <p className="text-[#6B6F7B] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <GradientBackground variant="blue-purple" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Popular Use Cases</h2>
            <p className="text-white/70 text-lg">See how teams are saving time with automation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item, i) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-start gap-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GradientBackground>

      {/* ROI Calculator Preview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">The ROI is Clear</h2>
            <p className="text-[#6B6F7B] text-lg">See how much you could save</p>
          </motion.div>

          <motion.div
            className="p-8 rounded-3xl bg-[#F8F9FB] border border-[#E8E8E9]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-[#0080E4] mb-2">70%</p>
                <p className="text-[#6B6F7B]">Reduction in manual work</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#7D41B9] mb-2">40+</p>
                <p className="text-[#6B6F7B]">Hours saved per week</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#0080E4] mb-2">95%</p>
                <p className="text-[#6B6F7B]">Processing accuracy</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#E8E8E9] text-center">
              <motion.button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#0080E4] to-[#7D41B9] text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Custom ROI Report
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
