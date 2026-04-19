import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare, Clock, Users, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import type { PageType } from '../App';

interface AIConciergeDetailPageProps {
  onNavigate: (page: PageType) => void;
}

export function AIConciergeDetailPage({ onNavigate }: AIConciergeDetailPageProps) {
  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry. Our AI assistants work around the clock to handle questions, bookings, and support requests.',
    },
    {
      icon: Users,
      title: 'Natural Conversations',
      description: 'Advanced language models enable human-like interactions that understand context, nuance, and customer intent.',
    },
    {
      icon: BarChart3,
      title: 'CRM Integration',
      description: 'Seamlessly connects with your existing CRM, updating customer records and triggering workflows automatically.',
    },
  ];

  const benefits = [
    'Reduce response time from hours to seconds',
    'Handle unlimited concurrent conversations',
    'Automatically qualify and route leads',
    'Maintain consistent brand voice',
    'Learn and improve from every interaction',
    'Full conversation history and analytics',
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
                <MessageSquare className="w-5 h-5 text-[#0080E4]" />
                <span className="text-white text-sm font-semibold">AI Concierge</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Your Always-On <span className="gradient-text">Customer Assistant</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Deploy intelligent AI assistants that handle customer inquiries, book appointments, 
                and provide support—24 hours a day, 7 days a week. Never let a lead go cold again.
              </p>
              <motion.button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#0080E4] to-[#7D41B9] text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
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
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0080E4] to-[#7D41B9] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">HAIM8 Assistant</p>
                    <p className="text-white/40 text-sm">Online</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { type: 'user', text: 'Hi, I need help with pricing' },
                    { type: 'ai', text: 'I\'d be happy to help! Our pricing starts at $299/month. Would you like me to schedule a call with our team?' },
                    { type: 'user', text: 'Yes, please schedule for tomorrow' },
                    { type: 'ai', text: 'Perfect! I\'ve scheduled a call for tomorrow at 2 PM. You\'ll receive a confirmation email shortly.' },
                  ].map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.15 }}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                          msg.type === 'user'
                            ? 'bg-gradient-to-r from-[#0080E4] to-[#7D41B9] text-white'
                            : 'bg-white/10 text-white/90'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </GradientBackground>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Key Features</h2>
            <p className="text-[#6B6F7B] text-lg">Everything you need to deliver exceptional customer experiences</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="p-8 rounded-2xl bg-[#F8F9FB] border border-[#E8E8E9] hover:border-[#0080E4]/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0080E4] to-[#7D41B9] flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1D26] mb-3">{feature.title}</h3>
                <p className="text-[#6B6F7B] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <GradientBackground variant="blue-purple" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose AI Concierge?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Transform how you engage with customers and watch your satisfaction scores soar.
              </p>
              <motion.button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-white text-[#0080E4] rounded-lg font-semibold hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </GradientBackground>
    </div>
  );
}
