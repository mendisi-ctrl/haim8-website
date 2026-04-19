import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Clock } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import type { PageType } from '../App';

interface CustomersPageProps {
  onNavigate?: (page: PageType) => void;
}

export function CustomersPage({ onNavigate: _onNavigate }: CustomersPageProps) {
  const testimonials = [
    {
      quote: "HAIM8 transformed our customer support. We went from 48-hour response times to instant replies, and our customer satisfaction scores jumped by 40%.",
      author: "Sarah Chen",
      role: "COO, TechStart Inc.",
      metric: "40%",
      metricLabel: "CSAT Improvement",
    },
    {
      quote: "The GTM Engine generated more qualified leads in one month than our previous agency did in six. It's been a game-changer for our sales team.",
      author: "Michael Roberts",
      role: "VP Sales, GrowthCo",
      metric: "3x",
      metricLabel: "More Leads",
    },
    {
      quote: "We automated 70% of our manual data entry processes. Our team can now focus on strategic work instead of copy-pasting between systems.",
      author: "Emily Watson",
      role: "Operations Director, ScaleUp Ltd",
      metric: "70%",
      metricLabel: "Time Saved",
    },
  ];

  const stats = [
    { value: '150+', label: 'Active Clients', icon: Users },
    { value: '2M+', label: 'Conversations Handled', icon: Quote },
    { value: '40%', label: 'Avg. Efficiency Gain', icon: TrendingUp },
    { value: '24/7', label: 'Support Coverage', icon: Clock },
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
              Trusted by <span className="gradient-text">Growing Businesses</span>
            </h1>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
              See how companies like yours are using HAIM8 to transform their operations 
              and accelerate growth.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <stat.icon className="w-8 h-8 text-[#0080E4] mx-auto mb-3" />
                <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </GradientBackground>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">What Our Clients Say</h2>
            <p className="text-[#6B6F7B] text-lg">Real results from real businesses</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-[#F8F9FB] border border-[#E8E8E9] relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Quote className="w-10 h-10 text-[#0080E4]/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#0080E4] text-[#0080E4]" />
                  ))}
                </div>
                <p className="text-[#1A1D26] mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="pt-6 border-t border-[#E8E8E9]">
                  <p className="font-semibold text-[#1A1D26]">{testimonial.author}</p>
                  <p className="text-[#6B6F7B] text-sm">{testimonial.role}</p>
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-[#0080E4]/10 to-[#7D41B9]/10 rounded-xl">
                  <p className="text-2xl font-bold gradient-text">{testimonial.metric}</p>
                  <p className="text-[#6B6F7B] text-sm">{testimonial.metricLabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <GradientBackground variant="blue-purple" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="text-center text-white/60 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted by innovative companies worldwide
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-12 opacity-60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
          >
            {['TechStart', 'GrowthCo', 'ScaleUp', 'InnovateLab', 'FutureWorks', 'DataDriven'].map((company, i) => (
              <div key={i} className="text-white text-xl font-bold">
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </GradientBackground>
    </div>
  );
}
