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
                    <div className="summary-card">
                        <p className="description">
                            Full stack engineer focused on Python/React, real-time dashboards, and high-performance backends. Experienced in production AI/ML integrations, time-series data at scale, and building reliable monitoring platforms with CI/CD.
                        </p>
                    </div>

                    <div className="highlights-card">
                        <h3>Highlights</h3>
                        <div className="highlights-list">
                            <span>Full Stack Development (Python + React)</span>
                            <span>Real-time Systems & WebSocket Dashboards</span>
                            <span>AI/ML Integration into Production</span>
                            <span>High-performance Backend Architecture</span>
                            <span>Time-series Data (10M+ rows)</span>
                            <span>Scalable Monitoring Platforms</span>
                            <span>CI/CD & Containerization</span>
                            <span>Annotation + Training Pipelines</span>
                        </div>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>2+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3>20+</h3>
                            <p>Technologies</p>
                        </div>
                        <div className="stat-item">
                            <h3>5+</h3>
                            <p>Certifications</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Quality Focus</p>
                        </div>
                    </div>
                </div>

                <div className="skills-container" data-aos="fade-left">
                    <div className="skills-category full">
                        <h3>Programming Languages</h3>
                        <div className="skills-list">
                            <span>Python</span>
                            <span>JavaScript</span>
                            <span>SQL</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Backend Skills</h3>
                        <div className="skills-list">
                            <span>Django</span>
                            <span>DRF</span>
                            <span>Flask</span>
                            <span>Node.js (basic)</span>
                            <span>RESTful APIs</span>
                            <span>JWT</span>
                            <span>RBAC</span>
                            <span>WebSocket</span>
                            <span>Async Processing</span>
                            <span>Celery + Redis</span>
                            <span>APScheduler</span>
                            <span>MVC/Clean Architecture</span>
                            <span>API Versioning</span>
                            <span>Error Handling</span>
                            <span>Exporting (PDF, CSV)</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Frontend Skills</h3>
                        <div className="skills-list">
                            <span>React.js</span>
                            <span>Hooks</span>
                            <span>Context API</span>
                            <span>React Router</span>
                            <span>JavaScript (ES6+)</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>Material UI</span>
                            <span>Bootstrap</span>
                            <span>ApexCharts</span>
                            <span>Chart.js</span>
                            <span>Responsive UI</span>
                            <span>WebSocket UI</span>
                            <span>Real-time Dashboards</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Database Skills</h3>
                        <div className="skills-list">
                            <span>PostgreSQL</span>
                            <span>MySQL</span>
                            <span>SQLAlchemy ORM</span>
                            <span>Query Optimization</span>
                            <span>Time-Series Modeling</span>
                            <span>JSON Fields</span>
                            <span>High-volume data (10M+ rows)</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>AI/ML & Computer Vision</h3>
                        <div className="skills-list">
                            <span>Computer Vision Integration</span>
                            <span>Image Annotation Systems</span>
                            <span>Real-Time Inference APIs</span>
                            <span>Dataset Versioning</span>
                            <span>Model Training Pipelines</span>
                            <span>Concurrent Workflows</span>
                            <span>OpenCV</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>DevOps & Tools</h3>
                        <div className="skills-list">
                            <span>Docker</span>
                            <span>GitHub Actions (CI/CD)</span>
                            <span>Prometheus</span>
                            <span>Grafana</span>
                            <span>Linux</span>
                            <span>Git</span>
                            <span>Nginx (basic)</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Software Engineering</h3>
                        <div className="skills-list">
                            <span>Agile/Scrum</span>
                            <span>Real-time monitoring architecture</span>
                            <span>Low-latency system design</span>
                            <span>Observability & performance</span>
                            <span>Token-based auth</span>
                            <span>Scalable backend design</span>
                            <span>High-throughput event processing</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 
