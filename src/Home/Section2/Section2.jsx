import './Section2.scss';
import dishSeafood from '../../imgs/Sushi/dishSeafood.jpg';

export default function Section2() {
    return (
        <div className='Section2'>
            <div className='bgImg'>
                <img src={dishSeafood} className="dishSeafood" alt="dishSeafood" />
            </div>
        </div>
    )
}