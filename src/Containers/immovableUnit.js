import React,{ useState, Fragment, useEffect} from 'react'

import './immovableUnit.css'
import axios from 'axios'

function renderPhotos(immo){
    return(
        <div className="carrousel">
            aqui va el carrusel con foteiros
        </div>
    )
}

function renderPrincipalSpecs(immo){
    return(
        <div className="immovableSpecs">
            <div className="priceDiv">
                <label className="specTitle">Valor venta</label>
                <label className="spec">{"$ "+immo.RentCost}</label>
            </div>
            <div className="priceDiv">
            <div className="specDiv">
                <label className="specTitle">Área construida</label>
                <label className="spec">{immo.BuiltArea +" m2"}</label>
            </div>
            <div className="specDiv">
                <label className="specTitle">Habitaciones</label>
                <label className="spec">{immo.Bedrooms}</label>
            </div>
            </div>
           <div className="priceDiv">
           <div className="specDiv">
                <label className="specTitle">Baños</label>
                <label className="spec">{immo.Bathrooms}</label>
            </div>
            <div className="specDiv">
                <label className="specTitle">Parqueaderos</label>
                <label className="spec">{immo.Parking}</label>
            </div>
           </div>
          
        </div>)
}

function renderDescription(immo){
    return(
        <div className="immovableDetails">
        <h3 className="descriptionTitle">Lo más destacado del inmueble</h3>
        <p className="descriptionBody">{immo.Details}</p>
    </div>

    )
   
}
function renderGeneralDescription(immo){
    return(
        <div className="generalDescription">
            <h3 className="descriptionTitle">Datos principales del proyecto</h3>
            <div className="featureDiv">
                <label className="featureTitle">Código web:</label>
                <label className="feature">{immo.WebId}</label>
                <label className="featureTitle">Estrato</label>
                <label className="feature">5</label>{/*agregar a database*/}
                <label className="featureTitle">Área privada</label>
                <label className="feature">{immo.PrivateArea}</label>
                <label className="featureTitle">Moneda</label>
                <label className="feature">{immo.Currency}</label>
            </div>
            <div className="featureDiv">
                <label className="featureTitle">Barrio</label>
                <label className="feature">{immo.Neighbourhood}</label>
                <label className="featureTitle">Valor</label>
                <label className="feature">{"$ "+immo.RentCost}</label>
                <label className="featureTitle">Tiempo de construido</label>
                <label className="feature">{immo.BuiltTime}</label>
                <label className="featureTitle">Vigilancia</label>
                <label className="feature">24 hrs</label>{/*agregar a base de datos*/}
            </div>
            <div className="featureDiv">
                <label className="featureTitle">Barrio catastral</label>
                <label className="feature">{immo.Zone}</label>
                <label className="featureTitle">Área construida</label>
                <label className="feature">{immo.BuiltArea}</label>
                <label className="featureTitle">Etapa construcción</label>
                <label className="feature">Construido</label>{/*agregar a la base de datos*/}
                <label className="featureTitle">Parqueadero Visistantes</label>
                <label className="feature">Si</label>{/*agregar a base de datos*/}
            </div>
        </div>
    )
}

function renderCommonAreas(immo){
   var commonAreas=immo.CommonAreas
   console.log(commonAreas)
    return(
        <div className="commonAreas">
            <h3 className="descriptionTitle">Áreas comunes y recreación</h3>
            <div className="featureDiv">
            <ul className="commonPlaces">
           {commonAreas.map((obj,index)=>
           
                <li key={index}>{obj}</li>
          
           )} 
            </ul>
                
            </div>
        </div>
    )
}
export default function immovableUnit (props){
    const [immovable,setImmovable]=useState()
    const immovableId=props.match.params.id
 //cambiar a class based component
  
   
    useEffect(()=>{
        let cancel
        
            axios.get('/api/immovable/'+immovableId,{
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            .then(res =>{
                setImmovable(res.data[0])
            })
            .catch(error => {
                console.log(error)
        
            })
            return()=>cancel()
        
    },['/api/immovable/'+immovableId])
   
    console.log(immovable)
    

   

    return(
    <Fragment>
       
        <div className="immovableViewContent">
        
            {immovable?renderPhotos(immovable):
            <div className="SpinnerDiv"><div className="lds-facebook"><div></div><div></div><div></div></div></div>}

            {immovable?renderPrincipalSpecs(immovable):
            <div className="SpinnerDiv"><div className="lds-facebook"><div></div><div></div><div></div></div></div>}
            
            {immovable?renderDescription(immovable):
            <div className="SpinnerDiv"><div className="lds-facebook"><div></div><div></div><div></div></div></div>}
        
        
            {immovable? renderGeneralDescription(immovable):
             <div className="SpinnerDiv"><div className="lds-facebook"><div></div><div></div><div></div></div></div>}
        
            {immovable? renderCommonAreas(immovable):
            <div className="SpinnerDiv"><div className="lds-facebook"><div></div><div></div><div></div></div></div>}
    </div>
    </Fragment>
    
        
    )
}