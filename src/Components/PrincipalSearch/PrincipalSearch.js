import React, {useState } from 'react'

import './PrincipalSearch.css'
import {Link} from "react-router-dom";
import AutoText from './../Inputs/AutofillerText'

export default function PrincipalSearch({updateSearchingProps}) {
    const cityZones=["Ciudadela Atalaya","Ciudadela La Libertad","Comuna del centro","Aeropuerto","Aniversario Uno"
    ,"Antonia Santos","Belén", "Belisario","Barrio Blanco","Boconó","Callejón","Carora","Ceiba II","Chapinero",
    "Ciudad Jardín","Claret","Colsag","Comuneros","Toponimia -El Contento-","Cundinamarca","La Cabrera","La Ermita"
    ,"El Escobal","Guaimaral","La Insula","Latino","Las Margaritas","Niza","Los Pinos","La Playa", "Prados del Norte",
    "Quinta Bosch","Quinta Oriental","El Rodeo","Salado","San Luís","San Martín","San Miguel","San Rafael","Santander",
    "Trigal del Norte","Tucunaré"]

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
        <div className="selectContainer">
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
        </div>
        <div className="selectContainer">
        <select className="Immovable-type" onChange={(e) => {
                let copy = props
                copy.immovableType = e.target.value
                setProps(copy)
            }}>
                {immovable.map(elemento =>{
                    return <option key={elemento}>{elemento}</option>
                })}
            </select>
        </div>
        <div className="inputContainer">
            <AutoText props={cityZones}></AutoText>
        </div>
            

            <div className="linkButton">

                <Link className="link" to="/inmuebles" onChange={updateSearchingProps(props)}> BUSCAR </Link>
                
            </div>
            
            {/*<div className="searchById" onClick={() => setIsSearchingCode(true)}>Busqueda por codigo</div>*/}
        </div>
    )
}
