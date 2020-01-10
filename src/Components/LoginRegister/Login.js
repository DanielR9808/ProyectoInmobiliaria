import React from 'react'
import {  Link} from "react-router-dom";
import "./Login.css"
export default function Login() {
    return (
        <div className="loginDiv">
            <h1 className="loginTitle">Iniciar Sesion</h1>
      
        <div className="form">
        <form className="loginForm">
            <input type="text" placeholder="Correo electronico" className="emailInput" />
            <input type="password" placeholder="Contraseña"className="passInput"/>
            <button className="loginButton">Iniciar sesion</button>
            <Link to="/register" > <p className="registerLink">No estoy registrado :(</p></Link>
        </form> 
        </div>
      
            
            
        </div>
    )
}
