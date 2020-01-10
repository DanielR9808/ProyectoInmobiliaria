import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from '../Components/Nav/Nav'
import Login from '../Components/LoginRegister/Login'
import Register from '../Components/LoginRegister/Register'
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
                    <PrincipalSearch></PrincipalSearch>    
                </Switch>
            </Router>
            
        </>
    )
}
