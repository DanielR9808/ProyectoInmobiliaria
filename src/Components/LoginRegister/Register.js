import React, {useEffect, useState} from 'react'
import "./Register.css"
import axios from 'axios'
export default function Register() {


    const [user, setUser] = useState({
        firstname:'',
        lastname:'',
        email: '',
        password: '',
        phone: ''
    })

    const [verifyPassword, setVerifyPassword] = useState('')

    const handleChange = (e) =>{
        let copy = user
        copy[e.target.name] = e.target.value
        setUser(copy)
    }

    const changeVerifyPassword = (e) =>{
        setVerifyPassword(e.target.value)
    }

    const register = (e) =>{
        e.preventDefault()

        if (user.password.length < 6) {
            return alert("La contraseña debe tener por lo menos 6 caracteres")
        }

        if (!user.password == verifyPassword) {
            return alert("las contraseñas no coinciden")
        }

        axios.post('/api/user/register', user)
            .then(res => {
                console.log(res)
            })
        
    }

    return (
        <div className="registerDiv">
            <h1 className="registerTitle">Registro</h1>
            <div className="form">
                <form className="registerForm" onSubmit={register}>
                    <input type="text" placeholder="Correo electronico" name="email"className="emailInput" onChange={handleChange}/>
                    <input type="password" placeholder="Contraseña" name="password" className="passInput" onChange={handleChange}/>
                    <input type="password" placeholder="Confirmar contraseña" onChange={changeVerifyPassword} onChange={handleChange}className="passConfirmInput"/>
                    <input type="text" placeholder="Nombre" className="nameInput" name="firstname" onChange={handleChange}/>
                    <input type="text" placeholder="Apellidos" className="lastNameInput" name="lastname" onChange={handleChange} />
                    <input type="text" placeholder="Numero de Celular" onChange={handleChange} className="phoneNumberInput" name="phone"/> 
                    <button className="registerButton">Registrar</button>
                </form> 
            </div>
        
        </div>
    )
}
