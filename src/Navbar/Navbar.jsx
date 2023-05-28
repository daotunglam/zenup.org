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

            <div className="sidebar scrollable">

                <Link className="navItem" style={{ height: '32px' }} /> {/* this empty container make a distance with top */}
                
                <Link to="/" className="navItem"><span>Trang chủ</span></Link>

                <Link to="/categories" className="navItem"><span>Thông Tin</span></Link>

                <Link to="/explore" className="navItem"><span>Khám Phá</span></Link>

                <Link to="/work-with-us" className="navItem"><span>Cộng Tác</span></Link>

                <Link to="/contact-us" className="navItem"><span>Liên Hệ</span></Link>


            </div>

        </div>
    )
}