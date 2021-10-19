import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import icon from '../../../Images/icon.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top" >
                <Container>
                    <img height="25px" width="25px" src={icon} alt="Icon" />&nbsp;Medicare
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="header-link" href="#home">Home</Nav.Link>
                            <Nav.Link className="header-link" href="#doctors">Doctors</Nav.Link>
                            <Nav.Link className="header-link" href="#about">About</Nav.Link>
                            <Nav.Link className="header-link" href="#contact">Contact</Nav.Link>
                            <Nav.Link className="header-link mb-5" href="#login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;