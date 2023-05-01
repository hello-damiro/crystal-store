import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <Link to="/">
                        <div className="logo">
                            <h1>Odin</h1>
                            <div className="odin" />
                            <h1>
                                <em>Crystals</em>
                            </h1>
                        </div>
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/about">
                                    <button>About</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop">
                                    <button>Shop</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <button>Contact</button>
                                </Link>
                            </li>
                            <li>
                                <div className="cart-group">
                                    <button className="cart-button"></button>
                                    <div className="cart-num">8</div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
