import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/header.css';

function Header() {
    const { language, toggleLanguage } = useLanguage();

    const content = {
        fr: {
            about: "À propos",
            projects: "Projets",
            contact: "Contact"
        },
        en: {
            about: "About",
            projects: "Projects",
            contact: "Contact"
        }
    };

    const currentContent = content[language];

    return (
        <header className="header">
            <nav className="nav-bar">
                <ul className="nav-links">
                    <li><Link to="/" className="nav-item">{currentContent.about}</Link></li>
                    <li><Link to="/projects" className="nav-item">{currentContent.projects}</Link></li>
                    <li><Link to="/contact" className="nav-item">{currentContent.contact}</Link></li>
                </ul>
            </nav>
            <div className="header-right">
                {/* Bouton de langue */}
                <motion.button
                    onClick={toggleLanguage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '0.5rem 0.8rem',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: '#c892ff',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        marginRight: '1rem',
                        transition: 'all 0.3s ease',
                    }}
                >
                    {language === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
                </motion.button>

                {/* Icônes sociales */}
                <div className="social-icons">
                    <a href="https://github.com/audrey-ebrotie" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/audrey-ebrotie/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;