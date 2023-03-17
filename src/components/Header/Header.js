import { Link } from "react-router-dom";
import { useState } from "react";

import './Header.scss'

export default function Header() {
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    return (
        <header className="header">
            <h1 className="header__title"><Link to="/">PLANET JUMPER</Link></h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link to={`/mercury`} onClick={() => setSelectedPlanet('mercury')}>MERCURY</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to={`/venus`} onClick={() => setSelectedPlanet('venus')}>VENUS</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to={`/earth`} onClick={() => setSelectedPlanet('earth')}>EARTH</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to={`/mars`} onClick={() => setSelectedPlanet('mars')}>MARS</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to={`/jupiter`} onClick={() => setSelectedPlanet('jupiter')}>JUPITER</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to={`/saturn`} onClick={() => setSelectedPlanet('saturn')}>SATURN</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to={`/uranus`} onClick={() => setSelectedPlanet('uranus')}>URANUS</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to={`/neptune`} onClick={() => setSelectedPlanet('neptune')}>NEPTUNE</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to={`/pluto`} onClick={() => setSelectedPlanet('pluto')}>PLUTO</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}