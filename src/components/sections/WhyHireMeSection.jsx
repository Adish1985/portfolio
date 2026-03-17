import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Code2, Clock, Sparkles } from 'lucide-react';

const WhyHireMeSection = () => {
  const points = [
    {
      icon: <Sparkles size={24} />,
      title: 'AI-Enhanced Efficiency',
      description: 'I leverage AI tools to accelerate development speed, ensuring faster delivery without compromising quality or security.'
    },
    {
      icon: <Code2 size={24} />,
      title: 'Clean & Maintainable Code',
      description: 'While AI assists in writing algorithms, I maintain strict architectural control to deliver scalable and readable codebases.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Rapid Problem Solving',
      description: 'A strong logical mindset combined with modern debugging tools enables me to identify and resolve complex issues swiftly.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Real-World Experience',
      description: 'Over a year of practical experience deploying and maintaining apps for real users and real business needs.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Continuous Learner',
      description: 'I constantly adapt to new frameworks and methodologies, ensuring my solutions utilize the latest industry standards.'
    }
  ];

  return (
    <section id="why-hire-me" className="section">
      <div className="container">
        <div className="glass-panel" style={{ padding: '4rem', position: 'relative', overflow: 'hidden' }}>
          
          <div 
            style={{ 
              position: 'absolute', bottom: -100, left: '50%', transform: 'translateX(-50%)',
              width: '400px', height: '400px', background: 'var(--accent-glow)', 
              filter: 'blur(100px)', zIndex: 0, opacity: 0.3, borderRadius: '50%'
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Why <span className="gradient-text">Hire Me?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
              I am a modern developer who treats AI as an assistant, not a crutch. I own the architecture, logic, and final implementation.
            </p>
          </motion.div>

          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  padding: '2rem',
                  background: 'rgba(5, 5, 5, 0.4)',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  width: '48px', height: '48px', borderRadius: '50%', 
                  background: 'var(--bg-primary)', color: 'var(--accent-color)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  marginBottom: '1.25rem', border: '1px solid var(--glass-border)'
                }}>
                  {point.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{point.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;
