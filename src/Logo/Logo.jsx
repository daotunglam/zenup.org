import React from "react";

import M from './Logo.module.scss';
import logo from "../imgs/logo.svg";

export default function Logo() {
    return (
        <div className={M.Logo}>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}