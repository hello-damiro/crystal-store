import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../shared/CartItem';
import OrderConfirmation from './OrderConfirmation';

function Cart() {
    return (
        <section className="cart">
            <div className="copy">
                <h1>Cart</h1>
                <h3>Order Summary</h3>
                <CartItem />
                <div className="cart-total">
                    <div className="cart-item-details">
                        <div className="cart-total-title">
                            <h4>3 Crystal types</h4>
                            <h4 className="total-pcs">2sc3 pc/s</h4>
                        </div>
                    </div>
                    <h4 className="total-price">$ 23 400</h4>
                </div>
                <div className="total-buttons">
                    <Link to="/shop">
                        <button className="secondary">Shop more</button>
                    </Link>
                    <Link to="/about">
                        <button className="primary">Checkout</button>
                    </Link>
                </div>
            </div>
            {/* <OrderConfirmation /> */}
        </section>
    );
}

export default Cart;
