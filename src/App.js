import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [statsVisible, setStatsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const fullText = "Building the future, one line of code at a time.";

  const testimonials = [
    {
      text: "Dennis delivered exceptional results on our enterprise system. His technical expertise and problem-solving skills are outstanding.",
      author: "Sarah Johnson",
      role: "CTO, Tech Solutions Inc.",
    },
    {
      text: "Working with Dennis was a game-changer for our infrastructure. Professional, reliable, and highly skilled.",
      author: "Michael Chen",
      role: "IT Director, Global Systems",
    },
    {
      text: "His attention to detail and commitment to quality made our project a huge success. Highly recommended!",
      author: "Emily Rodriguez",
      role: "Project Manager, Innovation Labs",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);

      // Show stats when scrolling to expertise section
      const expertiseSection = document.getElementById("expertise");
      if (expertiseSection) {
        const rect = expertiseSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setStatsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">DennisMasiror._</div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button
            onClick={() => scrollToSection("home")}
            className={activeSection === "home" ? "active" : ""}
          >
            {"// home"}
          </button>
          <button
            onClick={() => scrollToSection("expertise")}
            className={activeSection === "expertise" ? "active" : ""}
          >
            {"// expertise"}
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className={activeSection === "work" ? "active" : ""}
          >
            {"// work"}
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className={activeSection === "experience" ? "active" : ""}
          >
            {"// experience"}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            {"// contact"}
          </button>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div
            className="floating-shapes"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="glow-orb"></div>
          </div>
          <h1 className="hero-title">DENNIS MASIROR</h1>
          <p className="hero-subtitle">SOFTWARE DEVELOPER & SYSTEM ANALYST.</p>
          <p className="hero-description typing-text">
            {typedText}
            <span className="cursor">|</span>
          </p>
          <div className="cta-buttons">
            <button
              onClick={() => scrollToSection("work")}
              className="cta-primary"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cta-secondary"
            >
              Get In Touch
            </button>
          </div>
          <div className="scroll-indicator">
            <div className="mouse"></div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section">
        <div className="container">
          <h2 className="section-title">{"// expertise"}</h2>
          <p className="section-intro">
            Leveraging cutting-edge technologies and proven methodologies to
            deliver exceptional results
          </p>

          <div className={`stats-grid ${statsVisible ? "visible" : ""}`}>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">System Uptime</div>
            </div>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="card-icon">💻</div>
              <h3>Software Development</h3>
              <p>
                Crafting scalable, maintainable applications using React,
                Node.js, and modern JavaScript frameworks. Passionate about
                clean code and user-centric design.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>Node.js</span>
              </div>
            </div>
            <div className="expertise-card">
              <div className="card-icon">📊</div>
              <h3>System Analysis</h3>
              <p>
                Analyzing complex business requirements and translating them
                into efficient technical solutions. Expert in process
                optimization and system architecture.
              </p>
              <div className="tech-tags">
                <span>Architecture</span>
                <span>Optimization</span>
                <span>Analytics</span>
              </div>
            </div>
            <div className="expertise-card">
              <div className="card-icon">🐧</div>
              <h3>Linux Administration</h3>
              <p>
                Certified Linux System Administrator with hands-on experience in
                server management, automation, and security best practices.
              </p>
              <div className="tech-tags">
                <span>Linux</span>
                <span>Bash</span>
                <span>DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section section-alt">
        <div className="container">
          <h2 className="section-title">{"// work"}</h2>
          <p className="section-intro">
            Delivering impactful solutions across diverse domains
          </p>

          <div className="skills-showcase">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-container">
              <div className="skill-tag">React & JavaScript</div>
              <div className="skill-tag">System Architecture</div>
              <div className="skill-tag">Linux Administration</div>
              <div className="skill-tag">Database Management</div>
              <div className="skill-tag">DevOps & CI/CD</div>
              <div className="skill-tag">Python</div>
              <div className="skill-tag">Git & Version Control</div>
              <div className="skill-tag">API Development</div>
              <div className="skill-tag">Cloud Services</div>
              <div className="skill-tag">Docker & Kubernetes</div>
            </div>
          </div>

          <div className="work-grid">
            <div className="work-card">
              <div className="work-number">01</div>
              <h3>Enterprise System Solutions</h3>
              <p>
                Designing and implementing robust enterprise-level systems that
                streamline operations and boost productivity. Focus on
                scalability, security, and performance.
              </p>
            </div>
            <div className="work-card">
              <div className="work-number">02</div>
              <h3>Infrastructure Management</h3>
              <p>
                Managing critical IT infrastructure with emphasis on
                reliability, automation, and continuous improvement. Ensuring
                99.9% uptime and optimal resource utilization.
              </p>
            </div>
            <div className="work-card">
              <div className="work-number">03</div>
              <h3>Technical Analysis & Consulting</h3>
              <p>
                Providing strategic technical insights and data-driven
                recommendations to solve complex business challenges and drive
                digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">{"// experience"}</h2>
          <p className="section-intro">
            A journey of continuous learning and professional growth
          </p>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>System Analyst</h3>
                <h4>Enterprise Solutions</h4>
                <p>
                  Leading system analysis initiatives for complex enterprise
                  environments. Collaborating with cross-functional teams to
                  deliver innovative solutions that drive business value and
                  operational excellence.
                </p>
                <ul className="achievement-list">
                  <li>Optimized system performance by 40%</li>
                  <li>Led digital transformation projects</li>
                  <li>Implemented automated workflows</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Linux Fundamental Certified</h3>
                <h4>System Administrator</h4>
                <p>
                  Achieved professional certification in Linux system
                  administration, demonstrating expertise in server management,
                  security protocols, and automation scripting.
                </p>
                <ul className="achievement-list">
                  <li>Server configuration & management</li>
                  <li>Security hardening & monitoring</li>
                  <li>Shell scripting & automation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="testimonials-section">
            <h3 className="testimonials-title">{"// client testimonials"}</h3>
            <div className="testimonial-slider">
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="testimonial-author">
                  <p className="author-name">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="author-role">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${
                      index === currentTestimonial ? "active" : ""
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-alt">
        <div className="container">
          <h2 className="section-title">{"// contact"}</h2>
          <div className="contact-content">
            <p className="contact-text">
              Have a project in mind? Let's build something amazing together.
            </p>
            <p className="contact-subtext">
              I'm always open to discussing new opportunities, innovative ideas,
              or partnerships.
            </p>

            <div className="availability-badge">
              <span className="status-dot"></span>
              Available for freelance projects
            </div>

            <div className="contact-links">
              <a href="mailto:dennis@example.com" className="contact-btn">
                📧 Email Me
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                💻 GitHub
              </a>
            </div>

            <div className="response-time">
              <p>⚡ Average response time: 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Dennis Masiror</h4>
            <p>Software Developer & System Analyst</p>
            <p>Transforming ideas into reality</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <button onClick={() => scrollToSection("expertise")}>
              Expertise
            </button>
            <button onClick={() => scrollToSection("work")}>Work</button>
            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="mailto:dennis@example.com" aria-label="Email">
                📧
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                💻
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                🐦
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Dennis Masiror. All rights reserved.</p>
          <p>Built with React & passion ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
