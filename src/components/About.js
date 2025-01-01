import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
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
            <h2 style={{ marginBottom: '1rem' }}>Présentation</h2>
            <img
                src="/photo-profil-Audrey.jpg"
                alt="Portrait d'Audrey"
                style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '1rem',
                }}
            />
            <p style={{ lineHeight: '1.6', fontSize: '1rem' }}>
                Bonjour ! Je m'appelle <strong>Audrey EBROTIE</strong>, j'habite à Lille, j'ai 37 ans et je suis développeuse Front-End.<br /><br />
                Après 7 ans dans le secteur des assurances / mutuelles, j'ai fait une reconversion professionnelle pour devenir développeuse Web 💻, un métier qui m'attire depuis toujours (ou presque^^).<br /><br />
                J'ai effectué la formation "Développeur Web / Mobile" au sein du centre de formation Webforce3 de Lille (La Madeleine), puis ai enchaîné avec un premier stage de 2 mois chez Giphar Technologies (Loos) en tant que développeuse logiciel back-end.<br /><br />
                J'ai ensuite poursuivi ma formation avec un second stage de 5 mois chez Smile (Lille) en tant que développeuse web au service TMA, stage à l'issue duquel j'ai été embauchée 🎉🍾<br /><br />
                Par la suite en octobre 2022, j'ai obtenu le titre professionnel de niveau 5 de Développeur web et web mobile 🥳<br /><br />
                Après 1 an et demi chez Smile, une superbe opportunité s'est présentée à moi et j'ai décidé de la saisir : c'est ainsi que je rejoins FFW en tant que développeuse front-end. Après avoir rejoint le groupe Jakala, FFW devient officiellement Jakala en mai 2024.<br /><br />
                Ma collaboration avec Jakala vient tout juste de se terminer en octobre 2024, je suis actuellement disponible et ouverte à de nouvelles opportunités.
            </p>
        </motion.section>
    );
}

export default About;
