import React from 'react';
import { motion } from 'framer-motion';
import '../styles/contact.css';

function Contact() {
    return (
        <motion.section
            id="contact"
            className="contact-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Contactez-moi</h2>
            <p>Vous avez une question ou souhaitez collaborer ? Envoyez-moi un message !</p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" placeholder="Votre nom" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Votre email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Votre message"></textarea>
                </div>
                <button type="submit" className="submit-button">Envoyer</button>
            </form>
        </motion.section>
    );
}

export default Contact;
