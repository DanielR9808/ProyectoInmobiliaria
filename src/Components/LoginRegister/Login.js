import React from 'react'
import {  Link} from "react-router-dom";
import "./Login.css"

export default function Login() {
    
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    

    return (
        <div className="loginDiv">
            <h1 className="loginTitle">Iniciar Sesion</h1>
      
        <div className="forms">
            <form className="loginForm">
                <input type="text" placeholder="Correo electronico" className="emailInput" />
                <input type="password" placeholder="Contraseña"className="passInput"/>
                <button className="loginButton" onClick={login}>Iniciar sesion</button>
                <Link to="/register" > <p className="registerLink">No estoy registrado :(</p></Link>
            </form> 
        </div>
      
            
            
        </div>
    )
}
