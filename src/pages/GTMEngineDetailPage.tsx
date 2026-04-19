import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Target, TrendingUp, Mail, ArrowRight } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import type { PageType } from '../App';

interface GTMEngineDetailPageProps {
  onNavigate: (page: PageType) => void;
}

export function GTMEngineDetailPage({ onNavigate }: GTMEngineDetailPageProps) {
  const features = [
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'AI-powered audience segmentation identifies your ideal customers with precision accuracy.',
    },
    {
      icon: Mail,
      title: 'Automated Outreach',
      description: 'Personalized email and LinkedIn campaigns that scale without losing the human touch.',
    },
    {
      icon: TrendingUp,
      title: '3x More Leads',
      description: 'Our clients consistently see triple the qualified leads within the first 30 days.',
    },
  ];

  const process = [
    { step: '01', title: 'Audience Analysis', desc: 'We analyze your ideal customer profile and market data' },
    { step: '02', title: 'Campaign Creation', desc: 'AI generates personalized outreach at scale' },
    { step: '03', title: 'Engagement', desc: 'Automated follow-ups nurture leads through the funnel' },
    { step: '04', title: 'Conversion', desc: 'Qualified leads are handed off to your sales team' },
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

          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Zap className="w-5 h-5 text-[#0080E4]" />
                <span className="text-white text-sm font-semibold">GTM Engine</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Accelerate Your <span className="gradient-text">Market Entry</span>
              </h1>
              <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
                AI-powered lead generation that finds, engages, and converts your ideal customers. 
                Go from zero to pipeline in weeks, not quarters.
              </p>
              <motion.button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#0080E4] to-[#7D41B9] text-white rounded-lg font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Generating Leads
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { value: '3x', label: 'More Leads' },
              { value: '50%', label: 'Lower CAC' },
              { value: '10x', label: 'Faster Outreach' },
              { value: '85%', label: 'Open Rate' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
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
            <h2 className="text-4xl font-bold gradient-text mb-4">How It Works</h2>
            <p className="text-[#6B6F7B] text-lg">Four steps to a full pipeline</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E8E8E9] h-full">
                  <span className="text-5xl font-bold text-[#0080E4]/20">{item.step}</span>
                  <h3 className="text-xl font-semibold text-[#1A1D26] mt-4 mb-2">{item.title}</h3>
                  <p className="text-[#6B6F7B]">{item.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[#E8E8E9]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <GradientBackground variant="purple-blue" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-white/70 text-lg">Everything you need to dominate your market</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#0080E4]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </GradientBackground>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Ready to Fill Your Pipeline?
            </h2>
            <p className="text-[#6B6F7B] text-lg mb-8">
              Join hundreds of companies using GTM Engine to accelerate their growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#0080E4] to-[#7D41B9] text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Demo
              </motion.button>
              <motion.button
                onClick={() => onNavigate('pricing')}
                className="px-8 py-4 border-2 border-[#0080E4] text-[#0080E4] rounded-lg font-semibold hover:bg-[#0080E4] hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
