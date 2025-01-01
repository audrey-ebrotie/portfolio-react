import React from 'react';
import { motion } from 'framer-motion';

const projets = [
    { 
        id: 1, 
        titre: "Portfolio", 
        description: "Mon portfolio en React.", 
        url: "https://monportfolio.com", 
        image: `${process.env.PUBLIC_URL}/portfolio.png` 
    },
    { 
        id: 2, 
        titre: "Site IANWILL", 
        description: "Site du groupe de metal français IANWILL en Wordpress.", 
        url: "https://ianwillofficial.com", 
        image: `${process.env.PUBLIC_URL}/ianwill.png` 
    },
    { 
        id: 3, 
        titre: "Galerie photos/videos", 
        description: "Site du photographe et vidéaste lillois Rémi DELECROIX.", 
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
            <h2>Projets</h2>
            <ul style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                padding: '0',
                listStyle: 'none',
            }}>
                {projets.map((projet) => (
                    <li key={projet.id} style={{
                        width: '30vw',
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
                                <p>{projet.description}</p>
                                <span style={{
                                    display: 'inline-block',
                                    marginTop: '0.5rem',
                                    padding: '0.5rem 1rem',
                                    background: '#c892ff',
                                    color: '#fff',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                }}>
                                    Voir le projet
                                </span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </motion.section>
    );
}

export default Projects;
