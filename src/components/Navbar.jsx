//import react from 'react'
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import CartWidget from "./CartWidget";
export default function Navbar(){
return(
<>
 <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="info">
 <Link to="/"><ReactBootStrap.Navbar.Brand className="text-warning font-weight-bold" href="#home">GARBO</ReactBootStrap.Navbar.Brand></Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
    <Link to="/Productos"><ReactBootStrap.Nav.Item className="text-warning mt-2">PRODUCTOS</ReactBootStrap.Nav.Item></Link>
        <ReactBootStrap.NavDropdown title={<span className="text-warning"></span>} id="collasible-nav-dropdown">
        <Link to="/Productos/Difusores"><ReactBootStrap.NavDropdown.Item href="#action/3.1">Difusores</ReactBootStrap.NavDropdown.Item></Link>
        <Link to="/Productos/Velas-Aromaticas"><ReactBootStrap.NavDropdown.Item href="#action/3.2">Velas Aromáticas</ReactBootStrap.NavDropdown.Item></Link>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Shampoos y Acondicionadores Sólidos</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider/>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Kits SPA</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <Link to="/ENVIOS"><ReactBootStrap.Nav.Item className="text-warning mr-3">ENVIOS</ReactBootStrap.Nav.Item></Link>
    <Link to="/CONTACTO"><ReactBootStrap.Nav.Item className="text-warning mr-3">CONTACTO</ReactBootStrap.Nav.Item></Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav.Item className="mt-2" href="#pricing"><CartWidget/></ReactBootStrap.Nav.Item>
  </ReactBootStrap.Navbar.Collapse>
 </ReactBootStrap.Navbar>
</>
)
}
