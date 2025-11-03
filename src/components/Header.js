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
            {/* Nom et prénom à gauche */}
            <div className="header-name">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <h1 style={{ 
                        margin: 0, 
                        fontSize: '1.3rem', 
                        fontWeight: '600',
                        letterSpacing: '0.5px'
                    }}>
                        Audrey EBROTIE
                    </h1>
                </Link>
            </div>

            {/* Navigation au centre */}
            <nav className="nav-bar">
                <ul className="nav-links">
                    <li><Link to="/" className="nav-item">{currentContent.about}</Link></li>
                    <li><Link to="/projects" className="nav-item">{currentContent.projects}</Link></li>
                    <li><Link to="/contact" className="nav-item">{currentContent.contact}</Link></li>
                </ul>
            </nav>

            {/* Bouton langue et icônes sociales à droite */}
            <div className="header-right">
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