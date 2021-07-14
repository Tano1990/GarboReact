//import react from 'react'
import * as ReactBootStrap from "react-bootstrap";
import CartWidget from "./CartWidget";
export default function Navbar(){
return(
<>
 <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="info">
  <ReactBootStrap.Navbar.Brand className="text-warning font-weight-bold" href="#home">GARBO</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.NavDropdown title={<span className="text-warning">PRODUCTOS</span>} id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Difusores</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Velas Aromáticas</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Shampoos y Acondicionadores Sólidos</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider/>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Kits SPA</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Item className="text-warning mr-3" href="#deets">ENVIOS</ReactBootStrap.Nav.Item>
      <ReactBootStrap.Nav.Item className="text-warning mr-2" eventKey={2} href="#memes">CONTACTO</ReactBootStrap.Nav.Item>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav.Item className="mt-2" href="#pricing"><CartWidget/></ReactBootStrap.Nav.Item>
  </ReactBootStrap.Navbar.Collapse>
 </ReactBootStrap.Navbar>
</>
)
}