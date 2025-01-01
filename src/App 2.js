import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import './styles/global.css';

function App() {
    return (
        <div className="app-container">
            <Router>
                <Header />
                <main className="main-content">
                    <AnimatedRoutes />
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
