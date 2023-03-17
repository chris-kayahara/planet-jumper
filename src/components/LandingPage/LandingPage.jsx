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
                        <div class="word-bubble">
                            <p className='word-bubble-text'>Click a Planet to Learn About it!!</p>
                        </div>
                    </div>
                </div>
                <Astronaut planet={planet} />

            </header>
        </>
    );
}

export default LandingPage;