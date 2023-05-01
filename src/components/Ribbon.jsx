import React from 'react';
import { Link } from 'react-router-dom';

function Ribbon() {
    return (
        <div className="ribbon">
            <h4>80% discount for the first 10 customers!</h4>
            <Link to={'/shop'}>
                <button>Shop Now</button>
            </Link>
        </div>
    );
}

export default Ribbon;
