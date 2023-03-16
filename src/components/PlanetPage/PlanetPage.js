import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Astronaut from '../Astronaut/Astronaut'

import Preloader from '../Preloader/Preloader'

import './PlanetPage.scss'

const API_URL = "https://api.le-systeme-solaire.net/rest.php/bodies?data=%5C&filter%5B%5D=englishName%2Ceq%2C";
const API_QUERY_END = "&filter%5B%5D=";

export default function PlanetPage() {
    let { planet } = useParams();

    let [currentPlanet, setCurrentPlanet] = useState(null);

    // Fetch planet details to display
    useEffect(() => {
        if (!planet) {
            return;
        }
        axios
            .get(API_URL + planet + API_QUERY_END)
            .then((response) => {
                setCurrentPlanet(response.data.bodies[0]);
            })
            .catch((error) => console.log(error));
    }, [planet]);

    // Show preloader when no video is downloaded yet
    if (!currentPlanet) {
        return <Preloader />;
    }

    return (
        <div className="planet__container">
            <div className="planet-page">
                <h2 className="planet-page__title">{currentPlanet.englishName}</h2>
                <div className="planet-page__data-container">
                    <div className="planet-page__data-row">
                        <p className="planet-page__data-heading">Number of moons:</p>
                        <p className="planet-page__data">
                            {currentPlanet.moons === null ? 0 : currentPlanet.moons.length}
                        </p>
                    </div>
                    <div className="planet-page__data-row">
                        <p className="planet-page__data-heading">Distance from Sun:</p>
                        <p className="planet-page__data">
                            {currentPlanet.semimajorAxis.toLocaleString()} km
                        </p>
                    </div>
                    <div className="planet-page__data-row">
                        <p className="planet-page__data-heading">Mass:</p>
                        <p className="planet-page__data">
                            {currentPlanet.mass.massValue} x 10
                            <sup className="planet-page__data-super-script">
                                {currentPlanet.mass.massExponent}
                            </sup>{" "}
                            kg
                        </p>
                    </div>
                    <div className="planet-page__data-row">
                        <p className="planet-page__data-heading">Volume:</p>
                        <p className="planet-page__data">
                            {currentPlanet.vol.volValue} x 10
                            <sup className="planet-page__data-super-script">
                                {currentPlanet.vol.volExponent}
                            </sup>
                        </p>
                    </div>
                    <div className="planet-page__data-row">
                        <p className="planet-page__data-heading">Gravity:</p>
                        <p className="planet-page__data">
                            {currentPlanet.gravity} m/s
                            <sup className="planet-page__data-super-script">2</sup>
                        </p>
                    </div>
                    <div className="planet-page__data-row">
                        <p className="planet-page__data-heading">Escape Velocity</p>
                        <p className="planet-page__data">
                            {currentPlanet.escape.toLocaleString()} m/s
                        </p>
                    </div>
                </div>
            </div>
            <Astronaut planet={currentPlanet} />
        </div>
    );
}