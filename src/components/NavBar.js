import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";

export default class NavBar extends Component {
    render() {
        return (
            <>
            <div>
                <Navbar className="navBar-bg" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Sendu</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
                                <NavDropdown title="Productos" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Correspondencia</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Paquetería</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Librería</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <CartWidget/>
                    </Container>
                    
                </Navbar>
            </div>
            </>
        );
    }
}
