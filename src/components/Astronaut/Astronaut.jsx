import React, { useState, useEffect } from 'react';
import './Astronaut.scss';
import AstroImg from '../../assets/Images/SpaceAvatar.png';

function Astronaut(props, planet) {
    const [isJumping, setIsJumping] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.code === "Space") {
                jumpAvatar();
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    const baseJumpHeightOrVelocity = 100; // Adjust this value to set the base jump height or velocity
    const earthGravity = 9.81;
    const gravity = props.planet?.gravity || earthGravity;
    const jumpHeightOrVelocity =
        baseJumpHeightOrVelocity * (earthGravity / gravity);

    const baseTransitionDuration = 0.5; // Adjust this value to set the base transition duration (in seconds)
    const transitionDuration = baseTransitionDuration * (earthGravity / gravity);

    const jumpAvatar = () => {
        if (!isJumping) {
            setIsJumping(true);
            setTimeout(() => {
                setIsJumping(false);
            }, transitionDuration * 1000); // Convert to milliseconds
        }
    };

    return (
        <>
            <div className="avatar__container">
                <img
                    className="avatar"
                    src={AstroImg}
                    alt="Avatar"
                    style={{
                        transform: isJumping ? `translateY(-${jumpHeightOrVelocity}px)` : "",
                        transition: `transform ${transitionDuration}s ease`,
                    }}
                />
            </div>
        </>
    );
}

export default Astronaut;