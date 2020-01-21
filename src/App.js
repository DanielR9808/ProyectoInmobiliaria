import React, { useState, Fragment, useEffect} from 'react'
import HomePage from './Containers/HomePage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Components/Nav/Nav'
import ImmovablePage from './Containers/Immovable'
import ImmovableUnit from './Containers/immovableUnit.js'

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

          <Route path="/"  exact={true} render={() =><HomePage updateSearchingProps={updateSearchingProps}></HomePage>}></Route>

          <Route path="/inmuebles"  render={() =>
            <ImmovablePage searchingProps={searchingProps} > </ImmovablePage>
          }></Route>
         
          
        </Switch>
        <Route path="/immovableUnit/:id" component={ImmovableUnit}></Route>
      </Router>
    </Fragment>
  )
}
