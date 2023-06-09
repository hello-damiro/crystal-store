import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Crystal from '../shared/Crystal';
import NotFound from './NotFound';
import { useCart } from '../hooks/CartContext';

function Details() {
    const { futhark } = useParams();
    const [crystal, setCrystal] = useState({});
    const cart = useCart();

    useEffect(() => {
        const crystal = cart.collection.find((data) => data.futhark.toLowerCase() === futhark);
        setCrystal(crystal);
    }, [cart, futhark]);

    if (!crystal || !crystal.meaning) {
        return <NotFound />;
    }

    return (
        <section className="crystal-detail">
            <div className="illustration">
                <Crystal
                    meaning={crystal.meaning.toLowerCase()}
                    color={crystal.color}
                    width={150}
                    shadowed={true}
                    shadowGap={32}
                />
            </div>
            <div className="copy">
                <h3>{crystal.futhark}</h3>
                <h1>{crystal.crystal}</h1>
                <h4>{crystal.tagline}</h4>
                <h5>{crystal.description}</h5>
                <p>{crystal.facts}</p>
                <p>{crystal.sell}</p>

                <div className="buttons">
                    <button onClick={() => cart.addToCart(crystal.id)} className="primary">
                        Add to Cart
                    </button>
                    <Link to="/shop">
                        <button className="secondary">Go to Shop</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Details;
