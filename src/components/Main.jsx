import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

function Main() {
    return (
        <main>
            <Routes basename={process.env.PUBLIC_URL}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:futhark" element={<Details />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default Main;
