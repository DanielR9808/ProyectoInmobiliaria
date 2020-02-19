import React, { useState, Fragment, useEffect} from 'react'
import HomePage from './Containers/HomePage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Components/Nav/Nav'
import ImmovablePage from './Containers/Immovable'
import ImmovableUnit from './Containers/immovableUnit.js'
import Proving from './Components/Proves/proveShit'
import Map from './Components/Maps/TestingMap.js'
import './App.css'

export default function App() {


 

  
  return (
    <Fragment>
      <Router>
      <Nav></Nav>
        <Switch>

          <Route path="/"  exact={true} render={() =><HomePage ></HomePage>}></Route>

          <Route path="/inmuebles"  render={() =>
            <ImmovablePage > </ImmovablePage>
          }></Route>
         
          <Route path="/Test" component={Proving}></Route> 
        </Switch>
       
        <Route path="/immovableUnit/:id" component={ImmovableUnit}></Route>
      </Router>
    </Fragment>
  )
}
