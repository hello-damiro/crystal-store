import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../shared/CartItem';
import OrderConfirmation from './OrderConfirmation';
import { useCart } from '../hooks/CartContext';

function Cart() {
    const cart = useCart();

    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkout, setCheckout] = useState(false);
    const handleCheckout = () => setCheckout((prevValue) => !prevValue);

    // initial value of reduer is the context info from the shop (cartContext)
    useEffect(() => {
        const qty = cart.cartItems.reduce((total, item) => {
            return total + item.count;
        }, 0);
        setTotalQty(qty);
        const price = cart.cartItems.reduce((total, item) => {
            return total + item.count * item.crystal.price;
        }, 0);
        setTotalPrice(price);
    }, [cart]);

    return (
        <>
            {checkout ? (
                <OrderConfirmation />
            ) : (
                <section className="cart">
                    <div className="copy">
                        <h1>Cart</h1>
                        {cart.cartItems.length === 0 ? (
                            <>
                                <h3>You have an empty cart</h3>
                                <Link to="/shop">
                                    <button className="primary">Shop Crystals</button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <h3>Order Summary</h3>
                                {cart.cartItems.map((item) => (
                                    <CartItem crystal={item.crystal} qty={item.count} />
                                ))}
                                <div className="cart-total">
                                    <div className="cart-item-details">
                                        <div className="cart-total-title">
                                            <h4>
                                                {cart.cartItems.length} Crystal{' '}
                                                {cart.cartItems.length === 1 ? 'Type' : 'Types'}
                                            </h4>
                                            <h4 className="total-pcs">
                                                {totalQty} {totalQty === 1 ? 'pc' : 'pcs'}
                                            </h4>
                                        </div>
                                    </div>
                                    <h4 className="total-price">$ {totalPrice}</h4>
                                </div>
                                <div className="total-buttons">
                                    <Link to="/shop">
                                        <button className="secondary">Shop more</button>
                                    </Link>
                                    <button onClick={handleCheckout} className="primary">
                                        Checkout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            )}
        </>
    );
}

export default Cart;
