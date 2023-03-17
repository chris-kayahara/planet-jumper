import React from 'react';
import mercury from '../../assets/Images/mercury.svg'
import venus from '../../assets/Images/venus.svg'
import earth from '../../assets/Images/earth.svg'
import mars from '../../assets/Images/mars.svg'
import jupiter from '../../assets/Images/jupiter.svg'
import saturn from '../../assets/Images/saturn.svg'
import uranus from '../../assets/Images/uranus.svg'
import neptune from '../../assets/Images/neptune.svg'
import pluto from '../../assets/Images/pluto.svg'

import './Planet.scss'

function Planet(props) {

    let planetImageSrc = "";

    const planetImageSrcList = [
        mercury,
        venus,
        earth,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
        pluto
    ]

    console.log(planetImageSrcList)
    planetImageSrcList.map(planet => {
        if (planet.includes(props.planet)) {
            planetImageSrc = planet;
        }
    })

    return (
        <img className="planet" src={planetImageSrc} alt="planet"/>
    );
}

export default Planet;