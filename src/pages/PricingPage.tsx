import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import type { PageType } from '../App';

interface PricingPageProps {
  onNavigate: (page: PageType) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started with AI',
      price: '299',
      period: '/month',
      features: [
        '1 AI Assistant',
        '1,000 conversations/month',
        'Basic CRM integration',
        'Email support',
        'Standard analytics',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Growth',
      description: 'For growing businesses ready to scale',
      price: '799',
      period: '/month',
      features: [
        '3 AI Assistants',
        '10,000 conversations/month',
        'Advanced CRM integrations',
        'Priority support',
        'Advanced analytics',
        'Custom training',
        'Workflow automation',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited AI Assistants',
        'Unlimited conversations',
        'Full API access',
        'Dedicated support',
        'Custom analytics',
        'On-premise option',
        'SLA guarantee',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      highlighted: false,
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-[#0080E4]" />
              <span className="text-white text-sm font-semibold">Simple Pricing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Choose Your <span className="gradient-text">Plan</span>
            </h1>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
              Start with a 7-day free trial. No credit card required. 
              Cancel anytime.
            </p>
          </motion.div>
        </div>
      </GradientBackground>

      {/* Pricing Cards */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`relative p-8 rounded-3xl ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-[#0080E4] to-[#7D41B9] text-white scale-105 shadow-2xl'
                    : 'bg-[#F8F9FB] border border-[#E8E8E9]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#0080E4] rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-[#1A1D26]'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-[#6B6F7B]'}`}>
                    {plan.description}
                  </p>
                </div>
                <div className="mb-8">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#1A1D26]'}`}>
                    {plan.price !== 'Custom' && '$'}{plan.price}
                  </span>
                  <span className={plan.highlighted ? 'text-white/80' : 'text-[#6B6F7B]'}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? 'bg-white/20' : 'bg-[#0080E4]/10'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-[#0080E4]'}`} />
                      </div>
                      <span className={plan.highlighted ? 'text-white/90' : 'text-[#6B6F7B]'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  onClick={() => plan.name === 'Enterprise' ? onNavigate('contact') : onNavigate('contact')}
                  className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    plan.highlighted
                      ? 'bg-white text-[#0080E4] hover:shadow-xl'
                      : 'bg-gradient-to-r from-[#0080E4] to-[#7D41B9] text-white hover:shadow-xl'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <GradientBackground variant="purple-blue" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About Pricing?
            </h2>
            <p className="text-white/70 mb-8">
              Our team is here to help you find the perfect plan for your business.
            </p>
            <motion.button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-[#0080E4] rounded-lg font-semibold hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Sales
            </motion.button>
          </motion.div>
        </div>
      </GradientBackground>
    </div>
  );
}
