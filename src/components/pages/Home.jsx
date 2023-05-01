import React from 'react';
import Crystal from '../shared/Crystal';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="home">
            <div className="copy">
                <h3>Unleash your inner power with </h3>
                <h1>Odin's Futhark Crystals</h1>
                <div className="writeup">
                    <p>
                        Our store offers powerful Futhark crystals imbued with the essence of Odin,
                        the Norse god of wisdom and magic. These crystals hold deep spiritual
                        significance and offer benefits such as abundance, protection,
                        communication, and inner strength.
                    </p>
                    <p>
                        Connect with the power of Odin and elevate your life with our collection of
                        Futhark crystals.
                    </p>
                </div>
                <div className="buttons">
                    <Link to="/shop">
                        <button className="primary">Shop Now</button>
                    </Link>
                    <Link to="/about">
                        <button className="secondary">Know more</button>
                    </Link>
                </div>
            </div>
            <div className="illustration">
                <Crystal color={'red'} width={130} shadowed={true} shadowGap={32} />
                <Crystal color={'pink'} width={150} shadowed={true} shadowGap={32} />
                <Crystal color={'salmon'} width={110} shadowed={true} shadowGap={32} />
            </div>
        </section>
    );
}

export default Home;
