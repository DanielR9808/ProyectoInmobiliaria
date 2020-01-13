import React, {useState} from 'react'
import {  Link} from "react-router-dom";
import "./Login.css"
import axios from 'axios';

export default function Login() {
    
    const [user, setUser] = useState({
        email: '',
        password: ''
    })




    const handleChange = (e) =>{
        let copy = user
        copy[e.target.name] = e.target.value
        setUser(copy)

    }

    const login = (e) => {
        console.log(user)
        axios.post('/api/user/login', user)
            .then(res => {
                console.log(res.headers.auth-token)
            })

        e.preventDefault()
    }

    return (
        <div className="loginDiv">
            <h1 className="loginTitle">Iniciar Sesion</h1>
      
        <div className="forms">

                <form className="loginForm" onSubmit={login}>
                <input type="text" placeholder="Correo electronico" className="emailInput" name="email" onChange={handleChange} />
                <input type="password" placeholder="Contraseña" className="passInput" name="password" onChange={handleChange} />
                <button className="loginButton" type="submit">Iniciar sesion</button>

                <Link to="/register" > <p className="registerLink">No estoy registrado :(</p></Link>
            </form> 
        </div>
      
        </div>
    )
}
