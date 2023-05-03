import React from 'react';
import { Link } from 'react-router-dom';

function OrderConfirmation() {
    const handleClick = () => {
        // TODO function to empty cart here
        console.log('empty cart');
    };
    return (
        <div className="confirmation">
            <div className="copy">
                <h1>Thank you!</h1>
                <h3>Your order has been confirmed</h3>
                <h4>
                    The mighty winds of Valkyries will carry your package swiftly and safely to your
                    doorstep, as the fearless warriors of Odin guard it along the way. Let the
                    blessings of the gods be with you as you receive your prized possession and may
                    it bring you the power and wisdom of the ancient Futhark runes.
                </h4>
                <p>
                    Thank you for your recent purchase from Odin Crystal Shop. We appreciate your
                    business and hope that your experience with us was nothing short of exceptional.
                    Your order has been confirmed and is now being processed. We will send you a
                    notification once your order has shipped. Thank you once again for choosing Odin
                    Crystal Shop. We hope to serve you again in the future.
                </p>
                <div className="buttons">
                    <Link to="/shop">
                        <button onClick={handleClick} className="primary">
                            Shop More
                        </button>
                    </Link>
                    <Link to="/">
                        <button className="secondary">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OrderConfirmation;
