import React from 'react';
import Crystal from '../shared/Crystal';

function About() {
    return (
        <div>
            <h1>About</h1>
            <Crystal color="#C42D2D" width="120" meaning="fertility" />
            <Crystal color="#EEC900" width="150" meaning="breakthrough" />
            <Crystal color="#6A0DAD" meaning="flow" shadowed="true" shadowGap="32" />
        </div>
    );
}

export default About;
