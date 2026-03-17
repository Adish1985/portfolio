import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      period: 'Jun 2024 - Feb 2025',
      institution: 'GLINJOS INNOVATIONS SOFTWARE SOLUTIONS LLP',
      degree: 'Software Development Training'
    },
    {
      period: '2021 - 2023',
      institution: 'E.K.N.M.GOVT.ITI KAYYUR',
      degree: 'Diploma in Mechanic Motor Vehicle'
    },
    {
      period: '2019 - 2021',
      institution: 'A.V.S .G.H.S.S KARIVELLUR',
      degree: 'Higher Secondary'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{ 
                  position: 'absolute', top: 0, right: 0, 
                  width: '100px', height: '100px', 
                  background: 'var(--accent-glow)', 
                  filter: 'blur(50px)', zIndex: 0 
                }}
              />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ 
                  width: '48px', height: '48px', borderRadius: '12px', 
                  background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-color)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  marginBottom: '1.5rem' 
                }}>
                  <GraduationCap size={24} />
                </div>
                
                <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  {edu.period}
                </span>
                
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                  {edu.degree}
                </h3>
                
                <p style={{ color: 'var(--accent-secondary)', fontSize: '0.875rem', fontWeight: '500' }}>
                  {edu.institution}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
