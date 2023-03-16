import React, { useState } from 'react';
import './Hamburger.scss'

const HamburgerNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-nav">
            <button className='button' onClick={handleClick}>
                <div className={isOpen ? "line line-1" : "line"}></div>
                <div className={isOpen ? "line line-2" : "line"}></div>
                <div className={isOpen ? "line line-3" : "line"}></div>
            </button>
            {isOpen && (
                <ul className="nav-list">
                    <li>Sun</li>
                    <li>Mercury</li>
                    <li>Venus</li>
                    <li>Earth</li>
                    <li>Mars</li>
                    <li>Jupiter</li>
                    <li>Saturn</li>
                    <li>Uranus</li>
                    <li>Neptune</li>
                    <li>Pluto</li>
                </ul>
            )}
        </div>
    );
};

export default HamburgerNav;