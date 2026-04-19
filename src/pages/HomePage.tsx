import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Gauge, Target, TrendingUp, MessageSquare, Zap, Cog, CheckCircle, Clock, Shield, Sparkles, Users, BarChart3, Brain, Workflow } from 'lucide-react';
import { useRef } from 'react';
import { GradientBackground } from '../components/GradientBackground';
import type { PageType } from '../App';
import coverLogo from 'figma:asset/a473a3907a0ac1f08dca1a2a4f3e444190c8ea6c.png';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

// Scroll reveal component
function ScrollReveal({ 
  children, 
  direction = 'up',
  delay = 0,
  className = ''
}: { 
  children: React.ReactNode; 
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}) {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for children animations
function StaggerContainer({ 
  children, 
  className = '',
  staggerDelay = 0.1
}: { 
  children: React.ReactNode; 
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HomePage({ onNavigate }: HomePageProps) {
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: whatWeDoRef,
    offset: ['start end', 'end start']
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 1]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Gradient */}
      <GradientBackground variant="dark-blue" className="min-h-screen flex items-center justify-center pt-20">
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div 
            className="absolute inset-0 -mx-[100vw] left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] pointer-events-none overflow-hidden"
            style={{ background: '#0A0E1A' }}
          >
            {/* Light Splash Gradient Effects */}
            <div 
              className="absolute top-0 left-0 right-0 h-full"
              style={{
                background: `
                  radial-gradient(ellipse 800px 600px at 20% 10%, rgba(0, 128, 228, 0.25) 0%, transparent 50%),
                  radial-gradient(ellipse 700px 500px at 80% 20%, rgba(125, 65, 185, 0.2) 0%, transparent 50%),
                  radial-gradient(ellipse 600px 400px at 50% 80%, rgba(0, 128, 228, 0.15) 0%, transparent 50%)
                `,
              }}
            />
            
            {/* Lighter accent splashes */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle 400px at 30% 30%, rgba(0, 128, 228, 0.3) 0%, transparent 60%),
                  radial-gradient(circle 350px at 70% 15%, rgba(125, 65, 185, 0.25) 0%, transparent 60%),
                  radial-gradient(circle 300px at 60% 70%, rgba(0, 128, 228, 0.2) 0%, transparent 60%),
                  radial-gradient(circle 250px at 15% 60%, rgba(125, 65, 185, 0.15) 0%, transparent 60%)
                `,
                filter: 'blur(40px)',
              }}
            />
          </div>
          <div className="relative z-10">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img 
                src={coverLogo}
                alt="HAIM8 - Simplifying AI for everyday business"
                className="mx-auto max-w-full"
                style={{ height: 'auto', maxWidth: '700px', width: '100%' }}
              />
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center gap-4 text-white/70 mb-12"
              style={{ fontSize: '14px', letterSpacing: '0.12em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span>GOVERNED BY DESIGN</span>
              <span className="text-[#0080E4]">•</span>
              <span>BUILT FOR GROWTH</span>
            </motion.div>

            <motion.p 
              className="text-white/80 max-w-3xl mx-auto mb-12"
              style={{ fontSize: '20px', lineHeight: '32px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Deploy AI assistants in days, capture every lead in real-time, and reduce manual workload by up to 70%—all with enterprise-grade governance built in.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button 
                onClick={() => onNavigate('contact')}
                className="group px-8 py-4 bg-gradient-to-r from-[#0080E4] to-[#7D41B9] text-white rounded-lg hover:shadow-2xl transition-all flex items-center gap-2"
                style={{ fontSize: '18px', fontWeight: 600 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                onClick={() => onNavigate('how-it-works')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all flex items-center gap-2"
                style={{ 
                  fontSize: '18px', 
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                See How It Works
              </motion.button>
            </motion.div>
          </div>
        </div>
      </GradientBackground>

      {/* What We Do Section - NEW SCROLL ANIMATION SECTION */}
      <section ref={whatWeDoRef} className="relative py-32 px-6 bg-[#0A0E1A] overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0080E4]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7D41B9]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Section Header */}
          <ScrollReveal className="text-center mb-20">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-6 border border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-[#0080E4]" />
              <span className="text-[#0080E4] text-sm font-semibold tracking-wider">WHAT WE DO</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              We Build <span className="gradient-text">Intelligent Systems</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Transform your business operations with AI that understands, learns, and adapts to your unique needs.
            </p>
          </ScrollReveal>

          {/* Scroll-triggered Story Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" style={{ transform: 'translateX(-50%)' }}>
              <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#0080E4] via-[#7D41B9] to-[#0080E4]"
                style={{ height: lineHeight }}
              />
            </div>

            {/* Story Points */}
            <div className="space-y-24 lg:space-y-32">
              {/* Point 1: Understanding */}
              <motion.div 
                className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                style={{ opacity: opacity1 }}
              >
                <div className="lg:text-right order-2 lg:order-1">
                  <ScrollReveal direction="left">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0080E4] to-[#7D41B9] mb-6">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      We Understand Your Business
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      Our AI systems analyze your workflows, customer interactions, and operational patterns to create a comprehensive understanding of how your business operates.
                    </p>
                  </ScrollReveal>
                </div>
                <div className="order-1 lg:order-2">
                  <ScrollReveal direction="right" delay={0.2}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0080E4]/20 to-[#7D41B9]/20 rounded-3xl blur-xl" />
                      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-3 h-3 rounded-full bg-[#0080E4] animate-pulse" />
                          <span className="text-white/40 text-sm">Analyzing business patterns...</span>
                        </div>
                        <div className="space-y-3">
                          {['Customer behavior', 'Workflow bottlenecks', 'Revenue opportunities', 'Operational inefficiencies'].map((item, i) => (
                            <motion.div 
                              key={item}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                            >
                              <CheckCircle className="w-5 h-5 text-[#0080E4]" />
                              <span className="text-white/70">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0080E4] border-4 border-[#0A0E1A] z-10" />
              </motion.div>

              {/* Point 2: Building */}
              <motion.div 
                className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                style={{ opacity: opacity2 }}
              >
                <div className="order-1">
                  <ScrollReveal direction="left" delay={0.2}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#7D41B9]/20 to-[#0080E4]/20 rounded-3xl blur-xl" />
                      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { icon: MessageSquare, label: 'AI Assistant', color: '#0080E4' },
                            { icon: Zap, label: 'Automation', color: '#7D41B9' },
                            { icon: BarChart3, label: 'Analytics', color: '#0080E4' },
                            { icon: Users, label: 'CRM Integration', color: '#7D41B9' },
                          ].map((item, i) => (
                            <motion.div
                              key={item.label}
                              className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            >
                              <item.icon className="w-8 h-8 mx-auto mb-2" style={{ color: item.color }} />
                              <span className="text-white/70 text-sm">{item.label}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
                <div className="lg:text-left order-2">
                  <ScrollReveal direction="right">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7D41B9] to-[#0080E4] mb-6">
                      <Workflow className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      We Build Custom AI Solutions
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      Every business is unique. We craft tailored AI assistants, automation workflows, and analytics dashboards that fit seamlessly into your existing operations.
                    </p>
                  </ScrollReveal>
                </div>
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#7D41B9] border-4 border-[#0A0E1A] z-10" />
              </motion.div>

              {/* Point 3: Deploying */}
              <motion.div 
                className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                style={{ opacity: opacity3 }}
              >
                <div className="lg:text-right order-2 lg:order-1">
                  <ScrollReveal direction="left">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0080E4] to-[#7D41B9] mb-6">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      We Deploy at Lightning Speed
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      Go from concept to production in days, not months. Our rapid deployment methodology ensures you start seeing ROI within the first week.
                    </p>
                  </ScrollReveal>
                </div>
                <div className="order-1 lg:order-2">
                  <ScrollReveal direction="right" delay={0.2}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0080E4]/20 to-[#7D41B9]/20 rounded-3xl blur-xl" />
                      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-white font-semibold">Deployment Timeline</span>
                          <span className="text-[#0080E4] text-sm">7 Days</span>
                        </div>
                        <div className="space-y-4">
                          {[
                            { day: 'Day 1-2', task: 'Discovery & Setup', progress: 100 },
                            { day: 'Day 3-4', task: 'AI Training', progress: 100 },
                            { day: 'Day 5-6', task: 'Integration', progress: 80 },
                            { day: 'Day 7', task: 'Go Live', progress: 40 },
                          ].map((item, i) => (
                            <motion.div 
                              key={item.day}
                              className="space-y-2"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                            >
                              <div className="flex justify-between text-sm">
                                <span className="text-white/60">{item.task}</span>
                                <span className="text-white/40">{item.day}</span>
                              </div>
                              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-gradient-to-r from-[#0080E4] to-[#7D41B9] rounded-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${item.progress}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0080E4] border-4 border-[#0A0E1A] z-10" />
              </motion.div>

              {/* Point 4: Results */}
              <motion.div 
                className="relative"
                style={{ opacity: opacity4 }}
              >
                <ScrollReveal className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7D41B9] to-[#0080E4] mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    We Deliver Measurable Results
                  </h3>
                  <p className="text-white/60 text-lg max-w-2xl mx-auto">
                    Our clients see tangible improvements across every key metric that matters to their business.
                  </p>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
                  {[
                    { value: '70%', label: 'Reduction in Manual Work', icon: Clock, color: '#0080E4' },
                    { value: '3x', label: 'More Qualified Leads', icon: Target, color: '#7D41B9' },
                    { value: '24/7', label: 'Customer Coverage', icon: MessageSquare, color: '#0080E4' },
                  ].map((stat) => (
                    <StaggerItem key={stat.label}>
                      <motion.div 
                        className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-center group"
                        whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0080E4]/10 to-[#7D41B9]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <stat.icon className="w-10 h-10 mx-auto mb-4" style={{ color: stat.color }} />
                        <p className="text-5xl md:text-6xl font-bold gradient-text mb-2">{stat.value}</p>
                        <p className="text-white/60">{stat.label}</p>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 -top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#7D41B9] border-4 border-[#0A0E1A] z-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Overview - Light Background */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0080E4]/10 to-[#7D41B9]/10 rounded-full mb-6">
              <span className="text-[#0080E4]" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em' }}>
                WHY HAIM8
              </span>
            </div>
            <h2 
              className="mb-6"
              style={{ 
                fontSize: '48px', 
                lineHeight: '56px', 
                fontWeight: 600,
                background: 'linear-gradient(120deg, #7D41B9 0%, #0080E4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              From tools to orchestration
            </h2>
            <p className="text-[#6B6F7B] max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '28px' }}>
              We make AI accessible, practical, and impactful for SMEs who want results—not complexity.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              { icon: Gauge, title: 'Speed', desc: 'Deploy AI assistants in days, not quarters.', color: '#0080E4' },
              { icon: Target, title: 'Conversion', desc: 'Capture every lead, respond in real-time.', color: '#7D41B9' },
              { icon: TrendingUp, title: 'Margin', desc: 'Reduce manual workload by up to 70%.', color: '#0080E4' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div 
                  className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-white border-2 border-transparent hover:border-[#0080E4]/30 transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ y: -8 }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}99 100%)`,
                    }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-[#1A1D26] mb-2" style={{ fontSize: '24px', fontWeight: 600 }}>{item.title}</p>
                    <p className="text-[#6B6F7B]" style={{ fontSize: '16px', lineHeight: '24px' }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Solutions Preview - Gradient Background */}
      <GradientBackground variant="blue-purple" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em' }}>
                OUR SOLUTIONS
              </span>
            </div>
            <h3 className="text-white mb-4" style={{ fontSize: '48px', fontWeight: 600 }}>
              Three Ways We Help You Grow
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto" style={{ fontSize: '18px' }}>
              Click to explore each solution in detail
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              { 
                icon: MessageSquare, 
                title: 'AI Concierge', 
                page: 'ai-concierge' as PageType, 
                desc: 'Handle customer inquiries 24/7 with intelligent automation',
                features: ['24/7 availability', 'Natural conversations', 'CRM integration']
              },
              { 
                icon: Zap, 
                title: 'GTM Engine', 
                page: 'gtm-engine' as PageType, 
                desc: 'Accelerate market entry with AI-powered lead generation',
                features: ['Smart targeting', 'Automated outreach', '3x more leads']
              },
              { 
                icon: Cog, 
                title: 'Business Process Automation', 
                page: 'bpa' as PageType, 
                desc: 'Streamline operations and reduce manual work by 70%',
                features: ['Document processing', 'Workflow automation', '95% accuracy']
              },
            ].map((solution) => (
              <StaggerItem key={solution.title}>
                <motion.button
                  onClick={() => onNavigate(solution.page)}
                  className="group w-full p-8 bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/20 hover:border-white/40 transition-all text-left hover:bg-white/15"
                  style={{
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-white/90 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-7 h-7 text-[#0080E4]" />
                  </div>
                  <p className="text-white mb-3" style={{ fontSize: '24px', fontWeight: 600 }}>{solution.title}</p>
                  <p className="text-white/80 mb-6" style={{ fontSize: '15px', lineHeight: '24px' }}>{solution.desc}</p>
                  
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-white/70">
                        <CheckCircle className="w-4 h-4 text-white/90" />
                        <span style={{ fontSize: '13px' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-white group-hover:gap-2 transition-all">
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </GradientBackground>

      {/* Social Proof / Stats - Light Background */}
      <section className="py-24 px-6 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 
              className="mb-4"
              style={{ 
                fontSize: '40px', 
                fontWeight: 600,
                background: 'linear-gradient(120deg, #7D41B9 0%, #0080E4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Trusted by Growing Businesses
            </h2>
            <p className="text-[#6B6F7B]" style={{ fontSize: '18px' }}>
              Real results from real companies
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              { stat: '70%', label: 'Reduction in manual workload' },
              { stat: '3x', label: 'More qualified leads generated' },
              { stat: '24/7', label: 'Customer support coverage' },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <motion.div
                  className="p-8 bg-white rounded-2xl shadow-lg text-center border border-[#E8E8E9]"
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                >
                  <p 
                    className="mb-2"
                    style={{ 
                      fontSize: '56px', 
                      fontWeight: 700,
                      background: 'linear-gradient(120deg, #7D41B9 0%, #0080E4 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {item.stat}
                  </p>
                  <p className="text-[#6B6F7B]" style={{ fontSize: '16px' }}>
                    {item.label}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Now Section - Light with Glassmorphic Cards */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 
              className="mb-4"
              style={{ 
                fontSize: '40px', 
                fontWeight: 600,
                background: 'linear-gradient(120deg, #7D41B9 0%, #0080E4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Why Start Now?
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {[
              { icon: Clock, title: 'Fast Deployment', desc: '7-day pilot gets you up and running immediately' },
              { icon: Shield, title: 'Enterprise Security', desc: 'Built-in governance and compliance from day one' },
              { icon: TrendingUp, title: 'Immediate ROI', desc: 'See measurable results in your first month' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="p-8 rounded-2xl border-2 border-[#E8E8E9] hover:border-[#0080E4]/30 transition-all bg-gradient-to-br from-white to-[#F8F9FB]"
                  whileHover={{ y: -5 }}
                >
                  <item.icon className="w-12 h-12 text-[#0080E4] mb-4" />
                  <h3 className="text-[#1A1D26] mb-3" style={{ fontSize: '20px', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-[#6B6F7B]" style={{ fontSize: '15px', lineHeight: '24px' }}>
                    {item.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section - Gradient Background */}
      <GradientBackground variant="purple-blue" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 
              className="text-white mb-6"
              style={{ fontSize: '48px', fontWeight: 600 }}
            >
              Ready to Transform Your Business?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p 
              className="text-white/90 mb-10"
              style={{ fontSize: '20px', lineHeight: '32px' }}
            >
              Start your 7-day pilot today. No long-term contracts required.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => onNavigate('contact')}
                className="px-10 py-4 bg-white text-[#0080E4] rounded-lg hover:shadow-2xl transition-all"
                style={{ fontSize: '18px', fontWeight: 600 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Now
              </motion.button>
              <motion.button
                onClick={() => onNavigate('pricing')}
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                style={{ 
                  fontSize: '18px', 
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Pricing
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </GradientBackground>
    </div>
  );
}
