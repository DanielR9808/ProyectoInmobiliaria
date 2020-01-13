
import React, { useEffect, useState, Fragment} from 'react'
import ImmovableCard from './../Components/Cards/immovableCard'
import './Immovable.css'
import immovableCard from './../Components/Cards/immovableCard';

const preferences = ["Amoblado", "Zona para niños", "Gimnasio", "Cancha(s) de Squash", "Acceso para discapacitados"
    , "Piscina", "Zonas verdes", "Cancha(s) de tennis", "Cancha(s) de fútbol", "Cancha(s) de Basket", "Verificado"
    , "Cerca Transporte Público", "Cerca a Centros Comerciales", "Cerca a Parques", "Cerca a Supermercados", "Cerca a colegios / universidades"
    , "Zona de BBQ", "Ascensor", "Con Balcón", "Con Vigilancia", "En conjunto cerrado", "Cuarto de servicio", "Con chimenea"
    , "Con deposito", "Con zona de lavandería", "Se permiten mascotas", "Se permite fumar"]

const priceRange = [10, 29, 20, 30, 41];
const hab=[1,2,3,4,5];
const bath=[1,2,3,4,5];
const garage=[1,2,3,4,5]

export default function ImmovableComp({ searchingProps}) {
    
    
    const [immovable, setImmovable] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState('Immovable.json')
    const [nextPageUrl, setnextPageUrl] = useState('initialState')
    const [prevPageUrl, setPrevPageUrl] = useState('initialState')

    return (
        <Fragment>
           
                <button onClick={() => console.log(immovable)}>test</button>
                <div className="filters">

                    <div className="Quantity">
                        <label className="priceParameterLabel"> Rango de precios</label>
                        <select name="priceRange" className="priceSelect">
                            {priceRange.map((price) => {
                                return <option value={price} >{price}</option>
                            })}
                        </select>    
                    
                    
                        
                        
                    </div>  
                    <div className="Quantity">
                        <label className="priceSTLabel">Desde</label>
                        <label className="priceSTLabel">Hasta</label>
                        <input name="priceFromTo" type="text" className="priceSTInput" />
                        <input name="priceUpTo" type="text" className="priceSTInput"/>
                    </div>
                    <div className="Quantity">
                     <label className="quantityLabel">Habitaciones</label>
                        <ul>
                        {hab.map((habs)=>{
                            return <li className="quantityLi"><button className="quantityButton">{habs}</button></li>
                        })} 
                        </ul>
                    </div>
                    <div className="Quantity">
                     <label className="quantityLabel">Baños</label>
                        <ul>
                        {bath.map((baths)=>{
                            return <li className="quantityLi"><button className="quantityButton">{baths}</button></li>
                        })} 
                        </ul>
                    </div>
                    <div className="Quantity">
                     <label className="quantityLabel">Garajes</label>
                        <ul>
                        {garage.map((garages)=>{
                            return <li className="quantityLi"><button className="quantityButton">{garages}</button></li>
                        })} 
                        </ul>
                    </div>
                    <div className="preferences">
                        <h1 className="preferencesTitle"> Me gustaria que tenga</h1>
                        <ul>
                            {preferences.map((preference) =>{
                            return <li ><input type="checkbox" className="checkPreference" value={preference} onChange={(e) => console.log(e.target.value)} /><label for={preference} className="preference">{preference}</label></li> 
                            })}
                        </ul>
                    </div>
                    <button className="preferencesButton"> Buscar</button>
                </div>
                <div className="immovableDiv">
                    <ImmovableCard></ImmovableCard>
                </div>
                    
           
        </Fragment>
    )
}

