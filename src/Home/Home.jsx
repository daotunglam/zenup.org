import React from "react";
import M from './Home.mobile.module.scss';
import Header from "./Header/Header";
import sashimiBlue from '../imgs/Sushi/sashimiBlue.jpeg';
import sushiLongDish from '../imgs/Sushi/sushiLongDish.jfif';
import SushiXeng_Hero from '../imgs/mealsLieferando/quality=90-max_weight=9500/SushiXeng_Hero_4x3.jpg';
import SectionWelcome from "./Sections/SectionWellcome";
import SectionLiebe from "./Sections/SectionLiebe";
import SectionKindsOfMeal from "./Sections/SectionKindsOfMeal";
import SectionMenu from "./Sections/SectionMenu";

export default function Home() {
    return <>

        <Header />

        <div className={M.openHours}>
            <h4>
                Augustenstraße 52 80333 München
                <br />
                <br />
                Öffnungszeiten: Täglich 11-22 Uhr
            </h4>

            <br />

            <h4>
                Sendlinger Straße 7 80331 München
                <br />
                <br />
                Öffnungszeiten: Mo-Sa 11-22 Uhr
            </h4>
        </div>

        <img src={sashimiBlue} className={M.bgImg} alt="sashimiBlue" />

        <SectionWelcome />

        <img src={sushiLongDish} className={M.bgImg} alt="sushiLongDish" />

        <SectionKindsOfMeal />

        <SectionMenu />

        <img src={SushiXeng_Hero} className={M.bgImg} alt="SushiXeng_Hero" />

        <SectionLiebe />
        
    </>
}