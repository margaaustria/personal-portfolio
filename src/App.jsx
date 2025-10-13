// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const projects = [
    {
      title: 'Ibong Adarna Quiz System',
      description: 'An interactive educational application designed to make learning more engaging for students through interactive quizzes and lessons.',
      tech: ['Laravel', 'React', 'Inertia', 'HTML', 'CSS', 'JavaScript'],
      takeaway: 'Helped me understand how front-end and back-end systems connect and the importance of user-friendly design in educational tools.',
      challenge: 'Designing an interface that was both simple and appealing for children, which taught me the value of user-centered design.',
    },
    {
      title: 'DreamLog Website',
      description: 'A modern web-based blogging platform that allows users to create, manage, and view blog posts in a clean and user-friendly environment.',
      tech: ['Laravel', 'React', 'Inertia.js', 'Tailwind CSS', 'Mantine'],
      features: ['Blog post creation and editing', 'Categorization', 'Image support', 'AI Blog Content Assistant'],
      takeaway: 'Learned how to combine functionality and design while working with full-stack technologies.',
      challenge: 'Connecting the front-end and back-end smoothly while keeping the interface responsive and easy to use.',
      link: 'https://www.figma.com/proto/QN1ciWkcKIMqVOS6GO8UAq/DreamLog?node-id=183-12&starting-point-node-id=183%3A12&t=tDTr1jlfsT8M0bD2-1',
    }
  ];

  const technicalSkills = {
    'Front-End Development': {
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Mantine'],
      icon: '🎨'
    },
    'Back-End Development': {
      skills: ['Laravel', 'PHP'],
      icon: '⚙️'
    },
    'Design and User Interface': {
      skills: ['UI/UX Principles', 'Figma (basic design prototyping)', 'Responsive Web Design'],
      icon: '✨'
    },
    'Version Control and Deployment': {
      skills: ['Git and GitHub'],
      icon: '🔧'
    },
    'Other Tools and Concepts': {
      skills: ['Human-Computer Interaction (HCI)', 'Visual Studio Code'],
      icon: '💻'
    }
  };

  const softSkills = [
    { skill: 'Team Collaboration', icon: '🤝' },
    { skill: 'Adaptability and Willingness to Learn', icon: '🌱' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/margarette.calumpiano.56',
      icon: '📘',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dy_mar04/',
      icon: '📷',
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/margarette-calumpiano-63614a356/',
      icon: '💼',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/margaaustria',
      icon: '💻',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'Email',
      url: 'https://mail.google.com/mail/u/5/?ogbl#inbox',
      icon: '📩',
      color: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <div className="portfolio">
      {/* Animated Background */}
      <div className="background">
        <div className="gradient-bg"></div>
        <div 
          className="mouse-follower"
          style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
          }}
        ></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

         {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-bar">
          <div className="nav-logo">
            <span className="logo-text">Margaux_04</span>
          </div>
          
          <div className="nav-menu">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
              >
                {section.label}
              </button>
            ))}
            
            <button className="nav-btn external-btn">Résumé ↗</button>
          </div>
        </div>
      </nav>


      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Margarette Austria Calumpiano</h1>
          <div className="hero-line"></div>
          <div className="hero-badges">
            <span className="badge badge-purple"> BS Information Systems</span>
            <span className="badge badge-pink"> Third Year Student</span>
            <span className="badge badge-blue"> Mangatarem, Pangasinan</span>
          </div>
          <p className="hero-subtitle">
            Passionate about creating beautiful and functional web experiences ✨
          </p>
        </div>
      </div>

    
      {/* Main Content */}
      <div className="main-content">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="section fade-in">
            <div className="cards-grid">
              <div className="card card-purple">
                <div className="card-emoji">✨</div>
                <h2 className="card-title">About Me</h2>
                <p className="card-text">
                  Hey there! My name is Margarette Calumpiano, but most people call me <span className="highlight">Marga</span>. 
                  I'm from Mangatarem, Pangasinan and currently pursuing a Bachelor of Science in Information Systems. 
                  I'm now in my third year, and I'm really enjoying the journey!
                </p>
              </div>

              <div className="card card-blue">
                <div className="card-emoji">🎓</div>
                <h2 className="card-title">Educational Background</h2>
                <p className="card-text">
                  I graduated from <span className="highlight">Mangatarem National High School</span> in Mangatarem, Pangasinan, 
                  where I took the ICT strand. Our lessons mainly focused on hardware and networking rather than coding, which helped me 
                  understand the technical side of computers and systems.
                </p>
              </div>

              <div className="card card-pink">
                <div className="card-emoji">💻</div>
                <h2 className="card-title">My Journey</h2>
                <p className="card-text">
                  As a student, I've worked on several academic and project-based systems, such as interactive quizzes and web applications 
                  using Laravel, React, and Inertia. With the help of my classmates, I started to develop an interest in 
                  <span className="highlight"> front-end development</span>. I'm not that knowledgeable yet, but I'm eager 
                  to learn more about designing clean, user-friendly interfaces that make applications easier and more enjoyable to use.
                </p>
              </div>

              <div className="card card-rose">
                <div className="card-emoji">💖</div>
                <h2 className="card-title">Hobbies & Interests</h2>
                <p className="card-text">
                  Outside of school, I enjoy being just a normal sister for my younger sisters. I love watching anime (especially 
                  <span className="highlight-orange"> Haikyū!!</span> 🏐), and I'm a big fan of reading manga, Wattpad, 
                  and any random stories I come across.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="section fade-in">
            <div className="section-header">
              <h1 className="section-title">My Projects</h1>
              <p className="section-subtitle">Building amazing things, one project at a time</p>
            </div>
            
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <span className="project-icon">{project.icon}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="tech-section">
                  <h4 className="tech-title">✨ Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {project.features && (
                  <div className="features-section">
                    <h4 className="features-title">✨ Features:</h4>
                    <div className="features-list">
                      {project.features.map((feature, i) => (
                        <div key={i} className="feature-item">
                          <span className="feature-arrow">→</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="insights-grid">
                  <div className="insight-box insight-green">
                    <h4 className="insight-title">💡 Key Takeaways:</h4>
                    <p>{project.takeaway}</p>
                  </div>
                  <div className="insight-box insight-yellow">
                    <h4 className="insight-title">⚡ Challenges:</h4>
                    <p>{project.challenge}</p>
                  </div>
                </div>

                {project.link && (
                  <div className="project-link-section">
                    <a 
                      href={`${project.link}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <span>Visit Project</span>
                      <span>→</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="section fade-in">
            <div className="section-header">
              <h1 className="section-title">My Skills</h1>
              <p className="section-subtitle">The tools and talents I bring to the table</p>
            </div>

            <div className="skills-section">
              <h2 className="skills-category-title">Technical Skills</h2>
              <div className="skills-grid">
                {Object.entries(technicalSkills).map(([category, data]) => (
                  <div key={category} className="skill-card">
                    <div className="skill-header">
                      <span className="skill-icon">{data.icon}</span>
                      <h3 className="skill-category">{category}</h3>
                    </div>
                    <div className="skill-tags">
                      {data.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="soft-skills-section">
              <h2 className="skills-category-title">Soft Skills</h2>
              <div className="soft-skills-grid">
                {softSkills.map((item, i) => (
                  <div key={i} className="soft-skill-card">
                    <div className="soft-skill-icon">{item.icon}</div>
                    <div className="soft-skill-text">{item.skill}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="section fade-in">
            <div className="section-header">
              <h1 className="section-title">Let's Connect!</h1>
              <p className="section-subtitle">Feel free to reach out on any of these platforms!!</p>
            </div>

            <div className="contact-container">
              <div className="contact-intro">
                <div className="contact-emoji">✨</div>
                <h2 className="contact-heading">Get In Touch</h2>
                <p className="contact-text">
                  I'm always excited to connect with fellow developers, potential collaborators, 
                  or anyone interested in my work. Whether you have a question, want to discuss a project, 
                  or just want to say hi, don't hesitate to reach out!
                </p>
              </div>

              <div className="social-links-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card"
                  >
                    <div className="social-icon">{social.icon}</div>
                    <div className="social-name">{social.name}</div>
                    <div className="social-arrow">→</div>
                  </a>
                ))}
              </div>

              <div className="contact-footer">
                <p className="contact-footer-text">
                  📧 Or send me an email and I'll get back to you as soon as possible!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;