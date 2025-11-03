import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

function Projects() {
    const { language } = useLanguage();

    const content = {
        fr: {
            title: "Projets",
            buttonText: "Voir le projet",
            projects: [
                { 
                    id: 1, 
                    titre: "Portfolio Audrey EBROTIE", 
                    description: "Mon portfolio en React v18.", 
                    url: "https://audrey-ebrotie.github.io/portfolio-react", 
                    image: `${process.env.PUBLIC_URL}/portfolio.png`
                },
                { 
                    id: 2, 
                    titre: "Site du groupe IANWILL", 
                    description: "Site du groupe de metal français IANWILL en WordPress.", 
                    url: "https://ianwillofficial.com", 
                    image: `${process.env.PUBLIC_URL}/ianwill.png`
                },
                { 
                    id: 3, 
                    titre: "Galerie photos/vidéos", 
                    description: "Site du photographe et vidéaste lillois Rémi DELECROIX en Symfony v6.", 
                    url: "https://remi-delecroix.com", 
                    image: `${process.env.PUBLIC_URL}/remi-delecroix.png`
                },
                { 
                    id: 4, 
                    titre: "Site vitrine foodtruck", 
                    description: "Site pour le foodtruck lillois La Ch'tite Croquette en Webflow.", 
                    url: "https://lachtitecroquette.com", 
                    image: `${process.env.PUBLIC_URL}/lachtitecroquette.png`
                }
            ]
        },
        en: {
            title: "Projects",
            buttonText: "View project",
            projects: [
                { 
                    id: 1, 
                    titre: "Audrey EBROTIE Portfolio", 
                    description: "My portfolio built with React v18.", 
                    url: "https://audrey-ebrotie.github.io/portfolio-react", 
                    image: `${process.env.PUBLIC_URL}/portfolio.png`
                },
                { 
                    id: 2, 
                    titre: "IANWILL Band Website", 
                    description: "Website for the French metal band IANWILL built with WordPress.", 
                    url: "https://ianwillofficial.com", 
                    image: `${process.env.PUBLIC_URL}/ianwill.png`
                },
                { 
                    id: 3, 
                    titre: "Photo/Video Gallery", 
                    description: "Website for Lille-based photographer and videographer Rémi DELECROIX built with Symfony v6.", 
                    url: "https://remi-delecroix.com", 
                    image: `${process.env.PUBLIC_URL}/remi-delecroix.png`
                },
                { 
                    id: 4, 
                    titre: "Food Truck Website", 
                    description: "Website for the Lille-based food truck La Ch'tite Croquette built with Webflow.", 
                    url: "https://lachtitecroquette.com", 
                    image: `${process.env.PUBLIC_URL}/lachtitecroquette.png`
                }
            ]
        }
    };

    const currentContent = content[language];

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2 
                key={language}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
                {currentContent.title}
            </motion.h2>

            <ul
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    padding: '0',
                    listStyle: 'none',
                    margin: '0 auto',
                    maxWidth: '1200px',
                }}
            >
                {currentContent.projects.map((projet) => (
                    <motion.li 
                        key={projet.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: projet.id * 0.1 }}
                        style={{
                            flex: '1 1 calc(100% - 2rem)',
                            maxWidth: '30%',
                            minWidth: '280px',
                            background: '#fff',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <a
                            href={projet.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'block',
                                width: '100%',
                            }}
                        >
                            <img 
                                src={projet.image} 
                                alt={projet.titre} 
                                style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                }}
                            />
                            <div style={{ padding: '1rem' }}>
                                <h3>{projet.titre}</h3>
                                <p style={{ minHeight: '4rem' }}>{projet.description}</p>
                                <motion.span
                                    whileHover={{
                                        scale: 1.1,
                                        y: -5,
                                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                    style={{
                                        display: 'inline-block',
                                        marginTop: '0.5rem',
                                        padding: '0.5rem 1rem',
                                        background: '#c892ff',
                                        color: '#fff',
                                        borderRadius: '4px',
                                        fontWeight: 'bold',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {currentContent.buttonText}
                                </motion.span>
                            </div>
                        </a>
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
}

export default Projects;
