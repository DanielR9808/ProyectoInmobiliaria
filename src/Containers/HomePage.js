import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from '../Components/Nav/Nav'
import Login from '../Components/LoginRegister/Login'
import Register from '../Components/LoginRegister/Register'
import PrincipalSearch from '../Components/PrincipalSearch/PrincipalSearch'
import proveShit from '../Components/Proves/proveShit.js'
import directoryCard from '../Components/Cards/directoryCard.js'

export default function HomePage() {
    
    return (
        <>
            <Router>
                <Nav></Nav>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/shit" component={proveShit}></Route>
                    <PrincipalSearch></PrincipalSearch>
                    <directoryCard></directoryCard>
                </Switch>
            </Router>
            
        </>
    )
}
