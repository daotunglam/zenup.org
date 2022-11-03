import React from "react";
import M from './Home.module.scss';
import Header from "./Header/Header";
import meal_5 from '../imgs/Sushi/meal_5.jpeg';
import sushiLongDish from '../imgs/Sushi/sushiLongDish.jfif';
import SushiXeng_Hero from '../imgs/SushiXeng_Hero_4x3.jpg';
import SectionWelcome from "./Sections/SectionWellcome";
import SectionLiebe from "./Sections/SectionLiebe";
import SectionKindsOfMeal from "./Sections/SectionKindsOfMeal";
import SectionMenu from "./Sections/SectionMenu";
import Gallery from "../Gallery/Gallery";
import clsx from "clsx";

export default function Home() {
    return <>

        <Header />

        <div className={clsx(M.openHours, M.gridTplCol300)}>
            <h4>
                Augustenstraße 52 80333 München
                <br />
                <br />
                Öffnungszeiten: Täglich 11-22 Uhr
            </h4>

            <h4>
                Sendlinger Straße 7 80331 München
                <br />
                <br />
                Öffnungszeiten: Mo-Sa 11-22 Uhr
            </h4>
        </div>

        <img src={meal_5} className={M.bgImg} alt="meal_5" />

        <SectionWelcome />

        <img src={sushiLongDish} className={M.bgImg} alt="sushiLongDish" />

        <SectionKindsOfMeal />

        <SectionMenu />

        <img src={SushiXeng_Hero} className={M.bgImg} alt="SushiXeng_Hero" />

        <SectionLiebe />

        <Gallery />
    </>
}