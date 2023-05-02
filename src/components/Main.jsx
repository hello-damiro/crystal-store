import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Details from './pages/Details';

function Main() {
    return (
        <main>
            <Routes basename="/crystal-store/">
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<Details />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    );
}

export default Main;
