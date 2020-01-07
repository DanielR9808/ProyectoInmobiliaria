import React, {useState, useEffect } from 'react'
import './PrincipalSearch.css'

export default function PrincipalSearch() {

    const [expanded, setExpanded] = useState(false)
    const checkboxes = React.createRef()
    const [isSearchingCode, setIsSearchingCode] = useState(false)
    const tiposDeInmuebles = ["Casas","Apartementos","Oficinas","Bodegas","Consultorios","Locales","Lotes","Fincas","Edificio de oficinas","Edificio de apartamentos"]

    const displayCheckboxes = () =>{
        if (expanded) {
            checkboxes.current.style.display = "none"
            setExpanded(false)
        }else{
            checkboxes.current.style.display = "block"
            setExpanded(true)
        }
    }

    if (isSearchingCode) return(
        <div className="search">
            <input type="text"/>
            <span className="searchById" onClick={() => setIsSearchingCode(false)}>Busqueda por codigo</span>
        </div>
    )


    return (
        <div className="search">
            <div className="Purchase-type">
                
            </div>
            <div className="Immovable-type" onClick={displayCheckboxes}>
                <div className="arrow">
                    flecha
                </div>
            </div>
            <div className="checkboxes" ref={checkboxes}>
                {tiposDeInmuebles.forEach(inmueble =>{
                    return <input type="checkbox"/>
                })}
            </div>
            <button>BUSCAR</button>
            <span className="searchById" onClick={() => setIsSearchingCode(true)}>Busqueda por codigo</span>
        </div>
    )
}
