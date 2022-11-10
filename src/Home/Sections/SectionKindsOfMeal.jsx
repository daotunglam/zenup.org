import './section.scss';
import styles from './SectionKindsOfMeal.module.scss';
// import sushiBox from '../../imgs/Sushi/sushiBox.jfif';
// import sashimi from '../../imgs/Sushi/sashimi.jpeg';
import udon from '../../imgs/Sushi/meal_11.jpeg';

import { Stack } from '@mui/system';

export default function SectionKindsOfMeal() {
    return (
        <div className='section'>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <div className={styles.item}>
                    <img src='imgs/coupleSushis/coupleSushi_3.jpeg' alt="sushiBox" />
                    <span>S U S H I</span>
                </div>

                <div className={styles.item}>
                    <img src='imgs/coupleSushis/coupleSushi_2.jpeg' alt="sashimi" />
                    <span>S A S I M I</span>
                </div>

                <div className={styles.item}>
                    <img
                        // src='imgs/coupleSushis/coupleSushi_4.jpeg' 
                        src={udon}
                        alt="udon" />
                    <span>U D O N</span>
                </div>
            </Stack >
        </div >
    )
}