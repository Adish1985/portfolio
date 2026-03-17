import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ padding: '4rem 0 2rem', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            ADISH <span className="gradient-text">P P</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto' }}>
            Versatile Full-Stack Developer creating scalable web applications and premium digital experiences.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="mailto:adishanr433@gmail.com" className="social-icon" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href="https://linkedin.com/in/adishpp" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="social-icon" aria-label="Github">
            <Github size={20} />
          </a>
        </div>

        <div style={{ width: '100%', height: '1px', background: 'var(--glass-border)' }}></div>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          <p>&copy; {currentYear} Adish P P. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#about" style={{ transition: 'color 0.2s' }}>About</a>
            <a href="#experience" style={{ transition: 'color 0.2s' }}>Experience</a>
            <a href="#contact" style={{ transition: 'color 0.2s' }}>Contact</a>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: var(--accent-color);
          border-color: var(--accent-color);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px var(--accent-glow);
        }
        .footer a:hover {
          color: var(--text-primary);
        }
      `}} />
    </footer>
  );
};

export default Footer;
