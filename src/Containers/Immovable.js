import React, { useEffect, useState, Fragment} from 'react'
import './Immovable.css'

const preferences = ["Amoblado", "Zona para niños", "Gimnasio", "Cancha(s) de Squash", "Acceso para discapacitados"
    , "Piscina", "Zonas verdes", "Cancha(s) de tennis", "Cancha(s) de fútbol", "Cancha(s) de Basket", "Verificado"
    , "Cerca Transporte Público", "Cerca a Centros Comerciales", "Cerca a Parques", "Cerca a Supermercados", "Cerca a colegios / universidades"
    , "Zona de BBQ", "Ascensor", "Con Balcón", "Con Vigilancia", "En conjunto cerrado", "Cuarto de servicio", "Con chimenea"
    , "Con deposito", "Con zona de lavandería", "Se permiten mascotas", "Se permite fumar"]

const priceRange = [10, 29, 20, 30, 41];

export default function ImmovableComp({ searchingProps}) {
    
    
    const [immovable, setImmovable] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState('Immovable.json')
    const [nextPageUrl, setnextPageUrl] = useState('initialState')
    const [prevPageUrl, setPrevPageUrl] = useState('initialState')

    return (
        <Fragment>
            <button onClick={() => console.log(immovable)}>test</button>
            <div className="filters">
                <input type="text" placeholder="Filtrar por palabra"/>
                <div>
                    <label> Rango de precios</label>
                    <select name="rangoDePrecios">
                        {priceRange.map((price) => {
                            return <option value={price} >{price}</option>
                        })}
                    </select>    
                </div>
                <div>
                    <div>
                        <label>Desde</label>
                        <input name="priceFromTo" type="text" />
                    </div>
                    <div>
                        <label>Hasta</label>
                        <input name="priceUpTo" type="text" />
                    </div>
                </div>
                <div className="preferences">
                    <h1>Me gustaria que tenga</h1>
                    <ul>
                        {preferences.map((preference) =>{
                        return <li className="preference"><input type="checkbox" value={preference} onChange={(e) => console.log(e.target.value)} />{preference}</li> 
                        })}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
