import './Popup.scss';
import { useLocation } from "react-router-dom";
import { Divider } from "@mui/material";


export default function Popup(props) {
    const pathname = useLocation().pathname;
    const locationHome = (pathname === '/');
    const location1 = (pathname === '/location1');
    const location2 = (pathname === '/location2');

    return (
        <div className='Popup'>
            {props.PopupOrder &&
                <div className='Popup'>
                    <div className='overlay' onClick={props.closePopupOrder} />
                    <div className='content'>
                        {(locationHome || location1) &&
                            <a>
                                <h3>BESTELLUNG</h3>
                                <h4>IN MAXVORSTADT</h4>
                                <h4>Augustenstraße 52 80333 München</h4>
                            </a>
                        }
                        <Divider />
                        {(locationHome || location2) &&
                            <a>
                                <h3>BESTELLUNG</h3>
                                <h4>IN ANGER BLOCK INNENHOF</h4>
                                <h4>Sendlinger Straße 7 80331 München</h4>
                            </a>
                        }
                    </div>
                </div>
            }

            {props.PopupReservation &&
                <div className='Popup'>
                    <div className='overlay' onClick={props.closePopupReservation} />
                    <div className='content'>
                        {(locationHome || location1) &&
                            <a>
                                <h3>TISCH RESERVIERUNG</h3>
                                <h4>IN MAXVORSTADT</h4>
                                <h4>Augustenstraße 52 80333 München</h4>
                            </a>
                        }
                        <Divider />
                        {(locationHome || location2) &&
                            <a>
                                <h3>TISCH RESERVIERUNG</h3>
                                <h4>IN ANGER BLOCK INNENHOF</h4>
                                <h4>Sendlinger Straße 7 80331 München</h4>
                            </a>
                        }
                    </div>
                </div>
            }

        </div>
    )
}
