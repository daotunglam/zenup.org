import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="Navbar close">

            <div className="overlay" />

            <div className="itemsBox">
                <Link to="/" className="navItem">HOME</Link>
                <Link to="/menu" className="navItem">MENU</Link>
            </div>

        </div>
    )
}