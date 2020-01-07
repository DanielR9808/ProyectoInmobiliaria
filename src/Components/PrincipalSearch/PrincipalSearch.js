import React, {useState } from 'react'

import './PrincipalSearch.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function PrincipalSearch({ updateSearchingProps}) {
    const propsObject = {
        purchaseType: "Compra Nuevo",
        immovableType: "",
        area : ""
    }

    const [isSearchingCode, setIsSearchingCode] = useState(false)
    const [props, setProps] = useState(propsObject)
    const immovable = ["Casas","Apartementos","Oficinas","Bodegas","Consultorios","Locales","Lotes","Fincas","Edificio de oficinas","Edificio de apartamentos"]


    if (isSearchingCode) return(
        <div className="search">
            <input type="text"/>
            <span className="searchById" onClick={() => setIsSearchingCode(false)}>Busqueda avanzada</span>
        </div>
    )
    
    return (
        <div className="search">
            <select className="Purchase-type" onChange={(e) => {
                let copy = props
                copy.purchaseType = e.target.value
                setProps(copy)
            }}>
                <option>Compra nuevo</option>
                <option>Compra usado</option>
                <option>Compra nuevo y usado</option>
                <option>Arriendo</option>
            </select>
            <select className="Immovable-type" onChange={(e) => {
                let copy = props
                copy.immovableType = e.target.value
                setProps(copy)
            }}>
                {immovable.map(elemento =>{
                    return <option key={elemento}>{elemento}</option>
                })}
            </select>
            <input type="text" placeholder="Ciudad, Zona o Barrio" onChange={(e) =>{
                let copy = props
                copy.area = e.target.value
                setProps(copy)
            }}/>

            <div>
                <Link className="" to="/inmuebles" onChange={updateSearchingProps(props)}> BUSCAR </Link>
            </div>
            
            <div className="searchById" onClick={() => setIsSearchingCode(true)}>Busqueda por codigo</div>
        </div>
    )
}
