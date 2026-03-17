import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="section flex-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              color: 'var(--accent-color)',
              fontSize: '0.875rem',
              fontWeight: '500',
              marginBottom: '2rem'
            }}
          >
            Available for new opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1rem' }}
          >
            Hi, I'm <br/>
            <span className="gradient-text">Adish P P</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: '1.5rem', fontWeight: '400', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}
          >
            Full Stack Laravel Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '650px', margin: '0 auto 3rem', lineHeight: '1.6' }}
          >
            Building scalable web applications using modern tools and AI-assisted development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects <Code size={18} />
            </a>
            <a href="#contact" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '9999px', fontWeight: '500', transition: 'all 0.3s ease' }}>
              Contact Me <ArrowRight size={18} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
