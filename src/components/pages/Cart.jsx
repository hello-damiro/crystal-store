import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../shared/CartItem';
import OrderConfirmation from './OrderConfirmation';
import { useCart, useCartUpdate } from '../hooks/CartContext';

function Cart() {
    const [checkout, setCheckout] = useState(false);
    const handleCheckout = () => setCheckout((prevValue) => !prevValue);

    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const cartContext = useCart();
    // const cartUpdateContext = useCartUpdate();

    useEffect(() => {
        const qty = cartContext.reduce((total, item) => {
            return total + item.count;
        }, 0);
        setTotalQty(qty);
        const price = cartContext.reduce((total, item) => {
            return total + item.count * item.crystal.price;
        }, 0);
        setTotalPrice(price);
    }, [cartContext]);

    return (
        <>
            {checkout ? (
                <OrderConfirmation />
            ) : (
                <section className="cart">
                    <div className="copy">
                        <h1>Cart</h1>
                        {cartContext.length === 0 ? (
                            <>
                                <h3>You have an empty cart</h3>
                                <Link to="/shop">
                                    <button className="primary">Shop Crystals</button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <h3>Order Summary</h3>
                                {cartContext.map((item) => (
                                    <CartItem crystal={item.crystal} qty={item.count} />
                                ))}
                                <div className="cart-total">
                                    <div className="cart-item-details">
                                        <div className="cart-total-title">
                                            <h4>
                                                {cartContext.length} Crystal{' '}
                                                {cartContext.length === 1 ? 'Type' : 'Types'}
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