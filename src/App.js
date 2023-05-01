import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Ribbon from './components/Ribbon';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                <div className="content">
                    <Ribbon />
                    <Header />
                    <Main />
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
