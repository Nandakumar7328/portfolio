import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.scss';

const About = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className="about-section" id="about">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Get to know me better</p>
            </div>

            <div className="about-content">
                <div className="about-text" data-aos="fade-right">
                    <p className="description">
                        I am a passionate AI & Full Stack Developer with expertise in building intelligent web applications. 
                        With a strong foundation in both frontend and backend development, I specialize in creating seamless 
                        user experiences while implementing robust AI solutions.
                    </p>

                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>2+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3>20+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <h3>10+</h3>
                            <p>Happy Clients</p>
                        </div>
                        <div className="stat-item">
                            <h3>20+</h3>
                            <p>Technologies</p>
                        </div>
                    </div>
                </div>

                <div className="skills-container" data-aos="fade-left">
                    <div className="skills-category">
                        <h3>AI & Machine Learning</h3>
                        <div className="skills-list">
                            <span>TensorFlow</span>
                            <span>PyTorch</span>
                            <span>OpenAI</span>
                            <span>Computer Vision</span>
                            <span>NLP</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Frontend Development</h3>
                        <div className="skills-list">
                            <span>React</span>
                            <span>Vue.js</span>
                            <span>TypeScript</span>
                            <span>SCSS</span>
                            <span>Tailwind</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Backend Development</h3>
                        <div className="skills-list">
                            <span>Python</span>
                            <span>Node.js</span>
                            <span>Django</span>
                            <span>Express</span>
                            <span>REST APIs</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Database & Cloud</h3>
                        <div className="skills-list">
                            <span>MongoDB</span>
                            <span>PostgreSQL</span>
                            <span>AWS</span>
                            <span>Docker</span>
                            <span>Kubernetes</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 