import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Crystal from '../shared/Crystal';
import { randomNumber, randomBetween } from '../helpers/CommonFunctions';
import crystalData from '../../data/CrystalsData';

function About() {
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
                <h1>About</h1>
                <p>
                    We offer a unique selection of futhark crystals, handpicked and ethically
                    sourced from the most dangerous and mythical locations in the Norse realms. Our
                    passion for Norse mythology and ancient lore inspired us to create this online
                    store, where we share our love for these mystical gemstones with the world.
                </p>
                <p>
                    Each crystal has a story to tell, and we take pride in our ability to provide
                    our customers with not only the highest quality crystals but also with their
                    rich history and mythology. We believe that these crystals have the power to
                    enhance one's energy and bring balance and harmony to the mind, body, and
                    spirit.
                </p>
                <p>
                    Our team consists of experienced crystal collectors and enthusiasts who have
                    dedicated their lives to the study and appreciation of these rare gems. We
                    strive to provide our customers with the best possible service, and we take
                    great care to ensure that each crystal is carefully selected and handled with
                    the utmost respect.
                </p>
                <div className="buttons">
                    <Link to="/shop">
                        <button className="primary">Shop Now</button>
                    </Link>
                    <Link to="/contact">
                        <button className="secondary">Reach us</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default About;
