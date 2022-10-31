import './section.scss';
import styles from './SectionKindsOfMeal.module.scss';
import sushiBox from '../../imgs/Sushi/sushiBox.jfif';
import sashimi from '../../imgs/Sushi/sashimi.jpeg';
import skewer from '../../imgs/Sushi/meal_11.jpeg';

export default function SectionKindsOfMeal() {
    return (
        <div className='section'>

            <div className={styles.KindsOfMeal}>
                <div className={styles.item}>
                    <img src={sushiBox} alt="sushiBox" />
                    <span>S U S H I</span>
                </div>

                <div className={styles.item}>
                    <img src={sashimi} alt="sashimi" />
                    <span>S A S I M I</span>
                </div>

                <div className={styles.item}>
                    <img src={skewer} alt="skewer" />
                    <span>U D O N</span>
                </div>
            </div>

        </div>
    )
}