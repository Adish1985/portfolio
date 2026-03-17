import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -100, scale: 0.5, rotate: -15, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
          >
            <div 
              style={{
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '1/1',
                borderRadius: '24px',
                border: '1px solid var(--glass-border)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}
            >
              <img 
                src="/profile.jpeg" 
                alt="Adish P P" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Optional overlay gradient to make it blend with the dark theme slightly */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 30%)', opacity: 0.6 }} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100, scale: 0.8, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4, delay: 0.2 }}
            style={{ flex: '1 1 500px' }}
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}
            >
              Modern, Efficient, AI-Empowered.
            </motion.h3>
            
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.6' }}>
              {[
                { title: 'Laravel Expert:', desc: 'Real-world project experience building scalable applications, handling backend logic, APIs, and database design.' },
                { title: 'AI-Assisted Efficiency:', desc: 'I actively use AI tools (ChatGPT, GitHub Copilot) to enhance development speed, debug faster, and build better UI.' },
                { title: 'Code Quality:', desc: 'A strict focus on writing clean, efficient, and maintainable code—using AI as a tool, not a crutch.' },
                { title: 'Continuous Learning:', desc: 'Passionate about learning new frameworks and adapting to modern, evolving technologies.' }
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                  style={{ display: 'flex', gap: '0.75rem' }}
                >
                  <span className="gradient-text">✓</span>
                  <span><strong>{item.title}</strong> {item.desc}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ display: 'flex', gap: '3rem', mt: '2rem', marginTop: '2.5rem' }}
            >
              <div>
                <h4 style={{ fontSize: '2rem', color: 'var(--text-primary)', fontFamily: 'Outfit' }}>1.5+</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Years Experience</p>
              </div>
              <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
              <div>
                <h4 style={{ fontSize: '2rem', color: 'var(--text-primary)', fontFamily: 'Outfit' }}>4+</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Major Projects</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
