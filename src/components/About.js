import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

function About() {
    const { language } = useLanguage();
    const cvUrlFr = `${process.env.PUBLIC_URL}/cv-audrey-ebrotie-fr.pdf`;
    const cvUrlEn = `${process.env.PUBLIC_URL}/cv-audrey-ebrotie-en.pdf`;

    const content = {
        fr: {
            title: "Présentation",
            cvButton: "Mon curriculum vitae",
            intro: "🚀 Développeuse web & Growth Hacker (freelance ou CDD/CDI)",
            introText: "Je mets mes compétences techniques, créatives et stratégiques au service des entreprises pour les accompagner sur des projets variés : développement web, automatisation, création de landing pages, stratégies d'acquisition et bien plus encore.",
            valueTitle: "💡 Ma proposition de valeur",
            valueText: "Spécialisée dans les projets où croissance rime avec expérimentation, j'interviens à l'intersection de la tech, de la data et du marketing. Forte de mon expérience en développement web, de mon sens analytique et de ma créativité, j'identifie des leviers de croissance concrets et les active rapidement pour générer des résultats mesurables.",
            expertiseTitle: "🧰 Mes expertises clés",
            expertise: [
                { label: "Développement web :", value: "React, Symfony, WordPress, Drupal, PHP, JavaScript, HTML, CSS" },
                { label: "Landing pages & design :", value: "Webflow, Carrd, Photoshop, Illustrator, Canva" },
                { label: "SEO & analytics :", value: "Google Analytics, Google Tag Manager" },
                { label: "Automatisation & no-code :", value: "Make, n8n, Airtable, Brevo, HubSpot" },
                { label: "Création de contenu :", value: "Photoshop, CapCut, Canva pour vos réseaux sociaux" },
                { label: "Gestion de projet :", value: "Relation client & optimisation des process" }
            ],
            ctaTitle: "✨ Discutons de votre projet !",
            ctaText: "Vous recherchez un profil hybride tech / marketing / growth pour dynamiser vos projets ? Discutons de vos besoins et de la manière dont je peux vous aider à atteindre vos objectifs !",
            contactLabel: "Contact :"
        },
        en: {
            title: "About Me",
            cvButton: "My resume",
            intro: "🚀 Web Developer & Growth Hacker (Freelance or Full-time/Part-time)",
            introText: "I bring my technical, creative, and strategic skills to help businesses with diverse projects: web development, automation, landing page creation, acquisition strategies, and more.",
            valueTitle: "💡 My Value Proposition",
            valueText: "Specialized in projects where growth meets experimentation, I work at the intersection of tech, data, and marketing. With my web development background, analytical mindset, and creativity, I identify concrete growth opportunities and activate them quickly to generate measurable results.",
            expertiseTitle: "🧰 Core Expertise",
            expertise: [
                { label: "Web Development:", value: "React, Symfony, WordPress, Drupal, PHP, JavaScript, HTML, CSS" },
                { label: "Landing Pages & Design:", value: "Webflow, Carrd, Photoshop, Illustrator, Canva" },
                { label: "SEO & Analytics:", value: "Google Analytics, Google Tag Manager" },
                { label: "Automation & No-code:", value: "Make, n8n, Airtable, Brevo, HubSpot" },
                { label: "Content Creation:", value: "Photoshop, CapCut, Canva for social media" },
                { label: "Project Management:", value: "Client relations & process optimization" }
            ],
            ctaTitle: "✨ Let's talk about your project !",
            ctaText: "Looking for a hybrid tech / marketing / growth profile to boost your projects? Let's discuss your needs and how I can help you achieve your goals!",
            contactLabel: "Contact:"
        }
    };

    const currentContent = content[language];
    const cvUrl = language === 'fr' ? cvUrlFr : cvUrlEn;

    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            style={{
                textAlign: 'center',
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: '800px',
                margin: '2rem auto',
            }}
        >
            <h2 style={{ marginBottom: '1rem' }}>{currentContent.title}</h2>
            <img
                src={`${process.env.PUBLIC_URL}/photo-profil-Audrey.jpg`}
                alt="Portrait d'Audrey"
                style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '1rem',
                }}
            />
            <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                <motion.a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
                    }}
                    style={{
                        textDecoration: 'none',
                        color: 'white',
                        backgroundColor: '#c892ff',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '5px',
                        margin: '0 0.5rem',
                        display: 'inline-block',
                    }}
                >
                    {currentContent.cvButton}
                </motion.a>
            </div>

            <motion.div
                key={language}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{ lineHeight: '1.8', fontSize: '1rem', textAlign: 'left' }}
            >
                <p style={{ marginBottom: '1.5rem' }}>
                    <strong>{currentContent.intro}</strong>
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    {currentContent.introText}
                </p>

                <p style={{ marginBottom: '1rem' }}>
                    <strong>{currentContent.valueTitle}</strong>
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    {currentContent.valueText}
                </p>

                <p style={{ marginBottom: '1rem' }}>
                    <strong>{currentContent.expertiseTitle}</strong>
                </p>
                <ul style={{ textAlign: 'left', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
                    {currentContent.expertise.map((item, index) => (
                        <li key={index}>
                            <strong>{item.label}</strong> {item.value}
                        </li>
                    ))}
                </ul>

                <p style={{ marginBottom: '1rem' }}>
                    <strong>{currentContent.ctaTitle}</strong>
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    {currentContent.ctaText}
                </p>

                <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
                    <strong>📩 {currentContent.contactLabel}</strong> <a href="mailto:audrey.ebrotie@gmail.com" style={{ color: '#c892ff', textDecoration: 'none' }}>audrey.ebrotie@gmail.com</a>
                </p>
            </motion.div>
        </motion.section>
    );
}

export default About;