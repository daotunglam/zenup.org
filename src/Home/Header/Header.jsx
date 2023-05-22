import React from "react";
import M from './Header.module.scss';

export default function Header() {

    return <>
        <div className={M.Header}>

            <div className={M.slide1}>

                <div className={M.bgImg} />

                <div className={M.text}>
                    <div className={M.main}>
                        UNLOCK <br />
                        A HAPPIER LIFE <br />
                        FOR ALL
                    </div>
                    <div className={M.sub}>
                        Empower With Self-Awareness Masterkey
                    </div>
                </div>
            </div>
        </div>
    </>
}