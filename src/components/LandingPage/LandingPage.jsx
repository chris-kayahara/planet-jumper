import './LandingPage.scss'
import HeaderImage from '../../assets/Images/Header.png'
import HamburgerNav from '../HamburgerDropDown/Hamburger';

function LandingPage() {
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

            </header>
        </>
    );
}

export default LandingPage;