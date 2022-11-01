import './Location.scss';
import { isMobile } from 'react-device-detect';
import restaurantWithFish from '../imgs/restaurantWithFish.jpg';
import RestaurantName from '../RestaurantName/RestaunrantName';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import { useState, useEffect } from "react";
import SectionMenu from '../Home/Sections/SectionMenu';
import SectionKindsOfMeal from '../Home/Sections/SectionKindsOfMeal';
import SushiXeng_Hero from '../imgs/mealsLieferando/quality=90-max_weight=9500/SushiXeng_Hero_4x3.jpg';

import Gallery from '../Gallery/Gallery';

export default function Location1() {

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
                <img src={restaurantWithFish} className="bgImg headerLocation1" alt="restaurantWithFish" />

                <div className='title'>
                    <RestaurantName />
                    <div className='locationName'>
                        <h3>LOCATION 1 <br /> in MAXVORSTADT</h3>
                        <h4>Augustenstraße 52 80333 München</h4>
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

                <img src={SushiXeng_Hero} className='bgImg' alt="SushiXeng_Hero" />

                <SectionKindsOfMeal />

                <Gallery />

            </div>
        </div>
    )
}