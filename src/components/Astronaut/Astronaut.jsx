import React, { useState, useEffect } from 'react';
import './Astronaut.scss';
import AstroImg from '../../assets/Images/SpaceAvatar.png';

function Astronaut(props, planet) {
    const [isJumping, setIsJumping] = useState(false);
    //state here keeps track of wether the astronaut is jumping or not 

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
    //this use effect listens for a keydown press of space bar in order to make the astronaut jump and passes the planet.gravity
    //which will inherently change the jump height of the avatar depedning on the gravity data that is passed. If no planet gravity
    //is passed we used the const earthGravity as a default  


    const baseJumpHeightOrVelocity = 100; // Adjust this value to set the base jump height or velocity
    const earthGravity = 9.81;
    const gravity = props.planet?.gravity || earthGravity;
    const jumpHeightOrVelocity =
        baseJumpHeightOrVelocity * (earthGravity / gravity);

    const baseTransitionDuration = 0.5; // Adjust this value to set the base transition duration (in seconds)
    const transitionDuration = baseTransitionDuration * (earthGravity / gravity);


    //this function sets the isjumping to true which then triggers the inline CSS below in order to transition and
    //animate the astronaut upwards depending on the passed through gravity. After the jump animation is complete
    //is jumping gets set to false which returns the image to the default position

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