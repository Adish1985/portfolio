import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'adishanr433@gmail.com', // Placeholder, user will replace
      icon: <Mail size={24} />,
      href: 'mailto:adishanr433@gmail.com',
      color: '#10b981'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/adishpp',
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com/in/adishpp',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      value: 'github.com/adishpp',
      icon: <Github size={24} />,
      href: 'https://github.com/adishpp',
      color: '#f8fafc'
    }
  ];

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{ color: 'var(--accent-color)', fontWeight: '600', letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase', display: 'block' }}>
            Get In Touch
          </span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Ready to <span className="gradient-text">Collaborate?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
            I am currently open to new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {contactLinks.map((link, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <a 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.5rem 2rem',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  transition: 'all 0.3s ease',
                  border: '1px solid var(--glass-border)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = link.color;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 10px 30px -15px ${link.color}`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ color: link.color, display: 'flex' }}>
                    {link.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{link.name}</h3>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{link.value}</span>
                  </div>
                </div>
                <ArrowUpRight size={24} style={{ color: 'var(--text-secondary)', opacity: 0.5 }} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
