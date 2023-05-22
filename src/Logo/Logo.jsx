 import React from "react";
 import M from './Logo.module.scss';

 export default function Logo({ theme }) {
    const logoImg = theme === 'dark' ? 'imgs/logoBlack1.png' : 'imgs/logoWhite1.png';
    return (
        <div className={M.Logo}>
            <div>
                <img src={logoImg} alt="logo" />
            </div>
        </div>
    )
}
