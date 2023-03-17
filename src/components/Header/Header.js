import { Link } from "react-router-dom";

import './Header.scss'

export default function Header() {
    return (
        <header className="header">
            <h1 className="header__title"><Link to="/">PLANET JUMPER</Link></h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><Link to={`/mercury`}>MERCURY</Link></li>
                    <li className="header__nav-item"><Link to={`/venus`}>VENUS</Link></li>
                    <li className="header__nav-item"><Link to={`/earth`}>EARTH</Link></li>
                    <li className="header__nav-item"><Link to={`/mars`}>MARS</Link></li>
                    <li className="header__nav-item"><Link to={`/jupiter`}>JUPITER</Link></li>
                    <li className="header__nav-item"><Link to={`/saturn`}>SATURN</Link></li>
                    <li className="header__nav-item"><Link to={`/uranus`}>URANUS</Link></li>
                    <li className="header__nav-item"><Link to={`/neptune`}>NEPTUNE</Link></li>
                    <li className="header__nav-item"><Link to={`/pluto`}>PLUTO</Link></li>
                </ul>
            </nav>
        </header>
    )
}