import React from 'react';


import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";

const PokeNavbar = () => {

    // Pokédex


  return (
    <div id="background-pokemon"> 
      <div id="background-white" className="container">

        <>
        <Navbar bg="dark" variant="dark">
          <div className="container">
            <Navbar.Brand href="#home">Pokemon Team Maker!</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="pay2Win">Upgrade To Pro</Nav.Link>
              <Nav.Link href="Forms">Forms</Nav.Link>
              <Nav.Link href="TeamMaker">Team Maker</Nav.Link>
              <Nav.Link href="Pokédex">Pokédex</Nav.Link>
            </Nav>
            
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="SignIn">Sign In</Nav.Link>
            <Nav.Link href="SignUp">Sign Up</Nav.Link>
              <Navbar.Text>
                Signed in as: <a href="SignIn">Guest User</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </div>
        </Navbar>
    
  </>

      </div>
    </div>
  )
}



export default PokeNavbar