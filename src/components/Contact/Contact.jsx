import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';
import './Contact.scss';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.sendForm(
                'service_giq64ij', 
                'template_cd89qhj', 
                formRef.current,
                'lFKbxeuECl8alAjcV' 
            );

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus('error');
            console.error('Error sending email:', error);
        } finally {
            setIsSubmitting(false);
        }
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
                    
                    <div className="info-item" data-aos="fade-up" data-aos-delay="100">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <h4>Email</h4>
                            <p>nanduaru333@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-item" data-aos="fade-up" data-aos-delay="200">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Location</h4>
                            <p>Chennai, India</p>
                        </div>
                    </div>

                    <div className="social-links" data-aos="fade-up" data-aos-delay="300">
                        <a href="https://github.com/Nandakumar7328" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nandakumar-arjun" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://twitter.com/nandakumar_tech" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>

                <form 
                    ref={formRef}
                    className="contact-form" 
                    onSubmit={handleSubmit} 
                    data-aos="fade-left" 
                    data-aos-duration="1000"
                >
                    <div className="form-group" data-aos="fade-up" data-aos-delay="100">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            aria-label="Your Name"
                            className={isSubmitting ? 'submitting' : ''}
                        />
                    </div>

                    <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            aria-label="Your Email"
                            className={isSubmitting ? 'submitting' : ''}
                        />
                    </div>

                    <div className="form-group" data-aos="fade-up" data-aos-delay="300">
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                            aria-label="Subject"
                            className={isSubmitting ? 'submitting' : ''}
                        />
                    </div>

                    <div className="form-group" data-aos="fade-up" data-aos-delay="400">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            aria-label="Your Message"
                            className={isSubmitting ? 'submitting' : ''}
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus ? submitStatus : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <i className="fas fa-spinner fa-spin"></i>
                                Sending Message...
                            </>
                        ) : submitStatus === 'success' ? (
                            <>
                                <i className="fas fa-check"></i>
                                Thanks for reaching out!
                            </>
                        ) : submitStatus === 'error' ? (
                            <>
                                <i className="fas fa-exclamation-circle"></i>
                                Oops! Try again
                            </>
                        ) : (
                            <>
                                <i className="fas fa-paper-plane"></i>
                                Send Message
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact; 