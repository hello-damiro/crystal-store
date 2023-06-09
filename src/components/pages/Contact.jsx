import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Crystal from '../shared/Crystal';
import { randomNumber } from '../helpers/CommonFunctions';
import { useCart } from '../hooks/CartContext';

function Contact() {
    const shop = useCart();
    const [crystal, setCrystal] = useState([]);

    useEffect(() => {
        const getRandomCrystal = () => {
            const randomIndex = randomNumber(shop.collection.length);
            return shop.collection[randomIndex];
        };
        setCrystal(getRandomCrystal());
    }, [shop]);

    return (
        <section className="contact">
            <div className="copy">
                <h1>Reach Us!</h1>
                <h3>
                    We love to hear from our customers. If you have any questions, comments, or
                    concerns, please do not hesitate to contact us.
                </h3>
                <p>
                    Our address is Valhalla, a mythical city in Norse mythology. You can send us a
                    message via the raven, the traditional messenger bird of Odin. Just whisper your
                    message to the raven and it will deliver it to us directly.
                </p>
                <p>
                    Alternatively, you can also send us an email at{' '}
                    <a href="mailto:hello-damiro@gmail.com">hello-damiro@gmail.com</a>. We will get
                    back to you as soon as possible.
                </p>
                <div className="buttons">
                    <Link to="/about">
                        <button className="primary">About Us</button>
                    </Link>
                    <Link to="/shop">
                        <button className="secondary">Shop more</button>
                    </Link>
                </div>
            </div>
            <div className="illustration">
                {crystal.meaning && (
                    <Crystal
                        key={crystal.id}
                        color={crystal.color}
                        meaning={crystal.meaning.toLowerCase()}
                        width={150}
                        shadowed={true}
                        shadowGap={32}
                    />
                )}
            </div>
        </section>
    );
}

export default Contact;
