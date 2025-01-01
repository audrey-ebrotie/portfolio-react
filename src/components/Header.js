import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    return (
        <header className="header">
            <nav className="nav-bar">
                <ul className="nav-links">
                    <li><Link to="/" className="nav-item">À propos</Link></li>
                    <li><Link to="/projects" className="nav-item">Projets</Link></li>
                    <li><Link to="/contact" className="nav-item">Contact</Link></li>
                </ul>
            </nav>
            <div className="social-icons">
                <a href="https://github.com/audrey-ebrotie" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/audrey-ebrotie/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </header>
    );
}

export default Header;
