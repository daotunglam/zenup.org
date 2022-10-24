import React from "react";
import { BrowserView, MobileView } from 'react-device-detect';

import D from './Logo.desktop.module.scss';
import M from './Logo.mobile.module.scss';
import logo from "../../imgs/logo.svg";

export default function Logo() {
    return <>
        <MobileView className={M.Logo}>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </MobileView>
        <BrowserView className={D.Logo}>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </BrowserView>
    </>
}