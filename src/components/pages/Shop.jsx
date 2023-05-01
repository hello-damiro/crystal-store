import React from 'react';
import Card from '../shared/Card';

function Shop() {
    return (
        <section className="shop">
            <h1>Odin Crystal Collections</h1>
            <p>
                Our store offers powerful Futhark crystals imbued with the essence of Odin, the
                Norse god of wisdom and magic. These crystals hold deep spiritual significance and
                offer benefits such as abundance, protection, communication, and inner strength.
                Connect with the power of Odin and elevate your life with our collection of Futhark
                crystals.
            </p>
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}

export default Shop;
