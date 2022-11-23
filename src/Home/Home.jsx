import React from "react";
import M from './Home.module.scss';
import Header from "./Header/Header";
import sushiLongDish from '../imgs/sushiLongDish.png';
import SectionWelcome from "./Sections/SectionWellcome";
import SectionLiebe from "./Sections/SectionLiebe";
import SectionKindsOfMeal from "./Sections/SectionKindsOfMeal";
import SectionMenu from "./Sections/SectionMenu";
import Gallery from "../Gallery/Gallery";
import clsx from "clsx";
import CallRoundedIcon from '@mui/icons-material/CallRounded';

export default function Home() {
    return <>

        <Header />

        <div className={clsx(M.openHours, M.gridTplCol300)}>
            <h4>
                Augustenstraße 52 80333 München
                <br />
                <br />
                Öffnungszeiten: Täglich 11-22 Uhr
                <br />
                <br />
                <a href="tel:+498932795287">
                    <CallRoundedIcon /> 089 3279 5287
                </a>
            </h4>

            <h4>
                Sendlinger Straße 7 80331 München
                <br />
                <br />
                Öffnungszeiten: Mo-Sa 11-22 Uhr
                <br />
                <br />
                <a href="tel:+498994005677">
                    <CallRoundedIcon /> 089 9400 5677
                </a>
            </h4>
        </div>

        <Gallery />

        <img src='imgs/singleSushis/singleSushi_11.jpeg' className={M.bgImg} alt="" />

        <SectionWelcome />

        <img src={sushiLongDish} className={M.bgImg} alt="sushiLongDish" />

        <SectionKindsOfMeal />

        <SectionMenu />

        <img src='imgs/singleSushis/singleSushi_13.jpeg' className={M.bgImg} alt="" />

        <SectionLiebe />
    </>
}