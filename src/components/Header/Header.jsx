import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-scroll';
import './Header.scss';

const Header = ({ isScrolled }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = useMemo(() => [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'work', label: 'Projects' },
        { id: 'certificates', label: 'Certifications' },
        { id: 'contact', label: 'Contact' }
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(navLinks[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]);

    const handleNavClick = (sectionId) => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
        
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo">
                    <Link to="home" smooth={true} duration={500} onClick={() => handleNavClick('home')}>
                        <span className="logo-text">NK</span>
                        <span className="logo-glow"></span>
                    </Link>
                </div>

                <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.id} className="nav-item">
                                <Link
                                    to={link.id}
                                    smooth={true}
                                    duration={500}
                                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={() => handleNavClick(link.id)}
                                >
                                    {link.label}
                                    <span className="nav-link-underline"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button 
                    className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>
        </header>
    );
};

export default Header; 
