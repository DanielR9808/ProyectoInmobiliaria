import React from 'react'
import './immovableCard.css'

export default function immovableCard() {
    return (
    <div className="immovable">
        <div className="imageDiv">
        <img></img>
        </div>

        <h5 className="immovableTitle"> Apartamento en venta, alguna parte </h5>
            <div className="dataDiv">
                <p className="nameLabel">Precio de Venta</p >
                <p className="dataLabel"> $200.000.000</p>
            </div>
            <div className="dataDiv">
                <p className="nameLabel">Area construida</p>
                <p className="dataLabel">70.0 m2</p>
            </div>
            <div className="dataDiv">
                <p className="nameLabel">Hab</p>
                <p className="dataLabel">2</p>
            </div>
            <div className="dataDiv">
                <p className="nameLabel">Baños</p>
                <p className="dataLabel">2</p>
            </div>
            <div className="dataDiv">
                <p className="nameLabel">Garajes</p>
                <p className="dataLabel">1</p>
            </div>
            <div className="shareDiv">
                <div className="shareAux">
                    <img></img>
                    <p className="shareLabel">Favorito</p>
                </div>
                <div className="shareAux">
                    <img></img>
                    <p className="shareLabel">Mas detalles</p>  
                </div>
                <button className="shareButton">Contactar</button>

            </div>
    </div>

    )
}