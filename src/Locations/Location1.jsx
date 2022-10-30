import './Location.scss';
import { BrowserView, MobileView } from 'react-device-detect';

export default function Location1() {
    return (
        <div className='location'>
            <MobileView></MobileView>

            <BrowserView></BrowserView>
        </div>
    )
}