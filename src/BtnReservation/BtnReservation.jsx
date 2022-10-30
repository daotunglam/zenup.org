import './BtnReservation.scss';
import { useState } from 'react';

import Button from '@mui/material/Button';

export default function BtnReservation() {
    const [popUpOpened, setpopUpOpened] = useState(false);

    return (
        <div className='BtnReservation'>
            <Button onClick={() => setpopUpOpened(!popUpOpened)}>
                TISCH RESERVIERUNG
            </Button>

            {popUpOpened &&
                <div className="popUp">
                    <div className='overlay' />
                    <div className='content'>
                        <h2>RESERVIERUNG IN</h2>
                        <h4>LOCATION <br /> MAXVORSTADT</h4>
                        <p>Augustenstraße 52 80333 München</p>
                    </div>
                </div>
            }
        </div>
    )
}