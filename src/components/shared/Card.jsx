import React from 'react';
import { Link } from 'react-router-dom';
import Crystal from './Crystal';

function Card({ id, futhark, crystal, color, meaning, price, tagline }) {
    return (
        <div className="card">
            <div>
                <Crystal meaning={meaning} color={color} width={100} shadowed={true} />
                <div className="details">
                    <div className="title-price">
                        <div className="title">
                            <h3>{futhark}</h3>
                            <h2>{crystal}</h2>
                        </div>
                        <div className="price">{price}</div>
                    </div>
                    <p>{tagline}</p>
                </div>
            </div>
            <div className="shop-buttons">
                <Link to="/about">
                    <button className="primary">Add to Cart</button>
                </Link>
                <Link to={`/shop/${id}`}>
                    <button className="secondary">View Details</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;
