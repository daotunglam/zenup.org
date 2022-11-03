import './location.scss';
import { isMobile } from 'react-device-detect';
import restaurant from '../imgs/restaurant.jfif';
import RestaurantName from '../RestaurantName/RestaunrantName';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import { useState, useEffect } from "react";
import SectionMenu from '../Home/Sections/SectionMenu';
import SectionKindsOfMeal from '../Home/Sections/SectionKindsOfMeal';
import restaurantWall from '../imgs/restaurantWall.jfif';
import Gallery from '../Gallery/Gallery';

export default function Location2() {

    const [onSite, setOnSite] = useState(false);
    const [showed, setShowed] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => setOnSite(window.scrollY > 800))

        return () => {
            window.removeEventListener('scroll', () => setOnSite(window.scrollY > 800))
        }
    }, [])

    return (
        <div className='location'>
            <div className={isMobile ? 'mobile' : 'desktop'}>
                <img src={restaurant} className="bgImg headerLocation2" alt="restaurant" />

                <div className='title'>
                    <RestaurantName />
                    <div className='locationName'>
                        <h3>LOCATION 2 <br /> in ANGER BLOCK INNENHOF</h3>
                        <h4>Sendlinger Straße 7 80331 München</h4>
                    </div>
                </div>

                <div
                    className={clsx(
                        'BtnOrderOrReservation',
                        onSite && 'onSite',
                        showed && 'showed'
                    )}
                >
                    <Button >
                        BESTELLUNG
                    </Button>

                    <Button >
                        TISCH RESERVIERUNG
                    </Button>

                    <span className="toggler" onClick={() => setShowed(!showed)} >||</span>
                </div>

                <SectionMenu />

                <img src={restaurantWall} className='bgImg' alt="restaurant" />

                <SectionKindsOfMeal />

                
                <Gallery />

            </div>
        </div>
    )
}