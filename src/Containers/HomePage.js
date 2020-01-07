import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from '../Components/Nav/Nav'
import Login from '../Components/LoginRegister/Login'
import Register from '../Components/LoginRegister/Register'
import PrincipalSearch from '../Components/PrincipalSearch/PrincipalSearch'

import immovableComp from '../Containers/immovableComp'

export default function HomePage() {
    return (
        <>
            <Router>
                <Nav></Nav>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/inmuebles" component={immovableComp}></Route>
                </Switch>
            </Router>
            <PrincipalSearch></PrincipalSearch>    
        </>
    )
}
