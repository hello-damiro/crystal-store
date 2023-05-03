import React from 'react';
import Crystal from './Crystal';

function CartItem() {
    return (
        <div className="cart-item">
            <div className="cart-item-details">
                <div className="cart-crystal">
                    <Crystal meaning={'breakthrough'} color={'salmon'} width={50} />
                </div>
                <div className="cart-item-title">
                    <h4>Fehu Red Crystal</h4>
                    <div className="cart-item-pcs">
                        <button className="minus-item-button" />
                        <h4 className="item-pcs">23 pc/s</h4>
                        <button className="add-item-button" />
                    </div>
                </div>
            </div>
            <h4 className="item-price">$ 400</h4>
            <button className="remove-item-button" />
        </div>
    );
}

export default CartItem;
