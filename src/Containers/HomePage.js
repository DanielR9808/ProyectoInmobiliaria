import React, { useState, Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrincipalSearch from '../Components/PrincipalSearch/PrincipalSearch'

import ImmovableComp from './Immovable'

export default function HomePage() {
    return (
    <Fragment>
            <Router>
                <Nav></Nav>
                <Switch>
                    <Route path="/login" render={()=>(
                       <Login/>   
                    )}></Route>
                    <Route path="/register" render={()=>(
                       <Register/>   
                    )}></Route>
                    <Route path="/inmuebles" render={()=>(
                       <ImmovableComp/>   
                    )}></Route>
                  
            <div>
                <PrincipalSearch updateSearchingProps={updateSearchingProps}></PrincipalSearch>
            </div>
        
                </Switch>
            </Router>
            
        </Fragment>
    )

}
