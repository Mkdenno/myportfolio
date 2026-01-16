import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">DennisMasiror._</div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
            {'// home'}
          </button>
          <button onClick={() => scrollToSection('expertise')} className={activeSection === 'expertise' ? 'active' : ''}>
            {'// expertise'}
          </button>
          <button onClick={() => scrollToSection('work')} className={activeSection === 'work' ? 'active' : ''}>
            {'// work'}
          </button>
          <button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>
            {'// experience'}
          </button>
          <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
            {'// contact'}
          </button>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="floating-shapes" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="glow-orb"></div>
          </div>
          <h1 className="hero-title">DENNIS MASIROR</h1>
          <p className="hero-subtitle">SOFTWARE DEVELOPER & SYSTEM ANALYST.</p>
          <div className="scroll-indicator">
            <div className="mouse"></div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section">
        <div className="container">
          <h2 className="section-title">{'// expertise'}</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Software Development</h3>
              <p>Building robust applications with modern technologies and best practices</p>
            </div>
            <div className="expertise-card">
              <h3>System Analysis</h3>
              <p>Analyzing and optimizing complex systems for improved performance</p>
            </div>
            <div className="expertise-card">
              <h3>Linux Administration</h3>
              <p>Certified Linux System Administrator with fundamental expertise</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section section-alt">
        <div className="container">
          <h2 className="section-title">{'// work'}</h2>
          <div className="work-grid">
            <div className="work-card">
              <h3>System Solutions</h3>
              <p>Developing and maintaining enterprise-level systems</p>
            </div>
            <div className="work-card">
              <h3>Infrastructure Management</h3>
              <p>Managing and optimizing IT infrastructure</p>
            </div>
            <div className="work-card">
              <h3>Technical Analysis</h3>
              <p>Providing technical insights and solutions</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">{'// experience'}</h2>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>System Analyst</h3>
                <h4>Enterprise Solutions</h4>
                <p>Specializing in system analysis and optimization for complex enterprise environments</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Linux Fundamental Certified</h3>
                <h4>System Administrator</h4>
                <p>Certified in Linux system administration fundamentals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-alt">
        <div className="container">
          <h2 className="section-title">{'// contact'}</h2>
          <div className="contact-content">
            <p className="contact-text">Let's work together on your next project</p>
            <div className="contact-links">
              <a href="mailto:dennis@example.com" className="contact-btn">Email Me</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-btn">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-btn">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Dennis Masiror. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
