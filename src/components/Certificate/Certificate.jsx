import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Certificate.scss';
import imgJs from '../../assets/js.png';
import imgNode from '../../assets/node.png';
import imgReact from '../../assets/react.png';
import imgSql from '../../assets/sql.png';
import imgPython from '../../assets/python.png';

const Certificate = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const certificates = [
        { id: 1, title: 'JavaScript', image: imgJs, description: 'ES6+, async patterns, DOM APIs, and modern tooling.' },
        { id: 2, title: 'Node.js', image: imgNode, description: 'REST APIs with Express, auth, and performance tuning.' },
        { id: 3, title: 'React', image: imgReact, description: 'Hooks, routing, state management, and component design.' },
        { id: 4, title: 'SQL', image: imgSql, description: 'Schema design, complex queries, indexes, and optimization.' },
        { id: 5, title: 'Python', image: imgPython, description: 'Django/Flask backends, async tasks, and data pipelines.' }
    ];

    return (
        <section className="certificate-section" id="certificates">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">Certifications</h2>
                <p className="section-subtitle">Professional qualifications</p>
            </div>

            <div className="certificates-grid">
                {certificates.map((cert, index) => (
                    <div 
                        className="certificate-card" 
                        key={cert.id}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="certificate-thumb">
                            <img src={cert.image} alt={cert.title} />
                        </div>
                        <div className="certificate-content">
                            <h3>{cert.title}</h3>
                            <p className="certificate-desc">{cert.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificate; 
