import React from "react";
import { useState, useEffect } from "react";
import { BrowserView, MobileView } from 'react-device-detect';
import clsx from 'clsx';

import D from './Header.desktop.module.scss';
import M from './Header.mobile.module.scss';

import bough from '../../imgs/bough3.svg';
// import cloud11 from '../../imgs/cloud11.svg';
import cloud12 from '../../imgs/cloud12.svg';
import lantern from '../../imgs/lantern.svg';
import sakura1 from '../../imgs/sakura1.svg';
import RestaurantName from "../../RestaurantName/RestaunrantName";

import { ButtonGroup, Divider } from "@mui/material";
import Button from '@mui/material/Button';
import BtnOrderOrReservation from "../../BtnOrderAndReservation/BtnOrderOrReservation";

export default function Header() {
    // const [btnGroupOnSite, setBtnGroupOnSite] = useState(false);
    // const [btnGroupOnSiteShowed, setBtnGroupOnSiteShowed] = useState(false);

    // useEffect(() => {
    //     window.addEventListener('scroll', () => setBtnGroupOnSite(window.scrollY > 800))

    //     return () => {
    //         window.removeEventListener('scroll', () => setBtnGroupOnSite(window.scrollY > 800))
    //     }
    // }, [])

    const getRandom = max => Math.floor(Math.random() * max);

    const renderFlowers = () => {
        return [...Array(50)].map((e, i) => (
            <div key={i}>
                <div className={M.flower} style={{ left: getRandom(320), top: getRandom(200) }}>
                    <img src={sakura1} alt="flower" />
                </div>
            </div>
        ))
    }

    const [popUpReservationOpened, setPopUpReservationOpened] = useState(false);
    const [popUpOrderOpened, setPopUpOrderOpened] = useState(false);

    return <>
        <MobileView className={M.Header}>

            <div className={M.sun}></div>

            <div className={M.tree}>
                <div className={M.bough}>
                    <img src={bough} alt="tree" />
                </div>

                {renderFlowers()}

                <div className={M.lantern} style={{ left: 50, top: 100 }}>
                    <img src={lantern} alt="lantern" />
                </div>
                <div className={M.lantern} style={{ left: 275, top: 200 }}>
                    <img src={lantern} alt="lantern" />
                </div>
            </div>

            <div className={M.cloud} style={{ right: 30, top: 320 }}>
                <img src={cloud12} alt="cloud" />
            </div>
            <div className={M.cloud} style={{ left: 0, top: 520 }}>
                <img src={cloud12} alt="cloud" />
            </div>
            <div className={M.title}>
                <RestaurantName />
            </div>

            <BtnOrderOrReservation
                setPopUpOrderOpened={()=>setPopUpOrderOpened(!popUpOrderOpened)}
                setPopUpReservationOpened={()=>setPopUpReservationOpened(!popUpReservationOpened)}
            />

            {/* <ButtonGroup
                className={clsx(M.btnGroup, btnGroupOnSite && M.onSite)}
                variant="text"
                aria-label="text button group"
            >
                <Button onClick={() => setPopUpOrderOpened(!popUpOrderOpened)}>
                    BESTELLUNG
                </Button>

                <Button onClick={() => setPopUpReservationOpened(!popUpReservationOpened)}>
                    TISCH RESERVIERUNG
                </Button>
            </ButtonGroup> */}

            {popUpReservationOpened &&
                <div className={M.popUp}>
                    <div className={M.overlay} onClick={() => setPopUpReservationOpened(false)} />
                    <div className={M.content}>
                        <a>
                            <h3>TISCH RESERVIERUNG</h3>
                            <h4>IN MAXVORSTADT</h4>
                            <h4>Augustenstraße 52 80333 München</h4>
                        </a>
                        <Divider />
                        <a>
                            <h3>TISCH RESERVIERUNG</h3>
                            <h4>IN ANGER BLOCK INNENHOF</h4>
                            <h4>Sendlinger Straße 7 80331 München</h4>
                        </a>
                    </div>
                </div>
            }

            {popUpOrderOpened &&
                <div className={M.popUp}>
                    <div className={M.overlay} onClick={() => setPopUpOrderOpened(false)} />
                    <div className={M.content}>
                        <a>
                            <h3>BESTELLUNG</h3>
                            <h4>IN MAXVORSTADT</h4>
                            <h4>Augustenstraße 52 80333 München</h4>
                        </a>
                        <Divider />
                        <a>
                            <h3>BESTELLUNG</h3>
                            <h4>IN ANGER BLOCK INNENHOF</h4>
                            <h4>Sendlinger Straße 7 80331 München</h4>
                        </a>
                    </div>
                </div>
            }
        </MobileView>

        <BrowserView>
            <div className={D.Header}>HEADER</div>
        </BrowserView>
    </>
}