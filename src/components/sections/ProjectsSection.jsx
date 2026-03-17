import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Code2 } from 'lucide-react';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const projects = [
    {
      title: 'Star Cool',
      category: 'CRM Platform',
      description: 'A comprehensive Customer Relationship Management system handling significant continuous updations and maintenance for sales tracking and client relations.',
      techStack: ['Laravel','Js', 'MySQL', 'REST API'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Shree Kaka Ji Masala',
      category: 'E-Commerce',
      description: 'A fully functional e-commerce platform dedicated to selling premium spices, with robust inventory tracking and secure checkout flows.',
      techStack: ['Laravel', 'Bootstrap', 'Razorpay', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Canteen Booking',
      category: 'Internal Tool',
      description: 'A streamlined meal booking platform utilized for daily workforce food reservations, simplifying kitchen prep numbers.',
      techStack: ['PHP', 'Laravel', 'HTML/CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sand POS',
      category: 'Booking Platform',
      description: 'An online sand booking platform operating on a token-based reservation system to manage queues and logistics efficiently.',
      techStack: ['Laravel', 'jQuery', 'MySQL', 'REST API'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}
        >
          <div>
            <h2 className="section-title" style={{ marginBottom: '0.5rem', textAlign: 'left' }}>
              Selected <span className="gradient-text">Projects</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>Note: Also handled continuous updations & maintenance across various other client platforms.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', paddingBottom: '0.5rem' }}>
            <button 
              onClick={handlePrev}
              className="glass-panel"
              style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-primary)', border: '1px solid var(--glass-border)' }}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="glass-panel"
              style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-primary)', border: '1px solid var(--glass-border)' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="project-slider-container"
          style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: 'var(--panel-radius)', border: '1px solid var(--glass-border)' }}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="project-slide"
              style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', background: 'var(--bg-secondary)' }}
            >
              {/* Image Side */}
              <div className="project-slide-image" style={{ flex: '1 1 50%', position: 'relative' }}>
                <img 
                  src={projects[currentIndex].image} 
                  alt={projects[currentIndex].title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                />
                <div className="project-image-gradient" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, var(--bg-secondary))' }} />
              </div>

              {/* Content Side */}
              <div className="project-slide-content" style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem', position: 'relative', zIndex: 10 }}>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  {projects[currentIndex].category}
                </motion.span>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}
                >
                  {projects[currentIndex].title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '2rem' }}
                >
                  {projects[currentIndex].description}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}
                >
                  {projects[currentIndex].techStack.map((tech, i) => (
                    <span key={i} style={{ 
                      padding: '0.35rem 1rem', 
                      background: 'rgba(16, 185, 129, 0.1)', 
                      border: '1px solid var(--accent-glow)',
                      borderRadius: '4px', fontSize: '0.875rem',
                      color: 'var(--accent-color)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                  style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}
                >
                  <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: '500' }}>
                    <ExternalLink size={18} /> View Live
                  </a>
                  <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                    <Code2 size={18} /> Source Code
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dots Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              style={{
                width: idx === currentIndex ? '30px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: idx === currentIndex ? 'var(--accent-color)' : 'var(--glass-border)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Responsive CSS for Projects Section */}
        <style dangerouslySetInnerHTML={{__html: `
          .project-slider-container {
            height: 500px;
          }
          @media (max-width: 900px) {
            .project-slider-container {
              height: 600px;
            }
            .project-slide {
              flex-direction: column !important;
            }
            .project-slide-image {
              height: 200px !important;
              flex: none !important;
            }
            .project-image-gradient {
              background: linear-gradient(to bottom, transparent, var(--bg-secondary)) !important;
            }
            .project-slide-content {
              padding: 1.5rem !important;
              justify-content: flex-start !important;
              flex: 1 !important;
            }
            .project-slide-content h3 {
              font-size: 1.75rem !important;
              margin-bottom: 0.75rem !important;
            }
            .project-slide-content p {
              font-size: 1rem !important;
              margin-bottom: 1.5rem !important;
            }
            .project-slide-content > div:last-child {
              margin-top: 1rem !important;
              margin-bottom: 0 !important;
            }
          }
        `}} />

      </div>
    </section>
  );
};

export default ProjectsSection;
