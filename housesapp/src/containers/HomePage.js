import React, { Component } from "react";
import Navbar from '../components/NavBar/NavBar.js'
import PrincipalNav from '../components/PrincipalNav/PrincipalNav.js'
import classes from './HomePage.css'
import {BrowserRouter,Route} from 'react-router-dom'
import PrincipalSearch from '../components/PrincipalSearch/PrincipalSearch.js'
class HomePage extends Component {

    render(){
        return(
        <BrowserRouter>
        <div>
            <Navbar/>

            <div className={classes.PrincipalNavContainer}>
                <PrincipalNav/>
                    <Route path="/SearchComponent" render={()=>(
                        <div>
                            <PrincipalSearch/>
                        </div>  
                    )}/>

                   
                
            </div>

        </div>
        </BrowserRouter>
            
            
        )
    }

}

export default HomePage;