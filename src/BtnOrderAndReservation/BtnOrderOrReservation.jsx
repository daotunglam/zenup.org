import './BtnOrderOrReservation.scss';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import clsx from 'clsx';

export default function BtnOrderOrReservation(props) {

    const [onSite, setOnSite] = useState(false);
    const [showed, setShowed] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => setOnSite(window.scrollY > 800))

        return () => {
            window.removeEventListener('scroll', () => setOnSite(window.scrollY > 800))
        }
    }, [])

    return (
        <div
            className={clsx(
                'BtnOrderOrReservation',
                onSite && 'onSite',
                showed && 'showed'
            )}
        >
            <Button onClick={props.PopupOrder}>
                BESTELLUNG
            </Button>
            
            <Button onClick={props.PopupReservation}>
                TISCH RESERVIERUNG
            </Button>

            <Button className="toggler" onClick={() => setShowed(!showed)} />
        </div>
    )
}