import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <footer style={{ background: '#333', color: '#fff', textAlign: 'center', padding: '1rem' }}>
            <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;
