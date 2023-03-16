import './LandingPage.scss'
import HeaderImage from '../../assets/Images/Header.png'
import HamburgerNav from '../HamburgerDropDown/Hamburger';
import Astronaut from '../Astronaut/Astronaut';

function LandingPage() {

    const planet = {
        name: 'Mars',
        gravity: 3.8, // Mars gravity in m/s²
    };

    return (
        <>
            <header>
                <div className='header'>
                    {/* <h1 className='header__text'>PLANET JUMPER</h1> */}
                    <img src={HeaderImage} className="header__text" alt="Header" />
                    <div>
                        <HamburgerNav />
                    </div>
                </div>
                <Astronaut planet={planet} />

            </header>
        </>
    );
}

export default LandingPage;