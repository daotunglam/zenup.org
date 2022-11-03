import './section.scss';
import restaurantWall from '../../imgs/restaurantWall.jfif';

export default function SectionWelcome() {
    return (
        <div className='section'>

            <img style={{ objectPosition: '50% 0%' }} src={restaurantWall} alt="restaurantWall" />

            <div>
                <div className='title'>
                    <h1>Willkommen</h1>
                    <h1>im Sushi Xeng</h1>
                </div>

                <p className='description' >
                    Wir gehören zu der Systemgastronomie Geisha.
                    Unsere Sushi-Chefs sind Meister der Sushi Arrangierkunst.
                </p>
            </div>

        </div>
    )
}