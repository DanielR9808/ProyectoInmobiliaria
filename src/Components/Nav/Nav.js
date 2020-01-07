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
        <nav>
            <div className="logo">
                <h1>Inmuebles</h1>
            </div>
            <ul className="nav-links">
                <li>
                    <Link className="link" exact to="/">shit</Link>
                </li>
                <li>
                    <Link className="link" to="/login">Ingresar</Link>
                </li>
                <li>
                    <Link className="link" to="/register">Registrar</Link>
                </li>
            </ul>
        </nav>
    )
}
