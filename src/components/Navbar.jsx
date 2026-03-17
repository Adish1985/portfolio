import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-panel border-x-0 border-t-0 rounded-none' : 'py-6 bg-transparent'}`}
      style={!scrolled ? { border: 'none', background: 'transparent', boxShadow: 'none' } : {}}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit, sans-serif' }}>
          ADISH <span className="gradient-text">P P</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-secondary)' }}
              onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
            Hire Me
          </a>
        </nav>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}} />
    </header>
  );
};

export default Navbar;
