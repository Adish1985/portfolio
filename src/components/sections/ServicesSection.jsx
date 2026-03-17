import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Terminal, Settings, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: "01",
      icon: <Server size={32} />,
      title: 'Full Stack Web Development',
      description: 'Architecting and delivering scalable, end-to-end web applications starting from the database up to the user interface, ensuring reliable performance and security using Laravel.'
    },
    {
      id: "02",
      icon: <Database size={32} />,
      title: 'API Development & Integration',
      description: 'Designing sophisticated RESTful APIs that serve as the backbone for modern applications, allowing seamless data exchange and robust third-party communication.'
    },
    {
      id: "03",
      icon: <Settings size={32} />,
      title: 'Admin Dashboard Logic',
      description: 'Building complex backend admin interfaces capable of handling massive raw data, tracking user analytics, and managing roles and business operations.'
    },
    {
      id: "04",
      icon: <Terminal size={32} />,
      title: 'Performance Refactoring',
      description: 'Deep-diving into existing codebases to optimize slow SQL queries, implement intelligent caching mechanisms, and clean up technical debt.'
    },
    {
      id: "05",
      icon: <Layout size={32} />,
      title: 'AI-Enhanced Prototyping',
      description: 'Utilizing AI frameworks (ChatGPT/Copilot) strictly as force-multipliers to lay down boilerplate and debug rapidly, drastically cutting time-to-market.'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <span style={{ color: 'var(--accent-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            What I Do
          </span>
          <h2 className="section-title" style={{ marginBottom: '0', fontSize: '2.5rem' }}>
            Dedicated <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '2rem 3rem',
                gap: '2.5rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-glow)';
                e.currentTarget.style.transform = 'scale(1.02)';
                const arrow = e.currentTarget.querySelector('.service-arrow');
                if(arrow) arrow.style.transform = 'translateX(5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.transform = 'scale(1)';
                const arrow = e.currentTarget.querySelector('.service-arrow');
                if(arrow) arrow.style.transform = 'translateX(0)';
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: 'transparent' }} className="service-indicator" />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexShrink: 0 }}>
                <span style={{ fontSize: '1.25rem', fontFamily: 'Outfit', color: 'var(--text-secondary)', fontWeight: '300', opacity: 0.5 }}>
                  {service.id}
                </span>
                <div style={{ color: 'var(--accent-color)' }}>
                  {service.icon}
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '600px' }}>
                  {service.description}
                </p>
              </div>

              <div className="service-arrow" style={{ color: 'var(--text-secondary)', transition: 'transform 0.3s ease', display: 'flex' }}>
                <ArrowRight size={24} />
              </div>

              <style dangerouslySetInnerHTML={{__html: `
                @media (max-width: 768px) {
                  .glass-panel { flex-direction: column; align-items: flex-start !important; padding: 2rem !important; gap: 1.5rem !important; }
                  .service-arrow { display: none !important; }
                }
              `}} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
