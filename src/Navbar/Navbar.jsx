import React from "react";
import M from "./Navbar-M.module.scss";
import D from "./Navbar-D.module.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
    return <>
        <div className={D.Nav}>
            <Link to="/">HOME</Link>
            <Link to="/menu">MENU</Link>
        </div>
    </>
}