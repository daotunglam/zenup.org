import M from './Footer.module.scss';
import {
    Link,
    useLocation
} from 'react-router-dom';

import clsx from 'clsx';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../Logo/Logo';
import CallIcon from '@mui/icons-material/Call';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';

export default function Footer() {
    const location = useLocation();

    return (
        <div
            className={M.Footer + (location.pathname == '/' ? ' ' + M.includeBgColor : '')}
        >
            <div style={{
                height: '1px',
                backgroundColor: 'rgba(245, 245, 245, 0.5)',
                boxShadow: '0 1px gray'
            }} />

            <div className={M.section}>

                <div className={M.gridTplCol200}>

                    <Logo theme='white' />

                    <div>
                        {/* <p>
                            <a href="#" target="_blank" rel="noreferrer">
                                Newsletter
                            </a>
                        </p> */}
                        <p>
                            <a href="#" target="_blank" rel="noreferrer">
                                FAQ
                            </a>
                        </p>
                        <p>
                            <a href="#" target="_blank" rel="noreferrer">
                                Terms & Services
                            </a>
                        </p>
                    </div>

                </div>

                <div className={clsx(M.extra, M.gridTplCol200)}>
                    <div className={M.socialLinks}>
                        <a
                            target="_self"
                            href="mailto:hello@zenup.org"
                        >
                            <MailIcon />
                        </a>
                        {/* <a
                            target="_blank" rel="noreferrer"
                            href="#"
                        >
                            <FacebookIcon />
                        </a> */}
                        <a
                            target="_blank" rel="noreferrer"
                            href="https://www.instagram.com/nauanddandie/"
                        >
                            <InstagramIcon />
                        </a>
                        {/* <a
                            target="_blank" rel="noreferrer"
                            href="#"
                        >
                            <YouTubeIcon />
                        </a> */}
                        {/* <a
                            target="_self"
                            href="mailto:hello@zenup.org"
                        >
                            <CallIcon />
                        </a> */}
                    </div>

                    {/* <div>
                        <Link to="imprint" >Imprint</Link>
                        {' | '}
                        <Link to="privacy-policy" >Privacy policy </Link>
                    </div> */}
                </div>

            </div>
        </div >
    )
}