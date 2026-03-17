import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Layers, Sparkles, Workflow } from 'lucide-react';

const SkillsSection = () => {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <span style={{ color: 'var(--accent-color)', fontWeight: '600', letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase', display: 'block' }}>
            Technical Capabilities
          </span>
          <h2 className="section-title" style={{ marginBottom: '0' }}>
            The <span className="gradient-text">Bento</span> Stack
          </h2>
        </motion.div>

        {/* Bento Grid Container */}
        <div className="bento-grid">
          
          {/* Card 1: Core Backend (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="glass-panel bento-card bento-large"
            style={{ 
              background: 'linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(6,182,212,0.05) 100%)',
              border: '1px solid var(--accent-glow)'
            }}
          >
            <Server size={32} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Laravel Backend Architecture</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
              My primary domain. Building scalable APIs, designing complex MVC structures, handling background jobs, and optimizing queries for high-performance applications.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['PHP 8', 'RESTful APIs', 'Eloquent ORM', 'Artisan', 'Middleware'].map(skill => (
                <span key={skill} className="bento-tag">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Modern Frontend (Medium) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel bento-card bento-medium"
          >
            <Code2 size={28} style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Dynamic Interfaces</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Seamlessly bridging server and client state without the heavy SPAs.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
              {['React.js', 'Inertia.js', 'JavaScript', 'CSS3'].map(skill => (
                <span key={skill} className="bento-tag">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: AI Workflow (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel bento-card bento-wide"
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', right: '-10%', top: '-20%', opacity: 0.05, transform: 'scale(3)' }}>
              <Sparkles size={100} />
            </div>
            <Sparkles size={28} color="var(--accent-secondary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>AI-Accelerated Workflows</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '80%' }}>
              Treating GitHub Copilot and ChatGPT as senior pair-programmers to rapidly generate boilerplate, isolate complex bugs, and refactor existing logic at 3x speed.
            </p>
          </motion.div>

          {/* Card 4: Databases (Small) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel bento-card"
          >
            <Database size={24} style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Data Layer</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="bento-tag">MySQL</span>
              <span className="bento-tag">Schema Design</span>
              <span className="bento-tag">Indexing</span>
            </div>
          </motion.div>

          {/* Card 5: Integrations (Standard) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-panel bento-card"
          >
            <Workflow size={24} style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Integrations</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span>Razorpay / HDFC Flows</span>
              <span>SMTP Mail & OTP Auth</span>
              <span>Third-Party REST APIs</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
