import React, { useState } from "react";
import './Menu.scss';
import soupSalads from '../imgs/Menu/1.soupSalads.jpg';
import starters from '../imgs/Menu/2.starters.jpg';
import vorspeise from '../imgs/Menu/3.vorspeise.jpg';
import specialrolls from '../imgs/Menu/4.specialrolls.jpg';
import bowlsWarmdisches from '../imgs/Menu/5.bowlsWarmdisches.jpg';
import sashimi from '../imgs/Menu/6.sashimi.jpg';
import insideoutrolls from '../imgs/Menu/7.insideoutrolls.jpg';
import sushisets from '../imgs/Menu/8.sushisets.jpg';
import tortillas from '../imgs/Menu/9.tortillas.jpg';
import crunchy from '../imgs/Menu/10.crunchy.jpg';
import drinks from '../imgs/Menu/11.drinks.jpg';
import final from '../imgs/Menu/12.final.jpg';

export default function Menu() {
    const [largeMenuPage, setLargeMenuPage] = useState(null);

    const menuPages = [
        soupSalads,
        starters,
        vorspeise,
        specialrolls,
        bowlsWarmdisches,
        sashimi,
        insideoutrolls,
        sushisets,
        tortillas,
        crunchy,
        drinks,
        final,
    ]

    const rendermenuPages = menuPages.map((menuPage, i) =>
        <img key={i} className="menuPage" src={menuPage} alt='menuPage' onClick={()=>setLargeMenuPage(menuPage)} />
    )

    return <>
        <div className="Menu">

            {rendermenuPages}

            {largeMenuPage &&
                <div className="large">
                    <div className="overlay" onClick={()=>setLargeMenuPage(null)} />
                    <img src={largeMenuPage} alt='page' />
                </div>
            }

        </div>
    </>
}