import './Section1.scss';
// import biefBowl from '../../imgs/Sushi/biefBowl.jfif';
import biefBowl from '../../imgs/Sushi/sushiLongDish.jfif';

export default function Section1() {
    return (
        <div className='Section1'>
            <img src={biefBowl} className="biefBowl" alt="biefBowl" />
        </div>
    )
}