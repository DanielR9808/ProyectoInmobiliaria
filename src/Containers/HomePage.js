import React, { useState, Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrincipalSearch from '../Components/PrincipalSearch/PrincipalSearch'

import ImmovableComp from '../Containers/immovableComp'

export default function HomePage() {
    return (
        <>
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
                    <Fragment>
            <div>
                <PrincipalSearch updateSearchingProps={updateSearchingProps}></PrincipalSearch>
            </div>
        </Fragment>    
                </Switch>
            </Router>
            
        </>
    )

}
