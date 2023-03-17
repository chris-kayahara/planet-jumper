import './LandingPage.scss'
import Astronaut from '../Astronaut/Astronaut';
import mercury from '../../assets/Images/mercury.svg'
import venus from '../../assets/Images/venus.svg'
import earth from '../../assets/Images/earth.svg'
import mars from '../../assets/Images/mars.svg'
import jupiter from '../../assets/Images/jupiter.svg'
import saturn from '../../assets/Images/saturn.svg'
import uranus from '../../assets/Images/uranus.svg'
import neptune from '../../assets/Images/neptune.svg'
import pluto from '../../assets/Images/pluto.svg'




function LandingPage() {

    const planet = {

    };

    return (
        <>
            <header className='container'>
                <div className='header'>
                    <div>
                        <div class="word-bubble">
                            <p className='word-bubble-text'>Click a Planet Above to Learn About it!!</p>

                        </div>

                    </div>
                </div>
                <Astronaut planet={planet} jumpOnMount={true} />

            </header>
            <div className='planet__images'>
                <img className='planet__images--individual' src={mercury} alt="" />
                <img className='planet__images--individual' src={venus} alt="" />
                <img className='planet__images--individual' src={earth} alt="" />
                <img className='planet__images--individual' src={mars} alt="" />
                <img className='planet__images--individual' src={jupiter} alt="" />
                <img className='planet__images--individual' src={saturn} alt="" />
                <img className='planet__images--individual' src={uranus} alt="" />
                <img className='planet__images--individual' src={neptune} alt="" />
                <img className='planet__images--individual' src={pluto} alt="" />
            </div>
        </>
    );
}

export default LandingPage;