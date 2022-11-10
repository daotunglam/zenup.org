import M from './Gallery.module.scss';
import { Carousel } from '3d-react-carousal';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Gallery() {

    const { width } = useWindowDimensions();

    const renderImgs = [...Array(15)].map((_, i) =>
        <img
            key={i + 1}
            src={'imgs/singleSushis/singleSushi_' + (i + 1) + '.jpeg'}
            alt=""
            style={{ 
                objectFit: 'contain', 
                height: (width > 600) ? '500px' : '300px',
            }}
        />
    )

    return (
        <div className={M.Gallery} id="Gallery">
            <div className={M.carouselContainer}>
                <Carousel
                    className={M.carousel}
                    slides={renderImgs}
                    autoplay={true}
                    interval={5000}
                    arrows={false}
                />
            </div>
        </div>
    )
}