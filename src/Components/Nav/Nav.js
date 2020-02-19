import React from "react";
import './Nav.css'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function Nav() {
    return (
        <nav className="Navbar">
            <div className="logo">
                <h1>Inmuebles</h1>
            </div>
            <ul className="nav-links">
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/inmuebles">inmuebles</Link>
                </li>
                <li>
                    <Link className="link" to="/Test"> Shit</Link>
                </li>
             
            </ul>
        </nav>
    )
}
