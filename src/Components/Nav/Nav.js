import React from "react";
import './Nav.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
                    <Link className="link" exact to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/inmuebles">inmuebles</Link>
                </li>
                <li>
                    <Link className="link" to="/login">Iniciar Sesion </Link>
                </li>
            </ul>
        </nav>
    )
}
