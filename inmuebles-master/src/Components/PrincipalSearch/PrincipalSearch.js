import React, {useState, useEffect } from 'react'
import './PrincipalSearch.css'

export default function PrincipalSearch() {

    const [expanded, setExpanded] = useState(false)
    const [tipoInmueble, setTipoInmueble] = useState("Tipo de inmueble")
    const checkboxes = React.createRef()

    const tiposDeInmuebles = ["Casas","Apartementos","Oficinas","Bodegas","Consultorios","Locales","Lotes","Fincas","Edificio de oficinas","Edificio de apartamentos"]
    const selectedCheckboxes = new Set();

    const toggleCheckbox = label  =>{
        if (selectedCheckboxes.has(label)) {
            selectedCheckboxes.delete(label);
        } else {
            selectedCheckboxes.add(label);
        }
    }

    const displayCheckboxes = () =>{
        if (expanded) {
            checkboxes.current.style.display = "none"
            setExpanded(false)
        }else{
            checkboxes.current.style.display = "block"
            setExpanded(true)
        }
    }

    return (
        <form>
            <select name="Compra">
                <option value="Compra nuevo">
                    Compra nuevo
                </option>
                <option value="Compra usado">
                    Compra usado
                </option>
                <option value="Compra nuevo y usado">
                    Compra nuevo y usado
                </option>
                <option value="Arriendo">
                    Arriendo
                </option>
            </select>
            <div className="Combo-de-inmueble" onClick={displayCheckboxes}>
                <span>{tipoInmueble}</span>
                <div className="arrow">
                    flecha
                </div>
            </div>
            <div className="checkboxes" ref={checkboxes}>

            </div>
        </form>
    )
}
