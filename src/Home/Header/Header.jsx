import React from "react";
import { BrowserView, MobileView } from 'react-device-detect';

import D from './Header.desktop.module.scss';
import M from './Header.mobile.module.scss';

import bough from '../../imgs/bough.svg';
import lantern from '../../imgs/lantern.svg';

export default function Header() {
    return <>
        <MobileView className={M.Header}>
            
            <div className={M.sun}></div>

            <div className={M.tree}>
                <div className={M.bough}>
                    <img src={bough} alt="tree" />
                </div>
                <div className={M.lantern} style={{ left: 100, top: 100 }}>
                    <img src={lantern} alt="lantern" />
                </div>
                <div className={M.lantern} style={{ left: 250, top: 50 }}>
                    <img src={lantern} alt="lantern" />
                </div>
            </div>
        </MobileView>
        <BrowserView>
            <div className={D.Header}>HEADER</div>
        </BrowserView>
    </>
}