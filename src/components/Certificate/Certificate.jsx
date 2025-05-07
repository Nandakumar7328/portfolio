import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Certificate.scss';

const Certificate = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const certificates = [
        {
            id: 1,
            title: 'Deep Learning Specialization',
            issuer: 'DeepLearning.AI',
            date: '2023',
            description: 'Comprehensive training in neural networks, computer vision, and sequence models.',
            link: '#'
        },
        {
            id: 2,
            title: 'Machine Learning Professional',
            issuer: 'Google Cloud',
            date: '2023',
            description: 'Advanced machine learning techniques and cloud-based AI solutions.',
            link: '#'
        },
        {
            id: 3,
            title: 'Full Stack Development',
            issuer: 'Meta',
            date: '2022',
            description: 'Modern web development with React, Node.js, and database management.',
            link: '#'
        }
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
                        <div className="certificate-content">
                            <h3>{cert.title}</h3>
                            <div className="certificate-details">
                                <span className="issuer">{cert.issuer}</span>
                                <span className="date">{cert.date}</span>
                            </div>
                            <p>{cert.description}</p>
                            <a href={cert.link} className="view-certificate" target="_blank" rel="noopener noreferrer">
                                View Certificate
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificate; 