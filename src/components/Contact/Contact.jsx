import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="section-header" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Let's discuss your next project</p>
            </div>

            <div className="contact-container">
                <div className="contact-info" data-aos="fade-right" data-aos-duration="1000">
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out to me for any questions or opportunities!</p>
                    
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <h4>Email</h4>
                            <p>nanduaru333@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Location</h4>
                            <p>Chennai5+, India</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/nandakumar-tech" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/nandakumar-tech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://twitter.com/nandakumar_tech" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left" data-aos-duration="1000">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            aria-label="Your Name"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            aria-label="Your Email"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                            aria-label="Subject"
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            aria-label="Your Message"
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact; 