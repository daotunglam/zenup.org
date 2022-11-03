import './section.scss';
import SashimiTuna from '../../imgs/mealsLieferando/quality=90-max_weight=9500/dish_15.jpg';

import { Stack } from '@mui/system';

export default function SectionLiebe() {
    return (
        <div className='section'>

            <div className='bgImg'>
                <img style={{ objectPosition: '50% 50%', }} src={SashimiTuna} alt="SashimiTuna" />
            </div>

            <div>
                <div className='title'>
                    <h1>Die Liebe</h1>
                </div>

                <p className='description'>
                    Kreativität und Leidenschaft gehören für das Essen einfach dazu.
                    Wir sind einer ausgezeichneten Küche Ihre Gastgeber im Herzen von München.
                </p>
            </div>
        </div>
    )
}