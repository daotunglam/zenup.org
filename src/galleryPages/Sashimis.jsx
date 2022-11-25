import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ScrollToTop from "../scrollToTop";
import './galleryPages.scss';

export default function Sashimis() {

    const renderImgs = [...Array(4)].map((_, i) =>
        <div key={i + 1}>
            <img
                src={'imgs/SashimisImgs/sashimi_' + (i + 1) + '.jpg'}
                alt=""
            />
            {/* <p className="legend">{i + 1}</p> */}
        </div>
    )

    return <>
        <ScrollToTop />
        <div className="galleryPages">

            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
            >
                {renderImgs}
            </Carousel>

        </div>
    </>
}