import React,{ useState, Fragment, useEffect} from 'react'
import './immovableUnit.css'
import axios from 'axios'

export default function immovableUnit(props){

    const [immovable,setImmovable]= useState()
    const immovableId= props.match.params.id

    useEffect(()=>{
        axios.get("api/immovable/"+immovableId)
        .then(res=>{
            
            console.log(res)
            
        })
    })
   console.log(props.match.params.id)
    return(

    <div className="immovableViewContent">
        <div className="carrousel">
            aqui va el carrusel con foteiros
        </div>
        <div className="immovableSpecs">
            <div className="priceDiv">
                <label className="specTitle">Valor venta</label>
                <label className="specPrice">{immovable.RentCost}</label>
            </div>
            <div className="priceDiv">
            <div className="specDiv">
                <label className="specTitle">Área construida</label>
                <label className="spec"></label>
            </div>
            <div className="specDiv">
                <label className="specTitle">Habitaciones</label>
                <label className="spec"></label>
            </div>
            </div>
           <div className="priceDiv">
           <div className="specDiv">
                <label className="specTitle">Baños</label>
                <label className="spec"></label>
            </div>
            <div className="specDiv">
                <label className="specTitle">Parqueaderos</label>
                <label className="spec"></label>
            </div>
           </div>
          
        </div>
        <div className="immovableDetails">
            <h3 className="descriptionTitle">Lo más destacado del inmueble</h3>
            <p className="descriptionBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
            id est laborum.</p>
            <img className="reportImg"></img>
            
        </div>
        <label className="report">Reportar</label>
        <div className="generalDescription">
            <h3 className="descriptionTitle">Datos principales del proyecto</h3>
            <div className="featureDiv">
                <label className="featureTitle">Código web:</label>
                <label className="feature"></label>
                <label className="featureTitle">Estrato</label>
                <label className="feature"></label>
                <label className="featureTitle">Área privada</label>
                <label className="feature"></label>
                <label className="featureTitle">Moneda</label>
                <label className="feature"></label>
            </div>
            <div className="featureDiv">
                <label className="featureTitle">Nombre Común del barrio</label>
                <label className="feature"></label>
                <label className="featureTitle">Valor</label>
                <label className="feature"></label>
                <label className="featureTitle">Tiempo de construido</label>
                <label className="feature"></label>
                <label className="featureTitle">Vigilancia</label>
                <label className="feature"></label>
            </div>
            <div className="featureDiv">
                <label className="featureTitle">Nombre del barrio catastral</label>
                <label className="feature"></label>
                <label className="featureTitle">Área construida</label>
                <label className="feature"></label>
                <label className="featureTitle">Etapa de construcción</label>
                <label className="feature"></label>
                <label className="featureTitle">Parqueadero de visistantes</label>
                <label className="feature"></label>
            </div>
        </div>
        <div className="commonAreas">
            <h3 className="descriptionTitle">Áreas comunes y recreación</h3>
            <div className="featureDiv">
                <ul className="commonPlaces">
                    <li>Transporte publico</li>
                    <li>Jardin</li>
                    <li>Sendero peatonal</li>
                    <li>Zonas verdes</li>
                    <li>Salon comunal</li>
                    <li>Zona BBQ</li>
                    <li>Conjunto cerrado</li>
                </ul>
            </div>
        </div>
    </div>
        
    )
}