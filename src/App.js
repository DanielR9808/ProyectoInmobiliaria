import React, { useState, Fragment, useEffect} from 'react'
import HomePage from './Containers/HomePage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Components/Nav/Nav'
import Login from './Components/LoginRegister/Login'
import Register from './Components/LoginRegister/Register'
import proveShit from './Components/Proves/proveShit.js'
import ImmovablePage from './Containers/Immovable'
import axios from 'axios'
import SeederImmovable from './Schemas/SeederImmovable'

import './App.css'

export default function App() {


  const searchingPropsObject = {
    purchaseType: "",
    immovableType: "",
    area: ""
  }

  const [searchingProps, setSearchingProps] = useState(searchingPropsObject)

  const updateSearchingProps = (propsObject) => {
    return setSearchingProps(propsObject)
  }

  //DESCOMENTAR PARA ANADIR DATOS RANDOM A LA BASE DE DATOS
  //PREVIAMENTE INICIAR mongo y mongod EN DOS CMD PARA INICIAR LA BASE DE DATOS
/*   const preferences = ["Amoblado", "Zona para niños", "Gimnasio", "Cancha(s) de Squash", "Acceso para discapacitados"
    , "Piscina", "Zonas verdes", "Cancha(s) de tennis", "Cancha(s) de fútbol", "Cancha(s) de Basket", "Verificado"
    , "Cerca Transporte Público", "Cerca a Centros Comerciales", "Cerca a Parques", "Cerca a Supermercados", "Cerca a colegios / universidades"
    , "Zona de BBQ", "Ascensor", "Con Balcón", "Con Vigilancia", "En conjunto cerrado", "Cuarto de servicio", "Con chimenea"
    , "Con deposito", "Con zona de lavandería", "Se permiten mascotas", "Se permite fumar"]
    
  useEffect(() => {
    const randomImmovable = SeederImmovable(40, ["apartamento", "casa", "lote"], preferences,["Compra nuevo", "Compra usado", "Compra nuevo y usado","Arriendo"],["lugar 1", "lugar 2", "lugar 3"])
    randomImmovable.forEach(immovable => {
      axios.post('/api/immovable', immovable)
        .then(res => { console.log(res) })
    });  
}, []) */

  return (
    <Fragment>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact="true">
            <HomePage updateSearchingProps={updateSearchingProps}></HomePage>
          </Route>
          <Route path="/inmuebles">
            <ImmovablePage searchingProps={searchingProps} > </ImmovablePage>
          </Route>
          <Route path="/login/" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/shit" component={proveShit}></Route>
        </Switch>
      </Router>
    </Fragment>
  )
}
