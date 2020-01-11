import React from 'react'
import {  Link} from "react-router-dom";
import "./Login.css"
import axios from 'axios';

export default function Login() {
    
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

   const loginProcess = () =>{
        axios.get(`/api/user/${user}`)
            .then(res =>{
                setUser(res.data)
            })
    }


    return (
        <div className="loginDiv">
            <h1 className="loginTitle">Iniciar Sesion</h1>
      
        <div className="forms">
            <form className="loginForm">
                <input type="text" placeholder="Correo electronico" className="emailInput" value={this.useState.email}/>
                <input type="password" placeholder="Contraseña"className="passInput" value={this.useState.password}/>
                <button className="loginButton" onClick={loginProcess}>Iniciar sesion</button>
                <Link to="/register" > <p className="registerLink">No estoy registrado :(</p></Link>
            </form> 
        </div>
      
        </div>
    )
}
