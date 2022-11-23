import React, { useState } from "react";
import './Menu.scss';
import soupSalads from './MenuImgs/1.soupSalads.jpg';
import starters from './MenuImgs/2.starters.jpg';
import vorspeise from './MenuImgs/3.vorspeise.jpg';
import specialrolls from './MenuImgs/4.specialrolls.jpg';
import bowlsWarmdisches from './MenuImgs/5.bowlsWarmdisches.jpg';
import sashimi from './MenuImgs/6.sashimi.jpg';
import insideoutrolls from './MenuImgs/7.insideoutrolls.jpg';
import sushisets from './MenuImgs/8.sushisets.jpg';
import tortillas from './MenuImgs/9.tortillas.jpg';
import crunchy from './MenuImgs/10.crunchy.jpg';
import drinks from './MenuImgs/11.drinks.jpg';
import final from './MenuImgs/12.final.jpg';

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