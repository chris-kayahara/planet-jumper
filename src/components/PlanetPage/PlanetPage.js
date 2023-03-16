import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
        axios.get(API_URL + planet + API_QUERY_END)
            .then(response => {
                setCurrentPlanet(response.data.bodies[0]);
            })
            .catch(error => 
                console.log(error))
        }, [planet])

    // Show preloader when no video is downloaded yet
    if (!currentPlanet) {
        return (
            <Preloader />
        )
    }

    const name = currentPlanet.englishName;
    let moons = 0;
    if (currentPlanet.moons === null) {
        moons = 0;
    } else {
        moons = currentPlanet.moons.length;
    }
    const distanceFromSun = currentPlanet.semimajorAxis.toLocaleString();
    const massValue = currentPlanet.mass.massValue;
    const massExp = currentPlanet.mass.massExponent;
    const volValue = currentPlanet.vol.volValue;
    const volExp = currentPlanet.vol.volExponent;
    const gravity = currentPlanet.gravity;
    const escapeVel = currentPlanet.escape.toLocaleString();

    return (
        <div className="planet-page">
            <h2 className="planet-page__title">{name}</h2>
            <div className="planet-page__data-container">
                <div className="planet-page__data-row">
                    <p className="planet-page__data-heading">Number of moons:</p>
                    <p className="planet-page__data">{moons}</p>
                </div>
                <div className="planet-page__data-row">
                    <p className="planet-page__data-heading">Distance from Sun:</p>
                    <p className="planet-page__data">{distanceFromSun} km</p>
                </div>
                <div className="planet-page__data-row">
                    <p className="planet-page__data-heading">Mass:</p>
                    <p className="planet-page__data">{massValue} x 10<sup className="planet-page__data-super-script">{massExp}</sup> kg</p>
                </div>
                <div className="planet-page__data-row">
                    <p className="planet-page__data-heading">Volume:</p>
                    <p className="planet-page__data">{volValue} x 10<sup className="planet-page__data-super-script">{volExp}</sup></p>
                </div>
                <div className="planet-page__data-row">
                    <p className="planet-page__data-heading">Gravity:</p>
                    <p className="planet-page__data">{gravity} m/s<sup className="planet-page__data-super-script">2</sup></p>
                </div>
                <div className="planet-page__data-row">
                    <p className="planet-page__data-heading">Escape Velocity</p>
                    <p className="planet-page__data">{escapeVel} m/s</p>
                </div>
            </div>
        </div>
    )
}