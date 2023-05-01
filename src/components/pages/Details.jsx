import React from 'react';
import { Link } from 'react-router-dom';
import Crystal from '../shared/Crystal';

function Details({ futhark, crystal, color, meaning, description, facts, sell, price, tagline }) {
    return (
        <section className="crystal-detail">
            <div className="illustration">
                <Crystal
                    meaning={meaning}
                    color={color}
                    width={150}
                    shadowed={true}
                    shadowGap={32}
                />
            </div>
            <div className="copy">
                <h3>{futhark}</h3>
                <h1>{crystal}</h1>
                <h4>{tagline}</h4>
                <h5>{description}</h5>
                <p>{facts}</p>
                <p>{sell}</p>
                <div className="buttons">
                    <Link to="/shop">
                        <button className="primary">Add to Cart</button>
                    </Link>
                    <Link to="/contact">
                        <button className="secondary">Go to Shop</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Details;
