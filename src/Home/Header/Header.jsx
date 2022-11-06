import React from "react";
import { useState } from "react";
import M from './Header.module.scss';

import bough from '../../imgs/bough3.svg';
import cloud12 from '../../imgs/cloud12.svg';
import lantern from '../../imgs/lantern.svg';
import sakura1 from '../../imgs/sakura1.svg';
import RestaurantName from "../../RestaurantName/RestaunrantName";

import BtnOrderOrReservation from "../../BtnOrderAndReservation/BtnOrderOrReservation";
import Popup from "../../BtnOrderAndReservation/Popup";

import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Header() {

    const { width } = useWindowDimensions();

    const getRandom = max => Math.floor(Math.random() * max);

    const renderFlowers = () => {
        return [...Array(50)].map((e, i) => (
            <div key={i}>
                <div
                    className={M.flower}
                    style={
                        (width < 600)
                            ? { left: getRandom(320), top: getRandom(200) }
                            : { left: getRandom(500), top: getRandom(300) }
                    }
                >
                    <img src={sakura1} alt="flower" />
                </div>
            </div>
        ))
    }

    const [open, setOpen] = useState(false);
    const [btnName, setBtnName] = useState('');

    const handleClickOpen = (value) => {
        setOpen(true);
        setBtnName(value)
    };

    const handleClose = () => {
        setOpen(false);
    };

    return <>
        <div className={M.Header}>

            <div className={M.sky}>
                <div className={M.sun} />

                <div className={M.cloud} style={{ left: 0.7 * width, top: 0 }}>
                    <img src={cloud12} alt="cloud" />
                </div>

                <div className={M.cloud} style={{ right: 0.7 * width, bottom: 0 }}>
                    <img src={cloud12} alt="cloud" />
                </div>
            </div>

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
            <div className={M.title}>
                <RestaurantName />
            </div>

            <BtnOrderOrReservation
                onClick={(btnName) => handleClickOpen(btnName)}
            />

            <Popup
                open={open}
                btnName={btnName}
                onClose={handleClose}
            />

        </div>
    </>
}