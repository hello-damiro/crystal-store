import React from 'react';
import PropTypes from 'prop-types';
import Crystal from './Crystal';
import { useCart } from '../hooks/CartContext';
import { formatCurrency } from '../helpers/CommonFunctions';

function CartItem({ crystal, qty }) {
    const cart = useCart();
    return (
        <div className="cart-item">
            <div className="cart-item-details">
                <div className="cart-crystal">
                    <Crystal
                        meaning={crystal.meaning.toLowerCase()}
                        color={crystal.color}
                        width={50}
                    />
                </div>
                <div className="cart-item-title">
                    <h4>
                        {crystal.futhark} {crystal.crystal}
                    </h4>
                    <div className="cart-item-pcs">
                        <button
                            onClick={(id) => cart.minusFromCart(crystal.id)}
                            className="minus-item-button"
                        />
                        <h4 className="item-pcs">
                            {qty} {qty === 1 ? 'pc' : 'pcs'}
                        </h4>
                        <button
                            onClick={(id) => cart.addToCart(crystal.id)}
                            className="add-item-button"
                        />
                    </div>
                </div>
            </div>
            <h4 className="item-price">{formatCurrency('$ ', ',', qty * crystal.price)}</h4>
            <button
                onClick={(id) => cart.removeToCart(crystal.id)}
                className="remove-item-button"
            />
        </div>
    );
}

CartItem.propTypes = {
    crystal: PropTypes.object.isRequired,
    qty: PropTypes.number.isRequired,
};

export default CartItem;
