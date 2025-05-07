import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Work.scss';

const Work = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const projects = [
        {
            id: 1,
            title: 'AI-Powered E-Commerce Platform',
            description: 'An intelligent e-commerce platform that uses machine learning for personalized product recommendations and computer vision for image recognition.',
            technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS'],
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            link: '#'
        },
        {
            id: 2,
            title: 'Intelligent Chat Application',
            description: 'A real-time chat application with AI capabilities including sentiment analysis, language translation, and integration with OpenAI\'s GPT.',
            technologies: ['Vue.js', 'Python', 'OpenAI', 'WebSocket', 'Redis'],
            image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            link: '#'
        },
        {
            id: 3,
            title: 'AI Document Analysis System',
            description: 'A document processing system that uses NLP and computer vision to extract, analyze, and validate information from various document types.',
            technologies: ['React', 'Django', 'PyTorch', 'PostgreSQL', 'Docker'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            link: '#'
        }
    ];

    return (
        <section className="work-section" id="work">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">My Work</h2>
                <p className="section-subtitle">Recent AI-powered projects</p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div 
                        className="project-card" 
                        key={project.id}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <a href={project.link} className="view-project" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work; 