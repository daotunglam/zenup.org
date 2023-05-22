import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./Navbar.scss";
import { Link } from "react-router-dom";
import BtnMenu from "../BtnMenu/BtnMenu";
import Logo from "../Logo/Logo";

export default function Navbar() {
    // toggle NavBar:

    const [NavbarOpened, setOpen] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setOpen(!NavbarOpened);
    }

    useEffect(() => { setOpen(false) }, [location]);

    return (
        <div className={`
            Navbar 
            ${!NavbarOpened && 'closed'}
            `}
        >

            <div className={`
                topBar 
            `}>
                <div
                    className="container"
                    style={
                        location.pathname !== '/'
                            ? {
                                borderBottom: '1px solid rgba(245, 245, 245, 0.5)',
                                boxShadow: '0 1px gray',
                            }
                            : {}
                    }
                >
                    <Link to="/" className="logo">
                        <Logo theme={'white'} />
                    </Link>

                    <BtnMenu
                        toggleNavbar={toggleNavbar}
                    />
                </div>
            </div>

            <div className="overlay" onClick={toggleNavbar} />

            <div className="itemsBox scrollable">

                <Link className="navItem" style={{ height: '32px' }} /> {/* this empty container make a distance with top */}

                <Link to="/" className="navItem">HOME</Link>

                <Link to="/categories" className="navItem">CATEGORIES</Link>

                <Link to="/explore" className="navItem">EXPLORE</Link>

                {/* 
                <div className="dropdown">
                    <div className="navItem">CATEGORIES
                        <div className="dropdown-content hiddenOnRight showedOnRight">
                            <Link to="/zenup-workshops" className="dropdown-item">Zenup workshops</Link>
                            <Link to="/zenup-lifestyles" className="dropdown-item">Zenup Lifestyles</Link>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="navItem">EXPLORE
                        <div className="dropdown-content hiddenOnRight showedOnRight">
                            <Link to="/zenup-library" className="dropdown-item">Zenup Library</Link>
                            <Link to="/zenup-gallery" className="dropdown-item">Zenup Gallery</Link>
                            <Link to="/blog" className="dropdown-item">Blog</Link>
                        </div>
                    </div>
                </div> */}

                <Link to="/work-with-us" className="navItem">WORK WITH US</Link>

                <Link to="/contact-us" className="navItem">CONTACT US</Link>

            </div>

        </div>
    )
}