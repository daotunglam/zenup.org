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
import CallRoundedIcon from '@mui/icons-material/CallRounded';

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
                        <h1>LOCATION 2</h1>
                        <h4>in ANGER BLOCK INNENHOF</h4>
                        <h4>Sendlinger Straße 7 80331 München</h4>
                        <h4>
                            <a href="tel:+498994005677">
                                <CallRoundedIcon /> 089 9400 5677
                            </a>
                        </h4>
                    </div>
                </div>
                {showed &&
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
                }
                <SectionMenu />

                <img src={restaurantWall} className='bgImg' alt="restaurant" />

                <SectionKindsOfMeal />


                <Gallery />

            </div>
        </div>
    )
}