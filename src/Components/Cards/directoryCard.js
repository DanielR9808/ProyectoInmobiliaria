import React from 'react'
import './directoryCard.css'

export default function directoryCard() {
        return (
        <div className = "contact">
          <div className="imageandInfo">
            <div className="enterpriseLogoDiv">
              <image className="enterpriseLogo" id="aqui se pasa el prop de la imagen"/>
            </div>
            <h className="cardTitle">Bareta SAS</h>
            <p>Bogota DC</p>
            </div>
          <ul className="dataList" >
            <li>Calle falsa 123</li>
            <li>123456789</li>
            <li>baretasas@gmail.com</li>
          </ul>
      </div>
        )
} 