import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import './styles/global.css';

function App() {
    return (
        <LanguageProvider>
            <div className="app-container">
                <Router basename="/portfolio-react">
                    <Header />
                    <main className="main-content">
                        <AnimatedRoutes />
                    </main>
                    <Footer />
                </Router>
            </div>
        </LanguageProvider>
    );
}

export default App;