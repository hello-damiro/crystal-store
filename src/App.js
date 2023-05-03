import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Ribbon from './components/Ribbon';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { CartProvider } from './components/hooks/CartContext';

function App() {
    return (
        <div className="App">
            <Router>
                <div className="content">
                    <CartProvider>
                        <Ribbon />
                        <Header />
                        <Main />
                    </CartProvider>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
