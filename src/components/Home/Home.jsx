import React, { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import About from '../About/About.jsx';
import Certificate from '../Certificate/Certificate.jsx';
import Work from '../Work/Work.jsx';
import Contact from '../Contact/Contact.jsx';
import profile from '../../assets/images/nanda.png';
import './Home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import skill icons
import djangoIcon from '../../assets/images/django.png';
import flaskIcon from '../../assets/images/django.png';
import reactIcon from '../../assets/images/react.png';
import javascriptIcon from '../../assets/images/javascript.png';
import pythonIcon from '../../assets/images/python.png';
import nodejsIcon from '../../assets/images/node-js.png';
import postgresqlIcon from '../../assets/images/postgresql.png';
import htmlIcon from '../../assets/images/html.png';
import aiIcon from '../../assets/images/django.png';

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='home-container' id="home">
            <Header isScrolled={isScrolled} />
            
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text" data-aos="fade-up">
                        <div className="name-wrapper">
                            <div className="greeting">Hello, I'm</div>
                            <h1 className="name">Nanda Kumar</h1>
                            <div className="title">
                                <span className="title-text">AI-Driven Full Stack Developer | Real-Time Analytics</span>
                                <div className="title-line"></div>
                            </div>
                        </div>
                        <p className="description">
                            Full stack engineer (Python/React) focusing on high-performance backends, WebSocket-based real-time dashboards, and production AI/ML integrations. Experienced in time-series data processing, scalable monitoring platforms, and CI/CD.
                        </p>
                        <div className="cta-buttons">
                            <a href={"/Nanda%20Kumar.pdf"} className="primary-btn" target="_blank" rel="noopener noreferrer" download>
                                <span className="btn-icon">📄</span>
                                <span className="btn-text">Download CV</span>
                                <span className="btn-glow"></span>
                            </a>
                            <a href="#contact" className="secondary-btn">
                                <span className="btn-icon">📧</span>
                                <span className="btn-text">Contact Me</span>
                                <span className="btn-glow"></span>
                            </a>
                        </div>
                    </div>
                    <div className="hero-image" data-aos="fade-left">
                        <div className="image-wrapper">
                            <img src={profile} alt="Nanda Kumar" className="profile-image" />
                            <div className="image-glow"></div>
                            <div className="image-frame"></div>
                        </div>
                        <div className="floating-elements">
                            <div className="floating-element" data-speed="2"></div>
                            <div className="floating-element" data-speed="3"></div>
                            <div className="floating-element" data-speed="4"></div>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <About />

            {/* Skills Section */}
            <section className="skills-section" id="skills" data-aos="fade-up">
                <div className="section-header">
                    <h2 className="section-title">Tech Stack</h2>
                    <p className="section-subtitle">Technologies I work with</p>
                </div>
                <div className="skills-grid">
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="skill-icon">
                            <img src={djangoIcon} alt="Django" />
                            <div className="skill-glow"></div>
                        </div>
                        <span className="skill-name">Django</span>
                        <div className="skill-level">
                            <div className="skill-progress" style={{width: '100%'}}></div>
                        </div>
                    </div>
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="skill-icon">
                            <img src={flaskIcon} alt="Flask" />
                            <div className="skill-glow"></div>
                        </div>
                        <span className="skill-name">Flask</span>
                        <div className="skill-level">
                            <div className="skill-progress" style={{width: '100%'}}></div>
                        </div>
                    </div>
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="skill-icon">
                            <img src={reactIcon} alt="React" />
                            <div className="skill-glow"></div>
                        </div>
                        <span className="skill-name">React</span>
                        <div className="skill-level">
                            <div className="skill-progress" style={{width: '100%'}}></div>
                        </div>
                    </div>
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="400">
                        <div className="skill-icon">
                            <img src={javascriptIcon} alt="JavaScript" />
                            <div className="skill-glow"></div>
                        </div>
                        <span className="skill-name">JavaScript</span>
                        <div className="skill-level">
                            <div className="skill-progress" style={{width: '100%'}}></div>
                        </div>
                    </div>
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="500">
                        <div className="skill-icon">
                            <img src={pythonIcon} alt="Python" />
                            <div className="skill-glow"></div>
                        </div>
                        <span className="skill-name">Python</span>
                        <div className="skill-level">
                            <div className="skill-progress" style={{width: '100%'}}></div>
                        </div>
                    </div>
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="600">
                        <div className="skill-icon">
                            <img src={nodejsIcon} alt="Node.js" />
                            <div className="skill-glow"></div>
                        </div>
                        <span className="skill-name">Node.js</span>
                        <div className="skill-level">
                            <div className="skill-progress" style={{width: '100%'}}></div>
                        </div>
                    </div>
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="700">
                        <div className="skill-icon">
                            <img src={postgresqlIcon} alt="PostgreSQL" />
                            <div className="skill-glow"></div>
                        </div>
                        <span className="skill-name">PostgreSQL</span>
                        <div className="skill-level">
                            <div className="skill-progress" style={{width: '100%'}}></div>
                        </div>
                    </div>
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="800">
                        <div className="skill-icon">
                            <img src={htmlIcon} alt="HTML" />
                            <div className="skill-glow"></div>
                        </div>
                        <span className="skill-name">HTML</span>
                        <div className="skill-level">
                            <div className="skill-progress" style={{width: '100%'}}></div>
                        </div>
                    </div>
                    <div className="skill-card" data-aos="fade-up" data-aos-delay="900">
                        <div className="skill-icon">
                            <img src={aiIcon} alt="Gen AI" />
                            <div className="skill-glow"></div>
                        </div>
                        <span className="skill-name">Gen AI</span>
                        <div className="skill-level">
                            <div className="skill-progress" style={{width: '100%'}}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resume Section */}
            <Work />

            {/* Certificate Section */}
            <Certificate />

            {/* Contact Section */}
            <Contact />
        </div>
    );
};

export default Home; 
