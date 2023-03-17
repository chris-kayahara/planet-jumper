import './Gallery.scss'
import MercuryImg1 from '../../assets/Images/Mercury1.jpg'
import MercuryImg2 from '../../assets/Images/Mercury2.jpg'
import MercuryImg3 from '../../assets/Images/Mercury3.jpg'
import VenusImg1 from '../../assets/Images/Venus1.jpg'
import VenusImg2 from '../../assets/Images/Venus2.jpg'
import VenusImg3 from '../../assets/Images/Venus3.jpg'
import EarthImg1 from '../../assets/Images/Earth1.jpg'
import EarthImg2 from '../../assets/Images/Earth2.jpg'
import EarthImg3 from '../../assets/Images/Earth3.jpg'
import MarsImg1 from '../../assets/Images/Mars1.jpg'
import MarsImg2 from '../../assets/Images/Mars2.jpg'
import MarsImg3 from '../../assets/Images/Mars3.jpg'
import JupiterImg1 from '../../assets/Images/Jupiter1.jpg'
import JupiterImg2 from '../../assets/Images/Jupiter2.jpg'
import JupiterImg3 from '../../assets/Images/Jupiter3.png'
import SaturnImg1 from '../../assets/Images/Saturn1.jpg'
import SaturnImg2 from '../../assets/Images/Saturn2.jpg'
import SaturnImg3 from '../../assets/Images/Saturn3.jpg'
import UranusImg1 from '../../assets/Images/Uranus1.jpg'
import UranusImg2 from '../../assets/Images/Uranus2.png'
import UranusImg3 from '../../assets/Images/Uranus3.jpg'
import NeptuneImg1 from '../../assets/Images/Neptune1.jpg'
import NeptuneImg2 from '../../assets/Images/Neptune2.jpg'
import NeptuneImg3 from '../../assets/Images/Neptune3.jpg'
import PlutoImg1 from '../../assets/Images/Pluto1.jpg'
import PlutoImg2 from '../../assets/Images/Pluto2.jpg'
import PlutoImg3 from '../../assets/Images/Pluto3.png'

function Gallery({ planet }) {

    const planetImages = {
        mercury: [MercuryImg1, MercuryImg2, MercuryImg3],
        venus: [VenusImg1, VenusImg2, VenusImg3],
        earth: [EarthImg1, EarthImg2, EarthImg3],
        mars: [MarsImg1, MarsImg2, MarsImg3],
        jupiter: [JupiterImg1, JupiterImg2, JupiterImg3],
        saturn: [SaturnImg1, SaturnImg2, SaturnImg3],
        uranus: [UranusImg1, UranusImg2, UranusImg3],
        neptune: [NeptuneImg1, NeptuneImg2, NeptuneImg3],
        pluto: [PlutoImg1, PlutoImg2, PlutoImg3],
    };

    const images = planetImages[planet.toLowerCase()];

    return (
        <div className='gallery'>
            <h1 className='gallery__heading'>{planet.toUpperCase()} GALLERY</h1>
            <div className='gallery__images'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="planet picture"
                        className='gallery__image'
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;