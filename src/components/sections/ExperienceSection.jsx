import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Urbanhub Innovations',
      role: 'Laravel Developer (React / Inertia.js)',
      period: 'Dec 2025 - Mar 2026',
      responsibilities: [
        'Developed backend functionalities for a scalable eCommerce web application using Laravel and PHP.',
        'Designed and built secure RESTful APIs to handle frontend data flow and third-party integrations.',
        'Built and maintained an intuitive admin dashboard architecture using React.js and Inertia.js.',
        'Leveraged AI tools for rapid bug isolation and feature prototyping, drastically reducing development cycles.',
        'Enforced strict code quality through regular refactoring and performance optimization reviews.'
      ]
    },
    {
      company: 'Glinjos Innovations',
      role: 'Full Stack Developer',
      period: 'Mar 2025 - Nov 2025',
      responsibilities: [
        'Maintained full-stack web features utilizing Laravel for backend and modular HTML/CSS/JS interfaces.',
        'Engineered complex backend logic for a real-time meal booking platform complete with online payment flows.',
        'Developed a unified complaint logging and service request module, automating technician workflows.',
        'Utilized AI-assisted workflows to accelerate initial boilerplate generation and repetitive data structuring.'
      ]
    },
    {
      company: 'Glinjos Innovations (Internship)',
      role: 'Full Stack Developer Intern',
      period: 'Jul 2024 - Feb 2025',
      responsibilities: [
        'Built a strong foundation in cross-platform mobile development using Flutter and Android Studio.',
        'Developed backend logic, scripting, and automation using Python.',
        'Collaborated with senior developers to gain hands-on experience in full-stack architecture and version control.',
        'Transitioned smoothly into a full-time Full Stack Developer role at the same company due to strong performance.'
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="experience-container" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          
          {/* Tabs Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="experience-tabs"
            style={{ flex: '0 0 250px', display: 'flex', flexDirection: 'column', gap: '0.5rem', borderLeft: '1px solid var(--glass-border)' }}
          >
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="experience-tab-btn"
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderLeft: `2px solid ${activeTab === index ? 'var(--accent-color)' : 'transparent'}`,
                  marginLeft: '-1px',
                  padding: '1rem 1.5rem',
                  textAlign: 'left',
                  color: activeTab === index ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: activeTab === index ? '600' : '400',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  backgroundColor: activeTab === index ? 'var(--glass-bg)' : 'transparent',
                }}
              >
                {exp.company}
              </button>
            ))}
          </motion.div>

          {/* Tab Content Area */}
          <div style={{ flex: '1', minHeight: '350px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass-panel"
                style={{ padding: '2.5rem' }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                      {experiences[activeTab].role}
                    </h3>
                    <h4 style={{ color: 'var(--accent-color)', fontWeight: '500', fontSize: '1rem' }}>
                      @ {experiences[activeTab].company}
                    </h4>
                  </div>
                  <span style={{ 
                    display: 'inline-block', color: 'var(--text-secondary)', fontSize: '0.9rem' 
                  }}>
                    {experiences[activeTab].period}
                  </span>
                </div>

                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {experiences[activeTab].responsibilities.map((task, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', color: 'var(--text-secondary)' }}
                    >
                      <span style={{ color: 'var(--accent-color)', marginRight: '1rem', lineHeight: '1.6', fontSize: '1.2rem' }}>▹</span>
                      <span style={{ lineHeight: '1.6', fontSize: '1rem' }}>{task}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Responsive CSS for Experience Section */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .experience-container {
              flex-direction: column !important;
              gap: 1.5rem !important;
            }
            .experience-tabs {
              flex: none !important;
              flex-direction: row !important;
              overflow-x: auto;
              border-left: none !important;
              border-bottom: 1px solid var(--glass-border);
              padding-bottom: 0.5rem;
              width: 100%;
            }
            .experience-tabs::-webkit-scrollbar {
              height: 4px;
            }
            .experience-tab-btn {
              border-left: none !important;
              border-bottom: 2px solid transparent !important;
              margin-left: 0 !important;
              margin-bottom: -1px !important;
              padding: 0.75rem 1rem !important;
              white-space: nowrap;
            }
            .experience-tab-btn[style*="border-left: 2px solid var(--accent-color)"] {
              border-left: none !important;
              border-bottom: 2px solid var(--accent-color) !important;
            }
            .glass-panel {
              padding: 1.5rem !important;
            }
          }
        `}} />
      </div>
    </section>
  );
};

export default ExperienceSection;
