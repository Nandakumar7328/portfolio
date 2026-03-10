import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Work.scss';
import imgGalv from '../../assets/images/Galvanizing Process Monitoring System.png';
import imgSafety from '../../assets/images/AI-Powered Safety Monitoring System.png';
import imgAnnot from '../../assets/images/Image Annotation & ML Training Platform.png';
import imgTraffic from '../../assets/images/Real-Time Traffic Monitoring & Analytics System.png';
import imgFurnace from '../../assets/images/Furnace Monitoring & Analytics Platform.png';
import reactImg from '../../assets/images/react.png';

const projects = [
    {
        title: 'Galvanizing Process Monitoring System',
        useCase: 'A real-time production monitoring platform for galvanizing plants. It tracks KPIs during 3 shifts, displays live process values, and provides PDF/CSV reports for plant engineers.',
        tech: {
            Backend: ['Django', 'Django REST Framework'],
            Database: ['PostgreSQL'],
            Scheduling: ['APScheduler', 'Cached Tables'],
            Frontend: ['ApexCharts', 'Bootstrap', 'HTML/CSS'],
            Exports: ['HTML-to-PDF', 'CSV', 'PNG'],
            Optimizations: ['Advanced indexing', 'Connection pooling'],
            Architecture: ['Low-latency API design', '<1s response']
        }
    },
    {
        title: 'AI-Powered Safety Monitoring System',
        useCase: 'A real-time safety violation detection system used across 200+ camera zones. Detects PPE violations, hazardous activities, and triggers instant alerts to operators.',
        tech: {
            Frontend: ['React.js', 'Lazy Loading', 'Async UI'],
            Backend: ['Django REST Framework'],
            RealTime: ['WebSocket (Django Channels)', 'Redis Pub/Sub'],
            Database: ['PostgreSQL'],
            CV: ['OpenCV', 'Violation Image Capture'],
            Security: ['JWT', 'RBAC Middleware'],
            Performance: ['<500ms alert streaming latency']
        }
    },
    {
        title: 'Image Annotation & ML Training Platform',
        useCase: 'Internal tool for annotating 100K+ images and automatically training ML models. Used by annotation teams and ML engineers to maintain dataset versions.',
        tech: {
            Frontend: ['React.js (interactive canvas)', 'HTML5', 'CSS3'],
            Backend: ['Flask', 'SQLAlchemy ORM'],
            Background: ['Celery', 'Redis'],
            Concurrency: ['Python Threading'],
            Storage: ['Versioned datasets', 'Training artifacts'],
            Features: ['Real-time annotation sync', 'Concurrent labeling', 'Auto model retraining', 'Dataset versioning']
        }
    },
    {
        title: 'Real-Time Traffic Monitoring & Analytics System',
        useCase: 'Centralized dashboard to monitor 100+ CCTV live streams. Shows congestion, footfall, vehicle count, and anomaly alerts for traffic control rooms.',
        tech: {
            Frontend: ['React.js', 'Chart.js'],
            Backend: ['Flask'],
            RealTime: ['WebSocket', 'Redis Pub/Sub'],
            DevOps: ['Docker'],
            Monitoring: ['Prometheus', 'Grafana'],
            Performance: ['<1s latency updates', '10K+ events/hour', 'Multi-threaded processing']
        }
    },
    {
        title: 'Furnace Monitoring & Analytics Platform',
        useCase: 'Monitors temperature, energy consumption, and anomalies for industrial furnaces. Used by plant supervisors and engineers for shift analysis and maintenance decisions.',
        tech: {
            Frontend: ['Django Templates', 'ApexCharts'],
            Backend: ['Django'],
            Database: ['PostgreSQL'],
            RealTime: ['WebSocket APIs'],
            Automation: ['Cron Jobs'],
            Integration: ['PLC/IoT sensors'],
            Features: ['Real-time furnace temperature tracking', 'Auto alerts + shift-wise email reporting', '6-month time-series archiving']
        }
    }
];

const Work = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const imageMap = {
        'Galvanizing Process Monitoring System': imgGalv,
        'AI-Powered Safety Monitoring System': imgSafety,
        'Image Annotation & ML Training Platform': imgAnnot,
        'Real-Time Traffic Monitoring & Analytics System': imgTraffic,
        'Furnace Monitoring & Analytics Platform': imgFurnace,
    };

    const [openProject, setOpenProject] = React.useState(null);
    const handleOpen = (project) => {
        setOpenProject(project);
        document.body.style.overflow = 'hidden';
    };
    const handleClose = () => {
        setOpenProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className="work-section" id="work">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">Built for real-time and scale</p>
            </div>

            <div className="projects-grid">
                {projects.map((p, idx) => (
                    <div className="project-card" data-aos="fade-up" data-aos-delay={100 + idx * 100} key={p.title}>
                        <div className="project-image">
                            <img src={imageMap[p.title] || reactImg} alt={p.title} />
                            <div className="project-overlay">
                                <button type="button" className="view-project" onClick={() => handleOpen(p)}>View project</button>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{p.title}</h3>
                            <div className="project-meta">
                                <h4>Use Case</h4>
                                <p>{p.useCase}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {openProject && (
                <div className="project-modal">
                    <div className="modal-backdrop" onClick={handleClose}></div>
                    <div className="modal-content" data-aos="zoom-in">
                        <button className="modal-close" aria-label="Close" onClick={handleClose}>×</button>
                        <div className="modal-header">
                            <img src={imageMap[openProject.title] || reactImg} alt={openProject.title} className="modal-image" />
                            <div className="modal-title">
                                <h3>{openProject.title}</h3>
                                <p className="modal-usecase">{openProject.useCase}</p>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h4>Tech Stack</h4>
                            <div className="tech-stack">
                                {Object.entries(openProject.tech).map(([cat, items]) => (
                                    <div className="tech-category" key={cat}>
                                        <span className="tech-category-label">{cat}</span>
                                        <div className="tech-items">
                                            {items.map((t) => (
                                                <span className="tech-pill" key={t}>{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Work; 
