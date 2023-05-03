import React from 'react';
import Crystal from './Crystal';

function CartItem({ crystal, qty }) {
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
                        <button className="minus-item-button" />
                        <h4 className="item-pcs">
                            {qty} {qty === 1 ? 'pc' : 'pcs'}
                        </h4>
                        <button className="add-item-button" />
                    </div>
                </div>
            </div>
            <h4 className="item-price">$ {qty * crystal.price}</h4>
            <button className="remove-item-button" />
        </div>
    );
}

export default CartItem;
