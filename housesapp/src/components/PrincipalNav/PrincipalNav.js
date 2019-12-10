import React, { Component } from "react";
import {Nav, Navbar, Button, Form,FormControl} from "react-bootstrap";
import { Link } from 'react-router-dom'

class PrincipalNav extends Component {


render(){
    return(

    <Nav  fill variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/SearchComponent">Buscar</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
   </Nav.Item>
        
  </Nav>
  
    )
}

}

export default PrincipalNav;