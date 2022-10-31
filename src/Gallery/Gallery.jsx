import styles from './Gallery.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Gallery() {

    const renderImgs = [...Array(18)].map((_, i) =>
        <div key={i}>
            <img src={'imgs/mealsLieferando/quality=90-max_weight=9500/dish_' + (i + 1) + '.jpg'} />
        </div>)

    return (
        <div>
            <Carousel>
                {renderImgs}
            </Carousel>
        </div>
    )
}