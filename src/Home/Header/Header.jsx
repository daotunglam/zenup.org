import React from "react";
import { useState } from "react";
import { MobileView } from 'react-device-detect';
import M from './Header.mobile.module.scss';

import bough from '../../imgs/bough3.svg';
// import cloud11 from '../../imgs/cloud11.svg';
import cloud12 from '../../imgs/cloud12.svg';
import lantern from '../../imgs/lantern.svg';
import sakura1 from '../../imgs/sakura1.svg';
import RestaurantName from "../../RestaurantName/RestaunrantName";

import BtnOrderOrReservation from "../../BtnOrderAndReservation/BtnOrderOrReservation";
import Popup from "../../Popup/Popup";

export default function Header() {

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

    const [PopupReservation, setPopupReservation] = useState(false)
    const [PopupOrder, setPopupOrder] = useState(false)

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
                PopupOrder={() => setPopupOrder(!PopupOrder)}
                PopupReservation={() => setPopupReservation(!PopupReservation)}
            />

            <Popup
                PopupOrder={PopupOrder}
                closePopupOrder={() => setPopupOrder(false)}
                PopupReservation={PopupReservation}
                closePopupReservation={() => setPopupReservation(false)}
            />

        </MobileView>
    </>
}