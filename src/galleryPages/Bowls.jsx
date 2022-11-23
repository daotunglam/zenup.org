import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './galleryPages.scss';

export default function Bowls() {

    const renderImgs = [...Array(16)].map((_, i) =>
        <div key={i + 1}>
            <img
                src={'imgs/BowlsImgs/bowl_' + (i + 1) + '.jpg'}
                alt=""
            />
            {/* <p className="legend">{i + 1}</p> */}
        </div>
    )

    return <>
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