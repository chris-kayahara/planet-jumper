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
import { Link } from 'react-router-dom';




function LandingPage() {

    const planet = {

    };

    return (
        <>
            <header className='container'>
                <div className='header'>
                    <div>
                        <div>
                            <h1 className='text'>Click a Planet Above or Below to Learn About it!!</h1>

                        </div>

                    </div>
                </div>
                <Astronaut planet={planet} jumpOnMount={true} />

            </header>
            <div className='planet__images'>
                <Link to="/mercury"><img className='planet__images--individual' src={mercury} alt="" /></Link>
                <Link to="/venus"><img className='planet__images--individual' src={venus} alt="" /></Link>
                <Link to="/earth"><img className='planet__images--individual' src={earth} alt="" /></Link>
                <Link to="/mars"><img className='planet__images--individual' src={mars} alt="" /></Link>
                <Link to="/jupiter"><img className='planet__images--individual' src={jupiter} alt="" /></Link>
                <Link to="/saturn"><img className='planet__images--individual' src={saturn} alt="" /></Link>
                <Link to="/uranus"><img className='planet__images--individual' src={uranus} alt="" /></Link>
                <Link to="/neptune"><img className='planet__images--individual' src={neptune} alt="" /></Link>
                <Link to="/pluto"><img className='planet__images--individual' src={pluto} alt="" /></Link>
            </div>
        </>
    );
}

export default LandingPage;