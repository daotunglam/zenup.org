import './section.scss';
import styles from './SectionKindsOfMeal.module.scss';
import udon from '../../imgs/udon.jpeg';

import { Stack } from '@mui/system';
import { Link } from "react-router-dom";

export default function SectionKindsOfMeal() {
    return (
        <div className='section'>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 2, sm: 3, md: 4 }}
            >
                <Link to="/sushis" className={styles.item}>
                    <img src='imgs/coupleSushis/coupleSushi_3.jpeg' alt="sushiBox" />
                    <span>S U S H I</span>
                </Link>

                <Link to="/sashimis" className={styles.item}>
                    <img src='imgs/coupleSushis/coupleSushi_2.jpeg' alt="sashimi" />
                    <span>S A S I M I</span>
                </Link>

                <Link to="/bowls" className={styles.item}>
                    <img
                        // src='imgs/coupleSushis/coupleSushi_4.jpeg' 
                        src={udon}
                        alt="udon" />
                    <span>B O W L</span>
                </Link>
            </Stack >
        </div >
    )
}