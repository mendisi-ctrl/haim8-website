import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Sparkles } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import type { PageType } from '../App';

interface AboutUsPageProps {
  onNavigate?: (page: PageType) => void;
}

export function AboutUsPage({ onNavigate: _onNavigate }: AboutUsPageProps) {
  const values = [
    {
      icon: Target,
      title: 'Results First',
      description: 'We measure success by the tangible outcomes we deliver for our clients.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay at the forefront of AI technology to bring you the best solutions.',
    },
    {
      icon: Heart,
      title: 'Customer Obsessed',
      description: 'Your success is our success. We go above and beyond to help you win.',
    },
  ];

  const team = [
    { name: 'Alex Thompson', role: 'CEO & Co-Founder', initials: 'AT' },
    { name: 'Maria Garcia', role: 'CTO & Co-Founder', initials: 'MG' },
    { name: 'James Wilson', role: 'Head of AI', initials: 'JW' },
    { name: 'Sarah Kim', role: 'Head of Customer Success', initials: 'SK' },
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
              <span className="text-white text-sm font-semibold">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simplifying AI for <span className="gradient-text">Everyone</span>
            </h1>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
              We believe every business deserves access to powerful AI tools. 
              Our mission is to make AI practical, accessible, and impactful for SMEs worldwide.
            </p>
          </motion.div>
        </div>
      </GradientBackground>

      {/* Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Our Mission</h2>
            <p className="text-[#6B6F7B] text-lg leading-relaxed">
              At HAIM8, we're on a mission to democratize AI for small and medium businesses. 
              We saw that while large enterprises had access to cutting-edge AI tools, smaller 
              companies were being left behind. We built HAIM8 to change that—to give every 
              business the power of intelligent automation, regardless of size or technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <GradientBackground variant="blue-purple" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-white/70 text-lg">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#0080E4]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </GradientBackground>

      {/* Team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Meet the Team</h2>
            <p className="text-[#6B6F7B] text-lg">The people behind HAIM8</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0080E4] to-[#7D41B9] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{member.initials}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1D26]">{member.name}</h3>
                <p className="text-[#6B6F7B] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
