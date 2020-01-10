import React from 'react'
import "./Register.css"
export default function Register() {
    return (
        <div className="registerDiv">
            <h1 className="registerTitle">Registro</h1>
      
        <div className="form">
        <form className="registerForm">
            <input type="text" placeholder="Correo electronico" className="emailInput" />
            <input type="password" placeholder="Contraseña"className="passInput"/>
            <input type="password" placeholder="Confirmar contraseña" className="passConfirmInput"/>
            <input type="text" placeholder="Nombre" className="nameInput"/>
            <input type="text" placeholder="Apellidos" className="lastNameInput"/>
            <input type="text" placeholder="Numero de Celular" className="phoneNumberInput"/> 
            <button className="registerButton">Registrar</button>
           
        </form> 
        </div>
      
        </div>
    )
}
