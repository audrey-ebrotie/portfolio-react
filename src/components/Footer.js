import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/footer.css';

function Footer() {
    const { language } = useLanguage();

    const content = {
        fr: {
            rights: "Tous droits réservés",
        },
        en: {
            rights: "All rights reserved",
        }
    };

    const currentContent = content[language];

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Audrey Ebrotié. {currentContent.rights}.
                </p>
            </div>
        </footer>
    );
}

export default Footer;