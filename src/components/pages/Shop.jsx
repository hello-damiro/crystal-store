import React from 'react';
import Card from '../shared/Card';
import crystalData from '../../data/CrystalsData';

function Shop() {
    const data = crystalData;
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
                {data.map((crystal) => (
                    <Card
                        key={crystal.id}
                        id={crystal.id}
                        futhark={crystal.futhark}
                        crystal={crystal.crystal}
                        price={crystal.price}
                        color={crystal.color}
                        meaning={crystal.meaning.toLowerCase()}
                        tagline={crystal.tagline}
                    />
                ))}
            </div>
        </section>
    );
}

export default Shop;