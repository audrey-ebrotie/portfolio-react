import React from 'react';
import { motion } from 'framer-motion';

const projets = [
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
        description: "Site du groupe de metal français IANWILL en Wordpress.", 
        url: "https://ianwillofficial.com", 
        image: `${process.env.PUBLIC_URL}/ianwill.png` 
    },
    { 
        id: 3, 
        titre: "Galerie photos/videos", 
        description: "Site du photographe et vidéaste lillois Rémi DELECROIX en Symfony v6.", 
        url: "https://remi-delecroix.com", 
        image: `${process.env.PUBLIC_URL}/remi-delecroix.png` 
    },
];

function Projects() {
    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
        >
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Projets</h2>
            <ul style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                justifyContent: 'center',
                padding: '0',
                listStyle: 'none',
                margin: '0 auto',
                maxWidth: '1200px',
            }}>
                {projets.map((projet) => (
                    <li key={projet.id} style={{
                        flex: '1 1 calc(100% - 2rem)', // Utilisé pour des petits écrans
                        maxWidth: '30%', // Réduit pour les écrans moyens et grands
                        minWidth: '280px', // Taille minimale pour éviter de casser la mise en page
                        background: '#fff',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
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
                                <p style={{ minHeight: "4rem" }}>{projet.description}</p>
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
                                    Voir le projet
                                </motion.span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </motion.section>
    );
}

export default Projects;
