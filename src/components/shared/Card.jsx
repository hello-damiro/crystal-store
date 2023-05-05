import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Crystal from './Crystal';

function Card({ crystal, addToCart }) {
    return (
        <div className="card">
            <div>
                <Crystal
                    meaning={crystal.meaning.toLowerCase()}
                    color={crystal.color}
                    width={100}
                    shadowed={true}
                />
                <div className="details">
                    <div className="title-price">
                        <div className="title">
                            <h3>{crystal.futhark}</h3>
                            <h2>{crystal.crystal}</h2>
                        </div>
                        <div className="price">{crystal.price}</div>
                    </div>
                    <p>{crystal.tagline}</p>
                </div>
            </div>
            <div className="shop-buttons">
                <Link to={`/shop/${crystal.futhark.toLowerCase()}`}>
                    <button className="secondary">View Details</button>
                </Link>
                <button onClick={addToCart} className="primary">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

Card.propTypes = {
    crystal: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default Card;
