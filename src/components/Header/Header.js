import { NavLink } from "react-router-dom";
import { useState } from "react";

import './Header.scss'

export default function Header() {
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    return (
        <header className="header">
            <h1 className="header__title"><NavLink to="/">PLANET JUMPER</NavLink></h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li >
                        <NavLink activeClassName="header__nav-item--selected" className="header__nav-item" to={`/mercury`} onClick={() => setSelectedPlanet('mercury')}>MERCURY</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink activeClassName="header__nav-item--selected" to={`/venus`} onClick={() => setSelectedPlanet('venus')}>VENUS</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink activeClassName="header__nav-item--selected" to={`/earth`} onClick={() => setSelectedPlanet('earth')}>EARTH</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink activeClassName="header__nav-item--selected" to={`/mars`} onClick={() => setSelectedPlanet('mars')}>MARS</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink activeClassName="header__nav-item--selected" to={`/jupiter`} onClick={() => setSelectedPlanet('jupiter')}>JUPITER</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink activeClassName="header__nav-item--selected" to={`/saturn`} onClick={() => setSelectedPlanet('saturn')}>SATURN</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink activeClassName="header__nav-item--selected" to={`/uranus`} onClick={() => setSelectedPlanet('uranus')}>URANUS</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink activeClassName="header__nav-item--selected" to={`/neptune`} onClick={() => setSelectedPlanet('neptune')}>NEPTUNE</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink activeClassName="header__nav-item--selected" to={`/pluto`} onClick={() => setSelectedPlanet('pluto')}>PLUTO</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}