import './LandingPage.scss'
import Astronaut from '../Astronaut/Astronaut';

function LandingPage() {

    const planet = {
        name: 'Mars',
        gravity: 0.8, // Mars gravity in m/s²
    };

    return (
        <>
            <header>
                <div className='header'>
                    <div>
                    </div>
                </div>
                <Astronaut planet={planet} />

            </header>
        </>
    );
}

export default LandingPage;