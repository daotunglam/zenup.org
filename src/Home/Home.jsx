import React from "react";
import M from './Home.mobile.module.scss';
// import Logo from "./Logo/Logo";
import Header from "./Header/Header";
import sushiDishBlack from '../imgs/Sushi/sushiDishBlack.jpg';
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";

export default function Home() {
    return <>
        {/* <Logo /> */}
        <Header />

        <img src={sushiDishBlack} className={M.bgImg} alt="sushiDishBlack" />

        <Section1 />
        <Section2 />
    </>
}