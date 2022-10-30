import './section.scss';
import sushiBox from '../../imgs/Sushi/sushiBox.jfif';
import sashimi from '../../imgs/Sushi/sashimi.jpeg';
import skewer from '../../imgs/Sushi/skewer.jfif';

export default function SectionKindsOfMeal() {
    return (
        <div className='section'>

            <div className='kindsOfMeal'>
                <div className='item'>
                    <img src={sushiBox} alt="sushiBox" />
                    <span>S U S H I</span>
                </div>

                <div className='item'>
                    <img src={sashimi} alt="sashimi" />
                    <span>S A S I M I</span>
                </div>

                <div className='item'>
                    <img src={skewer} alt="skewer" />
                    <span>U D O N</span>
                </div>
            </div>

        </div>
    )
}