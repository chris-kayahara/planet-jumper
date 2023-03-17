import './MercuryPage.scss'
import MercuryImg1 from '../../assets/Images/Mercury1.jpg'
import MercuryImg2 from '../../assets/Images/Mercury2.jpg'
import MercuryImg3 from '../../assets/Images/Mercury3.jpg'


function MercuryPage() {


    return (
        <>
            <div>
                <img className='mercury__images' src={MercuryImg1} alt="Mercury1" />
                <img className='mercury__images' src={MercuryImg2} alt="Mercury2" />
                <img className='mercury__images' src={MercuryImg3} alt="Mercury3" />
            </div>
        </>
    );
}

export default MercuryPage;