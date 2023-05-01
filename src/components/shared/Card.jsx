import React from 'react';
import { Link } from 'react-router-dom';
import Crystal from './Crystal';

function Card() {
    return (
        <div className="card">
            <Crystal width={100} shadowed={true} />
            <div className="details">
                <h3>Jera</h3>
                <h2>Green Aventurine</h2>
                <p>Harvest abundance and success with Jera.</p>
            </div>
            <div className="shop-buttons">
                <Link to="/about">
                    <button className="primary">Add to Cart</button>
                </Link>
                <Link to="/shop">
                    <button className="secondary">View Details</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;
