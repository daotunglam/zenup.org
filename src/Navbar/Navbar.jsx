import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import clsx from "clsx";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import BtnMenu from "../BtnMenu/BtnMenu";

export default function Navbar() {
    const [NavbarOpened, setOpen] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setOpen(!NavbarOpened);
    }
    
    useEffect(()=>{setOpen(false)}, [location]);

    return (
        <div className={clsx('Navbar', !NavbarOpened && 'closed')}>
            <BtnMenu
                toggleNavbar={toggleNavbar}
                NavbarOpened={NavbarOpened}
            />

            <div className="overlay" onClick={toggleNavbar} />

            <div className="itemsBox">

                <Link to="/" className="navItem">HOME</Link>

                <Link to="/menu" className="navItem">MENU</Link>

                <Link
                    to="/location1"
                    className="navItem"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>Location 1</span>
                    <span className="sub">Augustenstraße 52</span>
                </Link>

                <Link
                    to="/location2"
                    className="navItem"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>Location 2</span>
                    <span className="sub">Sendlinger Straße 7</span>
                </Link>
            </div>

        </div>
    )
}