import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

function About() {
    const { language } = useLanguage();
    const cvUrlFr = `${process.env.PUBLIC_URL}/cv-audrey-ebrotie-fr.pdf`;
    const cvUrlEn = `${process.env.PUBLIC_URL}/cv-audrey-ebrotie-en.pdf`;

    const content = {
        fr: {
            title: "Hello ! 👋 Bienvenue sur mon portfolio !",
            cvButton: "Mon curriculum vitae",
            intro: "🚀 Développeuse Web Front-End",
            introText: "Je recherche actuellement des missions ou un poste dans le développement web (spécialité : front end)",
            valueTitle: "💡 Ma proposition de valeur",
            valueText: "Développeuse front-end passionnée par la création d'interfaces utilisateur fluides et performantes, j'apporte également une vision marketing qui fait la différence : je ne me contente pas de développer, je construis des expériences qui convertissent. Mon approche technique rigoureuse combinée à ma compréhension des enjeux business me permet de livrer des projets qui répondent aux objectifs de croissance.",
            expertiseTitle: "🧰 Mes compétences techniques",
            webDevTitle: "Développement web",
            webDev: "ReactJs, VueJs, Symfony, WordPress, Drupal, PHP, JavaScript (ES6+), HTML5, CSS3, Responsive design & optimisation des performances",
            toolsTitle: "Outils & environnement",
            tools: "Git, NPM, Webpack, SEO technique, Google Analytics, Google Tag Manager, Webflow, landing pages optimisées pour la conversion",
            marketingTitle: "Atout marketing",
            marketing: "Automatisation & intégrations : Make, n8n, Airtable, Brevo, HubSpot, Compréhension des tunnels de conversion et A/B testing, Création de contenu visuel : Photoshop, Illustrator, Canva",
            ctaTitle: "✨ Parlons de votre projet !",
            ctaText: "Vous cherchez une développeuse front-end capable de comprendre vos enjeux business et de traduire vos objectifs en interfaces performantes ? Échangeons sur vos besoins !",
            contactLabel: "Contact :"
        },
        en: {
            title: "Hello ! 👋 Welcome on my portfolio !",
            cvButton: "My resume",
            intro: "🚀 Front-End Web Developer",
            introText: "I'm currently seeking missions or a position in web development (specialty: front-end)",
            valueTitle: "💡 My value proposition",
            valueText: "Front-end developer passionate about creating smooth and high-performance user interfaces, I also bring a marketing perspective that makes a difference: I don't just develop, I build experiences that convert. My rigorous technical approach combined with my understanding of business challenges allows me to deliver projects that meet growth objectives.",
            expertiseTitle: "🧰 My technical skills",
            webDevTitle: "Web Development",
            webDev: "ReactJs, VueJs, Symfony, WordPress, Drupal, PHP, JavaScript (ES6+), HTML5, CSS3, Responsive design & performance optimization",
            toolsTitle: "Tools & Environment",
            tools: "Git, NPM, Webpack, Technical SEO, Google Analytics, Google Tag Manager, Webflow, conversion-optimized landing pages",
            marketingTitle: "Marketing Asset",
            marketing: "Automation & integrations: Make, n8n, Airtable, Brevo, HubSpot, Understanding of conversion funnels and A/B testing, Visual content creation: Photoshop, Illustrator, Canva",
            ctaTitle: "✨ Let's discuss your project!",
            ctaText: "Looking for a front-end developer capable of understanding your business challenges and translating your objectives into high-performance interfaces? Let's connect!",
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
                
                <div style={{ textAlign: 'left', marginBottom: '1.5rem', paddingLeft: '1rem' }}>
                    <p style={{ marginBottom: '0.5rem' }}>
                        <strong>{currentContent.webDevTitle}</strong>
                    </p>
                    <p style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
                        {currentContent.webDev}
                    </p>

                    <p style={{ marginBottom: '0.5rem' }}>
                        <strong>{currentContent.toolsTitle}</strong>
                    </p>
                    <p style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
                        {currentContent.tools}
                    </p>

                    <p style={{ marginBottom: '0.5rem' }}>
                        <strong>{currentContent.marketingTitle}</strong>
                    </p>
                    <p style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
                        {currentContent.marketing}
                    </p>
                </div>

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