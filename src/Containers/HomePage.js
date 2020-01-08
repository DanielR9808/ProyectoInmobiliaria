import React, { useState} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrincipalSearch from '../Components/PrincipalSearch/PrincipalSearch'

<<<<<<< HEAD
export default function HomePage({ updateSearchingProps}) {
    return (
        <>
            <div>
                <PrincipalSearch updateSearchingProps={updateSearchingProps}></PrincipalSearch>
            </div>
=======
import ImmovableComp from '../Containers/immovableComp'

export default function HomePage() {
    return (
        <>
            <Router>
                <Nav></Nav>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/inmuebles" component={ImmovableComp}></Route>
                </Switch>
            </Router>
            <PrincipalSearch></PrincipalSearch>    
>>>>>>> master
        </>
    )
}
