import './Location.scss';
import { isMobile } from 'react-device-detect';
import restaurant from '../imgs/restaurant.jfif';
import RestaurantName from '../RestaurantName/RestaunrantName';
import BtnOrderOrReservation from '../BtnOrderAndReservation/BtnOrderOrReservation';

export default function Location2() {
    return (
        <div className='location'>
            <div className={isMobile ? 'mobile' : 'desktop'}>
                <img src={restaurant} className="bgImg" alt="restaurant" />

                <div className='title'>
                    <RestaurantName />
                    <div className='locationName'>
                        <h3>LOCATION 2 <br /> in ANGER BLOCK INNENHOF</h3>
                        <h4>Sendlinger Straße 7 80331 München</h4>
                    </div>
                </div>



                <p className='description' >
                    Wir gehören zu der Systemgastronomie Geisha.
                    Unsere Sushi-Chefs sind Meister der Sushi Arrangierkunst.
                </p>
            </div>
        </div>
    )
}