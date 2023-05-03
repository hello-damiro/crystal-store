import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Crystal from '../shared/Crystal';
import { randomNumber } from '../helpers/CommonFunctions';
import crystalData from '../../data/CrystalsData';

function NotFound() {
    const [crystals, setCrystals] = useState([]);

    useEffect(() => {
        const getRandomCrystal = () => {
            const randomIndex = randomNumber(crystalData.length);
            return crystalData[randomIndex];
        };
        const randomCrystals = [getRandomCrystal()];
        setCrystals(randomCrystals);
    }, []);

    return (
        <section className="about">
            <div className="illustration">
                {crystals.map((crystal) => (
                    <Crystal
                        key={crystal.id}
                        color={crystal.color}
                        meaning={crystal.meaning.toLowerCase()}
                        width={150}
                        shadowed={true}
                        shadowGap={32}
                    />
                ))}
            </div>
            <div className="copy">
                <h1>Not Found</h1>
                <p>
                    404 Reached. Valhalla's warriors searched high and low but could not find the
                    page you're looking for. Please try again or contact us for assistance.
                </p>
                <p>
                    The Norns have woven a strange fate for this page and it has disappeared. Please
                    return to the home page and try again.
                </p>
                <div className="buttons">
                    <Link to="/shop">
                        <button className="primary">Shop Now</button>
                    </Link>
                    <Link to="/">
                        <button className="secondary">Back to Home</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
