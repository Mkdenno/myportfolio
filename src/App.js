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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email Me
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
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
