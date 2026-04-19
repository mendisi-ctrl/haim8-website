import { motion } from 'framer-motion';
import { Search, Brain, Rocket, BarChart3, ArrowRight } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import type { PageType } from '../App';

interface HowItWorksPageProps {
  onNavigate: (page: PageType) => void;
}

export function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We start by understanding your business, challenges, and goals. Our team conducts a thorough analysis of your current workflows and identifies opportunities for AI-driven improvement.',
      details: ['Business process audit', 'Pain point identification', 'Opportunity mapping', 'Goal alignment'],
    },
    {
      icon: Brain,
      title: 'Design & Train',
      description: 'Our AI experts design a custom solution tailored to your needs. We train the AI models on your data and fine-tune them to understand your business context and customer interactions.',
      details: ['Custom AI model training', 'Workflow design', 'Integration planning', 'Security setup'],
    },
    {
      icon: Rocket,
      title: 'Deploy & Launch',
      description: 'We deploy your AI solution in a matter of days, not months. Our rapid deployment methodology ensures minimal disruption to your operations while maximizing immediate impact.',
      details: ['7-day pilot deployment', 'System integration', 'Team training', 'Go-live support'],
    },
    {
      icon: BarChart3,
      title: 'Optimize & Scale',
      description: 'Continuous improvement is built in. We monitor performance, gather insights, and optimize your AI systems to deliver increasingly better results over time.',
      details: ['Performance monitoring', 'Continuous learning', 'Regular optimization', 'Scale as you grow'],
    },
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How <span className="gradient-text">HAIM8 Works</span>
            </h1>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
              From discovery to deployment in days. Our proven process delivers AI solutions 
              that drive real business results—fast.
            </p>
          </motion.div>
        </div>
      </GradientBackground>

      {/* Steps Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0080E4]/10 to-[#7D41B9]/10 rounded-full mb-6">
                    <span className="text-[#0080E4] font-semibold">Step {i + 1}</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0080E4] to-[#7D41B9] flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1A1D26] mb-4">{step.title}</h2>
                  <p className="text-[#6B6F7B] text-lg leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, j) => (
                      <motion.li
                        key={detail}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + j * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-[#0080E4]/10 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#0080E4]" />
                        </div>
                        <span className="text-[#6B6F7B]">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0080E4]/20 to-[#7D41B9]/20 rounded-3xl blur-xl" />
                    <div className="relative bg-[#F8F9FB] rounded-3xl p-8 border border-[#E8E8E9]">
                      <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#0080E4]/10 to-[#7D41B9]/10 flex items-center justify-center">
                        <step.icon className="w-24 h-24 text-[#0080E4]/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <GradientBackground variant="blue-purple" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Your 7-Day Journey</h2>
            <p className="text-white/70 text-lg">From first call to fully deployed AI</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20" />
            {[
              { day: 'Day 1', title: 'Kickoff Call', desc: 'We align on goals and gather requirements' },
              { day: 'Day 2-3', title: 'Solution Design', desc: 'Our team designs your custom AI solution' },
              { day: 'Day 4-5', title: 'Training & Setup', desc: 'We train the AI and integrate with your systems' },
              { day: 'Day 6', title: 'Testing', desc: 'Rigorous testing to ensure everything works perfectly' },
              { day: 'Day 7', title: 'Go Live!', desc: 'Your AI solution is deployed and ready to work' },
            ].map((item, i) => (
              <motion.div
                key={item.day}
                className="relative flex items-start gap-8 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0080E4] font-bold text-sm">{item.day}</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GradientBackground>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-[#6B6F7B] text-lg mb-8">
              Book a free discovery call and see how we can help transform your business.
            </p>
            <motion.button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#0080E4] to-[#7D41B9] text-white rounded-lg font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Discovery Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
