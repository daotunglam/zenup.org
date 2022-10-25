import { BrowserView, MobileView } from 'react-device-detect';
import M from './Footer.mobile.module.scss';
import D from './Footer.desktop.module.scss';

export default function Footer() {
    return (
        <>
            <MobileView>
                <div>FOOTER</div>
            </MobileView>
            
            <BrowserView>
                <div>FOOTER</div>
            </BrowserView>
        </>
    )
}