import React from 'react'
import './immovableCard.css'
export default function immovableCard() {
    return (
       <div className ="immovable">
            <table>
                <td><div className="imageDiv"></div></td>
                <th className="titleCard">Apartamento en venta, algun sitio</th>
            </table>
            <table className="tableData">
                
                <tr>
                    <th className="dataRow">Precio de venta</th>
                    <th className="dataRow">Area Construida</th>
                    <th className="dataRow">Hab</th>
                    <th className="dataRow">Baños</th>
                    <th className="dataRow">Garajes</th>
                </tr>
                <tr>
                    <td className="dataRow">$500.000.000</td>
                    <td className="dataRow">200 m2</td>
                    <td className="dataRow">3</td>
                    <td className="dataRow">2</td>
                    <td className="dataRow">1</td>
                </tr>
                <tr>
                    <td className="dataRow"><img></img> Favorito</td>
                    <td className="dataRow"><img></img> Mas detalles</td>
                    <td ><button>Contactar</button></td>
                </tr>
            </table>
           
       </div>
    )
}