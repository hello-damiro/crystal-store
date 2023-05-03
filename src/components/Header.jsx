import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './hooks/CartContext';

function Header() {
    const cartContext = useCart();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const total = cartContext.reduce((num, item) => {
            return num + item.count;
        }, 0);
        setCount(total);
    }, [cartContext]);

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
                                <Link to="/cart" className="cart-group">
                                    <button className="cart-button"></button>
                                    {cartContext.length >= 1 && (
                                        <div className="cart-num">{count}</div>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
