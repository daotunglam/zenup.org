import M from './Footer.module.scss';
import { Link, useLocation } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';

export default function Footer() {
    const location = useLocation();
    const locationHome = (location.pathname === '/');
    const location1 = (location.pathname === '/location1');
    const location2 = (location.pathname === '/location2');

    return (
        <div className={M.Footer}>
            <div className={M.section}>

                <h2>BESUCHEN SIE UNS IN</h2>

                {!location2 &&
                    <div className={M.gridTplCol200}>

                        <h4>SUSHI XENG <br/> IN <br /> MAXVORSTADT</h4>

                        <div>
                            <p>
                                <a href="https://goo.gl/maps/gGiL3kM1sux7AA3X9">
                                    Augustenstraße 52 80333 München
                                </a>
                            </p>
                            <p>Öffnungszeiten: Täglich 11-22 Uhr</p>
                            <p>
                                <a href="tel:+498932795287">
                                    Tel: 089 3279 5287
                                </a>
                            </p>
                        </div>

                        <iframe
                            title='googleMapAugustenstraße'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5324.06050369877!2d11.562651!3d48.148222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7514eed8b677%3A0x5dc88c3d3305e8e!2sSushi%20Xeng%20by%20Geisha!5e0!3m2!1sde!2sde!4v1666950677271!5m2!1sde!2sde"
                            loading="lazy"></iframe>
                    </div>
                }

                {!location1 &&
                    <div className={M.gridTplCol200}>
                        <h4>SUSHI XENG <br/> IN <br /> ANGER BLOCK INNENHOF</h4>

                        <div>
                            <p>
                                <a href="https://goo.gl/maps/gGiL3kM1sux7AA3X9">
                                    Sendlinger Straße 7 80331 München
                                </a>
                            </p>
                            <p>Öffnungszeiten: Mo-Sa 11-22 Uhr</p>
                            <p>
                                <a href="tel:+498994005677">
                                    Tel: 089 9400 5677
                                </a>
                            </p>
                        </div>

                        <iframe
                            title='googleMapAugustenstraße'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.681962623642!2d11.570269416251902!3d48.13565635927274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75757e8bebe9%3A0x8cd355e6dc6b450!2sSushi%20Xeng%20by%20Geisha!5e0!3m2!1sde!2sde!4v1663362397968!5m2!1sde!2sde"
                            loading="lazy"></iframe>
                    </div>
                }

                <div className={M.extra}>
                    <div className={M.socialLinks}>
                        <a href="https://www.facebook.com/Xeng-Sushi-Munich-101711799305327" target="_blank">
                            <FacebookIcon />
                        </a>
                        <a href="https://instagram.com/sushi.xeng" target="_blank">
                            <InstagramIcon />
                        </a>
                        <a href="mailto:hello@sushixeng.de?subject=Hello!" target="_self">
                            <MailIcon />
                        </a>
                    </div>

                    <p>
                        <Link to="imprint" >Impressum</Link>
                    </p>
                    <p>
                        <a className={M.webDeveloper} href="https://tunglam-dao.com.de">Web Developer tunglamdao</a>
                    </p>
                </div>

            </div>
        </div>
    )
}