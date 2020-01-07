import React, {useState, useEffect } from 'react'
import './PrincipalSearch.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function PrincipalSearch() {
    const propsObject = {
        purchaseType: "Compra nuevo",
        immovableType: "Casas",
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
                copy.purchaseType = e.target
                setProps(copy)
            }}>
                <option>Compra nuevo</option>
                <option>Compra usado</option>
                <option>Compra nuevo y usado</option>
                <option>Arriendo</option>
            </select>
            <select className="Immovable-type" onChange={(e) => {
                let copy = props
                copy.immovableType = e.target
                setProps(copy)
            }}>
                {immovable.map(elemento =>{
                    return <option>{elemento}</option>
                })}
            </select>
            <input type="text" placeholder="Ciudad, Zona o Barrio" onChange={(e) =>{
                let copy = props
                copy.area = e.target
                setProps(copy)
            }}/>

            <Router>
                <Link
                    to={{
                        pathname: "/inmuebles",
                        state: {
                            hello: "Hello World"
                        }
                    }}>
                    Press Me
</Link>
            </Router>
            
            <span className="searchById" onClick={() => setIsSearchingCode(true)}>Busqueda por codigo</span>
        </div>
    )
}
