import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Preloader from '../Preloader/Preloader'

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
    const moons = currentPlanet.moons.length;
    const distanceFromSun = currentPlanet.semimajorAxis;
    const massValue = currentPlanet.mass.massValue;
    const massExp = currentPlanet.mass.massExponent;
    const volValue = currentPlanet.vol.volValue;
    const volExp = currentPlanet.vol.volExponent;
    const gravity = currentPlanet.gravity;
    const escapeVel = currentPlanet.escape;

    return (
        <div>
            <h2>{name}</h2>
            <div>
                <p>Number of moons:</p>
                <p>{moons}</p>
            </div>
            <div>
                <p>Distance from Sun:</p>
                <p>{distanceFromSun}</p>
            </div>
            <div>
                <p>Mass:</p>
                <p>{massValue} x 10<span>{massExp}</span></p>
            </div>
            <div>
                <p>Volume:</p>
                <p>{volValue} x 10<span>{volExp}</span></p>
            </div>
            <div>
                <p>Gravity:</p>
                <p>{gravity}</p>
            </div>
            <div>
                <p>Escape Velocity</p>
                <p>{escapeVel}</p>
            </div>
        </div>
    )
}