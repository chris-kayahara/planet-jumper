import './LandingPage.scss'
import Astronaut from '../Astronaut/Astronaut';

function LandingPage() {

    const planet = {

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