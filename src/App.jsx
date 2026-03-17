import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import WhyHireMeSection from './components/sections/WhyHireMeSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app">
      {/* Premium Scroll Progress Bar */}
      <motion.div 
        style={{ 
          scaleX, 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '4px', 
          background: 'linear-gradient(90deg, var(--accent-color), var(--accent-secondary))', 
          transformOrigin: '0%', 
          zIndex: 9999,
          boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)'
        }} 
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <WhyHireMeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
