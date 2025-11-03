import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/contact.css';

function Contact() {
    const { language } = useLanguage();

    const content = {
        fr: {
            title: "Contactez-moi",
            subtitle: "Une question, un projet, une collaboration ? N'hésitez pas à me contacter !",
            emailLabel: "Email",
            phoneLabel: "Téléphone",
            availabilityTitle: "Disponibilité",
            availability: "Actuellement disponible pour des missions en freelance ou des postes en CDD/CDI"
        },
        en: {
            title: "Contact Me",
            subtitle: "A question, a project, a collaboration? Feel free to reach out!",
            emailLabel: "Email",
            phoneLabel: "Phone",
            availabilityTitle: "Availability",
            availability: "Currently available for freelance missions or full-time/part-time positions"
        }
    };

    const currentContent = content[language];

    return (
        <motion.section
            id="contact"
            className="contact-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            style={{
                textAlign: 'center',
                backgroundColor: 'white',
                padding: '3rem 2rem',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: '700px',
                margin: '2rem auto',
            }}
        >
            <motion.div
                key={language}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h2 style={{ marginBottom: '1rem', color: '#333' }}>{currentContent.title}</h2>
                <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: '#666' }}>
                    {currentContent.subtitle}
                </p>

                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '2rem',
                    marginBottom: '2.5rem'
                }}>
                    {/* Email */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{
                            backgroundColor: '#f8f8f8',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📧</div>
                        <h3 style={{ marginBottom: '0.5rem', color: '#c892ff' }}>{currentContent.emailLabel}</h3>
                        <a 
                            href="mailto:audrey.ebrotie@gmail.com"
                            style={{
                                color: '#333',
                                textDecoration: 'none',
                                fontSize: '1.1rem',
                                fontWeight: '500'
                            }}
                        >
                            audrey.ebrotie@gmail.com
                        </a>
                    </motion.div>

                    {/* Téléphone */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{
                            backgroundColor: '#f8f8f8',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📱</div>
                        <h3 style={{ marginBottom: '0.5rem', color: '#c892ff' }}>{currentContent.phoneLabel}</h3>
                        <a 
                            href="tel:+33761584979"
                            style={{
                                color: '#333',
                                textDecoration: 'none',
                                fontSize: '1.1rem',
                                fontWeight: '500'
                            }}
                        >
                            07 61 58 49 79
                        </a>
                    </motion.div>
                </div>

                {/* Disponibilité */}
                <div style={{
                    backgroundColor: '#f0e7ff',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    marginTop: '2rem'
                }}>
                    <h3 style={{ marginBottom: '0.5rem', color: '#c892ff' }}>
                        ✨ {currentContent.availabilityTitle}
                    </h3>
                    <p style={{ margin: 0, color: '#555', fontSize: '1rem' }}>
                        {currentContent.availability}
                    </p>
                </div>
            </motion.div>
        </motion.section>
    );
}

export default Contact;