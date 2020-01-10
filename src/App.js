import React, { useState, Fragment, useEffect} from 'react'
import HomePage from './Containers/HomePage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Components/Nav/Nav'
import Login from './Components/LoginRegister/Login.js'
import Register from './Components/LoginRegister/Register'
import proveShit from './Components/Proves/proveShit.js'
import ImmovablePage from './Containers/Immovable'

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
          <Route path="/login" render ={()=> (
            <div>
             <Login/>
            </div>
          )}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/shit" component={proveShit}></Route>
        </Switch>
      </Router>
    </Fragment>
  )
}
